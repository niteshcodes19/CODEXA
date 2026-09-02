const { spawn } = require('child_process');
const fs = require('fs');
const path = require('path');
const os = require('os');
const { v4: uuidv4 } = require('uuid');

const questions = require('../data/questions100');
const { assembleSource } = require('../compiler/runner');

const q1 = questions[0]; // Two Sum, 54 testcases

const code = `class Solution {
    public int[] twoSum(int[] nums, int target) {
        Map<Integer, Integer> map = new HashMap<>();
        for (int i = 0; i < nums.length; i++) {
            int need = target - nums[i];
            if (map.containsKey(need)) return new int[]{map.get(need), i};
            map.put(nums[i], i);
        }
        return new int[]{};
    }
}`;

const fullSource = assembleSource(code, q1.driver_code.java);

async function compile(runDir) {
    return new Promise((res) => {
        const p = spawn('javac', ['Main.java'], { cwd: runDir });
        p.on('close', (c) => res(c === 0));
    });
}

function runOne(runDir, input, flags = []) {
    return new Promise((res) => {
        const t0 = Date.now();
        const p = spawn('java', [...flags, 'Main'], { cwd: runDir });
        let out = '';
        p.stdin.write(input);
        p.stdin.end();
        p.stdout.on('data', d => out += d);
        p.on('close', () => res({ out, dt: Date.now() - t0 }));
    });
}

async function benchmark() {
    const runDir = path.join(os.tmpdir(), uuidv4());
    fs.mkdirSync(runDir, { recursive: true });
    fs.writeFileSync(path.join(runDir, 'Main.java'), fullSource);

    console.log('Compiling...');
    const ok = await compile(runDir);
    console.log('Compiled:', ok);

    const testcases = q1.testcases;
    console.log(`Running ${testcases.length} testcases...`);

    // 1. Baseline sequential
    let t0 = Date.now();
    for (const tc of testcases) {
        await runOne(runDir, tc.input, ['-Xmx128m']);
    }
    console.log(`1. Sequential default flags: ${Date.now() - t0}ms`);

    // 2. Sequential with Fast JVM startup flags (-XX:TieredStopAtLevel=1, -Xverify:none, -Xms16m)
    t0 = Date.now();
    for (const tc of testcases) {
        await runOne(runDir, tc.input, ['-XX:+TieredCompilation', '-XX:TieredStopAtLevel=1', '-Xverify:none', '-Xms16m', '-Xmx128m']);
    }
    console.log(`2. Sequential Fast JVM flags: ${Date.now() - t0}ms`);

    // 3. Concurrent (batch of 8) with Fast JVM flags
    t0 = Date.now();
    const concurrency = 8;
    for (let i = 0; i < testcases.length; i += concurrency) {
        const chunk = testcases.slice(i, i + concurrency);
        await Promise.all(chunk.map(tc => runOne(runDir, tc.input, ['-XX:+TieredCompilation', '-XX:TieredStopAtLevel=1', '-Xverify:none', '-Xms16m', '-Xmx128m'])));
    }
    console.log(`3. Concurrent (concurrency=8) + Fast flags: ${Date.now() - t0}ms`);

    // 4. Concurrent (all 54 parallel) with Fast flags
    t0 = Date.now();
    await Promise.all(testcases.map(tc => runOne(runDir, tc.input, ['-XX:+TieredCompilation', '-XX:TieredStopAtLevel=1', '-Xverify:none', '-Xms16m', '-Xmx128m'])));
    console.log(`4. Full Parallel (all 54) + Fast flags: ${Date.now() - t0}ms`);

    fs.rmSync(runDir, { recursive: true, force: true });
}

benchmark().catch(console.error);
