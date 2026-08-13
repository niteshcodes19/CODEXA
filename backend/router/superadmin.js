const express = require('express');
const router = express.Router();
const Admin = require('../model/admin');
const User = require('../model/user');
const Question = require('../model/questions');
const Submission = require('../model/submission');
const bcrypt = require('bcryptjs');
const { authenticateAdmin, authorize } = require('../middleware/auth');

// All routes here require superadmin privileges
router.use(authenticateAdmin, authorize('superadmin'));

// GET /admins
router.get('/admins', async (req, res) => {
    try {
        const admins = await Admin.find().select('-password');
        res.json(admins);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// POST /create-admin
router.post('/create-admin', async (req, res) => {
    try {
        const { name, email, password, role } = req.body;
        
        const existing = await Admin.findOne({ email });
        if (existing) return res.status(400).json({ error: 'Admin already exists' });
        
        const hashedPassword = await bcrypt.hash(password, 12);
        
        const admin = await Admin.create({
            name, email, password: hashedPassword, role: role || 'admin'
        });
        
        const adminResponse = admin.toObject();
        delete adminResponse.password;
        
        res.status(201).json(adminResponse);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// PUT /update-admin/:id
router.put('/update-admin/:id', async (req, res) => {
    try {
        const updates = { ...req.body };
        if (updates.password) {
            updates.password = await bcrypt.hash(updates.password, 12);
        }
        
        const admin = await Admin.findByIdAndUpdate(req.params.id, updates, { new: true }).select('-password');
        if (!admin) return res.status(404).json({ error: 'Admin not found' });
        
        res.json(admin);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// DELETE /delete-admin/:id
router.delete('/delete-admin/:id', async (req, res) => {
    try {
        if (req.params.id === req.user.id) {
            return res.status(400).json({ error: 'Cannot delete yourself' });
        }
        
        const admin = await Admin.findByIdAndDelete(req.params.id);
        if (!admin) return res.status(404).json({ error: 'Admin not found' });
        
        res.json({ message: 'Admin deleted successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// GET /users
router.get('/users', async (req, res) => {
    try {
        const users = await User.find().select('-password');
        res.json(users);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// PUT /ban-user/:id
router.put('/ban-user/:id', async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.id, { status: 'banned' }, { new: true }).select('-password');
        if (!user) return res.status(404).json({ error: 'User not found' });
        res.json(user);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// PUT /unban-user/:id
router.put('/unban-user/:id', async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.id, { status: 'active' }, { new: true }).select('-password');
        if (!user) return res.status(404).json({ error: 'User not found' });
        res.json(user);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// DELETE /delete-user/:id
router.delete('/delete-user/:id', async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id);
        if (!user) return res.status(404).json({ error: 'User not found' });
        res.json({ message: 'User deleted successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// GET /dashboard-stats
router.get('/dashboard-stats', async (req, res) => {
    try {
        const totalAdmins = await Admin.countDocuments();
        const totalUsers = await User.countDocuments();
        const bannedUsers = await User.countDocuments({ status: 'banned' });
        const totalQuestions = await Question.countDocuments();
        const totalSubmissions = await Submission.countDocuments();
        const acceptedSubmissions = await Submission.countDocuments({ status: 'Accepted' });
        
        res.json({
            totalAdmins,
            totalUsers,
            bannedUsers,
            totalQuestions,
            totalSubmissions,
            acceptedSubmissions
        });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
