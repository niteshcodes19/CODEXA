const dns = require("dns");

dns.setServers([
    "8.8.8.8",
    "1.1.1.1"
]);

require('dotenv').config();
const mongoose = require('mongoose');
const Question = require('./model/questions');
const questions = require('./data/questions50');

const connectDb = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/mini_leetcode');
        console.log('MongoDB connected for seeding');
    } catch (error) {
        console.error('MongoDB connection failed:', error.message);
        process.exit(1);
    }
};

const seedDB = async () => {
    await connectDb();
    try {
        const seededNumbers = questions.map((q) => q.question_number);

        for (const q of questions) {
            await Question.findOneAndUpdate(
                { question_number: q.question_number },
                { $set: q },
                { upsert: true, new: true, runValidators: true }
            );
        }

        const removed = await Question.deleteMany({ question_number: { $nin: seededNumbers } });
        if (removed.deletedCount) {
            console.log(`Removed ${removed.deletedCount} outdated questions`);
        }

        const total = await Question.countDocuments();
        const easy = await Question.countDocuments({ level: 'Easy' });
        const medium = await Question.countDocuments({ level: 'Medium' });
        const hard = await Question.countDocuments({ level: 'Hard' });
        console.log(`Seeded ${total} questions (${easy} Easy, ${medium} Medium, ${hard} Hard) — IDs preserved via upsert`);
    } catch (err) {
        console.error('Error seeding data:', err);
        process.exitCode = 1;
    } finally {
        await mongoose.connection.close();
        console.log('Database connection closed');
    }
};

seedDB();
