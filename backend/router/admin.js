const express = require('express');
const router = express.Router();
const Admin = require('../model/admin');
const Question = require('../model/questions');
const User = require('../model/user');
const Submission = require('../model/submission');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../config/jwt');
const { authenticateAdmin } = require('../middleware/auth');

// POST /login
router.post('/login', async (req, res) => {
    try {
        const email = req.body.email?.trim().toLowerCase();
        const password = req.body.password;

        if (!email || !password) {
            return res.status(400).json({ error: 'Email and password are required' });
        }

        const admin = await Admin.findOne({ email });
        
        if (!admin) return res.status(401).json({ error: 'Invalid credentials' });
        
        const isMatch = await bcrypt.compare(password, admin.password);
        if (!isMatch) return res.status(401).json({ error: 'Invalid credentials' });
        
        const token = jwt.sign(
            { id: admin._id, role: admin.role, type: 'admin' },
            JWT_SECRET,
            { expiresIn: '1d' }
        );
        
        res.json({ token, admin: { id: admin._id, name: admin.name, email: admin.email, role: admin.role } });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// All below require admin auth
router.use(authenticateAdmin);

// POST /upload-question
router.post('/upload-question', async (req, res) => {
    try {
        const maxQuestion = await Question.findOne().sort('-question_number').select('question_number');
        const nextNumber = (maxQuestion?.question_number || 0) + 1;

        const question = await Question.create({
            ...req.body,
            question_number: nextNumber
        });
        res.status(201).json(question);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// PUT /update-question/:id
router.put('/update-question/:id', async (req, res) => {
    try {
        const existing = await Question.findById(req.params.id);
        if (!existing) return res.status(404).json({ error: 'Question not found' });

        const { question_number, ...updateData } = req.body;
        const question = await Question.findByIdAndUpdate(
            req.params.id,
            { ...updateData, question_number: existing.question_number },
            { new: true }
        );
        res.json(question);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// DELETE /delete-question/:id
router.delete('/delete-question/:id', async (req, res) => {
    try {
        const question = await Question.findByIdAndDelete(req.params.id);
        if (!question) return res.status(404).json({ error: 'Question not found' });
        res.json({ message: 'Question deleted successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// GET /all-questions
router.get('/all-questions', async (req, res) => {
    try {
        const questions = await Question.find();
        res.json(questions);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// GET /question/:id
router.get('/question/:id', async (req, res) => {
    try {
        const question = await Question.findById(req.params.id);
        if (!question) return res.status(404).json({ error: 'Question not found' });
        res.json(question);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// GET /dashboard-stats
router.get('/dashboard-stats', async (req, res) => {
    try {
        const totalQuestions = await Question.countDocuments();
        const totalUsers = await User.countDocuments();
        const totalSubmissions = await Submission.countDocuments();
        
        res.json({ totalQuestions, totalUsers, totalSubmissions });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;