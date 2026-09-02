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
                email: 'superadmin@codexa.dev',
                password: hashedPassword,
                role: 'superadmin'
            });
            console.log('Default superadmin created: superadmin@codexa.dev / superadmin123');
        }

        const existingAdmin = await Admin.findOne({ role: 'admin' });
        if (!existingAdmin) {
            const hashedPassword = await bcrypt.hash('admin123', 12);
            await Admin.create({
                name: 'Admin',
                email: 'admin@codexa.dev',
                password: hashedPassword,
                role: 'admin'
            });
            console.log('Default admin created: admin@codexa.dev / admin123');
        }
    } catch (error) {
        console.error('Error seeding admins:', error.message);
    }
};

const Question = require('./model/questions');
const initialQuestions = require('./data/questions100');

// Seed 100 questions if database is empty/incomplete
const seedInitialQuestions = async () => {
    try {
        const count = await Question.countDocuments();
        if (count < initialQuestions.length) {
            console.log(`Database has ${count} questions. Auto-seeding all ${initialQuestions.length} questions...`);
            for (const q of initialQuestions) {
                await Question.findOneAndUpdate(
                    { question_number: q.question_number },
                    { $set: q },
                    { upsert: true, returnDocument: 'after', runValidators: true }
                );
            }
            const total = await Question.countDocuments();
            console.log(`Auto-seeding complete! ${total} questions ready in database.`);
        }
    } catch (error) {
        console.error('Error auto-seeding questions:', error.message);
    }
};

seedDefaultAdmins();
seedInitialQuestions();

const port = process.env.PORT || 8000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
