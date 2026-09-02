const { spawn } = require('child_process');
const fs = require('fs');
const path = require('path');
const os = require('os');
const { v4: uuidv4 } = require('uuid');

// If a local portable JDK was installed (e.g. on Render native environment), add it to PATH
const localJdkBin = path.resolve(__dirname, '..', 'jdk', 'bin');
if (fs.existsSync(localJdkBin)) {
    process.env.PATH = `${localJdkBin}${path.delimiter}${process.env.PATH}`;
}

/** Move all import statements to the top of a Java source file */
const reorderJavaImports = (source) => {
    const lines = source.split('\n');
    const imports = [];
    const body = [];

    for (const line of lines) {
        const trimmed = line.trim();
        if (trimmed.startsWith('import ') && trimmed.endsWith(';')) {
            if (!imports.includes(trimmed)) imports.push(trimmed);
        } else {
            body.push(line);
        }
    }

    while (body.length && body[0].trim() === '') body.shift();

    return (imports.length ? imports.join('\n') + '\n\n' : '') + body.join('\n');
};

/** Combine user solution with driver code for Java (imports must come first) */
const assembleJavaSource = (userCode, driverCode) => {
    const combined = driverCode
        ? `${userCode.trim()}\n\n${driverCode.trim()}`
        : userCode.trim();
    return reorderJavaImports(combined);
};

const assembleSource = (userCode, driverCode) => {
    return assembleJavaSource(userCode, driverCode);
};

/** Use the last non-empty stdout line (driver output), ignoring debug prints above it */
const extractProgramOutput = (output) => {
    const lines = (output || '')
        .replace(/\r\n/g, '\n')
        .split('\n')
        .map((line) => line.trim())
        .filter(Boolean);
    return lines.length ? lines[lines.length - 1] : '';
};

/** Normalize testcase stdin — supports LeetCode-style and escaped newlines */
const normalizeTestInput = (input) => {
    if (input == null) return input;
    let text = String(input).replace(/\\n/g, '\n').trim();

    const twoSumMatch = text.match(/nums\s*=\s*(\[[^\]]+\])\s*,\s*target\s*=\s*(-?\d+)/i);
    if (twoSumMatch) {
        return `${twoSumMatch[1].trim()}\n${twoSumMatch[2].trim()}`;
    }

    return text;
};

/** Normalize program output for comparison (spacing + index order for numeric arrays) */
const normalizeOutput = (output) => {
    const trimmed = extractProgramOutput(output);
    if (!trimmed) return '';

    try {
        const parsed = JSON.parse(trimmed);
        if (Array.isArray(parsed)) {
            if (parsed.every((value) => typeof value === 'number')) {
                return JSON.stringify([...parsed].sort((a, b) => a - b));
            }
            return JSON.stringify(parsed);
        }
        if (typeof parsed === 'boolean') {
            return String(parsed);
        }
        return JSON.stringify(parsed);
    } catch {
        return trimmed.toLowerCase();
    }
};

const outputsMatch = (actual, expected) => {
    return normalizeOutput(actual) === normalizeOutput(expected);
};

const compileJava = (runDir) => {
    return new Promise((resolve) => {
        let compileError = '';
        const javac = spawn('javac', ['Main.java'], { cwd: runDir });

        javac.stderr.on('data', (data) => {
            compileError += data.toString();
        });

        javac.on('error', (err) => {
            resolve({
                success: false,
                error: err.message.includes('ENOENT')
                    ? 'Java compiler (javac) not found. Please install JDK and add it to PATH.'
                    : err.message
            });
        });

        javac.on('close', (exitCode) => {
            if (exitCode !== 0) {
                resolve({
                    success: false,
                    error: compileError.trim() || 'Compilation failed'
                });
            } else {
                resolve({ success: true });
            }
        });
    });
};

