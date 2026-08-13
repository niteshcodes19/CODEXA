require('dotenv').config();
const mongoose = require('mongoose');
const User = require('./model/user');
const Question = require('./model/questions');

(async () => {
    await mongoose.connect(process.env.MONGO_URI);
    const users = await User.find({ 'solved_questions.0': { $exists: true } });
    console.log('users with solved', users.length);
    for (const u of users) {
        let stale = 0;
        for (const id of u.solved_questions) {
            const q = await Question.findById(id);
            if (!q) stale++;
        }
        console.log(u.email, 'refs', u.solved_questions.length, 'stale', stale);
    }
    await mongoose.disconnect();
})();
