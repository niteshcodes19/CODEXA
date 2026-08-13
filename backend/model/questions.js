const mongoose = require('mongoose');

const testCaseSchema = new mongoose.Schema({
    input: { type: String, required: true },
    expected_output: { type: String, required: true },
    is_sample: { type: Boolean, default: false }
}, { _id: true });

const questionSchema = new mongoose.Schema({
    question_number: { type: Number, required: true, unique: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    level: { type: String, enum: ['Easy', 'Medium', 'Hard'], required: true },
    tags: [{ type: String }],
    constraints: { type: String, default: '' },
    testcases: [testCaseSchema],
    starter_code: {
        java: { type: String, default: '' }
    },
    driver_code: {
        java: { type: String, default: '' }
    },
    total_submissions: { type: Number, default: 0 },
    accepted_submissions: { type: Number, default: 0 }
}, { timestamps: true });

module.exports = mongoose.model('Question', questionSchema);