const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone: { type: String, required: true },
    password: { type: String, required: true },
    total_question: { type: Number, default: 0 },
    rating: { type: Number, default: 0 },
    rank: { type: Number, default: 0 },
    solved_questions: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Question' }],
    status: { type: String, enum: ['active', 'banned'], default: 'active' }
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);