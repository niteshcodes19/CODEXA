/** Backfill question_title / question_number on submissions when the question still exists */
require('dotenv').config();
const mongoose = require('mongoose');
const Submission = require('../model/submission');
const Question = require('../model/questions');

(async () => {
    await mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/codexa');

    const subs = await Submission.find({});
    let updated = 0;
    let orphaned = 0;

    for (const sub of subs) {
        const question = await Question.findById(sub.question);
        if (!question) {
            orphaned++;
            continue;
        }
        const needsUpdate =
            sub.question_title !== question.title ||
            sub.question_number !== question.question_number;
        if (needsUpdate) {
            sub.question_title = question.title;
            sub.question_number = question.question_number;
            await sub.save();
            updated++;
        }
    }

    console.log(`Checked ${subs.length} submissions — updated ${updated}, orphaned ${orphaned}`);
    await mongoose.disconnect();
})();
