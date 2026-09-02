module.exports = [
    {
        "question_number": 81,
        "title": "Trapping Rain Water",
        "level": "Hard",
        "tags": [
            "Array",
            "Two Pointers",
            "Dynamic Programming",
            "Stack",
            "Monotonic Stack"
        ],
        "description": "Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.",
        "constraints": "n == height.length\n1 <= n <= 2 * 10^4\n0 <= height[i] <= 10^5",
        "starter": "class Solution {\n    public int trap(int[] height) {\n        // Write your code here\n        return 0;\n    }\n}",
        "driver": {
            "key": "intArrayToInt",
            "method": "trap"
        },
        "testcases": [
            {
                "input": "[0,1,0,2,1,0,1,3,2,1,2,1]",
                "expected_output": "6",
                "is_sample": true
            },
            {
                "input": "[4,2,0,3,2,5]",
                "expected_output": "9",
                "is_sample": true
            },
            {
                "input": "[2,0,3,1,2,0,4]",
                "expected_output": "8",
                "is_sample": false
            },
            {
                "input": "[4,0,6,1,4,0,8]",
                "expected_output": "17",
                "is_sample": false
            },
            {
                "input": "[6,0,9,1,6,0,12]",
                "expected_output": "26",
                "is_sample": false
            },
            {
                "input": "[8,0,12,1,8,0,16]",
                "expected_output": "35",
                "is_sample": false
            },
            {
                "input": "[10,0,15,1,10,0,20]",
                "expected_output": "44",
                "is_sample": false
            },
            {
                "input": "[12,0,18,1,12,0,24]",
                "expected_output": "53",
                "is_sample": false
            },
            {
                "input": "[14,0,21,1,14,0,28]",
                "expected_output": "62",
                "is_sample": false
            },
            {
                "input": "[16,0,24,1,16,0,32]",
                "expected_output": "71",
                "is_sample": false
            },
            {
                "input": "[18,0,27,1,18,0,36]",
                "expected_output": "80",
                "is_sample": false
            },
            {
                "input": "[20,0,30,1,20,0,40]",
                "expected_output": "89",
                "is_sample": false
            },
            {
                "input": "[22,0,33,1,22,0,44]",
                "expected_output": "98",
                "is_sample": false
            },
            {
                "input": "[24,0,36,1,24,0,48]",
                "expected_output": "107",
                "is_sample": false
            },
            {
                "input": "[26,0,39,1,26,0,52]",
                "expected_output": "116",
                "is_sample": false
            },
            {
                "input": "[28,0,42,1,28,0,56]",
                "expected_output": "125",
                "is_sample": false
            },
            {
                "input": "[30,0,45,1,30,0,60]",
                "expected_output": "134",
                "is_sample": false
            },
            {
                "input": "[32,0,48,1,32,0,64]",
                "expected_output": "143",
                "is_sample": false
            },
            {
                "input": "[34,0,51,1,34,0,68]",
                "expected_output": "152",
                "is_sample": false
            },
            {
                "input": "[36,0,54,1,36,0,72]",
                "expected_output": "161",
                "is_sample": false
            },
            {
                "input": "[38,0,57,1,38,0,76]",
                "expected_output": "170",
                "is_sample": false
            },
            {
                "input": "[40,0,60,1,40,0,80]",
                "expected_output": "179",
                "is_sample": false
            },
            {
                "input": "[42,0,63,1,42,0,84]",
                "expected_output": "188",
                "is_sample": false
            },
            {
                "input": "[44,0,66,1,44,0,88]",
                "expected_output": "197",
                "is_sample": false
            },
            {
                "input": "[46,0,69,1,46,0,92]",
                "expected_output": "206",
                "is_sample": false
            },
            {
                "input": "[48,0,72,1,48,0,96]",
                "expected_output": "215",
                "is_sample": false
            },
            {
                "input": "[50,0,75,1,50,0,100]",
                "expected_output": "224",
                "is_sample": false
            },
            {
                "input": "[52,0,78,1,52,0,104]",
                "expected_output": "233",
                "is_sample": false
            },
            {
                "input": "[54,0,81,1,54,0,108]",
                "expected_output": "242",
                "is_sample": false
            },
            {
                "input": "[56,0,84,1,56,0,112]",
                "expected_output": "251",
                "is_sample": false
            },
            {
                "input": "[58,0,87,1,58,0,116]",
                "expected_output": "260",
                "is_sample": false
            },
            {
                "input": "[60,0,90,1,60,0,120]",
                "expected_output": "269",
                "is_sample": false
            },
            {
                "input": "[62,0,93,1,62,0,124]",
                "expected_output": "278",
                "is_sample": false
            },
            {
                "input": "[64,0,96,1,64,0,128]",
                "expected_output": "287",
                "is_sample": false
            },
            {
                "input": "[66,0,99,1,66,0,132]",
                "expected_output": "296",
                "is_sample": false
            },
            {
                "input": "[68,0,102,1,68,0,136]",
                "expected_output": "305",
                "is_sample": false
            },
            {
                "input": "[70,0,105,1,70,0,140]",
                "expected_output": "314",
                "is_sample": false
            },
            {
                "input": "[72,0,108,1,72,0,144]",
                "expected_output": "323",
                "is_sample": false
            },
            {
                "input": "[74,0,111,1,74,0,148]",
                "expected_output": "332",
                "is_sample": false
            },
            {
                "input": "[76,0,114,1,76,0,152]",
                "expected_output": "341",
                "is_sample": false
            },
            {
                "input": "[78,0,117,1,78,0,156]",
                "expected_output": "350",
                "is_sample": false
            },
            {
                "input": "[80,0,120,1,80,0,160]",
                "expected_output": "359",
                "is_sample": false
            },
            {
                "input": "[82,0,123,1,82,0,164]",
                "expected_output": "368",
                "is_sample": false
            },
            {
                "input": "[84,0,126,1,84,0,168]",
                "expected_output": "377",
                "is_sample": false
            },
            {
                "input": "[86,0,129,1,86,0,172]",
                "expected_output": "386",
                "is_sample": false
            },
            {
                "input": "[88,0,132,1,88,0,176]",
                "expected_output": "395",
                "is_sample": false
            },
            {
                "input": "[90,0,135,1,90,0,180]",
                "expected_output": "404",
                "is_sample": false
            },
            {
                "input": "[92,0,138,1,92,0,184]",
                "expected_output": "413",
                "is_sample": false
            },
            {
                "input": "[94,0,141,1,94,0,188]",
                "expected_output": "422",
                "is_sample": false
            },
            {
                "input": "[96,0,144,1,96,0,192]",
                "expected_output": "431",
                "is_sample": false
            },
            {
                "input": "[98,0,147,1,98,0,196]",
                "expected_output": "440",
                "is_sample": false
            },
            {
                "input": "[100,0,150,1,100,0,200]",
                "expected_output": "449",
                "is_sample": false
            }
        ]
    },
    {
        "question_number": 82,
        "title": "Minimum Window Substring",
        "level": "Hard",
        "tags": [
            "Hash Table",
            "String",
            "Sliding Window"
        ],
        "description": "Given two strings s and t of lengths m and n respectively, return the minimum window substring of s such that every character in t (including duplicates) is included in the window. If there is no such substring, return the empty string \"\".\n\nInput format (2 lines):\nLine 1: s\nLine 2: t",
        "constraints": "m == s.length\nn == t.length\n1 <= m, n <= 10^5\ns and t consist of uppercase and lowercase English letters.",
        "starter": "class Solution {\n    public String minWindow(String s, String t) {\n        // Write your code here\n        return \"\";\n    }\n}",
        "driver": {
            "key": "twoStringsToString",
            "method": "minWindow"
        },
        "testcases": [
            {
                "input": "ADOBECODEBANC\nABC",
                "expected_output": "BANC",
                "is_sample": true
            },
            {
                "input": "a\na",
                "expected_output": "a",
                "is_sample": true
            },
            {
                "input": "a\naa",
                "expected_output": "",
                "is_sample": false
            },
            {
                "input": "ADOBEBCODEBANC\nABC",
                "expected_output": "BANC",
                "is_sample": false
            },
            {
                "input": "ADOBECCODEBANC\nABC",
                "expected_output": "BANC",
                "is_sample": false
            },
            {
                "input": "ADOBEDCODEBANC\nABC",
                "expected_output": "BANC",
                "is_sample": false
            },
            {
                "input": "ADOBEECODEBANC\nABC",
                "expected_output": "BANC",
                "is_sample": false
            },
            {
                "input": "ADOBEFCODEBANC\nABC",
                "expected_output": "BANC",
                "is_sample": false
            },
            {
                "input": "ADOBEGCODEBANC\nABC",
                "expected_output": "BANC",
                "is_sample": false
            },
            {
                "input": "ADOBEHCODEBANC\nABC",
                "expected_output": "BANC",
                "is_sample": false
            },
            {
                "input": "ADOBEICODEBANC\nABC",
                "expected_output": "BANC",
                "is_sample": false
            },
            {
                "input": "ADOBEJCODEBANC\nABC",
                "expected_output": "BANC",
                "is_sample": false
            },
            {
                "input": "ADOBEKCODEBANC\nABC",
                "expected_output": "BANC",
                "is_sample": false
            },
            {
                "input": "ADOBELCODEBANC\nABC",
                "expected_output": "BANC",
                "is_sample": false
            },
            {
                "input": "ADOBEMCODEBANC\nABC",
                "expected_output": "BANC",
                "is_sample": false
            },
            {
                "input": "ADOBENCODEBANC\nABC",
                "expected_output": "BANC",
                "is_sample": false
            },
            {
                "input": "ADOBEOCODEBANC\nABC",
                "expected_output": "BANC",
                "is_sample": false
            },
            {
                "input": "ADOBEPCODEBANC\nABC",
                "expected_output": "BANC",
                "is_sample": false
            },
            {
                "input": "ADOBEQCODEBANC\nABC",
                "expected_output": "BANC",
                "is_sample": false
            },
            {
                "input": "ADOBERCODEBANC\nABC",
                "expected_output": "BANC",
                "is_sample": false
            },
            {
                "input": "ADOBESCODEBANC\nABC",
                "expected_output": "BANC",
                "is_sample": false
            },
            {
                "input": "ADOBETCODEBANC\nABC",
                "expected_output": "BANC",
                "is_sample": false
            },
            {
                "input": "ADOBEUCODEBANC\nABC",
                "expected_output": "BANC",
                "is_sample": false
            },
            {
                "input": "ADOBEVCODEBANC\nABC",
                "expected_output": "BANC",
                "is_sample": false
            },
            {
                "input": "ADOBEWCODEBANC\nABC",
                "expected_output": "BANC",
                "is_sample": false
            },
            {
                "input": "ADOBEXCODEBANC\nABC",
                "expected_output": "BANC",
                "is_sample": false
            },
            {
                "input": "ADOBEYCODEBANC\nABC",
                "expected_output": "BANC",
                "is_sample": false
            },
            {
                "input": "ADOBEZCODEBANC\nABC",
                "expected_output": "BANC",
                "is_sample": false
            },
            {
                "input": "ADOBEACODEBANC\nABC",
                "expected_output": "BEAC",
                "is_sample": false
            },
            {
                "input": "ADOBEBCODEBANC\nABC",
                "expected_output": "BANC",
                "is_sample": false
            },
            {
                "input": "ADOBECCODEBANC\nABC",
                "expected_output": "BANC",
                "is_sample": false
            },
            {
                "input": "ADOBEDCODEBANC\nABC",
                "expected_output": "BANC",
                "is_sample": false
            },
            {
                "input": "ADOBEECODEBANC\nABC",
                "expected_output": "BANC",
                "is_sample": false
            },
            {
                "input": "ADOBEFCODEBANC\nABC",
                "expected_output": "BANC",
                "is_sample": false
            },
            {
                "input": "ADOBEGCODEBANC\nABC",
                "expected_output": "BANC",
                "is_sample": false
            },
            {
                "input": "ADOBEHCODEBANC\nABC",
                "expected_output": "BANC",
                "is_sample": false
            },
            {
                "input": "ADOBEICODEBANC\nABC",
                "expected_output": "BANC",
                "is_sample": false
            },
            {
                "input": "ADOBEJCODEBANC\nABC",
                "expected_output": "BANC",
                "is_sample": false
            },
            {
                "input": "ADOBEKCODEBANC\nABC",
                "expected_output": "BANC",
                "is_sample": false
            },
            {
                "input": "ADOBELCODEBANC\nABC",
                "expected_output": "BANC",
                "is_sample": false
            },
            {
                "input": "ADOBEMCODEBANC\nABC",
                "expected_output": "BANC",
                "is_sample": false
            },
            {
                "input": "ADOBENCODEBANC\nABC",
                "expected_output": "BANC",
                "is_sample": false
            },
            {
                "input": "ADOBEOCODEBANC\nABC",
                "expected_output": "BANC",
                "is_sample": false
            },
            {
                "input": "ADOBEPCODEBANC\nABC",
                "expected_output": "BANC",
                "is_sample": false
            },
            {
                "input": "ADOBEQCODEBANC\nABC",
                "expected_output": "BANC",
                "is_sample": false
            },
            {
                "input": "ADOBERCODEBANC\nABC",
                "expected_output": "BANC",
                "is_sample": false
            },
            {
                "input": "ADOBESCODEBANC\nABC",
                "expected_output": "BANC",
                "is_sample": false
            },
            {
                "input": "ADOBETCODEBANC\nABC",
                "expected_output": "BANC",
                "is_sample": false
            },
            {
                "input": "ADOBEUCODEBANC\nABC",
                "expected_output": "BANC",
                "is_sample": false
            },
            {
                "input": "ADOBEVCODEBANC\nABC",
                "expected_output": "BANC",
                "is_sample": false
            },
            {
                "input": "ADOBEWCODEBANC\nABC",
                "expected_output": "BANC",
                "is_sample": false
            },
            {
                "input": "ADOBEXCODEBANC\nABC",
                "expected_output": "BANC",
                "is_sample": false
            },
            {
                "input": "ADOBEYCODEBANC\nABC",
                "expected_output": "BANC",
                "is_sample": false
            }
        ]
    },
    {
        "question_number": 83,
        "title": "Longest Valid Parentheses",
        "level": "Hard",
        "tags": [
            "String",
            "Dynamic Programming",
            "Stack"
        ],
        "description": "Given a string containing just the characters '(' and ')', return the length of the longest valid (well-formed) parentheses substring.",
        "constraints": "0 <= s.length <= 3 * 10^4\ns[i] is '(', or ')'.",
        "starter": "class Solution {\n    public int longestValidParentheses(String s) {\n        // Write your code here\n        return 0;\n    }\n}",
        "driver": {
            "key": "stringToInt",
            "method": "longestValidParentheses"
        },
        "testcases": [
            {
                "input": "(()",
                "expected_output": "2",
                "is_sample": true
            },
            {
                "input": ")()())",
                "expected_output": "4",
                "is_sample": true
            },
            {
                "input": "",
                "expected_output": "0",
                "is_sample": false
            },
            {
                "input": "())()()",
                "expected_output": "4",
                "is_sample": false
            },
            {
                "input": "()())()()()",
                "expected_output": "6",
                "is_sample": false
            },
            {
                "input": "()()())()()()()",
                "expected_output": "8",
                "is_sample": false
            },
            {
                "input": "()()()())()()()()()",
                "expected_output": "10",
                "is_sample": false
            },
            {
                "input": "()()()()())()()()()()()",
                "expected_output": "12",
                "is_sample": false
            },
            {
                "input": "()()()()()())()()()()()()()",
                "expected_output": "14",
                "is_sample": false
            },
            {
                "input": "()()()()()()())()()()()()()()()",
                "expected_output": "16",
                "is_sample": false
            },
            {
                "input": "()()()()()()()())()()()()()()()()()",
                "expected_output": "18",
                "is_sample": false
            },
            {
                "input": "()()()()()()()()())",
                "expected_output": "18",
                "is_sample": false
            },
            {
                "input": ")()",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "())()()",
                "expected_output": "4",
                "is_sample": false
            },
            {
                "input": "()())()()()",
                "expected_output": "6",
                "is_sample": false
            },
            {
                "input": "()()())()()()()",
                "expected_output": "8",
                "is_sample": false
            },
            {
                "input": "()()()())()()()()()",
                "expected_output": "10",
                "is_sample": false
            },
            {
                "input": "()()()()())()()()()()()",
                "expected_output": "12",
                "is_sample": false
            },
            {
                "input": "()()()()()())()()()()()()()",
                "expected_output": "14",
                "is_sample": false
            },
            {
                "input": "()()()()()()())()()()()()()()()",
                "expected_output": "16",
                "is_sample": false
            },
            {
                "input": "()()()()()()()())()()()()()()()()()",
                "expected_output": "18",
                "is_sample": false
            },
            {
                "input": "()()()()()()()()())",
                "expected_output": "18",
                "is_sample": false
            },
            {
                "input": ")()",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "())()()",
                "expected_output": "4",
                "is_sample": false
            },
            {
                "input": "()())()()()",
                "expected_output": "6",
                "is_sample": false
            },
            {
                "input": "()()())()()()()",
                "expected_output": "8",
                "is_sample": false
            },
            {
                "input": "()()()())()()()()()",
                "expected_output": "10",
                "is_sample": false
            },
            {
                "input": "()()()()())()()()()()()",
                "expected_output": "12",
                "is_sample": false
            },
            {
                "input": "()()()()()())()()()()()()()",
                "expected_output": "14",
                "is_sample": false
            },
            {
                "input": "()()()()()()())()()()()()()()()",
                "expected_output": "16",
                "is_sample": false
            },
            {
                "input": "()()()()()()()())()()()()()()()()()",
                "expected_output": "18",
                "is_sample": false
            },
            {
                "input": "()()()()()()()()())",
                "expected_output": "18",
                "is_sample": false
            },
            {
                "input": ")()",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "())()()",
                "expected_output": "4",
                "is_sample": false
            },
            {
                "input": "()())()()()",
                "expected_output": "6",
                "is_sample": false
            },
            {
                "input": "()()())()()()()",
                "expected_output": "8",
                "is_sample": false
            },
            {
                "input": "()()()())()()()()()",
                "expected_output": "10",
                "is_sample": false
            },
            {
                "input": "()()()()())()()()()()()",
                "expected_output": "12",
                "is_sample": false
            },
            {
                "input": "()()()()()())()()()()()()()",
                "expected_output": "14",
                "is_sample": false
            },
            {
                "input": "()()()()()()())()()()()()()()()",
                "expected_output": "16",
                "is_sample": false
            },
            {
                "input": "()()()()()()()())()()()()()()()()()",
                "expected_output": "18",
                "is_sample": false
            },
            {
                "input": "()()()()()()()()())",
                "expected_output": "18",
                "is_sample": false
            },
            {
                "input": ")()",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "())()()",
                "expected_output": "4",
                "is_sample": false
            },
            {
                "input": "()())()()()",
                "expected_output": "6",
                "is_sample": false
            },
            {
                "input": "()()())()()()()",
                "expected_output": "8",
                "is_sample": false
            },
            {
                "input": "()()()())()()()()()",
                "expected_output": "10",
                "is_sample": false
            },
            {
                "input": "()()()()())()()()()()()",
                "expected_output": "12",
                "is_sample": false
            },
            {
                "input": "()()()()()())()()()()()()()",
                "expected_output": "14",
                "is_sample": false
            },
            {
                "input": "()()()()()()())()()()()()()()()",
                "expected_output": "16",
                "is_sample": false
            },
            {
                "input": "()()()()()()()())()()()()()()()()()",
                "expected_output": "18",
                "is_sample": false
            },
            {
                "input": "()()()()()()()()())",
                "expected_output": "18",
                "is_sample": false
            },
            {
                "input": ")()",
                "expected_output": "2",
                "is_sample": false
            }
        ]
    },
    {
        "question_number": 84,
        "title": "Edit Distance",
        "level": "Hard",
        "tags": [
            "String",
            "Dynamic Programming"
        ],
        "description": "Given two strings word1 and word2, return the minimum number of operations required to convert word1 to word2.\n\nYou have the following three operations permitted on a word:\n- Insert a character\n- Delete a character\n- Replace a character\n\nInput format (2 lines):\nLine 1: word1\nLine 2: word2",
        "constraints": "0 <= word1.length, word2.length <= 500\nword1 and word2 consist of lowercase English letters.",
        "starter": "class Solution {\n    public int minDistance(String word1, String word2) {\n        // Write your code here\n        return 0;\n    }\n}",
        "driver": {
            "key": "twoStringsToInt",
            "method": "minDistance"
        },
        "testcases": [
            {
                "input": "horse\nros",
                "expected_output": "3",
                "is_sample": true
            },
            {
                "input": "intention\nexecution",
                "expected_output": "5",
                "is_sample": true
            },
            {
                "input": "code1\ncoder2",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "code2\ncoder3",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "code3\ncoder4",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "code4\ncoder5",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "code5\ncoder6",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "code6\ncoder7",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "code7\ncoder8",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "code8\ncoder9",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "code9\ncoder10",
                "expected_output": "3",
                "is_sample": false
            },
            {
                "input": "code10\ncoder11",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "code11\ncoder12",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "code12\ncoder13",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "code13\ncoder14",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "code14\ncoder15",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "code15\ncoder16",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "code16\ncoder17",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "code17\ncoder18",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "code18\ncoder19",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "code19\ncoder20",
                "expected_output": "3",
                "is_sample": false
            },
            {
                "input": "code20\ncoder21",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "code21\ncoder22",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "code22\ncoder23",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "code23\ncoder24",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "code24\ncoder25",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "code25\ncoder26",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "code26\ncoder27",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "code27\ncoder28",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "code28\ncoder29",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "code29\ncoder30",
                "expected_output": "3",
                "is_sample": false
            },
            {
                "input": "code30\ncoder31",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "code31\ncoder32",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "code32\ncoder33",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "code33\ncoder34",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "code34\ncoder35",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "code35\ncoder36",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "code36\ncoder37",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "code37\ncoder38",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "code38\ncoder39",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "code39\ncoder40",
                "expected_output": "3",
                "is_sample": false
            },
            {
                "input": "code40\ncoder41",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "code41\ncoder42",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "code42\ncoder43",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "code43\ncoder44",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "code44\ncoder45",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "code45\ncoder46",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "code46\ncoder47",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "code47\ncoder48",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "code48\ncoder49",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "code49\ncoder50",
                "expected_output": "3",
                "is_sample": false
            },
            {
                "input": "code50\ncoder51",
                "expected_output": "2",
                "is_sample": false
            }
        ]
    },
    {
        "question_number": 85,
        "title": "First Missing Positive",
        "level": "Hard",
        "tags": [
            "Array",
            "Hash Table"
        ],
        "description": "Given an unsorted integer array nums, return the smallest missing positive integer.\n\nYou must implement an algorithm that runs in O(n) time and uses O(1) auxiliary space.",
        "constraints": "1 <= nums.length <= 10^5\n-2^31 <= nums[i] <= 2^31 - 1",
        "starter": "class Solution {\n    public int firstMissingPositive(int[] nums) {\n        // Write your code here\n        return 1;\n    }\n}",
        "driver": {
            "key": "intArrayToInt",
            "method": "firstMissingPositive"
        },
        "testcases": [
            {
                "input": "[1,2,0]",
                "expected_output": "3",
                "is_sample": true
            },
            {
                "input": "[3,4,-1,1]",
                "expected_output": "2",
                "is_sample": true
            },
            {
                "input": "[7,8,9,11,12]",
                "expected_output": "1",
                "is_sample": false
            },
            {
                "input": "[1,2,4,5,-1,0]",
                "expected_output": "3",
                "is_sample": false
            },
            {
                "input": "[1,2,5,6,-1,0]",
                "expected_output": "3",
                "is_sample": false
            },
            {
                "input": "[1,2,6,7,-1,0]",
                "expected_output": "3",
                "is_sample": false
            },
            {
                "input": "[1,2,7,8,-1,0]",
                "expected_output": "3",
                "is_sample": false
            },
            {
                "input": "[1,2,8,9,-1,0]",
                "expected_output": "3",
                "is_sample": false
            },
            {
                "input": "[1,2,9,10,-1,0]",
                "expected_output": "3",
                "is_sample": false
            },
            {
                "input": "[1,2,10,11,-1,0]",
                "expected_output": "3",
                "is_sample": false
            },
            {
                "input": "[1,2,11,12,-1,0]",
                "expected_output": "3",
                "is_sample": false
            },
            {
                "input": "[1,2,12,13,-1,0]",
                "expected_output": "3",
                "is_sample": false
            },
            {
                "input": "[1,2,13,14,-1,0]",
                "expected_output": "3",
                "is_sample": false
            },
            {
                "input": "[1,2,14,15,-1,0]",
                "expected_output": "3",
                "is_sample": false
            },
            {
                "input": "[1,2,15,16,-1,0]",
                "expected_output": "3",
                "is_sample": false
            },
            {
                "input": "[1,2,16,17,-1,0]",
                "expected_output": "3",
                "is_sample": false
            },
            {
                "input": "[1,2,17,18,-1,0]",
                "expected_output": "3",
                "is_sample": false
            },
            {
                "input": "[1,2,18,19,-1,0]",
                "expected_output": "3",
                "is_sample": false
            },
            {
                "input": "[1,2,19,20,-1,0]",
                "expected_output": "3",
                "is_sample": false
            },
            {
                "input": "[1,2,20,21,-1,0]",
                "expected_output": "3",
                "is_sample": false
            },
            {
                "input": "[1,2,21,22,-1,0]",
                "expected_output": "3",
                "is_sample": false
            },
            {
                "input": "[1,2,22,23,-1,0]",
                "expected_output": "3",
                "is_sample": false
            },
            {
                "input": "[1,2,23,24,-1,0]",
                "expected_output": "3",
                "is_sample": false
            },
            {
                "input": "[1,2,24,25,-1,0]",
                "expected_output": "3",
                "is_sample": false
            },
            {
                "input": "[1,2,25,26,-1,0]",
                "expected_output": "3",
                "is_sample": false
            },
            {
                "input": "[1,2,26,27,-1,0]",
                "expected_output": "3",
                "is_sample": false
            },
            {
                "input": "[1,2,27,28,-1,0]",
                "expected_output": "3",
                "is_sample": false
            },
            {
                "input": "[1,2,28,29,-1,0]",
                "expected_output": "3",
                "is_sample": false
            },
            {
                "input": "[1,2,29,30,-1,0]",
                "expected_output": "3",
                "is_sample": false
            },
            {
                "input": "[1,2,30,31,-1,0]",
                "expected_output": "3",
                "is_sample": false
            },
            {
                "input": "[1,2,31,32,-1,0]",
                "expected_output": "3",
                "is_sample": false
            },
            {
                "input": "[1,2,32,33,-1,0]",
                "expected_output": "3",
                "is_sample": false
            },
            {
                "input": "[1,2,33,34,-1,0]",
                "expected_output": "3",
                "is_sample": false
            },
            {
                "input": "[1,2,34,35,-1,0]",
                "expected_output": "3",
                "is_sample": false
            },
            {
                "input": "[1,2,35,36,-1,0]",
                "expected_output": "3",
                "is_sample": false
            },
            {
                "input": "[1,2,36,37,-1,0]",
                "expected_output": "3",
                "is_sample": false
            },
            {
                "input": "[1,2,37,38,-1,0]",
                "expected_output": "3",
                "is_sample": false
            },
            {
                "input": "[1,2,38,39,-1,0]",
                "expected_output": "3",
                "is_sample": false
            },
            {
                "input": "[1,2,39,40,-1,0]",
                "expected_output": "3",
                "is_sample": false
            },
            {
                "input": "[1,2,40,41,-1,0]",
                "expected_output": "3",
                "is_sample": false
            },
            {
                "input": "[1,2,41,42,-1,0]",
                "expected_output": "3",
                "is_sample": false
            },
            {
                "input": "[1,2,42,43,-1,0]",
                "expected_output": "3",
                "is_sample": false
            },
            {
                "input": "[1,2,43,44,-1,0]",
                "expected_output": "3",
                "is_sample": false
            },
            {
                "input": "[1,2,44,45,-1,0]",
                "expected_output": "3",
                "is_sample": false
            },
            {
                "input": "[1,2,45,46,-1,0]",
                "expected_output": "3",
                "is_sample": false
            },
            {
                "input": "[1,2,46,47,-1,0]",
                "expected_output": "3",
                "is_sample": false
            },
            {
                "input": "[1,2,47,48,-1,0]",
                "expected_output": "3",
                "is_sample": false
            },
            {
                "input": "[1,2,48,49,-1,0]",
                "expected_output": "3",
                "is_sample": false
            },
            {
                "input": "[1,2,49,50,-1,0]",
                "expected_output": "3",
                "is_sample": false
            },
            {
                "input": "[1,2,50,51,-1,0]",
                "expected_output": "3",
                "is_sample": false
            },
            {
                "input": "[1,2,51,52,-1,0]",
                "expected_output": "3",
                "is_sample": false
            },
            {
                "input": "[1,2,52,53,-1,0]",
                "expected_output": "3",
                "is_sample": false
            },
            {
                "input": "[1,2,53,54,-1,0]",
                "expected_output": "3",
                "is_sample": false
            }
        ]
    },
    {
        "question_number": 86,
        "title": "Sliding Window Maximum",
        "level": "Hard",
        "tags": [
            "Array",
            "Queue",
            "Sliding Window",
            "Heap",
            "Monotonic Queue"
        ],
        "description": "You are given an array of integers nums, there is a sliding window of size k which is moving from the very left of the array to the very right. You can only see the k numbers in the window. Each time the sliding window moves right by one position.\n\nReturn the max sliding window.\n\nInput format (2 lines):\nLine 1: nums as JSON array\nLine 2: k",
        "constraints": "1 <= nums.length <= 10^5\n-10^4 <= nums[i] <= 10^4\n1 <= k <= nums.length",
        "starter": "class Solution {\n    public int[] maxSlidingWindow(int[] nums, int k) {\n        // Write your code here\n        return new int[]{};\n    }\n}",
        "driver": {
            "key": "intArrayAndKToIntArray",
            "method": "maxSlidingWindow"
        },
        "testcases": [
            {
                "input": "[1,3,-1,-3,5,3,6,7]\n3",
                "expected_output": "[3,3,5,5,6,7]",
                "is_sample": true
            },
            {
                "input": "[1]\n1",
                "expected_output": "[1]",
                "is_sample": true
            },
            {
                "input": "[1,2,-1,4,4]\n3",
                "expected_output": "[2,4,4]",
                "is_sample": false
            },
            {
                "input": "[2,4,-2,5,8]\n3",
                "expected_output": "[4,5,8]",
                "is_sample": false
            },
            {
                "input": "[3,6,-3,6,12]\n3",
                "expected_output": "[6,6,12]",
                "is_sample": false
            },
            {
                "input": "[4,8,-4,7,16]\n3",
                "expected_output": "[8,8,16]",
                "is_sample": false
            },
            {
                "input": "[5,10,-5,8,20]\n3",
                "expected_output": "[10,10,20]",
                "is_sample": false
            },
            {
                "input": "[6,12,-6,9,24]\n3",
                "expected_output": "[12,12,24]",
                "is_sample": false
            },
            {
                "input": "[7,14,-7,10,28]\n3",
                "expected_output": "[14,14,28]",
                "is_sample": false
            },
            {
                "input": "[8,16,-8,11,32]\n3",
                "expected_output": "[16,16,32]",
                "is_sample": false
            },
            {
                "input": "[9,18,-9,12,36]\n3",
                "expected_output": "[18,18,36]",
                "is_sample": false
            },
            {
                "input": "[10,20,-10,13,40]\n3",
                "expected_output": "[20,20,40]",
                "is_sample": false
            },
            {
                "input": "[11,22,-11,14,44]\n3",
                "expected_output": "[22,22,44]",
                "is_sample": false
            },
            {
                "input": "[12,24,-12,15,48]\n3",
                "expected_output": "[24,24,48]",
                "is_sample": false
            },
            {
                "input": "[13,26,-13,16,52]\n3",
                "expected_output": "[26,26,52]",
                "is_sample": false
            },
            {
                "input": "[14,28,-14,17,56]\n3",
                "expected_output": "[28,28,56]",
                "is_sample": false
            },
            {
                "input": "[15,30,-15,18,60]\n3",
                "expected_output": "[30,30,60]",
                "is_sample": false
            },
            {
                "input": "[16,32,-16,19,64]\n3",
                "expected_output": "[32,32,64]",
                "is_sample": false
            },
            {
                "input": "[17,34,-17,20,68]\n3",
                "expected_output": "[34,34,68]",
                "is_sample": false
            },
            {
                "input": "[18,36,-18,21,72]\n3",
                "expected_output": "[36,36,72]",
                "is_sample": false
            },
            {
                "input": "[19,38,-19,22,76]\n3",
                "expected_output": "[38,38,76]",
                "is_sample": false
            },
            {
                "input": "[20,40,-20,23,80]\n3",
                "expected_output": "[40,40,80]",
                "is_sample": false
            },
            {
                "input": "[21,42,-21,24,84]\n3",
                "expected_output": "[42,42,84]",
                "is_sample": false
            },
            {
                "input": "[22,44,-22,25,88]\n3",
                "expected_output": "[44,44,88]",
                "is_sample": false
            },
            {
                "input": "[23,46,-23,26,92]\n3",
                "expected_output": "[46,46,92]",
                "is_sample": false
            },
            {
                "input": "[24,48,-24,27,96]\n3",
                "expected_output": "[48,48,96]",
                "is_sample": false
            },
            {
                "input": "[25,50,-25,28,100]\n3",
                "expected_output": "[50,50,100]",
                "is_sample": false
            },
            {
                "input": "[26,52,-26,29,104]\n3",
                "expected_output": "[52,52,104]",
                "is_sample": false
            },
            {
                "input": "[27,54,-27,30,108]\n3",
                "expected_output": "[54,54,108]",
                "is_sample": false
            },
            {
                "input": "[28,56,-28,31,112]\n3",
                "expected_output": "[56,56,112]",
                "is_sample": false
            },
            {
                "input": "[29,58,-29,32,116]\n3",
                "expected_output": "[58,58,116]",
                "is_sample": false
            },
            {
                "input": "[30,60,-30,33,120]\n3",
                "expected_output": "[60,60,120]",
                "is_sample": false
            },
            {
                "input": "[31,62,-31,34,124]\n3",
                "expected_output": "[62,62,124]",
                "is_sample": false
            },
            {
                "input": "[32,64,-32,35,128]\n3",
                "expected_output": "[64,64,128]",
                "is_sample": false
            },
            {
                "input": "[33,66,-33,36,132]\n3",
                "expected_output": "[66,66,132]",
                "is_sample": false
            },
            {
                "input": "[34,68,-34,37,136]\n3",
                "expected_output": "[68,68,136]",
                "is_sample": false
            },
            {
                "input": "[35,70,-35,38,140]\n3",
                "expected_output": "[70,70,140]",
                "is_sample": false
            },
            {
                "input": "[36,72,-36,39,144]\n3",
                "expected_output": "[72,72,144]",
                "is_sample": false
            },
            {
                "input": "[37,74,-37,40,148]\n3",
                "expected_output": "[74,74,148]",
                "is_sample": false
            },
            {
                "input": "[38,76,-38,41,152]\n3",
                "expected_output": "[76,76,152]",
                "is_sample": false
            },
            {
                "input": "[39,78,-39,42,156]\n3",
                "expected_output": "[78,78,156]",
                "is_sample": false
            },
            {
                "input": "[40,80,-40,43,160]\n3",
                "expected_output": "[80,80,160]",
                "is_sample": false
            },
            {
                "input": "[41,82,-41,44,164]\n3",
                "expected_output": "[82,82,164]",
                "is_sample": false
            },
            {
                "input": "[42,84,-42,45,168]\n3",
                "expected_output": "[84,84,168]",
                "is_sample": false
            },
            {
                "input": "[43,86,-43,46,172]\n3",
                "expected_output": "[86,86,172]",
                "is_sample": false
            },
            {
                "input": "[44,88,-44,47,176]\n3",
                "expected_output": "[88,88,176]",
                "is_sample": false
            },
            {
                "input": "[45,90,-45,48,180]\n3",
                "expected_output": "[90,90,180]",
                "is_sample": false
            },
            {
                "input": "[46,92,-46,49,184]\n3",
                "expected_output": "[92,92,184]",
                "is_sample": false
            },
            {
                "input": "[47,94,-47,50,188]\n3",
                "expected_output": "[94,94,188]",
                "is_sample": false
            },
            {
                "input": "[48,96,-48,51,192]\n3",
                "expected_output": "[96,96,192]",
                "is_sample": false
            },
            {
                "input": "[49,98,-49,52,196]\n3",
                "expected_output": "[98,98,196]",
                "is_sample": false
            },
            {
                "input": "[50,100,-50,53,200]\n3",
                "expected_output": "[100,100,200]",
                "is_sample": false
            }
        ]
    },
    {
        "question_number": 87,
        "title": "Median of Two Sorted Arrays",
        "level": "Hard",
        "tags": [
            "Array",
            "Binary Search",
            "Divide and Conquer"
        ],
        "description": "Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.\n\nThe overall run time complexity should be O(log (m+n)).\n\nInput format (2 lines):\nLine 1: nums1 as JSON array\nLine 2: nums2 as JSON array",
        "constraints": "nums1.length == m\nnums2.length == n\n0 <= m, n <= 1000\n1 <= m + n <= 2000\n-10^6 <= nums1[i], nums2[i] <= 10^6",
        "starter": "class Solution {\n    public double findMedianSortedArrays(int[] nums1, int[] nums2) {\n        // Write your code here\n        return 0.0;\n    }\n}",
        "driver": "twoIntArrayToDouble",
        "testcases": [
            {
                "input": "[1,3]\n[2]",
                "expected_output": "2.0",
                "is_sample": true
            },
            {
                "input": "[1,2]\n[3,4]",
                "expected_output": "2.5",
                "is_sample": true
            },
            {
                "input": "[1,4]\n[2,3]",
                "expected_output": "2.5",
                "is_sample": false
            },
            {
                "input": "[2,5]\n[3,4]",
                "expected_output": "3.5",
                "is_sample": false
            },
            {
                "input": "[3,6]\n[4,5]",
                "expected_output": "4.5",
                "is_sample": false
            },
            {
                "input": "[4,7]\n[5,6]",
                "expected_output": "5.5",
                "is_sample": false
            },
            {
                "input": "[5,8]\n[6,7]",
                "expected_output": "6.5",
                "is_sample": false
            },
            {
                "input": "[6,9]\n[7,8]",
                "expected_output": "7.5",
                "is_sample": false
            },
            {
                "input": "[7,10]\n[8,9]",
                "expected_output": "8.5",
                "is_sample": false
            },
            {
                "input": "[8,11]\n[9,10]",
                "expected_output": "9.5",
                "is_sample": false
            },
            {
                "input": "[9,12]\n[10,11]",
                "expected_output": "10.5",
                "is_sample": false
            },
            {
                "input": "[10,13]\n[11,12]",
                "expected_output": "11.5",
                "is_sample": false
            },
            {
                "input": "[11,14]\n[12,13]",
                "expected_output": "12.5",
                "is_sample": false
            },
            {
                "input": "[12,15]\n[13,14]",
                "expected_output": "13.5",
                "is_sample": false
            },
            {
                "input": "[13,16]\n[14,15]",
                "expected_output": "14.5",
                "is_sample": false
            },
            {
                "input": "[14,17]\n[15,16]",
                "expected_output": "15.5",
                "is_sample": false
            },
            {
                "input": "[15,18]\n[16,17]",
                "expected_output": "16.5",
                "is_sample": false
            },
            {
                "input": "[16,19]\n[17,18]",
                "expected_output": "17.5",
                "is_sample": false
            },
            {
                "input": "[17,20]\n[18,19]",
                "expected_output": "18.5",
                "is_sample": false
            },
            {
                "input": "[18,21]\n[19,20]",
                "expected_output": "19.5",
                "is_sample": false
            },
            {
                "input": "[19,22]\n[20,21]",
                "expected_output": "20.5",
                "is_sample": false
            },
            {
                "input": "[20,23]\n[21,22]",
                "expected_output": "21.5",
                "is_sample": false
            },
            {
                "input": "[21,24]\n[22,23]",
                "expected_output": "22.5",
                "is_sample": false
            },
            {
                "input": "[22,25]\n[23,24]",
                "expected_output": "23.5",
                "is_sample": false
            },
            {
                "input": "[23,26]\n[24,25]",
                "expected_output": "24.5",
                "is_sample": false
            },
            {
                "input": "[24,27]\n[25,26]",
                "expected_output": "25.5",
                "is_sample": false
            },
            {
                "input": "[25,28]\n[26,27]",
                "expected_output": "26.5",
                "is_sample": false
            },
            {
                "input": "[26,29]\n[27,28]",
                "expected_output": "27.5",
                "is_sample": false
            },
            {
                "input": "[27,30]\n[28,29]",
                "expected_output": "28.5",
                "is_sample": false
            },
            {
                "input": "[28,31]\n[29,30]",
                "expected_output": "29.5",
                "is_sample": false
            },
            {
                "input": "[29,32]\n[30,31]",
                "expected_output": "30.5",
                "is_sample": false
            },
            {
                "input": "[30,33]\n[31,32]",
                "expected_output": "31.5",
                "is_sample": false
            },
            {
                "input": "[31,34]\n[32,33]",
                "expected_output": "32.5",
                "is_sample": false
            },
            {
                "input": "[32,35]\n[33,34]",
                "expected_output": "33.5",
                "is_sample": false
            },
            {
                "input": "[33,36]\n[34,35]",
                "expected_output": "34.5",
                "is_sample": false
            },
            {
                "input": "[34,37]\n[35,36]",
                "expected_output": "35.5",
                "is_sample": false
            },
            {
                "input": "[35,38]\n[36,37]",
                "expected_output": "36.5",
                "is_sample": false
            },
            {
                "input": "[36,39]\n[37,38]",
                "expected_output": "37.5",
                "is_sample": false
            },
            {
                "input": "[37,40]\n[38,39]",
                "expected_output": "38.5",
                "is_sample": false
            },
            {
                "input": "[38,41]\n[39,40]",
                "expected_output": "39.5",
                "is_sample": false
            },
            {
                "input": "[39,42]\n[40,41]",
                "expected_output": "40.5",
                "is_sample": false
            },
            {
                "input": "[40,43]\n[41,42]",
                "expected_output": "41.5",
                "is_sample": false
            },
            {
                "input": "[41,44]\n[42,43]",
                "expected_output": "42.5",
                "is_sample": false
            },
            {
                "input": "[42,45]\n[43,44]",
                "expected_output": "43.5",
                "is_sample": false
            },
            {
                "input": "[43,46]\n[44,45]",
                "expected_output": "44.5",
                "is_sample": false
            },
            {
                "input": "[44,47]\n[45,46]",
                "expected_output": "45.5",
                "is_sample": false
            },
            {
                "input": "[45,48]\n[46,47]",
                "expected_output": "46.5",
                "is_sample": false
            },
            {
                "input": "[46,49]\n[47,48]",
                "expected_output": "47.5",
                "is_sample": false
            },
            {
                "input": "[47,50]\n[48,49]",
                "expected_output": "48.5",
                "is_sample": false
            },
            {
                "input": "[48,51]\n[49,50]",
                "expected_output": "49.5",
                "is_sample": false
            },
            {
                "input": "[49,52]\n[50,51]",
                "expected_output": "50.5",
                "is_sample": false
            },
            {
                "input": "[50,53]\n[51,52]",
                "expected_output": "51.5",
                "is_sample": false
            }
        ]
    },
    {
        "question_number": 88,
        "title": "Largest Rectangle in Histogram",
        "level": "Hard",
        "tags": [
            "Array",
            "Stack",
            "Monotonic Stack"
        ],
        "description": "Given an array of integers heights representing the histogram's bar height where the width of each bar is 1, return the area of the largest rectangle in the histogram.",
        "constraints": "1 <= heights.length <= 10^5\n0 <= heights[i] <= 10^4",
        "starter": "class Solution {\n    public int largestRectangleArea(int[] heights) {\n        // Write your code here\n        return 0;\n    }\n}",
        "driver": {
            "key": "intArrayToInt",
            "method": "largestRectangleArea"
        },
        "testcases": [
            {
                "input": "[2,1,5,6,2,3]",
                "expected_output": "10",
                "is_sample": true
            },
            {
                "input": "[2,4]",
                "expected_output": "4",
                "is_sample": true
            },
            {
                "input": "[2,4,6,2]",
                "expected_output": "8",
                "is_sample": false
            },
            {
                "input": "[4,8,12,4]",
                "expected_output": "16",
                "is_sample": false
            },
            {
                "input": "[6,12,18,6]",
                "expected_output": "24",
                "is_sample": false
            },
            {
                "input": "[8,16,24,8]",
                "expected_output": "32",
                "is_sample": false
            },
            {
                "input": "[10,20,30,10]",
                "expected_output": "40",
                "is_sample": false
            },
            {
                "input": "[12,24,36,12]",
                "expected_output": "48",
                "is_sample": false
            },
            {
                "input": "[14,28,42,14]",
                "expected_output": "56",
                "is_sample": false
            },
            {
                "input": "[16,32,48,16]",
                "expected_output": "64",
                "is_sample": false
            },
            {
                "input": "[18,36,54,18]",
                "expected_output": "72",
                "is_sample": false
            },
            {
                "input": "[20,40,60,20]",
                "expected_output": "80",
                "is_sample": false
            },
            {
                "input": "[22,44,66,22]",
                "expected_output": "88",
                "is_sample": false
            },
            {
                "input": "[24,48,72,24]",
                "expected_output": "96",
                "is_sample": false
            },
            {
                "input": "[26,52,78,26]",
                "expected_output": "104",
                "is_sample": false
            },
            {
                "input": "[28,56,84,28]",
                "expected_output": "112",
                "is_sample": false
            },
            {
                "input": "[30,60,90,30]",
                "expected_output": "120",
                "is_sample": false
            },
            {
                "input": "[32,64,96,32]",
                "expected_output": "128",
                "is_sample": false
            },
            {
                "input": "[34,68,102,34]",
                "expected_output": "136",
                "is_sample": false
            },
            {
                "input": "[36,72,108,36]",
                "expected_output": "144",
                "is_sample": false
            },
            {
                "input": "[38,76,114,38]",
                "expected_output": "152",
                "is_sample": false
            },
            {
                "input": "[40,80,120,40]",
                "expected_output": "160",
                "is_sample": false
            },
            {
                "input": "[42,84,126,42]",
                "expected_output": "168",
                "is_sample": false
            },
            {
                "input": "[44,88,132,44]",
                "expected_output": "176",
                "is_sample": false
            },
            {
                "input": "[46,92,138,46]",
                "expected_output": "184",
                "is_sample": false
            },
            {
                "input": "[48,96,144,48]",
                "expected_output": "192",
                "is_sample": false
            },
            {
                "input": "[50,100,150,50]",
                "expected_output": "200",
                "is_sample": false
            },
            {
                "input": "[52,104,156,52]",
                "expected_output": "208",
                "is_sample": false
            },
            {
                "input": "[54,108,162,54]",
                "expected_output": "216",
                "is_sample": false
            },
            {
                "input": "[56,112,168,56]",
                "expected_output": "224",
                "is_sample": false
            },
            {
                "input": "[58,116,174,58]",
                "expected_output": "232",
                "is_sample": false
            },
            {
                "input": "[60,120,180,60]",
                "expected_output": "240",
                "is_sample": false
            },
            {
                "input": "[62,124,186,62]",
                "expected_output": "248",
                "is_sample": false
            },
            {
                "input": "[64,128,192,64]",
                "expected_output": "256",
                "is_sample": false
            },
            {
                "input": "[66,132,198,66]",
                "expected_output": "264",
                "is_sample": false
            },
            {
                "input": "[68,136,204,68]",
                "expected_output": "272",
                "is_sample": false
            },
            {
                "input": "[70,140,210,70]",
                "expected_output": "280",
                "is_sample": false
            },
            {
                "input": "[72,144,216,72]",
                "expected_output": "288",
                "is_sample": false
            },
            {
                "input": "[74,148,222,74]",
                "expected_output": "296",
                "is_sample": false
            },
            {
                "input": "[76,152,228,76]",
                "expected_output": "304",
                "is_sample": false
            },
            {
                "input": "[78,156,234,78]",
                "expected_output": "312",
                "is_sample": false
            },
            {
                "input": "[80,160,240,80]",
                "expected_output": "320",
                "is_sample": false
            },
            {
                "input": "[82,164,246,82]",
                "expected_output": "328",
                "is_sample": false
            },
            {
                "input": "[84,168,252,84]",
                "expected_output": "336",
                "is_sample": false
            },
            {
                "input": "[86,172,258,86]",
                "expected_output": "344",
                "is_sample": false
            },
            {
                "input": "[88,176,264,88]",
                "expected_output": "352",
                "is_sample": false
            },
            {
                "input": "[90,180,270,90]",
                "expected_output": "360",
                "is_sample": false
            },
            {
                "input": "[92,184,276,92]",
                "expected_output": "368",
                "is_sample": false
            },
            {
                "input": "[94,188,282,94]",
                "expected_output": "376",
                "is_sample": false
            },
            {
                "input": "[96,192,288,96]",
                "expected_output": "384",
                "is_sample": false
            },
            {
                "input": "[98,196,294,98]",
                "expected_output": "392",
                "is_sample": false
            },
            {
                "input": "[100,200,300,100]",
                "expected_output": "400",
                "is_sample": false
            }
        ]
    },
    {
        "question_number": 89,
        "title": "Maximal Rectangle",
        "level": "Hard",
        "tags": [
            "Array",
            "Dynamic Programming",
            "Stack",
            "Matrix",
            "Monotonic Stack"
        ],
        "description": "Given a rows x cols binary matrix filled with 0's and 1's, find the largest rectangle containing only 1's and return its area.",
        "constraints": "rows == matrix.length\ncols == matrix[i].length\n1 <= row, cols <= 200\nmatrix[i][j] is '0' or '1'.",
        "starter": "class Solution {\n    public int maximalRectangle(char[][] matrix) {\n        // Write your code here\n        return 0;\n    }\n}",
        "driver": {
            "key": "charMatrixToInt",
            "method": "maximalRectangle"
        },
        "testcases": [
            {
                "input": "10100\n10111\n11111\n10010",
                "expected_output": "6",
                "is_sample": true
            },
            {
                "input": "0",
                "expected_output": "0",
                "is_sample": true
            },
            {
                "input": "1",
                "expected_output": "1",
                "is_sample": false
            },
            {
                "input": "011\n111",
                "expected_output": "4",
                "is_sample": false
            },
            {
                "input": "111\n111",
                "expected_output": "6",
                "is_sample": false
            },
            {
                "input": "011\n111",
                "expected_output": "4",
                "is_sample": false
            },
            {
                "input": "111\n111",
                "expected_output": "6",
                "is_sample": false
            },
            {
                "input": "011\n111",
                "expected_output": "4",
                "is_sample": false
            },
            {
                "input": "111\n111",
                "expected_output": "6",
                "is_sample": false
            },
            {
                "input": "011\n111",
                "expected_output": "4",
                "is_sample": false
            },
            {
                "input": "111\n111",
                "expected_output": "6",
                "is_sample": false
            },
            {
                "input": "011\n111",
                "expected_output": "4",
                "is_sample": false
            },
            {
                "input": "111\n111",
                "expected_output": "6",
                "is_sample": false
            },
            {
                "input": "011\n111",
                "expected_output": "4",
                "is_sample": false
            },
            {
                "input": "111\n111",
                "expected_output": "6",
                "is_sample": false
            },
            {
                "input": "011\n111",
                "expected_output": "4",
                "is_sample": false
            },
            {
                "input": "111\n111",
                "expected_output": "6",
                "is_sample": false
            },
            {
                "input": "011\n111",
                "expected_output": "4",
                "is_sample": false
            },
            {
                "input": "111\n111",
                "expected_output": "6",
                "is_sample": false
            },
            {
                "input": "011\n111",
                "expected_output": "4",
                "is_sample": false
            },
            {
                "input": "111\n111",
                "expected_output": "6",
                "is_sample": false
            },
            {
                "input": "011\n111",
                "expected_output": "4",
                "is_sample": false
            },
            {
                "input": "111\n111",
                "expected_output": "6",
                "is_sample": false
            },
            {
                "input": "011\n111",
                "expected_output": "4",
                "is_sample": false
            },
            {
                "input": "111\n111",
                "expected_output": "6",
                "is_sample": false
            },
            {
                "input": "011\n111",
                "expected_output": "4",
                "is_sample": false
            },
            {
                "input": "111\n111",
                "expected_output": "6",
                "is_sample": false
            },
            {
                "input": "011\n111",
                "expected_output": "4",
                "is_sample": false
            },
            {
                "input": "111\n111",
                "expected_output": "6",
                "is_sample": false
            },
            {
                "input": "011\n111",
                "expected_output": "4",
                "is_sample": false
            },
            {
                "input": "111\n111",
                "expected_output": "6",
                "is_sample": false
            },
            {
                "input": "011\n111",
                "expected_output": "4",
                "is_sample": false
            },
            {
                "input": "111\n111",
                "expected_output": "6",
                "is_sample": false
            },
            {
                "input": "011\n111",
                "expected_output": "4",
                "is_sample": false
            },
            {
                "input": "111\n111",
                "expected_output": "6",
                "is_sample": false
            },
            {
                "input": "011\n111",
                "expected_output": "4",
                "is_sample": false
            },
            {
                "input": "111\n111",
                "expected_output": "6",
                "is_sample": false
            },
            {
                "input": "011\n111",
                "expected_output": "4",
                "is_sample": false
            },
            {
                "input": "111\n111",
                "expected_output": "6",
                "is_sample": false
            },
            {
                "input": "011\n111",
                "expected_output": "4",
                "is_sample": false
            },
            {
                "input": "111\n111",
                "expected_output": "6",
                "is_sample": false
            },
            {
                "input": "011\n111",
                "expected_output": "4",
                "is_sample": false
            },
            {
                "input": "111\n111",
                "expected_output": "6",
                "is_sample": false
            },
            {
                "input": "011\n111",
                "expected_output": "4",
                "is_sample": false
            },
            {
                "input": "111\n111",
                "expected_output": "6",
                "is_sample": false
            },
            {
                "input": "011\n111",
                "expected_output": "4",
                "is_sample": false
            },
            {
                "input": "111\n111",
                "expected_output": "6",
                "is_sample": false
            },
            {
                "input": "011\n111",
                "expected_output": "4",
                "is_sample": false
            },
            {
                "input": "111\n111",
                "expected_output": "6",
                "is_sample": false
            },
            {
                "input": "011\n111",
                "expected_output": "4",
                "is_sample": false
            },
            {
                "input": "111\n111",
                "expected_output": "6",
                "is_sample": false
            },
            {
                "input": "011\n111",
                "expected_output": "4",
                "is_sample": false
            },
            {
                "input": "111\n111",
                "expected_output": "6",
                "is_sample": false
            }
        ]
    },
    {
        "question_number": 90,
        "title": "Regular Expression Matching",
        "level": "Hard",
        "tags": [
            "String",
            "Dynamic Programming",
            "Recursion"
        ],
        "description": "Given an input string s and a pattern p, implement regular expression matching with support for '.' and '*' where:\n- '.' Matches any single character.\n- '*' Matches zero or more of the preceding element.\n\nInput format (2 lines):\nLine 1: s\nLine 2: p",
        "constraints": "1 <= s.length, p.length <= 20\ns contains only lowercase English letters.\np contains only lowercase English letters, '.', and '*'.",
        "starter": "class Solution {\n    public boolean isMatch(String s, String p) {\n        // Write your code here\n        return false;\n    }\n}",
        "driver": {
            "key": "twoStringsToBoolean",
            "method": "isMatch"
        },
        "testcases": [
            {
                "input": "aa\na",
                "expected_output": "false",
                "is_sample": true
            },
            {
                "input": "aa\na*",
                "expected_output": "true",
                "is_sample": true
            },
            {
                "input": "ab\n.*",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "aab\na*b",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "aaab\na*b",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "aaaab\na*b",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "aaaaab\na*b",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "ab\na*b",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "aab\na*b",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "aaab\na*b",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "aaaab\na*b",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "aaaaab\na*b",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "ab\na*b",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "aab\na*b",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "aaab\na*b",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "aaaab\na*b",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "aaaaab\na*b",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "ab\na*b",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "aab\na*b",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "aaab\na*b",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "aaaab\na*b",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "aaaaab\na*b",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "ab\na*b",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "aab\na*b",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "aaab\na*b",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "aaaab\na*b",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "aaaaab\na*b",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "ab\na*b",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "aab\na*b",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "aaab\na*b",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "aaaab\na*b",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "aaaaab\na*b",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "ab\na*b",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "aab\na*b",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "aaab\na*b",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "aaaab\na*b",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "aaaaab\na*b",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "ab\na*b",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "aab\na*b",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "aaab\na*b",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "aaaab\na*b",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "aaaaab\na*b",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "ab\na*b",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "aab\na*b",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "aaab\na*b",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "aaaab\na*b",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "aaaaab\na*b",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "ab\na*b",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "aab\na*b",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "aaab\na*b",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "aaaab\na*b",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "aaaaab\na*b",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "ab\na*b",
                "expected_output": "true",
                "is_sample": false
            }
        ]
    },
    {
        "question_number": 91,
        "title": "Wildcard Matching",
        "level": "Hard",
        "tags": [
            "String",
            "Dynamic Programming",
            "Greedy",
            "Recursion"
        ],
        "description": "Given an input string (s) and a pattern (p), implement wildcard pattern matching with support for '?' and '*' where:\n- '?' Matches any single character.\n- '*' Matches any sequence of characters (including the empty sequence).\n\nInput format (2 lines):\nLine 1: s\nLine 2: p",
        "constraints": "0 <= s.length, p.length <= 2000\ns contains only lowercase English letters.\np contains only lowercase English letters, '?' or '*'.",
        "starter": "class Solution {\n    public boolean isMatch(String s, String p) {\n        // Write your code here\n        return false;\n    }\n}",
        "driver": {
            "key": "twoStringsToBoolean",
            "method": "isMatch"
        },
        "testcases": [
            {
                "input": "aa\na",
                "expected_output": "false",
                "is_sample": true
            },
            {
                "input": "aa\n*",
                "expected_output": "true",
                "is_sample": true
            },
            {
                "input": "cb\n?a",
                "expected_output": "false",
                "is_sample": false
            },
            {
                "input": "abc1xyz\nabc?xyz",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "abc2xyz\nabc*xyz",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "abc3xyz\nabc?xyz",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "abc4xyz\nabc*xyz",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "abc5xyz\nabc?xyz",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "abc6xyz\nabc*xyz",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "abc7xyz\nabc?xyz",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "abc8xyz\nabc*xyz",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "abc9xyz\nabc?xyz",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "abc10xyz\nabc*xyz",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "abc11xyz\nabc?xyz",
                "expected_output": "false",
                "is_sample": false
            },
            {
                "input": "abc12xyz\nabc*xyz",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "abc13xyz\nabc?xyz",
                "expected_output": "false",
                "is_sample": false
            },
            {
                "input": "abc14xyz\nabc*xyz",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "abc15xyz\nabc?xyz",
                "expected_output": "false",
                "is_sample": false
            },
            {
                "input": "abc16xyz\nabc*xyz",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "abc17xyz\nabc?xyz",
                "expected_output": "false",
                "is_sample": false
            },
            {
                "input": "abc18xyz\nabc*xyz",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "abc19xyz\nabc?xyz",
                "expected_output": "false",
                "is_sample": false
            },
            {
                "input": "abc20xyz\nabc*xyz",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "abc21xyz\nabc?xyz",
                "expected_output": "false",
                "is_sample": false
            },
            {
                "input": "abc22xyz\nabc*xyz",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "abc23xyz\nabc?xyz",
                "expected_output": "false",
                "is_sample": false
            },
            {
                "input": "abc24xyz\nabc*xyz",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "abc25xyz\nabc?xyz",
                "expected_output": "false",
                "is_sample": false
            },
            {
                "input": "abc26xyz\nabc*xyz",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "abc27xyz\nabc?xyz",
                "expected_output": "false",
                "is_sample": false
            },
            {
                "input": "abc28xyz\nabc*xyz",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "abc29xyz\nabc?xyz",
                "expected_output": "false",
                "is_sample": false
            },
            {
                "input": "abc30xyz\nabc*xyz",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "abc31xyz\nabc?xyz",
                "expected_output": "false",
                "is_sample": false
            },
            {
                "input": "abc32xyz\nabc*xyz",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "abc33xyz\nabc?xyz",
                "expected_output": "false",
                "is_sample": false
            },
            {
                "input": "abc34xyz\nabc*xyz",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "abc35xyz\nabc?xyz",
                "expected_output": "false",
                "is_sample": false
            },
            {
                "input": "abc36xyz\nabc*xyz",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "abc37xyz\nabc?xyz",
                "expected_output": "false",
                "is_sample": false
            },
            {
                "input": "abc38xyz\nabc*xyz",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "abc39xyz\nabc?xyz",
                "expected_output": "false",
                "is_sample": false
            },
            {
                "input": "abc40xyz\nabc*xyz",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "abc41xyz\nabc?xyz",
                "expected_output": "false",
                "is_sample": false
            },
            {
                "input": "abc42xyz\nabc*xyz",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "abc43xyz\nabc?xyz",
                "expected_output": "false",
                "is_sample": false
            },
            {
                "input": "abc44xyz\nabc*xyz",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "abc45xyz\nabc?xyz",
                "expected_output": "false",
                "is_sample": false
            },
            {
                "input": "abc46xyz\nabc*xyz",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "abc47xyz\nabc?xyz",
                "expected_output": "false",
                "is_sample": false
            },
            {
                "input": "abc48xyz\nabc*xyz",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "abc49xyz\nabc?xyz",
                "expected_output": "false",
                "is_sample": false
            },
            {
                "input": "abc50xyz\nabc*xyz",
                "expected_output": "true",
                "is_sample": false
            }
        ]
    },
    {
        "question_number": 92,
        "title": "Distinct Subsequences",
        "level": "Hard",
        "tags": [
            "String",
            "Dynamic Programming"
        ],
        "description": "Given two strings s and t, return the number of distinct subsequences of s which equals t.\n\nInput format (2 lines):\nLine 1: s\nLine 2: t",
        "constraints": "1 <= s.length, t.length <= 1000\ns and t consist of English letters.",
        "starter": "class Solution {\n    public int numDistinct(String s, String t) {\n        // Write your code here\n        return 0;\n    }\n}",
        "driver": {
            "key": "twoStringsToInt",
            "method": "numDistinct"
        },
        "testcases": [
            {
                "input": "rabbbit\nrabbit",
                "expected_output": "3",
                "is_sample": true
            },
            {
                "input": "babgbag\nbag",
                "expected_output": "5",
                "is_sample": true
            },
            {
                "input": "bbag\nbag",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "bbbag\nbag",
                "expected_output": "3",
                "is_sample": false
            },
            {
                "input": "bbbbag\nbag",
                "expected_output": "4",
                "is_sample": false
            },
            {
                "input": "bbbbbag\nbag",
                "expected_output": "5",
                "is_sample": false
            },
            {
                "input": "bag\nbag",
                "expected_output": "1",
                "is_sample": false
            },
            {
                "input": "bbag\nbag",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "bbbag\nbag",
                "expected_output": "3",
                "is_sample": false
            },
            {
                "input": "bbbbag\nbag",
                "expected_output": "4",
                "is_sample": false
            },
            {
                "input": "bbbbbag\nbag",
                "expected_output": "5",
                "is_sample": false
            },
            {
                "input": "bag\nbag",
                "expected_output": "1",
                "is_sample": false
            },
            {
                "input": "bbag\nbag",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "bbbag\nbag",
                "expected_output": "3",
                "is_sample": false
            },
            {
                "input": "bbbbag\nbag",
                "expected_output": "4",
                "is_sample": false
            },
            {
                "input": "bbbbbag\nbag",
                "expected_output": "5",
                "is_sample": false
            },
            {
                "input": "bag\nbag",
                "expected_output": "1",
                "is_sample": false
            },
            {
                "input": "bbag\nbag",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "bbbag\nbag",
                "expected_output": "3",
                "is_sample": false
            },
            {
                "input": "bbbbag\nbag",
                "expected_output": "4",
                "is_sample": false
            },
            {
                "input": "bbbbbag\nbag",
                "expected_output": "5",
                "is_sample": false
            },
            {
                "input": "bag\nbag",
                "expected_output": "1",
                "is_sample": false
            },
            {
                "input": "bbag\nbag",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "bbbag\nbag",
                "expected_output": "3",
                "is_sample": false
            },
            {
                "input": "bbbbag\nbag",
                "expected_output": "4",
                "is_sample": false
            },
            {
                "input": "bbbbbag\nbag",
                "expected_output": "5",
                "is_sample": false
            },
            {
                "input": "bag\nbag",
                "expected_output": "1",
                "is_sample": false
            },
            {
                "input": "bbag\nbag",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "bbbag\nbag",
                "expected_output": "3",
                "is_sample": false
            },
            {
                "input": "bbbbag\nbag",
                "expected_output": "4",
                "is_sample": false
            },
            {
                "input": "bbbbbag\nbag",
                "expected_output": "5",
                "is_sample": false
            },
            {
                "input": "bag\nbag",
                "expected_output": "1",
                "is_sample": false
            },
            {
                "input": "bbag\nbag",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "bbbag\nbag",
                "expected_output": "3",
                "is_sample": false
            },
            {
                "input": "bbbbag\nbag",
                "expected_output": "4",
                "is_sample": false
            },
            {
                "input": "bbbbbag\nbag",
                "expected_output": "5",
                "is_sample": false
            },
            {
                "input": "bag\nbag",
                "expected_output": "1",
                "is_sample": false
            },
            {
                "input": "bbag\nbag",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "bbbag\nbag",
                "expected_output": "3",
                "is_sample": false
            },
            {
                "input": "bbbbag\nbag",
                "expected_output": "4",
                "is_sample": false
            },
            {
                "input": "bbbbbag\nbag",
                "expected_output": "5",
                "is_sample": false
            },
            {
                "input": "bag\nbag",
                "expected_output": "1",
                "is_sample": false
            },
            {
                "input": "bbag\nbag",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "bbbag\nbag",
                "expected_output": "3",
                "is_sample": false
            },
            {
                "input": "bbbbag\nbag",
                "expected_output": "4",
                "is_sample": false
            },
            {
                "input": "bbbbbag\nbag",
                "expected_output": "5",
                "is_sample": false
            },
            {
                "input": "bag\nbag",
                "expected_output": "1",
                "is_sample": false
            },
            {
                "input": "bbag\nbag",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "bbbag\nbag",
                "expected_output": "3",
                "is_sample": false
            },
            {
                "input": "bbbbag\nbag",
                "expected_output": "4",
                "is_sample": false
            },
            {
                "input": "bbbbbag\nbag",
                "expected_output": "5",
                "is_sample": false
            },
            {
                "input": "bag\nbag",
                "expected_output": "1",
                "is_sample": false
            }
        ]
    },
    {
        "question_number": 93,
        "title": "Dungeon Game",
        "level": "Hard",
        "tags": [
            "Array",
            "Dynamic Programming",
            "Matrix"
        ],
        "description": "The demons had captured the princess and imprisoned her in the bottom-right corner of a dungeon. The dungeon consists of m x n rooms. Return the knight's minimum initial health so that he is able to rescue the princess.",
        "constraints": "m == dungeon.length\nn == dungeon[i].length\n1 <= m, n <= 200\n-1000 <= dungeon[i][j] <= 1000",
        "starter": "class Solution {\n    public int calculateMinimumHP(int[][] dungeon) {\n        // Write your code here\n        return 1;\n    }\n}",
        "driver": {
            "key": "intMatrixToInt",
            "method": "calculateMinimumHP"
        },
        "testcases": [
            {
                "input": "[[-2,-3,3],[-5,-10,1],[10,30,-5]]",
                "expected_output": "7",
                "is_sample": true
            },
            {
                "input": "[[0]]",
                "expected_output": "1",
                "is_sample": true
            },
            {
                "input": "[[-1,-2],[3,-2]]",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "[[-2,-2],[3,-3]]",
                "expected_output": "3",
                "is_sample": false
            },
            {
                "input": "[[-3,-2],[3,-4]]",
                "expected_output": "5",
                "is_sample": false
            },
            {
                "input": "[[-4,-2],[3,-5]]",
                "expected_output": "7",
                "is_sample": false
            },
            {
                "input": "[[-5,-2],[3,-6]]",
                "expected_output": "9",
                "is_sample": false
            },
            {
                "input": "[[-6,-2],[3,-7]]",
                "expected_output": "11",
                "is_sample": false
            },
            {
                "input": "[[-7,-2],[3,-8]]",
                "expected_output": "13",
                "is_sample": false
            },
            {
                "input": "[[-8,-2],[3,-9]]",
                "expected_output": "15",
                "is_sample": false
            },
            {
                "input": "[[-9,-2],[3,-10]]",
                "expected_output": "17",
                "is_sample": false
            },
            {
                "input": "[[-10,-2],[3,-11]]",
                "expected_output": "19",
                "is_sample": false
            },
            {
                "input": "[[-11,-2],[3,-12]]",
                "expected_output": "21",
                "is_sample": false
            },
            {
                "input": "[[-12,-2],[3,-13]]",
                "expected_output": "23",
                "is_sample": false
            },
            {
                "input": "[[-13,-2],[3,-14]]",
                "expected_output": "25",
                "is_sample": false
            },
            {
                "input": "[[-14,-2],[3,-15]]",
                "expected_output": "27",
                "is_sample": false
            },
            {
                "input": "[[-15,-2],[3,-16]]",
                "expected_output": "29",
                "is_sample": false
            },
            {
                "input": "[[-16,-2],[3,-17]]",
                "expected_output": "31",
                "is_sample": false
            },
            {
                "input": "[[-17,-2],[3,-18]]",
                "expected_output": "33",
                "is_sample": false
            },
            {
                "input": "[[-18,-2],[3,-19]]",
                "expected_output": "35",
                "is_sample": false
            },
            {
                "input": "[[-19,-2],[3,-20]]",
                "expected_output": "37",
                "is_sample": false
            },
            {
                "input": "[[-20,-2],[3,-21]]",
                "expected_output": "39",
                "is_sample": false
            },
            {
                "input": "[[-21,-2],[3,-22]]",
                "expected_output": "41",
                "is_sample": false
            },
            {
                "input": "[[-22,-2],[3,-23]]",
                "expected_output": "43",
                "is_sample": false
            },
            {
                "input": "[[-23,-2],[3,-24]]",
                "expected_output": "45",
                "is_sample": false
            },
            {
                "input": "[[-24,-2],[3,-25]]",
                "expected_output": "47",
                "is_sample": false
            },
            {
                "input": "[[-25,-2],[3,-26]]",
                "expected_output": "49",
                "is_sample": false
            },
            {
                "input": "[[-26,-2],[3,-27]]",
                "expected_output": "51",
                "is_sample": false
            },
            {
                "input": "[[-27,-2],[3,-28]]",
                "expected_output": "53",
                "is_sample": false
            },
            {
                "input": "[[-28,-2],[3,-29]]",
                "expected_output": "55",
                "is_sample": false
            },
            {
                "input": "[[-29,-2],[3,-30]]",
                "expected_output": "57",
                "is_sample": false
            },
            {
                "input": "[[-30,-2],[3,-31]]",
                "expected_output": "59",
                "is_sample": false
            },
            {
                "input": "[[-31,-2],[3,-32]]",
                "expected_output": "61",
                "is_sample": false
            },
            {
                "input": "[[-32,-2],[3,-33]]",
                "expected_output": "63",
                "is_sample": false
            },
            {
                "input": "[[-33,-2],[3,-34]]",
                "expected_output": "65",
                "is_sample": false
            },
            {
                "input": "[[-34,-2],[3,-35]]",
                "expected_output": "67",
                "is_sample": false
            },
            {
                "input": "[[-35,-2],[3,-36]]",
                "expected_output": "69",
                "is_sample": false
            },
            {
                "input": "[[-36,-2],[3,-37]]",
                "expected_output": "71",
                "is_sample": false
            },
            {
                "input": "[[-37,-2],[3,-38]]",
                "expected_output": "73",
                "is_sample": false
            },
            {
                "input": "[[-38,-2],[3,-39]]",
                "expected_output": "75",
                "is_sample": false
            },
            {
                "input": "[[-39,-2],[3,-40]]",
                "expected_output": "77",
                "is_sample": false
            },
            {
                "input": "[[-40,-2],[3,-41]]",
                "expected_output": "79",
                "is_sample": false
            },
            {
                "input": "[[-41,-2],[3,-42]]",
                "expected_output": "81",
                "is_sample": false
            },
            {
                "input": "[[-42,-2],[3,-43]]",
                "expected_output": "83",
                "is_sample": false
            },
            {
                "input": "[[-43,-2],[3,-44]]",
                "expected_output": "85",
                "is_sample": false
            },
            {
                "input": "[[-44,-2],[3,-45]]",
                "expected_output": "87",
                "is_sample": false
            },
            {
                "input": "[[-45,-2],[3,-46]]",
                "expected_output": "89",
                "is_sample": false
            },
            {
                "input": "[[-46,-2],[3,-47]]",
                "expected_output": "91",
                "is_sample": false
            },
            {
                "input": "[[-47,-2],[3,-48]]",
                "expected_output": "93",
                "is_sample": false
            },
            {
                "input": "[[-48,-2],[3,-49]]",
                "expected_output": "95",
                "is_sample": false
            },
            {
                "input": "[[-49,-2],[3,-50]]",
                "expected_output": "97",
                "is_sample": false
            },
            {
                "input": "[[-50,-2],[3,-51]]",
                "expected_output": "99",
                "is_sample": false
            }
        ]
    },
    {
        "question_number": 94,
        "title": "Burst Balloons",
        "level": "Hard",
        "tags": [
            "Array",
            "Dynamic Programming"
        ],
        "description": "You are given n balloons, indexed from 0 to n - 1. Each balloon is painted with a number on it represented by an array nums. You are asked to burst all the balloons. Return the maximum coins you can collect by bursting the balloons wisely.",
        "constraints": "n == nums.length\n1 <= n <= 300\n0 <= nums[i] <= 100",
        "starter": "class Solution {\n    public int maxCoins(int[] nums) {\n        // Write your code here\n        return 0;\n    }\n}",
        "driver": {
            "key": "intArrayToInt",
            "method": "maxCoins"
        },
        "testcases": [
            {
                "input": "[3,1,5,8]",
                "expected_output": "167",
                "is_sample": true
            },
            {
                "input": "[1,5]",
                "expected_output": "10",
                "is_sample": true
            },
            {
                "input": "[2,3,4]",
                "expected_output": "36",
                "is_sample": false
            },
            {
                "input": "[3,4,5]",
                "expected_output": "80",
                "is_sample": false
            },
            {
                "input": "[4,5,3]",
                "expected_output": "76",
                "is_sample": false
            },
            {
                "input": "[5,2,4]",
                "expected_output": "65",
                "is_sample": false
            },
            {
                "input": "[1,3,5]",
                "expected_output": "25",
                "is_sample": false
            },
            {
                "input": "[2,4,3]",
                "expected_output": "33",
                "is_sample": false
            },
            {
                "input": "[3,5,4]",
                "expected_output": "76",
                "is_sample": false
            },
            {
                "input": "[4,2,5]",
                "expected_output": "65",
                "is_sample": false
            },
            {
                "input": "[5,3,3]",
                "expected_output": "65",
                "is_sample": false
            },
            {
                "input": "[1,4,4]",
                "expected_output": "24",
                "is_sample": false
            },
            {
                "input": "[2,5,5]",
                "expected_output": "65",
                "is_sample": false
            },
            {
                "input": "[3,2,3]",
                "expected_output": "30",
                "is_sample": false
            },
            {
                "input": "[4,3,4]",
                "expected_output": "68",
                "is_sample": false
            },
            {
                "input": "[5,4,5]",
                "expected_output": "130",
                "is_sample": false
            },
            {
                "input": "[1,5,3]",
                "expected_output": "25",
                "is_sample": false
            },
            {
                "input": "[2,2,4]",
                "expected_output": "28",
                "is_sample": false
            },
            {
                "input": "[3,3,5]",
                "expected_output": "65",
                "is_sample": false
            },
            {
                "input": "[4,4,3]",
                "expected_output": "64",
                "is_sample": false
            },
            {
                "input": "[5,5,4]",
                "expected_output": "125",
                "is_sample": false
            },
            {
                "input": "[1,2,5]",
                "expected_output": "20",
                "is_sample": false
            },
            {
                "input": "[2,3,3]",
                "expected_output": "27",
                "is_sample": false
            },
            {
                "input": "[3,4,4]",
                "expected_output": "64",
                "is_sample": false
            },
            {
                "input": "[4,5,5]",
                "expected_output": "125",
                "is_sample": false
            },
            {
                "input": "[5,2,3]",
                "expected_output": "50",
                "is_sample": false
            },
            {
                "input": "[1,3,4]",
                "expected_output": "20",
                "is_sample": false
            },
            {
                "input": "[2,4,5]",
                "expected_output": "55",
                "is_sample": false
            },
            {
                "input": "[3,5,3]",
                "expected_output": "57",
                "is_sample": false
            },
            {
                "input": "[4,2,4]",
                "expected_output": "52",
                "is_sample": false
            },
            {
                "input": "[5,3,5]",
                "expected_output": "105",
                "is_sample": false
            },
            {
                "input": "[1,4,3]",
                "expected_output": "20",
                "is_sample": false
            },
            {
                "input": "[2,5,4]",
                "expected_output": "52",
                "is_sample": false
            },
            {
                "input": "[3,2,5]",
                "expected_output": "50",
                "is_sample": false
            },
            {
                "input": "[4,3,3]",
                "expected_output": "52",
                "is_sample": false
            },
            {
                "input": "[5,4,4]",
                "expected_output": "105",
                "is_sample": false
            },
            {
                "input": "[1,5,5]",
                "expected_output": "35",
                "is_sample": false
            },
            {
                "input": "[2,2,3]",
                "expected_output": "21",
                "is_sample": false
            },
            {
                "input": "[3,3,4]",
                "expected_output": "52",
                "is_sample": false
            },
            {
                "input": "[4,4,5]",
                "expected_output": "105",
                "is_sample": false
            },
            {
                "input": "[5,5,3]",
                "expected_output": "95",
                "is_sample": false
            },
            {
                "input": "[1,2,4]",
                "expected_output": "16",
                "is_sample": false
            },
            {
                "input": "[2,3,5]",
                "expected_output": "45",
                "is_sample": false
            },
            {
                "input": "[3,4,3]",
                "expected_output": "48",
                "is_sample": false
            },
            {
                "input": "[4,5,4]",
                "expected_output": "100",
                "is_sample": false
            },
            {
                "input": "[5,2,5]",
                "expected_output": "80",
                "is_sample": false
            },
            {
                "input": "[1,3,3]",
                "expected_output": "15",
                "is_sample": false
            },
            {
                "input": "[2,4,4]",
                "expected_output": "44",
                "is_sample": false
            },
            {
                "input": "[3,5,5]",
                "expected_output": "95",
                "is_sample": false
            },
            {
                "input": "[4,2,3]",
                "expected_output": "40",
                "is_sample": false
            },
            {
                "input": "[5,3,4]",
                "expected_output": "85",
                "is_sample": false
            },
            {
                "input": "[1,4,5]",
                "expected_output": "30",
                "is_sample": false
            }
        ]
    },
    {
        "question_number": 95,
        "title": "Russian Doll Envelopes",
        "level": "Hard",
        "tags": [
            "Array",
            "Binary Search",
            "Dynamic Programming",
            "Sorting"
        ],
        "description": "You are given a 2D array of integers envelopes where envelopes[i] = [wi, hi] represents the width and the height of an envelope. One envelope can fit into another if and only if both the width and height of one envelope are strictly greater than the other envelope. Return the maximum number of envelopes you can Russian doll.",
        "constraints": "1 <= envelopes.length <= 10^5\nenvelopes[i].length == 2\n1 <= wi, hi <= 10^5",
        "starter": "class Solution {\n    public int maxEnvelopes(int[][] envelopes) {\n        // Write your code here\n        return 0;\n    }\n}",
        "driver": {
            "key": "intMatrixToInt",
            "method": "maxEnvelopes"
        },
        "testcases": [
            {
                "input": "[[5,4],[6,4],[6,7],[2,3]]",
                "expected_output": "3",
                "is_sample": true
            },
            {
                "input": "[[1,1],[1,1],[1,1]]",
                "expected_output": "1",
                "is_sample": true
            },
            {
                "input": "[[1,2],[3,4],[5,6]]",
                "expected_output": "3",
                "is_sample": false
            },
            {
                "input": "[[2,3],[4,5],[6,7]]",
                "expected_output": "3",
                "is_sample": false
            },
            {
                "input": "[[3,4],[5,6],[7,8]]",
                "expected_output": "3",
                "is_sample": false
            },
            {
                "input": "[[4,5],[6,7],[8,9]]",
                "expected_output": "3",
                "is_sample": false
            },
            {
                "input": "[[5,6],[7,8],[9,10]]",
                "expected_output": "3",
                "is_sample": false
            },
            {
                "input": "[[6,7],[8,9],[10,11]]",
                "expected_output": "3",
                "is_sample": false
            },
            {
                "input": "[[7,8],[9,10],[11,12]]",
                "expected_output": "3",
                "is_sample": false
            },
            {
                "input": "[[8,9],[10,11],[12,13]]",
                "expected_output": "3",
                "is_sample": false
            },
            {
                "input": "[[9,10],[11,12],[13,14]]",
                "expected_output": "3",
                "is_sample": false
            },
            {
                "input": "[[10,11],[12,13],[14,15]]",
                "expected_output": "3",
                "is_sample": false
            },
            {
                "input": "[[11,12],[13,14],[15,16]]",
                "expected_output": "3",
                "is_sample": false
            },
            {
                "input": "[[12,13],[14,15],[16,17]]",
                "expected_output": "3",
                "is_sample": false
            },
            {
                "input": "[[13,14],[15,16],[17,18]]",
                "expected_output": "3",
                "is_sample": false
            },
            {
                "input": "[[14,15],[16,17],[18,19]]",
                "expected_output": "3",
                "is_sample": false
            },
            {
                "input": "[[15,16],[17,18],[19,20]]",
                "expected_output": "3",
                "is_sample": false
            },
            {
                "input": "[[16,17],[18,19],[20,21]]",
                "expected_output": "3",
                "is_sample": false
            },
            {
                "input": "[[17,18],[19,20],[21,22]]",
                "expected_output": "3",
                "is_sample": false
            },
            {
                "input": "[[18,19],[20,21],[22,23]]",
                "expected_output": "3",
                "is_sample": false
            },
            {
                "input": "[[19,20],[21,22],[23,24]]",
                "expected_output": "3",
                "is_sample": false
            },
            {
                "input": "[[20,21],[22,23],[24,25]]",
                "expected_output": "3",
                "is_sample": false
            },
            {
                "input": "[[21,22],[23,24],[25,26]]",
                "expected_output": "3",
                "is_sample": false
            },
            {
                "input": "[[22,23],[24,25],[26,27]]",
                "expected_output": "3",
                "is_sample": false
            },
            {
                "input": "[[23,24],[25,26],[27,28]]",
                "expected_output": "3",
                "is_sample": false
            },
            {
                "input": "[[24,25],[26,27],[28,29]]",
                "expected_output": "3",
                "is_sample": false
            },
            {
                "input": "[[25,26],[27,28],[29,30]]",
                "expected_output": "3",
                "is_sample": false
            },
            {
                "input": "[[26,27],[28,29],[30,31]]",
                "expected_output": "3",
                "is_sample": false
            },
            {
                "input": "[[27,28],[29,30],[31,32]]",
                "expected_output": "3",
                "is_sample": false
            },
            {
                "input": "[[28,29],[30,31],[32,33]]",
                "expected_output": "3",
                "is_sample": false
            },
            {
                "input": "[[29,30],[31,32],[33,34]]",
                "expected_output": "3",
                "is_sample": false
            },
            {
                "input": "[[30,31],[32,33],[34,35]]",
                "expected_output": "3",
                "is_sample": false
            },
            {
                "input": "[[31,32],[33,34],[35,36]]",
                "expected_output": "3",
                "is_sample": false
            },
            {
                "input": "[[32,33],[34,35],[36,37]]",
                "expected_output": "3",
                "is_sample": false
            },
            {
                "input": "[[33,34],[35,36],[37,38]]",
                "expected_output": "3",
                "is_sample": false
            },
            {
                "input": "[[34,35],[36,37],[38,39]]",
                "expected_output": "3",
                "is_sample": false
            },
            {
                "input": "[[35,36],[37,38],[39,40]]",
                "expected_output": "3",
                "is_sample": false
            },
            {
                "input": "[[36,37],[38,39],[40,41]]",
                "expected_output": "3",
                "is_sample": false
            },
            {
                "input": "[[37,38],[39,40],[41,42]]",
                "expected_output": "3",
                "is_sample": false
            },
            {
                "input": "[[38,39],[40,41],[42,43]]",
                "expected_output": "3",
                "is_sample": false
            },
            {
                "input": "[[39,40],[41,42],[43,44]]",
                "expected_output": "3",
                "is_sample": false
            },
            {
                "input": "[[40,41],[42,43],[44,45]]",
                "expected_output": "3",
                "is_sample": false
            },
            {
                "input": "[[41,42],[43,44],[45,46]]",
                "expected_output": "3",
                "is_sample": false
            },
            {
                "input": "[[42,43],[44,45],[46,47]]",
                "expected_output": "3",
                "is_sample": false
            },
            {
                "input": "[[43,44],[45,46],[47,48]]",
                "expected_output": "3",
                "is_sample": false
            },
            {
                "input": "[[44,45],[46,47],[48,49]]",
                "expected_output": "3",
                "is_sample": false
            },
            {
                "input": "[[45,46],[47,48],[49,50]]",
                "expected_output": "3",
                "is_sample": false
            },
            {
                "input": "[[46,47],[48,49],[50,51]]",
                "expected_output": "3",
                "is_sample": false
            },
            {
                "input": "[[47,48],[49,50],[51,52]]",
                "expected_output": "3",
                "is_sample": false
            },
            {
                "input": "[[48,49],[50,51],[52,53]]",
                "expected_output": "3",
                "is_sample": false
            },
            {
                "input": "[[49,50],[51,52],[53,54]]",
                "expected_output": "3",
                "is_sample": false
            },
            {
                "input": "[[50,51],[52,53],[54,55]]",
                "expected_output": "3",
                "is_sample": false
            }
        ]
    },
    {
        "question_number": 96,
        "title": "Word Break II",
        "level": "Hard",
        "tags": [
            "Array",
            "Hash Table",
            "String",
            "Dynamic Programming",
            "Backtracking",
            "Trie",
            "Memoization"
        ],
        "description": "Given a string s and a dictionary of strings wordDict, add spaces in s to construct a sentence where each word is a valid dictionary word. Return all such possible sentences in any order.\n\nInput format (2 lines):\nLine 1: s\nLine 2: wordDict as JSON string array",
        "constraints": "1 <= s.length <= 20\n1 <= wordDict.length <= 1000\n1 <= wordDict[i].length <= 10",
        "starter": "class Solution {\n    public List<String> wordBreak(String s, List<String> wordDict) {\n        // Write your code here\n        return new ArrayList<>();\n    }\n}",
        "driver": "wordBreak2",
        "testcases": [
            {
                "input": "catsanddog\n[\"cat\",\"cats\",\"and\",\"sand\",\"dog\"]",
                "expected_output": "[\"cat sand dog\",\"cats and dog\"]",
                "is_sample": true
            },
            {
                "input": "pineapplepenapple\n[\"apple\",\"pen\",\"applepen\",\"pine\",\"pineapple\"]",
                "expected_output": "[\"pine apple pen apple\",\"pine applepen apple\",\"pineapple pen apple\"]",
                "is_sample": true
            },
            {
                "input": "catsandog\n[\"cats\",\"dog\",\"sand\",\"and\",\"cat\"]",
                "expected_output": "[]",
                "is_sample": false
            },
            {
                "input": "code1xa1\n[\"code1\",\"xa1\",\"test\"]",
                "expected_output": "[\"code1 xa1\"]",
                "is_sample": false
            },
            {
                "input": "code2xa2\n[\"code2\",\"xa2\",\"test\"]",
                "expected_output": "[\"code2 xa2\"]",
                "is_sample": false
            },
            {
                "input": "code3xa3\n[\"code3\",\"xa3\",\"test\"]",
                "expected_output": "[\"code3 xa3\"]",
                "is_sample": false
            },
            {
                "input": "code4xa4\n[\"code4\",\"xa4\",\"test\"]",
                "expected_output": "[\"code4 xa4\"]",
                "is_sample": false
            },
            {
                "input": "code5xa5\n[\"code5\",\"xa5\",\"test\"]",
                "expected_output": "[\"code5 xa5\"]",
                "is_sample": false
            },
            {
                "input": "code6xa6\n[\"code6\",\"xa6\",\"test\"]",
                "expected_output": "[\"code6 xa6\"]",
                "is_sample": false
            },
            {
                "input": "code7xa7\n[\"code7\",\"xa7\",\"test\"]",
                "expected_output": "[\"code7 xa7\"]",
                "is_sample": false
            },
            {
                "input": "code8xa8\n[\"code8\",\"xa8\",\"test\"]",
                "expected_output": "[\"code8 xa8\"]",
                "is_sample": false
            },
            {
                "input": "code9xa9\n[\"code9\",\"xa9\",\"test\"]",
                "expected_output": "[\"code9 xa9\"]",
                "is_sample": false
            },
            {
                "input": "code10xa10\n[\"code10\",\"xa10\",\"test\"]",
                "expected_output": "[\"code10 xa10\"]",
                "is_sample": false
            },
            {
                "input": "code11xa11\n[\"code11\",\"xa11\",\"test\"]",
                "expected_output": "[\"code11 xa11\"]",
                "is_sample": false
            },
            {
                "input": "code12xa12\n[\"code12\",\"xa12\",\"test\"]",
                "expected_output": "[\"code12 xa12\"]",
                "is_sample": false
            },
            {
                "input": "code13xa13\n[\"code13\",\"xa13\",\"test\"]",
                "expected_output": "[\"code13 xa13\"]",
                "is_sample": false
            },
            {
                "input": "code14xa14\n[\"code14\",\"xa14\",\"test\"]",
                "expected_output": "[\"code14 xa14\"]",
                "is_sample": false
            },
            {
                "input": "code15xa15\n[\"code15\",\"xa15\",\"test\"]",
                "expected_output": "[\"code15 xa15\"]",
                "is_sample": false
            },
            {
                "input": "code16xa16\n[\"code16\",\"xa16\",\"test\"]",
                "expected_output": "[\"code16 xa16\"]",
                "is_sample": false
            },
            {
                "input": "code17xa17\n[\"code17\",\"xa17\",\"test\"]",
                "expected_output": "[\"code17 xa17\"]",
                "is_sample": false
            },
            {
                "input": "code18xa18\n[\"code18\",\"xa18\",\"test\"]",
                "expected_output": "[\"code18 xa18\"]",
                "is_sample": false
            },
            {
                "input": "code19xa19\n[\"code19\",\"xa19\",\"test\"]",
                "expected_output": "[\"code19 xa19\"]",
                "is_sample": false
            },
            {
                "input": "code20xa20\n[\"code20\",\"xa20\",\"test\"]",
                "expected_output": "[\"code20 xa20\"]",
                "is_sample": false
            },
            {
                "input": "code21xa21\n[\"code21\",\"xa21\",\"test\"]",
                "expected_output": "[\"code21 xa21\"]",
                "is_sample": false
            },
            {
                "input": "code22xa22\n[\"code22\",\"xa22\",\"test\"]",
                "expected_output": "[\"code22 xa22\"]",
                "is_sample": false
            },
            {
                "input": "code23xa23\n[\"code23\",\"xa23\",\"test\"]",
                "expected_output": "[\"code23 xa23\"]",
                "is_sample": false
            },
            {
                "input": "code24xa24\n[\"code24\",\"xa24\",\"test\"]",
                "expected_output": "[\"code24 xa24\"]",
                "is_sample": false
            },
            {
                "input": "code25xa25\n[\"code25\",\"xa25\",\"test\"]",
                "expected_output": "[\"code25 xa25\"]",
                "is_sample": false
            },
            {
                "input": "code26xa26\n[\"code26\",\"xa26\",\"test\"]",
                "expected_output": "[\"code26 xa26\"]",
                "is_sample": false
            },
            {
                "input": "code27xa27\n[\"code27\",\"xa27\",\"test\"]",
                "expected_output": "[\"code27 xa27\"]",
                "is_sample": false
            },
            {
                "input": "code28xa28\n[\"code28\",\"xa28\",\"test\"]",
                "expected_output": "[\"code28 xa28\"]",
                "is_sample": false
            },
            {
                "input": "code29xa29\n[\"code29\",\"xa29\",\"test\"]",
                "expected_output": "[\"code29 xa29\"]",
                "is_sample": false
            },
            {
                "input": "code30xa30\n[\"code30\",\"xa30\",\"test\"]",
                "expected_output": "[\"code30 xa30\"]",
                "is_sample": false
            },
            {
                "input": "code31xa31\n[\"code31\",\"xa31\",\"test\"]",
                "expected_output": "[\"code31 xa31\"]",
                "is_sample": false
            },
            {
                "input": "code32xa32\n[\"code32\",\"xa32\",\"test\"]",
                "expected_output": "[\"code32 xa32\"]",
                "is_sample": false
            },
            {
                "input": "code33xa33\n[\"code33\",\"xa33\",\"test\"]",
                "expected_output": "[\"code33 xa33\"]",
                "is_sample": false
            },
            {
                "input": "code34xa34\n[\"code34\",\"xa34\",\"test\"]",
                "expected_output": "[\"code34 xa34\"]",
                "is_sample": false
            },
            {
                "input": "code35xa35\n[\"code35\",\"xa35\",\"test\"]",
                "expected_output": "[\"code35 xa35\"]",
                "is_sample": false
            },
            {
                "input": "code36xa36\n[\"code36\",\"xa36\",\"test\"]",
                "expected_output": "[\"code36 xa36\"]",
                "is_sample": false
            },
            {
                "input": "code37xa37\n[\"code37\",\"xa37\",\"test\"]",
                "expected_output": "[\"code37 xa37\"]",
                "is_sample": false
            },
            {
                "input": "code38xa38\n[\"code38\",\"xa38\",\"test\"]",
                "expected_output": "[\"code38 xa38\"]",
                "is_sample": false
            },
            {
                "input": "code39xa39\n[\"code39\",\"xa39\",\"test\"]",
                "expected_output": "[\"code39 xa39\"]",
                "is_sample": false
            },
            {
                "input": "code40xa40\n[\"code40\",\"xa40\",\"test\"]",
                "expected_output": "[\"code40 xa40\"]",
                "is_sample": false
            },
            {
                "input": "code41xa41\n[\"code41\",\"xa41\",\"test\"]",
                "expected_output": "[\"code41 xa41\"]",
                "is_sample": false
            },
            {
                "input": "code42xa42\n[\"code42\",\"xa42\",\"test\"]",
                "expected_output": "[\"code42 xa42\"]",
                "is_sample": false
            },
            {
                "input": "code43xa43\n[\"code43\",\"xa43\",\"test\"]",
                "expected_output": "[\"code43 xa43\"]",
                "is_sample": false
            },
            {
                "input": "code44xa44\n[\"code44\",\"xa44\",\"test\"]",
                "expected_output": "[\"code44 xa44\"]",
                "is_sample": false
            },
            {
                "input": "code45xa45\n[\"code45\",\"xa45\",\"test\"]",
                "expected_output": "[\"code45 xa45\"]",
                "is_sample": false
            },
            {
                "input": "code46xa46\n[\"code46\",\"xa46\",\"test\"]",
                "expected_output": "[\"code46 xa46\"]",
                "is_sample": false
            },
            {
                "input": "code47xa47\n[\"code47\",\"xa47\",\"test\"]",
                "expected_output": "[\"code47 xa47\"]",
                "is_sample": false
            },
            {
                "input": "code48xa48\n[\"code48\",\"xa48\",\"test\"]",
                "expected_output": "[\"code48 xa48\"]",
                "is_sample": false
            },
            {
                "input": "code49xa49\n[\"code49\",\"xa49\",\"test\"]",
                "expected_output": "[\"code49 xa49\"]",
                "is_sample": false
            },
            {
                "input": "code50xa50\n[\"code50\",\"xa50\",\"test\"]",
                "expected_output": "[\"code50 xa50\"]",
                "is_sample": false
            }
        ]
    },
    {
        "question_number": 97,
        "title": "Candy",
        "level": "Hard",
        "tags": [
            "Array",
            "Greedy"
        ],
        "description": "There are n children standing in a line. Each child is assigned a rating value given in the integer array ratings. You are giving candies to these children subjected to requirements: Each child must have at least one candy, and children with a higher rating get more candies than their neighbors. Return the minimum number of candies you need to have to distribute the candies to the children.",
        "constraints": "n == ratings.length\n1 <= n <= 2 * 10^4\n0 <= ratings[i] <= 2 * 10^4",
        "starter": "class Solution {\n    public int candy(int[] ratings) {\n        // Write your code here\n        return 0;\n    }\n}",
        "driver": {
            "key": "intArrayToInt",
            "method": "candy"
        },
        "testcases": [
            {
                "input": "[1,0,2]",
                "expected_output": "5",
                "is_sample": true
            },
            {
                "input": "[1,2,2]",
                "expected_output": "4",
                "is_sample": true
            },
            {
                "input": "[1,3,2,4]",
                "expected_output": "6",
                "is_sample": false
            },
            {
                "input": "[2,4,3,5]",
                "expected_output": "6",
                "is_sample": false
            },
            {
                "input": "[3,5,4,6]",
                "expected_output": "6",
                "is_sample": false
            },
            {
                "input": "[4,6,5,7]",
                "expected_output": "6",
                "is_sample": false
            },
            {
                "input": "[5,7,6,8]",
                "expected_output": "6",
                "is_sample": false
            },
            {
                "input": "[6,8,7,9]",
                "expected_output": "6",
                "is_sample": false
            },
            {
                "input": "[7,9,8,10]",
                "expected_output": "6",
                "is_sample": false
            },
            {
                "input": "[8,10,9,11]",
                "expected_output": "6",
                "is_sample": false
            },
            {
                "input": "[9,11,10,12]",
                "expected_output": "6",
                "is_sample": false
            },
            {
                "input": "[10,12,11,13]",
                "expected_output": "6",
                "is_sample": false
            },
            {
                "input": "[11,13,12,14]",
                "expected_output": "6",
                "is_sample": false
            },
            {
                "input": "[12,14,13,15]",
                "expected_output": "6",
                "is_sample": false
            },
            {
                "input": "[13,15,14,16]",
                "expected_output": "6",
                "is_sample": false
            },
            {
                "input": "[14,16,15,17]",
                "expected_output": "6",
                "is_sample": false
            },
            {
                "input": "[15,17,16,18]",
                "expected_output": "6",
                "is_sample": false
            },
            {
                "input": "[16,18,17,19]",
                "expected_output": "6",
                "is_sample": false
            },
            {
                "input": "[17,19,18,20]",
                "expected_output": "6",
                "is_sample": false
            },
            {
                "input": "[18,20,19,21]",
                "expected_output": "6",
                "is_sample": false
            },
            {
                "input": "[19,21,20,22]",
                "expected_output": "6",
                "is_sample": false
            },
            {
                "input": "[20,22,21,23]",
                "expected_output": "6",
                "is_sample": false
            },
            {
                "input": "[21,23,22,24]",
                "expected_output": "6",
                "is_sample": false
            },
            {
                "input": "[22,24,23,25]",
                "expected_output": "6",
                "is_sample": false
            },
            {
                "input": "[23,25,24,26]",
                "expected_output": "6",
                "is_sample": false
            },
            {
                "input": "[24,26,25,27]",
                "expected_output": "6",
                "is_sample": false
            },
            {
                "input": "[25,27,26,28]",
                "expected_output": "6",
                "is_sample": false
            },
            {
                "input": "[26,28,27,29]",
                "expected_output": "6",
                "is_sample": false
            },
            {
                "input": "[27,29,28,30]",
                "expected_output": "6",
                "is_sample": false
            },
            {
                "input": "[28,30,29,31]",
                "expected_output": "6",
                "is_sample": false
            },
            {
                "input": "[29,31,30,32]",
                "expected_output": "6",
                "is_sample": false
            },
            {
                "input": "[30,32,31,33]",
                "expected_output": "6",
                "is_sample": false
            },
            {
                "input": "[31,33,32,34]",
                "expected_output": "6",
                "is_sample": false
            },
            {
                "input": "[32,34,33,35]",
                "expected_output": "6",
                "is_sample": false
            },
            {
                "input": "[33,35,34,36]",
                "expected_output": "6",
                "is_sample": false
            },
            {
                "input": "[34,36,35,37]",
                "expected_output": "6",
                "is_sample": false
            },
            {
                "input": "[35,37,36,38]",
                "expected_output": "6",
                "is_sample": false
            },
            {
                "input": "[36,38,37,39]",
                "expected_output": "6",
                "is_sample": false
            },
            {
                "input": "[37,39,38,40]",
                "expected_output": "6",
                "is_sample": false
            },
            {
                "input": "[38,40,39,41]",
                "expected_output": "6",
                "is_sample": false
            },
            {
                "input": "[39,41,40,42]",
                "expected_output": "6",
                "is_sample": false
            },
            {
                "input": "[40,42,41,43]",
                "expected_output": "6",
                "is_sample": false
            },
            {
                "input": "[41,43,42,44]",
                "expected_output": "6",
                "is_sample": false
            },
            {
                "input": "[42,44,43,45]",
                "expected_output": "6",
                "is_sample": false
            },
            {
                "input": "[43,45,44,46]",
                "expected_output": "6",
                "is_sample": false
            },
            {
                "input": "[44,46,45,47]",
                "expected_output": "6",
                "is_sample": false
            },
            {
                "input": "[45,47,46,48]",
                "expected_output": "6",
                "is_sample": false
            },
            {
                "input": "[46,48,47,49]",
                "expected_output": "6",
                "is_sample": false
            },
            {
                "input": "[47,49,48,50]",
                "expected_output": "6",
                "is_sample": false
            },
            {
                "input": "[48,50,49,51]",
                "expected_output": "6",
                "is_sample": false
            },
            {
                "input": "[49,51,50,52]",
                "expected_output": "6",
                "is_sample": false
            },
            {
                "input": "[50,52,51,53]",
                "expected_output": "6",
                "is_sample": false
            }
        ]
    },
    {
        "question_number": 98,
        "title": "Word Search II",
        "level": "Hard",
        "tags": [
            "Array",
            "String",
            "Backtracking",
            "Trie",
            "Matrix"
        ],
        "description": "Given an m x n board of characters and a list of strings words, return all words on the board.\n\nEach word must be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring.\n\nInput format (multiple lines):\nBoard rows (1 line per row)\nFinal line: words as JSON string array",
        "constraints": "m == board.length\nn == board[i].length\n1 <= m, n <= 12\n1 <= words.length <= 3 * 10^4\n1 <= words[i].length <= 10",
        "starter": "class Solution {\n    public List<String> findWords(char[][] board, String[] words) {\n        // Write your code here\n        return new ArrayList<>();\n    }\n}",
        "driver": "wordSearch2",
        "testcases": [
            {
                "input": "oaan\netae\nihkr\niflv\n[\"oath\",\"pea\",\"eat\",\"rain\"]",
                "expected_output": "[\"eat\",\"oath\"]",
                "is_sample": true
            },
            {
                "input": "ab\ncd\n[\"abcd\"]",
                "expected_output": "[]",
                "is_sample": true
            },
            {
                "input": "ab\ncd\n[\"ab\",\"ac\",\"xyz1\"]",
                "expected_output": "[\"ab\",\"ac\"]",
                "is_sample": false
            },
            {
                "input": "ab\ncd\n[\"ab\",\"ac\",\"xyz2\"]",
                "expected_output": "[\"ab\",\"ac\"]",
                "is_sample": false
            },
            {
                "input": "ab\ncd\n[\"ab\",\"ac\",\"xyz3\"]",
                "expected_output": "[\"ab\",\"ac\"]",
                "is_sample": false
            },
            {
                "input": "ab\ncd\n[\"ab\",\"ac\",\"xyz4\"]",
                "expected_output": "[\"ab\",\"ac\"]",
                "is_sample": false
            },
            {
                "input": "ab\ncd\n[\"ab\",\"ac\",\"xyz5\"]",
                "expected_output": "[\"ab\",\"ac\"]",
                "is_sample": false
            },
            {
                "input": "ab\ncd\n[\"ab\",\"ac\",\"xyz6\"]",
                "expected_output": "[\"ab\",\"ac\"]",
                "is_sample": false
            },
            {
                "input": "ab\ncd\n[\"ab\",\"ac\",\"xyz7\"]",
                "expected_output": "[\"ab\",\"ac\"]",
                "is_sample": false
            },
            {
                "input": "ab\ncd\n[\"ab\",\"ac\",\"xyz8\"]",
                "expected_output": "[\"ab\",\"ac\"]",
                "is_sample": false
            },
            {
                "input": "ab\ncd\n[\"ab\",\"ac\",\"xyz9\"]",
                "expected_output": "[\"ab\",\"ac\"]",
                "is_sample": false
            },
            {
                "input": "ab\ncd\n[\"ab\",\"ac\",\"xyz10\"]",
                "expected_output": "[\"ab\",\"ac\"]",
                "is_sample": false
            },
            {
                "input": "ab\ncd\n[\"ab\",\"ac\",\"xyz11\"]",
                "expected_output": "[\"ab\",\"ac\"]",
                "is_sample": false
            },
            {
                "input": "ab\ncd\n[\"ab\",\"ac\",\"xyz12\"]",
                "expected_output": "[\"ab\",\"ac\"]",
                "is_sample": false
            },
            {
                "input": "ab\ncd\n[\"ab\",\"ac\",\"xyz13\"]",
                "expected_output": "[\"ab\",\"ac\"]",
                "is_sample": false
            },
            {
                "input": "ab\ncd\n[\"ab\",\"ac\",\"xyz14\"]",
                "expected_output": "[\"ab\",\"ac\"]",
                "is_sample": false
            },
            {
                "input": "ab\ncd\n[\"ab\",\"ac\",\"xyz15\"]",
                "expected_output": "[\"ab\",\"ac\"]",
                "is_sample": false
            },
            {
                "input": "ab\ncd\n[\"ab\",\"ac\",\"xyz16\"]",
                "expected_output": "[\"ab\",\"ac\"]",
                "is_sample": false
            },
            {
                "input": "ab\ncd\n[\"ab\",\"ac\",\"xyz17\"]",
                "expected_output": "[\"ab\",\"ac\"]",
                "is_sample": false
            },
            {
                "input": "ab\ncd\n[\"ab\",\"ac\",\"xyz18\"]",
                "expected_output": "[\"ab\",\"ac\"]",
                "is_sample": false
            },
            {
                "input": "ab\ncd\n[\"ab\",\"ac\",\"xyz19\"]",
                "expected_output": "[\"ab\",\"ac\"]",
                "is_sample": false
            },
            {
                "input": "ab\ncd\n[\"ab\",\"ac\",\"xyz20\"]",
                "expected_output": "[\"ab\",\"ac\"]",
                "is_sample": false
            },
            {
                "input": "ab\ncd\n[\"ab\",\"ac\",\"xyz21\"]",
                "expected_output": "[\"ab\",\"ac\"]",
                "is_sample": false
            },
            {
                "input": "ab\ncd\n[\"ab\",\"ac\",\"xyz22\"]",
                "expected_output": "[\"ab\",\"ac\"]",
                "is_sample": false
            },
            {
                "input": "ab\ncd\n[\"ab\",\"ac\",\"xyz23\"]",
                "expected_output": "[\"ab\",\"ac\"]",
                "is_sample": false
            },
            {
                "input": "ab\ncd\n[\"ab\",\"ac\",\"xyz24\"]",
                "expected_output": "[\"ab\",\"ac\"]",
                "is_sample": false
            },
            {
                "input": "ab\ncd\n[\"ab\",\"ac\",\"xyz25\"]",
                "expected_output": "[\"ab\",\"ac\"]",
                "is_sample": false
            },
            {
                "input": "ab\ncd\n[\"ab\",\"ac\",\"xyz26\"]",
                "expected_output": "[\"ab\",\"ac\"]",
                "is_sample": false
            },
            {
                "input": "ab\ncd\n[\"ab\",\"ac\",\"xyz27\"]",
                "expected_output": "[\"ab\",\"ac\"]",
                "is_sample": false
            },
            {
                "input": "ab\ncd\n[\"ab\",\"ac\",\"xyz28\"]",
                "expected_output": "[\"ab\",\"ac\"]",
                "is_sample": false
            },
            {
                "input": "ab\ncd\n[\"ab\",\"ac\",\"xyz29\"]",
                "expected_output": "[\"ab\",\"ac\"]",
                "is_sample": false
            },
            {
                "input": "ab\ncd\n[\"ab\",\"ac\",\"xyz30\"]",
                "expected_output": "[\"ab\",\"ac\"]",
                "is_sample": false
            },
            {
                "input": "ab\ncd\n[\"ab\",\"ac\",\"xyz31\"]",
                "expected_output": "[\"ab\",\"ac\"]",
                "is_sample": false
            },
            {
                "input": "ab\ncd\n[\"ab\",\"ac\",\"xyz32\"]",
                "expected_output": "[\"ab\",\"ac\"]",
                "is_sample": false
            },
            {
                "input": "ab\ncd\n[\"ab\",\"ac\",\"xyz33\"]",
                "expected_output": "[\"ab\",\"ac\"]",
                "is_sample": false
            },
            {
                "input": "ab\ncd\n[\"ab\",\"ac\",\"xyz34\"]",
                "expected_output": "[\"ab\",\"ac\"]",
                "is_sample": false
            },
            {
                "input": "ab\ncd\n[\"ab\",\"ac\",\"xyz35\"]",
                "expected_output": "[\"ab\",\"ac\"]",
                "is_sample": false
            },
            {
                "input": "ab\ncd\n[\"ab\",\"ac\",\"xyz36\"]",
                "expected_output": "[\"ab\",\"ac\"]",
                "is_sample": false
            },
            {
                "input": "ab\ncd\n[\"ab\",\"ac\",\"xyz37\"]",
                "expected_output": "[\"ab\",\"ac\"]",
                "is_sample": false
            },
            {
                "input": "ab\ncd\n[\"ab\",\"ac\",\"xyz38\"]",
                "expected_output": "[\"ab\",\"ac\"]",
                "is_sample": false
            },
            {
                "input": "ab\ncd\n[\"ab\",\"ac\",\"xyz39\"]",
                "expected_output": "[\"ab\",\"ac\"]",
                "is_sample": false
            },
            {
                "input": "ab\ncd\n[\"ab\",\"ac\",\"xyz40\"]",
                "expected_output": "[\"ab\",\"ac\"]",
                "is_sample": false
            },
            {
                "input": "ab\ncd\n[\"ab\",\"ac\",\"xyz41\"]",
                "expected_output": "[\"ab\",\"ac\"]",
                "is_sample": false
            },
            {
                "input": "ab\ncd\n[\"ab\",\"ac\",\"xyz42\"]",
                "expected_output": "[\"ab\",\"ac\"]",
                "is_sample": false
            },
            {
                "input": "ab\ncd\n[\"ab\",\"ac\",\"xyz43\"]",
                "expected_output": "[\"ab\",\"ac\"]",
                "is_sample": false
            },
            {
                "input": "ab\ncd\n[\"ab\",\"ac\",\"xyz44\"]",
                "expected_output": "[\"ab\",\"ac\"]",
                "is_sample": false
            },
            {
                "input": "ab\ncd\n[\"ab\",\"ac\",\"xyz45\"]",
                "expected_output": "[\"ab\",\"ac\"]",
                "is_sample": false
            },
            {
                "input": "ab\ncd\n[\"ab\",\"ac\",\"xyz46\"]",
                "expected_output": "[\"ab\",\"ac\"]",
                "is_sample": false
            },
            {
                "input": "ab\ncd\n[\"ab\",\"ac\",\"xyz47\"]",
                "expected_output": "[\"ab\",\"ac\"]",
                "is_sample": false
            },
            {
                "input": "ab\ncd\n[\"ab\",\"ac\",\"xyz48\"]",
                "expected_output": "[\"ab\",\"ac\"]",
                "is_sample": false
            },
            {
                "input": "ab\ncd\n[\"ab\",\"ac\",\"xyz49\"]",
                "expected_output": "[\"ab\",\"ac\"]",
                "is_sample": false
            },
            {
                "input": "ab\ncd\n[\"ab\",\"ac\",\"xyz50\"]",
                "expected_output": "[\"ab\",\"ac\"]",
                "is_sample": false
            }
        ]
    },
    {
        "question_number": 99,
        "title": "Scramble String",
        "level": "Hard",
        "tags": [
            "String",
            "Dynamic Programming"
        ],
        "description": "We can scramble a string s to get a string t using the following algorithm:\n1. If the length of the string is 1, stop.\n2. If the length of the string is > 1, do the following:\n  - Split the string into two non-empty substrings at a random index.\n  - Randomly decide to swap the two substrings or to keep them in the same order.\n  - Apply step 1 recursively on each of the two substrings.\n\nGiven two strings s1 and s2 of the same length, return true if s2 is a scrambled string of s1, otherwise, return false.\n\nInput format (2 lines):\nLine 1: s1\nLine 2: s2",
        "constraints": "s1.length == s2.length\n1 <= s1.length <= 30\ns1 and s2 consist of lowercase English letters.",
        "starter": "class Solution {\n    public boolean isScramble(String s1, String s2) {\n        // Write your code here\n        return false;\n    }\n}",
        "driver": {
            "key": "twoStringsToBoolean",
            "method": "isScramble"
        },
        "testcases": [
            {
                "input": "great\nrgeat",
                "expected_output": "true",
                "is_sample": true
            },
            {
                "input": "abcde\ncaebd",
                "expected_output": "false",
                "is_sample": true
            },
            {
                "input": "a\na",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "coder1\nzyxwv",
                "expected_output": "false",
                "is_sample": false
            },
            {
                "input": "coder2\nocred2",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "coder3\nzyxwv",
                "expected_output": "false",
                "is_sample": false
            },
            {
                "input": "coder4\nocred4",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "coder5\nzyxwv",
                "expected_output": "false",
                "is_sample": false
            },
            {
                "input": "coder6\nocred6",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "coder7\nzyxwv",
                "expected_output": "false",
                "is_sample": false
            },
            {
                "input": "coder8\nocred8",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "coder9\nzyxwv",
                "expected_output": "false",
                "is_sample": false
            },
            {
                "input": "coder0\nocred0",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "coder1\nzyxwv",
                "expected_output": "false",
                "is_sample": false
            },
            {
                "input": "coder2\nocred2",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "coder3\nzyxwv",
                "expected_output": "false",
                "is_sample": false
            },
            {
                "input": "coder4\nocred4",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "coder5\nzyxwv",
                "expected_output": "false",
                "is_sample": false
            },
            {
                "input": "coder6\nocred6",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "coder7\nzyxwv",
                "expected_output": "false",
                "is_sample": false
            },
            {
                "input": "coder8\nocred8",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "coder9\nzyxwv",
                "expected_output": "false",
                "is_sample": false
            },
            {
                "input": "coder0\nocred0",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "coder1\nzyxwv",
                "expected_output": "false",
                "is_sample": false
            },
            {
                "input": "coder2\nocred2",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "coder3\nzyxwv",
                "expected_output": "false",
                "is_sample": false
            },
            {
                "input": "coder4\nocred4",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "coder5\nzyxwv",
                "expected_output": "false",
                "is_sample": false
            },
            {
                "input": "coder6\nocred6",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "coder7\nzyxwv",
                "expected_output": "false",
                "is_sample": false
            },
            {
                "input": "coder8\nocred8",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "coder9\nzyxwv",
                "expected_output": "false",
                "is_sample": false
            },
            {
                "input": "coder0\nocred0",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "coder1\nzyxwv",
                "expected_output": "false",
                "is_sample": false
            },
            {
                "input": "coder2\nocred2",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "coder3\nzyxwv",
                "expected_output": "false",
                "is_sample": false
            },
            {
                "input": "coder4\nocred4",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "coder5\nzyxwv",
                "expected_output": "false",
                "is_sample": false
            },
            {
                "input": "coder6\nocred6",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "coder7\nzyxwv",
                "expected_output": "false",
                "is_sample": false
            },
            {
                "input": "coder8\nocred8",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "coder9\nzyxwv",
                "expected_output": "false",
                "is_sample": false
            },
            {
                "input": "coder0\nocred0",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "coder1\nzyxwv",
                "expected_output": "false",
                "is_sample": false
            },
            {
                "input": "coder2\nocred2",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "coder3\nzyxwv",
                "expected_output": "false",
                "is_sample": false
            },
            {
                "input": "coder4\nocred4",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "coder5\nzyxwv",
                "expected_output": "false",
                "is_sample": false
            },
            {
                "input": "coder6\nocred6",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "coder7\nzyxwv",
                "expected_output": "false",
                "is_sample": false
            },
            {
                "input": "coder8\nocred8",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "coder9\nzyxwv",
                "expected_output": "false",
                "is_sample": false
            },
            {
                "input": "coder0\nocred0",
                "expected_output": "true",
                "is_sample": false
            }
        ]
    },
    {
        "question_number": 100,
        "title": "Best Time to Buy and Sell Stock III",
        "level": "Hard",
        "tags": [
            "Array",
            "Dynamic Programming"
        ],
        "description": "You are given an array prices where prices[i] is the price of a given stock on the ith day.\n\nFind the maximum profit you can achieve. You may complete at most two transactions.\n\nNote: You may not engage in multiple transactions simultaneously (i.e., you must sell the stock before you buy again).",
        "constraints": "1 <= prices.length <= 10^5\n0 <= prices[i] <= 10^5",
        "starter": "class Solution {\n    public int maxProfit(int[] prices) {\n        // Write your code here\n        return 0;\n    }\n}",
        "driver": {
            "key": "intArrayToInt",
            "method": "maxProfit"
        },
        "testcases": [
            {
                "input": "[3,3,5,0,0,3,1,4]",
                "expected_output": "6",
                "is_sample": true
            },
            {
                "input": "[1,2,3,4,5]",
                "expected_output": "4",
                "is_sample": true
            },
            {
                "input": "[7,6,4,3,1]",
                "expected_output": "0",
                "is_sample": false
            },
            {
                "input": "[2,5,1,4,2,7]",
                "expected_output": "9",
                "is_sample": false
            },
            {
                "input": "[4,10,2,8,4,14]",
                "expected_output": "18",
                "is_sample": false
            },
            {
                "input": "[6,15,3,12,6,21]",
                "expected_output": "27",
                "is_sample": false
            },
            {
                "input": "[8,20,4,16,8,28]",
                "expected_output": "36",
                "is_sample": false
            },
            {
                "input": "[10,25,5,20,10,35]",
                "expected_output": "45",
                "is_sample": false
            },
            {
                "input": "[12,30,6,24,12,42]",
                "expected_output": "54",
                "is_sample": false
            },
            {
                "input": "[14,35,7,28,14,49]",
                "expected_output": "63",
                "is_sample": false
            },
            {
                "input": "[16,40,8,32,16,56]",
                "expected_output": "72",
                "is_sample": false
            },
            {
                "input": "[18,45,9,36,18,63]",
                "expected_output": "81",
                "is_sample": false
            },
            {
                "input": "[20,50,10,40,20,70]",
                "expected_output": "90",
                "is_sample": false
            },
            {
                "input": "[22,55,11,44,22,77]",
                "expected_output": "99",
                "is_sample": false
            },
            {
                "input": "[24,60,12,48,24,84]",
                "expected_output": "108",
                "is_sample": false
            },
            {
                "input": "[26,65,13,52,26,91]",
                "expected_output": "117",
                "is_sample": false
            },
            {
                "input": "[28,70,14,56,28,98]",
                "expected_output": "126",
                "is_sample": false
            },
            {
                "input": "[30,75,15,60,30,105]",
                "expected_output": "135",
                "is_sample": false
            },
            {
                "input": "[32,80,16,64,32,112]",
                "expected_output": "144",
                "is_sample": false
            },
            {
                "input": "[34,85,17,68,34,119]",
                "expected_output": "153",
                "is_sample": false
            },
            {
                "input": "[36,90,18,72,36,126]",
                "expected_output": "162",
                "is_sample": false
            },
            {
                "input": "[38,95,19,76,38,133]",
                "expected_output": "171",
                "is_sample": false
            },
            {
                "input": "[40,100,20,80,40,140]",
                "expected_output": "180",
                "is_sample": false
            },
            {
                "input": "[42,105,21,84,42,147]",
                "expected_output": "189",
                "is_sample": false
            },
            {
                "input": "[44,110,22,88,44,154]",
                "expected_output": "198",
                "is_sample": false
            },
            {
                "input": "[46,115,23,92,46,161]",
                "expected_output": "207",
                "is_sample": false
            },
            {
                "input": "[48,120,24,96,48,168]",
                "expected_output": "216",
                "is_sample": false
            },
            {
                "input": "[50,125,25,100,50,175]",
                "expected_output": "225",
                "is_sample": false
            },
            {
                "input": "[52,130,26,104,52,182]",
                "expected_output": "234",
                "is_sample": false
            },
            {
                "input": "[54,135,27,108,54,189]",
                "expected_output": "243",
                "is_sample": false
            },
            {
                "input": "[56,140,28,112,56,196]",
                "expected_output": "252",
                "is_sample": false
            },
            {
                "input": "[58,145,29,116,58,203]",
                "expected_output": "261",
                "is_sample": false
            },
            {
                "input": "[60,150,30,120,60,210]",
                "expected_output": "270",
                "is_sample": false
            },
            {
                "input": "[62,155,31,124,62,217]",
                "expected_output": "279",
                "is_sample": false
            },
            {
                "input": "[64,160,32,128,64,224]",
                "expected_output": "288",
                "is_sample": false
            },
            {
                "input": "[66,165,33,132,66,231]",
                "expected_output": "297",
                "is_sample": false
            },
            {
                "input": "[68,170,34,136,68,238]",
                "expected_output": "306",
                "is_sample": false
            },
            {
                "input": "[70,175,35,140,70,245]",
                "expected_output": "315",
                "is_sample": false
            },
            {
                "input": "[72,180,36,144,72,252]",
                "expected_output": "324",
                "is_sample": false
            },
            {
                "input": "[74,185,37,148,74,259]",
                "expected_output": "333",
                "is_sample": false
            },
            {
                "input": "[76,190,38,152,76,266]",
                "expected_output": "342",
                "is_sample": false
            },
            {
                "input": "[78,195,39,156,78,273]",
                "expected_output": "351",
                "is_sample": false
            },
            {
                "input": "[80,200,40,160,80,280]",
                "expected_output": "360",
                "is_sample": false
            },
            {
                "input": "[82,205,41,164,82,287]",
                "expected_output": "369",
                "is_sample": false
            },
            {
                "input": "[84,210,42,168,84,294]",
                "expected_output": "378",
                "is_sample": false
            },
            {
                "input": "[86,215,43,172,86,301]",
                "expected_output": "387",
                "is_sample": false
            },
            {
                "input": "[88,220,44,176,88,308]",
                "expected_output": "396",
                "is_sample": false
            },
            {
                "input": "[90,225,45,180,90,315]",
                "expected_output": "405",
                "is_sample": false
            },
            {
                "input": "[92,230,46,184,92,322]",
                "expected_output": "414",
                "is_sample": false
            },
            {
                "input": "[94,235,47,188,94,329]",
                "expected_output": "423",
                "is_sample": false
            },
            {
                "input": "[96,240,48,192,96,336]",
                "expected_output": "432",
                "is_sample": false
            },
            {
                "input": "[98,245,49,196,98,343]",
                "expected_output": "441",
                "is_sample": false
            },
            {
                "input": "[100,250,50,200,100,350]",
                "expected_output": "450",
                "is_sample": false
            }
        ]
    }
];
