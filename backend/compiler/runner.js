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

const runJava = (code, input) => {
    return new Promise((resolve) => {
        const fileName = uuidv4();
        const runDir = path.join(os.tmpdir(), fileName);
        fs.mkdirSync(runDir, { recursive: true });

        const filePath = path.join(runDir, 'Main.java');
        fs.writeFileSync(filePath, reorderJavaImports(code));

        const startTime = Date.now();
        let compileError = '';

        const cleanup = () => {
            try {
                fs.rmSync(runDir, { recursive: true, force: true });
            } catch (e) {}
        };

        const timeoutRef = { id: null };

        const finish = (result) => {
            if (timeoutRef.id) clearTimeout(timeoutRef.id);
            resolve(result);
            cleanup();
        };

        const javac = spawn('javac', ['Main.java'], { cwd: runDir });

        javac.stderr.on('data', (data) => {
            compileError += data.toString();
        });

        javac.on('error', (err) => {
            finish({
                output: '',
                error: err.message.includes('ENOENT')
                    ? 'Java compiler (javac) not found. Please install JDK and add it to PATH.'
                    : err.message,
                runtime: Date.now() - startTime
            });
        });

        javac.on('close', (exitCode) => {
            if (exitCode !== 0) {
                finish({
                    output: '',
                    error: compileError.trim() || 'Compilation failed',
                    runtime: Date.now() - startTime
                });
                return;
            }

            const child = spawn('java', ['Main'], { cwd: runDir });

            let output = '';
            let error = '';

            timeoutRef.id = setTimeout(() => {
                child.kill();
                finish({ output: '', error: 'Time Limit Exceeded', runtime: 5000 });
            }, 5000);

            if (input) {
                child.stdin.write(normalizeTestInput(input));
                child.stdin.end();
            }

            child.stdout.on('data', (data) => {
                output += data.toString();
            });

            child.stderr.on('data', (data) => {
                error += data.toString();
            });

            child.on('error', (err) => {
                finish({
                    output: '',
                    error: err.message.includes('ENOENT')
                        ? 'Java runtime not found. Please install JDK and add it to PATH.'
                        : err.message,
                    runtime: Date.now() - startTime
                });
            });

            child.on('close', () => {
                finish({
                    output,
                    error: error.trim(),
                    runtime: Date.now() - startTime
                });
            });
        });
    });
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
    const results = [];
    let passed = 0;
    let status = 'Accepted';
    let totalRuntime = 0;
    let errorMessage = '';

    for (let i = 0; i < testcases.length; i++) {
        const testcase = testcases[i];
        
        const res = await runSingleTest(code, language, testcase.input);
        
        const actual = extractProgramOutput(res.output);
        const expected = (testcase.expected_output || '').replace(/\r\n/g, '\n').trim();
        let tcPassed = false;

        if (res.error) {
            if (res.error === 'Time Limit Exceeded') {
                status = 'Time Limit Exceeded';
                errorMessage = res.error;
            } else if (/error:|Compilation failed|javac not found/i.test(res.error)) {
                status = 'Compilation Error';
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
            break; // Stop running further tests on failure
        }
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
