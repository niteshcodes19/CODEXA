/** Java driver templates for CODEXA judge (stdin → Solution → stdout) */

const parseIntArrayFn = `
    static int[] parseIntArray(String json) {
        json = json.trim();
        if (json.startsWith("[") && json.endsWith("]")) {
            json = json.substring(1, json.length() - 1);
        }
        if (json.isEmpty()) return new int[0];
        String[] parts = json.split(",");
        int[] arr = new int[parts.length];
        for (int i = 0; i < parts.length; i++) {
            arr[i] = Integer.parseInt(parts[i].trim());
        }
        return arr;
    }`;

const parseStringArrayFn = `
    static String[] parseStringArray(String json) {
        json = json.trim();
        if (json.startsWith("[") && json.endsWith("]")) {
            json = json.substring(1, json.length() - 1).trim();
        }
        if (json.isEmpty()) return new String[0];
        List<String> list = new ArrayList<>();
        boolean inQuotes = false;
        StringBuilder cur = new StringBuilder();
        for (int i = 0; i < json.length(); i++) {
            char c = json.charAt(i);
            if (c == '"') {
                inQuotes = !inQuotes;
                if (!inQuotes) {
                    list.add(cur.toString());
                    cur.setLength(0);
                }
            } else if (inQuotes) {
                cur.append(c);
            }
        }
        return list.toArray(new String[0]);
    }`;

const readAllFn = `
    static String readAll() throws Exception {
        return new String(System.in.readAllBytes()).trim();
    }`;

const printIntArrayFn = `
    static void printIntArray(int[] arr) {
        StringBuilder sb = new StringBuilder("[");
        for (int i = 0; i < arr.length; i++) {
            sb.append(arr[i]);
            if (i < arr.length - 1) sb.append(",");
        }
        sb.append("]");
        System.out.println(sb.toString());
    }`;

const parseMatrixFn = `
    static int[][] parseMatrix(String raw) {
        raw = raw.trim();
        if (raw.startsWith("[") && raw.endsWith("]")) {
            raw = raw.substring(1, raw.length() - 1).trim();
        }
        if (raw.isEmpty()) return new int[0][0];
        List<int[]> list = new ArrayList<>();
        int start = -1;
        for (int i = 0; i < raw.length(); i++) {
            char c = raw.charAt(i);
            if (c == '[') {
                start = i;
            } else if (c == ']' && start != -1) {
                list.add(parseIntArray(raw.substring(start, i + 1)));
                start = -1;
            }
        }
        return list.toArray(new int[0][]);
    }`;

const parseCharMatrixFn = `
    static char[][] parseCharMatrix(String raw) {
        String[] lines = raw.split("\\\\R");
        List<String> valid = new ArrayList<>();
        for (String l : lines) if (!l.trim().isEmpty()) valid.add(l.trim());
        if (valid.isEmpty()) return new char[0][0];
        char[][] res = new char[valid.size()][];
        for (int i = 0; i < valid.size(); i++) {
            String row = valid.get(i);
            StringBuilder sb = new StringBuilder();
            for (char c : row.toCharArray()) {
                if (c != '[' && c != ']' && c != ',' && c != '"' && c != ' ') {
                    sb.append(c);
                }
            }
            res[i] = sb.toString().toCharArray();
        }
        return res;
    }`;

