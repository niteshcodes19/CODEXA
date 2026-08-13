const express = require('express');
const router = express.Router();
const User = require('../model/user');
const Submission = require('../model/submission');
const Question = require('../model/questions');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../config/jwt');
const { authenticateUser, optionalAuthenticateUser } = require('../middleware/auth');
const { sortLeaderboardEntries, assignRanks, buildUserEntry } = require('../utils/rankings');

// POST /register
router.post('/register', async (req, res) => {
    try {
        const name = req.body.name?.trim();
        const email = req.body.email?.trim().toLowerCase();
        const phone = req.body.phone?.trim();
        const password = req.body.password;

        if (!name || !email || !phone || !password) {
            return res.status(400).json({ error: 'All fields are required' });
        }

        if (password.length < 6) {
            return res.status(400).json({ error: 'Password must be at least 6 characters' });
        }
        
        let user = await User.findOne({ email });
        if (user) return res.status(400).json({ error: 'User already exists' });
        
        const hashedPassword = await bcrypt.hash(password, 12);
        
        user = await User.create({
            name, email, phone, password: hashedPassword
        });
        
        res.status(201).json({ message: 'User registered successfully' });
    } catch (err) {
        if (err.code === 11000) {
            return res.status(400).json({ error: 'User already exists' });
        }
        res.status(500).json({ error: err.message });
    }
});

// POST /login
router.post('/login', async (req, res) => {
    try {
        const email = req.body.email?.trim().toLowerCase();
        const password = req.body.password;

        if (!email || !password) {
            return res.status(400).json({ error: 'Email and password are required' });
        }
        
        const user = await User.findOne({ email });
        if (!user) return res.status(401).json({ error: 'Invalid credentials' });
        if (user.status === 'banned') return res.status(403).json({ error: 'User is banned' });
        
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(401).json({ error: 'Invalid credentials' });
        
        const token = jwt.sign(
            { id: user._id, role: 'user', type: 'user' },
            JWT_SECRET,
            { expiresIn: '7d' }
        );
        
        res.json({ token, user: { id: user._id, name: user.name, email: user.email } });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// GET /leaderboard (public; highlights current user when logged in)
router.get('/leaderboard', optionalAuthenticateUser, async (req, res) => {
    try {
        const totalQuestions = await Question.countDocuments();

        const submissionStats = await Submission.aggregate([
            {
                $group: {
                    _id: '$user',
                    totalSubmissions: { $sum: 1 },
                    acceptedSubmissions: {
                        $sum: { $cond: [{ $eq: ['$status', 'Accepted'] }, 1, 0] }
                    },
                    acceptedRuntimeSum: {
                        $sum: { $cond: [{ $eq: ['$status', 'Accepted'] }, '$runtime', 0] }
                    }
                }
            }
        ]);

        const statsMap = new Map(
            submissionStats.map((stat) => [stat._id.toString(), stat])
        );

        const users = await User.find({ status: { $ne: 'banned' } })
            .select('name solved_questions createdAt')
            .lean();

        const entries = users.map((user) =>
            buildUserEntry(user, statsMap.get(user._id.toString()), totalQuestions)
        );

        const ranked = assignRanks(sortLeaderboardEntries(entries));

        const leaderboard = ranked.map(({ userId, name, rank, solvedCount, totalQuestions: total, solvedAll, accuracy, avgRuntime, totalSubmissions }) => ({
            rank,
            name,
            solvedCount,
            totalQuestions: total,
            solvedAll,
            accuracy,
            avgRuntime,
            totalSubmissions,
            isCurrentUser: req.user?.id === userId
        }));

        const response = {
            totalQuestions,
            rankingCriteria: [
                'Problems solved (highest first)',
                'Submission accuracy %',
                'Average runtime on accepted solutions (lower is better)',
                'Fewer total submissions',
                'Earlier member (first to achieve)'
            ],
            leaderboard
        };

        if (req.user?.type === 'user') {
            const current = leaderboard.find((entry) => entry.isCurrentUser);
            if (current) {
                response.currentUserRank = current;
            }
        }

        res.json(response);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// PUT /profile
router.put('/profile', authenticateUser, async (req, res) => {
    try {
        const name = req.body.name?.trim();
        if (!name) return res.status(400).json({ error: 'Name is required' });

        const user = await User.findByIdAndUpdate(
            req.user.id,
            { name },
            { new: true }
        ).select('-password');

        if (!user) return res.status(404).json({ error: 'User not found' });
        res.json(user);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// PUT /password
router.put('/password', authenticateUser, async (req, res) => {
    try {
        const { currentPassword, newPassword } = req.body;
        if (!currentPassword || !newPassword) {
            return res.status(400).json({ error: 'Current and new password are required' });
        }
        if (newPassword.length < 6) {
            return res.status(400).json({ error: 'New password must be at least 6 characters' });
        }

        const user = await User.findById(req.user.id);
        if (!user) return res.status(404).json({ error: 'User not found' });

        const isMatch = await bcrypt.compare(currentPassword, user.password);
        if (!isMatch) return res.status(401).json({ error: 'Current password is incorrect' });

        user.password = await bcrypt.hash(newPassword, 12);
        await user.save();

        res.json({ message: 'Password updated successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// GET /profile
router.get('/profile', authenticateUser, async (req, res) => {
    try {
        const user = await User.findById(req.user.id).select('-password');
        if (!user) return res.status(404).json({ error: 'User not found' });

        // Drop stale question refs (e.g. after re-seed) so stats stay accurate
        const validQuestions = await Question.find(
            { _id: { $in: user.solved_questions } },
            'title question_number level'
        );
        const validIds = validQuestions.map((q) => q._id);
        if (validIds.length !== user.solved_questions.length) {
            user.solved_questions = validIds;
            user.total_question = validIds.length;
            await user.save();
        }

        const stats = {
            total: validQuestions.length,
            easy: validQuestions.filter((q) => q.level === 'Easy').length,
            medium: validQuestions.filter((q) => q.level === 'Medium').length,
            hard: validQuestions.filter((q) => q.level === 'Hard').length
        };

        res.json({
            ...user.toObject(),
            solved_questions: validQuestions,
            stats
        });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// GET /submissions
router.get('/submissions', authenticateUser, async (req, res) => {
    try {
        const submissions = await Submission.find({ user: req.user.id })
            .populate('question', 'title question_number')
            .sort('-createdAt')
            .lean();

        const formatted = submissions.map((sub) => ({
            ...sub,
            question_title: sub.question?.title || sub.question_title || '',
            question_number: sub.question?.question_number || sub.question_number || 0,
            question: sub.question || (sub.question_title ? {
                title: sub.question_title,
                question_number: sub.question_number
            } : null)
        }));

        res.json(formatted);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;