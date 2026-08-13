const dns = require("dns");

dns.setServers([
    "8.8.8.8",
    "1.1.1.1"
]);
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDb = require('./config/db');
const adminRouter = require('./router/admin');
const userRouter = require('./router/user');
const questionRouter = require('./router/questions');
const superadminRouter = require('./router/superadmin');
const bcrypt = require('bcryptjs');
const Admin = require('./model/admin');

const app = express();

// Database connection
connectDb();

// Middleware
app.use(cors());
app.use(express.json({ limit: '10mb' }));

// Routes
app.use('/api/admin', adminRouter);
app.use('/api/auth', userRouter);
app.use('/api/questions', questionRouter);
app.use('/api/superadmin', superadminRouter);

// Health check
app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Seed default admin accounts
const seedDefaultAdmins = async () => {
    try {
        const existingSuper = await Admin.findOne({ role: 'superadmin' });
        if (!existingSuper) {
            const hashedPassword = await bcrypt.hash('superadmin123', 12);
            await Admin.create({
                name: 'Super Admin',
                email: 'superadmin@leetcode.com',
                password: hashedPassword,
                role: 'superadmin'
            });
            console.log('Default superadmin created: superadmin@leetcode.com / superadmin123');
        }

        const existingAdmin = await Admin.findOne({ role: 'admin' });
        if (!existingAdmin) {
            const hashedPassword = await bcrypt.hash('admin123', 12);
            await Admin.create({
                name: 'Admin',
                email: 'admin@leetcode.com',
                password: hashedPassword,
                role: 'admin'
            });
            console.log('Default admin created: admin@leetcode.com / admin123');
        }
    } catch (error) {
        console.error('Error seeding admins:', error.message);
    }
};

seedDefaultAdmins();

const port = process.env.PORT || 8000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
