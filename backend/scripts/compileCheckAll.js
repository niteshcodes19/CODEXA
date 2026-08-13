/** Compile-check every question's starter + driver (no reference solution needed) */
const questions = require('../data/questions50');
const { assembleSource } = require('../compiler/runner');
const { spawn } = require('child_process');
const fs = require('fs');
const path = require('path');
const os = require('os');

const compileJava = (code) =>
    new Promise((resolve) => {
        const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'ml-compile-'));
        const filePath = path.join(dir, 'Main.java');
        fs.writeFileSync(filePath, code);
        const proc = spawn('javac', ['Main.java'], { cwd: dir });
        let err = '';
        proc.stderr.on('data', (d) => (err += d.toString()));
        proc.on('close', (code) => {
            try {
                fs.rmSync(dir, { recursive: true, force: true });
            } catch (_) {}
            resolve({ ok: code === 0, err: err.trim() });
        });
        proc.on('error', (e) => resolve({ ok: false, err: e.message }));
    });

async function main() {
    let failed = 0;
    for (const q of questions) {
        const full = assembleSource(q.starter_code.java, q.driver_code.java);
        const res = await compileJava(full);
        if (!res.ok) {
            failed++;
            console.log(`FAIL compile Q${q.question_number} ${q.title}`);
            console.log(res.err.slice(0, 400));
        }
    }
    console.log(failed ? `\n${failed} compile failures` : `\nAll ${questions.length} questions compile OK`);
    process.exit(failed ? 1 : 0);
}

main();
