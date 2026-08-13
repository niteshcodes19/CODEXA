const mongoose = require('mongoose');

const submissionSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    question: { type: mongoose.Schema.Types.ObjectId, ref: 'Question', required: true },
    language: { type: String, enum: ['java'], default: 'java', required: true },
    code: { type: String, required: true },
    status: {
        type: String,
        enum: ['Accepted', 'Wrong Answer', 'Time Limit Exceeded', 'Runtime Error', 'Compilation Error'],
        required: true
    },
    runtime: { type: Number, default: 0 },
    passed_testcases: { type: Number, default: 0 },
    total_testcases: { type: Number, default: 0 },
    error_message: { type: String, default: '' },
    results: [{
        testcase_index: Number,
        input: String,
        expected: String,
        actual: String,
        passed: Boolean,
        runtime: Number
    }],
    question_title: { type: String, default: '' },
    question_number: { type: Number, default: 0 }
}, { timestamps: true });

module.exports = mongoose.model('Submission', submissionSchema);
