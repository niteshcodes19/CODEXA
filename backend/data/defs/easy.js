module.exports = [
    {
        "question_number": 1,
        "title": "Two Sum",
        "level": "Easy",
        "tags": [
            "Array",
            "Hash Table"
        ],
        "description": "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.\n\nYou may assume that each input would have exactly one solution, and you may not use the same element twice.\n\nYou can return the answer in any order.",
        "constraints": "2 <= nums.length <= 10^4\n-10^9 <= nums[i] <= 10^9\n-10^9 <= target <= 10^9\nOnly one valid answer exists.",
        "starter": "class Solution {\n    public int[] twoSum(int[] nums, int target) {\n        // Write your code here\n        return new int[]{};\n    }\n}",
        "driver": "twoSum",
        "testcases": [
            {
                "input": "[2,7,11,15]\n9",
                "expected_output": "[0,1]",
                "is_sample": true
            },
            {
                "input": "[3,2,4]\n6",
                "expected_output": "[1,2]",
                "is_sample": true
            },
            {
                "input": "[3,3]\n6",
                "expected_output": "[0,1]",
                "is_sample": false
            },
            {
                "input": "[1,2,11,22,31]\n3",
                "expected_output": "[0,1]",
                "is_sample": false
            },
            {
                "input": "[3,5,13,25,33]\n8",
                "expected_output": "[0,1]",
                "is_sample": false
            },
            {
                "input": "[5,8,15,28,35]\n13",
                "expected_output": "[0,1]",
                "is_sample": false
            },
            {
                "input": "[7,11,17,31,37]\n18",
                "expected_output": "[0,1]",
                "is_sample": false
            },
            {
                "input": "[9,14,19,34,39]\n23",
                "expected_output": "[0,1]",
                "is_sample": false
            },
            {
                "input": "[11,17,21,37,41]\n28",
                "expected_output": "[0,1]",
                "is_sample": false
            },
            {
                "input": "[13,20,23,40,43]\n33",
                "expected_output": "[0,1]",
                "is_sample": false
            },
            {
                "input": "[15,23,25,43,45]\n38",
                "expected_output": "[0,1]",
                "is_sample": false
            },
            {
                "input": "[17,26,27,46,47]\n43",
                "expected_output": "[0,1]",
                "is_sample": false
            },
            {
                "input": "[19,29,29,49,49]\n48",
                "expected_output": "[0,1]",
                "is_sample": false
            },
            {
                "input": "[21,32,31,52,51]\n53",
                "expected_output": "[0,1]",
                "is_sample": false
            },
            {
                "input": "[23,35,33,55,53]\n58",
                "expected_output": "[0,1]",
                "is_sample": false
            },
            {
                "input": "[25,38,35,58,55]\n63",
                "expected_output": "[0,1]",
                "is_sample": false
            },
            {
                "input": "[27,41,37,61,57]\n68",
                "expected_output": "[0,1]",
                "is_sample": false
            },
            {
                "input": "[29,44,39,64,59]\n73",
                "expected_output": "[0,1]",
                "is_sample": false
            },
            {
                "input": "[31,47,41,67,61]\n78",
                "expected_output": "[0,1]",
                "is_sample": false
            },
            {
                "input": "[33,50,43,70,63]\n83",
                "expected_output": "[0,1]",
                "is_sample": false
            },
            {
                "input": "[35,53,45,73,65]\n88",
                "expected_output": "[0,1]",
                "is_sample": false
            },
            {
                "input": "[37,56,47,76,67]\n93",
                "expected_output": "[0,1]",
                "is_sample": false
            },
            {
                "input": "[39,59,49,79,69]\n98",
                "expected_output": "[0,1]",
                "is_sample": false
            },
            {
                "input": "[41,62,51,82,71]\n103",
                "expected_output": "[0,1]",
                "is_sample": false
            },
            {
                "input": "[43,65,53,85,73]\n108",
                "expected_output": "[0,1]",
                "is_sample": false
            },
            {
                "input": "[45,68,55,88,75]\n113",
                "expected_output": "[0,1]",
                "is_sample": false
            },
            {
                "input": "[47,71,57,91,77]\n118",
                "expected_output": "[0,1]",
                "is_sample": false
            },
            {
                "input": "[49,74,59,94,79]\n123",
                "expected_output": "[0,1]",
                "is_sample": false
            },
            {
                "input": "[51,77,61,97,81]\n128",
                "expected_output": "[0,1]",
                "is_sample": false
            },
            {
                "input": "[53,80,63,100,83]\n133",
                "expected_output": "[0,1]",
                "is_sample": false
            },
            {
                "input": "[55,83,65,103,85]\n138",
                "expected_output": "[0,1]",
                "is_sample": false
            },
            {
                "input": "[57,86,67,106,87]\n143",
                "expected_output": "[0,1]",
                "is_sample": false
            },
            {
                "input": "[59,89,69,109,89]\n148",
                "expected_output": "[0,1]",
                "is_sample": false
            },
            {
                "input": "[61,92,71,112,91]\n153",
                "expected_output": "[0,1]",
                "is_sample": false
            },
            {
                "input": "[63,95,73,115,93]\n158",
                "expected_output": "[0,1]",
                "is_sample": false
            },
            {
                "input": "[65,98,75,118,95]\n163",
                "expected_output": "[0,1]",
                "is_sample": false
            },
            {
                "input": "[67,101,77,121,97]\n168",
                "expected_output": "[0,1]",
                "is_sample": false
            },
            {
                "input": "[69,104,79,124,99]\n173",
                "expected_output": "[0,1]",
                "is_sample": false
            },
            {
                "input": "[71,107,81,127,101]\n178",
                "expected_output": "[0,1]",
                "is_sample": false
            },
            {
                "input": "[73,110,83,130,103]\n183",
                "expected_output": "[0,1]",
                "is_sample": false
            },
            {
                "input": "[75,113,85,133,105]\n188",
                "expected_output": "[0,1]",
                "is_sample": false
            },
            {
                "input": "[77,116,87,136,107]\n193",
                "expected_output": "[0,1]",
                "is_sample": false
            },
            {
                "input": "[79,119,89,139,109]\n198",
                "expected_output": "[0,1]",
                "is_sample": false
            },
            {
                "input": "[81,122,91,142,111]\n203",
                "expected_output": "[0,1]",
                "is_sample": false
            },
            {
                "input": "[83,125,93,145,113]\n208",
                "expected_output": "[0,1]",
                "is_sample": false
            },
            {
                "input": "[85,128,95,148,115]\n213",
                "expected_output": "[0,1]",
                "is_sample": false
            },
            {
                "input": "[87,131,97,151,117]\n218",
                "expected_output": "[0,1]",
                "is_sample": false
            },
            {
                "input": "[89,134,99,154,119]\n223",
                "expected_output": "[0,1]",
                "is_sample": false
            },
            {
                "input": "[91,137,101,157,121]\n228",
                "expected_output": "[0,1]",
                "is_sample": false
            },
            {
                "input": "[93,140,103,160,123]\n233",
                "expected_output": "[0,1]",
                "is_sample": false
            },
            {
                "input": "[95,143,105,163,125]\n238",
                "expected_output": "[0,1]",
                "is_sample": false
            },
            {
                "input": "[97,146,107,166,127]\n243",
                "expected_output": "[0,1]",
                "is_sample": false
            },
            {
                "input": "[99,149,109,169,129]\n248",
                "expected_output": "[0,1]",
                "is_sample": false
            }
        ]
    },
    {
        "question_number": 2,
        "title": "Valid Parentheses",
        "level": "Easy",
        "tags": [
            "String",
            "Stack"
        ],
        "description": "Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.\n\nAn input string is valid if:\n1. Open brackets must be closed by the same type of brackets.\n2. Open brackets must be closed in the correct order.\n3. Every close bracket has a corresponding open bracket of the same type.",
        "constraints": "1 <= s.length <= 10^4\ns consists of parentheses only '()[]{}'",
        "starter": "class Solution {\n    public boolean isValid(String s) {\n        // Write your code here\n        return false;\n    }\n}",
        "driver": {
            "key": "stringToBoolean",
            "method": "isValid"
        },
        "testcases": [
            {
                "input": "()",
                "expected_output": "true",
                "is_sample": true
            },
            {
                "input": "()[]{}",
                "expected_output": "true",
                "is_sample": true
            },
            {
                "input": "(]",
                "expected_output": "false",
                "is_sample": true
            },
            {
                "input": "([)]",
                "expected_output": "false",
                "is_sample": false
            },
            {
                "input": "{[]}",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "()",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "[]{}(",
                "expected_output": "false",
                "is_sample": false
            },
            {
                "input": "{}([]){()}",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "([]){()}({})((()))(",
                "expected_output": "false",
                "is_sample": false
            },
            {
                "input": "{()}({})((()))[[[]]]({[]})",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "({})(",
                "expected_output": "false",
                "is_sample": false
            },
            {
                "input": "((()))[[[]]]",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "[[[]]]({[]})()(",
                "expected_output": "false",
                "is_sample": false
            },
            {
                "input": "({[]})()[]{}",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "()[]{}([]){()}(",
                "expected_output": "false",
                "is_sample": false
            },
            {
                "input": "[]",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "{}([])(",
                "expected_output": "false",
                "is_sample": false
            },
            {
                "input": "([]){()}({})",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "{()}({})((()))[[[]]](",
                "expected_output": "false",
                "is_sample": false
            },
            {
                "input": "({})((()))[[[]]]({[]})()",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "((()))(",
                "expected_output": "false",
                "is_sample": false
            },
            {
                "input": "[[[]]]({[]})",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "({[]})()[](",
                "expected_output": "false",
                "is_sample": false
            },
            {
                "input": "()[]{}([])",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "[]{}([]){()}({})(",
                "expected_output": "false",
                "is_sample": false
            },
            {
                "input": "{}",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "([]){()}(",
                "expected_output": "false",
                "is_sample": false
            },
            {
                "input": "{()}({})((()))",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "({})((()))[[[]]]({[]})(",
                "expected_output": "false",
                "is_sample": false
            },
            {
                "input": "((()))[[[]]]({[]})()[]",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "[[[]]](",
                "expected_output": "false",
                "is_sample": false
            },
            {
                "input": "({[]})()",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "()[]{}(",
                "expected_output": "false",
                "is_sample": false
            },
            {
                "input": "[]{}([]){()}",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "{}([]){()}({})((()))(",
                "expected_output": "false",
                "is_sample": false
            },
            {
                "input": "([])",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "{()}({})(",
                "expected_output": "false",
                "is_sample": false
            },
            {
                "input": "({})((()))[[[]]]",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "((()))[[[]]]({[]})()(",
                "expected_output": "false",
                "is_sample": false
            },
            {
                "input": "[[[]]]({[]})()[]{}",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "({[]})(",
                "expected_output": "false",
                "is_sample": false
            },
            {
                "input": "()[]",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "[]{}([])(",
                "expected_output": "false",
                "is_sample": false
            },
            {
                "input": "{}([]){()}({})",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "([]){()}({})((()))[[[]]](",
                "expected_output": "false",
                "is_sample": false
            },
            {
                "input": "{()}",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "({})((()))(",
                "expected_output": "false",
                "is_sample": false
            },
            {
                "input": "((()))[[[]]]({[]})",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "[[[]]]({[]})()[](",
                "expected_output": "false",
                "is_sample": false
            },
            {
                "input": "({[]})()[]{}([])",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "()(",
                "expected_output": "false",
                "is_sample": false
            },
            {
                "input": "[]{}",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "{}([]){()}(",
                "expected_output": "false",
                "is_sample": false
            },
            {
                "input": "([]){()}({})((()))",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "{()}({})((()))[[[]]]({[]})(",
                "expected_output": "false",
                "is_sample": false
            }
        ]
    },
    {
        "question_number": 3,
        "title": "Merge Sorted Array",
        "level": "Easy",
        "tags": [
            "Array",
            "Two Pointers",
            "Sorting"
        ],
        "description": "You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.\n\nMerge nums2 into nums1 as one sorted array in-place.\n\nInput format (4 lines):\nLine 1: nums1 as JSON array (includes trailing zeros for merge space)\nLine 2: m\nLine 3: nums2 as JSON array\nLine 4: n",
        "constraints": "nums1.length == m + n\nnums2.length == n\n0 <= m, n <= 200\n1 <= m + n <= 200",
        "starter": "class Solution {\n    public void merge(int[] nums1, int m, int[] nums2, int n) {\n        // Write your code here (modify nums1 in-place)\n    }\n}",
        "driver": "mergeSortedArray",
        "testcases": [
            {
                "input": "[1,2,3,0,0,0]\n3\n[2,5,6]\n3",
                "expected_output": "[1,2,2,3,5,6]",
                "is_sample": true
            },
            {
                "input": "[1]\n1\n[]\n0",
                "expected_output": "[1]",
                "is_sample": true
            },
            {
                "input": "[0]\n0\n[1]\n1",
                "expected_output": "[1]",
                "is_sample": false
            },
            {
                "input": "[1,3,5,0,0,0]\n3\n[2,4,6]\n3",
                "expected_output": "[1,2,3,4,5,6]",
                "is_sample": false
            },
            {
                "input": "[2,4,6,0,0,0]\n3\n[3,5,7]\n3",
                "expected_output": "[2,3,4,5,6,7]",
                "is_sample": false
            },
            {
                "input": "[3,5,7,0,0,0]\n3\n[4,6,8]\n3",
                "expected_output": "[3,4,5,6,7,8]",
                "is_sample": false
            },
            {
                "input": "[4,6,8,0,0,0]\n3\n[5,7,9]\n3",
                "expected_output": "[4,5,6,7,8,9]",
                "is_sample": false
            },
            {
                "input": "[5,7,9,0,0,0]\n3\n[6,8,10]\n3",
                "expected_output": "[5,6,7,8,9,10]",
                "is_sample": false
            },
            {
                "input": "[6,8,10,0,0,0]\n3\n[7,9,11]\n3",
                "expected_output": "[6,7,8,9,10,11]",
                "is_sample": false
            },
            {
                "input": "[7,9,11,0,0,0]\n3\n[8,10,12]\n3",
                "expected_output": "[7,8,9,10,11,12]",
                "is_sample": false
            },
            {
                "input": "[8,10,12,0,0,0]\n3\n[9,11,13]\n3",
                "expected_output": "[8,9,10,11,12,13]",
                "is_sample": false
            },
            {
                "input": "[9,11,13,0,0,0]\n3\n[10,12,14]\n3",
                "expected_output": "[9,10,11,12,13,14]",
                "is_sample": false
            },
            {
                "input": "[10,12,14,0,0,0]\n3\n[11,13,15]\n3",
                "expected_output": "[10,11,12,13,14,15]",
                "is_sample": false
            },
            {
                "input": "[11,13,15,0,0,0]\n3\n[12,14,16]\n3",
                "expected_output": "[11,12,13,14,15,16]",
                "is_sample": false
            },
            {
                "input": "[12,14,16,0,0,0]\n3\n[13,15,17]\n3",
                "expected_output": "[12,13,14,15,16,17]",
                "is_sample": false
            },
            {
                "input": "[13,15,17,0,0,0]\n3\n[14,16,18]\n3",
                "expected_output": "[13,14,15,16,17,18]",
                "is_sample": false
            },
            {
                "input": "[14,16,18,0,0,0]\n3\n[15,17,19]\n3",
                "expected_output": "[14,15,16,17,18,19]",
                "is_sample": false
            },
            {
                "input": "[15,17,19,0,0,0]\n3\n[16,18,20]\n3",
                "expected_output": "[15,16,17,18,19,20]",
                "is_sample": false
            },
            {
                "input": "[16,18,20,0,0,0]\n3\n[17,19,21]\n3",
                "expected_output": "[16,17,18,19,20,21]",
                "is_sample": false
            },
            {
                "input": "[17,19,21,0,0,0]\n3\n[18,20,22]\n3",
                "expected_output": "[17,18,19,20,21,22]",
                "is_sample": false
            },
            {
                "input": "[18,20,22,0,0,0]\n3\n[19,21,23]\n3",
                "expected_output": "[18,19,20,21,22,23]",
                "is_sample": false
            },
            {
                "input": "[19,21,23,0,0,0]\n3\n[20,22,24]\n3",
                "expected_output": "[19,20,21,22,23,24]",
                "is_sample": false
            },
            {
                "input": "[20,22,24,0,0,0]\n3\n[21,23,25]\n3",
                "expected_output": "[20,21,22,23,24,25]",
                "is_sample": false
            },
            {
                "input": "[21,23,25,0,0,0]\n3\n[22,24,26]\n3",
                "expected_output": "[21,22,23,24,25,26]",
                "is_sample": false
            },
            {
                "input": "[22,24,26,0,0,0]\n3\n[23,25,27]\n3",
                "expected_output": "[22,23,24,25,26,27]",
                "is_sample": false
            },
            {
                "input": "[23,25,27,0,0,0]\n3\n[24,26,28]\n3",
                "expected_output": "[23,24,25,26,27,28]",
                "is_sample": false
            },
            {
                "input": "[24,26,28,0,0,0]\n3\n[25,27,29]\n3",
                "expected_output": "[24,25,26,27,28,29]",
                "is_sample": false
            },
            {
                "input": "[25,27,29,0,0,0]\n3\n[26,28,30]\n3",
                "expected_output": "[25,26,27,28,29,30]",
                "is_sample": false
            },
            {
                "input": "[26,28,30,0,0,0]\n3\n[27,29,31]\n3",
                "expected_output": "[26,27,28,29,30,31]",
                "is_sample": false
            },
            {
                "input": "[27,29,31,0,0,0]\n3\n[28,30,32]\n3",
                "expected_output": "[27,28,29,30,31,32]",
                "is_sample": false
            },
            {
                "input": "[28,30,32,0,0,0]\n3\n[29,31,33]\n3",
                "expected_output": "[28,29,30,31,32,33]",
                "is_sample": false
            },
            {
                "input": "[29,31,33,0,0,0]\n3\n[30,32,34]\n3",
                "expected_output": "[29,30,31,32,33,34]",
                "is_sample": false
            },
            {
                "input": "[30,32,34,0,0,0]\n3\n[31,33,35]\n3",
                "expected_output": "[30,31,32,33,34,35]",
                "is_sample": false
            },
            {
                "input": "[31,33,35,0,0,0]\n3\n[32,34,36]\n3",
                "expected_output": "[31,32,33,34,35,36]",
                "is_sample": false
            },
            {
                "input": "[32,34,36,0,0,0]\n3\n[33,35,37]\n3",
                "expected_output": "[32,33,34,35,36,37]",
                "is_sample": false
            },
            {
                "input": "[33,35,37,0,0,0]\n3\n[34,36,38]\n3",
                "expected_output": "[33,34,35,36,37,38]",
                "is_sample": false
            },
            {
                "input": "[34,36,38,0,0,0]\n3\n[35,37,39]\n3",
                "expected_output": "[34,35,36,37,38,39]",
                "is_sample": false
            },
            {
                "input": "[35,37,39,0,0,0]\n3\n[36,38,40]\n3",
                "expected_output": "[35,36,37,38,39,40]",
                "is_sample": false
            },
            {
                "input": "[36,38,40,0,0,0]\n3\n[37,39,41]\n3",
                "expected_output": "[36,37,38,39,40,41]",
                "is_sample": false
            },
            {
                "input": "[37,39,41,0,0,0]\n3\n[38,40,42]\n3",
                "expected_output": "[37,38,39,40,41,42]",
                "is_sample": false
            },
            {
                "input": "[38,40,42,0,0,0]\n3\n[39,41,43]\n3",
                "expected_output": "[38,39,40,41,42,43]",
                "is_sample": false
            },
            {
                "input": "[39,41,43,0,0,0]\n3\n[40,42,44]\n3",
                "expected_output": "[39,40,41,42,43,44]",
                "is_sample": false
            },
            {
                "input": "[40,42,44,0,0,0]\n3\n[41,43,45]\n3",
                "expected_output": "[40,41,42,43,44,45]",
                "is_sample": false
            },
            {
                "input": "[41,43,45,0,0,0]\n3\n[42,44,46]\n3",
                "expected_output": "[41,42,43,44,45,46]",
                "is_sample": false
            },
            {
                "input": "[42,44,46,0,0,0]\n3\n[43,45,47]\n3",
                "expected_output": "[42,43,44,45,46,47]",
                "is_sample": false
            },
            {
                "input": "[43,45,47,0,0,0]\n3\n[44,46,48]\n3",
                "expected_output": "[43,44,45,46,47,48]",
                "is_sample": false
            },
            {
                "input": "[44,46,48,0,0,0]\n3\n[45,47,49]\n3",
                "expected_output": "[44,45,46,47,48,49]",
                "is_sample": false
            },
            {
                "input": "[45,47,49,0,0,0]\n3\n[46,48,50]\n3",
                "expected_output": "[45,46,47,48,49,50]",
                "is_sample": false
            },
            {
                "input": "[46,48,50,0,0,0]\n3\n[47,49,51]\n3",
                "expected_output": "[46,47,48,49,50,51]",
                "is_sample": false
            },
            {
                "input": "[47,49,51,0,0,0]\n3\n[48,50,52]\n3",
                "expected_output": "[47,48,49,50,51,52]",
                "is_sample": false
            },
            {
                "input": "[48,50,52,0,0,0]\n3\n[49,51,53]\n3",
                "expected_output": "[48,49,50,51,52,53]",
                "is_sample": false
            },
            {
                "input": "[49,51,53,0,0,0]\n3\n[50,52,54]\n3",
                "expected_output": "[49,50,51,52,53,54]",
                "is_sample": false
            },
            {
                "input": "[50,52,54,0,0,0]\n3\n[51,53,55]\n3",
                "expected_output": "[50,51,52,53,54,55]",
                "is_sample": false
            }
        ]
    },
    {
        "question_number": 4,
        "title": "Best Time to Buy and Sell Stock",
        "level": "Easy",
        "tags": [
            "Array",
            "Dynamic Programming"
        ],
        "description": "You are given an array prices where prices[i] is the price of a given stock on the ith day.\n\nYou want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.\n\nReturn the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.",
        "constraints": "1 <= prices.length <= 10^5\n0 <= prices[i] <= 10^4",
        "starter": "class Solution {\n    public int maxProfit(int[] prices) {\n        // Write your code here\n        return 0;\n    }\n}",
        "driver": {
            "key": "intArrayToInt",
            "method": "maxProfit"
        },
        "testcases": [
            {
                "input": "[7,1,5,3,6,4]",
                "expected_output": "5",
                "is_sample": true
            },
            {
                "input": "[7,6,4,3,1]",
                "expected_output": "0",
                "is_sample": true
            },
            {
                "input": "[3,1,4,2,5]",
                "expected_output": "4",
                "is_sample": false
            },
            {
                "input": "[6,2,8,4,10]",
                "expected_output": "8",
                "is_sample": false
            },
            {
                "input": "[9,3,12,6,15]",
                "expected_output": "12",
                "is_sample": false
            },
            {
                "input": "[12,4,16,8,20]",
                "expected_output": "16",
                "is_sample": false
            },
            {
                "input": "[15,5,20,10,25]",
                "expected_output": "20",
                "is_sample": false
            },
            {
                "input": "[18,6,24,12,30]",
                "expected_output": "24",
                "is_sample": false
            },
            {
                "input": "[21,7,28,14,35]",
                "expected_output": "28",
                "is_sample": false
            },
            {
                "input": "[24,8,32,16,40]",
                "expected_output": "32",
                "is_sample": false
            },
            {
                "input": "[27,9,36,18,45]",
                "expected_output": "36",
                "is_sample": false
            },
            {
                "input": "[30,10,40,20,50]",
                "expected_output": "40",
                "is_sample": false
            },
            {
                "input": "[33,11,44,22,55]",
                "expected_output": "44",
                "is_sample": false
            },
            {
                "input": "[36,12,48,24,60]",
                "expected_output": "48",
                "is_sample": false
            },
            {
                "input": "[39,13,52,26,65]",
                "expected_output": "52",
                "is_sample": false
            },
            {
                "input": "[42,14,56,28,70]",
                "expected_output": "56",
                "is_sample": false
            },
            {
                "input": "[45,15,60,30,75]",
                "expected_output": "60",
                "is_sample": false
            },
            {
                "input": "[48,16,64,32,80]",
                "expected_output": "64",
                "is_sample": false
            },
            {
                "input": "[51,17,68,34,85]",
                "expected_output": "68",
                "is_sample": false
            },
            {
                "input": "[54,18,72,36,90]",
                "expected_output": "72",
                "is_sample": false
            },
            {
                "input": "[57,19,76,38,95]",
                "expected_output": "76",
                "is_sample": false
            },
            {
                "input": "[60,20,80,40,100]",
                "expected_output": "80",
                "is_sample": false
            },
            {
                "input": "[63,21,84,42,105]",
                "expected_output": "84",
                "is_sample": false
            },
            {
                "input": "[66,22,88,44,110]",
                "expected_output": "88",
                "is_sample": false
            },
            {
                "input": "[69,23,92,46,115]",
                "expected_output": "92",
                "is_sample": false
            },
            {
                "input": "[72,24,96,48,120]",
                "expected_output": "96",
                "is_sample": false
            },
            {
                "input": "[75,25,100,50,125]",
                "expected_output": "100",
                "is_sample": false
            },
            {
                "input": "[78,26,104,52,130]",
                "expected_output": "104",
                "is_sample": false
            },
            {
                "input": "[81,27,108,54,135]",
                "expected_output": "108",
                "is_sample": false
            },
            {
                "input": "[84,28,112,56,140]",
                "expected_output": "112",
                "is_sample": false
            },
            {
                "input": "[87,29,116,58,145]",
                "expected_output": "116",
                "is_sample": false
            },
            {
                "input": "[90,30,120,60,150]",
                "expected_output": "120",
                "is_sample": false
            },
            {
                "input": "[93,31,124,62,155]",
                "expected_output": "124",
                "is_sample": false
            },
            {
                "input": "[96,32,128,64,160]",
                "expected_output": "128",
                "is_sample": false
            },
            {
                "input": "[99,33,132,66,165]",
                "expected_output": "132",
                "is_sample": false
            },
            {
                "input": "[102,34,136,68,170]",
                "expected_output": "136",
                "is_sample": false
            },
            {
                "input": "[105,35,140,70,175]",
                "expected_output": "140",
                "is_sample": false
            },
            {
                "input": "[108,36,144,72,180]",
                "expected_output": "144",
                "is_sample": false
            },
            {
                "input": "[111,37,148,74,185]",
                "expected_output": "148",
                "is_sample": false
            },
            {
                "input": "[114,38,152,76,190]",
                "expected_output": "152",
                "is_sample": false
            },
            {
                "input": "[117,39,156,78,195]",
                "expected_output": "156",
                "is_sample": false
            },
            {
                "input": "[120,40,160,80,200]",
                "expected_output": "160",
                "is_sample": false
            },
            {
                "input": "[123,41,164,82,205]",
                "expected_output": "164",
                "is_sample": false
            },
            {
                "input": "[126,42,168,84,210]",
                "expected_output": "168",
                "is_sample": false
            },
            {
                "input": "[129,43,172,86,215]",
                "expected_output": "172",
                "is_sample": false
            },
            {
                "input": "[132,44,176,88,220]",
                "expected_output": "176",
                "is_sample": false
            },
            {
                "input": "[135,45,180,90,225]",
                "expected_output": "180",
                "is_sample": false
            },
            {
                "input": "[138,46,184,92,230]",
                "expected_output": "184",
                "is_sample": false
            },
            {
                "input": "[141,47,188,94,235]",
                "expected_output": "188",
                "is_sample": false
            },
            {
                "input": "[144,48,192,96,240]",
                "expected_output": "192",
                "is_sample": false
            },
            {
                "input": "[147,49,196,98,245]",
                "expected_output": "196",
                "is_sample": false
            },
            {
                "input": "[150,50,200,100,250]",
                "expected_output": "200",
                "is_sample": false
            }
        ]
    },
    {
        "question_number": 5,
        "title": "Valid Palindrome",
        "level": "Easy",
        "tags": [
            "Two Pointers",
            "String"
        ],
        "description": "A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.\n\nGiven a string s, return true if it is a palindrome, or false otherwise.",
        "constraints": "1 <= s.length <= 2 * 10^5\ns consists only of printable ASCII characters.",
        "starter": "class Solution {\n    public boolean isPalindrome(String s) {\n        // Write your code here\n        return false;\n    }\n}",
        "driver": {
            "key": "stringToBoolean",
            "method": "isPalindrome"
        },
        "testcases": [
            {
                "input": "A man, a plan, a canal: Panama",
                "expected_output": "true",
                "is_sample": true
            },
            {
                "input": "race a car",
                "expected_output": "false",
                "is_sample": true
            },
            {
                "input": " ",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "No, racecar!",
                "expected_output": "false",
                "is_sample": false
            },
            {
                "input": "levelxyz",
                "expected_output": "false",
                "is_sample": false
            },
            {
                "input": "No, noon!",
                "expected_output": "false",
                "is_sample": false
            },
            {
                "input": "deifiedxyz",
                "expected_output": "false",
                "is_sample": false
            },
            {
                "input": "No, rotator!",
                "expected_output": "false",
                "is_sample": false
            },
            {
                "input": "repaperxyz",
                "expected_output": "false",
                "is_sample": false
            },
            {
                "input": "No, deed!",
                "expected_output": "false",
                "is_sample": false
            },
            {
                "input": "peepxyz",
                "expected_output": "false",
                "is_sample": false
            },
            {
                "input": "No, wow!",
                "expected_output": "false",
                "is_sample": false
            },
            {
                "input": "radarxyz",
                "expected_output": "false",
                "is_sample": false
            },
            {
                "input": "No, racecar!",
                "expected_output": "false",
                "is_sample": false
            },
            {
                "input": "levelxyz",
                "expected_output": "false",
                "is_sample": false
            },
            {
                "input": "No, noon!",
                "expected_output": "false",
                "is_sample": false
            },
            {
                "input": "deifiedxyz",
                "expected_output": "false",
                "is_sample": false
            },
            {
                "input": "No, rotator!",
                "expected_output": "false",
                "is_sample": false
            },
            {
                "input": "repaperxyz",
                "expected_output": "false",
                "is_sample": false
            },
            {
                "input": "No, deed!",
                "expected_output": "false",
                "is_sample": false
            },
            {
                "input": "peepxyz",
                "expected_output": "false",
                "is_sample": false
            },
            {
                "input": "No, wow!",
                "expected_output": "false",
                "is_sample": false
            },
            {
                "input": "radarxyz",
                "expected_output": "false",
                "is_sample": false
            },
            {
                "input": "No, racecar!",
                "expected_output": "false",
                "is_sample": false
            },
            {
                "input": "levelxyz",
                "expected_output": "false",
                "is_sample": false
            },
            {
                "input": "No, noon!",
                "expected_output": "false",
                "is_sample": false
            },
            {
                "input": "deifiedxyz",
                "expected_output": "false",
                "is_sample": false
            },
            {
                "input": "No, rotator!",
                "expected_output": "false",
                "is_sample": false
            },
            {
                "input": "repaperxyz",
                "expected_output": "false",
                "is_sample": false
            },
            {
                "input": "No, deed!",
                "expected_output": "false",
                "is_sample": false
            },
            {
                "input": "peepxyz",
                "expected_output": "false",
                "is_sample": false
            },
            {
                "input": "No, wow!",
                "expected_output": "false",
                "is_sample": false
            },
            {
                "input": "radarxyz",
                "expected_output": "false",
                "is_sample": false
            },
            {
                "input": "No, racecar!",
                "expected_output": "false",
                "is_sample": false
            },
            {
                "input": "levelxyz",
                "expected_output": "false",
                "is_sample": false
            },
            {
                "input": "No, noon!",
                "expected_output": "false",
                "is_sample": false
            },
            {
                "input": "deifiedxyz",
                "expected_output": "false",
                "is_sample": false
            },
            {
                "input": "No, rotator!",
                "expected_output": "false",
                "is_sample": false
            },
            {
                "input": "repaperxyz",
                "expected_output": "false",
                "is_sample": false
            },
            {
                "input": "No, deed!",
                "expected_output": "false",
                "is_sample": false
            },
            {
                "input": "peepxyz",
                "expected_output": "false",
                "is_sample": false
            },
            {
                "input": "No, wow!",
                "expected_output": "false",
                "is_sample": false
            },
            {
                "input": "radarxyz",
                "expected_output": "false",
                "is_sample": false
            },
            {
                "input": "No, racecar!",
                "expected_output": "false",
                "is_sample": false
            },
            {
                "input": "levelxyz",
                "expected_output": "false",
                "is_sample": false
            },
            {
                "input": "No, noon!",
                "expected_output": "false",
                "is_sample": false
            },
            {
                "input": "deifiedxyz",
                "expected_output": "false",
                "is_sample": false
            },
            {
                "input": "No, rotator!",
                "expected_output": "false",
                "is_sample": false
            },
            {
                "input": "repaperxyz",
                "expected_output": "false",
                "is_sample": false
            },
            {
                "input": "No, deed!",
                "expected_output": "false",
                "is_sample": false
            },
            {
                "input": "peepxyz",
                "expected_output": "false",
                "is_sample": false
            },
            {
                "input": "No, wow!",
                "expected_output": "false",
                "is_sample": false
            },
            {
                "input": "radarxyz",
                "expected_output": "false",
                "is_sample": false
            }
        ]
    },
    {
        "question_number": 6,
        "title": "Single Number",
        "level": "Easy",
        "tags": [
            "Array",
            "Bit Manipulation"
        ],
        "description": "Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.\n\nYou must implement a solution with a linear runtime complexity and use only constant extra space.",
        "constraints": "1 <= nums.length <= 3 * 10^4\n-3 * 10^4 <= nums[i] <= 3 * 10^4\nEach element in the array appears twice except for one element which appears only once.",
        "starter": "class Solution {\n    public int singleNumber(int[] nums) {\n        // Write your code here\n        return 0;\n    }\n}",
        "driver": {
            "key": "intArrayToInt",
            "method": "singleNumber"
        },
        "testcases": [
            {
                "input": "[2,2,1]",
                "expected_output": "1",
                "is_sample": true
            },
            {
                "input": "[4,1,2,1,2]",
                "expected_output": "4",
                "is_sample": true
            },
            {
                "input": "[1]",
                "expected_output": "1",
                "is_sample": false
            },
            {
                "input": "[1,1,2,2,17,3,3]",
                "expected_output": "17",
                "is_sample": false
            },
            {
                "input": "[2,2,3,3,27,4,4]",
                "expected_output": "27",
                "is_sample": false
            },
            {
                "input": "[3,3,4,4,37,5,5]",
                "expected_output": "37",
                "is_sample": false
            },
            {
                "input": "[4,4,5,5,47,6,6]",
                "expected_output": "47",
                "is_sample": false
            },
            {
                "input": "[5,5,6,6,57,7,7]",
                "expected_output": "57",
                "is_sample": false
            },
            {
                "input": "[6,6,7,7,67,8,8]",
                "expected_output": "67",
                "is_sample": false
            },
            {
                "input": "[7,7,8,8,77,9,9]",
                "expected_output": "77",
                "is_sample": false
            },
            {
                "input": "[8,8,9,9,87,10,10]",
                "expected_output": "87",
                "is_sample": false
            },
            {
                "input": "[9,9,10,10,97,11,11]",
                "expected_output": "97",
                "is_sample": false
            },
            {
                "input": "[10,10,11,11,107,12,12]",
                "expected_output": "107",
                "is_sample": false
            },
            {
                "input": "[11,11,12,12,117,13,13]",
                "expected_output": "117",
                "is_sample": false
            },
            {
                "input": "[12,12,13,13,127,14,14]",
                "expected_output": "127",
                "is_sample": false
            },
            {
                "input": "[13,13,14,14,137,15,15]",
                "expected_output": "137",
                "is_sample": false
            },
            {
                "input": "[14,14,15,15,147,16,16]",
                "expected_output": "147",
                "is_sample": false
            },
            {
                "input": "[15,15,16,16,157,17,17]",
                "expected_output": "157",
                "is_sample": false
            },
            {
                "input": "[16,16,17,17,167,18,18]",
                "expected_output": "167",
                "is_sample": false
            },
            {
                "input": "[17,17,18,18,177,19,19]",
                "expected_output": "177",
                "is_sample": false
            },
            {
                "input": "[18,18,19,19,187,20,20]",
                "expected_output": "187",
                "is_sample": false
            },
            {
                "input": "[19,19,20,20,197,21,21]",
                "expected_output": "197",
                "is_sample": false
            },
            {
                "input": "[20,20,21,21,207,22,22]",
                "expected_output": "207",
                "is_sample": false
            },
            {
                "input": "[21,21,22,22,217,23,23]",
                "expected_output": "217",
                "is_sample": false
            },
            {
                "input": "[22,22,23,23,227,24,24]",
                "expected_output": "227",
                "is_sample": false
            },
            {
                "input": "[23,23,24,24,237,25,25]",
                "expected_output": "237",
                "is_sample": false
            },
            {
                "input": "[24,24,25,25,247,26,26]",
                "expected_output": "247",
                "is_sample": false
            },
            {
                "input": "[25,25,26,26,257,27,27]",
                "expected_output": "257",
                "is_sample": false
            },
            {
                "input": "[26,26,27,27,267,28,28]",
                "expected_output": "267",
                "is_sample": false
            },
            {
                "input": "[27,27,28,28,277,29,29]",
                "expected_output": "277",
                "is_sample": false
            },
            {
                "input": "[28,28,29,29,287,30,30]",
                "expected_output": "287",
                "is_sample": false
            },
            {
                "input": "[29,29,30,30,297,31,31]",
                "expected_output": "297",
                "is_sample": false
            },
            {
                "input": "[30,30,31,31,307,32,32]",
                "expected_output": "307",
                "is_sample": false
            },
            {
                "input": "[31,31,32,32,317,33,33]",
                "expected_output": "317",
                "is_sample": false
            },
            {
                "input": "[32,32,33,33,327,34,34]",
                "expected_output": "327",
                "is_sample": false
            },
            {
                "input": "[33,33,34,34,337,35,35]",
                "expected_output": "337",
                "is_sample": false
            },
            {
                "input": "[34,34,35,35,347,36,36]",
                "expected_output": "347",
                "is_sample": false
            },
            {
                "input": "[35,35,36,36,357,37,37]",
                "expected_output": "357",
                "is_sample": false
            },
            {
                "input": "[36,36,37,37,367,38,38]",
                "expected_output": "367",
                "is_sample": false
            },
            {
                "input": "[37,37,38,38,377,39,39]",
                "expected_output": "377",
                "is_sample": false
            },
            {
                "input": "[38,38,39,39,387,40,40]",
                "expected_output": "387",
                "is_sample": false
            },
            {
                "input": "[39,39,40,40,397,41,41]",
                "expected_output": "397",
                "is_sample": false
            },
            {
                "input": "[40,40,41,41,407,42,42]",
                "expected_output": "407",
                "is_sample": false
            },
            {
                "input": "[41,41,42,42,417,43,43]",
                "expected_output": "417",
                "is_sample": false
            },
            {
                "input": "[42,42,43,43,427,44,44]",
                "expected_output": "427",
                "is_sample": false
            },
            {
                "input": "[43,43,44,44,437,45,45]",
                "expected_output": "437",
                "is_sample": false
            },
            {
                "input": "[44,44,45,45,447,46,46]",
                "expected_output": "447",
                "is_sample": false
            },
            {
                "input": "[45,45,46,46,457,47,47]",
                "expected_output": "457",
                "is_sample": false
            },
            {
                "input": "[46,46,47,47,467,48,48]",
                "expected_output": "467",
                "is_sample": false
            },
            {
                "input": "[47,47,48,48,477,49,49]",
                "expected_output": "477",
                "is_sample": false
            },
            {
                "input": "[48,48,49,49,487,50,50]",
                "expected_output": "487",
                "is_sample": false
            },
            {
                "input": "[49,49,50,50,497,51,51]",
                "expected_output": "497",
                "is_sample": false
            },
            {
                "input": "[50,50,51,51,507,52,52]",
                "expected_output": "507",
                "is_sample": false
            }
        ]
    },
    {
        "question_number": 7,
        "title": "Majority Element",
        "level": "Easy",
        "tags": [
            "Array",
            "Hash Table",
            "Divide and Conquer",
            "Counting"
        ],
        "description": "Given an array nums of size n, return the majority element.\n\nThe majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.",
        "constraints": "n == nums.length\n1 <= n <= 5 * 10^4\n-10^9 <= nums[i] <= 10^9",
        "starter": "class Solution {\n    public int majorityElement(int[] nums) {\n        // Write your code here\n        return 0;\n    }\n}",
        "driver": {
            "key": "intArrayToInt",
            "method": "majorityElement"
        },
        "testcases": [
            {
                "input": "[3,2,3]",
                "expected_output": "3",
                "is_sample": true
            },
            {
                "input": "[2,2,1,1,1,2,2]",
                "expected_output": "2",
                "is_sample": true
            },
            {
                "input": "[5,5,2,5,3,5,5]",
                "expected_output": "5",
                "is_sample": false
            },
            {
                "input": "[10,10,3,10,4,10,10]",
                "expected_output": "10",
                "is_sample": false
            },
            {
                "input": "[15,15,4,15,5,15,15]",
                "expected_output": "15",
                "is_sample": false
            },
            {
                "input": "[20,20,5,20,6,20,20]",
                "expected_output": "20",
                "is_sample": false
            },
            {
                "input": "[25,25,6,25,7,25,25]",
                "expected_output": "25",
                "is_sample": false
            },
            {
                "input": "[30,30,7,30,8,30,30]",
                "expected_output": "30",
                "is_sample": false
            },
            {
                "input": "[35,35,8,35,9,35,35]",
                "expected_output": "35",
                "is_sample": false
            },
            {
                "input": "[40,40,9,40,10,40,40]",
                "expected_output": "40",
                "is_sample": false
            },
            {
                "input": "[45,45,10,45,11,45,45]",
                "expected_output": "45",
                "is_sample": false
            },
            {
                "input": "[50,50,11,50,12,50,50]",
                "expected_output": "50",
                "is_sample": false
            },
            {
                "input": "[55,55,12,55,13,55,55]",
                "expected_output": "55",
                "is_sample": false
            },
            {
                "input": "[60,60,13,60,14,60,60]",
                "expected_output": "60",
                "is_sample": false
            },
            {
                "input": "[65,65,14,65,15,65,65]",
                "expected_output": "65",
                "is_sample": false
            },
            {
                "input": "[70,70,15,70,16,70,70]",
                "expected_output": "70",
                "is_sample": false
            },
            {
                "input": "[75,75,16,75,17,75,75]",
                "expected_output": "75",
                "is_sample": false
            },
            {
                "input": "[80,80,17,80,18,80,80]",
                "expected_output": "80",
                "is_sample": false
            },
            {
                "input": "[85,85,18,85,19,85,85]",
                "expected_output": "85",
                "is_sample": false
            },
            {
                "input": "[90,90,19,90,20,90,90]",
                "expected_output": "90",
                "is_sample": false
            },
            {
                "input": "[95,95,20,95,21,95,95]",
                "expected_output": "95",
                "is_sample": false
            },
            {
                "input": "[100,100,21,100,22,100,100]",
                "expected_output": "100",
                "is_sample": false
            },
            {
                "input": "[105,105,22,105,23,105,105]",
                "expected_output": "105",
                "is_sample": false
            },
            {
                "input": "[110,110,23,110,24,110,110]",
                "expected_output": "110",
                "is_sample": false
            },
            {
                "input": "[115,115,24,115,25,115,115]",
                "expected_output": "115",
                "is_sample": false
            },
            {
                "input": "[120,120,25,120,26,120,120]",
                "expected_output": "120",
                "is_sample": false
            },
            {
                "input": "[125,125,26,125,27,125,125]",
                "expected_output": "125",
                "is_sample": false
            },
            {
                "input": "[130,130,27,130,28,130,130]",
                "expected_output": "130",
                "is_sample": false
            },
            {
                "input": "[135,135,28,135,29,135,135]",
                "expected_output": "135",
                "is_sample": false
            },
            {
                "input": "[140,140,29,140,30,140,140]",
                "expected_output": "140",
                "is_sample": false
            },
            {
                "input": "[145,145,30,145,31,145,145]",
                "expected_output": "145",
                "is_sample": false
            },
            {
                "input": "[150,150,31,150,32,150,150]",
                "expected_output": "150",
                "is_sample": false
            },
            {
                "input": "[155,155,32,155,33,155,155]",
                "expected_output": "155",
                "is_sample": false
            },
            {
                "input": "[160,160,33,160,34,160,160]",
                "expected_output": "160",
                "is_sample": false
            },
            {
                "input": "[165,165,34,165,35,165,165]",
                "expected_output": "165",
                "is_sample": false
            },
            {
                "input": "[170,170,35,170,36,170,170]",
                "expected_output": "170",
                "is_sample": false
            },
            {
                "input": "[175,175,36,175,37,175,175]",
                "expected_output": "175",
                "is_sample": false
            },
            {
                "input": "[180,180,37,180,38,180,180]",
                "expected_output": "180",
                "is_sample": false
            },
            {
                "input": "[185,185,38,185,39,185,185]",
                "expected_output": "185",
                "is_sample": false
            },
            {
                "input": "[190,190,39,190,40,190,190]",
                "expected_output": "190",
                "is_sample": false
            },
            {
                "input": "[195,195,40,195,41,195,195]",
                "expected_output": "195",
                "is_sample": false
            },
            {
                "input": "[200,200,41,200,42,200,200]",
                "expected_output": "200",
                "is_sample": false
            },
            {
                "input": "[205,205,42,205,43,205,205]",
                "expected_output": "205",
                "is_sample": false
            },
            {
                "input": "[210,210,43,210,44,210,210]",
                "expected_output": "210",
                "is_sample": false
            },
            {
                "input": "[215,215,44,215,45,215,215]",
                "expected_output": "215",
                "is_sample": false
            },
            {
                "input": "[220,220,45,220,46,220,220]",
                "expected_output": "220",
                "is_sample": false
            },
            {
                "input": "[225,225,46,225,47,225,225]",
                "expected_output": "225",
                "is_sample": false
            },
            {
                "input": "[230,230,47,230,48,230,230]",
                "expected_output": "230",
                "is_sample": false
            },
            {
                "input": "[235,235,48,235,49,235,235]",
                "expected_output": "235",
                "is_sample": false
            },
            {
                "input": "[240,240,49,240,50,240,240]",
                "expected_output": "240",
                "is_sample": false
            },
            {
                "input": "[245,245,50,245,51,245,245]",
                "expected_output": "245",
                "is_sample": false
            },
            {
                "input": "[250,250,51,250,52,250,250]",
                "expected_output": "250",
                "is_sample": false
            }
        ]
    },
    {
        "question_number": 8,
        "title": "Contains Duplicate",
        "level": "Easy",
        "tags": [
            "Array",
            "Hash Table",
            "Sorting"
        ],
        "description": "Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.",
        "constraints": "1 <= nums.length <= 10^5\n-10^9 <= nums[i] <= 10^9",
        "starter": "class Solution {\n    public boolean containsDuplicate(int[] nums) {\n        // Write your code here\n        return false;\n    }\n}",
        "driver": {
            "key": "intArrayToBoolean",
            "method": "containsDuplicate"
        },
        "testcases": [
            {
                "input": "[1,2,3,1]",
                "expected_output": "true",
                "is_sample": true
            },
            {
                "input": "[1,2,3,4]",
                "expected_output": "false",
                "is_sample": true
            },
            {
                "input": "[1,1,1,3,3,4,3,2,4,2]",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "[1,2,3,4]",
                "expected_output": "false",
                "is_sample": false
            },
            {
                "input": "[2,3,4,2]",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "[3,4,5,6]",
                "expected_output": "false",
                "is_sample": false
            },
            {
                "input": "[4,5,6,4]",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "[5,6,7,8]",
                "expected_output": "false",
                "is_sample": false
            },
            {
                "input": "[6,7,8,6]",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "[7,8,9,10]",
                "expected_output": "false",
                "is_sample": false
            },
            {
                "input": "[8,9,10,8]",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "[9,10,11,12]",
                "expected_output": "false",
                "is_sample": false
            },
            {
                "input": "[10,11,12,10]",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "[11,12,13,14]",
                "expected_output": "false",
                "is_sample": false
            },
            {
                "input": "[12,13,14,12]",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "[13,14,15,16]",
                "expected_output": "false",
                "is_sample": false
            },
            {
                "input": "[14,15,16,14]",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "[15,16,17,18]",
                "expected_output": "false",
                "is_sample": false
            },
            {
                "input": "[16,17,18,16]",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "[17,18,19,20]",
                "expected_output": "false",
                "is_sample": false
            },
            {
                "input": "[18,19,20,18]",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "[19,20,21,22]",
                "expected_output": "false",
                "is_sample": false
            },
            {
                "input": "[20,21,22,20]",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "[21,22,23,24]",
                "expected_output": "false",
                "is_sample": false
            },
            {
                "input": "[22,23,24,22]",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "[23,24,25,26]",
                "expected_output": "false",
                "is_sample": false
            },
            {
                "input": "[24,25,26,24]",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "[25,26,27,28]",
                "expected_output": "false",
                "is_sample": false
            },
            {
                "input": "[26,27,28,26]",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "[27,28,29,30]",
                "expected_output": "false",
                "is_sample": false
            },
            {
                "input": "[28,29,30,28]",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "[29,30,31,32]",
                "expected_output": "false",
                "is_sample": false
            },
            {
                "input": "[30,31,32,30]",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "[31,32,33,34]",
                "expected_output": "false",
                "is_sample": false
            },
            {
                "input": "[32,33,34,32]",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "[33,34,35,36]",
                "expected_output": "false",
                "is_sample": false
            },
            {
                "input": "[34,35,36,34]",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "[35,36,37,38]",
                "expected_output": "false",
                "is_sample": false
            },
            {
                "input": "[36,37,38,36]",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "[37,38,39,40]",
                "expected_output": "false",
                "is_sample": false
            },
            {
                "input": "[38,39,40,38]",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "[39,40,41,42]",
                "expected_output": "false",
                "is_sample": false
            },
            {
                "input": "[40,41,42,40]",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "[41,42,43,44]",
                "expected_output": "false",
                "is_sample": false
            },
            {
                "input": "[42,43,44,42]",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "[43,44,45,46]",
                "expected_output": "false",
                "is_sample": false
            },
            {
                "input": "[44,45,46,44]",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "[45,46,47,48]",
                "expected_output": "false",
                "is_sample": false
            },
            {
                "input": "[46,47,48,46]",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "[47,48,49,50]",
                "expected_output": "false",
                "is_sample": false
            },
            {
                "input": "[48,49,50,48]",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "[49,50,51,52]",
                "expected_output": "false",
                "is_sample": false
            },
            {
                "input": "[50,51,52,50]",
                "expected_output": "true",
                "is_sample": false
            }
        ]
    },
    {
        "question_number": 9,
        "title": "Missing Number",
        "level": "Easy",
        "tags": [
            "Array",
            "Hash Table",
            "Math",
            "Binary Search",
            "Bit Manipulation"
        ],
        "description": "Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.",
        "constraints": "n == nums.length\n1 <= n <= 10^4\n0 <= nums[i] <= n\nAll the numbers of nums are unique.",
        "starter": "class Solution {\n    public int missingNumber(int[] nums) {\n        // Write your code here\n        return 0;\n    }\n}",
        "driver": {
            "key": "intArrayToInt",
            "method": "missingNumber"
        },
        "testcases": [
            {
                "input": "[3,0,1]",
                "expected_output": "2",
                "is_sample": true
            },
            {
                "input": "[0,1]",
                "expected_output": "2",
                "is_sample": true
            },
            {
                "input": "[9,6,4,2,3,5,7,0,1]",
                "expected_output": "8",
                "is_sample": false
            },
            {
                "input": "[0,1,2]",
                "expected_output": "3",
                "is_sample": false
            },
            {
                "input": "[0,1,2,3]",
                "expected_output": "4",
                "is_sample": false
            },
            {
                "input": "[0,1,2,3,4]",
                "expected_output": "5",
                "is_sample": false
            },
            {
                "input": "[0,1,2,3,4,5]",
                "expected_output": "6",
                "is_sample": false
            },
            {
                "input": "[0,1,2,3,4,5,6]",
                "expected_output": "7",
                "is_sample": false
            },
            {
                "input": "[0,1,2,3,4,5,6,7]",
                "expected_output": "8",
                "is_sample": false
            },
            {
                "input": "[0,1,2,3,4,5,6,7,8]",
                "expected_output": "9",
                "is_sample": false
            },
            {
                "input": "[0,1,2,3,4,5,6,7,8,9]",
                "expected_output": "10",
                "is_sample": false
            },
            {
                "input": "[0,1,2,3,4,5,6,7,8,9,10]",
                "expected_output": "11",
                "is_sample": false
            },
            {
                "input": "[0,1,2,3,4,5,6,7,8,9,10,11]",
                "expected_output": "12",
                "is_sample": false
            },
            {
                "input": "[0,1,2,3,4,5,6,7,8,9,10,11,12]",
                "expected_output": "13",
                "is_sample": false
            },
            {
                "input": "[0,1,2,3,4,5,6,7,8,9,10,11,12,13]",
                "expected_output": "14",
                "is_sample": false
            },
            {
                "input": "[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14]",
                "expected_output": "15",
                "is_sample": false
            },
            {
                "input": "[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]",
                "expected_output": "16",
                "is_sample": false
            },
            {
                "input": "[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]",
                "expected_output": "17",
                "is_sample": false
            },
            {
                "input": "[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17]",
                "expected_output": "18",
                "is_sample": false
            },
            {
                "input": "[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18]",
                "expected_output": "19",
                "is_sample": false
            },
            {
                "input": "[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]",
                "expected_output": "20",
                "is_sample": false
            },
            {
                "input": "[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]",
                "expected_output": "21",
                "is_sample": false
            },
            {
                "input": "[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21]",
                "expected_output": "22",
                "is_sample": false
            },
            {
                "input": "[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22]",
                "expected_output": "23",
                "is_sample": false
            },
            {
                "input": "[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23]",
                "expected_output": "24",
                "is_sample": false
            },
            {
                "input": "[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24]",
                "expected_output": "25",
                "is_sample": false
            },
            {
                "input": "[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25]",
                "expected_output": "26",
                "is_sample": false
            },
            {
                "input": "[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26]",
                "expected_output": "27",
                "is_sample": false
            },
            {
                "input": "[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27]",
                "expected_output": "28",
                "is_sample": false
            },
            {
                "input": "[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28]",
                "expected_output": "29",
                "is_sample": false
            },
            {
                "input": "[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29]",
                "expected_output": "30",
                "is_sample": false
            },
            {
                "input": "[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]",
                "expected_output": "31",
                "is_sample": false
            },
            {
                "input": "[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]",
                "expected_output": "32",
                "is_sample": false
            },
            {
                "input": "[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32]",
                "expected_output": "33",
                "is_sample": false
            },
            {
                "input": "[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33]",
                "expected_output": "34",
                "is_sample": false
            },
            {
                "input": "[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34]",
                "expected_output": "35",
                "is_sample": false
            },
            {
                "input": "[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35]",
                "expected_output": "36",
                "is_sample": false
            },
            {
                "input": "[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36]",
                "expected_output": "37",
                "is_sample": false
            },
            {
                "input": "[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37]",
                "expected_output": "38",
                "is_sample": false
            },
            {
                "input": "[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38]",
                "expected_output": "39",
                "is_sample": false
            },
            {
                "input": "[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39]",
                "expected_output": "40",
                "is_sample": false
            },
            {
                "input": "[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40]",
                "expected_output": "41",
                "is_sample": false
            },
            {
                "input": "[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41]",
                "expected_output": "42",
                "is_sample": false
            },
            {
                "input": "[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42]",
                "expected_output": "43",
                "is_sample": false
            },
            {
                "input": "[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43]",
                "expected_output": "44",
                "is_sample": false
            },
            {
                "input": "[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44]",
                "expected_output": "45",
                "is_sample": false
            },
            {
                "input": "[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45]",
                "expected_output": "46",
                "is_sample": false
            },
            {
                "input": "[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46]",
                "expected_output": "47",
                "is_sample": false
            },
            {
                "input": "[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47]",
                "expected_output": "48",
                "is_sample": false
            },
            {
                "input": "[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48]",
                "expected_output": "49",
                "is_sample": false
            },
            {
                "input": "[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49]",
                "expected_output": "50",
                "is_sample": false
            },
            {
                "input": "[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50]",
                "expected_output": "51",
                "is_sample": false
            },
            {
                "input": "[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51]",
                "expected_output": "52",
                "is_sample": false
            }
        ]
    },
    {
        "question_number": 10,
        "title": "Move Zeroes",
        "level": "Easy",
        "tags": [
            "Array",
            "Two Pointers"
        ],
        "description": "Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.\n\nNote that you must do this in-place without making a copy of the array.",
        "constraints": "1 <= nums.length <= 10^4\n-2^31 <= nums[i] <= 2^31 - 1",
        "starter": "class Solution {\n    public void moveZeroes(int[] nums) {\n        // Write your code here (modify nums in-place)\n    }\n}",
        "driver": {
            "key": "intArrayInPlace",
            "method": "moveZeroes"
        },
        "testcases": [
            {
                "input": "[0,1,0,3,12]",
                "expected_output": "[1,3,12,0,0]",
                "is_sample": true
            },
            {
                "input": "[0]",
                "expected_output": "[0]",
                "is_sample": true
            },
            {
                "input": "[0,1,0,2,3,0]",
                "expected_output": "[1,2,3,0,0,0]",
                "is_sample": false
            },
            {
                "input": "[0,2,0,3,4,0]",
                "expected_output": "[2,3,4,0,0,0]",
                "is_sample": false
            },
            {
                "input": "[0,3,0,4,5,0]",
                "expected_output": "[3,4,5,0,0,0]",
                "is_sample": false
            },
            {
                "input": "[0,4,0,5,6,0]",
                "expected_output": "[4,5,6,0,0,0]",
                "is_sample": false
            },
            {
                "input": "[0,5,0,6,7,0]",
                "expected_output": "[5,6,7,0,0,0]",
                "is_sample": false
            },
            {
                "input": "[0,6,0,7,8,0]",
                "expected_output": "[6,7,8,0,0,0]",
                "is_sample": false
            },
            {
                "input": "[0,7,0,8,9,0]",
                "expected_output": "[7,8,9,0,0,0]",
                "is_sample": false
            },
            {
                "input": "[0,8,0,9,10,0]",
                "expected_output": "[8,9,10,0,0,0]",
                "is_sample": false
            },
            {
                "input": "[0,9,0,10,11,0]",
                "expected_output": "[9,10,11,0,0,0]",
                "is_sample": false
            },
            {
                "input": "[0,10,0,11,12,0]",
                "expected_output": "[10,11,12,0,0,0]",
                "is_sample": false
            },
            {
                "input": "[0,11,0,12,13,0]",
                "expected_output": "[11,12,13,0,0,0]",
                "is_sample": false
            },
            {
                "input": "[0,12,0,13,14,0]",
                "expected_output": "[12,13,14,0,0,0]",
                "is_sample": false
            },
            {
                "input": "[0,13,0,14,15,0]",
                "expected_output": "[13,14,15,0,0,0]",
                "is_sample": false
            },
            {
                "input": "[0,14,0,15,16,0]",
                "expected_output": "[14,15,16,0,0,0]",
                "is_sample": false
            },
            {
                "input": "[0,15,0,16,17,0]",
                "expected_output": "[15,16,17,0,0,0]",
                "is_sample": false
            },
            {
                "input": "[0,16,0,17,18,0]",
                "expected_output": "[16,17,18,0,0,0]",
                "is_sample": false
            },
            {
                "input": "[0,17,0,18,19,0]",
                "expected_output": "[17,18,19,0,0,0]",
                "is_sample": false
            },
            {
                "input": "[0,18,0,19,20,0]",
                "expected_output": "[18,19,20,0,0,0]",
                "is_sample": false
            },
            {
                "input": "[0,19,0,20,21,0]",
                "expected_output": "[19,20,21,0,0,0]",
                "is_sample": false
            },
            {
                "input": "[0,20,0,21,22,0]",
                "expected_output": "[20,21,22,0,0,0]",
                "is_sample": false
            },
            {
                "input": "[0,21,0,22,23,0]",
                "expected_output": "[21,22,23,0,0,0]",
                "is_sample": false
            },
            {
                "input": "[0,22,0,23,24,0]",
                "expected_output": "[22,23,24,0,0,0]",
                "is_sample": false
            },
            {
                "input": "[0,23,0,24,25,0]",
                "expected_output": "[23,24,25,0,0,0]",
                "is_sample": false
            },
            {
                "input": "[0,24,0,25,26,0]",
                "expected_output": "[24,25,26,0,0,0]",
                "is_sample": false
            },
            {
                "input": "[0,25,0,26,27,0]",
                "expected_output": "[25,26,27,0,0,0]",
                "is_sample": false
            },
            {
                "input": "[0,26,0,27,28,0]",
                "expected_output": "[26,27,28,0,0,0]",
                "is_sample": false
            },
            {
                "input": "[0,27,0,28,29,0]",
                "expected_output": "[27,28,29,0,0,0]",
                "is_sample": false
            },
            {
                "input": "[0,28,0,29,30,0]",
                "expected_output": "[28,29,30,0,0,0]",
                "is_sample": false
            },
            {
                "input": "[0,29,0,30,31,0]",
                "expected_output": "[29,30,31,0,0,0]",
                "is_sample": false
            },
            {
                "input": "[0,30,0,31,32,0]",
                "expected_output": "[30,31,32,0,0,0]",
                "is_sample": false
            },
            {
                "input": "[0,31,0,32,33,0]",
                "expected_output": "[31,32,33,0,0,0]",
                "is_sample": false
            },
            {
                "input": "[0,32,0,33,34,0]",
                "expected_output": "[32,33,34,0,0,0]",
                "is_sample": false
            },
            {
                "input": "[0,33,0,34,35,0]",
                "expected_output": "[33,34,35,0,0,0]",
                "is_sample": false
            },
            {
                "input": "[0,34,0,35,36,0]",
                "expected_output": "[34,35,36,0,0,0]",
                "is_sample": false
            },
            {
                "input": "[0,35,0,36,37,0]",
                "expected_output": "[35,36,37,0,0,0]",
                "is_sample": false
            },
            {
                "input": "[0,36,0,37,38,0]",
                "expected_output": "[36,37,38,0,0,0]",
                "is_sample": false
            },
            {
                "input": "[0,37,0,38,39,0]",
                "expected_output": "[37,38,39,0,0,0]",
                "is_sample": false
            },
            {
                "input": "[0,38,0,39,40,0]",
                "expected_output": "[38,39,40,0,0,0]",
                "is_sample": false
            },
            {
                "input": "[0,39,0,40,41,0]",
                "expected_output": "[39,40,41,0,0,0]",
                "is_sample": false
            },
            {
                "input": "[0,40,0,41,42,0]",
                "expected_output": "[40,41,42,0,0,0]",
                "is_sample": false
            },
            {
                "input": "[0,41,0,42,43,0]",
                "expected_output": "[41,42,43,0,0,0]",
                "is_sample": false
            },
            {
                "input": "[0,42,0,43,44,0]",
                "expected_output": "[42,43,44,0,0,0]",
                "is_sample": false
            },
            {
                "input": "[0,43,0,44,45,0]",
                "expected_output": "[43,44,45,0,0,0]",
                "is_sample": false
            },
            {
                "input": "[0,44,0,45,46,0]",
                "expected_output": "[44,45,46,0,0,0]",
                "is_sample": false
            },
            {
                "input": "[0,45,0,46,47,0]",
                "expected_output": "[45,46,47,0,0,0]",
                "is_sample": false
            },
            {
                "input": "[0,46,0,47,48,0]",
                "expected_output": "[46,47,48,0,0,0]",
                "is_sample": false
            },
            {
                "input": "[0,47,0,48,49,0]",
                "expected_output": "[47,48,49,0,0,0]",
                "is_sample": false
            },
            {
                "input": "[0,48,0,49,50,0]",
                "expected_output": "[48,49,50,0,0,0]",
                "is_sample": false
            },
            {
                "input": "[0,49,0,50,51,0]",
                "expected_output": "[49,50,51,0,0,0]",
                "is_sample": false
            },
            {
                "input": "[0,50,0,51,52,0]",
                "expected_output": "[50,51,52,0,0,0]",
                "is_sample": false
            }
        ]
    },
    {
        "question_number": 11,
        "title": "Reverse String",
        "level": "Easy",
        "tags": [
            "Two Pointers",
            "String"
        ],
        "description": "Write a function that reverses a string. The input string is given as an array of characters s.\n\nYou must do this by modifying the input array in-place with O(1) extra memory.",
        "constraints": "1 <= s.length <= 10^5\ns[i] is a printable ASCII character.",
        "starter": "class Solution {\n    public void reverseString(char[] s) {\n        // Write your code here (modify s in-place)\n    }\n}",
        "driver": "charArrayInPlace",
        "testcases": [
            {
                "input": "[\"h\",\"e\",\"l\",\"l\",\"o\"]",
                "expected_output": "[\"o\",\"l\",\"l\",\"e\",\"h\"]",
                "is_sample": true
            },
            {
                "input": "[\"H\",\"a\",\"n\",\"n\",\"a\",\"h\"]",
                "expected_output": "[\"h\",\"a\",\"n\",\"n\",\"a\",\"H\"]",
                "is_sample": true
            },
            {
                "input": "[\"c\",\"o\",\"d\",\"e\",\"0\"]",
                "expected_output": "[\"0\",\"e\",\"d\",\"o\",\"c\"]",
                "is_sample": false
            },
            {
                "input": "[\"j\",\"a\",\"v\",\"a\",\"1\"]",
                "expected_output": "[\"1\",\"a\",\"v\",\"a\",\"j\"]",
                "is_sample": false
            },
            {
                "input": "[\"a\",\"l\",\"g\",\"o\",\"r\",\"i\",\"t\",\"h\",\"m\",\"2\"]",
                "expected_output": "[\"2\",\"m\",\"h\",\"t\",\"i\",\"r\",\"o\",\"g\",\"l\",\"a\"]",
                "is_sample": false
            },
            {
                "input": "[\"d\",\"e\",\"v\",\"e\",\"l\",\"o\",\"p\",\"e\",\"r\",\"3\"]",
                "expected_output": "[\"3\",\"r\",\"e\",\"p\",\"o\",\"l\",\"e\",\"v\",\"e\",\"d\"]",
                "is_sample": false
            },
            {
                "input": "[\"r\",\"e\",\"a\",\"c\",\"t\",\"4\"]",
                "expected_output": "[\"4\",\"t\",\"c\",\"a\",\"e\",\"r\"]",
                "is_sample": false
            },
            {
                "input": "[\"n\",\"o\",\"d\",\"e\",\"5\"]",
                "expected_output": "[\"5\",\"e\",\"d\",\"o\",\"n\"]",
                "is_sample": false
            },
            {
                "input": "[\"e\",\"x\",\"p\",\"r\",\"e\",\"s\",\"s\",\"6\"]",
                "expected_output": "[\"6\",\"s\",\"s\",\"e\",\"r\",\"p\",\"x\",\"e\"]",
                "is_sample": false
            },
            {
                "input": "[\"d\",\"a\",\"t\",\"a\",\"b\",\"a\",\"s\",\"e\",\"7\"]",
                "expected_output": "[\"7\",\"e\",\"s\",\"a\",\"b\",\"a\",\"t\",\"a\",\"d\"]",
                "is_sample": false
            },
            {
                "input": "[\"c\",\"o\",\"d\",\"e\",\"8\"]",
                "expected_output": "[\"8\",\"e\",\"d\",\"o\",\"c\"]",
                "is_sample": false
            },
            {
                "input": "[\"j\",\"a\",\"v\",\"a\",\"9\"]",
                "expected_output": "[\"9\",\"a\",\"v\",\"a\",\"j\"]",
                "is_sample": false
            },
            {
                "input": "[\"a\",\"l\",\"g\",\"o\",\"r\",\"i\",\"t\",\"h\",\"m\",\"1\",\"0\"]",
                "expected_output": "[\"0\",\"1\",\"m\",\"h\",\"t\",\"i\",\"r\",\"o\",\"g\",\"l\",\"a\"]",
                "is_sample": false
            },
            {
                "input": "[\"d\",\"e\",\"v\",\"e\",\"l\",\"o\",\"p\",\"e\",\"r\",\"1\",\"1\"]",
                "expected_output": "[\"1\",\"1\",\"r\",\"e\",\"p\",\"o\",\"l\",\"e\",\"v\",\"e\",\"d\"]",
                "is_sample": false
            },
            {
                "input": "[\"r\",\"e\",\"a\",\"c\",\"t\",\"1\",\"2\"]",
                "expected_output": "[\"2\",\"1\",\"t\",\"c\",\"a\",\"e\",\"r\"]",
                "is_sample": false
            },
            {
                "input": "[\"n\",\"o\",\"d\",\"e\",\"1\",\"3\"]",
                "expected_output": "[\"3\",\"1\",\"e\",\"d\",\"o\",\"n\"]",
                "is_sample": false
            },
            {
                "input": "[\"e\",\"x\",\"p\",\"r\",\"e\",\"s\",\"s\",\"1\",\"4\"]",
                "expected_output": "[\"4\",\"1\",\"s\",\"s\",\"e\",\"r\",\"p\",\"x\",\"e\"]",
                "is_sample": false
            },
            {
                "input": "[\"d\",\"a\",\"t\",\"a\",\"b\",\"a\",\"s\",\"e\",\"1\",\"5\"]",
                "expected_output": "[\"5\",\"1\",\"e\",\"s\",\"a\",\"b\",\"a\",\"t\",\"a\",\"d\"]",
                "is_sample": false
            },
            {
                "input": "[\"c\",\"o\",\"d\",\"e\",\"1\",\"6\"]",
                "expected_output": "[\"6\",\"1\",\"e\",\"d\",\"o\",\"c\"]",
                "is_sample": false
            },
            {
                "input": "[\"j\",\"a\",\"v\",\"a\",\"1\",\"7\"]",
                "expected_output": "[\"7\",\"1\",\"a\",\"v\",\"a\",\"j\"]",
                "is_sample": false
            },
            {
                "input": "[\"a\",\"l\",\"g\",\"o\",\"r\",\"i\",\"t\",\"h\",\"m\",\"1\",\"8\"]",
                "expected_output": "[\"8\",\"1\",\"m\",\"h\",\"t\",\"i\",\"r\",\"o\",\"g\",\"l\",\"a\"]",
                "is_sample": false
            },
            {
                "input": "[\"d\",\"e\",\"v\",\"e\",\"l\",\"o\",\"p\",\"e\",\"r\",\"1\",\"9\"]",
                "expected_output": "[\"9\",\"1\",\"r\",\"e\",\"p\",\"o\",\"l\",\"e\",\"v\",\"e\",\"d\"]",
                "is_sample": false
            },
            {
                "input": "[\"r\",\"e\",\"a\",\"c\",\"t\",\"2\",\"0\"]",
                "expected_output": "[\"0\",\"2\",\"t\",\"c\",\"a\",\"e\",\"r\"]",
                "is_sample": false
            },
            {
                "input": "[\"n\",\"o\",\"d\",\"e\",\"2\",\"1\"]",
                "expected_output": "[\"1\",\"2\",\"e\",\"d\",\"o\",\"n\"]",
                "is_sample": false
            },
            {
                "input": "[\"e\",\"x\",\"p\",\"r\",\"e\",\"s\",\"s\",\"2\",\"2\"]",
                "expected_output": "[\"2\",\"2\",\"s\",\"s\",\"e\",\"r\",\"p\",\"x\",\"e\"]",
                "is_sample": false
            },
            {
                "input": "[\"d\",\"a\",\"t\",\"a\",\"b\",\"a\",\"s\",\"e\",\"2\",\"3\"]",
                "expected_output": "[\"3\",\"2\",\"e\",\"s\",\"a\",\"b\",\"a\",\"t\",\"a\",\"d\"]",
                "is_sample": false
            },
            {
                "input": "[\"c\",\"o\",\"d\",\"e\",\"2\",\"4\"]",
                "expected_output": "[\"4\",\"2\",\"e\",\"d\",\"o\",\"c\"]",
                "is_sample": false
            },
            {
                "input": "[\"j\",\"a\",\"v\",\"a\",\"2\",\"5\"]",
                "expected_output": "[\"5\",\"2\",\"a\",\"v\",\"a\",\"j\"]",
                "is_sample": false
            },
            {
                "input": "[\"a\",\"l\",\"g\",\"o\",\"r\",\"i\",\"t\",\"h\",\"m\",\"2\",\"6\"]",
                "expected_output": "[\"6\",\"2\",\"m\",\"h\",\"t\",\"i\",\"r\",\"o\",\"g\",\"l\",\"a\"]",
                "is_sample": false
            },
            {
                "input": "[\"d\",\"e\",\"v\",\"e\",\"l\",\"o\",\"p\",\"e\",\"r\",\"2\",\"7\"]",
                "expected_output": "[\"7\",\"2\",\"r\",\"e\",\"p\",\"o\",\"l\",\"e\",\"v\",\"e\",\"d\"]",
                "is_sample": false
            },
            {
                "input": "[\"r\",\"e\",\"a\",\"c\",\"t\",\"2\",\"8\"]",
                "expected_output": "[\"8\",\"2\",\"t\",\"c\",\"a\",\"e\",\"r\"]",
                "is_sample": false
            },
            {
                "input": "[\"n\",\"o\",\"d\",\"e\",\"2\",\"9\"]",
                "expected_output": "[\"9\",\"2\",\"e\",\"d\",\"o\",\"n\"]",
                "is_sample": false
            },
            {
                "input": "[\"e\",\"x\",\"p\",\"r\",\"e\",\"s\",\"s\",\"3\",\"0\"]",
                "expected_output": "[\"0\",\"3\",\"s\",\"s\",\"e\",\"r\",\"p\",\"x\",\"e\"]",
                "is_sample": false
            },
            {
                "input": "[\"d\",\"a\",\"t\",\"a\",\"b\",\"a\",\"s\",\"e\",\"3\",\"1\"]",
                "expected_output": "[\"1\",\"3\",\"e\",\"s\",\"a\",\"b\",\"a\",\"t\",\"a\",\"d\"]",
                "is_sample": false
            },
            {
                "input": "[\"c\",\"o\",\"d\",\"e\",\"3\",\"2\"]",
                "expected_output": "[\"2\",\"3\",\"e\",\"d\",\"o\",\"c\"]",
                "is_sample": false
            },
            {
                "input": "[\"j\",\"a\",\"v\",\"a\",\"3\",\"3\"]",
                "expected_output": "[\"3\",\"3\",\"a\",\"v\",\"a\",\"j\"]",
                "is_sample": false
            },
            {
                "input": "[\"a\",\"l\",\"g\",\"o\",\"r\",\"i\",\"t\",\"h\",\"m\",\"3\",\"4\"]",
                "expected_output": "[\"4\",\"3\",\"m\",\"h\",\"t\",\"i\",\"r\",\"o\",\"g\",\"l\",\"a\"]",
                "is_sample": false
            },
            {
                "input": "[\"d\",\"e\",\"v\",\"e\",\"l\",\"o\",\"p\",\"e\",\"r\",\"3\",\"5\"]",
                "expected_output": "[\"5\",\"3\",\"r\",\"e\",\"p\",\"o\",\"l\",\"e\",\"v\",\"e\",\"d\"]",
                "is_sample": false
            },
            {
                "input": "[\"r\",\"e\",\"a\",\"c\",\"t\",\"3\",\"6\"]",
                "expected_output": "[\"6\",\"3\",\"t\",\"c\",\"a\",\"e\",\"r\"]",
                "is_sample": false
            },
            {
                "input": "[\"n\",\"o\",\"d\",\"e\",\"3\",\"7\"]",
                "expected_output": "[\"7\",\"3\",\"e\",\"d\",\"o\",\"n\"]",
                "is_sample": false
            },
            {
                "input": "[\"e\",\"x\",\"p\",\"r\",\"e\",\"s\",\"s\",\"3\",\"8\"]",
                "expected_output": "[\"8\",\"3\",\"s\",\"s\",\"e\",\"r\",\"p\",\"x\",\"e\"]",
                "is_sample": false
            },
            {
                "input": "[\"d\",\"a\",\"t\",\"a\",\"b\",\"a\",\"s\",\"e\",\"3\",\"9\"]",
                "expected_output": "[\"9\",\"3\",\"e\",\"s\",\"a\",\"b\",\"a\",\"t\",\"a\",\"d\"]",
                "is_sample": false
            },
            {
                "input": "[\"c\",\"o\",\"d\",\"e\",\"4\",\"0\"]",
                "expected_output": "[\"0\",\"4\",\"e\",\"d\",\"o\",\"c\"]",
                "is_sample": false
            },
            {
                "input": "[\"j\",\"a\",\"v\",\"a\",\"4\",\"1\"]",
                "expected_output": "[\"1\",\"4\",\"a\",\"v\",\"a\",\"j\"]",
                "is_sample": false
            },
            {
                "input": "[\"a\",\"l\",\"g\",\"o\",\"r\",\"i\",\"t\",\"h\",\"m\",\"4\",\"2\"]",
                "expected_output": "[\"2\",\"4\",\"m\",\"h\",\"t\",\"i\",\"r\",\"o\",\"g\",\"l\",\"a\"]",
                "is_sample": false
            },
            {
                "input": "[\"d\",\"e\",\"v\",\"e\",\"l\",\"o\",\"p\",\"e\",\"r\",\"4\",\"3\"]",
                "expected_output": "[\"3\",\"4\",\"r\",\"e\",\"p\",\"o\",\"l\",\"e\",\"v\",\"e\",\"d\"]",
                "is_sample": false
            },
            {
                "input": "[\"r\",\"e\",\"a\",\"c\",\"t\",\"4\",\"4\"]",
                "expected_output": "[\"4\",\"4\",\"t\",\"c\",\"a\",\"e\",\"r\"]",
                "is_sample": false
            },
            {
                "input": "[\"n\",\"o\",\"d\",\"e\",\"4\",\"5\"]",
                "expected_output": "[\"5\",\"4\",\"e\",\"d\",\"o\",\"n\"]",
                "is_sample": false
            },
            {
                "input": "[\"e\",\"x\",\"p\",\"r\",\"e\",\"s\",\"s\",\"4\",\"6\"]",
                "expected_output": "[\"6\",\"4\",\"s\",\"s\",\"e\",\"r\",\"p\",\"x\",\"e\"]",
                "is_sample": false
            },
            {
                "input": "[\"d\",\"a\",\"t\",\"a\",\"b\",\"a\",\"s\",\"e\",\"4\",\"7\"]",
                "expected_output": "[\"7\",\"4\",\"e\",\"s\",\"a\",\"b\",\"a\",\"t\",\"a\",\"d\"]",
                "is_sample": false
            },
            {
                "input": "[\"c\",\"o\",\"d\",\"e\",\"4\",\"8\"]",
                "expected_output": "[\"8\",\"4\",\"e\",\"d\",\"o\",\"c\"]",
                "is_sample": false
            },
            {
                "input": "[\"j\",\"a\",\"v\",\"a\",\"4\",\"9\"]",
                "expected_output": "[\"9\",\"4\",\"a\",\"v\",\"a\",\"j\"]",
                "is_sample": false
            }
        ]
    },
    {
        "question_number": 12,
        "title": "Valid Anagram",
        "level": "Easy",
        "tags": [
            "Hash Table",
            "String",
            "Sorting"
        ],
        "description": "Given two strings s and t, return true if t is an anagram of s, and false otherwise.\n\nAn Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.\n\nInput format (2 lines):\nLine 1: s\nLine 2: t",
        "constraints": "1 <= s.length, t.length <= 5 * 10^4\ns and t consist of lowercase English letters.",
        "starter": "class Solution {\n    public boolean isAnagram(String s, String t) {\n        // Write your code here\n        return false;\n    }\n}",
        "driver": {
            "key": "twoStringsToBoolean",
            "method": "isAnagram"
        },
        "testcases": [
            {
                "input": "anagram\nnagaram",
                "expected_output": "true",
                "is_sample": true
            },
            {
                "input": "rat\ncar",
                "expected_output": "false",
                "is_sample": true
            },
            {
                "input": "listen1\nsilenz1",
                "expected_output": "false",
                "is_sample": false
            },
            {
                "input": "listen2\nsilent2",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "listen3\nsilenz3",
                "expected_output": "false",
                "is_sample": false
            },
            {
                "input": "listen4\nsilent4",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "listen5\nsilenz5",
                "expected_output": "false",
                "is_sample": false
            },
            {
                "input": "listen6\nsilent6",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "listen7\nsilenz7",
                "expected_output": "false",
                "is_sample": false
            },
            {
                "input": "listen8\nsilent8",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "listen9\nsilenz9",
                "expected_output": "false",
                "is_sample": false
            },
            {
                "input": "listen10\nsilent10",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "listen11\nsilenz11",
                "expected_output": "false",
                "is_sample": false
            },
            {
                "input": "listen12\nsilent12",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "listen13\nsilenz13",
                "expected_output": "false",
                "is_sample": false
            },
            {
                "input": "listen14\nsilent14",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "listen15\nsilenz15",
                "expected_output": "false",
                "is_sample": false
            },
            {
                "input": "listen16\nsilent16",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "listen17\nsilenz17",
                "expected_output": "false",
                "is_sample": false
            },
            {
                "input": "listen18\nsilent18",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "listen19\nsilenz19",
                "expected_output": "false",
                "is_sample": false
            },
            {
                "input": "listen20\nsilent20",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "listen21\nsilenz21",
                "expected_output": "false",
                "is_sample": false
            },
            {
                "input": "listen22\nsilent22",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "listen23\nsilenz23",
                "expected_output": "false",
                "is_sample": false
            },
            {
                "input": "listen24\nsilent24",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "listen25\nsilenz25",
                "expected_output": "false",
                "is_sample": false
            },
            {
                "input": "listen26\nsilent26",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "listen27\nsilenz27",
                "expected_output": "false",
                "is_sample": false
            },
            {
                "input": "listen28\nsilent28",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "listen29\nsilenz29",
                "expected_output": "false",
                "is_sample": false
            },
            {
                "input": "listen30\nsilent30",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "listen31\nsilenz31",
                "expected_output": "false",
                "is_sample": false
            },
            {
                "input": "listen32\nsilent32",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "listen33\nsilenz33",
                "expected_output": "false",
                "is_sample": false
            },
            {
                "input": "listen34\nsilent34",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "listen35\nsilenz35",
                "expected_output": "false",
                "is_sample": false
            },
            {
                "input": "listen36\nsilent36",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "listen37\nsilenz37",
                "expected_output": "false",
                "is_sample": false
            },
            {
                "input": "listen38\nsilent38",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "listen39\nsilenz39",
                "expected_output": "false",
                "is_sample": false
            },
            {
                "input": "listen40\nsilent40",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "listen41\nsilenz41",
                "expected_output": "false",
                "is_sample": false
            },
            {
                "input": "listen42\nsilent42",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "listen43\nsilenz43",
                "expected_output": "false",
                "is_sample": false
            },
            {
                "input": "listen44\nsilent44",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "listen45\nsilenz45",
                "expected_output": "false",
                "is_sample": false
            },
            {
                "input": "listen46\nsilent46",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "listen47\nsilenz47",
                "expected_output": "false",
                "is_sample": false
            },
            {
                "input": "listen48\nsilent48",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "listen49\nsilenz49",
                "expected_output": "false",
                "is_sample": false
            },
            {
                "input": "listen50\nsilent50",
                "expected_output": "true",
                "is_sample": false
            }
        ]
    },
    {
        "question_number": 13,
        "title": "Sqrt(x)",
        "level": "Easy",
        "tags": [
            "Math",
            "Binary Search"
        ],
        "description": "Given a non-negative integer x, return the square root of x rounded down to the nearest integer. The returned integer should be non-negative as well.\n\nYou must not use any built-in exponent function or operator, such as pow(x, 0.5) or x ** 0.5.",
        "constraints": "0 <= x <= 2^31 - 1",
        "starter": "class Solution {\n    public int mySqrt(int x) {\n        // Write your code here\n        return 0;\n    }\n}",
        "driver": {
            "key": "intInIntOut",
            "method": "mySqrt"
        },
        "testcases": [
            {
                "input": "4",
                "expected_output": "2",
                "is_sample": true
            },
            {
                "input": "8",
                "expected_output": "2",
                "is_sample": true
            },
            {
                "input": "0",
                "expected_output": "0",
                "is_sample": false
            },
            {
                "input": "2",
                "expected_output": "1",
                "is_sample": false
            },
            {
                "input": "6",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "9",
                "expected_output": "3",
                "is_sample": false
            },
            {
                "input": "17",
                "expected_output": "4",
                "is_sample": false
            },
            {
                "input": "27",
                "expected_output": "5",
                "is_sample": false
            },
            {
                "input": "36",
                "expected_output": "6",
                "is_sample": false
            },
            {
                "input": "50",
                "expected_output": "7",
                "is_sample": false
            },
            {
                "input": "66",
                "expected_output": "8",
                "is_sample": false
            },
            {
                "input": "81",
                "expected_output": "9",
                "is_sample": false
            },
            {
                "input": "101",
                "expected_output": "10",
                "is_sample": false
            },
            {
                "input": "123",
                "expected_output": "11",
                "is_sample": false
            },
            {
                "input": "144",
                "expected_output": "12",
                "is_sample": false
            },
            {
                "input": "170",
                "expected_output": "13",
                "is_sample": false
            },
            {
                "input": "198",
                "expected_output": "14",
                "is_sample": false
            },
            {
                "input": "225",
                "expected_output": "15",
                "is_sample": false
            },
            {
                "input": "257",
                "expected_output": "16",
                "is_sample": false
            },
            {
                "input": "291",
                "expected_output": "17",
                "is_sample": false
            },
            {
                "input": "324",
                "expected_output": "18",
                "is_sample": false
            },
            {
                "input": "362",
                "expected_output": "19",
                "is_sample": false
            },
            {
                "input": "402",
                "expected_output": "20",
                "is_sample": false
            },
            {
                "input": "441",
                "expected_output": "21",
                "is_sample": false
            },
            {
                "input": "485",
                "expected_output": "22",
                "is_sample": false
            },
            {
                "input": "531",
                "expected_output": "23",
                "is_sample": false
            },
            {
                "input": "576",
                "expected_output": "24",
                "is_sample": false
            },
            {
                "input": "626",
                "expected_output": "25",
                "is_sample": false
            },
            {
                "input": "678",
                "expected_output": "26",
                "is_sample": false
            },
            {
                "input": "729",
                "expected_output": "27",
                "is_sample": false
            },
            {
                "input": "785",
                "expected_output": "28",
                "is_sample": false
            },
            {
                "input": "843",
                "expected_output": "29",
                "is_sample": false
            },
            {
                "input": "900",
                "expected_output": "30",
                "is_sample": false
            },
            {
                "input": "962",
                "expected_output": "31",
                "is_sample": false
            },
            {
                "input": "1026",
                "expected_output": "32",
                "is_sample": false
            },
            {
                "input": "1089",
                "expected_output": "33",
                "is_sample": false
            },
            {
                "input": "1157",
                "expected_output": "34",
                "is_sample": false
            },
            {
                "input": "1227",
                "expected_output": "35",
                "is_sample": false
            },
            {
                "input": "1296",
                "expected_output": "36",
                "is_sample": false
            },
            {
                "input": "1370",
                "expected_output": "37",
                "is_sample": false
            },
            {
                "input": "1446",
                "expected_output": "38",
                "is_sample": false
            },
            {
                "input": "1521",
                "expected_output": "39",
                "is_sample": false
            },
            {
                "input": "1601",
                "expected_output": "40",
                "is_sample": false
            },
            {
                "input": "1683",
                "expected_output": "41",
                "is_sample": false
            },
            {
                "input": "1764",
                "expected_output": "42",
                "is_sample": false
            },
            {
                "input": "1850",
                "expected_output": "43",
                "is_sample": false
            },
            {
                "input": "1938",
                "expected_output": "44",
                "is_sample": false
            },
            {
                "input": "2025",
                "expected_output": "45",
                "is_sample": false
            },
            {
                "input": "2117",
                "expected_output": "46",
                "is_sample": false
            },
            {
                "input": "2211",
                "expected_output": "47",
                "is_sample": false
            },
            {
                "input": "2304",
                "expected_output": "48",
                "is_sample": false
            },
            {
                "input": "2402",
                "expected_output": "49",
                "is_sample": false
            },
            {
                "input": "2502",
                "expected_output": "50",
                "is_sample": false
            }
        ]
    },
    {
        "question_number": 14,
        "title": "Climbing Stairs",
        "level": "Easy",
        "tags": [
            "Math",
            "Dynamic Programming",
            "Memoization"
        ],
        "description": "You are climbing a staircase. It takes n steps to reach the top.\n\nEach time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?",
        "constraints": "1 <= n <= 45",
        "starter": "class Solution {\n    public int climbStairs(int n) {\n        // Write your code here\n        return 0;\n    }\n}",
        "driver": {
            "key": "intInIntOut",
            "method": "climbStairs"
        },
        "testcases": [
            {
                "input": "2",
                "expected_output": "2",
                "is_sample": true
            },
            {
                "input": "3",
                "expected_output": "3",
                "is_sample": true
            },
            {
                "input": "1",
                "expected_output": "1",
                "is_sample": true
            },
            {
                "input": "2",
                "expected_output": "2",
                "is_sample": true
            },
            {
                "input": "3",
                "expected_output": "3",
                "is_sample": true
            },
            {
                "input": "4",
                "expected_output": "5",
                "is_sample": false
            },
            {
                "input": "5",
                "expected_output": "8",
                "is_sample": false
            },
            {
                "input": "6",
                "expected_output": "13",
                "is_sample": false
            },
            {
                "input": "7",
                "expected_output": "21",
                "is_sample": false
            },
            {
                "input": "8",
                "expected_output": "34",
                "is_sample": false
            },
            {
                "input": "9",
                "expected_output": "55",
                "is_sample": false
            },
            {
                "input": "10",
                "expected_output": "89",
                "is_sample": false
            },
            {
                "input": "11",
                "expected_output": "144",
                "is_sample": false
            },
            {
                "input": "12",
                "expected_output": "233",
                "is_sample": false
            },
            {
                "input": "13",
                "expected_output": "377",
                "is_sample": false
            },
            {
                "input": "14",
                "expected_output": "610",
                "is_sample": false
            },
            {
                "input": "15",
                "expected_output": "987",
                "is_sample": false
            },
            {
                "input": "16",
                "expected_output": "1597",
                "is_sample": false
            },
            {
                "input": "17",
                "expected_output": "2584",
                "is_sample": false
            },
            {
                "input": "18",
                "expected_output": "4181",
                "is_sample": false
            },
            {
                "input": "19",
                "expected_output": "6765",
                "is_sample": false
            },
            {
                "input": "20",
                "expected_output": "10946",
                "is_sample": false
            },
            {
                "input": "21",
                "expected_output": "17711",
                "is_sample": false
            },
            {
                "input": "22",
                "expected_output": "28657",
                "is_sample": false
            },
            {
                "input": "23",
                "expected_output": "46368",
                "is_sample": false
            },
            {
                "input": "24",
                "expected_output": "75025",
                "is_sample": false
            },
            {
                "input": "25",
                "expected_output": "121393",
                "is_sample": false
            },
            {
                "input": "26",
                "expected_output": "196418",
                "is_sample": false
            },
            {
                "input": "27",
                "expected_output": "317811",
                "is_sample": false
            },
            {
                "input": "28",
                "expected_output": "514229",
                "is_sample": false
            },
            {
                "input": "29",
                "expected_output": "832040",
                "is_sample": false
            },
            {
                "input": "30",
                "expected_output": "1346269",
                "is_sample": false
            },
            {
                "input": "31",
                "expected_output": "2178309",
                "is_sample": false
            },
            {
                "input": "32",
                "expected_output": "3524578",
                "is_sample": false
            },
            {
                "input": "33",
                "expected_output": "5702887",
                "is_sample": false
            },
            {
                "input": "34",
                "expected_output": "9227465",
                "is_sample": false
            },
            {
                "input": "35",
                "expected_output": "14930352",
                "is_sample": false
            },
            {
                "input": "36",
                "expected_output": "24157817",
                "is_sample": false
            },
            {
                "input": "37",
                "expected_output": "39088169",
                "is_sample": false
            },
            {
                "input": "38",
                "expected_output": "63245986",
                "is_sample": false
            },
            {
                "input": "39",
                "expected_output": "102334155",
                "is_sample": false
            },
            {
                "input": "40",
                "expected_output": "165580141",
                "is_sample": false
            },
            {
                "input": "41",
                "expected_output": "267914296",
                "is_sample": false
            },
            {
                "input": "42",
                "expected_output": "433494437",
                "is_sample": false
            },
            {
                "input": "43",
                "expected_output": "701408733",
                "is_sample": false
            },
            {
                "input": "44",
                "expected_output": "1134903170",
                "is_sample": false
            },
            {
                "input": "45",
                "expected_output": "1836311903",
                "is_sample": false
            },
            {
                "input": "1",
                "expected_output": "1",
                "is_sample": false
            },
            {
                "input": "2",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "3",
                "expected_output": "3",
                "is_sample": false
            },
            {
                "input": "4",
                "expected_output": "5",
                "is_sample": false
            },
            {
                "input": "5",
                "expected_output": "8",
                "is_sample": false
            },
            {
                "input": "6",
                "expected_output": "13",
                "is_sample": false
            },
            {
                "input": "7",
                "expected_output": "21",
                "is_sample": false
            },
            {
                "input": "8",
                "expected_output": "34",
                "is_sample": false
            },
            {
                "input": "9",
                "expected_output": "55",
                "is_sample": false
            },
            {
                "input": "10",
                "expected_output": "89",
                "is_sample": false
            }
        ]
    },
    {
        "question_number": 15,
        "title": "Roman to Integer",
        "level": "Easy",
        "tags": [
            "Hash Table",
            "Math",
            "String"
        ],
        "description": "Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.\n\nGiven a roman numeral, convert it to an integer.",
        "constraints": "1 <= s.length <= 15\ns contains only the characters ('I', 'V', 'X', 'L', 'C', 'D', 'M').",
        "starter": "class Solution {\n    public int romanToInt(String s) {\n        // Write your code here\n        return 0;\n    }\n}",
        "driver": {
            "key": "stringToInt",
            "method": "romanToInt"
        },
        "testcases": [
            {
                "input": "III",
                "expected_output": "3",
                "is_sample": true
            },
            {
                "input": "LVIII",
                "expected_output": "58",
                "is_sample": true
            },
            {
                "input": "MCMXCIV",
                "expected_output": "1994",
                "is_sample": true
            },
            {
                "input": "IV",
                "expected_output": "4",
                "is_sample": false
            },
            {
                "input": "IX",
                "expected_output": "9",
                "is_sample": false
            },
            {
                "input": "XL",
                "expected_output": "40",
                "is_sample": false
            },
            {
                "input": "XC",
                "expected_output": "90",
                "is_sample": false
            },
            {
                "input": "CD",
                "expected_output": "400",
                "is_sample": false
            },
            {
                "input": "CM",
                "expected_output": "900",
                "is_sample": false
            },
            {
                "input": "VI",
                "expected_output": "6",
                "is_sample": false
            },
            {
                "input": "VII",
                "expected_output": "7",
                "is_sample": false
            },
            {
                "input": "VIII",
                "expected_output": "8",
                "is_sample": false
            },
            {
                "input": "XI",
                "expected_output": "11",
                "is_sample": false
            },
            {
                "input": "XII",
                "expected_output": "12",
                "is_sample": false
            },
            {
                "input": "XIII",
                "expected_output": "13",
                "is_sample": false
            },
            {
                "input": "XIV",
                "expected_output": "14",
                "is_sample": false
            },
            {
                "input": "XV",
                "expected_output": "15",
                "is_sample": false
            },
            {
                "input": "XVI",
                "expected_output": "16",
                "is_sample": false
            },
            {
                "input": "XVII",
                "expected_output": "17",
                "is_sample": false
            },
            {
                "input": "XVIII",
                "expected_output": "18",
                "is_sample": false
            },
            {
                "input": "XIX",
                "expected_output": "19",
                "is_sample": false
            },
            {
                "input": "XX",
                "expected_output": "20",
                "is_sample": false
            },
            {
                "input": "XXI",
                "expected_output": "21",
                "is_sample": false
            },
            {
                "input": "XXV",
                "expected_output": "25",
                "is_sample": false
            },
            {
                "input": "XXIX",
                "expected_output": "29",
                "is_sample": false
            },
            {
                "input": "XXX",
                "expected_output": "30",
                "is_sample": false
            },
            {
                "input": "XLII",
                "expected_output": "42",
                "is_sample": false
            },
            {
                "input": "L",
                "expected_output": "50",
                "is_sample": false
            },
            {
                "input": "LX",
                "expected_output": "60",
                "is_sample": false
            },
            {
                "input": "LXX",
                "expected_output": "70",
                "is_sample": false
            },
            {
                "input": "LXXX",
                "expected_output": "80",
                "is_sample": false
            },
            {
                "input": "XC",
                "expected_output": "90",
                "is_sample": false
            },
            {
                "input": "C",
                "expected_output": "100",
                "is_sample": false
            },
            {
                "input": "CC",
                "expected_output": "200",
                "is_sample": false
            },
            {
                "input": "CCC",
                "expected_output": "300",
                "is_sample": false
            },
            {
                "input": "CD",
                "expected_output": "400",
                "is_sample": false
            },
            {
                "input": "D",
                "expected_output": "500",
                "is_sample": false
            },
            {
                "input": "DC",
                "expected_output": "600",
                "is_sample": false
            },
            {
                "input": "DCC",
                "expected_output": "700",
                "is_sample": false
            },
            {
                "input": "DCCC",
                "expected_output": "800",
                "is_sample": false
            },
            {
                "input": "CM",
                "expected_output": "900",
                "is_sample": false
            },
            {
                "input": "M",
                "expected_output": "1000",
                "is_sample": false
            },
            {
                "input": "MC",
                "expected_output": "1100",
                "is_sample": false
            },
            {
                "input": "MD",
                "expected_output": "1500",
                "is_sample": false
            },
            {
                "input": "MM",
                "expected_output": "2000",
                "is_sample": false
            },
            {
                "input": "MMM",
                "expected_output": "3000",
                "is_sample": false
            },
            {
                "input": "MMMDCCCLXXXVIII",
                "expected_output": "3888",
                "is_sample": false
            },
            {
                "input": "XXVII",
                "expected_output": "27",
                "is_sample": false
            },
            {
                "input": "LIV",
                "expected_output": "54",
                "is_sample": false
            },
            {
                "input": "XCIX",
                "expected_output": "99",
                "is_sample": false
            },
            {
                "input": "CXLIV",
                "expected_output": "144",
                "is_sample": false
            }
        ]
    },
    {
        "question_number": 16,
        "title": "Longest Common Prefix",
        "level": "Easy",
        "tags": [
            "String",
            "Trie"
        ],
        "description": "Write a function to find the longest common prefix string amongst an array of strings.\n\nIf there is no common prefix, return an empty string \"\".",
        "constraints": "1 <= strs.length <= 200\n0 <= strs[i].length <= 200\nstrs[i] consists of only lowercase English letters.",
        "starter": "class Solution {\n    public String longestCommonPrefix(String[] strs) {\n        // Write your code here\n        return \"\";\n    }\n}",
        "driver": {
            "key": "stringArrayToString",
            "method": "longestCommonPrefix"
        },
        "testcases": [
            {
                "input": "[\"flower\",\"flow\",\"flight\"]",
                "expected_output": "fl",
                "is_sample": true
            },
            {
                "input": "[\"dog\",\"racecar\",\"car\"]",
                "expected_output": "",
                "is_sample": true
            },
            {
                "input": "[\"pre1fix\",\"pre1view\",\"pre1test\"]",
                "expected_output": "pre1",
                "is_sample": false
            },
            {
                "input": "[\"pre2fix\",\"pre2view\",\"pre2test\"]",
                "expected_output": "pre2",
                "is_sample": false
            },
            {
                "input": "[\"pre3fix\",\"pre3view\",\"pre3test\"]",
                "expected_output": "pre3",
                "is_sample": false
            },
            {
                "input": "[\"pre4fix\",\"pre4view\",\"pre4test\"]",
                "expected_output": "pre4",
                "is_sample": false
            },
            {
                "input": "[\"pre5fix\",\"pre5view\",\"pre5test\"]",
                "expected_output": "pre5",
                "is_sample": false
            },
            {
                "input": "[\"pre6fix\",\"pre6view\",\"pre6test\"]",
                "expected_output": "pre6",
                "is_sample": false
            },
            {
                "input": "[\"pre7fix\",\"pre7view\",\"pre7test\"]",
                "expected_output": "pre7",
                "is_sample": false
            },
            {
                "input": "[\"pre8fix\",\"pre8view\",\"pre8test\"]",
                "expected_output": "pre8",
                "is_sample": false
            },
            {
                "input": "[\"pre9fix\",\"pre9view\",\"pre9test\"]",
                "expected_output": "pre9",
                "is_sample": false
            },
            {
                "input": "[\"pre10fix\",\"pre10view\",\"pre10test\"]",
                "expected_output": "pre10",
                "is_sample": false
            },
            {
                "input": "[\"pre11fix\",\"pre11view\",\"pre11test\"]",
                "expected_output": "pre11",
                "is_sample": false
            },
            {
                "input": "[\"pre12fix\",\"pre12view\",\"pre12test\"]",
                "expected_output": "pre12",
                "is_sample": false
            },
            {
                "input": "[\"pre13fix\",\"pre13view\",\"pre13test\"]",
                "expected_output": "pre13",
                "is_sample": false
            },
            {
                "input": "[\"pre14fix\",\"pre14view\",\"pre14test\"]",
                "expected_output": "pre14",
                "is_sample": false
            },
            {
                "input": "[\"pre15fix\",\"pre15view\",\"pre15test\"]",
                "expected_output": "pre15",
                "is_sample": false
            },
            {
                "input": "[\"pre16fix\",\"pre16view\",\"pre16test\"]",
                "expected_output": "pre16",
                "is_sample": false
            },
            {
                "input": "[\"pre17fix\",\"pre17view\",\"pre17test\"]",
                "expected_output": "pre17",
                "is_sample": false
            },
            {
                "input": "[\"pre18fix\",\"pre18view\",\"pre18test\"]",
                "expected_output": "pre18",
                "is_sample": false
            },
            {
                "input": "[\"pre19fix\",\"pre19view\",\"pre19test\"]",
                "expected_output": "pre19",
                "is_sample": false
            },
            {
                "input": "[\"pre20fix\",\"pre20view\",\"pre20test\"]",
                "expected_output": "pre20",
                "is_sample": false
            },
            {
                "input": "[\"pre21fix\",\"pre21view\",\"pre21test\"]",
                "expected_output": "pre21",
                "is_sample": false
            },
            {
                "input": "[\"pre22fix\",\"pre22view\",\"pre22test\"]",
                "expected_output": "pre22",
                "is_sample": false
            },
            {
                "input": "[\"pre23fix\",\"pre23view\",\"pre23test\"]",
                "expected_output": "pre23",
                "is_sample": false
            },
            {
                "input": "[\"pre24fix\",\"pre24view\",\"pre24test\"]",
                "expected_output": "pre24",
                "is_sample": false
            },
            {
                "input": "[\"pre25fix\",\"pre25view\",\"pre25test\"]",
                "expected_output": "pre25",
                "is_sample": false
            },
            {
                "input": "[\"pre26fix\",\"pre26view\",\"pre26test\"]",
                "expected_output": "pre26",
                "is_sample": false
            },
            {
                "input": "[\"pre27fix\",\"pre27view\",\"pre27test\"]",
                "expected_output": "pre27",
                "is_sample": false
            },
            {
                "input": "[\"pre28fix\",\"pre28view\",\"pre28test\"]",
                "expected_output": "pre28",
                "is_sample": false
            },
            {
                "input": "[\"pre29fix\",\"pre29view\",\"pre29test\"]",
                "expected_output": "pre29",
                "is_sample": false
            },
            {
                "input": "[\"pre30fix\",\"pre30view\",\"pre30test\"]",
                "expected_output": "pre30",
                "is_sample": false
            },
            {
                "input": "[\"pre31fix\",\"pre31view\",\"pre31test\"]",
                "expected_output": "pre31",
                "is_sample": false
            },
            {
                "input": "[\"pre32fix\",\"pre32view\",\"pre32test\"]",
                "expected_output": "pre32",
                "is_sample": false
            },
            {
                "input": "[\"pre33fix\",\"pre33view\",\"pre33test\"]",
                "expected_output": "pre33",
                "is_sample": false
            },
            {
                "input": "[\"pre34fix\",\"pre34view\",\"pre34test\"]",
                "expected_output": "pre34",
                "is_sample": false
            },
            {
                "input": "[\"pre35fix\",\"pre35view\",\"pre35test\"]",
                "expected_output": "pre35",
                "is_sample": false
            },
            {
                "input": "[\"pre36fix\",\"pre36view\",\"pre36test\"]",
                "expected_output": "pre36",
                "is_sample": false
            },
            {
                "input": "[\"pre37fix\",\"pre37view\",\"pre37test\"]",
                "expected_output": "pre37",
                "is_sample": false
            },
            {
                "input": "[\"pre38fix\",\"pre38view\",\"pre38test\"]",
                "expected_output": "pre38",
                "is_sample": false
            },
            {
                "input": "[\"pre39fix\",\"pre39view\",\"pre39test\"]",
                "expected_output": "pre39",
                "is_sample": false
            },
            {
                "input": "[\"pre40fix\",\"pre40view\",\"pre40test\"]",
                "expected_output": "pre40",
                "is_sample": false
            },
            {
                "input": "[\"pre41fix\",\"pre41view\",\"pre41test\"]",
                "expected_output": "pre41",
                "is_sample": false
            },
            {
                "input": "[\"pre42fix\",\"pre42view\",\"pre42test\"]",
                "expected_output": "pre42",
                "is_sample": false
            },
            {
                "input": "[\"pre43fix\",\"pre43view\",\"pre43test\"]",
                "expected_output": "pre43",
                "is_sample": false
            },
            {
                "input": "[\"pre44fix\",\"pre44view\",\"pre44test\"]",
                "expected_output": "pre44",
                "is_sample": false
            },
            {
                "input": "[\"pre45fix\",\"pre45view\",\"pre45test\"]",
                "expected_output": "pre45",
                "is_sample": false
            },
            {
                "input": "[\"pre46fix\",\"pre46view\",\"pre46test\"]",
                "expected_output": "pre46",
                "is_sample": false
            },
            {
                "input": "[\"pre47fix\",\"pre47view\",\"pre47test\"]",
                "expected_output": "pre47",
                "is_sample": false
            },
            {
                "input": "[\"pre48fix\",\"pre48view\",\"pre48test\"]",
                "expected_output": "pre48",
                "is_sample": false
            },
            {
                "input": "[\"pre49fix\",\"pre49view\",\"pre49test\"]",
                "expected_output": "pre49",
                "is_sample": false
            },
            {
                "input": "[\"pre50fix\",\"pre50view\",\"pre50test\"]",
                "expected_output": "pre50",
                "is_sample": false
            }
        ]
    },
    {
        "question_number": 17,
        "title": "Baseball Game",
        "level": "Easy",
        "tags": [
            "Array",
            "Stack",
            "Simulation"
        ],
        "description": "You are keeping score for a baseball game with strange rules. The game consists of several rounds, where the scores of past rounds may affect future rounds' scores.\n\nReturn the sum of all the scores on the record after applying all the operations.",
        "constraints": "1 <= ops.length <= 1000\nops[i] is \"C\", \"D\", \"+\", or a string representing an integer in the range [-3 * 10^4, 3 * 10^4].",
        "starter": "class Solution {\n    public int calPoints(String[] operations) {\n        // Write your code here\n        return 0;\n    }\n}",
        "driver": "stringOpsArray",
        "testcases": [
            {
                "input": "[\"5\",\"2\",\"C\",\"D\",\"+\"]",
                "expected_output": "30",
                "is_sample": true
            },
            {
                "input": "[\"5\",\"-2\",\"4\",\"C\",\"D\",\"9\",\"+\",\"+\"]",
                "expected_output": "27",
                "is_sample": true
            },
            {
                "input": "[\"1\",\"3\",\"D\",\"+\",\"6\"]",
                "expected_output": "25",
                "is_sample": false
            },
            {
                "input": "[\"2\",\"4\",\"D\",\"+\",\"7\"]",
                "expected_output": "33",
                "is_sample": false
            },
            {
                "input": "[\"3\",\"5\",\"D\",\"+\",\"8\"]",
                "expected_output": "41",
                "is_sample": false
            },
            {
                "input": "[\"4\",\"6\",\"D\",\"+\",\"9\"]",
                "expected_output": "49",
                "is_sample": false
            },
            {
                "input": "[\"5\",\"7\",\"D\",\"+\",\"10\"]",
                "expected_output": "57",
                "is_sample": false
            },
            {
                "input": "[\"6\",\"8\",\"D\",\"+\",\"11\"]",
                "expected_output": "65",
                "is_sample": false
            },
            {
                "input": "[\"7\",\"9\",\"D\",\"+\",\"12\"]",
                "expected_output": "73",
                "is_sample": false
            },
            {
                "input": "[\"8\",\"10\",\"D\",\"+\",\"13\"]",
                "expected_output": "81",
                "is_sample": false
            },
            {
                "input": "[\"9\",\"11\",\"D\",\"+\",\"14\"]",
                "expected_output": "89",
                "is_sample": false
            },
            {
                "input": "[\"10\",\"12\",\"D\",\"+\",\"15\"]",
                "expected_output": "97",
                "is_sample": false
            },
            {
                "input": "[\"11\",\"13\",\"D\",\"+\",\"16\"]",
                "expected_output": "105",
                "is_sample": false
            },
            {
                "input": "[\"12\",\"14\",\"D\",\"+\",\"17\"]",
                "expected_output": "113",
                "is_sample": false
            },
            {
                "input": "[\"13\",\"15\",\"D\",\"+\",\"18\"]",
                "expected_output": "121",
                "is_sample": false
            },
            {
                "input": "[\"14\",\"16\",\"D\",\"+\",\"19\"]",
                "expected_output": "129",
                "is_sample": false
            },
            {
                "input": "[\"15\",\"17\",\"D\",\"+\",\"20\"]",
                "expected_output": "137",
                "is_sample": false
            },
            {
                "input": "[\"16\",\"18\",\"D\",\"+\",\"21\"]",
                "expected_output": "145",
                "is_sample": false
            },
            {
                "input": "[\"17\",\"19\",\"D\",\"+\",\"22\"]",
                "expected_output": "153",
                "is_sample": false
            },
            {
                "input": "[\"18\",\"20\",\"D\",\"+\",\"23\"]",
                "expected_output": "161",
                "is_sample": false
            },
            {
                "input": "[\"19\",\"21\",\"D\",\"+\",\"24\"]",
                "expected_output": "169",
                "is_sample": false
            },
            {
                "input": "[\"20\",\"22\",\"D\",\"+\",\"25\"]",
                "expected_output": "177",
                "is_sample": false
            },
            {
                "input": "[\"21\",\"23\",\"D\",\"+\",\"26\"]",
                "expected_output": "185",
                "is_sample": false
            },
            {
                "input": "[\"22\",\"24\",\"D\",\"+\",\"27\"]",
                "expected_output": "193",
                "is_sample": false
            },
            {
                "input": "[\"23\",\"25\",\"D\",\"+\",\"28\"]",
                "expected_output": "201",
                "is_sample": false
            },
            {
                "input": "[\"24\",\"26\",\"D\",\"+\",\"29\"]",
                "expected_output": "209",
                "is_sample": false
            },
            {
                "input": "[\"25\",\"27\",\"D\",\"+\",\"30\"]",
                "expected_output": "217",
                "is_sample": false
            },
            {
                "input": "[\"26\",\"28\",\"D\",\"+\",\"31\"]",
                "expected_output": "225",
                "is_sample": false
            },
            {
                "input": "[\"27\",\"29\",\"D\",\"+\",\"32\"]",
                "expected_output": "233",
                "is_sample": false
            },
            {
                "input": "[\"28\",\"30\",\"D\",\"+\",\"33\"]",
                "expected_output": "241",
                "is_sample": false
            },
            {
                "input": "[\"29\",\"31\",\"D\",\"+\",\"34\"]",
                "expected_output": "249",
                "is_sample": false
            },
            {
                "input": "[\"30\",\"32\",\"D\",\"+\",\"35\"]",
                "expected_output": "257",
                "is_sample": false
            },
            {
                "input": "[\"31\",\"33\",\"D\",\"+\",\"36\"]",
                "expected_output": "265",
                "is_sample": false
            },
            {
                "input": "[\"32\",\"34\",\"D\",\"+\",\"37\"]",
                "expected_output": "273",
                "is_sample": false
            },
            {
                "input": "[\"33\",\"35\",\"D\",\"+\",\"38\"]",
                "expected_output": "281",
                "is_sample": false
            },
            {
                "input": "[\"34\",\"36\",\"D\",\"+\",\"39\"]",
                "expected_output": "289",
                "is_sample": false
            },
            {
                "input": "[\"35\",\"37\",\"D\",\"+\",\"40\"]",
                "expected_output": "297",
                "is_sample": false
            },
            {
                "input": "[\"36\",\"38\",\"D\",\"+\",\"41\"]",
                "expected_output": "305",
                "is_sample": false
            },
            {
                "input": "[\"37\",\"39\",\"D\",\"+\",\"42\"]",
                "expected_output": "313",
                "is_sample": false
            },
            {
                "input": "[\"38\",\"40\",\"D\",\"+\",\"43\"]",
                "expected_output": "321",
                "is_sample": false
            },
            {
                "input": "[\"39\",\"41\",\"D\",\"+\",\"44\"]",
                "expected_output": "329",
                "is_sample": false
            },
            {
                "input": "[\"40\",\"42\",\"D\",\"+\",\"45\"]",
                "expected_output": "337",
                "is_sample": false
            },
            {
                "input": "[\"41\",\"43\",\"D\",\"+\",\"46\"]",
                "expected_output": "345",
                "is_sample": false
            },
            {
                "input": "[\"42\",\"44\",\"D\",\"+\",\"47\"]",
                "expected_output": "353",
                "is_sample": false
            },
            {
                "input": "[\"43\",\"45\",\"D\",\"+\",\"48\"]",
                "expected_output": "361",
                "is_sample": false
            },
            {
                "input": "[\"44\",\"46\",\"D\",\"+\",\"49\"]",
                "expected_output": "369",
                "is_sample": false
            },
            {
                "input": "[\"45\",\"47\",\"D\",\"+\",\"50\"]",
                "expected_output": "377",
                "is_sample": false
            },
            {
                "input": "[\"46\",\"48\",\"D\",\"+\",\"51\"]",
                "expected_output": "385",
                "is_sample": false
            },
            {
                "input": "[\"47\",\"49\",\"D\",\"+\",\"52\"]",
                "expected_output": "393",
                "is_sample": false
            },
            {
                "input": "[\"48\",\"50\",\"D\",\"+\",\"53\"]",
                "expected_output": "401",
                "is_sample": false
            },
            {
                "input": "[\"49\",\"51\",\"D\",\"+\",\"54\"]",
                "expected_output": "409",
                "is_sample": false
            },
            {
                "input": "[\"50\",\"52\",\"D\",\"+\",\"55\"]",
                "expected_output": "417",
                "is_sample": false
            }
        ]
    },
    {
        "question_number": 18,
        "title": "Remove Element",
        "level": "Easy",
        "tags": [
            "Array",
            "Two Pointers"
        ],
        "description": "Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. The order of the elements may be changed. Then return the number of elements in nums which are not equal to val.\n\nInput format (2 lines):\nLine 1: nums as JSON array\nLine 2: val",
        "constraints": "0 <= nums.length <= 100\n0 <= nums[i] <= 50\n0 <= val <= 100",
        "starter": "class Solution {\n    public int removeElement(int[] nums, int val) {\n        // Write your code here (modify nums in-place and return k)\n        return 0;\n    }\n}",
        "driver": {
            "key": "intArrayAndValInPlace",
            "method": "removeElement"
        },
        "testcases": [
            {
                "input": "[3,2,2,3]\n3",
                "expected_output": "[2,2]",
                "is_sample": true
            },
            {
                "input": "[0,1,2,2,3,0,4,2]\n2",
                "expected_output": "[0,1,3,0,4]",
                "is_sample": true
            },
            {
                "input": "[1,2,1,3,1]\n1",
                "expected_output": "[2,3]",
                "is_sample": false
            },
            {
                "input": "[2,3,2,4,2]\n2",
                "expected_output": "[3,4]",
                "is_sample": false
            },
            {
                "input": "[3,4,3,5,3]\n3",
                "expected_output": "[4,5]",
                "is_sample": false
            },
            {
                "input": "[4,5,4,6,4]\n4",
                "expected_output": "[5,6]",
                "is_sample": false
            },
            {
                "input": "[5,6,5,7,5]\n5",
                "expected_output": "[6,7]",
                "is_sample": false
            },
            {
                "input": "[6,7,6,8,6]\n6",
                "expected_output": "[7,8]",
                "is_sample": false
            },
            {
                "input": "[7,8,7,9,7]\n7",
                "expected_output": "[8,9]",
                "is_sample": false
            },
            {
                "input": "[8,9,8,10,8]\n8",
                "expected_output": "[9,10]",
                "is_sample": false
            },
            {
                "input": "[9,10,9,11,9]\n9",
                "expected_output": "[10,11]",
                "is_sample": false
            },
            {
                "input": "[10,11,10,12,10]\n10",
                "expected_output": "[11,12]",
                "is_sample": false
            },
            {
                "input": "[11,12,11,13,11]\n11",
                "expected_output": "[12,13]",
                "is_sample": false
            },
            {
                "input": "[12,13,12,14,12]\n12",
                "expected_output": "[13,14]",
                "is_sample": false
            },
            {
                "input": "[13,14,13,15,13]\n13",
                "expected_output": "[14,15]",
                "is_sample": false
            },
            {
                "input": "[14,15,14,16,14]\n14",
                "expected_output": "[15,16]",
                "is_sample": false
            },
            {
                "input": "[15,16,15,17,15]\n15",
                "expected_output": "[16,17]",
                "is_sample": false
            },
            {
                "input": "[16,17,16,18,16]\n16",
                "expected_output": "[17,18]",
                "is_sample": false
            },
            {
                "input": "[17,18,17,19,17]\n17",
                "expected_output": "[18,19]",
                "is_sample": false
            },
            {
                "input": "[18,19,18,20,18]\n18",
                "expected_output": "[19,20]",
                "is_sample": false
            },
            {
                "input": "[19,20,19,21,19]\n19",
                "expected_output": "[20,21]",
                "is_sample": false
            },
            {
                "input": "[20,21,20,22,20]\n20",
                "expected_output": "[21,22]",
                "is_sample": false
            },
            {
                "input": "[21,22,21,23,21]\n21",
                "expected_output": "[22,23]",
                "is_sample": false
            },
            {
                "input": "[22,23,22,24,22]\n22",
                "expected_output": "[23,24]",
                "is_sample": false
            },
            {
                "input": "[23,24,23,25,23]\n23",
                "expected_output": "[24,25]",
                "is_sample": false
            },
            {
                "input": "[24,25,24,26,24]\n24",
                "expected_output": "[25,26]",
                "is_sample": false
            },
            {
                "input": "[25,26,25,27,25]\n25",
                "expected_output": "[26,27]",
                "is_sample": false
            },
            {
                "input": "[26,27,26,28,26]\n26",
                "expected_output": "[27,28]",
                "is_sample": false
            },
            {
                "input": "[27,28,27,29,27]\n27",
                "expected_output": "[28,29]",
                "is_sample": false
            },
            {
                "input": "[28,29,28,30,28]\n28",
                "expected_output": "[29,30]",
                "is_sample": false
            },
            {
                "input": "[29,30,29,31,29]\n29",
                "expected_output": "[30,31]",
                "is_sample": false
            },
            {
                "input": "[30,31,30,32,30]\n30",
                "expected_output": "[31,32]",
                "is_sample": false
            },
            {
                "input": "[31,32,31,33,31]\n31",
                "expected_output": "[32,33]",
                "is_sample": false
            },
            {
                "input": "[32,33,32,34,32]\n32",
                "expected_output": "[33,34]",
                "is_sample": false
            },
            {
                "input": "[33,34,33,35,33]\n33",
                "expected_output": "[34,35]",
                "is_sample": false
            },
            {
                "input": "[34,35,34,36,34]\n34",
                "expected_output": "[35,36]",
                "is_sample": false
            },
            {
                "input": "[35,36,35,37,35]\n35",
                "expected_output": "[36,37]",
                "is_sample": false
            },
            {
                "input": "[36,37,36,38,36]\n36",
                "expected_output": "[37,38]",
                "is_sample": false
            },
            {
                "input": "[37,38,37,39,37]\n37",
                "expected_output": "[38,39]",
                "is_sample": false
            },
            {
                "input": "[38,39,38,40,38]\n38",
                "expected_output": "[39,40]",
                "is_sample": false
            },
            {
                "input": "[39,40,39,41,39]\n39",
                "expected_output": "[40,41]",
                "is_sample": false
            },
            {
                "input": "[40,41,40,42,40]\n40",
                "expected_output": "[41,42]",
                "is_sample": false
            },
            {
                "input": "[41,42,41,43,41]\n41",
                "expected_output": "[42,43]",
                "is_sample": false
            },
            {
                "input": "[42,43,42,44,42]\n42",
                "expected_output": "[43,44]",
                "is_sample": false
            },
            {
                "input": "[43,44,43,45,43]\n43",
                "expected_output": "[44,45]",
                "is_sample": false
            },
            {
                "input": "[44,45,44,46,44]\n44",
                "expected_output": "[45,46]",
                "is_sample": false
            },
            {
                "input": "[45,46,45,47,45]\n45",
                "expected_output": "[46,47]",
                "is_sample": false
            },
            {
                "input": "[46,47,46,48,46]\n46",
                "expected_output": "[47,48]",
                "is_sample": false
            },
            {
                "input": "[47,48,47,49,47]\n47",
                "expected_output": "[48,49]",
                "is_sample": false
            },
            {
                "input": "[48,49,48,50,48]\n48",
                "expected_output": "[49,50]",
                "is_sample": false
            },
            {
                "input": "[49,50,49,51,49]\n49",
                "expected_output": "[50,51]",
                "is_sample": false
            },
            {
                "input": "[50,51,50,52,50]\n50",
                "expected_output": "[51,52]",
                "is_sample": false
            }
        ]
    },
    {
        "question_number": 19,
        "title": "Remove Duplicates from Sorted Array",
        "level": "Easy",
        "tags": [
            "Array",
            "Two Pointers"
        ],
        "description": "Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same. Then return the number of unique elements in nums.",
        "constraints": "1 <= nums.length <= 3 * 10^4\n-100 <= nums[i] <= 100\nnums is sorted in non-decreasing order.",
        "starter": "class Solution {\n    public int removeDuplicates(int[] nums) {\n        // Write your code here (modify nums in-place and return k)\n        return 0;\n    }\n}",
        "driver": {
            "key": "intArrayInPlaceReturnLen",
            "method": "removeDuplicates"
        },
        "testcases": [
            {
                "input": "[1,1,2]",
                "expected_output": "[1,2]",
                "is_sample": true
            },
            {
                "input": "[0,0,1,1,1,2,2,3,3,4]",
                "expected_output": "[0,1,2,3,4]",
                "is_sample": true
            },
            {
                "input": "[1,1,2,2,3,3]",
                "expected_output": "[1,2,3]",
                "is_sample": false
            },
            {
                "input": "[2,2,3,3,4,4]",
                "expected_output": "[2,3,4]",
                "is_sample": false
            },
            {
                "input": "[3,3,4,4,5,5]",
                "expected_output": "[3,4,5]",
                "is_sample": false
            },
            {
                "input": "[4,4,5,5,6,6]",
                "expected_output": "[4,5,6]",
                "is_sample": false
            },
            {
                "input": "[5,5,6,6,7,7]",
                "expected_output": "[5,6,7]",
                "is_sample": false
            },
            {
                "input": "[6,6,7,7,8,8]",
                "expected_output": "[6,7,8]",
                "is_sample": false
            },
            {
                "input": "[7,7,8,8,9,9]",
                "expected_output": "[7,8,9]",
                "is_sample": false
            },
            {
                "input": "[8,8,9,9,10,10]",
                "expected_output": "[8,9,10]",
                "is_sample": false
            },
            {
                "input": "[9,9,10,10,11,11]",
                "expected_output": "[9,10,11]",
                "is_sample": false
            },
            {
                "input": "[10,10,11,11,12,12]",
                "expected_output": "[10,11,12]",
                "is_sample": false
            },
            {
                "input": "[11,11,12,12,13,13]",
                "expected_output": "[11,12,13]",
                "is_sample": false
            },
            {
                "input": "[12,12,13,13,14,14]",
                "expected_output": "[12,13,14]",
                "is_sample": false
            },
            {
                "input": "[13,13,14,14,15,15]",
                "expected_output": "[13,14,15]",
                "is_sample": false
            },
            {
                "input": "[14,14,15,15,16,16]",
                "expected_output": "[14,15,16]",
                "is_sample": false
            },
            {
                "input": "[15,15,16,16,17,17]",
                "expected_output": "[15,16,17]",
                "is_sample": false
            },
            {
                "input": "[16,16,17,17,18,18]",
                "expected_output": "[16,17,18]",
                "is_sample": false
            },
            {
                "input": "[17,17,18,18,19,19]",
                "expected_output": "[17,18,19]",
                "is_sample": false
            },
            {
                "input": "[18,18,19,19,20,20]",
                "expected_output": "[18,19,20]",
                "is_sample": false
            },
            {
                "input": "[19,19,20,20,21,21]",
                "expected_output": "[19,20,21]",
                "is_sample": false
            },
            {
                "input": "[20,20,21,21,22,22]",
                "expected_output": "[20,21,22]",
                "is_sample": false
            },
            {
                "input": "[21,21,22,22,23,23]",
                "expected_output": "[21,22,23]",
                "is_sample": false
            },
            {
                "input": "[22,22,23,23,24,24]",
                "expected_output": "[22,23,24]",
                "is_sample": false
            },
            {
                "input": "[23,23,24,24,25,25]",
                "expected_output": "[23,24,25]",
                "is_sample": false
            },
            {
                "input": "[24,24,25,25,26,26]",
                "expected_output": "[24,25,26]",
                "is_sample": false
            },
            {
                "input": "[25,25,26,26,27,27]",
                "expected_output": "[25,26,27]",
                "is_sample": false
            },
            {
                "input": "[26,26,27,27,28,28]",
                "expected_output": "[26,27,28]",
                "is_sample": false
            },
            {
                "input": "[27,27,28,28,29,29]",
                "expected_output": "[27,28,29]",
                "is_sample": false
            },
            {
                "input": "[28,28,29,29,30,30]",
                "expected_output": "[28,29,30]",
                "is_sample": false
            },
            {
                "input": "[29,29,30,30,31,31]",
                "expected_output": "[29,30,31]",
                "is_sample": false
            },
            {
                "input": "[30,30,31,31,32,32]",
                "expected_output": "[30,31,32]",
                "is_sample": false
            },
            {
                "input": "[31,31,32,32,33,33]",
                "expected_output": "[31,32,33]",
                "is_sample": false
            },
            {
                "input": "[32,32,33,33,34,34]",
                "expected_output": "[32,33,34]",
                "is_sample": false
            },
            {
                "input": "[33,33,34,34,35,35]",
                "expected_output": "[33,34,35]",
                "is_sample": false
            },
            {
                "input": "[34,34,35,35,36,36]",
                "expected_output": "[34,35,36]",
                "is_sample": false
            },
            {
                "input": "[35,35,36,36,37,37]",
                "expected_output": "[35,36,37]",
                "is_sample": false
            },
            {
                "input": "[36,36,37,37,38,38]",
                "expected_output": "[36,37,38]",
                "is_sample": false
            },
            {
                "input": "[37,37,38,38,39,39]",
                "expected_output": "[37,38,39]",
                "is_sample": false
            },
            {
                "input": "[38,38,39,39,40,40]",
                "expected_output": "[38,39,40]",
                "is_sample": false
            },
            {
                "input": "[39,39,40,40,41,41]",
                "expected_output": "[39,40,41]",
                "is_sample": false
            },
            {
                "input": "[40,40,41,41,42,42]",
                "expected_output": "[40,41,42]",
                "is_sample": false
            },
            {
                "input": "[41,41,42,42,43,43]",
                "expected_output": "[41,42,43]",
                "is_sample": false
            },
            {
                "input": "[42,42,43,43,44,44]",
                "expected_output": "[42,43,44]",
                "is_sample": false
            },
            {
                "input": "[43,43,44,44,45,45]",
                "expected_output": "[43,44,45]",
                "is_sample": false
            },
            {
                "input": "[44,44,45,45,46,46]",
                "expected_output": "[44,45,46]",
                "is_sample": false
            },
            {
                "input": "[45,45,46,46,47,47]",
                "expected_output": "[45,46,47]",
                "is_sample": false
            },
            {
                "input": "[46,46,47,47,48,48]",
                "expected_output": "[46,47,48]",
                "is_sample": false
            },
            {
                "input": "[47,47,48,48,49,49]",
                "expected_output": "[47,48,49]",
                "is_sample": false
            },
            {
                "input": "[48,48,49,49,50,50]",
                "expected_output": "[48,49,50]",
                "is_sample": false
            },
            {
                "input": "[49,49,50,50,51,51]",
                "expected_output": "[49,50,51]",
                "is_sample": false
            },
            {
                "input": "[50,50,51,51,52,52]",
                "expected_output": "[50,51,52]",
                "is_sample": false
            }
        ]
    },
    {
        "question_number": 20,
        "title": "Search Insert Position",
        "level": "Easy",
        "tags": [
            "Array",
            "Binary Search"
        ],
        "description": "Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.\n\nYou must write an algorithm with O(log n) runtime complexity.\n\nInput format (2 lines):\nLine 1: nums as JSON array\nLine 2: target",
        "constraints": "1 <= nums.length <= 10^4\n-10^4 <= nums[i] <= 10^4\nnums contains distinct values sorted in ascending order.",
        "starter": "class Solution {\n    public int searchInsert(int[] nums, int target) {\n        // Write your code here\n        return 0;\n    }\n}",
        "driver": {
            "key": "intArrayAndTargetToInt",
            "method": "searchInsert"
        },
        "testcases": [
            {
                "input": "[1,3,5,6]\n5",
                "expected_output": "2",
                "is_sample": true
            },
            {
                "input": "[1,3,5,6]\n2",
                "expected_output": "1",
                "is_sample": true
            },
            {
                "input": "[1,3,5,6]\n7",
                "expected_output": "4",
                "is_sample": false
            },
            {
                "input": "[2,4,6,8]\n5",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "[4,6,8,10]\n7",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "[6,8,10,12]\n9",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "[8,10,12,14]\n11",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "[10,12,14,16]\n13",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "[12,14,16,18]\n15",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "[14,16,18,20]\n17",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "[16,18,20,22]\n19",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "[18,20,22,24]\n21",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "[20,22,24,26]\n23",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "[22,24,26,28]\n25",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "[24,26,28,30]\n27",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "[26,28,30,32]\n29",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "[28,30,32,34]\n31",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "[30,32,34,36]\n33",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "[32,34,36,38]\n35",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "[34,36,38,40]\n37",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "[36,38,40,42]\n39",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "[38,40,42,44]\n41",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "[40,42,44,46]\n43",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "[42,44,46,48]\n45",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "[44,46,48,50]\n47",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "[46,48,50,52]\n49",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "[48,50,52,54]\n51",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "[50,52,54,56]\n53",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "[52,54,56,58]\n55",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "[54,56,58,60]\n57",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "[56,58,60,62]\n59",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "[58,60,62,64]\n61",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "[60,62,64,66]\n63",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "[62,64,66,68]\n65",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "[64,66,68,70]\n67",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "[66,68,70,72]\n69",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "[68,70,72,74]\n71",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "[70,72,74,76]\n73",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "[72,74,76,78]\n75",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "[74,76,78,80]\n77",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "[76,78,80,82]\n79",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "[78,80,82,84]\n81",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "[80,82,84,86]\n83",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "[82,84,86,88]\n85",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "[84,86,88,90]\n87",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "[86,88,90,92]\n89",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "[88,90,92,94]\n91",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "[90,92,94,96]\n93",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "[92,94,96,98]\n95",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "[94,96,98,100]\n97",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "[96,98,100,102]\n99",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "[98,100,102,104]\n101",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "[100,102,104,106]\n103",
                "expected_output": "2",
                "is_sample": false
            }
        ]
    },
    {
        "question_number": 21,
        "title": "Plus One",
        "level": "Easy",
        "tags": [
            "Array",
            "Math"
        ],
        "description": "You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.\n\nIncrement the large integer by one and return the resulting array of digits.",
        "constraints": "1 <= digits.length <= 100\n0 <= digits[i] <= 9",
        "starter": "class Solution {\n    public int[] plusOne(int[] digits) {\n        // Write your code here\n        return new int[]{};\n    }\n}",
        "driver": "plusOne",
        "testcases": [
            {
                "input": "[1,2,3]",
                "expected_output": "[1,2,4]",
                "is_sample": true
            },
            {
                "input": "[4,3,2,1]",
                "expected_output": "[4,3,2,2]",
                "is_sample": true
            },
            {
                "input": "[9]",
                "expected_output": "[1,0]",
                "is_sample": false
            },
            {
                "input": "[0,1]",
                "expected_output": "[0,2]",
                "is_sample": false
            },
            {
                "input": "[0,2]",
                "expected_output": "[0,3]",
                "is_sample": false
            },
            {
                "input": "[0,3]",
                "expected_output": "[0,4]",
                "is_sample": false
            },
            {
                "input": "[0,4]",
                "expected_output": "[0,5]",
                "is_sample": false
            },
            {
                "input": "[9,9]",
                "expected_output": "[1,0,0]",
                "is_sample": false
            },
            {
                "input": "[0,6]",
                "expected_output": "[0,7]",
                "is_sample": false
            },
            {
                "input": "[0,7]",
                "expected_output": "[0,8]",
                "is_sample": false
            },
            {
                "input": "[0,8]",
                "expected_output": "[0,9]",
                "is_sample": false
            },
            {
                "input": "[0,9]",
                "expected_output": "[1,0]",
                "is_sample": false
            },
            {
                "input": "[9,9]",
                "expected_output": "[1,0,0]",
                "is_sample": false
            },
            {
                "input": "[1,1]",
                "expected_output": "[1,2]",
                "is_sample": false
            },
            {
                "input": "[1,2]",
                "expected_output": "[1,3]",
                "is_sample": false
            },
            {
                "input": "[1,3]",
                "expected_output": "[1,4]",
                "is_sample": false
            },
            {
                "input": "[1,4]",
                "expected_output": "[1,5]",
                "is_sample": false
            },
            {
                "input": "[9,9]",
                "expected_output": "[1,0,0]",
                "is_sample": false
            },
            {
                "input": "[1,6]",
                "expected_output": "[1,7]",
                "is_sample": false
            },
            {
                "input": "[1,7]",
                "expected_output": "[1,8]",
                "is_sample": false
            },
            {
                "input": "[1,8]",
                "expected_output": "[1,9]",
                "is_sample": false
            },
            {
                "input": "[1,9]",
                "expected_output": "[2,0]",
                "is_sample": false
            },
            {
                "input": "[9,9]",
                "expected_output": "[1,0,0]",
                "is_sample": false
            },
            {
                "input": "[2,1]",
                "expected_output": "[2,2]",
                "is_sample": false
            },
            {
                "input": "[2,2]",
                "expected_output": "[2,3]",
                "is_sample": false
            },
            {
                "input": "[2,3]",
                "expected_output": "[2,4]",
                "is_sample": false
            },
            {
                "input": "[2,4]",
                "expected_output": "[2,5]",
                "is_sample": false
            },
            {
                "input": "[9,9]",
                "expected_output": "[1,0,0]",
                "is_sample": false
            },
            {
                "input": "[2,6]",
                "expected_output": "[2,7]",
                "is_sample": false
            },
            {
                "input": "[2,7]",
                "expected_output": "[2,8]",
                "is_sample": false
            },
            {
                "input": "[2,8]",
                "expected_output": "[2,9]",
                "is_sample": false
            },
            {
                "input": "[2,9]",
                "expected_output": "[3,0]",
                "is_sample": false
            },
            {
                "input": "[9,9]",
                "expected_output": "[1,0,0]",
                "is_sample": false
            },
            {
                "input": "[3,1]",
                "expected_output": "[3,2]",
                "is_sample": false
            },
            {
                "input": "[3,2]",
                "expected_output": "[3,3]",
                "is_sample": false
            },
            {
                "input": "[3,3]",
                "expected_output": "[3,4]",
                "is_sample": false
            },
            {
                "input": "[3,4]",
                "expected_output": "[3,5]",
                "is_sample": false
            },
            {
                "input": "[9,9]",
                "expected_output": "[1,0,0]",
                "is_sample": false
            },
            {
                "input": "[3,6]",
                "expected_output": "[3,7]",
                "is_sample": false
            },
            {
                "input": "[3,7]",
                "expected_output": "[3,8]",
                "is_sample": false
            },
            {
                "input": "[3,8]",
                "expected_output": "[3,9]",
                "is_sample": false
            },
            {
                "input": "[3,9]",
                "expected_output": "[4,0]",
                "is_sample": false
            },
            {
                "input": "[9,9]",
                "expected_output": "[1,0,0]",
                "is_sample": false
            },
            {
                "input": "[4,1]",
                "expected_output": "[4,2]",
                "is_sample": false
            },
            {
                "input": "[4,2]",
                "expected_output": "[4,3]",
                "is_sample": false
            },
            {
                "input": "[4,3]",
                "expected_output": "[4,4]",
                "is_sample": false
            },
            {
                "input": "[4,4]",
                "expected_output": "[4,5]",
                "is_sample": false
            },
            {
                "input": "[9,9]",
                "expected_output": "[1,0,0]",
                "is_sample": false
            },
            {
                "input": "[4,6]",
                "expected_output": "[4,7]",
                "is_sample": false
            },
            {
                "input": "[4,7]",
                "expected_output": "[4,8]",
                "is_sample": false
            },
            {
                "input": "[4,8]",
                "expected_output": "[4,9]",
                "is_sample": false
            },
            {
                "input": "[4,9]",
                "expected_output": "[5,0]",
                "is_sample": false
            },
            {
                "input": "[9,9]",
                "expected_output": "[1,0,0]",
                "is_sample": false
            }
        ]
    },
    {
        "question_number": 22,
        "title": "Add Binary",
        "level": "Easy",
        "tags": [
            "Math",
            "String",
            "Bit Manipulation",
            "Simulation"
        ],
        "description": "Given two binary strings a and b, return their sum as a binary string.\n\nInput format (2 lines):\nLine 1: a\nLine 2: b",
        "constraints": "1 <= a.length, b.length <= 10^4\na and b consist only of '0' or '1' characters.",
        "starter": "class Solution {\n    public String addBinary(String a, String b) {\n        // Write your code here\n        return \"\";\n    }\n}",
        "driver": {
            "key": "twoStringsToString",
            "method": "addBinary"
        },
        "testcases": [
            {
                "input": "11\n1",
                "expected_output": "100",
                "is_sample": true
            },
            {
                "input": "1010\n1011",
                "expected_output": "10101",
                "is_sample": true
            },
            {
                "input": "11\n11",
                "expected_output": "110",
                "is_sample": false
            },
            {
                "input": "110\n101",
                "expected_output": "1011",
                "is_sample": false
            },
            {
                "input": "1001\n111",
                "expected_output": "10000",
                "is_sample": false
            },
            {
                "input": "1100\n1001",
                "expected_output": "10101",
                "is_sample": false
            },
            {
                "input": "1111\n1011",
                "expected_output": "11010",
                "is_sample": false
            },
            {
                "input": "10010\n1101",
                "expected_output": "11111",
                "is_sample": false
            },
            {
                "input": "10101\n1111",
                "expected_output": "100100",
                "is_sample": false
            },
            {
                "input": "11000\n10001",
                "expected_output": "101001",
                "is_sample": false
            },
            {
                "input": "11011\n10011",
                "expected_output": "101110",
                "is_sample": false
            },
            {
                "input": "11110\n10101",
                "expected_output": "110011",
                "is_sample": false
            },
            {
                "input": "100001\n10111",
                "expected_output": "111000",
                "is_sample": false
            },
            {
                "input": "100100\n11001",
                "expected_output": "111101",
                "is_sample": false
            },
            {
                "input": "100111\n11011",
                "expected_output": "1000010",
                "is_sample": false
            },
            {
                "input": "101010\n11101",
                "expected_output": "1000111",
                "is_sample": false
            },
            {
                "input": "101101\n11111",
                "expected_output": "1001100",
                "is_sample": false
            },
            {
                "input": "110000\n100001",
                "expected_output": "1010001",
                "is_sample": false
            },
            {
                "input": "110011\n100011",
                "expected_output": "1010110",
                "is_sample": false
            },
            {
                "input": "110110\n100101",
                "expected_output": "1011011",
                "is_sample": false
            },
            {
                "input": "111001\n100111",
                "expected_output": "1100000",
                "is_sample": false
            },
            {
                "input": "111100\n101001",
                "expected_output": "1100101",
                "is_sample": false
            },
            {
                "input": "111111\n101011",
                "expected_output": "1101010",
                "is_sample": false
            },
            {
                "input": "1000010\n101101",
                "expected_output": "1101111",
                "is_sample": false
            },
            {
                "input": "1000101\n101111",
                "expected_output": "1110100",
                "is_sample": false
            },
            {
                "input": "1001000\n110001",
                "expected_output": "1111001",
                "is_sample": false
            },
            {
                "input": "1001011\n110011",
                "expected_output": "1111110",
                "is_sample": false
            },
            {
                "input": "1001110\n110101",
                "expected_output": "10000011",
                "is_sample": false
            },
            {
                "input": "1010001\n110111",
                "expected_output": "10001000",
                "is_sample": false
            },
            {
                "input": "1010100\n111001",
                "expected_output": "10001101",
                "is_sample": false
            },
            {
                "input": "1010111\n111011",
                "expected_output": "10010010",
                "is_sample": false
            },
            {
                "input": "1011010\n111101",
                "expected_output": "10010111",
                "is_sample": false
            },
            {
                "input": "1011101\n111111",
                "expected_output": "10011100",
                "is_sample": false
            },
            {
                "input": "1100000\n1000001",
                "expected_output": "10100001",
                "is_sample": false
            },
            {
                "input": "1100011\n1000011",
                "expected_output": "10100110",
                "is_sample": false
            },
            {
                "input": "1100110\n1000101",
                "expected_output": "10101011",
                "is_sample": false
            },
            {
                "input": "1101001\n1000111",
                "expected_output": "10110000",
                "is_sample": false
            },
            {
                "input": "1101100\n1001001",
                "expected_output": "10110101",
                "is_sample": false
            },
            {
                "input": "1101111\n1001011",
                "expected_output": "10111010",
                "is_sample": false
            },
            {
                "input": "1110010\n1001101",
                "expected_output": "10111111",
                "is_sample": false
            },
            {
                "input": "1110101\n1001111",
                "expected_output": "11000100",
                "is_sample": false
            },
            {
                "input": "1111000\n1010001",
                "expected_output": "11001001",
                "is_sample": false
            },
            {
                "input": "1111011\n1010011",
                "expected_output": "11001110",
                "is_sample": false
            },
            {
                "input": "1111110\n1010101",
                "expected_output": "11010011",
                "is_sample": false
            },
            {
                "input": "10000001\n1010111",
                "expected_output": "11011000",
                "is_sample": false
            },
            {
                "input": "10000100\n1011001",
                "expected_output": "11011101",
                "is_sample": false
            },
            {
                "input": "10000111\n1011011",
                "expected_output": "11100010",
                "is_sample": false
            },
            {
                "input": "10001010\n1011101",
                "expected_output": "11100111",
                "is_sample": false
            },
            {
                "input": "10001101\n1011111",
                "expected_output": "11101100",
                "is_sample": false
            },
            {
                "input": "10010000\n1100001",
                "expected_output": "11110001",
                "is_sample": false
            },
            {
                "input": "10010011\n1100011",
                "expected_output": "11110110",
                "is_sample": false
            },
            {
                "input": "10010110\n1100101",
                "expected_output": "11111011",
                "is_sample": false
            }
        ]
    },
    {
        "question_number": 23,
        "title": "Length of Last Word",
        "level": "Easy",
        "tags": [
            "String"
        ],
        "description": "Given a string s consisting of words and spaces, return the length of the last word in the string.\n\nA word is a maximal substring consisting of non-space characters only.",
        "constraints": "1 <= s.length <= 10^4\ns consists of only English letters and spaces ' '.",
        "starter": "class Solution {\n    public int lengthOfLastWord(String s) {\n        // Write your code here\n        return 0;\n    }\n}",
        "driver": {
            "key": "stringToInt",
            "method": "lengthOfLastWord"
        },
        "testcases": [
            {
                "input": "Hello World",
                "expected_output": "5",
                "is_sample": true
            },
            {
                "input": "   fly me   to   the moon  ",
                "expected_output": "4",
                "is_sample": true
            },
            {
                "input": "luffy is still joyboy",
                "expected_output": "6",
                "is_sample": false
            },
            {
                "input": "Practice coding on code   ",
                "expected_output": "4",
                "is_sample": false
            },
            {
                "input": "Practice coding on developer   ",
                "expected_output": "9",
                "is_sample": false
            },
            {
                "input": "Practice coding on algorithm   ",
                "expected_output": "9",
                "is_sample": false
            },
            {
                "input": "Practice coding on system   ",
                "expected_output": "6",
                "is_sample": false
            },
            {
                "input": "Practice coding on variable   ",
                "expected_output": "8",
                "is_sample": false
            },
            {
                "input": "Practice coding on function   ",
                "expected_output": "8",
                "is_sample": false
            },
            {
                "input": "Practice coding on code   ",
                "expected_output": "4",
                "is_sample": false
            },
            {
                "input": "Practice coding on developer   ",
                "expected_output": "9",
                "is_sample": false
            },
            {
                "input": "Practice coding on algorithm   ",
                "expected_output": "9",
                "is_sample": false
            },
            {
                "input": "Practice coding on system   ",
                "expected_output": "6",
                "is_sample": false
            },
            {
                "input": "Practice coding on variable   ",
                "expected_output": "8",
                "is_sample": false
            },
            {
                "input": "Practice coding on function   ",
                "expected_output": "8",
                "is_sample": false
            },
            {
                "input": "Practice coding on code   ",
                "expected_output": "4",
                "is_sample": false
            },
            {
                "input": "Practice coding on developer   ",
                "expected_output": "9",
                "is_sample": false
            },
            {
                "input": "Practice coding on algorithm   ",
                "expected_output": "9",
                "is_sample": false
            },
            {
                "input": "Practice coding on system   ",
                "expected_output": "6",
                "is_sample": false
            },
            {
                "input": "Practice coding on variable   ",
                "expected_output": "8",
                "is_sample": false
            },
            {
                "input": "Practice coding on function   ",
                "expected_output": "8",
                "is_sample": false
            },
            {
                "input": "Practice coding on code   ",
                "expected_output": "4",
                "is_sample": false
            },
            {
                "input": "Practice coding on developer   ",
                "expected_output": "9",
                "is_sample": false
            },
            {
                "input": "Practice coding on algorithm   ",
                "expected_output": "9",
                "is_sample": false
            },
            {
                "input": "Practice coding on system   ",
                "expected_output": "6",
                "is_sample": false
            },
            {
                "input": "Practice coding on variable   ",
                "expected_output": "8",
                "is_sample": false
            },
            {
                "input": "Practice coding on function   ",
                "expected_output": "8",
                "is_sample": false
            },
            {
                "input": "Practice coding on code   ",
                "expected_output": "4",
                "is_sample": false
            },
            {
                "input": "Practice coding on developer   ",
                "expected_output": "9",
                "is_sample": false
            },
            {
                "input": "Practice coding on algorithm   ",
                "expected_output": "9",
                "is_sample": false
            },
            {
                "input": "Practice coding on system   ",
                "expected_output": "6",
                "is_sample": false
            },
            {
                "input": "Practice coding on variable   ",
                "expected_output": "8",
                "is_sample": false
            },
            {
                "input": "Practice coding on function   ",
                "expected_output": "8",
                "is_sample": false
            },
            {
                "input": "Practice coding on code   ",
                "expected_output": "4",
                "is_sample": false
            },
            {
                "input": "Practice coding on developer   ",
                "expected_output": "9",
                "is_sample": false
            },
            {
                "input": "Practice coding on algorithm   ",
                "expected_output": "9",
                "is_sample": false
            },
            {
                "input": "Practice coding on system   ",
                "expected_output": "6",
                "is_sample": false
            },
            {
                "input": "Practice coding on variable   ",
                "expected_output": "8",
                "is_sample": false
            },
            {
                "input": "Practice coding on function   ",
                "expected_output": "8",
                "is_sample": false
            },
            {
                "input": "Practice coding on code   ",
                "expected_output": "4",
                "is_sample": false
            },
            {
                "input": "Practice coding on developer   ",
                "expected_output": "9",
                "is_sample": false
            },
            {
                "input": "Practice coding on algorithm   ",
                "expected_output": "9",
                "is_sample": false
            },
            {
                "input": "Practice coding on system   ",
                "expected_output": "6",
                "is_sample": false
            },
            {
                "input": "Practice coding on variable   ",
                "expected_output": "8",
                "is_sample": false
            },
            {
                "input": "Practice coding on function   ",
                "expected_output": "8",
                "is_sample": false
            },
            {
                "input": "Practice coding on code   ",
                "expected_output": "4",
                "is_sample": false
            },
            {
                "input": "Practice coding on developer   ",
                "expected_output": "9",
                "is_sample": false
            },
            {
                "input": "Practice coding on algorithm   ",
                "expected_output": "9",
                "is_sample": false
            },
            {
                "input": "Practice coding on system   ",
                "expected_output": "6",
                "is_sample": false
            },
            {
                "input": "Practice coding on variable   ",
                "expected_output": "8",
                "is_sample": false
            },
            {
                "input": "Practice coding on function   ",
                "expected_output": "8",
                "is_sample": false
            },
            {
                "input": "Practice coding on code   ",
                "expected_output": "4",
                "is_sample": false
            },
            {
                "input": "Practice coding on developer   ",
                "expected_output": "9",
                "is_sample": false
            }
        ]
    },
    {
        "question_number": 24,
        "title": "Power of Two",
        "level": "Easy",
        "tags": [
            "Math",
            "Bit Manipulation",
            "Recursion"
        ],
        "description": "Given an integer n, return true if it is a power of two. Otherwise, return false.\n\nAn integer n is a power of two, if there exists an integer x such that n == 2^x.",
        "constraints": "-2^31 <= n <= 2^31 - 1",
        "starter": "class Solution {\n    public boolean isPowerOfTwo(int n) {\n        // Write your code here\n        return false;\n    }\n}",
        "driver": {
            "key": "intToBoolean",
            "method": "isPowerOfTwo"
        },
        "testcases": [
            {
                "input": "1",
                "expected_output": "true",
                "is_sample": true
            },
            {
                "input": "16",
                "expected_output": "true",
                "is_sample": true
            },
            {
                "input": "3",
                "expected_output": "false",
                "is_sample": true
            },
            {
                "input": "3",
                "expected_output": "false",
                "is_sample": false
            },
            {
                "input": "4",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "9",
                "expected_output": "false",
                "is_sample": false
            },
            {
                "input": "16",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "15",
                "expected_output": "false",
                "is_sample": false
            },
            {
                "input": "64",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "21",
                "expected_output": "false",
                "is_sample": false
            },
            {
                "input": "256",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "27",
                "expected_output": "false",
                "is_sample": false
            },
            {
                "input": "1024",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "33",
                "expected_output": "false",
                "is_sample": false
            },
            {
                "input": "4096",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "39",
                "expected_output": "false",
                "is_sample": false
            },
            {
                "input": "16384",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "45",
                "expected_output": "false",
                "is_sample": false
            },
            {
                "input": "65536",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "51",
                "expected_output": "false",
                "is_sample": false
            },
            {
                "input": "262144",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "57",
                "expected_output": "false",
                "is_sample": false
            },
            {
                "input": "1048576",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "63",
                "expected_output": "false",
                "is_sample": false
            },
            {
                "input": "4194304",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "69",
                "expected_output": "false",
                "is_sample": false
            },
            {
                "input": "16777216",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "75",
                "expected_output": "false",
                "is_sample": false
            },
            {
                "input": "67108864",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "81",
                "expected_output": "false",
                "is_sample": false
            },
            {
                "input": "268435456",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "87",
                "expected_output": "false",
                "is_sample": false
            },
            {
                "input": "1",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "93",
                "expected_output": "false",
                "is_sample": false
            },
            {
                "input": "4",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "99",
                "expected_output": "false",
                "is_sample": false
            },
            {
                "input": "16",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "105",
                "expected_output": "false",
                "is_sample": false
            },
            {
                "input": "64",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "111",
                "expected_output": "false",
                "is_sample": false
            },
            {
                "input": "256",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "117",
                "expected_output": "false",
                "is_sample": false
            },
            {
                "input": "1024",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "123",
                "expected_output": "false",
                "is_sample": false
            },
            {
                "input": "4096",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "129",
                "expected_output": "false",
                "is_sample": false
            },
            {
                "input": "16384",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "135",
                "expected_output": "false",
                "is_sample": false
            },
            {
                "input": "65536",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "141",
                "expected_output": "false",
                "is_sample": false
            },
            {
                "input": "262144",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "147",
                "expected_output": "false",
                "is_sample": false
            },
            {
                "input": "1048576",
                "expected_output": "true",
                "is_sample": false
            }
        ]
    },
    {
        "question_number": 25,
        "title": "Power of Three",
        "level": "Easy",
        "tags": [
            "Math",
            "Recursion"
        ],
        "description": "Given an integer n, return true if it is a power of three. Otherwise, return false.\n\nAn integer n is a power of three, if there exists an integer x such that n == 3^x.",
        "constraints": "-2^31 <= n <= 2^31 - 1",
        "starter": "class Solution {\n    public boolean isPowerOfThree(int n) {\n        // Write your code here\n        return false;\n    }\n}",
        "driver": {
            "key": "intToBoolean",
            "method": "isPowerOfThree"
        },
        "testcases": [
            {
                "input": "27",
                "expected_output": "true",
                "is_sample": true
            },
            {
                "input": "0",
                "expected_output": "false",
                "is_sample": true
            },
            {
                "input": "-1",
                "expected_output": "false",
                "is_sample": true
            },
            {
                "input": "5",
                "expected_output": "false",
                "is_sample": false
            },
            {
                "input": "10",
                "expected_output": "false",
                "is_sample": false
            },
            {
                "input": "27",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "20",
                "expected_output": "false",
                "is_sample": false
            },
            {
                "input": "25",
                "expected_output": "false",
                "is_sample": false
            },
            {
                "input": "729",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "35",
                "expected_output": "false",
                "is_sample": false
            },
            {
                "input": "40",
                "expected_output": "false",
                "is_sample": false
            },
            {
                "input": "19683",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "50",
                "expected_output": "false",
                "is_sample": false
            },
            {
                "input": "55",
                "expected_output": "false",
                "is_sample": false
            },
            {
                "input": "9",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "65",
                "expected_output": "false",
                "is_sample": false
            },
            {
                "input": "70",
                "expected_output": "false",
                "is_sample": false
            },
            {
                "input": "243",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "80",
                "expected_output": "false",
                "is_sample": false
            },
            {
                "input": "85",
                "expected_output": "false",
                "is_sample": false
            },
            {
                "input": "6561",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "95",
                "expected_output": "false",
                "is_sample": false
            },
            {
                "input": "100",
                "expected_output": "false",
                "is_sample": false
            },
            {
                "input": "3",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "110",
                "expected_output": "false",
                "is_sample": false
            },
            {
                "input": "115",
                "expected_output": "false",
                "is_sample": false
            },
            {
                "input": "81",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "125",
                "expected_output": "false",
                "is_sample": false
            },
            {
                "input": "130",
                "expected_output": "false",
                "is_sample": false
            },
            {
                "input": "2187",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "140",
                "expected_output": "false",
                "is_sample": false
            },
            {
                "input": "145",
                "expected_output": "false",
                "is_sample": false
            },
            {
                "input": "1",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "155",
                "expected_output": "false",
                "is_sample": false
            },
            {
                "input": "160",
                "expected_output": "false",
                "is_sample": false
            },
            {
                "input": "27",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "170",
                "expected_output": "false",
                "is_sample": false
            },
            {
                "input": "175",
                "expected_output": "false",
                "is_sample": false
            },
            {
                "input": "729",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "185",
                "expected_output": "false",
                "is_sample": false
            },
            {
                "input": "190",
                "expected_output": "false",
                "is_sample": false
            },
            {
                "input": "19683",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "200",
                "expected_output": "false",
                "is_sample": false
            },
            {
                "input": "205",
                "expected_output": "false",
                "is_sample": false
            },
            {
                "input": "9",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "215",
                "expected_output": "false",
                "is_sample": false
            },
            {
                "input": "220",
                "expected_output": "false",
                "is_sample": false
            },
            {
                "input": "243",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "230",
                "expected_output": "false",
                "is_sample": false
            },
            {
                "input": "235",
                "expected_output": "false",
                "is_sample": false
            },
            {
                "input": "6561",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "245",
                "expected_output": "false",
                "is_sample": false
            },
            {
                "input": "250",
                "expected_output": "false",
                "is_sample": false
            }
        ]
    },
    {
        "question_number": 26,
        "title": "Counting Bits",
        "level": "Easy",
        "tags": [
            "Dynamic Programming",
            "Bit Manipulation"
        ],
        "description": "Given an integer n, return an array ans of length n + 1 such that for each i (0 <= i <= n), ans[i] is the number of 1's in the binary representation of i.",
        "constraints": "0 <= n <= 10^5",
        "starter": "class Solution {\n    public int[] countBits(int n) {\n        // Write your code here\n        return new int[]{};\n    }\n}",
        "driver": {
            "key": "intInIntArrayOut",
            "method": "countBits"
        },
        "testcases": [
            {
                "input": "2",
                "expected_output": "[0,1,1]",
                "is_sample": true
            },
            {
                "input": "5",
                "expected_output": "[0,1,1,2,1,2]",
                "is_sample": true
            },
            {
                "input": "1",
                "expected_output": "[0,1]",
                "is_sample": false
            },
            {
                "input": "2",
                "expected_output": "[0,1,1]",
                "is_sample": false
            },
            {
                "input": "3",
                "expected_output": "[0,1,1,2]",
                "is_sample": false
            },
            {
                "input": "4",
                "expected_output": "[0,1,1,2,1]",
                "is_sample": false
            },
            {
                "input": "5",
                "expected_output": "[0,1,1,2,1,2]",
                "is_sample": false
            },
            {
                "input": "6",
                "expected_output": "[0,1,1,2,1,2,2]",
                "is_sample": false
            },
            {
                "input": "7",
                "expected_output": "[0,1,1,2,1,2,2,3]",
                "is_sample": false
            },
            {
                "input": "8",
                "expected_output": "[0,1,1,2,1,2,2,3,1]",
                "is_sample": false
            },
            {
                "input": "9",
                "expected_output": "[0,1,1,2,1,2,2,3,1,2]",
                "is_sample": false
            },
            {
                "input": "10",
                "expected_output": "[0,1,1,2,1,2,2,3,1,2,2]",
                "is_sample": false
            },
            {
                "input": "11",
                "expected_output": "[0,1,1,2,1,2,2,3,1,2,2,3]",
                "is_sample": false
            },
            {
                "input": "12",
                "expected_output": "[0,1,1,2,1,2,2,3,1,2,2,3,2]",
                "is_sample": false
            },
            {
                "input": "13",
                "expected_output": "[0,1,1,2,1,2,2,3,1,2,2,3,2,3]",
                "is_sample": false
            },
            {
                "input": "14",
                "expected_output": "[0,1,1,2,1,2,2,3,1,2,2,3,2,3,3]",
                "is_sample": false
            },
            {
                "input": "15",
                "expected_output": "[0,1,1,2,1,2,2,3,1,2,2,3,2,3,3,4]",
                "is_sample": false
            },
            {
                "input": "16",
                "expected_output": "[0,1,1,2,1,2,2,3,1,2,2,3,2,3,3,4,1]",
                "is_sample": false
            },
            {
                "input": "17",
                "expected_output": "[0,1,1,2,1,2,2,3,1,2,2,3,2,3,3,4,1,2]",
                "is_sample": false
            },
            {
                "input": "18",
                "expected_output": "[0,1,1,2,1,2,2,3,1,2,2,3,2,3,3,4,1,2,2]",
                "is_sample": false
            },
            {
                "input": "19",
                "expected_output": "[0,1,1,2,1,2,2,3,1,2,2,3,2,3,3,4,1,2,2,3]",
                "is_sample": false
            },
            {
                "input": "20",
                "expected_output": "[0,1,1,2,1,2,2,3,1,2,2,3,2,3,3,4,1,2,2,3,2]",
                "is_sample": false
            },
            {
                "input": "21",
                "expected_output": "[0,1,1,2,1,2,2,3,1,2,2,3,2,3,3,4,1,2,2,3,2,3]",
                "is_sample": false
            },
            {
                "input": "22",
                "expected_output": "[0,1,1,2,1,2,2,3,1,2,2,3,2,3,3,4,1,2,2,3,2,3,3]",
                "is_sample": false
            },
            {
                "input": "23",
                "expected_output": "[0,1,1,2,1,2,2,3,1,2,2,3,2,3,3,4,1,2,2,3,2,3,3,4]",
                "is_sample": false
            },
            {
                "input": "24",
                "expected_output": "[0,1,1,2,1,2,2,3,1,2,2,3,2,3,3,4,1,2,2,3,2,3,3,4,2]",
                "is_sample": false
            },
            {
                "input": "25",
                "expected_output": "[0,1,1,2,1,2,2,3,1,2,2,3,2,3,3,4,1,2,2,3,2,3,3,4,2,3]",
                "is_sample": false
            },
            {
                "input": "26",
                "expected_output": "[0,1,1,2,1,2,2,3,1,2,2,3,2,3,3,4,1,2,2,3,2,3,3,4,2,3,3]",
                "is_sample": false
            },
            {
                "input": "27",
                "expected_output": "[0,1,1,2,1,2,2,3,1,2,2,3,2,3,3,4,1,2,2,3,2,3,3,4,2,3,3,4]",
                "is_sample": false
            },
            {
                "input": "28",
                "expected_output": "[0,1,1,2,1,2,2,3,1,2,2,3,2,3,3,4,1,2,2,3,2,3,3,4,2,3,3,4,3]",
                "is_sample": false
            },
            {
                "input": "29",
                "expected_output": "[0,1,1,2,1,2,2,3,1,2,2,3,2,3,3,4,1,2,2,3,2,3,3,4,2,3,3,4,3,4]",
                "is_sample": false
            },
            {
                "input": "30",
                "expected_output": "[0,1,1,2,1,2,2,3,1,2,2,3,2,3,3,4,1,2,2,3,2,3,3,4,2,3,3,4,3,4,4]",
                "is_sample": false
            },
            {
                "input": "31",
                "expected_output": "[0,1,1,2,1,2,2,3,1,2,2,3,2,3,3,4,1,2,2,3,2,3,3,4,2,3,3,4,3,4,4,5]",
                "is_sample": false
            },
            {
                "input": "32",
                "expected_output": "[0,1,1,2,1,2,2,3,1,2,2,3,2,3,3,4,1,2,2,3,2,3,3,4,2,3,3,4,3,4,4,5,1]",
                "is_sample": false
            },
            {
                "input": "33",
                "expected_output": "[0,1,1,2,1,2,2,3,1,2,2,3,2,3,3,4,1,2,2,3,2,3,3,4,2,3,3,4,3,4,4,5,1,2]",
                "is_sample": false
            },
            {
                "input": "34",
                "expected_output": "[0,1,1,2,1,2,2,3,1,2,2,3,2,3,3,4,1,2,2,3,2,3,3,4,2,3,3,4,3,4,4,5,1,2,2]",
                "is_sample": false
            },
            {
                "input": "35",
                "expected_output": "[0,1,1,2,1,2,2,3,1,2,2,3,2,3,3,4,1,2,2,3,2,3,3,4,2,3,3,4,3,4,4,5,1,2,2,3]",
                "is_sample": false
            },
            {
                "input": "36",
                "expected_output": "[0,1,1,2,1,2,2,3,1,2,2,3,2,3,3,4,1,2,2,3,2,3,3,4,2,3,3,4,3,4,4,5,1,2,2,3,2]",
                "is_sample": false
            },
            {
                "input": "37",
                "expected_output": "[0,1,1,2,1,2,2,3,1,2,2,3,2,3,3,4,1,2,2,3,2,3,3,4,2,3,3,4,3,4,4,5,1,2,2,3,2,3]",
                "is_sample": false
            },
            {
                "input": "38",
                "expected_output": "[0,1,1,2,1,2,2,3,1,2,2,3,2,3,3,4,1,2,2,3,2,3,3,4,2,3,3,4,3,4,4,5,1,2,2,3,2,3,3]",
                "is_sample": false
            },
            {
                "input": "39",
                "expected_output": "[0,1,1,2,1,2,2,3,1,2,2,3,2,3,3,4,1,2,2,3,2,3,3,4,2,3,3,4,3,4,4,5,1,2,2,3,2,3,3,4]",
                "is_sample": false
            },
            {
                "input": "40",
                "expected_output": "[0,1,1,2,1,2,2,3,1,2,2,3,2,3,3,4,1,2,2,3,2,3,3,4,2,3,3,4,3,4,4,5,1,2,2,3,2,3,3,4,2]",
                "is_sample": false
            },
            {
                "input": "41",
                "expected_output": "[0,1,1,2,1,2,2,3,1,2,2,3,2,3,3,4,1,2,2,3,2,3,3,4,2,3,3,4,3,4,4,5,1,2,2,3,2,3,3,4,2,3]",
                "is_sample": false
            },
            {
                "input": "42",
                "expected_output": "[0,1,1,2,1,2,2,3,1,2,2,3,2,3,3,4,1,2,2,3,2,3,3,4,2,3,3,4,3,4,4,5,1,2,2,3,2,3,3,4,2,3,3]",
                "is_sample": false
            },
            {
                "input": "43",
                "expected_output": "[0,1,1,2,1,2,2,3,1,2,2,3,2,3,3,4,1,2,2,3,2,3,3,4,2,3,3,4,3,4,4,5,1,2,2,3,2,3,3,4,2,3,3,4]",
                "is_sample": false
            },
            {
                "input": "44",
                "expected_output": "[0,1,1,2,1,2,2,3,1,2,2,3,2,3,3,4,1,2,2,3,2,3,3,4,2,3,3,4,3,4,4,5,1,2,2,3,2,3,3,4,2,3,3,4,3]",
                "is_sample": false
            },
            {
                "input": "45",
                "expected_output": "[0,1,1,2,1,2,2,3,1,2,2,3,2,3,3,4,1,2,2,3,2,3,3,4,2,3,3,4,3,4,4,5,1,2,2,3,2,3,3,4,2,3,3,4,3,4]",
                "is_sample": false
            },
            {
                "input": "46",
                "expected_output": "[0,1,1,2,1,2,2,3,1,2,2,3,2,3,3,4,1,2,2,3,2,3,3,4,2,3,3,4,3,4,4,5,1,2,2,3,2,3,3,4,2,3,3,4,3,4,4]",
                "is_sample": false
            },
            {
                "input": "47",
                "expected_output": "[0,1,1,2,1,2,2,3,1,2,2,3,2,3,3,4,1,2,2,3,2,3,3,4,2,3,3,4,3,4,4,5,1,2,2,3,2,3,3,4,2,3,3,4,3,4,4,5]",
                "is_sample": false
            },
            {
                "input": "48",
                "expected_output": "[0,1,1,2,1,2,2,3,1,2,2,3,2,3,3,4,1,2,2,3,2,3,3,4,2,3,3,4,3,4,4,5,1,2,2,3,2,3,3,4,2,3,3,4,3,4,4,5,2]",
                "is_sample": false
            },
            {
                "input": "49",
                "expected_output": "[0,1,1,2,1,2,2,3,1,2,2,3,2,3,3,4,1,2,2,3,2,3,3,4,2,3,3,4,3,4,4,5,1,2,2,3,2,3,3,4,2,3,3,4,3,4,4,5,2,3]",
                "is_sample": false
            },
            {
                "input": "50",
                "expected_output": "[0,1,1,2,1,2,2,3,1,2,2,3,2,3,3,4,1,2,2,3,2,3,3,4,2,3,3,4,3,4,4,5,1,2,2,3,2,3,3,4,2,3,3,4,3,4,4,5,2,3,3]",
                "is_sample": false
            }
        ]
    },
    {
        "question_number": 27,
        "title": "Number of 1 Bits",
        "level": "Easy",
        "tags": [
            "Divide and Conquer",
            "Bit Manipulation"
        ],
        "description": "Write a function that takes the binary representation of an integer and returns the number of '1' bits it has (also known as the Hamming weight).",
        "constraints": "1 <= n <= 2^31 - 1",
        "starter": "class Solution {\n    public int hammingWeight(int n) {\n        // Write your code here\n        return 0;\n    }\n}",
        "driver": {
            "key": "intInIntOut",
            "method": "hammingWeight"
        },
        "testcases": [
            {
                "input": "11",
                "expected_output": "3",
                "is_sample": true
            },
            {
                "input": "128",
                "expected_output": "1",
                "is_sample": true
            },
            {
                "input": "2147483645",
                "expected_output": "30",
                "is_sample": false
            },
            {
                "input": "12352",
                "expected_output": "3",
                "is_sample": false
            },
            {
                "input": "24697",
                "expected_output": "7",
                "is_sample": false
            },
            {
                "input": "37042",
                "expected_output": "6",
                "is_sample": false
            },
            {
                "input": "49387",
                "expected_output": "8",
                "is_sample": false
            },
            {
                "input": "61732",
                "expected_output": "7",
                "is_sample": false
            },
            {
                "input": "74077",
                "expected_output": "8",
                "is_sample": false
            },
            {
                "input": "86422",
                "expected_output": "8",
                "is_sample": false
            },
            {
                "input": "98767",
                "expected_output": "9",
                "is_sample": false
            },
            {
                "input": "111112",
                "expected_output": "6",
                "is_sample": false
            },
            {
                "input": "123457",
                "expected_output": "7",
                "is_sample": false
            },
            {
                "input": "135802",
                "expected_output": "8",
                "is_sample": false
            },
            {
                "input": "148147",
                "expected_output": "8",
                "is_sample": false
            },
            {
                "input": "160492",
                "expected_output": "10",
                "is_sample": false
            },
            {
                "input": "172837",
                "expected_output": "8",
                "is_sample": false
            },
            {
                "input": "185182",
                "expected_output": "11",
                "is_sample": false
            },
            {
                "input": "197527",
                "expected_output": "9",
                "is_sample": false
            },
            {
                "input": "209872",
                "expected_output": "9",
                "is_sample": false
            },
            {
                "input": "222217",
                "expected_output": "7",
                "is_sample": false
            },
            {
                "input": "234562",
                "expected_output": "7",
                "is_sample": false
            },
            {
                "input": "246907",
                "expected_output": "11",
                "is_sample": false
            },
            {
                "input": "259252",
                "expected_output": "11",
                "is_sample": false
            },
            {
                "input": "271597",
                "expected_output": "9",
                "is_sample": false
            },
            {
                "input": "283942",
                "expected_output": "8",
                "is_sample": false
            },
            {
                "input": "296287",
                "expected_output": "10",
                "is_sample": false
            },
            {
                "input": "308632",
                "expected_output": "9",
                "is_sample": false
            },
            {
                "input": "320977",
                "expected_output": "10",
                "is_sample": false
            },
            {
                "input": "333322",
                "expected_output": "7",
                "is_sample": false
            },
            {
                "input": "345667",
                "expected_output": "8",
                "is_sample": false
            },
            {
                "input": "358012",
                "expected_output": "12",
                "is_sample": false
            },
            {
                "input": "370357",
                "expected_output": "11",
                "is_sample": false
            },
            {
                "input": "382702",
                "expected_output": "13",
                "is_sample": false
            },
            {
                "input": "395047",
                "expected_output": "9",
                "is_sample": false
            },
            {
                "input": "407392",
                "expected_output": "9",
                "is_sample": false
            },
            {
                "input": "419737",
                "expected_output": "11",
                "is_sample": false
            },
            {
                "input": "432082",
                "expected_output": "11",
                "is_sample": false
            },
            {
                "input": "444427",
                "expected_output": "8",
                "is_sample": false
            },
            {
                "input": "456772",
                "expected_output": "9",
                "is_sample": false
            },
            {
                "input": "469117",
                "expected_output": "11",
                "is_sample": false
            },
            {
                "input": "481462",
                "expected_output": "11",
                "is_sample": false
            },
            {
                "input": "493807",
                "expected_output": "12",
                "is_sample": false
            },
            {
                "input": "506152",
                "expected_output": "10",
                "is_sample": false
            },
            {
                "input": "518497",
                "expected_output": "11",
                "is_sample": false
            },
            {
                "input": "530842",
                "expected_output": "8",
                "is_sample": false
            },
            {
                "input": "543187",
                "expected_output": "9",
                "is_sample": false
            },
            {
                "input": "555532",
                "expected_output": "8",
                "is_sample": false
            },
            {
                "input": "567877",
                "expected_output": "8",
                "is_sample": false
            },
            {
                "input": "580222",
                "expected_output": "12",
                "is_sample": false
            },
            {
                "input": "592567",
                "expected_output": "10",
                "is_sample": false
            },
            {
                "input": "604912",
                "expected_output": "10",
                "is_sample": false
            },
            {
                "input": "617257",
                "expected_output": "10",
                "is_sample": false
            }
        ]
    },
    {
        "question_number": 28,
        "title": "Reverse Bits",
        "level": "Easy",
        "tags": [
            "Divide and Conquer",
            "Bit Manipulation"
        ],
        "description": "Reverse bits of a given 32 bits signed/unsigned integer.",
        "constraints": "The input must be a binary string or integer of length 32.",
        "starter": "class Solution {\n    public int reverseBits(int n) {\n        // Write your code here\n        return 0;\n    }\n}",
        "driver": {
            "key": "intInIntOut",
            "method": "reverseBits"
        },
        "testcases": [
            {
                "input": "43261596",
                "expected_output": "964176192",
                "is_sample": true
            },
            {
                "input": "98768",
                "expected_output": "193036288",
                "is_sample": false
            },
            {
                "input": "197533",
                "expected_output": "-1178550272",
                "is_sample": false
            },
            {
                "input": "296298",
                "expected_output": "1453400064",
                "is_sample": false
            },
            {
                "input": "395063",
                "expected_output": "-320839680",
                "is_sample": false
            },
            {
                "input": "493828",
                "expected_output": "546430976",
                "is_sample": false
            },
            {
                "input": "592593",
                "expected_output": "-1957654528",
                "is_sample": false
            },
            {
                "input": "691358",
                "expected_output": "2033274880",
                "is_sample": false
            },
            {
                "input": "790123",
                "expected_output": "-697290752",
                "is_sample": false
            },
            {
                "input": "888888",
                "expected_output": "470396928",
                "is_sample": false
            },
            {
                "input": "987653",
                "expected_output": "-1605832704",
                "is_sample": false
            },
            {
                "input": "1086418",
                "expected_output": "1271465984",
                "is_sample": false
            },
            {
                "input": "1185183",
                "expected_output": "-106412032",
                "is_sample": false
            },
            {
                "input": "1283948",
                "expected_output": "921290752",
                "is_sample": false
            },
            {
                "input": "1382713",
                "expected_output": "-1667717120",
                "is_sample": false
            },
            {
                "input": "1481478",
                "expected_output": "1624860672",
                "is_sample": false
            },
            {
                "input": "1580243",
                "expected_output": "-885516288",
                "is_sample": false
            },
            {
                "input": "1679008",
                "expected_output": "91854848",
                "is_sample": false
            },
            {
                "input": "1777773",
                "expected_output": "-1241196544",
                "is_sample": false
            },
            {
                "input": "1876538",
                "expected_output": "1548040192",
                "is_sample": false
            },
            {
                "input": "1975303",
                "expected_output": "-534480896",
                "is_sample": false
            },
            {
                "input": "2074068",
                "expected_output": "732297216",
                "is_sample": false
            },
            {
                "input": "2172833",
                "expected_output": "-2048621568",
                "is_sample": false
            },
            {
                "input": "2271598",
                "expected_output": "1989493760",
                "is_sample": false
            },
            {
                "input": "2370363",
                "expected_output": "-590076928",
                "is_sample": false
            },
            {
                "input": "2469128",
                "expected_output": "280339456",
                "is_sample": false
            },
            {
                "input": "2567893",
                "expected_output": "-1418402816",
                "is_sample": false
            },
            {
                "input": "2666658",
                "expected_output": "1158484992",
                "is_sample": false
            },
            {
                "input": "2765423",
                "expected_output": "-162769920",
                "is_sample": false
            },
            {
                "input": "2864188",
                "expected_output": "1009636352",
                "is_sample": false
            },
            {
                "input": "2962953",
                "expected_output": "-1871924224",
                "is_sample": false
            },
            {
                "input": "3061718",
                "expected_output": "1810723840",
                "is_sample": false
            },
            {
                "input": "3160483",
                "expected_output": "-979629056",
                "is_sample": false
            },
            {
                "input": "3259248",
                "expected_output": "249400320",
                "is_sample": false
            },
            {
                "input": "3358013",
                "expected_output": "-1128477696",
                "is_sample": false
            },
            {
                "input": "3456778",
                "expected_output": "1358769152",
                "is_sample": false
            },
            {
                "input": "3555543",
                "expected_output": "-352162816",
                "is_sample": false
            },
            {
                "input": "3654308",
                "expected_output": "625208320",
                "is_sample": false
            },
            {
                "input": "3753073",
                "expected_output": "-1910334464",
                "is_sample": false
            },
            {
                "input": "3851838",
                "expected_output": "2086886400",
                "is_sample": false
            },
            {
                "input": "3950603",
                "expected_output": "-804111360",
                "is_sample": false
            },
            {
                "input": "4049368",
                "expected_output": "462666752",
                "is_sample": false
            },
            {
                "input": "4148133",
                "expected_output": "-1512899584",
                "is_sample": false
            },
            {
                "input": "4246898",
                "expected_output": "1320354304",
                "is_sample": false
            },
            {
                "input": "4345663",
                "expected_output": "-51232256",
                "is_sample": false
            },
            {
                "input": "4444428",
                "expected_output": "814465536",
                "is_sample": false
            },
            {
                "input": "4543193",
                "expected_output": "-1689607680",
                "is_sample": false
            },
            {
                "input": "4641958",
                "expected_output": "1697341952",
                "is_sample": false
            },
            {
                "input": "4740723",
                "expected_output": "-831909376",
                "is_sample": false
            },
            {
                "input": "4839488",
                "expected_output": "35361280",
                "is_sample": false
            },
            {
                "input": "4938253",
                "expected_output": "-1336225280",
                "is_sample": false
            }
        ]
    },
    {
        "question_number": 29,
        "title": "First Unique Character in a String",
        "level": "Easy",
        "tags": [
            "Hash Table",
            "String",
            "Queue",
            "Counting"
        ],
        "description": "Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.",
        "constraints": "1 <= s.length <= 10^5\ns consists of only lowercase English letters.",
        "starter": "class Solution {\n    public int firstUniqChar(String s) {\n        // Write your code here\n        return -1;\n    }\n}",
        "driver": {
            "key": "stringToInt",
            "method": "firstUniqChar"
        },
        "testcases": [
            {
                "input": "leetcode",
                "expected_output": "0",
                "is_sample": true
            },
            {
                "input": "loveleetcode",
                "expected_output": "2",
                "is_sample": true
            },
            {
                "input": "aabb",
                "expected_output": "-1",
                "is_sample": false
            },
            {
                "input": "aabbccbddeeff",
                "expected_output": "-1",
                "is_sample": false
            },
            {
                "input": "aabbcccddeeff",
                "expected_output": "-1",
                "is_sample": false
            },
            {
                "input": "aabbccdddeeff",
                "expected_output": "-1",
                "is_sample": false
            },
            {
                "input": "aabbcceddeeff",
                "expected_output": "-1",
                "is_sample": false
            },
            {
                "input": "aabbccfddeeff",
                "expected_output": "-1",
                "is_sample": false
            },
            {
                "input": "aabbccgddeeff",
                "expected_output": "6",
                "is_sample": false
            },
            {
                "input": "aabbcchddeeff",
                "expected_output": "6",
                "is_sample": false
            },
            {
                "input": "aabbcciddeeff",
                "expected_output": "6",
                "is_sample": false
            },
            {
                "input": "aabbccjddeeff",
                "expected_output": "6",
                "is_sample": false
            },
            {
                "input": "aabbcckddeeff",
                "expected_output": "6",
                "is_sample": false
            },
            {
                "input": "aabbcclddeeff",
                "expected_output": "6",
                "is_sample": false
            },
            {
                "input": "aabbccmddeeff",
                "expected_output": "6",
                "is_sample": false
            },
            {
                "input": "aabbccnddeeff",
                "expected_output": "6",
                "is_sample": false
            },
            {
                "input": "aabbccoddeeff",
                "expected_output": "6",
                "is_sample": false
            },
            {
                "input": "aabbccpddeeff",
                "expected_output": "6",
                "is_sample": false
            },
            {
                "input": "aabbccqddeeff",
                "expected_output": "6",
                "is_sample": false
            },
            {
                "input": "aabbccrddeeff",
                "expected_output": "6",
                "is_sample": false
            },
            {
                "input": "aabbccsddeeff",
                "expected_output": "6",
                "is_sample": false
            },
            {
                "input": "aabbcctddeeff",
                "expected_output": "6",
                "is_sample": false
            },
            {
                "input": "aabbccuddeeff",
                "expected_output": "6",
                "is_sample": false
            },
            {
                "input": "aabbccvddeeff",
                "expected_output": "6",
                "is_sample": false
            },
            {
                "input": "aabbccwddeeff",
                "expected_output": "6",
                "is_sample": false
            },
            {
                "input": "aabbccxddeeff",
                "expected_output": "6",
                "is_sample": false
            },
            {
                "input": "aabbccyddeeff",
                "expected_output": "6",
                "is_sample": false
            },
            {
                "input": "aabbcczddeeff",
                "expected_output": "6",
                "is_sample": false
            },
            {
                "input": "aabbccaddeeff",
                "expected_output": "-1",
                "is_sample": false
            },
            {
                "input": "aabbccbddeeff",
                "expected_output": "-1",
                "is_sample": false
            },
            {
                "input": "aabbcccddeeff",
                "expected_output": "-1",
                "is_sample": false
            },
            {
                "input": "aabbccdddeeff",
                "expected_output": "-1",
                "is_sample": false
            },
            {
                "input": "aabbcceddeeff",
                "expected_output": "-1",
                "is_sample": false
            },
            {
                "input": "aabbccfddeeff",
                "expected_output": "-1",
                "is_sample": false
            },
            {
                "input": "aabbccgddeeff",
                "expected_output": "6",
                "is_sample": false
            },
            {
                "input": "aabbcchddeeff",
                "expected_output": "6",
                "is_sample": false
            },
            {
                "input": "aabbcciddeeff",
                "expected_output": "6",
                "is_sample": false
            },
            {
                "input": "aabbccjddeeff",
                "expected_output": "6",
                "is_sample": false
            },
            {
                "input": "aabbcckddeeff",
                "expected_output": "6",
                "is_sample": false
            },
            {
                "input": "aabbcclddeeff",
                "expected_output": "6",
                "is_sample": false
            },
            {
                "input": "aabbccmddeeff",
                "expected_output": "6",
                "is_sample": false
            },
            {
                "input": "aabbccnddeeff",
                "expected_output": "6",
                "is_sample": false
            },
            {
                "input": "aabbccoddeeff",
                "expected_output": "6",
                "is_sample": false
            },
            {
                "input": "aabbccpddeeff",
                "expected_output": "6",
                "is_sample": false
            },
            {
                "input": "aabbccqddeeff",
                "expected_output": "6",
                "is_sample": false
            },
            {
                "input": "aabbccrddeeff",
                "expected_output": "6",
                "is_sample": false
            },
            {
                "input": "aabbccsddeeff",
                "expected_output": "6",
                "is_sample": false
            },
            {
                "input": "aabbcctddeeff",
                "expected_output": "6",
                "is_sample": false
            },
            {
                "input": "aabbccuddeeff",
                "expected_output": "6",
                "is_sample": false
            },
            {
                "input": "aabbccvddeeff",
                "expected_output": "6",
                "is_sample": false
            },
            {
                "input": "aabbccwddeeff",
                "expected_output": "6",
                "is_sample": false
            },
            {
                "input": "aabbccxddeeff",
                "expected_output": "6",
                "is_sample": false
            },
            {
                "input": "aabbccyddeeff",
                "expected_output": "6",
                "is_sample": false
            }
        ]
    },
    {
        "question_number": 30,
        "title": "Find the Difference",
        "level": "Easy",
        "tags": [
            "Hash Table",
            "String",
            "Bit Manipulation",
            "Sorting"
        ],
        "description": "You are given two strings s and t. String t is generated by random shuffling string s and then add one more letter at a random position. Return the letter that was added to t.\n\nInput format (2 lines):\nLine 1: s\nLine 2: t",
        "constraints": "0 <= s.length <= 1000\nt.length == s.length + 1\ns and t consist of lowercase English letters.",
        "starter": "class Solution {\n    public char findTheDifference(String s, String t) {\n        // Write your code here\n        return ' ';\n    }\n}",
        "driver": {
            "key": "twoStringsToString",
            "method": "findTheDifference"
        },
        "testcases": [
            {
                "input": "abcd\nabcde",
                "expected_output": "e",
                "is_sample": true
            },
            {
                "input": "\ny",
                "expected_output": "y",
                "is_sample": true
            },
            {
                "input": "hello0\nhello0a",
                "expected_output": "a",
                "is_sample": false
            },
            {
                "input": "hello1\nhello1b",
                "expected_output": "b",
                "is_sample": false
            },
            {
                "input": "hello2\nhello2c",
                "expected_output": "c",
                "is_sample": false
            },
            {
                "input": "hello3\nhello3d",
                "expected_output": "d",
                "is_sample": false
            },
            {
                "input": "hello4\nhello4e",
                "expected_output": "e",
                "is_sample": false
            },
            {
                "input": "hello5\nhello5f",
                "expected_output": "f",
                "is_sample": false
            },
            {
                "input": "hello6\nhello6g",
                "expected_output": "g",
                "is_sample": false
            },
            {
                "input": "hello7\nhello7h",
                "expected_output": "h",
                "is_sample": false
            },
            {
                "input": "hello8\nhello8i",
                "expected_output": "i",
                "is_sample": false
            },
            {
                "input": "hello9\nhello9j",
                "expected_output": "j",
                "is_sample": false
            },
            {
                "input": "hello10\nhello10k",
                "expected_output": "k",
                "is_sample": false
            },
            {
                "input": "hello11\nhello11l",
                "expected_output": "l",
                "is_sample": false
            },
            {
                "input": "hello12\nhello12m",
                "expected_output": "m",
                "is_sample": false
            },
            {
                "input": "hello13\nhello13n",
                "expected_output": "n",
                "is_sample": false
            },
            {
                "input": "hello14\nhello14o",
                "expected_output": "o",
                "is_sample": false
            },
            {
                "input": "hello15\nhello15p",
                "expected_output": "p",
                "is_sample": false
            },
            {
                "input": "hello16\nhello16q",
                "expected_output": "q",
                "is_sample": false
            },
            {
                "input": "hello17\nhello17r",
                "expected_output": "r",
                "is_sample": false
            },
            {
                "input": "hello18\nhello18s",
                "expected_output": "s",
                "is_sample": false
            },
            {
                "input": "hello19\nhello19t",
                "expected_output": "t",
                "is_sample": false
            },
            {
                "input": "hello20\nhello20u",
                "expected_output": "u",
                "is_sample": false
            },
            {
                "input": "hello21\nhello21v",
                "expected_output": "v",
                "is_sample": false
            },
            {
                "input": "hello22\nhello22w",
                "expected_output": "w",
                "is_sample": false
            },
            {
                "input": "hello23\nhello23x",
                "expected_output": "x",
                "is_sample": false
            },
            {
                "input": "hello24\nhello24y",
                "expected_output": "y",
                "is_sample": false
            },
            {
                "input": "hello25\nhello25z",
                "expected_output": "z",
                "is_sample": false
            },
            {
                "input": "hello26\nhello26a",
                "expected_output": "a",
                "is_sample": false
            },
            {
                "input": "hello27\nhello27b",
                "expected_output": "b",
                "is_sample": false
            },
            {
                "input": "hello28\nhello28c",
                "expected_output": "c",
                "is_sample": false
            },
            {
                "input": "hello29\nhello29d",
                "expected_output": "d",
                "is_sample": false
            },
            {
                "input": "hello30\nhello30e",
                "expected_output": "e",
                "is_sample": false
            },
            {
                "input": "hello31\nhello31f",
                "expected_output": "f",
                "is_sample": false
            },
            {
                "input": "hello32\nhello32g",
                "expected_output": "g",
                "is_sample": false
            },
            {
                "input": "hello33\nhello33h",
                "expected_output": "h",
                "is_sample": false
            },
            {
                "input": "hello34\nhello34i",
                "expected_output": "i",
                "is_sample": false
            },
            {
                "input": "hello35\nhello35j",
                "expected_output": "j",
                "is_sample": false
            },
            {
                "input": "hello36\nhello36k",
                "expected_output": "k",
                "is_sample": false
            },
            {
                "input": "hello37\nhello37l",
                "expected_output": "l",
                "is_sample": false
            },
            {
                "input": "hello38\nhello38m",
                "expected_output": "m",
                "is_sample": false
            },
            {
                "input": "hello39\nhello39n",
                "expected_output": "n",
                "is_sample": false
            },
            {
                "input": "hello40\nhello40o",
                "expected_output": "o",
                "is_sample": false
            },
            {
                "input": "hello41\nhello41p",
                "expected_output": "p",
                "is_sample": false
            },
            {
                "input": "hello42\nhello42q",
                "expected_output": "q",
                "is_sample": false
            },
            {
                "input": "hello43\nhello43r",
                "expected_output": "r",
                "is_sample": false
            },
            {
                "input": "hello44\nhello44s",
                "expected_output": "s",
                "is_sample": false
            },
            {
                "input": "hello45\nhello45t",
                "expected_output": "t",
                "is_sample": false
            },
            {
                "input": "hello46\nhello46u",
                "expected_output": "u",
                "is_sample": false
            },
            {
                "input": "hello47\nhello47v",
                "expected_output": "v",
                "is_sample": false
            },
            {
                "input": "hello48\nhello48w",
                "expected_output": "w",
                "is_sample": false
            },
            {
                "input": "hello49\nhello49x",
                "expected_output": "x",
                "is_sample": false
            }
        ]
    },
    {
        "question_number": 31,
        "title": "Is Subsequence",
        "level": "Easy",
        "tags": [
            "Two Pointers",
            "String",
            "Dynamic Programming"
        ],
        "description": "Given two strings s and t, return true if s is a subsequence of t, or false otherwise.\n\nInput format (2 lines):\nLine 1: s\nLine 2: t",
        "constraints": "0 <= s.length <= 100\n0 <= t.length <= 10^4\ns and t consist only of lowercase English letters.",
        "starter": "class Solution {\n    public boolean isSubsequence(String s, String t) {\n        // Write your code here\n        return false;\n    }\n}",
        "driver": {
            "key": "twoStringsToBoolean",
            "method": "isSubsequence"
        },
        "testcases": [
            {
                "input": "abc\nahbgdc",
                "expected_output": "true",
                "is_sample": true
            },
            {
                "input": "axc\nahbgdc",
                "expected_output": "false",
                "is_sample": true
            },
            {
                "input": "abc1\nxyz",
                "expected_output": "false",
                "is_sample": false
            },
            {
                "input": "abc2\nxaaybcz2",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "abc3\nxyz",
                "expected_output": "false",
                "is_sample": false
            },
            {
                "input": "abc4\nxaaybcz4",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "abc5\nxyz",
                "expected_output": "false",
                "is_sample": false
            },
            {
                "input": "abc6\nxaaybcz6",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "abc7\nxyz",
                "expected_output": "false",
                "is_sample": false
            },
            {
                "input": "abc8\nxaaybcz8",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "abc9\nxyz",
                "expected_output": "false",
                "is_sample": false
            },
            {
                "input": "abc10\nxaaybcz10",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "abc11\nxyz",
                "expected_output": "false",
                "is_sample": false
            },
            {
                "input": "abc12\nxaaybcz12",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "abc13\nxyz",
                "expected_output": "false",
                "is_sample": false
            },
            {
                "input": "abc14\nxaaybcz14",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "abc15\nxyz",
                "expected_output": "false",
                "is_sample": false
            },
            {
                "input": "abc16\nxaaybcz16",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "abc17\nxyz",
                "expected_output": "false",
                "is_sample": false
            },
            {
                "input": "abc18\nxaaybcz18",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "abc19\nxyz",
                "expected_output": "false",
                "is_sample": false
            },
            {
                "input": "abc20\nxaaybcz20",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "abc21\nxyz",
                "expected_output": "false",
                "is_sample": false
            },
            {
                "input": "abc22\nxaaybcz22",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "abc23\nxyz",
                "expected_output": "false",
                "is_sample": false
            },
            {
                "input": "abc24\nxaaybcz24",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "abc25\nxyz",
                "expected_output": "false",
                "is_sample": false
            },
            {
                "input": "abc26\nxaaybcz26",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "abc27\nxyz",
                "expected_output": "false",
                "is_sample": false
            },
            {
                "input": "abc28\nxaaybcz28",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "abc29\nxyz",
                "expected_output": "false",
                "is_sample": false
            },
            {
                "input": "abc30\nxaaybcz30",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "abc31\nxyz",
                "expected_output": "false",
                "is_sample": false
            },
            {
                "input": "abc32\nxaaybcz32",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "abc33\nxyz",
                "expected_output": "false",
                "is_sample": false
            },
            {
                "input": "abc34\nxaaybcz34",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "abc35\nxyz",
                "expected_output": "false",
                "is_sample": false
            },
            {
                "input": "abc36\nxaaybcz36",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "abc37\nxyz",
                "expected_output": "false",
                "is_sample": false
            },
            {
                "input": "abc38\nxaaybcz38",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "abc39\nxyz",
                "expected_output": "false",
                "is_sample": false
            },
            {
                "input": "abc40\nxaaybcz40",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "abc41\nxyz",
                "expected_output": "false",
                "is_sample": false
            },
            {
                "input": "abc42\nxaaybcz42",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "abc43\nxyz",
                "expected_output": "false",
                "is_sample": false
            },
            {
                "input": "abc44\nxaaybcz44",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "abc45\nxyz",
                "expected_output": "false",
                "is_sample": false
            },
            {
                "input": "abc46\nxaaybcz46",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "abc47\nxyz",
                "expected_output": "false",
                "is_sample": false
            },
            {
                "input": "abc48\nxaaybcz48",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "abc49\nxyz",
                "expected_output": "false",
                "is_sample": false
            },
            {
                "input": "abc50\nxaaybcz50",
                "expected_output": "true",
                "is_sample": false
            }
        ]
    },
    {
        "question_number": 32,
        "title": "Assign Cookies",
        "level": "Easy",
        "tags": [
            "Array",
            "Two Pointers",
            "Greedy",
            "Sorting"
        ],
        "description": "Assume you are an awesome parent and want to give your children some cookies. But, you should give each child at most one cookie.\n\nEach child i has a greed factor g[i], and each cookie j has a size s[j]. Return the maximum number of children you can content.\n\nInput format (2 lines):\nLine 1: g as JSON array\nLine 2: s as JSON array",
        "constraints": "1 <= g.length <= 3 * 10^4\n0 <= s.length <= 3 * 10^4\n1 <= g[i], s[j] <= 2^31 - 1",
        "starter": "class Solution {\n    public int findContentChildren(int[] g, int[] s) {\n        // Write your code here\n        return 0;\n    }\n}",
        "driver": {
            "key": "twoIntArrayToInt",
            "method": "findContentChildren"
        },
        "testcases": [
            {
                "input": "[1,2,3]\n[1,1]",
                "expected_output": "1",
                "is_sample": true
            },
            {
                "input": "[1,2]\n[1,2,3]",
                "expected_output": "2",
                "is_sample": true
            },
            {
                "input": "[1,3,5]\n[2,4]",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "[2,4,6]\n[3,5]",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "[3,5,7]\n[4,6]",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "[4,6,8]\n[5,7]",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "[5,7,9]\n[6,8]",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "[6,8,10]\n[7,9]",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "[7,9,11]\n[8,10]",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "[8,10,12]\n[9,11]",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "[9,11,13]\n[10,12]",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "[10,12,14]\n[11,13]",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "[11,13,15]\n[12,14]",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "[12,14,16]\n[13,15]",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "[13,15,17]\n[14,16]",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "[14,16,18]\n[15,17]",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "[15,17,19]\n[16,18]",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "[16,18,20]\n[17,19]",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "[17,19,21]\n[18,20]",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "[18,20,22]\n[19,21]",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "[19,21,23]\n[20,22]",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "[20,22,24]\n[21,23]",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "[21,23,25]\n[22,24]",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "[22,24,26]\n[23,25]",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "[23,25,27]\n[24,26]",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "[24,26,28]\n[25,27]",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "[25,27,29]\n[26,28]",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "[26,28,30]\n[27,29]",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "[27,29,31]\n[28,30]",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "[28,30,32]\n[29,31]",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "[29,31,33]\n[30,32]",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "[30,32,34]\n[31,33]",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "[31,33,35]\n[32,34]",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "[32,34,36]\n[33,35]",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "[33,35,37]\n[34,36]",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "[34,36,38]\n[35,37]",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "[35,37,39]\n[36,38]",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "[36,38,40]\n[37,39]",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "[37,39,41]\n[38,40]",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "[38,40,42]\n[39,41]",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "[39,41,43]\n[40,42]",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "[40,42,44]\n[41,43]",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "[41,43,45]\n[42,44]",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "[42,44,46]\n[43,45]",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "[43,45,47]\n[44,46]",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "[44,46,48]\n[45,47]",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "[45,47,49]\n[46,48]",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "[46,48,50]\n[47,49]",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "[47,49,51]\n[48,50]",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "[48,50,52]\n[49,51]",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "[49,51,53]\n[50,52]",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "[50,52,54]\n[51,53]",
                "expected_output": "2",
                "is_sample": false
            }
        ]
    },
    {
        "question_number": 33,
        "title": "Fibonacci Number",
        "level": "Easy",
        "tags": [
            "Math",
            "Dynamic Programming",
            "Recursion",
            "Memoization"
        ],
        "description": "The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence, such that each number is the sum of the two preceding ones, starting from 0 and 1. Given n, calculate F(n).",
        "constraints": "0 <= n <= 30",
        "starter": "class Solution {\n    public int fib(int n) {\n        // Write your code here\n        return 0;\n    }\n}",
        "driver": {
            "key": "intInIntOut",
            "method": "fib"
        },
        "testcases": [
            {
                "input": "2",
                "expected_output": "1",
                "is_sample": true
            },
            {
                "input": "3",
                "expected_output": "2",
                "is_sample": true
            },
            {
                "input": "4",
                "expected_output": "3",
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
                "is_sample": true
            },
            {
                "input": "2",
                "expected_output": "1",
                "is_sample": true
            },
            {
                "input": "3",
                "expected_output": "2",
                "is_sample": true
            },
            {
                "input": "4",
                "expected_output": "3",
                "is_sample": true
            },
            {
                "input": "5",
                "expected_output": "5",
                "is_sample": false
            },
            {
                "input": "6",
                "expected_output": "8",
                "is_sample": false
            },
            {
                "input": "7",
                "expected_output": "13",
                "is_sample": false
            },
            {
                "input": "8",
                "expected_output": "21",
                "is_sample": false
            },
            {
                "input": "9",
                "expected_output": "34",
                "is_sample": false
            },
            {
                "input": "10",
                "expected_output": "55",
                "is_sample": false
            },
            {
                "input": "11",
                "expected_output": "89",
                "is_sample": false
            },
            {
                "input": "12",
                "expected_output": "144",
                "is_sample": false
            },
            {
                "input": "13",
                "expected_output": "233",
                "is_sample": false
            },
            {
                "input": "14",
                "expected_output": "377",
                "is_sample": false
            },
            {
                "input": "15",
                "expected_output": "610",
                "is_sample": false
            },
            {
                "input": "16",
                "expected_output": "987",
                "is_sample": false
            },
            {
                "input": "17",
                "expected_output": "1597",
                "is_sample": false
            },
            {
                "input": "18",
                "expected_output": "2584",
                "is_sample": false
            },
            {
                "input": "19",
                "expected_output": "4181",
                "is_sample": false
            },
            {
                "input": "20",
                "expected_output": "6765",
                "is_sample": false
            },
            {
                "input": "21",
                "expected_output": "10946",
                "is_sample": false
            },
            {
                "input": "22",
                "expected_output": "17711",
                "is_sample": false
            },
            {
                "input": "23",
                "expected_output": "28657",
                "is_sample": false
            },
            {
                "input": "24",
                "expected_output": "46368",
                "is_sample": false
            },
            {
                "input": "25",
                "expected_output": "75025",
                "is_sample": false
            },
            {
                "input": "26",
                "expected_output": "121393",
                "is_sample": false
            },
            {
                "input": "27",
                "expected_output": "196418",
                "is_sample": false
            },
            {
                "input": "28",
                "expected_output": "317811",
                "is_sample": false
            },
            {
                "input": "29",
                "expected_output": "514229",
                "is_sample": false
            },
            {
                "input": "30",
                "expected_output": "832040",
                "is_sample": false
            },
            {
                "input": "1",
                "expected_output": "1",
                "is_sample": false
            },
            {
                "input": "2",
                "expected_output": "1",
                "is_sample": false
            },
            {
                "input": "3",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "4",
                "expected_output": "3",
                "is_sample": false
            },
            {
                "input": "5",
                "expected_output": "5",
                "is_sample": false
            },
            {
                "input": "6",
                "expected_output": "8",
                "is_sample": false
            },
            {
                "input": "7",
                "expected_output": "13",
                "is_sample": false
            },
            {
                "input": "8",
                "expected_output": "21",
                "is_sample": false
            },
            {
                "input": "9",
                "expected_output": "34",
                "is_sample": false
            },
            {
                "input": "10",
                "expected_output": "55",
                "is_sample": false
            },
            {
                "input": "11",
                "expected_output": "89",
                "is_sample": false
            },
            {
                "input": "12",
                "expected_output": "144",
                "is_sample": false
            },
            {
                "input": "13",
                "expected_output": "233",
                "is_sample": false
            },
            {
                "input": "14",
                "expected_output": "377",
                "is_sample": false
            },
            {
                "input": "15",
                "expected_output": "610",
                "is_sample": false
            },
            {
                "input": "16",
                "expected_output": "987",
                "is_sample": false
            },
            {
                "input": "17",
                "expected_output": "1597",
                "is_sample": false
            },
            {
                "input": "18",
                "expected_output": "2584",
                "is_sample": false
            },
            {
                "input": "19",
                "expected_output": "4181",
                "is_sample": false
            },
            {
                "input": "20",
                "expected_output": "6765",
                "is_sample": false
            }
        ]
    },
    {
        "question_number": 34,
        "title": "Binary Search",
        "level": "Easy",
        "tags": [
            "Array",
            "Binary Search"
        ],
        "description": "Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.\n\nInput format (2 lines):\nLine 1: nums as JSON array\nLine 2: target",
        "constraints": "1 <= nums.length <= 10^4\n-10^4 < nums[i], target < 10^4\nAll the integers in nums are unique.\nnums is sorted in ascending order.",
        "starter": "class Solution {\n    public int search(int[] nums, int target) {\n        // Write your code here\n        return -1;\n    }\n}",
        "driver": {
            "key": "intArrayAndTargetToInt",
            "method": "search"
        },
        "testcases": [
            {
                "input": "[-1,0,3,5,9,12]\n9",
                "expected_output": "4",
                "is_sample": true
            },
            {
                "input": "[-1,0,3,5,9,12]\n2",
                "expected_output": "-1",
                "is_sample": true
            },
            {
                "input": "[2,4,6,8,10]\n999999",
                "expected_output": "-1",
                "is_sample": false
            },
            {
                "input": "[4,6,8,10,12]\n8",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "[6,8,10,12,14]\n999999",
                "expected_output": "-1",
                "is_sample": false
            },
            {
                "input": "[8,10,12,14,16]\n12",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "[10,12,14,16,18]\n999999",
                "expected_output": "-1",
                "is_sample": false
            },
            {
                "input": "[12,14,16,18,20]\n16",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "[14,16,18,20,22]\n999999",
                "expected_output": "-1",
                "is_sample": false
            },
            {
                "input": "[16,18,20,22,24]\n20",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "[18,20,22,24,26]\n999999",
                "expected_output": "-1",
                "is_sample": false
            },
            {
                "input": "[20,22,24,26,28]\n24",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "[22,24,26,28,30]\n999999",
                "expected_output": "-1",
                "is_sample": false
            },
            {
                "input": "[24,26,28,30,32]\n28",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "[26,28,30,32,34]\n999999",
                "expected_output": "-1",
                "is_sample": false
            },
            {
                "input": "[28,30,32,34,36]\n32",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "[30,32,34,36,38]\n999999",
                "expected_output": "-1",
                "is_sample": false
            },
            {
                "input": "[32,34,36,38,40]\n36",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "[34,36,38,40,42]\n999999",
                "expected_output": "-1",
                "is_sample": false
            },
            {
                "input": "[36,38,40,42,44]\n40",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "[38,40,42,44,46]\n999999",
                "expected_output": "-1",
                "is_sample": false
            },
            {
                "input": "[40,42,44,46,48]\n44",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "[42,44,46,48,50]\n999999",
                "expected_output": "-1",
                "is_sample": false
            },
            {
                "input": "[44,46,48,50,52]\n48",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "[46,48,50,52,54]\n999999",
                "expected_output": "-1",
                "is_sample": false
            },
            {
                "input": "[48,50,52,54,56]\n52",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "[50,52,54,56,58]\n999999",
                "expected_output": "-1",
                "is_sample": false
            },
            {
                "input": "[52,54,56,58,60]\n56",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "[54,56,58,60,62]\n999999",
                "expected_output": "-1",
                "is_sample": false
            },
            {
                "input": "[56,58,60,62,64]\n60",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "[58,60,62,64,66]\n999999",
                "expected_output": "-1",
                "is_sample": false
            },
            {
                "input": "[60,62,64,66,68]\n64",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "[62,64,66,68,70]\n999999",
                "expected_output": "-1",
                "is_sample": false
            },
            {
                "input": "[64,66,68,70,72]\n68",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "[66,68,70,72,74]\n999999",
                "expected_output": "-1",
                "is_sample": false
            },
            {
                "input": "[68,70,72,74,76]\n72",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "[70,72,74,76,78]\n999999",
                "expected_output": "-1",
                "is_sample": false
            },
            {
                "input": "[72,74,76,78,80]\n76",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "[74,76,78,80,82]\n999999",
                "expected_output": "-1",
                "is_sample": false
            },
            {
                "input": "[76,78,80,82,84]\n80",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "[78,80,82,84,86]\n999999",
                "expected_output": "-1",
                "is_sample": false
            },
            {
                "input": "[80,82,84,86,88]\n84",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "[82,84,86,88,90]\n999999",
                "expected_output": "-1",
                "is_sample": false
            },
            {
                "input": "[84,86,88,90,92]\n88",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "[86,88,90,92,94]\n999999",
                "expected_output": "-1",
                "is_sample": false
            },
            {
                "input": "[88,90,92,94,96]\n92",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "[90,92,94,96,98]\n999999",
                "expected_output": "-1",
                "is_sample": false
            },
            {
                "input": "[92,94,96,98,100]\n96",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "[94,96,98,100,102]\n999999",
                "expected_output": "-1",
                "is_sample": false
            },
            {
                "input": "[96,98,100,102,104]\n100",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "[98,100,102,104,106]\n999999",
                "expected_output": "-1",
                "is_sample": false
            },
            {
                "input": "[100,102,104,106,108]\n104",
                "expected_output": "2",
                "is_sample": false
            }
        ]
    },
    {
        "question_number": 35,
        "title": "Squares of a Sorted Array",
        "level": "Easy",
        "tags": [
            "Array",
            "Two Pointers",
            "Sorting"
        ],
        "description": "Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.",
        "constraints": "1 <= nums.length <= 10^4\n-10^4 <= nums[i] <= 10^4\nnums is sorted in non-decreasing order.",
        "starter": "class Solution {\n    public int[] sortedSquares(int[] nums) {\n        // Write your code here\n        return new int[]{};\n    }\n}",
        "driver": {
            "key": "intArrayToIntArray",
            "method": "sortedSquares"
        },
        "testcases": [
            {
                "input": "[-4,-1,0,3,10]",
                "expected_output": "[0,1,9,16,100]",
                "is_sample": true
            },
            {
                "input": "[-7,-3,2,3,11]",
                "expected_output": "[4,9,9,49,121]",
                "is_sample": true
            },
            {
                "input": "[-3,-1,0,2,4]",
                "expected_output": "[0,1,4,9,16]",
                "is_sample": false
            },
            {
                "input": "[-6,-2,0,4,8]",
                "expected_output": "[0,4,16,36,64]",
                "is_sample": false
            },
            {
                "input": "[-9,-3,0,6,12]",
                "expected_output": "[0,9,36,81,144]",
                "is_sample": false
            },
            {
                "input": "[-12,-4,0,8,16]",
                "expected_output": "[0,16,64,144,256]",
                "is_sample": false
            },
            {
                "input": "[-15,-5,0,10,20]",
                "expected_output": "[0,25,100,225,400]",
                "is_sample": false
            },
            {
                "input": "[-18,-6,0,12,24]",
                "expected_output": "[0,36,144,324,576]",
                "is_sample": false
            },
            {
                "input": "[-21,-7,0,14,28]",
                "expected_output": "[0,49,196,441,784]",
                "is_sample": false
            },
            {
                "input": "[-24,-8,0,16,32]",
                "expected_output": "[0,64,256,576,1024]",
                "is_sample": false
            },
            {
                "input": "[-27,-9,0,18,36]",
                "expected_output": "[0,81,324,729,1296]",
                "is_sample": false
            },
            {
                "input": "[-30,-10,0,20,40]",
                "expected_output": "[0,100,400,900,1600]",
                "is_sample": false
            },
            {
                "input": "[-33,-11,0,22,44]",
                "expected_output": "[0,121,484,1089,1936]",
                "is_sample": false
            },
            {
                "input": "[-36,-12,0,24,48]",
                "expected_output": "[0,144,576,1296,2304]",
                "is_sample": false
            },
            {
                "input": "[-39,-13,0,26,52]",
                "expected_output": "[0,169,676,1521,2704]",
                "is_sample": false
            },
            {
                "input": "[-42,-14,0,28,56]",
                "expected_output": "[0,196,784,1764,3136]",
                "is_sample": false
            },
            {
                "input": "[-45,-15,0,30,60]",
                "expected_output": "[0,225,900,2025,3600]",
                "is_sample": false
            },
            {
                "input": "[-48,-16,0,32,64]",
                "expected_output": "[0,256,1024,2304,4096]",
                "is_sample": false
            },
            {
                "input": "[-51,-17,0,34,68]",
                "expected_output": "[0,289,1156,2601,4624]",
                "is_sample": false
            },
            {
                "input": "[-54,-18,0,36,72]",
                "expected_output": "[0,324,1296,2916,5184]",
                "is_sample": false
            },
            {
                "input": "[-57,-19,0,38,76]",
                "expected_output": "[0,361,1444,3249,5776]",
                "is_sample": false
            },
            {
                "input": "[-60,-20,0,40,80]",
                "expected_output": "[0,400,1600,3600,6400]",
                "is_sample": false
            },
            {
                "input": "[-63,-21,0,42,84]",
                "expected_output": "[0,441,1764,3969,7056]",
                "is_sample": false
            },
            {
                "input": "[-66,-22,0,44,88]",
                "expected_output": "[0,484,1936,4356,7744]",
                "is_sample": false
            },
            {
                "input": "[-69,-23,0,46,92]",
                "expected_output": "[0,529,2116,4761,8464]",
                "is_sample": false
            },
            {
                "input": "[-72,-24,0,48,96]",
                "expected_output": "[0,576,2304,5184,9216]",
                "is_sample": false
            },
            {
                "input": "[-75,-25,0,50,100]",
                "expected_output": "[0,625,2500,5625,10000]",
                "is_sample": false
            },
            {
                "input": "[-78,-26,0,52,104]",
                "expected_output": "[0,676,2704,6084,10816]",
                "is_sample": false
            },
            {
                "input": "[-81,-27,0,54,108]",
                "expected_output": "[0,729,2916,6561,11664]",
                "is_sample": false
            },
            {
                "input": "[-84,-28,0,56,112]",
                "expected_output": "[0,784,3136,7056,12544]",
                "is_sample": false
            },
            {
                "input": "[-87,-29,0,58,116]",
                "expected_output": "[0,841,3364,7569,13456]",
                "is_sample": false
            },
            {
                "input": "[-90,-30,0,60,120]",
                "expected_output": "[0,900,3600,8100,14400]",
                "is_sample": false
            },
            {
                "input": "[-93,-31,0,62,124]",
                "expected_output": "[0,961,3844,8649,15376]",
                "is_sample": false
            },
            {
                "input": "[-96,-32,0,64,128]",
                "expected_output": "[0,1024,4096,9216,16384]",
                "is_sample": false
            },
            {
                "input": "[-99,-33,0,66,132]",
                "expected_output": "[0,1089,4356,9801,17424]",
                "is_sample": false
            },
            {
                "input": "[-102,-34,0,68,136]",
                "expected_output": "[0,1156,4624,10404,18496]",
                "is_sample": false
            },
            {
                "input": "[-105,-35,0,70,140]",
                "expected_output": "[0,1225,4900,11025,19600]",
                "is_sample": false
            },
            {
                "input": "[-108,-36,0,72,144]",
                "expected_output": "[0,1296,5184,11664,20736]",
                "is_sample": false
            },
            {
                "input": "[-111,-37,0,74,148]",
                "expected_output": "[0,1369,5476,12321,21904]",
                "is_sample": false
            },
            {
                "input": "[-114,-38,0,76,152]",
                "expected_output": "[0,1444,5776,12996,23104]",
                "is_sample": false
            },
            {
                "input": "[-117,-39,0,78,156]",
                "expected_output": "[0,1521,6084,13689,24336]",
                "is_sample": false
            },
            {
                "input": "[-120,-40,0,80,160]",
                "expected_output": "[0,1600,6400,14400,25600]",
                "is_sample": false
            },
            {
                "input": "[-123,-41,0,82,164]",
                "expected_output": "[0,1681,6724,15129,26896]",
                "is_sample": false
            },
            {
                "input": "[-126,-42,0,84,168]",
                "expected_output": "[0,1764,7056,15876,28224]",
                "is_sample": false
            },
            {
                "input": "[-129,-43,0,86,172]",
                "expected_output": "[0,1849,7396,16641,29584]",
                "is_sample": false
            },
            {
                "input": "[-132,-44,0,88,176]",
                "expected_output": "[0,1936,7744,17424,30976]",
                "is_sample": false
            },
            {
                "input": "[-135,-45,0,90,180]",
                "expected_output": "[0,2025,8100,18225,32400]",
                "is_sample": false
            },
            {
                "input": "[-138,-46,0,92,184]",
                "expected_output": "[0,2116,8464,19044,33856]",
                "is_sample": false
            },
            {
                "input": "[-141,-47,0,94,188]",
                "expected_output": "[0,2209,8836,19881,35344]",
                "is_sample": false
            },
            {
                "input": "[-144,-48,0,96,192]",
                "expected_output": "[0,2304,9216,20736,36864]",
                "is_sample": false
            },
            {
                "input": "[-147,-49,0,98,196]",
                "expected_output": "[0,2401,9604,21609,38416]",
                "is_sample": false
            },
            {
                "input": "[-150,-50,0,100,200]",
                "expected_output": "[0,2500,10000,22500,40000]",
                "is_sample": false
            }
        ]
    },
    {
        "question_number": 36,
        "title": "Jewels and Stones",
        "level": "Easy",
        "tags": [
            "Hash Table",
            "String"
        ],
        "description": "You're given strings jewels representing the types of stones that are jewels, and stones representing the stones you have. Each character in stones is a type of stone you have. You want to know how many of the stones you have are also jewels.\n\nLetters are case sensitive, so \"a\" is considered a different type of stone from \"A\".\n\nInput format (2 lines):\nLine 1: jewels\nLine 2: stones",
        "constraints": "1 <= jewels.length, stones.length <= 50\njewels and stones consist of only English letters.\nAll the characters of jewels are unique.",
        "starter": "class Solution {\n    public int numJewelsInStones(String jewels, String stones) {\n        // Write your code here\n        return 0;\n    }\n}",
        "driver": {
            "key": "twoStringsToInt",
            "method": "numJewelsInStones"
        },
        "testcases": [
            {
                "input": "aA\naAAbbbb",
                "expected_output": "3",
                "is_sample": true
            },
            {
                "input": "z\nZZ",
                "expected_output": "0",
                "is_sample": true
            },
            {
                "input": "abB\naabbccddB",
                "expected_output": "5",
                "is_sample": false
            },
            {
                "input": "abC\naabbccddC",
                "expected_output": "5",
                "is_sample": false
            },
            {
                "input": "abD\naabbccddD",
                "expected_output": "5",
                "is_sample": false
            },
            {
                "input": "abE\naabbccddE",
                "expected_output": "5",
                "is_sample": false
            },
            {
                "input": "abF\naabbccddF",
                "expected_output": "5",
                "is_sample": false
            },
            {
                "input": "abG\naabbccddG",
                "expected_output": "5",
                "is_sample": false
            },
            {
                "input": "abH\naabbccddH",
                "expected_output": "5",
                "is_sample": false
            },
            {
                "input": "abI\naabbccddI",
                "expected_output": "5",
                "is_sample": false
            },
            {
                "input": "abJ\naabbccddJ",
                "expected_output": "5",
                "is_sample": false
            },
            {
                "input": "abK\naabbccddK",
                "expected_output": "5",
                "is_sample": false
            },
            {
                "input": "abL\naabbccddL",
                "expected_output": "5",
                "is_sample": false
            },
            {
                "input": "abM\naabbccddM",
                "expected_output": "5",
                "is_sample": false
            },
            {
                "input": "abN\naabbccddN",
                "expected_output": "5",
                "is_sample": false
            },
            {
                "input": "abO\naabbccddO",
                "expected_output": "5",
                "is_sample": false
            },
            {
                "input": "abP\naabbccddP",
                "expected_output": "5",
                "is_sample": false
            },
            {
                "input": "abQ\naabbccddQ",
                "expected_output": "5",
                "is_sample": false
            },
            {
                "input": "abR\naabbccddR",
                "expected_output": "5",
                "is_sample": false
            },
            {
                "input": "abS\naabbccddS",
                "expected_output": "5",
                "is_sample": false
            },
            {
                "input": "abT\naabbccddT",
                "expected_output": "5",
                "is_sample": false
            },
            {
                "input": "abU\naabbccddU",
                "expected_output": "5",
                "is_sample": false
            },
            {
                "input": "abV\naabbccddV",
                "expected_output": "5",
                "is_sample": false
            },
            {
                "input": "abW\naabbccddW",
                "expected_output": "5",
                "is_sample": false
            },
            {
                "input": "abX\naabbccddX",
                "expected_output": "5",
                "is_sample": false
            },
            {
                "input": "abY\naabbccddY",
                "expected_output": "5",
                "is_sample": false
            },
            {
                "input": "abZ\naabbccddZ",
                "expected_output": "5",
                "is_sample": false
            },
            {
                "input": "abA\naabbccddA",
                "expected_output": "5",
                "is_sample": false
            },
            {
                "input": "abB\naabbccddB",
                "expected_output": "5",
                "is_sample": false
            },
            {
                "input": "abC\naabbccddC",
                "expected_output": "5",
                "is_sample": false
            },
            {
                "input": "abD\naabbccddD",
                "expected_output": "5",
                "is_sample": false
            },
            {
                "input": "abE\naabbccddE",
                "expected_output": "5",
                "is_sample": false
            },
            {
                "input": "abF\naabbccddF",
                "expected_output": "5",
                "is_sample": false
            },
            {
                "input": "abG\naabbccddG",
                "expected_output": "5",
                "is_sample": false
            },
            {
                "input": "abH\naabbccddH",
                "expected_output": "5",
                "is_sample": false
            },
            {
                "input": "abI\naabbccddI",
                "expected_output": "5",
                "is_sample": false
            },
            {
                "input": "abJ\naabbccddJ",
                "expected_output": "5",
                "is_sample": false
            },
            {
                "input": "abK\naabbccddK",
                "expected_output": "5",
                "is_sample": false
            },
            {
                "input": "abL\naabbccddL",
                "expected_output": "5",
                "is_sample": false
            },
            {
                "input": "abM\naabbccddM",
                "expected_output": "5",
                "is_sample": false
            },
            {
                "input": "abN\naabbccddN",
                "expected_output": "5",
                "is_sample": false
            },
            {
                "input": "abO\naabbccddO",
                "expected_output": "5",
                "is_sample": false
            },
            {
                "input": "abP\naabbccddP",
                "expected_output": "5",
                "is_sample": false
            },
            {
                "input": "abQ\naabbccddQ",
                "expected_output": "5",
                "is_sample": false
            },
            {
                "input": "abR\naabbccddR",
                "expected_output": "5",
                "is_sample": false
            },
            {
                "input": "abS\naabbccddS",
                "expected_output": "5",
                "is_sample": false
            },
            {
                "input": "abT\naabbccddT",
                "expected_output": "5",
                "is_sample": false
            },
            {
                "input": "abU\naabbccddU",
                "expected_output": "5",
                "is_sample": false
            },
            {
                "input": "abV\naabbccddV",
                "expected_output": "5",
                "is_sample": false
            },
            {
                "input": "abW\naabbccddW",
                "expected_output": "5",
                "is_sample": false
            },
            {
                "input": "abX\naabbccddX",
                "expected_output": "5",
                "is_sample": false
            },
            {
                "input": "abY\naabbccddY",
                "expected_output": "5",
                "is_sample": false
            }
        ]
    },
    {
        "question_number": 37,
        "title": "Maximum Subarray",
        "level": "Easy",
        "tags": [
            "Array",
            "Divide and Conquer",
            "Dynamic Programming"
        ],
        "description": "Given an integer array nums, find the subarray with the largest sum, and return its sum.",
        "constraints": "1 <= nums.length <= 10^5\n-10^4 <= nums[i] <= 10^4",
        "starter": "class Solution {\n    public int maxSubArray(int[] nums) {\n        // Write your code here\n        return 0;\n    }\n}",
        "driver": {
            "key": "intArrayToInt",
            "method": "maxSubArray"
        },
        "testcases": [
            {
                "input": "[-2,1,-3,4,-1,2,1,-5,4]",
                "expected_output": "6",
                "is_sample": true
            },
            {
                "input": "[1]",
                "expected_output": "1",
                "is_sample": true
            },
            {
                "input": "[5,4,-1,7,8]",
                "expected_output": "23",
                "is_sample": false
            },
            {
                "input": "[-1,2,-1,3,-4]",
                "expected_output": "4",
                "is_sample": false
            },
            {
                "input": "[-2,4,-1,6,-8]",
                "expected_output": "9",
                "is_sample": false
            },
            {
                "input": "[-3,6,-1,9,-12]",
                "expected_output": "14",
                "is_sample": false
            },
            {
                "input": "[-4,8,-1,12,-16]",
                "expected_output": "19",
                "is_sample": false
            },
            {
                "input": "[-5,10,-1,15,-20]",
                "expected_output": "24",
                "is_sample": false
            },
            {
                "input": "[-6,12,-1,18,-24]",
                "expected_output": "29",
                "is_sample": false
            },
            {
                "input": "[-7,14,-1,21,-28]",
                "expected_output": "34",
                "is_sample": false
            },
            {
                "input": "[-8,16,-1,24,-32]",
                "expected_output": "39",
                "is_sample": false
            },
            {
                "input": "[-9,18,-1,27,-36]",
                "expected_output": "44",
                "is_sample": false
            },
            {
                "input": "[-10,20,-1,30,-40]",
                "expected_output": "49",
                "is_sample": false
            },
            {
                "input": "[-11,22,-1,33,-44]",
                "expected_output": "54",
                "is_sample": false
            },
            {
                "input": "[-12,24,-1,36,-48]",
                "expected_output": "59",
                "is_sample": false
            },
            {
                "input": "[-13,26,-1,39,-52]",
                "expected_output": "64",
                "is_sample": false
            },
            {
                "input": "[-14,28,-1,42,-56]",
                "expected_output": "69",
                "is_sample": false
            },
            {
                "input": "[-15,30,-1,45,-60]",
                "expected_output": "74",
                "is_sample": false
            },
            {
                "input": "[-16,32,-1,48,-64]",
                "expected_output": "79",
                "is_sample": false
            },
            {
                "input": "[-17,34,-1,51,-68]",
                "expected_output": "84",
                "is_sample": false
            },
            {
                "input": "[-18,36,-1,54,-72]",
                "expected_output": "89",
                "is_sample": false
            },
            {
                "input": "[-19,38,-1,57,-76]",
                "expected_output": "94",
                "is_sample": false
            },
            {
                "input": "[-20,40,-1,60,-80]",
                "expected_output": "99",
                "is_sample": false
            },
            {
                "input": "[-21,42,-1,63,-84]",
                "expected_output": "104",
                "is_sample": false
            },
            {
                "input": "[-22,44,-1,66,-88]",
                "expected_output": "109",
                "is_sample": false
            },
            {
                "input": "[-23,46,-1,69,-92]",
                "expected_output": "114",
                "is_sample": false
            },
            {
                "input": "[-24,48,-1,72,-96]",
                "expected_output": "119",
                "is_sample": false
            },
            {
                "input": "[-25,50,-1,75,-100]",
                "expected_output": "124",
                "is_sample": false
            },
            {
                "input": "[-26,52,-1,78,-104]",
                "expected_output": "129",
                "is_sample": false
            },
            {
                "input": "[-27,54,-1,81,-108]",
                "expected_output": "134",
                "is_sample": false
            },
            {
                "input": "[-28,56,-1,84,-112]",
                "expected_output": "139",
                "is_sample": false
            },
            {
                "input": "[-29,58,-1,87,-116]",
                "expected_output": "144",
                "is_sample": false
            },
            {
                "input": "[-30,60,-1,90,-120]",
                "expected_output": "149",
                "is_sample": false
            },
            {
                "input": "[-31,62,-1,93,-124]",
                "expected_output": "154",
                "is_sample": false
            },
            {
                "input": "[-32,64,-1,96,-128]",
                "expected_output": "159",
                "is_sample": false
            },
            {
                "input": "[-33,66,-1,99,-132]",
                "expected_output": "164",
                "is_sample": false
            },
            {
                "input": "[-34,68,-1,102,-136]",
                "expected_output": "169",
                "is_sample": false
            },
            {
                "input": "[-35,70,-1,105,-140]",
                "expected_output": "174",
                "is_sample": false
            },
            {
                "input": "[-36,72,-1,108,-144]",
                "expected_output": "179",
                "is_sample": false
            },
            {
                "input": "[-37,74,-1,111,-148]",
                "expected_output": "184",
                "is_sample": false
            },
            {
                "input": "[-38,76,-1,114,-152]",
                "expected_output": "189",
                "is_sample": false
            },
            {
                "input": "[-39,78,-1,117,-156]",
                "expected_output": "194",
                "is_sample": false
            },
            {
                "input": "[-40,80,-1,120,-160]",
                "expected_output": "199",
                "is_sample": false
            },
            {
                "input": "[-41,82,-1,123,-164]",
                "expected_output": "204",
                "is_sample": false
            },
            {
                "input": "[-42,84,-1,126,-168]",
                "expected_output": "209",
                "is_sample": false
            },
            {
                "input": "[-43,86,-1,129,-172]",
                "expected_output": "214",
                "is_sample": false
            },
            {
                "input": "[-44,88,-1,132,-176]",
                "expected_output": "219",
                "is_sample": false
            },
            {
                "input": "[-45,90,-1,135,-180]",
                "expected_output": "224",
                "is_sample": false
            },
            {
                "input": "[-46,92,-1,138,-184]",
                "expected_output": "229",
                "is_sample": false
            },
            {
                "input": "[-47,94,-1,141,-188]",
                "expected_output": "234",
                "is_sample": false
            },
            {
                "input": "[-48,96,-1,144,-192]",
                "expected_output": "239",
                "is_sample": false
            },
            {
                "input": "[-49,98,-1,147,-196]",
                "expected_output": "244",
                "is_sample": false
            },
            {
                "input": "[-50,100,-1,150,-200]",
                "expected_output": "249",
                "is_sample": false
            }
        ]
    },
    {
        "question_number": 38,
        "title": "Defanging an IP Address",
        "level": "Easy",
        "tags": [
            "String"
        ],
        "description": "Given a valid (IPv4) IP address, return a defanged version of that IP address. A defanged IP address replaces every period \".\" with \"[.]\".",
        "constraints": "The given address is a valid IPv4 address.",
        "starter": "class Solution {\n    public String defangIPaddr(String address) {\n        // Write your code here\n        return \"\";\n    }\n}",
        "driver": {
            "key": "stringToString",
            "method": "defangIPaddr"
        },
        "testcases": [
            {
                "input": "1.1.1.1",
                "expected_output": "1[.]1[.]1[.]1",
                "is_sample": true
            },
            {
                "input": "255.100.50.0",
                "expected_output": "255[.]100[.]50[.]0",
                "is_sample": true
            },
            {
                "input": "192.168.1.3",
                "expected_output": "192[.]168[.]1[.]3",
                "is_sample": false
            },
            {
                "input": "192.168.2.6",
                "expected_output": "192[.]168[.]2[.]6",
                "is_sample": false
            },
            {
                "input": "192.168.3.9",
                "expected_output": "192[.]168[.]3[.]9",
                "is_sample": false
            },
            {
                "input": "192.168.4.12",
                "expected_output": "192[.]168[.]4[.]12",
                "is_sample": false
            },
            {
                "input": "192.168.5.15",
                "expected_output": "192[.]168[.]5[.]15",
                "is_sample": false
            },
            {
                "input": "192.168.6.18",
                "expected_output": "192[.]168[.]6[.]18",
                "is_sample": false
            },
            {
                "input": "192.168.7.21",
                "expected_output": "192[.]168[.]7[.]21",
                "is_sample": false
            },
            {
                "input": "192.168.8.24",
                "expected_output": "192[.]168[.]8[.]24",
                "is_sample": false
            },
            {
                "input": "192.168.9.27",
                "expected_output": "192[.]168[.]9[.]27",
                "is_sample": false
            },
            {
                "input": "192.168.10.30",
                "expected_output": "192[.]168[.]10[.]30",
                "is_sample": false
            },
            {
                "input": "192.168.11.33",
                "expected_output": "192[.]168[.]11[.]33",
                "is_sample": false
            },
            {
                "input": "192.168.12.36",
                "expected_output": "192[.]168[.]12[.]36",
                "is_sample": false
            },
            {
                "input": "192.168.13.39",
                "expected_output": "192[.]168[.]13[.]39",
                "is_sample": false
            },
            {
                "input": "192.168.14.42",
                "expected_output": "192[.]168[.]14[.]42",
                "is_sample": false
            },
            {
                "input": "192.168.15.45",
                "expected_output": "192[.]168[.]15[.]45",
                "is_sample": false
            },
            {
                "input": "192.168.16.48",
                "expected_output": "192[.]168[.]16[.]48",
                "is_sample": false
            },
            {
                "input": "192.168.17.51",
                "expected_output": "192[.]168[.]17[.]51",
                "is_sample": false
            },
            {
                "input": "192.168.18.54",
                "expected_output": "192[.]168[.]18[.]54",
                "is_sample": false
            },
            {
                "input": "192.168.19.57",
                "expected_output": "192[.]168[.]19[.]57",
                "is_sample": false
            },
            {
                "input": "192.168.20.60",
                "expected_output": "192[.]168[.]20[.]60",
                "is_sample": false
            },
            {
                "input": "192.168.21.63",
                "expected_output": "192[.]168[.]21[.]63",
                "is_sample": false
            },
            {
                "input": "192.168.22.66",
                "expected_output": "192[.]168[.]22[.]66",
                "is_sample": false
            },
            {
                "input": "192.168.23.69",
                "expected_output": "192[.]168[.]23[.]69",
                "is_sample": false
            },
            {
                "input": "192.168.24.72",
                "expected_output": "192[.]168[.]24[.]72",
                "is_sample": false
            },
            {
                "input": "192.168.25.75",
                "expected_output": "192[.]168[.]25[.]75",
                "is_sample": false
            },
            {
                "input": "192.168.26.78",
                "expected_output": "192[.]168[.]26[.]78",
                "is_sample": false
            },
            {
                "input": "192.168.27.81",
                "expected_output": "192[.]168[.]27[.]81",
                "is_sample": false
            },
            {
                "input": "192.168.28.84",
                "expected_output": "192[.]168[.]28[.]84",
                "is_sample": false
            },
            {
                "input": "192.168.29.87",
                "expected_output": "192[.]168[.]29[.]87",
                "is_sample": false
            },
            {
                "input": "192.168.30.90",
                "expected_output": "192[.]168[.]30[.]90",
                "is_sample": false
            },
            {
                "input": "192.168.31.93",
                "expected_output": "192[.]168[.]31[.]93",
                "is_sample": false
            },
            {
                "input": "192.168.32.96",
                "expected_output": "192[.]168[.]32[.]96",
                "is_sample": false
            },
            {
                "input": "192.168.33.99",
                "expected_output": "192[.]168[.]33[.]99",
                "is_sample": false
            },
            {
                "input": "192.168.34.102",
                "expected_output": "192[.]168[.]34[.]102",
                "is_sample": false
            },
            {
                "input": "192.168.35.105",
                "expected_output": "192[.]168[.]35[.]105",
                "is_sample": false
            },
            {
                "input": "192.168.36.108",
                "expected_output": "192[.]168[.]36[.]108",
                "is_sample": false
            },
            {
                "input": "192.168.37.111",
                "expected_output": "192[.]168[.]37[.]111",
                "is_sample": false
            },
            {
                "input": "192.168.38.114",
                "expected_output": "192[.]168[.]38[.]114",
                "is_sample": false
            },
            {
                "input": "192.168.39.117",
                "expected_output": "192[.]168[.]39[.]117",
                "is_sample": false
            },
            {
                "input": "192.168.40.120",
                "expected_output": "192[.]168[.]40[.]120",
                "is_sample": false
            },
            {
                "input": "192.168.41.123",
                "expected_output": "192[.]168[.]41[.]123",
                "is_sample": false
            },
            {
                "input": "192.168.42.126",
                "expected_output": "192[.]168[.]42[.]126",
                "is_sample": false
            },
            {
                "input": "192.168.43.129",
                "expected_output": "192[.]168[.]43[.]129",
                "is_sample": false
            },
            {
                "input": "192.168.44.132",
                "expected_output": "192[.]168[.]44[.]132",
                "is_sample": false
            },
            {
                "input": "192.168.45.135",
                "expected_output": "192[.]168[.]45[.]135",
                "is_sample": false
            },
            {
                "input": "192.168.46.138",
                "expected_output": "192[.]168[.]46[.]138",
                "is_sample": false
            },
            {
                "input": "192.168.47.141",
                "expected_output": "192[.]168[.]47[.]141",
                "is_sample": false
            },
            {
                "input": "192.168.48.144",
                "expected_output": "192[.]168[.]48[.]144",
                "is_sample": false
            },
            {
                "input": "192.168.49.147",
                "expected_output": "192[.]168[.]49[.]147",
                "is_sample": false
            },
            {
                "input": "192.168.50.150",
                "expected_output": "192[.]168[.]50[.]150",
                "is_sample": false
            }
        ]
    },
    {
        "question_number": 39,
        "title": "Shuffle the Array",
        "level": "Easy",
        "tags": [
            "Array"
        ],
        "description": "Given the array nums consisting of 2n elements in the form [x1,x2,...,xn,y1,y2,...,yn]. Return the array in the form [x1,y1,x2,y2,...,xn,yn].\n\nInput format (2 lines):\nLine 1: nums as JSON array\nLine 2: n",
        "constraints": "1 <= n <= 500\nnums.length == 2n\n1 <= nums[i] <= 10^3",
        "starter": "class Solution {\n    public int[] shuffle(int[] nums, int n) {\n        // Write your code here\n        return new int[]{};\n    }\n}",
        "driver": {
            "key": "intArrayAndKToIntArray",
            "method": "shuffle"
        },
        "testcases": [
            {
                "input": "[2,5,1,3,4,7]\n3",
                "expected_output": "[2,3,5,4,1,7]",
                "is_sample": true
            },
            {
                "input": "[1,2,3,4,4,3,2,1]\n4",
                "expected_output": "[1,4,2,3,3,2,4,1]",
                "is_sample": true
            },
            {
                "input": "[1,2,3,4,5,6]\n3",
                "expected_output": "[1,4,2,5,3,6]",
                "is_sample": false
            },
            {
                "input": "[2,3,4,5,6,7]\n3",
                "expected_output": "[2,5,3,6,4,7]",
                "is_sample": false
            },
            {
                "input": "[3,4,5,6,7,8]\n3",
                "expected_output": "[3,6,4,7,5,8]",
                "is_sample": false
            },
            {
                "input": "[4,5,6,7,8,9]\n3",
                "expected_output": "[4,7,5,8,6,9]",
                "is_sample": false
            },
            {
                "input": "[5,6,7,8,9,10]\n3",
                "expected_output": "[5,8,6,9,7,10]",
                "is_sample": false
            },
            {
                "input": "[6,7,8,9,10,11]\n3",
                "expected_output": "[6,9,7,10,8,11]",
                "is_sample": false
            },
            {
                "input": "[7,8,9,10,11,12]\n3",
                "expected_output": "[7,10,8,11,9,12]",
                "is_sample": false
            },
            {
                "input": "[8,9,10,11,12,13]\n3",
                "expected_output": "[8,11,9,12,10,13]",
                "is_sample": false
            },
            {
                "input": "[9,10,11,12,13,14]\n3",
                "expected_output": "[9,12,10,13,11,14]",
                "is_sample": false
            },
            {
                "input": "[10,11,12,13,14,15]\n3",
                "expected_output": "[10,13,11,14,12,15]",
                "is_sample": false
            },
            {
                "input": "[11,12,13,14,15,16]\n3",
                "expected_output": "[11,14,12,15,13,16]",
                "is_sample": false
            },
            {
                "input": "[12,13,14,15,16,17]\n3",
                "expected_output": "[12,15,13,16,14,17]",
                "is_sample": false
            },
            {
                "input": "[13,14,15,16,17,18]\n3",
                "expected_output": "[13,16,14,17,15,18]",
                "is_sample": false
            },
            {
                "input": "[14,15,16,17,18,19]\n3",
                "expected_output": "[14,17,15,18,16,19]",
                "is_sample": false
            },
            {
                "input": "[15,16,17,18,19,20]\n3",
                "expected_output": "[15,18,16,19,17,20]",
                "is_sample": false
            },
            {
                "input": "[16,17,18,19,20,21]\n3",
                "expected_output": "[16,19,17,20,18,21]",
                "is_sample": false
            },
            {
                "input": "[17,18,19,20,21,22]\n3",
                "expected_output": "[17,20,18,21,19,22]",
                "is_sample": false
            },
            {
                "input": "[18,19,20,21,22,23]\n3",
                "expected_output": "[18,21,19,22,20,23]",
                "is_sample": false
            },
            {
                "input": "[19,20,21,22,23,24]\n3",
                "expected_output": "[19,22,20,23,21,24]",
                "is_sample": false
            },
            {
                "input": "[20,21,22,23,24,25]\n3",
                "expected_output": "[20,23,21,24,22,25]",
                "is_sample": false
            },
            {
                "input": "[21,22,23,24,25,26]\n3",
                "expected_output": "[21,24,22,25,23,26]",
                "is_sample": false
            },
            {
                "input": "[22,23,24,25,26,27]\n3",
                "expected_output": "[22,25,23,26,24,27]",
                "is_sample": false
            },
            {
                "input": "[23,24,25,26,27,28]\n3",
                "expected_output": "[23,26,24,27,25,28]",
                "is_sample": false
            },
            {
                "input": "[24,25,26,27,28,29]\n3",
                "expected_output": "[24,27,25,28,26,29]",
                "is_sample": false
            },
            {
                "input": "[25,26,27,28,29,30]\n3",
                "expected_output": "[25,28,26,29,27,30]",
                "is_sample": false
            },
            {
                "input": "[26,27,28,29,30,31]\n3",
                "expected_output": "[26,29,27,30,28,31]",
                "is_sample": false
            },
            {
                "input": "[27,28,29,30,31,32]\n3",
                "expected_output": "[27,30,28,31,29,32]",
                "is_sample": false
            },
            {
                "input": "[28,29,30,31,32,33]\n3",
                "expected_output": "[28,31,29,32,30,33]",
                "is_sample": false
            },
            {
                "input": "[29,30,31,32,33,34]\n3",
                "expected_output": "[29,32,30,33,31,34]",
                "is_sample": false
            },
            {
                "input": "[30,31,32,33,34,35]\n3",
                "expected_output": "[30,33,31,34,32,35]",
                "is_sample": false
            },
            {
                "input": "[31,32,33,34,35,36]\n3",
                "expected_output": "[31,34,32,35,33,36]",
                "is_sample": false
            },
            {
                "input": "[32,33,34,35,36,37]\n3",
                "expected_output": "[32,35,33,36,34,37]",
                "is_sample": false
            },
            {
                "input": "[33,34,35,36,37,38]\n3",
                "expected_output": "[33,36,34,37,35,38]",
                "is_sample": false
            },
            {
                "input": "[34,35,36,37,38,39]\n3",
                "expected_output": "[34,37,35,38,36,39]",
                "is_sample": false
            },
            {
                "input": "[35,36,37,38,39,40]\n3",
                "expected_output": "[35,38,36,39,37,40]",
                "is_sample": false
            },
            {
                "input": "[36,37,38,39,40,41]\n3",
                "expected_output": "[36,39,37,40,38,41]",
                "is_sample": false
            },
            {
                "input": "[37,38,39,40,41,42]\n3",
                "expected_output": "[37,40,38,41,39,42]",
                "is_sample": false
            },
            {
                "input": "[38,39,40,41,42,43]\n3",
                "expected_output": "[38,41,39,42,40,43]",
                "is_sample": false
            },
            {
                "input": "[39,40,41,42,43,44]\n3",
                "expected_output": "[39,42,40,43,41,44]",
                "is_sample": false
            },
            {
                "input": "[40,41,42,43,44,45]\n3",
                "expected_output": "[40,43,41,44,42,45]",
                "is_sample": false
            },
            {
                "input": "[41,42,43,44,45,46]\n3",
                "expected_output": "[41,44,42,45,43,46]",
                "is_sample": false
            },
            {
                "input": "[42,43,44,45,46,47]\n3",
                "expected_output": "[42,45,43,46,44,47]",
                "is_sample": false
            },
            {
                "input": "[43,44,45,46,47,48]\n3",
                "expected_output": "[43,46,44,47,45,48]",
                "is_sample": false
            },
            {
                "input": "[44,45,46,47,48,49]\n3",
                "expected_output": "[44,47,45,48,46,49]",
                "is_sample": false
            },
            {
                "input": "[45,46,47,48,49,50]\n3",
                "expected_output": "[45,48,46,49,47,50]",
                "is_sample": false
            },
            {
                "input": "[46,47,48,49,50,51]\n3",
                "expected_output": "[46,49,47,50,48,51]",
                "is_sample": false
            },
            {
                "input": "[47,48,49,50,51,52]\n3",
                "expected_output": "[47,50,48,51,49,52]",
                "is_sample": false
            },
            {
                "input": "[48,49,50,51,52,53]\n3",
                "expected_output": "[48,51,49,52,50,53]",
                "is_sample": false
            },
            {
                "input": "[49,50,51,52,53,54]\n3",
                "expected_output": "[49,52,50,53,51,54]",
                "is_sample": false
            },
            {
                "input": "[50,51,52,53,54,55]\n3",
                "expected_output": "[50,53,51,54,52,55]",
                "is_sample": false
            }
        ]
    },
    {
        "question_number": 40,
        "title": "Running Sum of 1d Array",
        "level": "Easy",
        "tags": [
            "Array",
            "Prefix Sum"
        ],
        "description": "Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]). Return the running sum of nums.",
        "constraints": "1 <= nums.length <= 1000\n-10^6 <= nums[i] <= 10^6",
        "starter": "class Solution {\n    public int[] runningSum(int[] nums) {\n        // Write your code here\n        return new int[]{};\n    }\n}",
        "driver": {
            "key": "intArrayToIntArray",
            "method": "runningSum"
        },
        "testcases": [
            {
                "input": "[1,2,3,4]",
                "expected_output": "[1,3,6,10]",
                "is_sample": true
            },
            {
                "input": "[1,1,1,1,1]",
                "expected_output": "[1,2,3,4,5]",
                "is_sample": true
            },
            {
                "input": "[3,1,2,10,1]",
                "expected_output": "[3,4,6,16,17]",
                "is_sample": false
            },
            {
                "input": "[1,2,3,4]",
                "expected_output": "[1,3,6,10]",
                "is_sample": false
            },
            {
                "input": "[2,3,4,5]",
                "expected_output": "[2,5,9,14]",
                "is_sample": false
            },
            {
                "input": "[3,4,5,6]",
                "expected_output": "[3,7,12,18]",
                "is_sample": false
            },
            {
                "input": "[4,5,6,7]",
                "expected_output": "[4,9,15,22]",
                "is_sample": false
            },
            {
                "input": "[5,6,7,8]",
                "expected_output": "[5,11,18,26]",
                "is_sample": false
            },
            {
                "input": "[6,7,8,9]",
                "expected_output": "[6,13,21,30]",
                "is_sample": false
            },
            {
                "input": "[7,8,9,10]",
                "expected_output": "[7,15,24,34]",
                "is_sample": false
            },
            {
                "input": "[8,9,10,11]",
                "expected_output": "[8,17,27,38]",
                "is_sample": false
            },
            {
                "input": "[9,10,11,12]",
                "expected_output": "[9,19,30,42]",
                "is_sample": false
            },
            {
                "input": "[10,11,12,13]",
                "expected_output": "[10,21,33,46]",
                "is_sample": false
            },
            {
                "input": "[11,12,13,14]",
                "expected_output": "[11,23,36,50]",
                "is_sample": false
            },
            {
                "input": "[12,13,14,15]",
                "expected_output": "[12,25,39,54]",
                "is_sample": false
            },
            {
                "input": "[13,14,15,16]",
                "expected_output": "[13,27,42,58]",
                "is_sample": false
            },
            {
                "input": "[14,15,16,17]",
                "expected_output": "[14,29,45,62]",
                "is_sample": false
            },
            {
                "input": "[15,16,17,18]",
                "expected_output": "[15,31,48,66]",
                "is_sample": false
            },
            {
                "input": "[16,17,18,19]",
                "expected_output": "[16,33,51,70]",
                "is_sample": false
            },
            {
                "input": "[17,18,19,20]",
                "expected_output": "[17,35,54,74]",
                "is_sample": false
            },
            {
                "input": "[18,19,20,21]",
                "expected_output": "[18,37,57,78]",
                "is_sample": false
            },
            {
                "input": "[19,20,21,22]",
                "expected_output": "[19,39,60,82]",
                "is_sample": false
            },
            {
                "input": "[20,21,22,23]",
                "expected_output": "[20,41,63,86]",
                "is_sample": false
            },
            {
                "input": "[21,22,23,24]",
                "expected_output": "[21,43,66,90]",
                "is_sample": false
            },
            {
                "input": "[22,23,24,25]",
                "expected_output": "[22,45,69,94]",
                "is_sample": false
            },
            {
                "input": "[23,24,25,26]",
                "expected_output": "[23,47,72,98]",
                "is_sample": false
            },
            {
                "input": "[24,25,26,27]",
                "expected_output": "[24,49,75,102]",
                "is_sample": false
            },
            {
                "input": "[25,26,27,28]",
                "expected_output": "[25,51,78,106]",
                "is_sample": false
            },
            {
                "input": "[26,27,28,29]",
                "expected_output": "[26,53,81,110]",
                "is_sample": false
            },
            {
                "input": "[27,28,29,30]",
                "expected_output": "[27,55,84,114]",
                "is_sample": false
            },
            {
                "input": "[28,29,30,31]",
                "expected_output": "[28,57,87,118]",
                "is_sample": false
            },
            {
                "input": "[29,30,31,32]",
                "expected_output": "[29,59,90,122]",
                "is_sample": false
            },
            {
                "input": "[30,31,32,33]",
                "expected_output": "[30,61,93,126]",
                "is_sample": false
            },
            {
                "input": "[31,32,33,34]",
                "expected_output": "[31,63,96,130]",
                "is_sample": false
            },
            {
                "input": "[32,33,34,35]",
                "expected_output": "[32,65,99,134]",
                "is_sample": false
            },
            {
                "input": "[33,34,35,36]",
                "expected_output": "[33,67,102,138]",
                "is_sample": false
            },
            {
                "input": "[34,35,36,37]",
                "expected_output": "[34,69,105,142]",
                "is_sample": false
            },
            {
                "input": "[35,36,37,38]",
                "expected_output": "[35,71,108,146]",
                "is_sample": false
            },
            {
                "input": "[36,37,38,39]",
                "expected_output": "[36,73,111,150]",
                "is_sample": false
            },
            {
                "input": "[37,38,39,40]",
                "expected_output": "[37,75,114,154]",
                "is_sample": false
            },
            {
                "input": "[38,39,40,41]",
                "expected_output": "[38,77,117,158]",
                "is_sample": false
            },
            {
                "input": "[39,40,41,42]",
                "expected_output": "[39,79,120,162]",
                "is_sample": false
            },
            {
                "input": "[40,41,42,43]",
                "expected_output": "[40,81,123,166]",
                "is_sample": false
            },
            {
                "input": "[41,42,43,44]",
                "expected_output": "[41,83,126,170]",
                "is_sample": false
            },
            {
                "input": "[42,43,44,45]",
                "expected_output": "[42,85,129,174]",
                "is_sample": false
            },
            {
                "input": "[43,44,45,46]",
                "expected_output": "[43,87,132,178]",
                "is_sample": false
            },
            {
                "input": "[44,45,46,47]",
                "expected_output": "[44,89,135,182]",
                "is_sample": false
            },
            {
                "input": "[45,46,47,48]",
                "expected_output": "[45,91,138,186]",
                "is_sample": false
            },
            {
                "input": "[46,47,48,49]",
                "expected_output": "[46,93,141,190]",
                "is_sample": false
            },
            {
                "input": "[47,48,49,50]",
                "expected_output": "[47,95,144,194]",
                "is_sample": false
            },
            {
                "input": "[48,49,50,51]",
                "expected_output": "[48,97,147,198]",
                "is_sample": false
            },
            {
                "input": "[49,50,51,52]",
                "expected_output": "[49,99,150,202]",
                "is_sample": false
            },
            {
                "input": "[50,51,52,53]",
                "expected_output": "[50,101,153,206]",
                "is_sample": false
            }
        ]
    }
];