const executeCompiledJava = (runDir, input, timeoutMs = 4000) => {
    return new Promise((resolve) => {
        const startTime = Date.now();
        const child = spawn('java', ['-Xmx256m', 'Main'], { cwd: runDir });

        let output = '';
        let error = '';
        let isDone = false;

        const timeoutId = setTimeout(() => {
            if (!isDone) {
                isDone = true;
                child.kill();
                resolve({ output: '', error: 'Time Limit Exceeded', runtime: timeoutMs });
            }
        }, timeoutMs);

        if (input != null) {
            child.stdin.write(normalizeTestInput(input));
            child.stdin.end();
        } else {
            child.stdin.end();
        }

        child.stdout.on('data', (data) => {
            output += data.toString();
        });

        child.stderr.on('data', (data) => {
            error += data.toString();
        });

        child.on('error', (err) => {
            if (!isDone) {
                isDone = true;
                clearTimeout(timeoutId);
                resolve({
                    output: '',
                    error: err.message.includes('ENOENT')
                        ? 'Java runtime not found. Please install JDK and add it to PATH.'
                        : err.message,
                    runtime: Date.now() - startTime
                });
            }
        });

        child.on('close', () => {
            if (!isDone) {
                isDone = true;
                clearTimeout(timeoutId);
                resolve({
                    output,
                    error: error.trim(),
                    runtime: Date.now() - startTime
                });
            }
        });
    });
};

const runJava = async (code, input) => {
    const fileName = uuidv4();
    const runDir = path.join(os.tmpdir(), fileName);
    fs.mkdirSync(runDir, { recursive: true });

    try {
        const filePath = path.join(runDir, 'Main.java');
        fs.writeFileSync(filePath, reorderJavaImports(code));

        const comp = await compileJava(runDir);
        if (!comp.success) {
            return {
                output: '',
                error: comp.error,
                runtime: 0
            };
        }

        return await executeCompiledJava(runDir, input);
    } finally {
        try {
            fs.rmSync(runDir, { recursive: true, force: true });
        } catch (e) {}
    }
};

const runSingleTest = (code, language, input) => {
    if (language !== 'java') {
        return Promise.resolve({
            output: '',
            error: 'Only Java submissions are supported',
            runtime: 0
        });
    }
    return runJava(code, input);
};

const runCode = async (code, language, testcases) => {
    if (language !== 'java') {
        return {
            status: 'Runtime Error',
            passed: 0,
            total: testcases.length,
            runtime: 0,
            results: [],
            error_message: 'Only Java submissions are supported'
        };
    }

    const fileName = uuidv4();
    const runDir = path.join(os.tmpdir(), fileName);
    fs.mkdirSync(runDir, { recursive: true });

    const results = [];
    let passed = 0;
    let status = 'Accepted';
    let totalRuntime = 0;
    let errorMessage = '';

    try {
        const filePath = path.join(runDir, 'Main.java');
        fs.writeFileSync(filePath, reorderJavaImports(code));

        // 1. Compile ONCE for all testcases
        const comp = await compileJava(runDir);
        if (!comp.success) {
            return {
                status: 'Compilation Error',
                passed: 0,
                total: testcases.length,
                runtime: 0,
                results: testcases.map((tc, i) => ({
                    testcase_index: i,
                    input: tc.input,
                    expected: tc.expected_output,
                    actual: '',
                    passed: false,
                    runtime: 0
                })),
                error_message: comp.error
            };
        }

        // 2. Run compiled bytecode against each testcase rapidly
        for (let i = 0; i < testcases.length; i++) {
            const testcase = testcases[i];
            const res = await executeCompiledJava(runDir, testcase.input);

            const actual = extractProgramOutput(res.output);
            const expected = (testcase.expected_output || '').replace(/\r\n/g, '\n').trim();
            let tcPassed = false;

            if (res.error) {
                if (res.error === 'Time Limit Exceeded') {
                    status = 'Time Limit Exceeded';
                    errorMessage = res.error;
                } else {
                    status = 'Runtime Error';
                    errorMessage = res.error;
                }
            } else if (outputsMatch(actual, expected)) {
                tcPassed = true;
                passed++;
            } else {
                status = 'Wrong Answer';
            }

            totalRuntime += res.runtime;
            results.push({
                testcase_index: i,
                input: testcase.input,
                expected: testcase.expected_output,
                actual: extractProgramOutput(res.output) || res.output,
                passed: tcPassed,
                runtime: res.runtime
            });

            if (status !== 'Accepted') {
                break; // Stop on first failure
            }
        }
    } finally {
        try {
            fs.rmSync(runDir, { recursive: true, force: true });
        } catch (e) {}
    }

    return {
        status,
        passed,
        total: testcases.length,
        runtime: totalRuntime,
        results,
        error_message: errorMessage
    };
};

module.exports = {
    runCode,
    runSingleTest,
    assembleSource,
    assembleJavaSource,
    reorderJavaImports,
    normalizeOutput,
    normalizeTestInput,
    extractProgramOutput,
    outputsMatch
};
