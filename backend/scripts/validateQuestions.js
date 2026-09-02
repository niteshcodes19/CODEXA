/** Smoke-test all 50 questions: compile driver + starter and run sample testcases */
require('dotenv').config();
const questions = require('../data/questions50');
const { runCode, assembleSource } = require('../compiler/runner');

const referenceSolutions = {
    1: `class Solution {
    public int[] twoSum(int[] nums, int target) {
        Map<Integer, Integer> map = new HashMap<>();
        for (int i = 0; i < nums.length; i++) {
            int need = target - nums[i];
            if (map.containsKey(need)) return new int[]{map.get(need), i};
            map.put(nums[i], i);
        }
        return new int[]{};
    }
}`,
    2: `class Solution {
    public boolean isValid(String s) {
        Stack<Character> stack = new Stack<>();
        for (char c : s.toCharArray()) {
            if (c == '(') stack.push(')');
            else if (c == '{') stack.push('}');
            else if (c == '[') stack.push(']');
            else if (stack.isEmpty() || stack.pop() != c) return false;
        }
        return stack.isEmpty();
    }
}`,
    4: `class Solution {
    public int maxProfit(int[] prices) {
        int min = Integer.MAX_VALUE, max = 0;
        for (int p : prices) {
            min = Math.min(min, p);
            max = Math.max(max, p - min);
        }
        return max;
    }
}`,
    17: `class Solution {
    public int calPoints(String[] ops) {
        List<Integer> st = new ArrayList<>();
        for (String op : ops) {
            if (op.equals("C")) st.remove(st.size() - 1);
            else if (op.equals("D")) st.add(st.get(st.size() - 1) * 2);
            else if (op.equals("+")) {
                int n = st.size();
                st.add(st.get(n - 1) + st.get(n - 2));
            } else st.add(Integer.parseInt(op));
        }
        int sum = 0;
        for (int x : st) sum += x;
        return sum;
    }
}`,
    42: `class Solution {
    public int maxArea(int[] height) {
        int max = 0, l = 0, r = height.length - 1;
        while (l < r) {
            max = Math.max(max, Math.min(height[l], height[r]) * (r - l));
            if (height[l] < height[r]) l++;
            else r--;
        }
        return max;
    }
}`,
    81: `class Solution {
    public int trap(int[] height) {
        int l = 0, r = height.length - 1, lm = 0, rm = 0, water = 0;
        while (l < r) {
            if (height[l] < height[r]) {
                lm = Math.max(lm, height[l]);
                water += lm - height[l++];
            } else {
                rm = Math.max(rm, height[r]);
                water += rm - height[r--];
            }
        }
        return water;
    }
}`,
    100: `class Solution {
    public int maxProfit(int[] prices) {
        int buy1 = Integer.MIN_VALUE, sell1 = 0, buy2 = Integer.MIN_VALUE, sell2 = 0;
        for (int p : prices) {
            buy1 = Math.max(buy1, -p);
            sell1 = Math.max(sell1, buy1 + p);
            buy2 = Math.max(buy2, sell1 - p);
            sell2 = Math.max(sell2, buy2 + p);
        }
        return sell2;
    }
}`
};

async function main() {
    const ids = Object.keys(referenceSolutions).map(Number);
    let passed = 0;
    let failed = 0;

    for (const q of questions) {
        const ref = referenceSolutions[q.question_number];
        if (!ref) continue;
        const samples = q.testcases.filter((t) => t.is_sample);
        const fullCode = assembleSource(ref, q.driver_code.java);
        const result = await runCode(fullCode, 'java', samples);
        const ok = result.status === 'Accepted';
        console.log(`${ok ? 'PASS' : 'FAIL'} Q${q.question_number} ${q.title}`);
        if (!ok) {
            failed++;
            console.log(' ', result.status, result.error_message || '');
            result.results.filter((r) => !r.passed).forEach((r) => console.log(' ', r));
        } else passed++;
    }

    console.log(`\nReference checks: ${passed} passed, ${failed} failed`);
    process.exit(failed ? 1 : 0);
}

main().catch((err) => {
    console.error(err);
    process.exit(1);
});