const drivers = {
    twoSum: `
import java.util.*;
import java.util.regex.*;

public class Main {
${parseIntArrayFn}
    static class Parsed { int[] nums; int target; }
    static Parsed parse(String raw) {
        raw = raw.trim().replace("\\\\n", "\\n");
        Parsed p = new Parsed();
        Matcher m = Pattern.compile("nums\\\\s*=\\\\s*(\\\\[[^\\\\]]+\\\\])\\\\s*,\\\\s*target\\\\s*=\\\\s*(-?\\\\d+)", Pattern.CASE_INSENSITIVE).matcher(raw);
        if (m.find()) {
            p.nums = parseIntArray(m.group(1));
            p.target = Integer.parseInt(m.group(2));
            return p;
        }
        String[] lines = raw.split("\\\\R");
        List<String> c = new ArrayList<>();
        for (String line : lines) if (!line.trim().isEmpty()) c.add(line.trim());
        p.nums = parseIntArray(c.get(0));
        p.target = Integer.parseInt(c.get(1));
        return p;
    }
    public static void main(String[] args) throws Exception {
        Parsed in = parse(readAll());
        int[] res = new Solution().twoSum(in.nums, in.target);
        System.out.println(Arrays.toString(res).replaceAll(" ", ""));
    }
    static String readAll() throws Exception {
        return new String(System.in.readAllBytes()).trim();
    }
}`,

    intToBoolean: (method) => `
import java.util.*;

public class Main {
${readAllFn}
    public static void main(String[] args) throws Exception {
        int x = Integer.parseInt(readAll().trim());
        boolean res = new Solution().${method}(x);
        System.out.println(res ? "true" : "false");
    }
}`,

    stringToBoolean: (method) => `
import java.util.*;

public class Main {
${readAllFn}
    public static void main(String[] args) throws Exception {
        boolean res = new Solution().${method}(readAll());
        System.out.println(res ? "true" : "false");
    }
}`,

    intArrayToInt: (method) => `
import java.util.*;

public class Main {
${parseIntArrayFn}
${readAllFn}
    public static void main(String[] args) throws Exception {
        int[] arr = parseIntArray(readAll());
        System.out.println(new Solution().${method}(arr));
    }
}`,

    intArrayAndKToInt: (method) => `
import java.util.*;

public class Main {
${parseIntArrayFn}
${readAllFn}
    public static void main(String[] args) throws Exception {
        String[] lines = readAll().split("\\\\R");
        int[] arr = parseIntArray(lines[0].trim());
        int k = Integer.parseInt(lines[1].trim());
        System.out.println(new Solution().${method}(arr, k));
    }
}`,

    intArrayAndTargetToInt: (method) => `
import java.util.*;

public class Main {
${parseIntArrayFn}
${readAllFn}
    public static void main(String[] args) throws Exception {
        String[] lines = readAll().split("\\\\R");
        int[] arr = parseIntArray(lines[0].trim());
        int target = Integer.parseInt(lines[1].trim());
        System.out.println(new Solution().${method}(arr, target));
    }
}`,

    stringToInt: (method) => `
import java.util.*;

public class Main {
${readAllFn}
    public static void main(String[] args) throws Exception {
        System.out.println(new Solution().${method}(readAll()));
    }
}`,

    twoStringsToBoolean: (method) => `
import java.util.*;

public class Main {
${readAllFn}
    public static void main(String[] args) throws Exception {
        String[] lines = readAll().split("\\\\R");
        String s1 = lines.length > 0 ? lines[0].trim() : "";
        String s2 = lines.length > 1 ? lines[1].trim() : "";
        boolean res = new Solution().${method}(s1, s2);
        System.out.println(res ? "true" : "false");
    }
}`,

    intArrayToIntArray: (method) => `
import java.util.*;

public class Main {
${parseIntArrayFn}
${readAllFn}
    public static void main(String[] args) throws Exception {
        int[] arr = parseIntArray(readAll());
        int[] res = new Solution().${method}(arr);
        System.out.println(Arrays.toString(res).replaceAll(" ", ""));
    }
}`,

    intArrayInPlace: (method) => `
import java.util.*;

public class Main {
${parseIntArrayFn}
${printIntArrayFn}
${readAllFn}
    public static void main(String[] args) throws Exception {
        int[] arr = parseIntArray(readAll());
        new Solution().${method}(arr);
        printIntArray(arr);
    }
}`,

    intArrayInPlaceReturnLen: (method) => `
import java.util.*;

public class Main {
${parseIntArrayFn}
${readAllFn}
    public static void main(String[] args) throws Exception {
        int[] arr = parseIntArray(readAll());
        int len = new Solution().${method}(arr);
        StringBuilder sb = new StringBuilder("[");
        for (int i = 0; i < len; i++) {
            sb.append(arr[i]);
            if (i < len - 1) sb.append(",");
        }
        sb.append("]");
        System.out.println(sb.toString());
    }
}`,

    intArrayAndValInPlace: (method) => `
import java.util.*;

public class Main {
${parseIntArrayFn}
${printIntArrayFn}
${readAllFn}
    public static void main(String[] args) throws Exception {
        String[] lines = readAll().split("\\\\R");
        int[] arr = parseIntArray(lines[0].trim());
        int val = Integer.parseInt(lines[1].trim());
        int len = new Solution().${method}(arr, val);
        StringBuilder sb = new StringBuilder("[");
        for (int i = 0; i < len; i++) {
            sb.append(arr[i]);
            if (i < len - 1) sb.append(",");
        }
        sb.append("]");
        System.out.println(sb.toString());
    }
}`,

    mergeSortedArray: `
import java.util.*;

public class Main {
${parseIntArrayFn}
${printIntArrayFn}
${readAllFn}
    public static void main(String[] args) throws Exception {
        String[] lines = readAll().split("\\\\R");
        int[] nums1 = parseIntArray(lines[0].trim());
        int m = Integer.parseInt(lines[1].trim());
        int[] nums2 = parseIntArray(lines[2].trim());
        int n = Integer.parseInt(lines[3].trim());
        new Solution().merge(nums1, m, nums2, n);
        printIntArray(nums1);
    }
}`,

    charArrayInPlace: `
import java.util.*;

public class Main {
${readAllFn}
    public static void main(String[] args) throws Exception {
        String line = readAll().trim();
        if (line.startsWith("[") && line.endsWith("]")) {
            line = line.substring(1, line.length() - 1);
        }
        String[] parts = line.isEmpty() ? new String[0] : line.split(",");
        char[] s = new char[parts.length];
        for (int i = 0; i < parts.length; i++) {
            String p = parts[i].trim();
            for (char c : p.toCharArray()) {
                if (c != '[' && c != ']' && c != '"' && c != ' ' && c != ',') {
                    s[i] = c;
                    break;
                }
            }
        }
        new Solution().reverseString(s);
        StringBuilder sb = new StringBuilder("[");
        for (int i = 0; i < s.length; i++) {
            sb.append('"').append(s[i]).append('"');
            if (i < s.length - 1) sb.append(",");
        }
        sb.append("]");
        System.out.println(sb.toString());
    }
}`,

    stringOpsArray: `
import java.util.*;
import java.util.regex.*;

public class Main {
${parseStringArrayFn}
${readAllFn}
    public static void main(String[] args) throws Exception {
        String[] ops = parseStringArray(readAll());
        System.out.println(new Solution().calPoints(ops));
    }
}`,

    plusOne: `
import java.util.*;

public class Main {
${parseIntArrayFn}
${readAllFn}
    public static void main(String[] args) throws Exception {
        int[] digits = parseIntArray(readAll());
        int[] res = new Solution().plusOne(digits);
        System.out.println(Arrays.toString(res).replaceAll(" ", ""));
    }
}`,

    twoIntToInt: (method) => `
import java.util.*;

public class Main {
${readAllFn}
    public static void main(String[] args) throws Exception {
        String[] lines = readAll().split("\\\\R");
        int a = Integer.parseInt(lines[0].trim());
        int b = Integer.parseInt(lines[1].trim());
        System.out.println(new Solution().${method}(a, b));
    }
}`,

    intInIntOut: (method) => `
import java.util.*;

public class Main {
${readAllFn}
    public static void main(String[] args) throws Exception {
        int n = Integer.parseInt(readAll().trim());
        System.out.println(new Solution().${method}(n));
    }
}`,

    intInIntArrayOut: (method) => `
import java.util.*;

public class Main {
${readAllFn}
    public static void main(String[] args) throws Exception {
        int n = Integer.parseInt(readAll().trim());
        int[] res = new Solution().${method}(n);
        System.out.println(Arrays.toString(res).replaceAll(" ", ""));
    }
}`,

    stringToString: (method) => `
import java.util.*;

public class Main {
${readAllFn}
    public static void main(String[] args) throws Exception {
        System.out.println(new Solution().${method}(readAll()));
    }
}`,

    twoStringsToString: (method) => `
import java.util.*;

public class Main {
${readAllFn}
    public static void main(String[] args) throws Exception {
        String[] lines = readAll().split("\\\\R");
        String s1 = lines.length > 0 ? lines[0].trim() : "";
        String s2 = lines.length > 1 ? lines[1].trim() : "";
        System.out.println(new Solution().${method}(s1, s2));
    }
}`,

    twoStringsToInt: (method) => `
import java.util.*;

public class Main {
${readAllFn}
    public static void main(String[] args) throws Exception {
        String[] lines = readAll().split("\\\\R");
        String s1 = lines.length > 0 ? lines[0].trim() : "";
        String s2 = lines.length > 1 ? lines[1].trim() : "";
        System.out.println(new Solution().${method}(s1, s2));
    }
}`,

    stringArrayToString: (method) => `
import java.util.*;
import java.util.regex.*;

public class Main {
${parseStringArrayFn}
${readAllFn}
    public static void main(String[] args) throws Exception {
        String[] strs = parseStringArray(readAll());
        System.out.println(new Solution().${method}(strs));
    }
}`,

    stringArrayToInt: (method) => `
import java.util.*;
import java.util.regex.*;

public class Main {
${parseStringArrayFn}
${readAllFn}
    public static void main(String[] args) throws Exception {
        String[] tokens = parseStringArray(readAll());
        System.out.println(new Solution().${method}(tokens));
    }
}`,

    intArrayAndKToIntArray: (method) => `
import java.util.*;

public class Main {
${parseIntArrayFn}
${readAllFn}
    public static void main(String[] args) throws Exception {
        String[] lines = readAll().split("\\\\R");
        int[] arr = parseIntArray(lines[0].trim());
        int k = Integer.parseInt(lines[1].trim());
        int[] res = new Solution().${method}(arr, k);
        System.out.println(Arrays.toString(res).replaceAll(" ", ""));
    }
}`,

    twoIntArrayToInt: (method) => `
import java.util.*;

public class Main {
${parseIntArrayFn}
${readAllFn}
    public static void main(String[] args) throws Exception {
        String[] lines = readAll().split("\\\\R");
        int[] a = parseIntArray(lines[0].trim());
        int[] b = parseIntArray(lines[1].trim());
        System.out.println(new Solution().${method}(a, b));
    }
}`,

    twoIntArrayToDouble: `
import java.util.*;

public class Main {
${parseIntArrayFn}
${readAllFn}
    public static void main(String[] args) throws Exception {
        String[] lines = readAll().split("\\\\R");
        int[] a = parseIntArray(lines[0].trim());
        int[] b = lines.length > 1 ? parseIntArray(lines[1].trim()) : new int[0];
        double res = new Solution().findMedianSortedArrays(a, b);
        System.out.println(res);
    }
}`,

    intArrayToBoolean: (method) => `
import java.util.*;

public class Main {
${parseIntArrayFn}
${readAllFn}
    public static void main(String[] args) throws Exception {
        int[] arr = parseIntArray(readAll());
        boolean res = new Solution().${method}(arr);
        System.out.println(res ? "true" : "false");
    }
}`,

    threeSum: `
import java.util.*;

public class Main {
${parseIntArrayFn}
${readAllFn}
    public static void main(String[] args) throws Exception {
        int[] nums = parseIntArray(readAll());
        List<List<Integer>> res = new Solution().threeSum(nums);
        List<String> listStrs = new ArrayList<>();
        for (List<Integer> list : res) {
            List<Integer> sorted = new ArrayList<>(list);
            Collections.sort(sorted);
            listStrs.add(sorted.toString().replaceAll(" ", ""));
        }
        Collections.sort(listStrs);
        System.out.println(listStrs.toString().replaceAll(" ", ""));
    }
}`,

    groupAnagrams: `
import java.util.*;
import java.util.regex.*;

public class Main {
${parseStringArrayFn}
${readAllFn}
    public static void main(String[] args) throws Exception {
        String[] strs = parseStringArray(readAll());
        List<List<String>> res = new Solution().groupAnagrams(strs);
        List<String> listStrs = new ArrayList<>();
        for (List<String> list : res) {
            List<String> sorted = new ArrayList<>(list);
            Collections.sort(sorted);
            listStrs.add(sorted.toString().replaceAll(" ", ""));
        }
        Collections.sort(listStrs);
        System.out.println(listStrs.toString().replaceAll(" ", ""));
    }
}`,

    coinChange: `
import java.util.*;

public class Main {
${parseIntArrayFn}
${readAllFn}
    public static void main(String[] args) throws Exception {
        String[] lines = readAll().split("\\\\R");
        int[] coins = parseIntArray(lines[0].trim());
        int amount = Integer.parseInt(lines[1].trim());
        System.out.println(new Solution().coinChange(coins, amount));
    }
}`,

    wordBreak: `
import java.util.*;
import java.util.regex.*;

public class Main {
${parseStringArrayFn}
${readAllFn}
    public static void main(String[] args) throws Exception {
        String[] lines = readAll().split("\\\\R");
        String s = lines[0].trim();
        String[] words = parseStringArray(lines[1].trim());
        boolean res = new Solution().wordBreak(s, words);
        System.out.println(res ? "true" : "false");
    }
}`,

    rotateArray: `
import java.util.*;

public class Main {
${parseIntArrayFn}
${printIntArrayFn}
${readAllFn}
    public static void main(String[] args) throws Exception {
        String[] lines = readAll().split("\\\\R");
        int[] nums = parseIntArray(lines[0].trim());
        int k = Integer.parseInt(lines[1].trim());
        new Solution().rotate(nums, k);
        printIntArray(nums);
    }
}`,

    stringAndIntToInt: (method) => `
import java.util.*;

public class Main {
${readAllFn}
    public static void main(String[] args) throws Exception {
        String[] lines = readAll().split("\\\\R");
        String s = lines[0].trim();
        int k = Integer.parseInt(lines[1].trim());
        System.out.println(new Solution().${method}(s, k));
    }
}`,

    intAndIntArrayToInt: (method) => `
import java.util.*;

public class Main {
${parseIntArrayFn}
${readAllFn}
    public static void main(String[] args) throws Exception {
        String[] lines = readAll().split("\\\\R");
        int target = Integer.parseInt(lines[0].trim());
        int[] nums = parseIntArray(lines[1].trim());
        System.out.println(new Solution().${method}(target, nums));
    }
}`,

    twoStringsToIntArray: (method) => `
import java.util.*;

public class Main {
${readAllFn}
    public static void main(String[] args) throws Exception {
        String[] lines = readAll().split("\\\\R");
        String s = lines.length > 0 ? lines[0].trim() : "";
        String p = lines.length > 1 ? lines[1].trim() : "";
        List<Integer> res = new Solution().${method}(s, p);
        System.out.println(res.toString().replaceAll(" ", ""));
    }
}`,

    charMatrixToInt: (method) => `
import java.util.*;

public class Main {
${parseCharMatrixFn}
${readAllFn}
    public static void main(String[] args) throws Exception {
        char[][] matrix = parseCharMatrix(readAll());
        System.out.println(new Solution().${method}(matrix));
    }
}`,

    intMatrixToInt: (method) => `
import java.util.*;
import java.util.regex.*;

public class Main {
${parseIntArrayFn}
${parseMatrixFn}
${readAllFn}
    public static void main(String[] args) throws Exception {
        int[][] matrix = parseMatrix(readAll());
        System.out.println(new Solution().${method}(matrix));
    }
}`,

    intMatrixAndIntToBoolean: (method) => `
import java.util.*;
import java.util.regex.*;

public class Main {
${parseIntArrayFn}
${parseMatrixFn}
${readAllFn}
    public static void main(String[] args) throws Exception {
        String[] lines = readAll().split("\\\\R");
        int target = Integer.parseInt(lines[lines.length - 1].trim());
        StringBuilder sb = new StringBuilder();
        for (int i = 0; i < lines.length - 1; i++) sb.append(lines[i]).append("\\n");
        int[][] matrix = parseMatrix(sb.toString());
        boolean res = new Solution().${method}(matrix, target);
        System.out.println(res ? "true" : "false");
    }
}`,

    intMatrixInPlace: (method) => `
import java.util.*;
import java.util.regex.*;

public class Main {
${parseIntArrayFn}
${parseMatrixFn}
${readAllFn}
    public static void main(String[] args) throws Exception {
        int[][] matrix = parseMatrix(readAll());
        new Solution().${method}(matrix);
        StringBuilder sb = new StringBuilder("[");
        for (int i = 0; i < matrix.length; i++) {
            sb.append(Arrays.toString(matrix[i]).replaceAll(" ", ""));
            if (i < matrix.length - 1) sb.append(",");
        }
        sb.append("]");
        System.out.println(sb.toString());
    }
}`,

    intMatrixToIntArray: (method) => `
import java.util.*;
import java.util.regex.*;

public class Main {
${parseIntArrayFn}
${parseMatrixFn}
${readAllFn}
    public static void main(String[] args) throws Exception {
        int[][] matrix = parseMatrix(readAll());
        List<Integer> res = new Solution().${method}(matrix);
        System.out.println(res.toString().replaceAll(" ", ""));
    }
}`,

    courseSchedule: `
import java.util.*;
import java.util.regex.*;

public class Main {
${parseIntArrayFn}
${parseMatrixFn}
${readAllFn}
    public static void main(String[] args) throws Exception {
        String[] lines = readAll().split("\\\\R");
        int numCourses = Integer.parseInt(lines[0].trim());
        int[][] prereq = lines.length > 1 ? parseMatrix(lines[1].trim()) : new int[0][0];
        boolean res = new Solution().canFinish(numCourses, prereq);
        System.out.println(res ? "true" : "false");
    }
}`,

    wordBreak2: `
import java.util.*;
import java.util.regex.*;

public class Main {
${parseStringArrayFn}
${readAllFn}
    public static void main(String[] args) throws Exception {
        String[] lines = readAll().split("\\\\R");
        String s = lines[0].trim();
        String[] words = parseStringArray(lines[1].trim());
        List<String> res = new Solution().wordBreak(s, Arrays.asList(words));
        Collections.sort(res);
        System.out.println(res.toString().replaceAll(" ", ""));
    }
}`,

    wordSearch2: `
import java.util.*;
import java.util.regex.*;

public class Main {
${parseCharMatrixFn}
${parseStringArrayFn}
${readAllFn}
    public static void main(String[] args) throws Exception {
        String[] lines = readAll().split("\\\\R");
        String wordsStr = lines[lines.length - 1].trim();
        StringBuilder sb = new StringBuilder();
        for (int i = 0; i < lines.length - 1; i++) sb.append(lines[i]).append("\\n");
        char[][] board = parseCharMatrix(sb.toString());
        String[] words = parseStringArray(wordsStr);
        List<String> res = new Solution().findWords(board, words);
        Collections.sort(res);
        System.out.println(res.toString().replaceAll(" ", ""));
    }
}`
};

const wrapDriver = (body) => body.trim();

module.exports = {
    drivers,
    wrapDriver,
    d: (key, method) => {
        const tpl = drivers[key];
        if (typeof tpl === 'function') return wrapDriver(tpl(method));
        return wrapDriver(tpl);
    }
};
