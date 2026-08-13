const express = require('express');
const router = express.Router();
const Question = require('../model/questions');
const User = require('../model/user');
const Submission = require('../model/submission');
const { authenticateUser, optionalAuthenticateUser } = require('../middleware/auth');
const { runSingleTest, runCode, assembleSource, extractProgramOutput } = require('../compiler/runner');

// GET /all-questions (public list; acceptance rate for logged-in users only)
router.get('/all-questions', optionalAuthenticateUser, async (req, res) => {
    try {
        const questions = await Question.find({}, 'question_number title level tags accepted_submissions total_submissions').sort('question_number');
        const includeAcceptance = req.user?.type === 'user';

        const formattedQuestions = questions.map(q => {
            const item = {
                _id: q._id,
                question_number: q.question_number,
                title: q.title,
                level: q.level,
                tags: q.tags
            };

            if (includeAcceptance) {
                const acceptanceRate = q.total_submissions === 0
                    ? 0
                    : ((q.accepted_submissions / q.total_submissions) * 100).toFixed(2);
                item.acceptanceRate = parseFloat(acceptanceRate);
            }

            return item;
        });
        res.json(formattedQuestions);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// GET /question/:id (public but hidden testcases removed)
router.get('/question/:id', async (req, res) => {
    try {
        const question = await Question.findById(req.params.id);
        if (!question) return res.status(404).json({ error: 'Question not found' });
        
        // Filter out non-sample testcases and driver code
        const safeQuestion = {
            _id: question._id,
            question_number: question.question_number,
            title: question.title,
            description: question.description,
            level: question.level,
            tags: question.tags,
            constraints: question.constraints,
            starter_code: question.starter_code,
            testcases: question.testcases.filter(tc => tc.is_sample)
        };
        
        res.json(safeQuestion);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// POST /run (user auth required)
router.post('/run', authenticateUser, async (req, res) => {
    try {
        const { questionId, code, input } = req.body;
        const language = 'java';
        
        const question = await Question.findById(questionId);
        if (!question) return res.status(404).json({ error: 'Question not found' });
        
        const driverCode = question.driver_code?.java || '';
        const fullCode = assembleSource(code, driverCode);
        
        const result = await runSingleTest(fullCode, language, input);
        res.json({
            ...result,
            output: extractProgramOutput(result.output) || result.output?.trim() || ''
        });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// POST /submit (user auth required)
router.post('/submit', authenticateUser, async (req, res) => {
    try {
        const { questionId, code } = req.body;
        const language = 'java';
        
        const question = await Question.findById(questionId);
        if (!question) return res.status(404).json({ error: 'Question not found' });
        
        const driverCode = question.driver_code?.java || '';
        const fullCode = assembleSource(code, driverCode);
        
        // Run against all testcases
        const executionResult = await runCode(fullCode, language, question.testcases);
        
        // Create submission
        const submission = await Submission.create({
            user: req.user.id,
            question: questionId,
            question_title: question.title,
            question_number: question.question_number,
            language,
            code,
            status: executionResult.status,
            runtime: executionResult.runtime,
            passed_testcases: executionResult.passed,
            total_testcases: executionResult.total,
            error_message: executionResult.error_message,
            results: executionResult.results
        });
        
        // Update question stats
        question.total_submissions += 1;
        if (executionResult.status === 'Accepted') {
            question.accepted_submissions += 1;
        }
        await question.save();
        
        // Update user stats if accepted
        if (executionResult.status === 'Accepted') {
            const user = await User.findById(req.user.id);
            if (user) {
                const alreadySolved = user.solved_questions.some(
                    (id) => id.toString() === questionId.toString()
                );
                if (!alreadySolved) {
                    user.solved_questions.push(questionId);
                    user.total_question += 1;
                    await user.save();
                }
            }
        }
        
        // Find the first failing testcase for display
        const failingResult = executionResult.results.find(r => !r.passed);
        const failing_testcase = failingResult ? {
            input: failingResult.input,
            expected: failingResult.expected,
            actual: failingResult.actual
        } : null;

        res.json({
            submissionId: submission._id,
            status: executionResult.status,
            passed: executionResult.passed,
            total: executionResult.total,
            runtime: executionResult.runtime,
            error_message: executionResult.error_message,
            results: executionResult.results,
            failing_testcase
        });
    } catch (err) {
        console.error('Submit error:', err);
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;