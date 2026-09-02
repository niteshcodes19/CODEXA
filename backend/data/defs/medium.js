module.exports = [
    {
        "question_number": 41,
        "title": "3Sum",
        "level": "Medium",
        "tags": [
            "Array",
            "Two Pointers",
            "Sorting"
        ],
        "description": "Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.\n\nNotice that the solution set must not contain duplicate triplets.",
        "constraints": "3 <= nums.length <= 3000\n-10^5 <= nums[i] <= 10^5",
        "starter": "class Solution {\n    public List<List<Integer>> threeSum(int[] nums) {\n        // Write your code here\n        return new ArrayList<>();\n    }\n}",
        "driver": "threeSum",
        "testcases": [
            {
                "input": "[-1,0,1,2,-1,-4]",
                "expected_output": "[[-1,-1,2],[-1,0,1]]",
                "is_sample": true
            },
            {
                "input": "[0,1,1]",
                "expected_output": "[]",
                "is_sample": true
            },
            {
                "input": "[0,0,0]",
                "expected_output": "[[0,0,0]]",
                "is_sample": false
            },
            {
                "input": "[-1,0,1,-2,2,2]",
                "expected_output": "[[-1,0,1],[-2,0,2]]",
                "is_sample": false
            },
            {
                "input": "[-2,0,2,-4,4,3]",
                "expected_output": "[[-2,0,2],[-4,0,4]]",
                "is_sample": false
            },
            {
                "input": "[-3,0,3,-6,6,4]",
                "expected_output": "[[-3,0,3],[-6,0,6]]",
                "is_sample": false
            },
            {
                "input": "[-4,0,4,-8,8,5]",
                "expected_output": "[[-4,0,4],[-8,0,8]]",
                "is_sample": false
            },
            {
                "input": "[-5,0,5,-10,10,6]",
                "expected_output": "[[-10,0,10],[-5,0,5]]",
                "is_sample": false
            },
            {
                "input": "[-6,0,6,-12,12,7]",
                "expected_output": "[[-12,0,12],[-6,0,6]]",
                "is_sample": false
            },
            {
                "input": "[-7,0,7,-14,14,8]",
                "expected_output": "[[-14,0,14],[-7,0,7]]",
                "is_sample": false
            },
            {
                "input": "[-8,0,8,-16,16,9]",
                "expected_output": "[[-16,0,16],[-8,0,8]]",
                "is_sample": false
            },
            {
                "input": "[-9,0,9,-18,18,10]",
                "expected_output": "[[-18,0,18],[-9,0,9]]",
                "is_sample": false
            },
            {
                "input": "[-10,0,10,-20,20,11]",
                "expected_output": "[[-10,0,10],[-20,0,20]]",
                "is_sample": false
            },
            {
                "input": "[-11,0,11,-22,22,12]",
                "expected_output": "[[-11,0,11],[-22,0,22]]",
                "is_sample": false
            },
            {
                "input": "[-12,0,12,-24,24,13]",
                "expected_output": "[[-12,0,12],[-24,0,24]]",
                "is_sample": false
            },
            {
                "input": "[-13,0,13,-26,26,14]",
                "expected_output": "[[-13,0,13],[-26,0,26]]",
                "is_sample": false
            },
            {
                "input": "[-14,0,14,-28,28,15]",
                "expected_output": "[[-14,0,14],[-28,0,28]]",
                "is_sample": false
            },
            {
                "input": "[-15,0,15,-30,30,16]",
                "expected_output": "[[-15,0,15],[-30,0,30]]",
                "is_sample": false
            },
            {
                "input": "[-16,0,16,-32,32,17]",
                "expected_output": "[[-16,0,16],[-32,0,32]]",
                "is_sample": false
            },
            {
                "input": "[-17,0,17,-34,34,18]",
                "expected_output": "[[-17,0,17],[-34,0,34]]",
                "is_sample": false
            },
            {
                "input": "[-18,0,18,-36,36,19]",
                "expected_output": "[[-18,0,18],[-36,0,36]]",
                "is_sample": false
            },
            {
                "input": "[-19,0,19,-38,38,20]",
                "expected_output": "[[-19,0,19],[-38,0,38]]",
                "is_sample": false
            },
            {
                "input": "[-20,0,20,-40,40,21]",
                "expected_output": "[[-20,0,20],[-40,0,40]]",
                "is_sample": false
            },
            {
                "input": "[-21,0,21,-42,42,22]",
                "expected_output": "[[-21,0,21],[-42,0,42]]",
                "is_sample": false
            },
            {
                "input": "[-22,0,22,-44,44,23]",
                "expected_output": "[[-22,0,22],[-44,0,44]]",
                "is_sample": false
            },
            {
                "input": "[-23,0,23,-46,46,24]",
                "expected_output": "[[-23,0,23],[-46,0,46]]",
                "is_sample": false
            },
            {
                "input": "[-24,0,24,-48,48,25]",
                "expected_output": "[[-24,0,24],[-48,0,48]]",
                "is_sample": false
            },
            {
                "input": "[-25,0,25,-50,50,26]",
                "expected_output": "[[-25,0,25],[-50,0,50]]",
                "is_sample": false
            },
            {
                "input": "[-26,0,26,-52,52,27]",
                "expected_output": "[[-26,0,26],[-52,0,52]]",
                "is_sample": false
            },
            {
                "input": "[-27,0,27,-54,54,28]",
                "expected_output": "[[-27,0,27],[-54,0,54]]",
                "is_sample": false
            },
            {
                "input": "[-28,0,28,-56,56,29]",
                "expected_output": "[[-28,0,28],[-56,0,56]]",
                "is_sample": false
            },
            {
                "input": "[-29,0,29,-58,58,30]",
                "expected_output": "[[-29,0,29],[-58,0,58]]",
                "is_sample": false
            },
            {
                "input": "[-30,0,30,-60,60,31]",
                "expected_output": "[[-30,0,30],[-60,0,60]]",
                "is_sample": false
            },
            {
                "input": "[-31,0,31,-62,62,32]",
                "expected_output": "[[-31,0,31],[-62,0,62]]",
                "is_sample": false
            },
            {
                "input": "[-32,0,32,-64,64,33]",
                "expected_output": "[[-32,0,32],[-64,0,64]]",
                "is_sample": false
            },
            {
                "input": "[-33,0,33,-66,66,34]",
                "expected_output": "[[-33,0,33],[-66,0,66]]",
                "is_sample": false
            },
            {
                "input": "[-34,0,34,-68,68,35]",
                "expected_output": "[[-34,0,34],[-68,0,68]]",
                "is_sample": false
            },
            {
                "input": "[-35,0,35,-70,70,36]",
                "expected_output": "[[-35,0,35],[-70,0,70]]",
                "is_sample": false
            },
            {
                "input": "[-36,0,36,-72,72,37]",
                "expected_output": "[[-36,0,36],[-72,0,72]]",
                "is_sample": false
            },
            {
                "input": "[-37,0,37,-74,74,38]",
                "expected_output": "[[-37,0,37],[-74,0,74]]",
                "is_sample": false
            },
            {
                "input": "[-38,0,38,-76,76,39]",
                "expected_output": "[[-38,0,38],[-76,0,76]]",
                "is_sample": false
            },
            {
                "input": "[-39,0,39,-78,78,40]",
                "expected_output": "[[-39,0,39],[-78,0,78]]",
                "is_sample": false
            },
            {
                "input": "[-40,0,40,-80,80,41]",
                "expected_output": "[[-40,0,40],[-80,0,80]]",
                "is_sample": false
            },
            {
                "input": "[-41,0,41,-82,82,42]",
                "expected_output": "[[-41,0,41],[-82,0,82]]",
                "is_sample": false
            },
            {
                "input": "[-42,0,42,-84,84,43]",
                "expected_output": "[[-42,0,42],[-84,0,84]]",
                "is_sample": false
            },
            {
                "input": "[-43,0,43,-86,86,44]",
                "expected_output": "[[-43,0,43],[-86,0,86]]",
                "is_sample": false
            },
            {
                "input": "[-44,0,44,-88,88,45]",
                "expected_output": "[[-44,0,44],[-88,0,88]]",
                "is_sample": false
            },
            {
                "input": "[-45,0,45,-90,90,46]",
                "expected_output": "[[-45,0,45],[-90,0,90]]",
                "is_sample": false
            },
            {
                "input": "[-46,0,46,-92,92,47]",
                "expected_output": "[[-46,0,46],[-92,0,92]]",
                "is_sample": false
            },
            {
                "input": "[-47,0,47,-94,94,48]",
                "expected_output": "[[-47,0,47],[-94,0,94]]",
                "is_sample": false
            },
            {
                "input": "[-48,0,48,-96,96,49]",
                "expected_output": "[[-48,0,48],[-96,0,96]]",
                "is_sample": false
            },
            {
                "input": "[-49,0,49,-98,98,50]",
                "expected_output": "[[-49,0,49],[-98,0,98]]",
                "is_sample": false
            },
            {
                "input": "[-50,0,50,-100,100,51]",
                "expected_output": "[[-100,0,100],[-50,0,50]]",
                "is_sample": false
            }
        ]
    },
    {
        "question_number": 42,
        "title": "Container With Most Water",
        "level": "Medium",
        "tags": [
            "Array",
            "Two Pointers",
            "Greedy"
        ],
        "description": "You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).\n\nFind two lines that together with the x-axis form a container, such that the container contains the most water. Return the maximum amount of water a container can store.",
        "constraints": "n == height.length\n2 <= n <= 10^5\n0 <= height[i] <= 10^4",
        "starter": "class Solution {\n    public int maxArea(int[] height) {\n        // Write your code here\n        return 0;\n    }\n}",
        "driver": {
            "key": "intArrayToInt",
            "method": "maxArea"
        },
        "testcases": [
            {
                "input": "[1,8,6,2,5,4,8,3,7]",
                "expected_output": "49",
                "is_sample": true
            },
            {
                "input": "[1,1]",
                "expected_output": "1",
                "is_sample": true
            },
            {
                "input": "[1,3,2,4,1,2,3]",
                "expected_output": "15",
                "is_sample": false
            },
            {
                "input": "[2,6,2,8,1,4,3]",
                "expected_output": "16",
                "is_sample": false
            },
            {
                "input": "[3,9,2,12,1,6,3]",
                "expected_output": "24",
                "is_sample": false
            },
            {
                "input": "[4,12,2,16,1,8,3]",
                "expected_output": "32",
                "is_sample": false
            },
            {
                "input": "[5,15,2,20,1,10,3]",
                "expected_output": "40",
                "is_sample": false
            },
            {
                "input": "[6,18,2,24,1,12,3]",
                "expected_output": "48",
                "is_sample": false
            },
            {
                "input": "[7,21,2,28,1,14,3]",
                "expected_output": "56",
                "is_sample": false
            },
            {
                "input": "[8,24,2,32,1,16,3]",
                "expected_output": "64",
                "is_sample": false
            },
            {
                "input": "[9,27,2,36,1,18,3]",
                "expected_output": "72",
                "is_sample": false
            },
            {
                "input": "[10,30,2,40,1,20,3]",
                "expected_output": "80",
                "is_sample": false
            },
            {
                "input": "[11,33,2,44,1,22,3]",
                "expected_output": "88",
                "is_sample": false
            },
            {
                "input": "[12,36,2,48,1,24,3]",
                "expected_output": "96",
                "is_sample": false
            },
            {
                "input": "[13,39,2,52,1,26,3]",
                "expected_output": "104",
                "is_sample": false
            },
            {
                "input": "[14,42,2,56,1,28,3]",
                "expected_output": "112",
                "is_sample": false
            },
            {
                "input": "[15,45,2,60,1,30,3]",
                "expected_output": "120",
                "is_sample": false
            },
            {
                "input": "[16,48,2,64,1,32,3]",
                "expected_output": "128",
                "is_sample": false
            },
            {
                "input": "[17,51,2,68,1,34,3]",
                "expected_output": "136",
                "is_sample": false
            },
            {
                "input": "[18,54,2,72,1,36,3]",
                "expected_output": "144",
                "is_sample": false
            },
            {
                "input": "[19,57,2,76,1,38,3]",
                "expected_output": "152",
                "is_sample": false
            },
            {
                "input": "[20,60,2,80,1,40,3]",
                "expected_output": "160",
                "is_sample": false
            },
            {
                "input": "[21,63,2,84,1,42,3]",
                "expected_output": "168",
                "is_sample": false
            },
            {
                "input": "[22,66,2,88,1,44,3]",
                "expected_output": "176",
                "is_sample": false
            },
            {
                "input": "[23,69,2,92,1,46,3]",
                "expected_output": "184",
                "is_sample": false
            },
            {
                "input": "[24,72,2,96,1,48,3]",
                "expected_output": "192",
                "is_sample": false
            },
            {
                "input": "[25,75,2,100,1,50,3]",
                "expected_output": "200",
                "is_sample": false
            },
            {
                "input": "[26,78,2,104,1,52,3]",
                "expected_output": "208",
                "is_sample": false
            },
            {
                "input": "[27,81,2,108,1,54,3]",
                "expected_output": "216",
                "is_sample": false
            },
            {
                "input": "[28,84,2,112,1,56,3]",
                "expected_output": "224",
                "is_sample": false
            },
            {
                "input": "[29,87,2,116,1,58,3]",
                "expected_output": "232",
                "is_sample": false
            },
            {
                "input": "[30,90,2,120,1,60,3]",
                "expected_output": "240",
                "is_sample": false
            },
            {
                "input": "[31,93,2,124,1,62,3]",
                "expected_output": "248",
                "is_sample": false
            },
            {
                "input": "[32,96,2,128,1,64,3]",
                "expected_output": "256",
                "is_sample": false
            },
            {
                "input": "[33,99,2,132,1,66,3]",
                "expected_output": "264",
                "is_sample": false
            },
            {
                "input": "[34,102,2,136,1,68,3]",
                "expected_output": "272",
                "is_sample": false
            },
            {
                "input": "[35,105,2,140,1,70,3]",
                "expected_output": "280",
                "is_sample": false
            },
            {
                "input": "[36,108,2,144,1,72,3]",
                "expected_output": "288",
                "is_sample": false
            },
            {
                "input": "[37,111,2,148,1,74,3]",
                "expected_output": "296",
                "is_sample": false
            },
            {
                "input": "[38,114,2,152,1,76,3]",
                "expected_output": "304",
                "is_sample": false
            },
            {
                "input": "[39,117,2,156,1,78,3]",
                "expected_output": "312",
                "is_sample": false
            },
            {
                "input": "[40,120,2,160,1,80,3]",
                "expected_output": "320",
                "is_sample": false
            },
            {
                "input": "[41,123,2,164,1,82,3]",
                "expected_output": "328",
                "is_sample": false
            },
            {
                "input": "[42,126,2,168,1,84,3]",
                "expected_output": "336",
                "is_sample": false
            },
            {
                "input": "[43,129,2,172,1,86,3]",
                "expected_output": "344",
                "is_sample": false
            },
            {
                "input": "[44,132,2,176,1,88,3]",
                "expected_output": "352",
                "is_sample": false
            },
            {
                "input": "[45,135,2,180,1,90,3]",
                "expected_output": "360",
                "is_sample": false
            },
            {
                "input": "[46,138,2,184,1,92,3]",
                "expected_output": "368",
                "is_sample": false
            },
            {
                "input": "[47,141,2,188,1,94,3]",
                "expected_output": "376",
                "is_sample": false
            },
            {
                "input": "[48,144,2,192,1,96,3]",
                "expected_output": "384",
                "is_sample": false
            },
            {
                "input": "[49,147,2,196,1,98,3]",
                "expected_output": "392",
                "is_sample": false
            },
            {
                "input": "[50,150,2,200,1,100,3]",
                "expected_output": "400",
                "is_sample": false
            }
        ]
    },
    {
        "question_number": 43,
        "title": "Longest Substring Without Repeating Characters",
        "level": "Medium",
        "tags": [
            "Hash Table",
            "String",
            "Sliding Window"
        ],
        "description": "Given a string s, find the length of the longest substring without repeating characters.",
        "constraints": "0 <= s.length <= 5 * 10^4\ns consists of English letters, digits, symbols and spaces.",
        "starter": "class Solution {\n    public int lengthOfLongestSubstring(String s) {\n        // Write your code here\n        return 0;\n    }\n}",
        "driver": {
            "key": "stringToInt",
            "method": "lengthOfLongestSubstring"
        },
        "testcases": [
            {
                "input": "abcabcbb",
                "expected_output": "3",
                "is_sample": true
            },
            {
                "input": "bbbbb",
                "expected_output": "1",
                "is_sample": true
            },
            {
                "input": "pwwkew",
                "expected_output": "3",
                "is_sample": true
            },
            {
                "input": "abcdeBfghij1abc",
                "expected_output": "12",
                "is_sample": false
            },
            {
                "input": "abcdeCfghij2abc",
                "expected_output": "12",
                "is_sample": false
            },
            {
                "input": "abcdeDfghij3abc",
                "expected_output": "12",
                "is_sample": false
            },
            {
                "input": "abcdeEfghij4abc",
                "expected_output": "12",
                "is_sample": false
            },
            {
                "input": "abcdeFfghij5abc",
                "expected_output": "12",
                "is_sample": false
            },
            {
                "input": "abcdeGfghij6abc",
                "expected_output": "12",
                "is_sample": false
            },
            {
                "input": "abcdeHfghij7abc",
                "expected_output": "12",
                "is_sample": false
            },
            {
                "input": "abcdeIfghij8abc",
                "expected_output": "12",
                "is_sample": false
            },
            {
                "input": "abcdeJfghij9abc",
                "expected_output": "12",
                "is_sample": false
            },
            {
                "input": "abcdeKfghij10abc",
                "expected_output": "13",
                "is_sample": false
            },
            {
                "input": "abcdeLfghij11abc",
                "expected_output": "12",
                "is_sample": false
            },
            {
                "input": "abcdeMfghij12abc",
                "expected_output": "13",
                "is_sample": false
            },
            {
                "input": "abcdeNfghij13abc",
                "expected_output": "13",
                "is_sample": false
            },
            {
                "input": "abcdeOfghij14abc",
                "expected_output": "13",
                "is_sample": false
            },
            {
                "input": "abcdePfghij15abc",
                "expected_output": "13",
                "is_sample": false
            },
            {
                "input": "abcdeQfghij16abc",
                "expected_output": "13",
                "is_sample": false
            },
            {
                "input": "abcdeRfghij17abc",
                "expected_output": "13",
                "is_sample": false
            },
            {
                "input": "abcdeSfghij18abc",
                "expected_output": "13",
                "is_sample": false
            },
            {
                "input": "abcdeTfghij19abc",
                "expected_output": "13",
                "is_sample": false
            },
            {
                "input": "abcdeUfghij20abc",
                "expected_output": "13",
                "is_sample": false
            },
            {
                "input": "abcdeVfghij21abc",
                "expected_output": "13",
                "is_sample": false
            },
            {
                "input": "abcdeWfghij22abc",
                "expected_output": "12",
                "is_sample": false
            },
            {
                "input": "abcdeXfghij23abc",
                "expected_output": "13",
                "is_sample": false
            },
            {
                "input": "abcdeYfghij24abc",
                "expected_output": "13",
                "is_sample": false
            },
            {
                "input": "abcdeZfghij25abc",
                "expected_output": "13",
                "is_sample": false
            },
            {
                "input": "abcdeAfghij26abc",
                "expected_output": "13",
                "is_sample": false
            },
            {
                "input": "abcdeBfghij27abc",
                "expected_output": "13",
                "is_sample": false
            },
            {
                "input": "abcdeCfghij28abc",
                "expected_output": "13",
                "is_sample": false
            },
            {
                "input": "abcdeDfghij29abc",
                "expected_output": "13",
                "is_sample": false
            },
            {
                "input": "abcdeEfghij30abc",
                "expected_output": "13",
                "is_sample": false
            },
            {
                "input": "abcdeFfghij31abc",
                "expected_output": "13",
                "is_sample": false
            },
            {
                "input": "abcdeGfghij32abc",
                "expected_output": "13",
                "is_sample": false
            },
            {
                "input": "abcdeHfghij33abc",
                "expected_output": "12",
                "is_sample": false
            },
            {
                "input": "abcdeIfghij34abc",
                "expected_output": "13",
                "is_sample": false
            },
            {
                "input": "abcdeJfghij35abc",
                "expected_output": "13",
                "is_sample": false
            },
            {
                "input": "abcdeKfghij36abc",
                "expected_output": "13",
                "is_sample": false
            },
            {
                "input": "abcdeLfghij37abc",
                "expected_output": "13",
                "is_sample": false
            },
            {
                "input": "abcdeMfghij38abc",
                "expected_output": "13",
                "is_sample": false
            },
            {
                "input": "abcdeNfghij39abc",
                "expected_output": "13",
                "is_sample": false
            },
            {
                "input": "abcdeOfghij40abc",
                "expected_output": "13",
                "is_sample": false
            },
            {
                "input": "abcdePfghij41abc",
                "expected_output": "13",
                "is_sample": false
            },
            {
                "input": "abcdeQfghij42abc",
                "expected_output": "13",
                "is_sample": false
            },
            {
                "input": "abcdeRfghij43abc",
                "expected_output": "13",
                "is_sample": false
            },
            {
                "input": "abcdeSfghij44abc",
                "expected_output": "12",
                "is_sample": false
            },
            {
                "input": "abcdeTfghij45abc",
                "expected_output": "13",
                "is_sample": false
            },
            {
                "input": "abcdeUfghij46abc",
                "expected_output": "13",
                "is_sample": false
            },
            {
                "input": "abcdeVfghij47abc",
                "expected_output": "13",
                "is_sample": false
            },
            {
                "input": "abcdeWfghij48abc",
                "expected_output": "13",
                "is_sample": false
            },
            {
                "input": "abcdeXfghij49abc",
                "expected_output": "13",
                "is_sample": false
            },
            {
                "input": "abcdeYfghij50abc",
                "expected_output": "13",
                "is_sample": false
            }
        ]
    },
    {
        "question_number": 44,
        "title": "Group Anagrams",
        "level": "Medium",
        "tags": [
            "Array",
            "Hash Table",
            "String",
            "Sorting"
        ],
        "description": "Given an array of strings strs, group the anagrams together. You can return the answer in any order.\n\nAn Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.",
        "constraints": "1 <= strs.length <= 10^4\n0 <= strs[i].length <= 100\nstrs[i] consists of lowercase English letters.",
        "starter": "class Solution {\n    public List<List<String>> groupAnagrams(String[] strs) {\n        // Write your code here\n        return new ArrayList<>();\n    }\n}",
        "driver": "groupAnagrams",
        "testcases": [
            {
                "input": "[\"eat\",\"tea\",\"tan\",\"ate\",\"nat\",\"bat\"]",
                "expected_output": "[[\"bat\"],[\"eat\",\"tea\",\"ate\"],[\"tan\",\"nat\"]]",
                "is_sample": true
            },
            {
                "input": "[\"\"]",
                "expected_output": "[[\"\"]]",
                "is_sample": true
            },
            {
                "input": "[\"a\"]",
                "expected_output": "[[\"a\"]]",
                "is_sample": false
            },
            {
                "input": "[\"abc1\",\"bca1\",\"xyz1\",\"zyx1\",\"foo1\"]",
                "expected_output": "[[\"abc1\",\"bca1\"],[\"foo1\"],[\"xyz1\",\"zyx1\"]]",
                "is_sample": false
            },
            {
                "input": "[\"abc2\",\"bca2\",\"xyz2\",\"zyx2\",\"foo2\"]",
                "expected_output": "[[\"abc2\",\"bca2\"],[\"foo2\"],[\"xyz2\",\"zyx2\"]]",
                "is_sample": false
            },
            {
                "input": "[\"abc3\",\"bca3\",\"xyz3\",\"zyx3\",\"foo3\"]",
                "expected_output": "[[\"abc3\",\"bca3\"],[\"foo3\"],[\"xyz3\",\"zyx3\"]]",
                "is_sample": false
            },
            {
                "input": "[\"abc4\",\"bca4\",\"xyz4\",\"zyx4\",\"foo4\"]",
                "expected_output": "[[\"abc4\",\"bca4\"],[\"foo4\"],[\"xyz4\",\"zyx4\"]]",
                "is_sample": false
            },
            {
                "input": "[\"abc5\",\"bca5\",\"xyz5\",\"zyx5\",\"foo5\"]",
                "expected_output": "[[\"abc5\",\"bca5\"],[\"foo5\"],[\"xyz5\",\"zyx5\"]]",
                "is_sample": false
            },
            {
                "input": "[\"abc6\",\"bca6\",\"xyz6\",\"zyx6\",\"foo6\"]",
                "expected_output": "[[\"abc6\",\"bca6\"],[\"foo6\"],[\"xyz6\",\"zyx6\"]]",
                "is_sample": false
            },
            {
                "input": "[\"abc7\",\"bca7\",\"xyz7\",\"zyx7\",\"foo7\"]",
                "expected_output": "[[\"abc7\",\"bca7\"],[\"foo7\"],[\"xyz7\",\"zyx7\"]]",
                "is_sample": false
            },
            {
                "input": "[\"abc8\",\"bca8\",\"xyz8\",\"zyx8\",\"foo8\"]",
                "expected_output": "[[\"abc8\",\"bca8\"],[\"foo8\"],[\"xyz8\",\"zyx8\"]]",
                "is_sample": false
            },
            {
                "input": "[\"abc9\",\"bca9\",\"xyz9\",\"zyx9\",\"foo9\"]",
                "expected_output": "[[\"abc9\",\"bca9\"],[\"foo9\"],[\"xyz9\",\"zyx9\"]]",
                "is_sample": false
            },
            {
                "input": "[\"abc10\",\"bca10\",\"xyz10\",\"zyx10\",\"foo10\"]",
                "expected_output": "[[\"abc10\",\"bca10\"],[\"foo10\"],[\"xyz10\",\"zyx10\"]]",
                "is_sample": false
            },
            {
                "input": "[\"abc11\",\"bca11\",\"xyz11\",\"zyx11\",\"foo11\"]",
                "expected_output": "[[\"abc11\",\"bca11\"],[\"foo11\"],[\"xyz11\",\"zyx11\"]]",
                "is_sample": false
            },
            {
                "input": "[\"abc12\",\"bca12\",\"xyz12\",\"zyx12\",\"foo12\"]",
                "expected_output": "[[\"abc12\",\"bca12\"],[\"foo12\"],[\"xyz12\",\"zyx12\"]]",
                "is_sample": false
            },
            {
                "input": "[\"abc13\",\"bca13\",\"xyz13\",\"zyx13\",\"foo13\"]",
                "expected_output": "[[\"abc13\",\"bca13\"],[\"foo13\"],[\"xyz13\",\"zyx13\"]]",
                "is_sample": false
            },
            {
                "input": "[\"abc14\",\"bca14\",\"xyz14\",\"zyx14\",\"foo14\"]",
                "expected_output": "[[\"abc14\",\"bca14\"],[\"foo14\"],[\"xyz14\",\"zyx14\"]]",
                "is_sample": false
            },
            {
                "input": "[\"abc15\",\"bca15\",\"xyz15\",\"zyx15\",\"foo15\"]",
                "expected_output": "[[\"abc15\",\"bca15\"],[\"foo15\"],[\"xyz15\",\"zyx15\"]]",
                "is_sample": false
            },
            {
                "input": "[\"abc16\",\"bca16\",\"xyz16\",\"zyx16\",\"foo16\"]",
                "expected_output": "[[\"abc16\",\"bca16\"],[\"foo16\"],[\"xyz16\",\"zyx16\"]]",
                "is_sample": false
            },
            {
                "input": "[\"abc17\",\"bca17\",\"xyz17\",\"zyx17\",\"foo17\"]",
                "expected_output": "[[\"abc17\",\"bca17\"],[\"foo17\"],[\"xyz17\",\"zyx17\"]]",
                "is_sample": false
            },
            {
                "input": "[\"abc18\",\"bca18\",\"xyz18\",\"zyx18\",\"foo18\"]",
                "expected_output": "[[\"abc18\",\"bca18\"],[\"foo18\"],[\"xyz18\",\"zyx18\"]]",
                "is_sample": false
            },
            {
                "input": "[\"abc19\",\"bca19\",\"xyz19\",\"zyx19\",\"foo19\"]",
                "expected_output": "[[\"abc19\",\"bca19\"],[\"foo19\"],[\"xyz19\",\"zyx19\"]]",
                "is_sample": false
            },
            {
                "input": "[\"abc20\",\"bca20\",\"xyz20\",\"zyx20\",\"foo20\"]",
                "expected_output": "[[\"abc20\",\"bca20\"],[\"foo20\"],[\"xyz20\",\"zyx20\"]]",
                "is_sample": false
            },
            {
                "input": "[\"abc21\",\"bca21\",\"xyz21\",\"zyx21\",\"foo21\"]",
                "expected_output": "[[\"abc21\",\"bca21\"],[\"foo21\"],[\"xyz21\",\"zyx21\"]]",
                "is_sample": false
            },
            {
                "input": "[\"abc22\",\"bca22\",\"xyz22\",\"zyx22\",\"foo22\"]",
                "expected_output": "[[\"abc22\",\"bca22\"],[\"foo22\"],[\"xyz22\",\"zyx22\"]]",
                "is_sample": false
            },
            {
                "input": "[\"abc23\",\"bca23\",\"xyz23\",\"zyx23\",\"foo23\"]",
                "expected_output": "[[\"abc23\",\"bca23\"],[\"foo23\"],[\"xyz23\",\"zyx23\"]]",
                "is_sample": false
            },
            {
                "input": "[\"abc24\",\"bca24\",\"xyz24\",\"zyx24\",\"foo24\"]",
                "expected_output": "[[\"abc24\",\"bca24\"],[\"foo24\"],[\"xyz24\",\"zyx24\"]]",
                "is_sample": false
            },
            {
                "input": "[\"abc25\",\"bca25\",\"xyz25\",\"zyx25\",\"foo25\"]",
                "expected_output": "[[\"abc25\",\"bca25\"],[\"foo25\"],[\"xyz25\",\"zyx25\"]]",
                "is_sample": false
            },
            {
                "input": "[\"abc26\",\"bca26\",\"xyz26\",\"zyx26\",\"foo26\"]",
                "expected_output": "[[\"abc26\",\"bca26\"],[\"foo26\"],[\"xyz26\",\"zyx26\"]]",
                "is_sample": false
            },
            {
                "input": "[\"abc27\",\"bca27\",\"xyz27\",\"zyx27\",\"foo27\"]",
                "expected_output": "[[\"abc27\",\"bca27\"],[\"foo27\"],[\"xyz27\",\"zyx27\"]]",
                "is_sample": false
            },
            {
                "input": "[\"abc28\",\"bca28\",\"xyz28\",\"zyx28\",\"foo28\"]",
                "expected_output": "[[\"abc28\",\"bca28\"],[\"foo28\"],[\"xyz28\",\"zyx28\"]]",
                "is_sample": false
            },
            {
                "input": "[\"abc29\",\"bca29\",\"xyz29\",\"zyx29\",\"foo29\"]",
                "expected_output": "[[\"abc29\",\"bca29\"],[\"foo29\"],[\"xyz29\",\"zyx29\"]]",
                "is_sample": false
            },
            {
                "input": "[\"abc30\",\"bca30\",\"xyz30\",\"zyx30\",\"foo30\"]",
                "expected_output": "[[\"abc30\",\"bca30\"],[\"foo30\"],[\"xyz30\",\"zyx30\"]]",
                "is_sample": false
            },
            {
                "input": "[\"abc31\",\"bca31\",\"xyz31\",\"zyx31\",\"foo31\"]",
                "expected_output": "[[\"abc31\",\"bca31\"],[\"foo31\"],[\"xyz31\",\"zyx31\"]]",
                "is_sample": false
            },
            {
                "input": "[\"abc32\",\"bca32\",\"xyz32\",\"zyx32\",\"foo32\"]",
                "expected_output": "[[\"abc32\",\"bca32\"],[\"foo32\"],[\"xyz32\",\"zyx32\"]]",
                "is_sample": false
            },
            {
                "input": "[\"abc33\",\"bca33\",\"xyz33\",\"zyx33\",\"foo33\"]",
                "expected_output": "[[\"abc33\",\"bca33\"],[\"foo33\"],[\"xyz33\",\"zyx33\"]]",
                "is_sample": false
            },
            {
                "input": "[\"abc34\",\"bca34\",\"xyz34\",\"zyx34\",\"foo34\"]",
                "expected_output": "[[\"abc34\",\"bca34\"],[\"foo34\"],[\"xyz34\",\"zyx34\"]]",
                "is_sample": false
            },
            {
                "input": "[\"abc35\",\"bca35\",\"xyz35\",\"zyx35\",\"foo35\"]",
                "expected_output": "[[\"abc35\",\"bca35\"],[\"foo35\"],[\"xyz35\",\"zyx35\"]]",
                "is_sample": false
            },
            {
                "input": "[\"abc36\",\"bca36\",\"xyz36\",\"zyx36\",\"foo36\"]",
                "expected_output": "[[\"abc36\",\"bca36\"],[\"foo36\"],[\"xyz36\",\"zyx36\"]]",
                "is_sample": false
            },
            {
                "input": "[\"abc37\",\"bca37\",\"xyz37\",\"zyx37\",\"foo37\"]",
                "expected_output": "[[\"abc37\",\"bca37\"],[\"foo37\"],[\"xyz37\",\"zyx37\"]]",
                "is_sample": false
            },
            {
                "input": "[\"abc38\",\"bca38\",\"xyz38\",\"zyx38\",\"foo38\"]",
                "expected_output": "[[\"abc38\",\"bca38\"],[\"foo38\"],[\"xyz38\",\"zyx38\"]]",
                "is_sample": false
            },
            {
                "input": "[\"abc39\",\"bca39\",\"xyz39\",\"zyx39\",\"foo39\"]",
                "expected_output": "[[\"abc39\",\"bca39\"],[\"foo39\"],[\"xyz39\",\"zyx39\"]]",
                "is_sample": false
            },
            {
                "input": "[\"abc40\",\"bca40\",\"xyz40\",\"zyx40\",\"foo40\"]",
                "expected_output": "[[\"abc40\",\"bca40\"],[\"foo40\"],[\"xyz40\",\"zyx40\"]]",
                "is_sample": false
            },
            {
                "input": "[\"abc41\",\"bca41\",\"xyz41\",\"zyx41\",\"foo41\"]",
                "expected_output": "[[\"abc41\",\"bca41\"],[\"foo41\"],[\"xyz41\",\"zyx41\"]]",
                "is_sample": false
            },
            {
                "input": "[\"abc42\",\"bca42\",\"xyz42\",\"zyx42\",\"foo42\"]",
                "expected_output": "[[\"abc42\",\"bca42\"],[\"foo42\"],[\"xyz42\",\"zyx42\"]]",
                "is_sample": false
            },
            {
                "input": "[\"abc43\",\"bca43\",\"xyz43\",\"zyx43\",\"foo43\"]",
                "expected_output": "[[\"abc43\",\"bca43\"],[\"foo43\"],[\"xyz43\",\"zyx43\"]]",
                "is_sample": false
            },
            {
                "input": "[\"abc44\",\"bca44\",\"xyz44\",\"zyx44\",\"foo44\"]",
                "expected_output": "[[\"abc44\",\"bca44\"],[\"foo44\"],[\"xyz44\",\"zyx44\"]]",
                "is_sample": false
            },
            {
                "input": "[\"abc45\",\"bca45\",\"xyz45\",\"zyx45\",\"foo45\"]",
                "expected_output": "[[\"abc45\",\"bca45\"],[\"foo45\"],[\"xyz45\",\"zyx45\"]]",
                "is_sample": false
            },
            {
                "input": "[\"abc46\",\"bca46\",\"xyz46\",\"zyx46\",\"foo46\"]",
                "expected_output": "[[\"abc46\",\"bca46\"],[\"foo46\"],[\"xyz46\",\"zyx46\"]]",
                "is_sample": false
            },
            {
                "input": "[\"abc47\",\"bca47\",\"xyz47\",\"zyx47\",\"foo47\"]",
                "expected_output": "[[\"abc47\",\"bca47\"],[\"foo47\"],[\"xyz47\",\"zyx47\"]]",
                "is_sample": false
            },
            {
                "input": "[\"abc48\",\"bca48\",\"xyz48\",\"zyx48\",\"foo48\"]",
                "expected_output": "[[\"abc48\",\"bca48\"],[\"foo48\"],[\"xyz48\",\"zyx48\"]]",
                "is_sample": false
            },
            {
                "input": "[\"abc49\",\"bca49\",\"xyz49\",\"zyx49\",\"foo49\"]",
                "expected_output": "[[\"abc49\",\"bca49\"],[\"foo49\"],[\"xyz49\",\"zyx49\"]]",
                "is_sample": false
            },
            {
                "input": "[\"abc50\",\"bca50\",\"xyz50\",\"zyx50\",\"foo50\"]",
                "expected_output": "[[\"abc50\",\"bca50\"],[\"foo50\"],[\"xyz50\",\"zyx50\"]]",
                "is_sample": false
            }
        ]
    },
    {
        "question_number": 45,
        "title": "Top K Frequent Elements",
        "level": "Medium",
        "tags": [
            "Array",
            "Hash Table",
            "Divide and Conquer",
            "Sorting",
            "Heap",
            "Bucket Sort",
            "Counting",
            "Quickselect"
        ],
        "description": "Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.\n\nInput format (2 lines):\nLine 1: nums as JSON array\nLine 2: k",
        "constraints": "1 <= nums.length <= 10^5\n-10^4 <= nums[i] <= 10^4\nk is in the range [1, the number of unique elements in the array].\nIt is guaranteed that the answer is unique.",
        "starter": "class Solution {\n    public int[] topKFrequent(int[] nums, int k) {\n        // Write your code here\n        return new int[]{};\n    }\n}",
        "driver": {
            "key": "intArrayAndKToIntArray",
            "method": "topKFrequent"
        },
        "testcases": [
            {
                "input": "[1,1,1,2,2,3]\n2",
                "expected_output": "[1,2]",
                "is_sample": true
            },
            {
                "input": "[1]\n1",
                "expected_output": "[1]",
                "is_sample": true
            },
            {
                "input": "[1,1,1,2,2,3]\n2",
                "expected_output": "[1,2]",
                "is_sample": false
            },
            {
                "input": "[2,2,2,3,3,4]\n2",
                "expected_output": "[2,3]",
                "is_sample": false
            },
            {
                "input": "[3,3,3,4,4,5]\n2",
                "expected_output": "[3,4]",
                "is_sample": false
            },
            {
                "input": "[4,4,4,5,5,6]\n2",
                "expected_output": "[4,5]",
                "is_sample": false
            },
            {
                "input": "[5,5,5,6,6,7]\n2",
                "expected_output": "[5,6]",
                "is_sample": false
            },
            {
                "input": "[6,6,6,7,7,8]\n2",
                "expected_output": "[6,7]",
                "is_sample": false
            },
            {
                "input": "[7,7,7,8,8,9]\n2",
                "expected_output": "[7,8]",
                "is_sample": false
            },
            {
                "input": "[8,8,8,9,9,10]\n2",
                "expected_output": "[8,9]",
                "is_sample": false
            },
            {
                "input": "[9,9,9,10,10,11]\n2",
                "expected_output": "[9,10]",
                "is_sample": false
            },
            {
                "input": "[10,10,10,11,11,12]\n2",
                "expected_output": "[10,11]",
                "is_sample": false
            },
            {
                "input": "[11,11,11,12,12,13]\n2",
                "expected_output": "[11,12]",
                "is_sample": false
            },
            {
                "input": "[12,12,12,13,13,14]\n2",
                "expected_output": "[12,13]",
                "is_sample": false
            },
            {
                "input": "[13,13,13,14,14,15]\n2",
                "expected_output": "[13,14]",
                "is_sample": false
            },
            {
                "input": "[14,14,14,15,15,16]\n2",
                "expected_output": "[14,15]",
                "is_sample": false
            },
            {
                "input": "[15,15,15,16,16,17]\n2",
                "expected_output": "[15,16]",
                "is_sample": false
            },
            {
                "input": "[16,16,16,17,17,18]\n2",
                "expected_output": "[16,17]",
                "is_sample": false
            },
            {
                "input": "[17,17,17,18,18,19]\n2",
                "expected_output": "[17,18]",
                "is_sample": false
            },
            {
                "input": "[18,18,18,19,19,20]\n2",
                "expected_output": "[18,19]",
                "is_sample": false
            },
            {
                "input": "[19,19,19,20,20,21]\n2",
                "expected_output": "[19,20]",
                "is_sample": false
            },
            {
                "input": "[20,20,20,21,21,22]\n2",
                "expected_output": "[20,21]",
                "is_sample": false
            },
            {
                "input": "[21,21,21,22,22,23]\n2",
                "expected_output": "[21,22]",
                "is_sample": false
            },
            {
                "input": "[22,22,22,23,23,24]\n2",
                "expected_output": "[22,23]",
                "is_sample": false
            },
            {
                "input": "[23,23,23,24,24,25]\n2",
                "expected_output": "[23,24]",
                "is_sample": false
            },
            {
                "input": "[24,24,24,25,25,26]\n2",
                "expected_output": "[24,25]",
                "is_sample": false
            },
            {
                "input": "[25,25,25,26,26,27]\n2",
                "expected_output": "[25,26]",
                "is_sample": false
            },
            {
                "input": "[26,26,26,27,27,28]\n2",
                "expected_output": "[26,27]",
                "is_sample": false
            },
            {
                "input": "[27,27,27,28,28,29]\n2",
                "expected_output": "[27,28]",
                "is_sample": false
            },
            {
                "input": "[28,28,28,29,29,30]\n2",
                "expected_output": "[28,29]",
                "is_sample": false
            },
            {
                "input": "[29,29,29,30,30,31]\n2",
                "expected_output": "[29,30]",
                "is_sample": false
            },
            {
                "input": "[30,30,30,31,31,32]\n2",
                "expected_output": "[30,31]",
                "is_sample": false
            },
            {
                "input": "[31,31,31,32,32,33]\n2",
                "expected_output": "[31,32]",
                "is_sample": false
            },
            {
                "input": "[32,32,32,33,33,34]\n2",
                "expected_output": "[32,33]",
                "is_sample": false
            },
            {
                "input": "[33,33,33,34,34,35]\n2",
                "expected_output": "[33,34]",
                "is_sample": false
            },
            {
                "input": "[34,34,34,35,35,36]\n2",
                "expected_output": "[34,35]",
                "is_sample": false
            },
            {
                "input": "[35,35,35,36,36,37]\n2",
                "expected_output": "[35,36]",
                "is_sample": false
            },
            {
                "input": "[36,36,36,37,37,38]\n2",
                "expected_output": "[36,37]",
                "is_sample": false
            },
            {
                "input": "[37,37,37,38,38,39]\n2",
                "expected_output": "[37,38]",
                "is_sample": false
            },
            {
                "input": "[38,38,38,39,39,40]\n2",
                "expected_output": "[38,39]",
                "is_sample": false
            },
            {
                "input": "[39,39,39,40,40,41]\n2",
                "expected_output": "[39,40]",
                "is_sample": false
            },
            {
                "input": "[40,40,40,41,41,42]\n2",
                "expected_output": "[40,41]",
                "is_sample": false
            },
            {
                "input": "[41,41,41,42,42,43]\n2",
                "expected_output": "[41,42]",
                "is_sample": false
            },
            {
                "input": "[42,42,42,43,43,44]\n2",
                "expected_output": "[42,43]",
                "is_sample": false
            },
            {
                "input": "[43,43,43,44,44,45]\n2",
                "expected_output": "[43,44]",
                "is_sample": false
            },
            {
                "input": "[44,44,44,45,45,46]\n2",
                "expected_output": "[44,45]",
                "is_sample": false
            },
            {
                "input": "[45,45,45,46,46,47]\n2",
                "expected_output": "[45,46]",
                "is_sample": false
            },
            {
                "input": "[46,46,46,47,47,48]\n2",
                "expected_output": "[46,47]",
                "is_sample": false
            },
            {
                "input": "[47,47,47,48,48,49]\n2",
                "expected_output": "[47,48]",
                "is_sample": false
            },
            {
                "input": "[48,48,48,49,49,50]\n2",
                "expected_output": "[48,49]",
                "is_sample": false
            },
            {
                "input": "[49,49,49,50,50,51]\n2",
                "expected_output": "[49,50]",
                "is_sample": false
            },
            {
                "input": "[50,50,50,51,51,52]\n2",
                "expected_output": "[50,51]",
                "is_sample": false
            }
        ]
    },
    {
        "question_number": 46,
        "title": "Product of Array Except Self",
        "level": "Medium",
        "tags": [
            "Array",
            "Prefix Sum"
        ],
        "description": "Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].\n\nThe product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.\n\nYou must write an algorithm that runs in O(n) time and without using the division operation.",
        "constraints": "2 <= nums.length <= 10^5\n-30 <= nums[i] <= 30\nThe product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.",
        "starter": "class Solution {\n    public int[] productExceptSelf(int[] nums) {\n        // Write your code here\n        return new int[]{};\n    }\n}",
        "driver": {
            "key": "intArrayToIntArray",
            "method": "productExceptSelf"
        },
        "testcases": [
            {
                "input": "[1,2,3,4]",
                "expected_output": "[24,12,8,6]",
                "is_sample": true
            },
            {
                "input": "[-1,1,0,-3,3]",
                "expected_output": "[0,0,9,0,0]",
                "is_sample": true
            },
            {
                "input": "[2,2,2,2]",
                "expected_output": "[8,8,8,8]",
                "is_sample": false
            },
            {
                "input": "[3,3,3,2]",
                "expected_output": "[18,18,18,27]",
                "is_sample": false
            },
            {
                "input": "[4,4,1,2]",
                "expected_output": "[8,8,32,16]",
                "is_sample": false
            },
            {
                "input": "[5,1,2,2]",
                "expected_output": "[4,20,10,10]",
                "is_sample": false
            },
            {
                "input": "[1,2,3,2]",
                "expected_output": "[12,6,4,6]",
                "is_sample": false
            },
            {
                "input": "[2,3,1,2]",
                "expected_output": "[6,4,12,6]",
                "is_sample": false
            },
            {
                "input": "[3,4,2,2]",
                "expected_output": "[16,12,24,24]",
                "is_sample": false
            },
            {
                "input": "[4,1,3,2]",
                "expected_output": "[6,24,8,12]",
                "is_sample": false
            },
            {
                "input": "[5,2,1,2]",
                "expected_output": "[4,10,20,10]",
                "is_sample": false
            },
            {
                "input": "[1,3,2,2]",
                "expected_output": "[12,4,6,6]",
                "is_sample": false
            },
            {
                "input": "[2,4,3,2]",
                "expected_output": "[24,12,16,24]",
                "is_sample": false
            },
            {
                "input": "[3,1,1,2]",
                "expected_output": "[2,6,6,3]",
                "is_sample": false
            },
            {
                "input": "[4,2,2,2]",
                "expected_output": "[8,16,16,16]",
                "is_sample": false
            },
            {
                "input": "[5,3,3,2]",
                "expected_output": "[18,30,30,45]",
                "is_sample": false
            },
            {
                "input": "[1,4,1,2]",
                "expected_output": "[8,2,8,4]",
                "is_sample": false
            },
            {
                "input": "[2,1,2,2]",
                "expected_output": "[4,8,4,4]",
                "is_sample": false
            },
            {
                "input": "[3,2,3,2]",
                "expected_output": "[12,18,12,18]",
                "is_sample": false
            },
            {
                "input": "[4,3,1,2]",
                "expected_output": "[6,8,24,12]",
                "is_sample": false
            },
            {
                "input": "[5,4,2,2]",
                "expected_output": "[16,20,40,40]",
                "is_sample": false
            },
            {
                "input": "[1,1,3,2]",
                "expected_output": "[6,6,2,3]",
                "is_sample": false
            },
            {
                "input": "[2,2,1,2]",
                "expected_output": "[4,4,8,4]",
                "is_sample": false
            },
            {
                "input": "[3,3,2,2]",
                "expected_output": "[12,12,18,18]",
                "is_sample": false
            },
            {
                "input": "[4,4,3,2]",
                "expected_output": "[24,24,32,48]",
                "is_sample": false
            },
            {
                "input": "[5,1,1,2]",
                "expected_output": "[2,10,10,5]",
                "is_sample": false
            },
            {
                "input": "[1,2,2,2]",
                "expected_output": "[8,4,4,4]",
                "is_sample": false
            },
            {
                "input": "[2,3,3,2]",
                "expected_output": "[18,12,12,18]",
                "is_sample": false
            },
            {
                "input": "[3,4,1,2]",
                "expected_output": "[8,6,24,12]",
                "is_sample": false
            },
            {
                "input": "[4,1,2,2]",
                "expected_output": "[4,16,8,8]",
                "is_sample": false
            },
            {
                "input": "[5,2,3,2]",
                "expected_output": "[12,30,20,30]",
                "is_sample": false
            },
            {
                "input": "[1,3,1,2]",
                "expected_output": "[6,2,6,3]",
                "is_sample": false
            },
            {
                "input": "[2,4,2,2]",
                "expected_output": "[16,8,16,16]",
                "is_sample": false
            },
            {
                "input": "[3,1,3,2]",
                "expected_output": "[6,18,6,9]",
                "is_sample": false
            },
            {
                "input": "[4,2,1,2]",
                "expected_output": "[4,8,16,8]",
                "is_sample": false
            },
            {
                "input": "[5,3,2,2]",
                "expected_output": "[12,20,30,30]",
                "is_sample": false
            },
            {
                "input": "[1,4,3,2]",
                "expected_output": "[24,6,8,12]",
                "is_sample": false
            },
            {
                "input": "[2,1,1,2]",
                "expected_output": "[2,4,4,2]",
                "is_sample": false
            },
            {
                "input": "[3,2,2,2]",
                "expected_output": "[8,12,12,12]",
                "is_sample": false
            },
            {
                "input": "[4,3,3,2]",
                "expected_output": "[18,24,24,36]",
                "is_sample": false
            },
            {
                "input": "[5,4,1,2]",
                "expected_output": "[8,10,40,20]",
                "is_sample": false
            },
            {
                "input": "[1,1,2,2]",
                "expected_output": "[4,4,2,2]",
                "is_sample": false
            },
            {
                "input": "[2,2,3,2]",
                "expected_output": "[12,12,8,12]",
                "is_sample": false
            },
            {
                "input": "[3,3,1,2]",
                "expected_output": "[6,6,18,9]",
                "is_sample": false
            },
            {
                "input": "[4,4,2,2]",
                "expected_output": "[16,16,32,32]",
                "is_sample": false
            },
            {
                "input": "[5,1,3,2]",
                "expected_output": "[6,30,10,15]",
                "is_sample": false
            },
            {
                "input": "[1,2,1,2]",
                "expected_output": "[4,2,4,2]",
                "is_sample": false
            },
            {
                "input": "[2,3,2,2]",
                "expected_output": "[12,8,12,12]",
                "is_sample": false
            },
            {
                "input": "[3,4,3,2]",
                "expected_output": "[24,18,24,36]",
                "is_sample": false
            },
            {
                "input": "[4,1,1,2]",
                "expected_output": "[2,8,8,4]",
                "is_sample": false
            },
            {
                "input": "[5,2,2,2]",
                "expected_output": "[8,20,20,20]",
                "is_sample": false
            },
            {
                "input": "[1,3,3,2]",
                "expected_output": "[18,6,6,9]",
                "is_sample": false
            }
        ]
    },
    {
        "question_number": 47,
        "title": "Longest Consecutive Sequence",
        "level": "Medium",
        "tags": [
            "Array",
            "Hash Table",
            "Union Find"
        ],
        "description": "Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.\n\nYou must write an algorithm that runs in O(n) time.",
        "constraints": "0 <= nums.length <= 10^5\n-10^9 <= nums[i] <= 10^9",
        "starter": "class Solution {\n    public int longestConsecutive(int[] nums) {\n        // Write your code here\n        return 0;\n    }\n}",
        "driver": {
            "key": "intArrayToInt",
            "method": "longestConsecutive"
        },
        "testcases": [
            {
                "input": "[100,4,200,1,3,2]",
                "expected_output": "4",
                "is_sample": true
            },
            {
                "input": "[0,3,7,2,5,8,4,6,0,1]",
                "expected_output": "9",
                "is_sample": true
            },
            {
                "input": "[10,1,2,3,4,20,5]",
                "expected_output": "5",
                "is_sample": false
            },
            {
                "input": "[20,2,3,4,5,40,6]",
                "expected_output": "5",
                "is_sample": false
            },
            {
                "input": "[30,3,4,5,6,60,7]",
                "expected_output": "5",
                "is_sample": false
            },
            {
                "input": "[40,4,5,6,7,80,8]",
                "expected_output": "5",
                "is_sample": false
            },
            {
                "input": "[50,5,6,7,8,100,9]",
                "expected_output": "5",
                "is_sample": false
            },
            {
                "input": "[60,6,7,8,9,120,10]",
                "expected_output": "5",
                "is_sample": false
            },
            {
                "input": "[70,7,8,9,10,140,11]",
                "expected_output": "5",
                "is_sample": false
            },
            {
                "input": "[80,8,9,10,11,160,12]",
                "expected_output": "5",
                "is_sample": false
            },
            {
                "input": "[90,9,10,11,12,180,13]",
                "expected_output": "5",
                "is_sample": false
            },
            {
                "input": "[100,10,11,12,13,200,14]",
                "expected_output": "5",
                "is_sample": false
            },
            {
                "input": "[110,11,12,13,14,220,15]",
                "expected_output": "5",
                "is_sample": false
            },
            {
                "input": "[120,12,13,14,15,240,16]",
                "expected_output": "5",
                "is_sample": false
            },
            {
                "input": "[130,13,14,15,16,260,17]",
                "expected_output": "5",
                "is_sample": false
            },
            {
                "input": "[140,14,15,16,17,280,18]",
                "expected_output": "5",
                "is_sample": false
            },
            {
                "input": "[150,15,16,17,18,300,19]",
                "expected_output": "5",
                "is_sample": false
            },
            {
                "input": "[160,16,17,18,19,320,20]",
                "expected_output": "5",
                "is_sample": false
            },
            {
                "input": "[170,17,18,19,20,340,21]",
                "expected_output": "5",
                "is_sample": false
            },
            {
                "input": "[180,18,19,20,21,360,22]",
                "expected_output": "5",
                "is_sample": false
            },
            {
                "input": "[190,19,20,21,22,380,23]",
                "expected_output": "5",
                "is_sample": false
            },
            {
                "input": "[200,20,21,22,23,400,24]",
                "expected_output": "5",
                "is_sample": false
            },
            {
                "input": "[210,21,22,23,24,420,25]",
                "expected_output": "5",
                "is_sample": false
            },
            {
                "input": "[220,22,23,24,25,440,26]",
                "expected_output": "5",
                "is_sample": false
            },
            {
                "input": "[230,23,24,25,26,460,27]",
                "expected_output": "5",
                "is_sample": false
            },
            {
                "input": "[240,24,25,26,27,480,28]",
                "expected_output": "5",
                "is_sample": false
            },
            {
                "input": "[250,25,26,27,28,500,29]",
                "expected_output": "5",
                "is_sample": false
            },
            {
                "input": "[260,26,27,28,29,520,30]",
                "expected_output": "5",
                "is_sample": false
            },
            {
                "input": "[270,27,28,29,30,540,31]",
                "expected_output": "5",
                "is_sample": false
            },
            {
                "input": "[280,28,29,30,31,560,32]",
                "expected_output": "5",
                "is_sample": false
            },
            {
                "input": "[290,29,30,31,32,580,33]",
                "expected_output": "5",
                "is_sample": false
            },
            {
                "input": "[300,30,31,32,33,600,34]",
                "expected_output": "5",
                "is_sample": false
            },
            {
                "input": "[310,31,32,33,34,620,35]",
                "expected_output": "5",
                "is_sample": false
            },
            {
                "input": "[320,32,33,34,35,640,36]",
                "expected_output": "5",
                "is_sample": false
            },
            {
                "input": "[330,33,34,35,36,660,37]",
                "expected_output": "5",
                "is_sample": false
            },
            {
                "input": "[340,34,35,36,37,680,38]",
                "expected_output": "5",
                "is_sample": false
            },
            {
                "input": "[350,35,36,37,38,700,39]",
                "expected_output": "5",
                "is_sample": false
            },
            {
                "input": "[360,36,37,38,39,720,40]",
                "expected_output": "5",
                "is_sample": false
            },
            {
                "input": "[370,37,38,39,40,740,41]",
                "expected_output": "5",
                "is_sample": false
            },
            {
                "input": "[380,38,39,40,41,760,42]",
                "expected_output": "5",
                "is_sample": false
            },
            {
                "input": "[390,39,40,41,42,780,43]",
                "expected_output": "5",
                "is_sample": false
            },
            {
                "input": "[400,40,41,42,43,800,44]",
                "expected_output": "5",
                "is_sample": false
            },
            {
                "input": "[410,41,42,43,44,820,45]",
                "expected_output": "5",
                "is_sample": false
            },
            {
                "input": "[420,42,43,44,45,840,46]",
                "expected_output": "5",
                "is_sample": false
            },
            {
                "input": "[430,43,44,45,46,860,47]",
                "expected_output": "5",
                "is_sample": false
            },
            {
                "input": "[440,44,45,46,47,880,48]",
                "expected_output": "5",
                "is_sample": false
            },
            {
                "input": "[450,45,46,47,48,900,49]",
                "expected_output": "5",
                "is_sample": false
            },
            {
                "input": "[460,46,47,48,49,920,50]",
                "expected_output": "5",
                "is_sample": false
            },
            {
                "input": "[470,47,48,49,50,940,51]",
                "expected_output": "5",
                "is_sample": false
            },
            {
                "input": "[480,48,49,50,51,960,52]",
                "expected_output": "5",
                "is_sample": false
            },
            {
                "input": "[490,49,50,51,52,980,53]",
                "expected_output": "5",
                "is_sample": false
            },
            {
                "input": "[500,50,51,52,53,1000,54]",
                "expected_output": "5",
                "is_sample": false
            }
        ]
    },
    {
        "question_number": 48,
        "title": "Subarray Sum Equals K",
        "level": "Medium",
        "tags": [
            "Array",
            "Hash Table",
            "Prefix Sum"
        ],
        "description": "Given an array of integers nums and an integer k, return the total number of subarrays whose sum equals to k.\n\nA subarray is a contiguous non-empty sequence of elements within an array.\n\nInput format (2 lines):\nLine 1: nums as JSON array\nLine 2: k",
        "constraints": "1 <= nums.length <= 2 * 10^4\n-1000 <= nums[i] <= 1000\n-10^7 <= k <= 10^7",
        "starter": "class Solution {\n    public int subarraySum(int[] nums, int k) {\n        // Write your code here\n        return 0;\n    }\n}",
        "driver": {
            "key": "intArrayAndKToInt",
            "method": "subarraySum"
        },
        "testcases": [
            {
                "input": "[1,1,1]\n2",
                "expected_output": "2",
                "is_sample": true
            },
            {
                "input": "[1,2,3]\n3",
                "expected_output": "2",
                "is_sample": true
            },
            {
                "input": "[1,-1,1,2,3,-2,2]\n2",
                "expected_output": "3",
                "is_sample": false
            },
            {
                "input": "[1,-1,1,2,3,-2,2]\n3",
                "expected_output": "6",
                "is_sample": false
            },
            {
                "input": "[1,-1,1,2,3,-2,2]\n4",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "[1,-1,1,2,3,-2,2]\n1",
                "expected_output": "4",
                "is_sample": false
            },
            {
                "input": "[1,-1,1,2,3,-2,2]\n2",
                "expected_output": "3",
                "is_sample": false
            },
            {
                "input": "[1,-1,1,2,3,-2,2]\n3",
                "expected_output": "6",
                "is_sample": false
            },
            {
                "input": "[1,-1,1,2,3,-2,2]\n4",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "[1,-1,1,2,3,-2,2]\n1",
                "expected_output": "4",
                "is_sample": false
            },
            {
                "input": "[1,-1,1,2,3,-2,2]\n2",
                "expected_output": "3",
                "is_sample": false
            },
            {
                "input": "[1,-1,1,2,3,-2,2]\n3",
                "expected_output": "6",
                "is_sample": false
            },
            {
                "input": "[1,-1,1,2,3,-2,2]\n4",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "[1,-1,1,2,3,-2,2]\n1",
                "expected_output": "4",
                "is_sample": false
            },
            {
                "input": "[1,-1,1,2,3,-2,2]\n2",
                "expected_output": "3",
                "is_sample": false
            },
            {
                "input": "[1,-1,1,2,3,-2,2]\n3",
                "expected_output": "6",
                "is_sample": false
            },
            {
                "input": "[1,-1,1,2,3,-2,2]\n4",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "[1,-1,1,2,3,-2,2]\n1",
                "expected_output": "4",
                "is_sample": false
            },
            {
                "input": "[1,-1,1,2,3,-2,2]\n2",
                "expected_output": "3",
                "is_sample": false
            },
            {
                "input": "[1,-1,1,2,3,-2,2]\n3",
                "expected_output": "6",
                "is_sample": false
            },
            {
                "input": "[1,-1,1,2,3,-2,2]\n4",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "[1,-1,1,2,3,-2,2]\n1",
                "expected_output": "4",
                "is_sample": false
            },
            {
                "input": "[1,-1,1,2,3,-2,2]\n2",
                "expected_output": "3",
                "is_sample": false
            },
            {
                "input": "[1,-1,1,2,3,-2,2]\n3",
                "expected_output": "6",
                "is_sample": false
            },
            {
                "input": "[1,-1,1,2,3,-2,2]\n4",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "[1,-1,1,2,3,-2,2]\n1",
                "expected_output": "4",
                "is_sample": false
            },
            {
                "input": "[1,-1,1,2,3,-2,2]\n2",
                "expected_output": "3",
                "is_sample": false
            },
            {
                "input": "[1,-1,1,2,3,-2,2]\n3",
                "expected_output": "6",
                "is_sample": false
            },
            {
                "input": "[1,-1,1,2,3,-2,2]\n4",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "[1,-1,1,2,3,-2,2]\n1",
                "expected_output": "4",
                "is_sample": false
            },
            {
                "input": "[1,-1,1,2,3,-2,2]\n2",
                "expected_output": "3",
                "is_sample": false
            },
            {
                "input": "[1,-1,1,2,3,-2,2]\n3",
                "expected_output": "6",
                "is_sample": false
            },
            {
                "input": "[1,-1,1,2,3,-2,2]\n4",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "[1,-1,1,2,3,-2,2]\n1",
                "expected_output": "4",
                "is_sample": false
            },
            {
                "input": "[1,-1,1,2,3,-2,2]\n2",
                "expected_output": "3",
                "is_sample": false
            },
            {
                "input": "[1,-1,1,2,3,-2,2]\n3",
                "expected_output": "6",
                "is_sample": false
            },
            {
                "input": "[1,-1,1,2,3,-2,2]\n4",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "[1,-1,1,2,3,-2,2]\n1",
                "expected_output": "4",
                "is_sample": false
            },
            {
                "input": "[1,-1,1,2,3,-2,2]\n2",
                "expected_output": "3",
                "is_sample": false
            },
            {
                "input": "[1,-1,1,2,3,-2,2]\n3",
                "expected_output": "6",
                "is_sample": false
            },
            {
                "input": "[1,-1,1,2,3,-2,2]\n4",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "[1,-1,1,2,3,-2,2]\n1",
                "expected_output": "4",
                "is_sample": false
            },
            {
                "input": "[1,-1,1,2,3,-2,2]\n2",
                "expected_output": "3",
                "is_sample": false
            },
            {
                "input": "[1,-1,1,2,3,-2,2]\n3",
                "expected_output": "6",
                "is_sample": false
            },
            {
                "input": "[1,-1,1,2,3,-2,2]\n4",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "[1,-1,1,2,3,-2,2]\n1",
                "expected_output": "4",
                "is_sample": false
            },
            {
                "input": "[1,-1,1,2,3,-2,2]\n2",
                "expected_output": "3",
                "is_sample": false
            },
            {
                "input": "[1,-1,1,2,3,-2,2]\n3",
                "expected_output": "6",
                "is_sample": false
            },
            {
                "input": "[1,-1,1,2,3,-2,2]\n4",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "[1,-1,1,2,3,-2,2]\n1",
                "expected_output": "4",
                "is_sample": false
            },
            {
                "input": "[1,-1,1,2,3,-2,2]\n2",
                "expected_output": "3",
                "is_sample": false
            },
            {
                "input": "[1,-1,1,2,3,-2,2]\n3",
                "expected_output": "6",
                "is_sample": false
            }
        ]
    },
    {
        "question_number": 49,
        "title": "House Robber",
        "level": "Medium",
        "tags": [
            "Array",
            "Dynamic Programming"
        ],
        "description": "You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them is that adjacent houses have security systems connected and it will automatically contact the police if two adjacent houses were broken into on the same night.\n\nGiven an integer array nums representing the amount of money of each house, return the maximum amount of money you can rob tonight without alerting the police.",
        "constraints": "1 <= nums.length <= 100\n0 <= nums[i] <= 400",
        "starter": "class Solution {\n    public int rob(int[] nums) {\n        // Write your code here\n        return 0;\n    }\n}",
        "driver": {
            "key": "intArrayToInt",
            "method": "rob"
        },
        "testcases": [
            {
                "input": "[1,2,3,1]",
                "expected_output": "4",
                "is_sample": true
            },
            {
                "input": "[2,7,9,3,1]",
                "expected_output": "12",
                "is_sample": true
            },
            {
                "input": "[2,5,3,8,1]",
                "expected_output": "13",
                "is_sample": false
            },
            {
                "input": "[4,10,6,16,2]",
                "expected_output": "26",
                "is_sample": false
            },
            {
                "input": "[6,15,9,24,3]",
                "expected_output": "39",
                "is_sample": false
            },
            {
                "input": "[8,20,12,32,4]",
                "expected_output": "52",
                "is_sample": false
            },
            {
                "input": "[10,25,15,40,5]",
                "expected_output": "65",
                "is_sample": false
            },
            {
                "input": "[12,30,18,48,6]",
                "expected_output": "78",
                "is_sample": false
            },
            {
                "input": "[14,35,21,56,7]",
                "expected_output": "91",
                "is_sample": false
            },
            {
                "input": "[16,40,24,64,8]",
                "expected_output": "104",
                "is_sample": false
            },
            {
                "input": "[18,45,27,72,9]",
                "expected_output": "117",
                "is_sample": false
            },
            {
                "input": "[20,50,30,80,10]",
                "expected_output": "130",
                "is_sample": false
            },
            {
                "input": "[22,55,33,88,11]",
                "expected_output": "143",
                "is_sample": false
            },
            {
                "input": "[24,60,36,96,12]",
                "expected_output": "156",
                "is_sample": false
            },
            {
                "input": "[26,65,39,104,13]",
                "expected_output": "169",
                "is_sample": false
            },
            {
                "input": "[28,70,42,112,14]",
                "expected_output": "182",
                "is_sample": false
            },
            {
                "input": "[30,75,45,120,15]",
                "expected_output": "195",
                "is_sample": false
            },
            {
                "input": "[32,80,48,128,16]",
                "expected_output": "208",
                "is_sample": false
            },
            {
                "input": "[34,85,51,136,17]",
                "expected_output": "221",
                "is_sample": false
            },
            {
                "input": "[36,90,54,144,18]",
                "expected_output": "234",
                "is_sample": false
            },
            {
                "input": "[38,95,57,152,19]",
                "expected_output": "247",
                "is_sample": false
            },
            {
                "input": "[40,100,60,160,20]",
                "expected_output": "260",
                "is_sample": false
            },
            {
                "input": "[42,105,63,168,21]",
                "expected_output": "273",
                "is_sample": false
            },
            {
                "input": "[44,110,66,176,22]",
                "expected_output": "286",
                "is_sample": false
            },
            {
                "input": "[46,115,69,184,23]",
                "expected_output": "299",
                "is_sample": false
            },
            {
                "input": "[48,120,72,192,24]",
                "expected_output": "312",
                "is_sample": false
            },
            {
                "input": "[50,125,75,200,25]",
                "expected_output": "325",
                "is_sample": false
            },
            {
                "input": "[52,130,78,208,26]",
                "expected_output": "338",
                "is_sample": false
            },
            {
                "input": "[54,135,81,216,27]",
                "expected_output": "351",
                "is_sample": false
            },
            {
                "input": "[56,140,84,224,28]",
                "expected_output": "364",
                "is_sample": false
            },
            {
                "input": "[58,145,87,232,29]",
                "expected_output": "377",
                "is_sample": false
            },
            {
                "input": "[60,150,90,240,30]",
                "expected_output": "390",
                "is_sample": false
            },
            {
                "input": "[62,155,93,248,31]",
                "expected_output": "403",
                "is_sample": false
            },
            {
                "input": "[64,160,96,256,32]",
                "expected_output": "416",
                "is_sample": false
            },
            {
                "input": "[66,165,99,264,33]",
                "expected_output": "429",
                "is_sample": false
            },
            {
                "input": "[68,170,102,272,34]",
                "expected_output": "442",
                "is_sample": false
            },
            {
                "input": "[70,175,105,280,35]",
                "expected_output": "455",
                "is_sample": false
            },
            {
                "input": "[72,180,108,288,36]",
                "expected_output": "468",
                "is_sample": false
            },
            {
                "input": "[74,185,111,296,37]",
                "expected_output": "481",
                "is_sample": false
            },
            {
                "input": "[76,190,114,304,38]",
                "expected_output": "494",
                "is_sample": false
            },
            {
                "input": "[78,195,117,312,39]",
                "expected_output": "507",
                "is_sample": false
            },
            {
                "input": "[80,200,120,320,40]",
                "expected_output": "520",
                "is_sample": false
            },
            {
                "input": "[82,205,123,328,41]",
                "expected_output": "533",
                "is_sample": false
            },
            {
                "input": "[84,210,126,336,42]",
                "expected_output": "546",
                "is_sample": false
            },
            {
                "input": "[86,215,129,344,43]",
                "expected_output": "559",
                "is_sample": false
            },
            {
                "input": "[88,220,132,352,44]",
                "expected_output": "572",
                "is_sample": false
            },
            {
                "input": "[90,225,135,360,45]",
                "expected_output": "585",
                "is_sample": false
            },
            {
                "input": "[92,230,138,368,46]",
                "expected_output": "598",
                "is_sample": false
            },
            {
                "input": "[94,235,141,376,47]",
                "expected_output": "611",
                "is_sample": false
            },
            {
                "input": "[96,240,144,384,48]",
                "expected_output": "624",
                "is_sample": false
            },
            {
                "input": "[98,245,147,392,49]",
                "expected_output": "637",
                "is_sample": false
            },
            {
                "input": "[100,250,150,400,50]",
                "expected_output": "650",
                "is_sample": false
            }
        ]
    },
    {
        "question_number": 50,
        "title": "House Robber II",
        "level": "Medium",
        "tags": [
            "Array",
            "Dynamic Programming"
        ],
        "description": "You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed. All houses at this place are arranged in a circle. That means the first house is the neighbor of the last one.\n\nGiven an integer array nums representing the amount of money of each house, return the maximum amount of money you can rob tonight without alerting the police.",
        "constraints": "1 <= nums.length <= 100\n0 <= nums[i] <= 1000",
        "starter": "class Solution {\n    public int rob(int[] nums) {\n        // Write your code here\n        return 0;\n    }\n}",
        "driver": {
            "key": "intArrayToInt",
            "method": "rob"
        },
        "testcases": [
            {
                "input": "[2,3,2]",
                "expected_output": "3",
                "is_sample": true
            },
            {
                "input": "[1,2,3,1]",
                "expected_output": "4",
                "is_sample": true
            },
            {
                "input": "[1,2,3]",
                "expected_output": "3",
                "is_sample": false
            },
            {
                "input": "[3,7,4,9,2]",
                "expected_output": "16",
                "is_sample": false
            },
            {
                "input": "[6,14,8,18,4]",
                "expected_output": "32",
                "is_sample": false
            },
            {
                "input": "[9,21,12,27,6]",
                "expected_output": "48",
                "is_sample": false
            },
            {
                "input": "[12,28,16,36,8]",
                "expected_output": "64",
                "is_sample": false
            },
            {
                "input": "[15,35,20,45,10]",
                "expected_output": "80",
                "is_sample": false
            },
            {
                "input": "[18,42,24,54,12]",
                "expected_output": "96",
                "is_sample": false
            },
            {
                "input": "[21,49,28,63,14]",
                "expected_output": "112",
                "is_sample": false
            },
            {
                "input": "[24,56,32,72,16]",
                "expected_output": "128",
                "is_sample": false
            },
            {
                "input": "[27,63,36,81,18]",
                "expected_output": "144",
                "is_sample": false
            },
            {
                "input": "[30,70,40,90,20]",
                "expected_output": "160",
                "is_sample": false
            },
            {
                "input": "[33,77,44,99,22]",
                "expected_output": "176",
                "is_sample": false
            },
            {
                "input": "[36,84,48,108,24]",
                "expected_output": "192",
                "is_sample": false
            },
            {
                "input": "[39,91,52,117,26]",
                "expected_output": "208",
                "is_sample": false
            },
            {
                "input": "[42,98,56,126,28]",
                "expected_output": "224",
                "is_sample": false
            },
            {
                "input": "[45,105,60,135,30]",
                "expected_output": "240",
                "is_sample": false
            },
            {
                "input": "[48,112,64,144,32]",
                "expected_output": "256",
                "is_sample": false
            },
            {
                "input": "[51,119,68,153,34]",
                "expected_output": "272",
                "is_sample": false
            },
            {
                "input": "[54,126,72,162,36]",
                "expected_output": "288",
                "is_sample": false
            },
            {
                "input": "[57,133,76,171,38]",
                "expected_output": "304",
                "is_sample": false
            },
            {
                "input": "[60,140,80,180,40]",
                "expected_output": "320",
                "is_sample": false
            },
            {
                "input": "[63,147,84,189,42]",
                "expected_output": "336",
                "is_sample": false
            },
            {
                "input": "[66,154,88,198,44]",
                "expected_output": "352",
                "is_sample": false
            },
            {
                "input": "[69,161,92,207,46]",
                "expected_output": "368",
                "is_sample": false
            },
            {
                "input": "[72,168,96,216,48]",
                "expected_output": "384",
                "is_sample": false
            },
            {
                "input": "[75,175,100,225,50]",
                "expected_output": "400",
                "is_sample": false
            },
            {
                "input": "[78,182,104,234,52]",
                "expected_output": "416",
                "is_sample": false
            },
            {
                "input": "[81,189,108,243,54]",
                "expected_output": "432",
                "is_sample": false
            },
            {
                "input": "[84,196,112,252,56]",
                "expected_output": "448",
                "is_sample": false
            },
            {
                "input": "[87,203,116,261,58]",
                "expected_output": "464",
                "is_sample": false
            },
            {
                "input": "[90,210,120,270,60]",
                "expected_output": "480",
                "is_sample": false
            },
            {
                "input": "[93,217,124,279,62]",
                "expected_output": "496",
                "is_sample": false
            },
            {
                "input": "[96,224,128,288,64]",
                "expected_output": "512",
                "is_sample": false
            },
            {
                "input": "[99,231,132,297,66]",
                "expected_output": "528",
                "is_sample": false
            },
            {
                "input": "[102,238,136,306,68]",
                "expected_output": "544",
                "is_sample": false
            },
            {
                "input": "[105,245,140,315,70]",
                "expected_output": "560",
                "is_sample": false
            },
            {
                "input": "[108,252,144,324,72]",
                "expected_output": "576",
                "is_sample": false
            },
            {
                "input": "[111,259,148,333,74]",
                "expected_output": "592",
                "is_sample": false
            },
            {
                "input": "[114,266,152,342,76]",
                "expected_output": "608",
                "is_sample": false
            },
            {
                "input": "[117,273,156,351,78]",
                "expected_output": "624",
                "is_sample": false
            },
            {
                "input": "[120,280,160,360,80]",
                "expected_output": "640",
                "is_sample": false
            },
            {
                "input": "[123,287,164,369,82]",
                "expected_output": "656",
                "is_sample": false
            },
            {
                "input": "[126,294,168,378,84]",
                "expected_output": "672",
                "is_sample": false
            },
            {
                "input": "[129,301,172,387,86]",
                "expected_output": "688",
                "is_sample": false
            },
            {
                "input": "[132,308,176,396,88]",
                "expected_output": "704",
                "is_sample": false
            },
            {
                "input": "[135,315,180,405,90]",
                "expected_output": "720",
                "is_sample": false
            },
            {
                "input": "[138,322,184,414,92]",
                "expected_output": "736",
                "is_sample": false
            },
            {
                "input": "[141,329,188,423,94]",
                "expected_output": "752",
                "is_sample": false
            },
            {
                "input": "[144,336,192,432,96]",
                "expected_output": "768",
                "is_sample": false
            },
            {
                "input": "[147,343,196,441,98]",
                "expected_output": "784",
                "is_sample": false
            },
            {
                "input": "[150,350,200,450,100]",
                "expected_output": "800",
                "is_sample": false
            }
        ]
    },
    {
        "question_number": 51,
        "title": "Coin Change",
        "level": "Medium",
        "tags": [
            "Array",
            "Dynamic Programming",
            "Breadth-First Search"
        ],
        "description": "You are given an integer array coins representing coins of different denominations and an integer amount representing a total amount of money.\n\nReturn the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.\n\nInput format (2 lines):\nLine 1: coins as JSON array\nLine 2: amount",
        "constraints": "1 <= coins.length <= 12\n1 <= coins[i] <= 2^31 - 1\n0 <= amount <= 10^4",
        "starter": "class Solution {\n    public int coinChange(int[] coins, int amount) {\n        // Write your code here\n        return -1;\n    }\n}",
        "driver": "coinChange",
        "testcases": [
            {
                "input": "[1,2,5]\n11",
                "expected_output": "3",
                "is_sample": true
            },
            {
                "input": "[2]\n3",
                "expected_output": "-1",
                "is_sample": true
            },
            {
                "input": "[1]\n0",
                "expected_output": "0",
                "is_sample": false
            },
            {
                "input": "[1,2,5]\n5",
                "expected_output": "1",
                "is_sample": false
            },
            {
                "input": "[1,2,5]\n8",
                "expected_output": "3",
                "is_sample": false
            },
            {
                "input": "[1,2,5]\n11",
                "expected_output": "3",
                "is_sample": false
            },
            {
                "input": "[1,2,5]\n14",
                "expected_output": "4",
                "is_sample": false
            },
            {
                "input": "[1,2,5]\n17",
                "expected_output": "4",
                "is_sample": false
            },
            {
                "input": "[1,2,5]\n20",
                "expected_output": "4",
                "is_sample": false
            },
            {
                "input": "[1,2,5]\n23",
                "expected_output": "6",
                "is_sample": false
            },
            {
                "input": "[1,2,5]\n26",
                "expected_output": "6",
                "is_sample": false
            },
            {
                "input": "[1,2,5]\n29",
                "expected_output": "7",
                "is_sample": false
            },
            {
                "input": "[1,2,5]\n32",
                "expected_output": "7",
                "is_sample": false
            },
            {
                "input": "[1,2,5]\n35",
                "expected_output": "7",
                "is_sample": false
            },
            {
                "input": "[1,2,5]\n38",
                "expected_output": "9",
                "is_sample": false
            },
            {
                "input": "[1,2,5]\n41",
                "expected_output": "9",
                "is_sample": false
            },
            {
                "input": "[1,2,5]\n44",
                "expected_output": "10",
                "is_sample": false
            },
            {
                "input": "[1,2,5]\n47",
                "expected_output": "10",
                "is_sample": false
            },
            {
                "input": "[1,2,5]\n50",
                "expected_output": "10",
                "is_sample": false
            },
            {
                "input": "[1,2,5]\n53",
                "expected_output": "12",
                "is_sample": false
            },
            {
                "input": "[1,2,5]\n56",
                "expected_output": "12",
                "is_sample": false
            },
            {
                "input": "[1,2,5]\n59",
                "expected_output": "13",
                "is_sample": false
            },
            {
                "input": "[1,2,5]\n62",
                "expected_output": "13",
                "is_sample": false
            },
            {
                "input": "[1,2,5]\n65",
                "expected_output": "13",
                "is_sample": false
            },
            {
                "input": "[1,2,5]\n68",
                "expected_output": "15",
                "is_sample": false
            },
            {
                "input": "[1,2,5]\n71",
                "expected_output": "15",
                "is_sample": false
            },
            {
                "input": "[1,2,5]\n74",
                "expected_output": "16",
                "is_sample": false
            },
            {
                "input": "[1,2,5]\n77",
                "expected_output": "16",
                "is_sample": false
            },
            {
                "input": "[1,2,5]\n80",
                "expected_output": "16",
                "is_sample": false
            },
            {
                "input": "[1,2,5]\n83",
                "expected_output": "18",
                "is_sample": false
            },
            {
                "input": "[1,2,5]\n86",
                "expected_output": "18",
                "is_sample": false
            },
            {
                "input": "[1,2,5]\n89",
                "expected_output": "19",
                "is_sample": false
            },
            {
                "input": "[1,2,5]\n92",
                "expected_output": "19",
                "is_sample": false
            },
            {
                "input": "[1,2,5]\n95",
                "expected_output": "19",
                "is_sample": false
            },
            {
                "input": "[1,2,5]\n98",
                "expected_output": "21",
                "is_sample": false
            },
            {
                "input": "[1,2,5]\n101",
                "expected_output": "21",
                "is_sample": false
            },
            {
                "input": "[1,2,5]\n104",
                "expected_output": "22",
                "is_sample": false
            },
            {
                "input": "[1,2,5]\n107",
                "expected_output": "22",
                "is_sample": false
            },
            {
                "input": "[1,2,5]\n110",
                "expected_output": "22",
                "is_sample": false
            },
            {
                "input": "[1,2,5]\n113",
                "expected_output": "24",
                "is_sample": false
            },
            {
                "input": "[1,2,5]\n116",
                "expected_output": "24",
                "is_sample": false
            },
            {
                "input": "[1,2,5]\n119",
                "expected_output": "25",
                "is_sample": false
            },
            {
                "input": "[1,2,5]\n122",
                "expected_output": "25",
                "is_sample": false
            },
            {
                "input": "[1,2,5]\n125",
                "expected_output": "25",
                "is_sample": false
            },
            {
                "input": "[1,2,5]\n128",
                "expected_output": "27",
                "is_sample": false
            },
            {
                "input": "[1,2,5]\n131",
                "expected_output": "27",
                "is_sample": false
            },
            {
                "input": "[1,2,5]\n134",
                "expected_output": "28",
                "is_sample": false
            },
            {
                "input": "[1,2,5]\n137",
                "expected_output": "28",
                "is_sample": false
            },
            {
                "input": "[1,2,5]\n140",
                "expected_output": "28",
                "is_sample": false
            },
            {
                "input": "[1,2,5]\n143",
                "expected_output": "30",
                "is_sample": false
            },
            {
                "input": "[1,2,5]\n146",
                "expected_output": "30",
                "is_sample": false
            },
            {
                "input": "[1,2,5]\n149",
                "expected_output": "31",
                "is_sample": false
            },
            {
                "input": "[1,2,5]\n152",
                "expected_output": "31",
                "is_sample": false
            }
        ]
    },
    {
        "question_number": 52,
        "title": "Word Break",
        "level": "Medium",
        "tags": [
            "Array",
            "Hash Table",
            "String",
            "Dynamic Programming",
            "Trie",
            "Memoization"
        ],
        "description": "Given a string s and a dictionary of strings wordDict, return true if s can be segmented into a space-separated sequence of one or more dictionary words.\n\nInput format (2 lines):\nLine 1: s\nLine 2: wordDict as JSON string array",
        "constraints": "1 <= s.length <= 300\n1 <= wordDict.length <= 1000\n1 <= wordDict[i].length <= 20",
        "starter": "class Solution {\n    public boolean wordBreak(String s, String[] wordDict) {\n        // Write your code here\n        return false;\n    }\n}",
        "driver": "wordBreak",
        "testcases": [
            {
                "input": "codexa\n[\"code\",\"xa\"]",
                "expected_output": "true",
                "is_sample": true
            },
            {
                "input": "applepenapple\n[\"apple\",\"pen\"]",
                "expected_output": "true",
                "is_sample": true
            },
            {
                "input": "catsandog\n[\"cats\",\"dog\",\"sand\",\"and\",\"cat\"]",
                "expected_output": "false",
                "is_sample": false
            },
            {
                "input": "hello1world1\n[\"hello1\",\"world1\",\"foo\"]",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "hello2world2\n[\"hello2\",\"world2\",\"foo\"]",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "hello3world3\n[\"hello3\",\"world3\",\"foo\"]",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "hello4world4\n[\"hello4\",\"world4\",\"foo\"]",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "hello5world5\n[\"hello5\",\"world5\",\"foo\"]",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "hello6world6\n[\"hello6\",\"world6\",\"foo\"]",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "hello7world7\n[\"hello7\",\"world7\",\"foo\"]",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "hello8world8\n[\"hello8\",\"world8\",\"foo\"]",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "hello9world9\n[\"hello9\",\"world9\",\"foo\"]",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "hello10world10\n[\"hello10\",\"world10\",\"foo\"]",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "hello11world11\n[\"hello11\",\"world11\",\"foo\"]",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "hello12world12\n[\"hello12\",\"world12\",\"foo\"]",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "hello13world13\n[\"hello13\",\"world13\",\"foo\"]",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "hello14world14\n[\"hello14\",\"world14\",\"foo\"]",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "hello15world15\n[\"hello15\",\"world15\",\"foo\"]",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "hello16world16\n[\"hello16\",\"world16\",\"foo\"]",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "hello17world17\n[\"hello17\",\"world17\",\"foo\"]",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "hello18world18\n[\"hello18\",\"world18\",\"foo\"]",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "hello19world19\n[\"hello19\",\"world19\",\"foo\"]",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "hello20world20\n[\"hello20\",\"world20\",\"foo\"]",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "hello21world21\n[\"hello21\",\"world21\",\"foo\"]",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "hello22world22\n[\"hello22\",\"world22\",\"foo\"]",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "hello23world23\n[\"hello23\",\"world23\",\"foo\"]",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "hello24world24\n[\"hello24\",\"world24\",\"foo\"]",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "hello25world25\n[\"hello25\",\"world25\",\"foo\"]",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "hello26world26\n[\"hello26\",\"world26\",\"foo\"]",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "hello27world27\n[\"hello27\",\"world27\",\"foo\"]",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "hello28world28\n[\"hello28\",\"world28\",\"foo\"]",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "hello29world29\n[\"hello29\",\"world29\",\"foo\"]",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "hello30world30\n[\"hello30\",\"world30\",\"foo\"]",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "hello31world31\n[\"hello31\",\"world31\",\"foo\"]",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "hello32world32\n[\"hello32\",\"world32\",\"foo\"]",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "hello33world33\n[\"hello33\",\"world33\",\"foo\"]",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "hello34world34\n[\"hello34\",\"world34\",\"foo\"]",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "hello35world35\n[\"hello35\",\"world35\",\"foo\"]",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "hello36world36\n[\"hello36\",\"world36\",\"foo\"]",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "hello37world37\n[\"hello37\",\"world37\",\"foo\"]",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "hello38world38\n[\"hello38\",\"world38\",\"foo\"]",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "hello39world39\n[\"hello39\",\"world39\",\"foo\"]",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "hello40world40\n[\"hello40\",\"world40\",\"foo\"]",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "hello41world41\n[\"hello41\",\"world41\",\"foo\"]",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "hello42world42\n[\"hello42\",\"world42\",\"foo\"]",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "hello43world43\n[\"hello43\",\"world43\",\"foo\"]",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "hello44world44\n[\"hello44\",\"world44\",\"foo\"]",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "hello45world45\n[\"hello45\",\"world45\",\"foo\"]",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "hello46world46\n[\"hello46\",\"world46\",\"foo\"]",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "hello47world47\n[\"hello47\",\"world47\",\"foo\"]",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "hello48world48\n[\"hello48\",\"world48\",\"foo\"]",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "hello49world49\n[\"hello49\",\"world49\",\"foo\"]",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "hello50world50\n[\"hello50\",\"world50\",\"foo\"]",
                "expected_output": "true",
                "is_sample": false
            }
        ]
    },
    {
        "question_number": 53,
        "title": "Sort Colors",
        "level": "Medium",
        "tags": [
            "Array",
            "Two Pointers",
            "Sorting"
        ],
        "description": "Given an array nums with n objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white, and blue.\n\nWe will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively.",
        "constraints": "n == nums.length\n1 <= n <= 300\nnums[i] is either 0, 1, or 2.",
        "starter": "class Solution {\n    public void sortColors(int[] nums) {\n        // Write your code here (modify nums in-place)\n    }\n}",
        "driver": {
            "key": "intArrayInPlace",
            "method": "sortColors"
        },
        "testcases": [
            {
                "input": "[2,0,2,1,1,0]",
                "expected_output": "[0,0,1,1,2,2]",
                "is_sample": true
            },
            {
                "input": "[2,0,1]",
                "expected_output": "[0,1,2]",
                "is_sample": true
            },
            {
                "input": "[2,1,2,0,0,1,2]",
                "expected_output": "[0,0,1,1,2,2,2]",
                "is_sample": false
            },
            {
                "input": "[1,2,0,1,0,1,2]",
                "expected_output": "[0,0,1,1,1,2,2]",
                "is_sample": false
            },
            {
                "input": "[0,0,1,2,0,1,2]",
                "expected_output": "[0,0,0,1,1,2,2]",
                "is_sample": false
            },
            {
                "input": "[2,1,2,0,0,1,2]",
                "expected_output": "[0,0,1,1,2,2,2]",
                "is_sample": false
            },
            {
                "input": "[1,2,0,1,0,1,2]",
                "expected_output": "[0,0,1,1,1,2,2]",
                "is_sample": false
            },
            {
                "input": "[0,0,1,2,0,1,2]",
                "expected_output": "[0,0,0,1,1,2,2]",
                "is_sample": false
            },
            {
                "input": "[2,1,2,0,0,1,2]",
                "expected_output": "[0,0,1,1,2,2,2]",
                "is_sample": false
            },
            {
                "input": "[1,2,0,1,0,1,2]",
                "expected_output": "[0,0,1,1,1,2,2]",
                "is_sample": false
            },
            {
                "input": "[0,0,1,2,0,1,2]",
                "expected_output": "[0,0,0,1,1,2,2]",
                "is_sample": false
            },
            {
                "input": "[2,1,2,0,0,1,2]",
                "expected_output": "[0,0,1,1,2,2,2]",
                "is_sample": false
            },
            {
                "input": "[1,2,0,1,0,1,2]",
                "expected_output": "[0,0,1,1,1,2,2]",
                "is_sample": false
            },
            {
                "input": "[0,0,1,2,0,1,2]",
                "expected_output": "[0,0,0,1,1,2,2]",
                "is_sample": false
            },
            {
                "input": "[2,1,2,0,0,1,2]",
                "expected_output": "[0,0,1,1,2,2,2]",
                "is_sample": false
            },
            {
                "input": "[1,2,0,1,0,1,2]",
                "expected_output": "[0,0,1,1,1,2,2]",
                "is_sample": false
            },
            {
                "input": "[0,0,1,2,0,1,2]",
                "expected_output": "[0,0,0,1,1,2,2]",
                "is_sample": false
            },
            {
                "input": "[2,1,2,0,0,1,2]",
                "expected_output": "[0,0,1,1,2,2,2]",
                "is_sample": false
            },
            {
                "input": "[1,2,0,1,0,1,2]",
                "expected_output": "[0,0,1,1,1,2,2]",
                "is_sample": false
            },
            {
                "input": "[0,0,1,2,0,1,2]",
                "expected_output": "[0,0,0,1,1,2,2]",
                "is_sample": false
            },
            {
                "input": "[2,1,2,0,0,1,2]",
                "expected_output": "[0,0,1,1,2,2,2]",
                "is_sample": false
            },
            {
                "input": "[1,2,0,1,0,1,2]",
                "expected_output": "[0,0,1,1,1,2,2]",
                "is_sample": false
            },
            {
                "input": "[0,0,1,2,0,1,2]",
                "expected_output": "[0,0,0,1,1,2,2]",
                "is_sample": false
            },
            {
                "input": "[2,1,2,0,0,1,2]",
                "expected_output": "[0,0,1,1,2,2,2]",
                "is_sample": false
            },
            {
                "input": "[1,2,0,1,0,1,2]",
                "expected_output": "[0,0,1,1,1,2,2]",
                "is_sample": false
            },
            {
                "input": "[0,0,1,2,0,1,2]",
                "expected_output": "[0,0,0,1,1,2,2]",
                "is_sample": false
            },
            {
                "input": "[2,1,2,0,0,1,2]",
                "expected_output": "[0,0,1,1,2,2,2]",
                "is_sample": false
            },
            {
                "input": "[1,2,0,1,0,1,2]",
                "expected_output": "[0,0,1,1,1,2,2]",
                "is_sample": false
            },
            {
                "input": "[0,0,1,2,0,1,2]",
                "expected_output": "[0,0,0,1,1,2,2]",
                "is_sample": false
            },
            {
                "input": "[2,1,2,0,0,1,2]",
                "expected_output": "[0,0,1,1,2,2,2]",
                "is_sample": false
            },
            {
                "input": "[1,2,0,1,0,1,2]",
                "expected_output": "[0,0,1,1,1,2,2]",
                "is_sample": false
            },
            {
                "input": "[0,0,1,2,0,1,2]",
                "expected_output": "[0,0,0,1,1,2,2]",
                "is_sample": false
            },
            {
                "input": "[2,1,2,0,0,1,2]",
                "expected_output": "[0,0,1,1,2,2,2]",
                "is_sample": false
            },
            {
                "input": "[1,2,0,1,0,1,2]",
                "expected_output": "[0,0,1,1,1,2,2]",
                "is_sample": false
            },
            {
                "input": "[0,0,1,2,0,1,2]",
                "expected_output": "[0,0,0,1,1,2,2]",
                "is_sample": false
            },
            {
                "input": "[2,1,2,0,0,1,2]",
                "expected_output": "[0,0,1,1,2,2,2]",
                "is_sample": false
            },
            {
                "input": "[1,2,0,1,0,1,2]",
                "expected_output": "[0,0,1,1,1,2,2]",
                "is_sample": false
            },
            {
                "input": "[0,0,1,2,0,1,2]",
                "expected_output": "[0,0,0,1,1,2,2]",
                "is_sample": false
            },
            {
                "input": "[2,1,2,0,0,1,2]",
                "expected_output": "[0,0,1,1,2,2,2]",
                "is_sample": false
            },
            {
                "input": "[1,2,0,1,0,1,2]",
                "expected_output": "[0,0,1,1,1,2,2]",
                "is_sample": false
            },
            {
                "input": "[0,0,1,2,0,1,2]",
                "expected_output": "[0,0,0,1,1,2,2]",
                "is_sample": false
            },
            {
                "input": "[2,1,2,0,0,1,2]",
                "expected_output": "[0,0,1,1,2,2,2]",
                "is_sample": false
            },
            {
                "input": "[1,2,0,1,0,1,2]",
                "expected_output": "[0,0,1,1,1,2,2]",
                "is_sample": false
            },
            {
                "input": "[0,0,1,2,0,1,2]",
                "expected_output": "[0,0,0,1,1,2,2]",
                "is_sample": false
            },
            {
                "input": "[2,1,2,0,0,1,2]",
                "expected_output": "[0,0,1,1,2,2,2]",
                "is_sample": false
            },
            {
                "input": "[1,2,0,1,0,1,2]",
                "expected_output": "[0,0,1,1,1,2,2]",
                "is_sample": false
            },
            {
                "input": "[0,0,1,2,0,1,2]",
                "expected_output": "[0,0,0,1,1,2,2]",
                "is_sample": false
            },
            {
                "input": "[2,1,2,0,0,1,2]",
                "expected_output": "[0,0,1,1,2,2,2]",
                "is_sample": false
            },
            {
                "input": "[1,2,0,1,0,1,2]",
                "expected_output": "[0,0,1,1,1,2,2]",
                "is_sample": false
            },
            {
                "input": "[0,0,1,2,0,1,2]",
                "expected_output": "[0,0,0,1,1,2,2]",
                "is_sample": false
            },
            {
                "input": "[2,1,2,0,0,1,2]",
                "expected_output": "[0,0,1,1,2,2,2]",
                "is_sample": false
            },
            {
                "input": "[1,2,0,1,0,1,2]",
                "expected_output": "[0,0,1,1,1,2,2]",
                "is_sample": false
            }
        ]
    },
    {
        "question_number": 54,
        "title": "Find Minimum in Rotated Sorted Array",
        "level": "Medium",
        "tags": [
            "Array",
            "Binary Search"
        ],
        "description": "Given the sorted rotated array nums of unique elements, return the minimum element of this array.\n\nYou must write an algorithm that runs in O(log n) time.",
        "constraints": "n == nums.length\n1 <= n <= 5000\n-5000 <= nums[i] <= 5000\nAll the integers of nums are unique.\nnums is sorted and rotated between 1 and n times.",
        "starter": "class Solution {\n    public int findMin(int[] nums) {\n        // Write your code here\n        return 0;\n    }\n}",
        "driver": {
            "key": "intArrayToInt",
            "method": "findMin"
        },
        "testcases": [
            {
                "input": "[3,4,5,1,2]",
                "expected_output": "1",
                "is_sample": true
            },
            {
                "input": "[4,5,6,7,0,1,2]",
                "expected_output": "0",
                "is_sample": true
            },
            {
                "input": "[11,13,15,17]",
                "expected_output": "11",
                "is_sample": false
            },
            {
                "input": "[5,6,1,2,3,4]",
                "expected_output": "1",
                "is_sample": false
            },
            {
                "input": "[6,7,2,3,4,5]",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "[7,8,3,4,5,6]",
                "expected_output": "3",
                "is_sample": false
            },
            {
                "input": "[8,9,4,5,6,7]",
                "expected_output": "4",
                "is_sample": false
            },
            {
                "input": "[9,10,5,6,7,8]",
                "expected_output": "5",
                "is_sample": false
            },
            {
                "input": "[10,11,6,7,8,9]",
                "expected_output": "6",
                "is_sample": false
            },
            {
                "input": "[11,12,7,8,9,10]",
                "expected_output": "7",
                "is_sample": false
            },
            {
                "input": "[12,13,8,9,10,11]",
                "expected_output": "8",
                "is_sample": false
            },
            {
                "input": "[13,14,9,10,11,12]",
                "expected_output": "9",
                "is_sample": false
            },
            {
                "input": "[14,15,10,11,12,13]",
                "expected_output": "10",
                "is_sample": false
            },
            {
                "input": "[15,16,11,12,13,14]",
                "expected_output": "11",
                "is_sample": false
            },
            {
                "input": "[16,17,12,13,14,15]",
                "expected_output": "12",
                "is_sample": false
            },
            {
                "input": "[17,18,13,14,15,16]",
                "expected_output": "13",
                "is_sample": false
            },
            {
                "input": "[18,19,14,15,16,17]",
                "expected_output": "14",
                "is_sample": false
            },
            {
                "input": "[19,20,15,16,17,18]",
                "expected_output": "15",
                "is_sample": false
            },
            {
                "input": "[20,21,16,17,18,19]",
                "expected_output": "16",
                "is_sample": false
            },
            {
                "input": "[21,22,17,18,19,20]",
                "expected_output": "17",
                "is_sample": false
            },
            {
                "input": "[22,23,18,19,20,21]",
                "expected_output": "18",
                "is_sample": false
            },
            {
                "input": "[23,24,19,20,21,22]",
                "expected_output": "19",
                "is_sample": false
            },
            {
                "input": "[24,25,20,21,22,23]",
                "expected_output": "20",
                "is_sample": false
            },
            {
                "input": "[25,26,21,22,23,24]",
                "expected_output": "21",
                "is_sample": false
            },
            {
                "input": "[26,27,22,23,24,25]",
                "expected_output": "22",
                "is_sample": false
            },
            {
                "input": "[27,28,23,24,25,26]",
                "expected_output": "23",
                "is_sample": false
            },
            {
                "input": "[28,29,24,25,26,27]",
                "expected_output": "24",
                "is_sample": false
            },
            {
                "input": "[29,30,25,26,27,28]",
                "expected_output": "25",
                "is_sample": false
            },
            {
                "input": "[30,31,26,27,28,29]",
                "expected_output": "26",
                "is_sample": false
            },
            {
                "input": "[31,32,27,28,29,30]",
                "expected_output": "27",
                "is_sample": false
            },
            {
                "input": "[32,33,28,29,30,31]",
                "expected_output": "28",
                "is_sample": false
            },
            {
                "input": "[33,34,29,30,31,32]",
                "expected_output": "29",
                "is_sample": false
            },
            {
                "input": "[34,35,30,31,32,33]",
                "expected_output": "30",
                "is_sample": false
            },
            {
                "input": "[35,36,31,32,33,34]",
                "expected_output": "31",
                "is_sample": false
            },
            {
                "input": "[36,37,32,33,34,35]",
                "expected_output": "32",
                "is_sample": false
            },
            {
                "input": "[37,38,33,34,35,36]",
                "expected_output": "33",
                "is_sample": false
            },
            {
                "input": "[38,39,34,35,36,37]",
                "expected_output": "34",
                "is_sample": false
            },
            {
                "input": "[39,40,35,36,37,38]",
                "expected_output": "35",
                "is_sample": false
            },
            {
                "input": "[40,41,36,37,38,39]",
                "expected_output": "36",
                "is_sample": false
            },
            {
                "input": "[41,42,37,38,39,40]",
                "expected_output": "37",
                "is_sample": false
            },
            {
                "input": "[42,43,38,39,40,41]",
                "expected_output": "38",
                "is_sample": false
            },
            {
                "input": "[43,44,39,40,41,42]",
                "expected_output": "39",
                "is_sample": false
            },
            {
                "input": "[44,45,40,41,42,43]",
                "expected_output": "40",
                "is_sample": false
            },
            {
                "input": "[45,46,41,42,43,44]",
                "expected_output": "41",
                "is_sample": false
            },
            {
                "input": "[46,47,42,43,44,45]",
                "expected_output": "42",
                "is_sample": false
            },
            {
                "input": "[47,48,43,44,45,46]",
                "expected_output": "43",
                "is_sample": false
            },
            {
                "input": "[48,49,44,45,46,47]",
                "expected_output": "44",
                "is_sample": false
            },
            {
                "input": "[49,50,45,46,47,48]",
                "expected_output": "45",
                "is_sample": false
            },
            {
                "input": "[50,51,46,47,48,49]",
                "expected_output": "46",
                "is_sample": false
            },
            {
                "input": "[51,52,47,48,49,50]",
                "expected_output": "47",
                "is_sample": false
            },
            {
                "input": "[52,53,48,49,50,51]",
                "expected_output": "48",
                "is_sample": false
            },
            {
                "input": "[53,54,49,50,51,52]",
                "expected_output": "49",
                "is_sample": false
            },
            {
                "input": "[54,55,50,51,52,53]",
                "expected_output": "50",
                "is_sample": false
            }
        ]
    },
    {
        "question_number": 55,
        "title": "Search in Rotated Sorted Array",
        "level": "Medium",
        "tags": [
            "Array",
            "Binary Search"
        ],
        "description": "Given the array nums after the possible rotation and an integer target, return the index of target if it is in nums, or -1 if it is not in nums.\n\nYou must write an algorithm with O(log n) runtime complexity.\n\nInput format (2 lines):\nLine 1: nums as JSON array\nLine 2: target",
        "constraints": "1 <= nums.length <= 5000\n-10^4 <= nums[i] <= 10^4\nAll values of nums are unique.\nnums is an ascending array that is possibly rotated.",
        "starter": "class Solution {\n    public int search(int[] nums, int target) {\n        // Write your code here\n        return -1;\n    }\n}",
        "driver": {
            "key": "intArrayAndTargetToInt",
            "method": "search"
        },
        "testcases": [
            {
                "input": "[4,5,6,7,0,1,2]\n0",
                "expected_output": "4",
                "is_sample": true
            },
            {
                "input": "[4,5,6,7,0,1,2]\n3",
                "expected_output": "-1",
                "is_sample": true
            },
            {
                "input": "[1]\n0",
                "expected_output": "-1",
                "is_sample": false
            },
            {
                "input": "[11,13,1,3,5]\n9999",
                "expected_output": "-1",
                "is_sample": false
            },
            {
                "input": "[12,14,2,4,6]\n4",
                "expected_output": "3",
                "is_sample": false
            },
            {
                "input": "[13,15,3,5,7]\n9999",
                "expected_output": "-1",
                "is_sample": false
            },
            {
                "input": "[14,16,4,6,8]\n6",
                "expected_output": "3",
                "is_sample": false
            },
            {
                "input": "[15,17,5,7,9]\n9999",
                "expected_output": "-1",
                "is_sample": false
            },
            {
                "input": "[16,18,6,8,10]\n8",
                "expected_output": "3",
                "is_sample": false
            },
            {
                "input": "[17,19,7,9,11]\n9999",
                "expected_output": "-1",
                "is_sample": false
            },
            {
                "input": "[18,20,8,10,12]\n10",
                "expected_output": "3",
                "is_sample": false
            },
            {
                "input": "[19,21,9,11,13]\n9999",
                "expected_output": "-1",
                "is_sample": false
            },
            {
                "input": "[20,22,10,12,14]\n12",
                "expected_output": "3",
                "is_sample": false
            },
            {
                "input": "[21,23,11,13,15]\n9999",
                "expected_output": "-1",
                "is_sample": false
            },
            {
                "input": "[22,24,12,14,16]\n14",
                "expected_output": "3",
                "is_sample": false
            },
            {
                "input": "[23,25,13,15,17]\n9999",
                "expected_output": "-1",
                "is_sample": false
            },
            {
                "input": "[24,26,14,16,18]\n16",
                "expected_output": "3",
                "is_sample": false
            },
            {
                "input": "[25,27,15,17,19]\n9999",
                "expected_output": "-1",
                "is_sample": false
            },
            {
                "input": "[26,28,16,18,20]\n18",
                "expected_output": "3",
                "is_sample": false
            },
            {
                "input": "[27,29,17,19,21]\n9999",
                "expected_output": "-1",
                "is_sample": false
            },
            {
                "input": "[28,30,18,20,22]\n20",
                "expected_output": "3",
                "is_sample": false
            },
            {
                "input": "[29,31,19,21,23]\n9999",
                "expected_output": "-1",
                "is_sample": false
            },
            {
                "input": "[30,32,20,22,24]\n22",
                "expected_output": "3",
                "is_sample": false
            },
            {
                "input": "[31,33,21,23,25]\n9999",
                "expected_output": "-1",
                "is_sample": false
            },
            {
                "input": "[32,34,22,24,26]\n24",
                "expected_output": "3",
                "is_sample": false
            },
            {
                "input": "[33,35,23,25,27]\n9999",
                "expected_output": "-1",
                "is_sample": false
            },
            {
                "input": "[34,36,24,26,28]\n26",
                "expected_output": "3",
                "is_sample": false
            },
            {
                "input": "[35,37,25,27,29]\n9999",
                "expected_output": "-1",
                "is_sample": false
            },
            {
                "input": "[36,38,26,28,30]\n28",
                "expected_output": "3",
                "is_sample": false
            },
            {
                "input": "[37,39,27,29,31]\n9999",
                "expected_output": "-1",
                "is_sample": false
            },
            {
                "input": "[38,40,28,30,32]\n30",
                "expected_output": "3",
                "is_sample": false
            },
            {
                "input": "[39,41,29,31,33]\n9999",
                "expected_output": "-1",
                "is_sample": false
            },
            {
                "input": "[40,42,30,32,34]\n32",
                "expected_output": "3",
                "is_sample": false
            },
            {
                "input": "[41,43,31,33,35]\n9999",
                "expected_output": "-1",
                "is_sample": false
            },
            {
                "input": "[42,44,32,34,36]\n34",
                "expected_output": "3",
                "is_sample": false
            },
            {
                "input": "[43,45,33,35,37]\n9999",
                "expected_output": "-1",
                "is_sample": false
            },
            {
                "input": "[44,46,34,36,38]\n36",
                "expected_output": "3",
                "is_sample": false
            },
            {
                "input": "[45,47,35,37,39]\n9999",
                "expected_output": "-1",
                "is_sample": false
            },
            {
                "input": "[46,48,36,38,40]\n38",
                "expected_output": "3",
                "is_sample": false
            },
            {
                "input": "[47,49,37,39,41]\n9999",
                "expected_output": "-1",
                "is_sample": false
            },
            {
                "input": "[48,50,38,40,42]\n40",
                "expected_output": "3",
                "is_sample": false
            },
            {
                "input": "[49,51,39,41,43]\n9999",
                "expected_output": "-1",
                "is_sample": false
            },
            {
                "input": "[50,52,40,42,44]\n42",
                "expected_output": "3",
                "is_sample": false
            },
            {
                "input": "[51,53,41,43,45]\n9999",
                "expected_output": "-1",
                "is_sample": false
            },
            {
                "input": "[52,54,42,44,46]\n44",
                "expected_output": "3",
                "is_sample": false
            },
            {
                "input": "[53,55,43,45,47]\n9999",
                "expected_output": "-1",
                "is_sample": false
            },
            {
                "input": "[54,56,44,46,48]\n46",
                "expected_output": "3",
                "is_sample": false
            },
            {
                "input": "[55,57,45,47,49]\n9999",
                "expected_output": "-1",
                "is_sample": false
            },
            {
                "input": "[56,58,46,48,50]\n48",
                "expected_output": "3",
                "is_sample": false
            },
            {
                "input": "[57,59,47,49,51]\n9999",
                "expected_output": "-1",
                "is_sample": false
            },
            {
                "input": "[58,60,48,50,52]\n50",
                "expected_output": "3",
                "is_sample": false
            },
            {
                "input": "[59,61,49,51,53]\n9999",
                "expected_output": "-1",
                "is_sample": false
            },
            {
                "input": "[60,62,50,52,54]\n52",
                "expected_output": "3",
                "is_sample": false
            }
        ]
    },
    {
        "question_number": 56,
        "title": "Daily Temperatures",
        "level": "Medium",
        "tags": [
            "Array",
            "Stack",
            "Monotonic Stack"
        ],
        "description": "Given an array of integers temperatures represents the daily temperatures, return an array answer such that answer[i] is the number of days you have to wait after the ith day to get a warmer temperature. If there is no future day for which this is possible, keep answer[i] == 0 instead.",
        "constraints": "1 <= temperatures.length <= 10^5\n30 <= temperatures[i] <= 100",
        "starter": "class Solution {\n    public int[] dailyTemperatures(int[] temperatures) {\n        // Write your code here\n        return new int[]{};\n    }\n}",
        "driver": {
            "key": "intArrayToIntArray",
            "method": "dailyTemperatures"
        },
        "testcases": [
            {
                "input": "[73,74,75,71,69,72,76,73]",
                "expected_output": "[1,1,4,2,1,1,0,0]",
                "is_sample": true
            },
            {
                "input": "[30,40,50,60]",
                "expected_output": "[1,1,1,0]",
                "is_sample": true
            },
            {
                "input": "[71,73,69,76]",
                "expected_output": "[1,2,1,0]",
                "is_sample": false
            },
            {
                "input": "[72,74,70,77]",
                "expected_output": "[1,2,1,0]",
                "is_sample": false
            },
            {
                "input": "[73,75,71,78]",
                "expected_output": "[1,2,1,0]",
                "is_sample": false
            },
            {
                "input": "[74,76,72,79]",
                "expected_output": "[1,2,1,0]",
                "is_sample": false
            },
            {
                "input": "[75,77,73,80]",
                "expected_output": "[1,2,1,0]",
                "is_sample": false
            },
            {
                "input": "[76,78,74,81]",
                "expected_output": "[1,2,1,0]",
                "is_sample": false
            },
            {
                "input": "[77,79,75,82]",
                "expected_output": "[1,2,1,0]",
                "is_sample": false
            },
            {
                "input": "[78,80,76,83]",
                "expected_output": "[1,2,1,0]",
                "is_sample": false
            },
            {
                "input": "[79,81,77,84]",
                "expected_output": "[1,2,1,0]",
                "is_sample": false
            },
            {
                "input": "[70,72,68,75]",
                "expected_output": "[1,2,1,0]",
                "is_sample": false
            },
            {
                "input": "[71,73,69,76]",
                "expected_output": "[1,2,1,0]",
                "is_sample": false
            },
            {
                "input": "[72,74,70,77]",
                "expected_output": "[1,2,1,0]",
                "is_sample": false
            },
            {
                "input": "[73,75,71,78]",
                "expected_output": "[1,2,1,0]",
                "is_sample": false
            },
            {
                "input": "[74,76,72,79]",
                "expected_output": "[1,2,1,0]",
                "is_sample": false
            },
            {
                "input": "[75,77,73,80]",
                "expected_output": "[1,2,1,0]",
                "is_sample": false
            },
            {
                "input": "[76,78,74,81]",
                "expected_output": "[1,2,1,0]",
                "is_sample": false
            },
            {
                "input": "[77,79,75,82]",
                "expected_output": "[1,2,1,0]",
                "is_sample": false
            },
            {
                "input": "[78,80,76,83]",
                "expected_output": "[1,2,1,0]",
                "is_sample": false
            },
            {
                "input": "[79,81,77,84]",
                "expected_output": "[1,2,1,0]",
                "is_sample": false
            },
            {
                "input": "[70,72,68,75]",
                "expected_output": "[1,2,1,0]",
                "is_sample": false
            },
            {
                "input": "[71,73,69,76]",
                "expected_output": "[1,2,1,0]",
                "is_sample": false
            },
            {
                "input": "[72,74,70,77]",
                "expected_output": "[1,2,1,0]",
                "is_sample": false
            },
            {
                "input": "[73,75,71,78]",
                "expected_output": "[1,2,1,0]",
                "is_sample": false
            },
            {
                "input": "[74,76,72,79]",
                "expected_output": "[1,2,1,0]",
                "is_sample": false
            },
            {
                "input": "[75,77,73,80]",
                "expected_output": "[1,2,1,0]",
                "is_sample": false
            },
            {
                "input": "[76,78,74,81]",
                "expected_output": "[1,2,1,0]",
                "is_sample": false
            },
            {
                "input": "[77,79,75,82]",
                "expected_output": "[1,2,1,0]",
                "is_sample": false
            },
            {
                "input": "[78,80,76,83]",
                "expected_output": "[1,2,1,0]",
                "is_sample": false
            },
            {
                "input": "[79,81,77,84]",
                "expected_output": "[1,2,1,0]",
                "is_sample": false
            },
            {
                "input": "[70,72,68,75]",
                "expected_output": "[1,2,1,0]",
                "is_sample": false
            },
            {
                "input": "[71,73,69,76]",
                "expected_output": "[1,2,1,0]",
                "is_sample": false
            },
            {
                "input": "[72,74,70,77]",
                "expected_output": "[1,2,1,0]",
                "is_sample": false
            },
            {
                "input": "[73,75,71,78]",
                "expected_output": "[1,2,1,0]",
                "is_sample": false
            },
            {
                "input": "[74,76,72,79]",
                "expected_output": "[1,2,1,0]",
                "is_sample": false
            },
            {
                "input": "[75,77,73,80]",
                "expected_output": "[1,2,1,0]",
                "is_sample": false
            },
            {
                "input": "[76,78,74,81]",
                "expected_output": "[1,2,1,0]",
                "is_sample": false
            },
            {
                "input": "[77,79,75,82]",
                "expected_output": "[1,2,1,0]",
                "is_sample": false
            },
            {
                "input": "[78,80,76,83]",
                "expected_output": "[1,2,1,0]",
                "is_sample": false
            },
            {
                "input": "[79,81,77,84]",
                "expected_output": "[1,2,1,0]",
                "is_sample": false
            },
            {
                "input": "[70,72,68,75]",
                "expected_output": "[1,2,1,0]",
                "is_sample": false
            },
            {
                "input": "[71,73,69,76]",
                "expected_output": "[1,2,1,0]",
                "is_sample": false
            },
            {
                "input": "[72,74,70,77]",
                "expected_output": "[1,2,1,0]",
                "is_sample": false
            },
            {
                "input": "[73,75,71,78]",
                "expected_output": "[1,2,1,0]",
                "is_sample": false
            },
            {
                "input": "[74,76,72,79]",
                "expected_output": "[1,2,1,0]",
                "is_sample": false
            },
            {
                "input": "[75,77,73,80]",
                "expected_output": "[1,2,1,0]",
                "is_sample": false
            },
            {
                "input": "[76,78,74,81]",
                "expected_output": "[1,2,1,0]",
                "is_sample": false
            },
            {
                "input": "[77,79,75,82]",
                "expected_output": "[1,2,1,0]",
                "is_sample": false
            },
            {
                "input": "[78,80,76,83]",
                "expected_output": "[1,2,1,0]",
                "is_sample": false
            },
            {
                "input": "[79,81,77,84]",
                "expected_output": "[1,2,1,0]",
                "is_sample": false
            },
            {
                "input": "[70,72,68,75]",
                "expected_output": "[1,2,1,0]",
                "is_sample": false
            }
        ]
    },
    {
        "question_number": 57,
        "title": "Kth Largest Element in an Array",
        "level": "Medium",
        "tags": [
            "Array",
            "Divide and Conquer",
            "Sorting",
            "Heap",
            "Quickselect"
        ],
        "description": "Given an integer array nums and an integer k, return the kth largest element in the array.\n\nNote that it is the kth largest element in the sorted order, not the kth distinct element.\n\nInput format (2 lines):\nLine 1: nums as JSON array\nLine 2: k",
        "constraints": "1 <= k <= nums.length <= 10^5\n-10^4 <= nums[i] <= 10^4",
        "starter": "class Solution {\n    public int findKthLargest(int[] nums, int k) {\n        // Write your code here\n        return 0;\n    }\n}",
        "driver": {
            "key": "intArrayAndKToInt",
            "method": "findKthLargest"
        },
        "testcases": [
            {
                "input": "[3,2,1,5,6,4]\n2",
                "expected_output": "5",
                "is_sample": true
            },
            {
                "input": "[3,2,3,1,2,4,5,5,6]\n4",
                "expected_output": "4",
                "is_sample": true
            },
            {
                "input": "[3,7,2,8,5]\n2",
                "expected_output": "7",
                "is_sample": false
            },
            {
                "input": "[6,14,4,16,10]\n2",
                "expected_output": "14",
                "is_sample": false
            },
            {
                "input": "[9,21,6,24,15]\n2",
                "expected_output": "21",
                "is_sample": false
            },
            {
                "input": "[12,28,8,32,20]\n2",
                "expected_output": "28",
                "is_sample": false
            },
            {
                "input": "[15,35,10,40,25]\n2",
                "expected_output": "35",
                "is_sample": false
            },
            {
                "input": "[18,42,12,48,30]\n2",
                "expected_output": "42",
                "is_sample": false
            },
            {
                "input": "[21,49,14,56,35]\n2",
                "expected_output": "49",
                "is_sample": false
            },
            {
                "input": "[24,56,16,64,40]\n2",
                "expected_output": "56",
                "is_sample": false
            },
            {
                "input": "[27,63,18,72,45]\n2",
                "expected_output": "63",
                "is_sample": false
            },
            {
                "input": "[30,70,20,80,50]\n2",
                "expected_output": "70",
                "is_sample": false
            },
            {
                "input": "[33,77,22,88,55]\n2",
                "expected_output": "77",
                "is_sample": false
            },
            {
                "input": "[36,84,24,96,60]\n2",
                "expected_output": "84",
                "is_sample": false
            },
            {
                "input": "[39,91,26,104,65]\n2",
                "expected_output": "91",
                "is_sample": false
            },
            {
                "input": "[42,98,28,112,70]\n2",
                "expected_output": "98",
                "is_sample": false
            },
            {
                "input": "[45,105,30,120,75]\n2",
                "expected_output": "105",
                "is_sample": false
            },
            {
                "input": "[48,112,32,128,80]\n2",
                "expected_output": "112",
                "is_sample": false
            },
            {
                "input": "[51,119,34,136,85]\n2",
                "expected_output": "119",
                "is_sample": false
            },
            {
                "input": "[54,126,36,144,90]\n2",
                "expected_output": "126",
                "is_sample": false
            },
            {
                "input": "[57,133,38,152,95]\n2",
                "expected_output": "133",
                "is_sample": false
            },
            {
                "input": "[60,140,40,160,100]\n2",
                "expected_output": "140",
                "is_sample": false
            },
            {
                "input": "[63,147,42,168,105]\n2",
                "expected_output": "147",
                "is_sample": false
            },
            {
                "input": "[66,154,44,176,110]\n2",
                "expected_output": "154",
                "is_sample": false
            },
            {
                "input": "[69,161,46,184,115]\n2",
                "expected_output": "161",
                "is_sample": false
            },
            {
                "input": "[72,168,48,192,120]\n2",
                "expected_output": "168",
                "is_sample": false
            },
            {
                "input": "[75,175,50,200,125]\n2",
                "expected_output": "175",
                "is_sample": false
            },
            {
                "input": "[78,182,52,208,130]\n2",
                "expected_output": "182",
                "is_sample": false
            },
            {
                "input": "[81,189,54,216,135]\n2",
                "expected_output": "189",
                "is_sample": false
            },
            {
                "input": "[84,196,56,224,140]\n2",
                "expected_output": "196",
                "is_sample": false
            },
            {
                "input": "[87,203,58,232,145]\n2",
                "expected_output": "203",
                "is_sample": false
            },
            {
                "input": "[90,210,60,240,150]\n2",
                "expected_output": "210",
                "is_sample": false
            },
            {
                "input": "[93,217,62,248,155]\n2",
                "expected_output": "217",
                "is_sample": false
            },
            {
                "input": "[96,224,64,256,160]\n2",
                "expected_output": "224",
                "is_sample": false
            },
            {
                "input": "[99,231,66,264,165]\n2",
                "expected_output": "231",
                "is_sample": false
            },
            {
                "input": "[102,238,68,272,170]\n2",
                "expected_output": "238",
                "is_sample": false
            },
            {
                "input": "[105,245,70,280,175]\n2",
                "expected_output": "245",
                "is_sample": false
            },
            {
                "input": "[108,252,72,288,180]\n2",
                "expected_output": "252",
                "is_sample": false
            },
            {
                "input": "[111,259,74,296,185]\n2",
                "expected_output": "259",
                "is_sample": false
            },
            {
                "input": "[114,266,76,304,190]\n2",
                "expected_output": "266",
                "is_sample": false
            },
            {
                "input": "[117,273,78,312,195]\n2",
                "expected_output": "273",
                "is_sample": false
            },
            {
                "input": "[120,280,80,320,200]\n2",
                "expected_output": "280",
                "is_sample": false
            },
            {
                "input": "[123,287,82,328,205]\n2",
                "expected_output": "287",
                "is_sample": false
            },
            {
                "input": "[126,294,84,336,210]\n2",
                "expected_output": "294",
                "is_sample": false
            },
            {
                "input": "[129,301,86,344,215]\n2",
                "expected_output": "301",
                "is_sample": false
            },
            {
                "input": "[132,308,88,352,220]\n2",
                "expected_output": "308",
                "is_sample": false
            },
            {
                "input": "[135,315,90,360,225]\n2",
                "expected_output": "315",
                "is_sample": false
            },
            {
                "input": "[138,322,92,368,230]\n2",
                "expected_output": "322",
                "is_sample": false
            },
            {
                "input": "[141,329,94,376,235]\n2",
                "expected_output": "329",
                "is_sample": false
            },
            {
                "input": "[144,336,96,384,240]\n2",
                "expected_output": "336",
                "is_sample": false
            },
            {
                "input": "[147,343,98,392,245]\n2",
                "expected_output": "343",
                "is_sample": false
            },
            {
                "input": "[150,350,100,400,250]\n2",
                "expected_output": "350",
                "is_sample": false
            }
        ]
    },
    {
        "question_number": 58,
        "title": "Unique Paths",
        "level": "Medium",
        "tags": [
            "Math",
            "Dynamic Programming",
            "Combinatorics"
        ],
        "description": "There is a robot on an m x n grid. The robot is initially located at the top-left corner (i.e., grid[0][0]). The robot tries to move to the bottom-right corner (i.e., grid[m - 1][n - 1]). The robot can only move either down or right at any point in time.\n\nGiven the two integers m and n, return the number of possible unique paths that the robot can take to reach the bottom-right corner.\n\nInput format (2 lines):\nLine 1: m\nLine 2: n",
        "constraints": "1 <= m, n <= 100",
        "starter": "class Solution {\n    public int uniquePaths(int m, int n) {\n        // Write your code here\n        return 0;\n    }\n}",
        "driver": {
            "key": "twoIntToInt",
            "method": "uniquePaths"
        },
        "testcases": [
            {
                "input": "3\n7",
                "expected_output": "28",
                "is_sample": true
            },
            {
                "input": "3\n2",
                "expected_output": "3",
                "is_sample": true
            },
            {
                "input": "2\n4",
                "expected_output": "4",
                "is_sample": false
            },
            {
                "input": "3\n5",
                "expected_output": "15",
                "is_sample": false
            },
            {
                "input": "4\n6",
                "expected_output": "56",
                "is_sample": false
            },
            {
                "input": "5\n7",
                "expected_output": "210",
                "is_sample": false
            },
            {
                "input": "6\n8",
                "expected_output": "792",
                "is_sample": false
            },
            {
                "input": "7\n1",
                "expected_output": "1",
                "is_sample": false
            },
            {
                "input": "8\n2",
                "expected_output": "8",
                "is_sample": false
            },
            {
                "input": "1\n3",
                "expected_output": "1",
                "is_sample": false
            },
            {
                "input": "2\n4",
                "expected_output": "4",
                "is_sample": false
            },
            {
                "input": "3\n5",
                "expected_output": "15",
                "is_sample": false
            },
            {
                "input": "4\n6",
                "expected_output": "56",
                "is_sample": false
            },
            {
                "input": "5\n7",
                "expected_output": "210",
                "is_sample": false
            },
            {
                "input": "6\n8",
                "expected_output": "792",
                "is_sample": false
            },
            {
                "input": "7\n1",
                "expected_output": "1",
                "is_sample": false
            },
            {
                "input": "8\n2",
                "expected_output": "8",
                "is_sample": false
            },
            {
                "input": "1\n3",
                "expected_output": "1",
                "is_sample": false
            },
            {
                "input": "2\n4",
                "expected_output": "4",
                "is_sample": false
            },
            {
                "input": "3\n5",
                "expected_output": "15",
                "is_sample": false
            },
            {
                "input": "4\n6",
                "expected_output": "56",
                "is_sample": false
            },
            {
                "input": "5\n7",
                "expected_output": "210",
                "is_sample": false
            },
            {
                "input": "6\n8",
                "expected_output": "792",
                "is_sample": false
            },
            {
                "input": "7\n1",
                "expected_output": "1",
                "is_sample": false
            },
            {
                "input": "8\n2",
                "expected_output": "8",
                "is_sample": false
            },
            {
                "input": "1\n3",
                "expected_output": "1",
                "is_sample": false
            },
            {
                "input": "2\n4",
                "expected_output": "4",
                "is_sample": false
            },
            {
                "input": "3\n5",
                "expected_output": "15",
                "is_sample": false
            },
            {
                "input": "4\n6",
                "expected_output": "56",
                "is_sample": false
            },
            {
                "input": "5\n7",
                "expected_output": "210",
                "is_sample": false
            },
            {
                "input": "6\n8",
                "expected_output": "792",
                "is_sample": false
            },
            {
                "input": "7\n1",
                "expected_output": "1",
                "is_sample": false
            },
            {
                "input": "8\n2",
                "expected_output": "8",
                "is_sample": false
            },
            {
                "input": "1\n3",
                "expected_output": "1",
                "is_sample": false
            },
            {
                "input": "2\n4",
                "expected_output": "4",
                "is_sample": false
            },
            {
                "input": "3\n5",
                "expected_output": "15",
                "is_sample": false
            },
            {
                "input": "4\n6",
                "expected_output": "56",
                "is_sample": false
            },
            {
                "input": "5\n7",
                "expected_output": "210",
                "is_sample": false
            },
            {
                "input": "6\n8",
                "expected_output": "792",
                "is_sample": false
            },
            {
                "input": "7\n1",
                "expected_output": "1",
                "is_sample": false
            },
            {
                "input": "8\n2",
                "expected_output": "8",
                "is_sample": false
            },
            {
                "input": "1\n3",
                "expected_output": "1",
                "is_sample": false
            },
            {
                "input": "2\n4",
                "expected_output": "4",
                "is_sample": false
            },
            {
                "input": "3\n5",
                "expected_output": "15",
                "is_sample": false
            },
            {
                "input": "4\n6",
                "expected_output": "56",
                "is_sample": false
            },
            {
                "input": "5\n7",
                "expected_output": "210",
                "is_sample": false
            },
            {
                "input": "6\n8",
                "expected_output": "792",
                "is_sample": false
            },
            {
                "input": "7\n1",
                "expected_output": "1",
                "is_sample": false
            },
            {
                "input": "8\n2",
                "expected_output": "8",
                "is_sample": false
            },
            {
                "input": "1\n3",
                "expected_output": "1",
                "is_sample": false
            },
            {
                "input": "2\n4",
                "expected_output": "4",
                "is_sample": false
            },
            {
                "input": "3\n5",
                "expected_output": "15",
                "is_sample": false
            }
        ]
    },
    {
        "question_number": 59,
        "title": "Minimum Path Sum",
        "level": "Medium",
        "tags": [
            "Array",
            "Dynamic Programming",
            "Matrix"
        ],
        "description": "Given a m x n grid filled with non-negative numbers, find a path from top left to bottom right, which minimizes the sum of all numbers along its path.\n\nNote: You can only move either down or right at any point in time.",
        "constraints": "m == grid.length\nn == grid[i].length\n1 <= m, n <= 200\n0 <= grid[i][j] <= 200",
        "starter": "class Solution {\n    public int minPathSum(int[][] grid) {\n        // Write your code here\n        return 0;\n    }\n}",
        "driver": {
            "key": "intMatrixToInt",
            "method": "minPathSum"
        },
        "testcases": [
            {
                "input": "[[1,3,1],[1,5,1],[4,2,1]]",
                "expected_output": "7",
                "is_sample": true
            },
            {
                "input": "[[1,2,3],[4,5,6]]",
                "expected_output": "12",
                "is_sample": true
            },
            {
                "input": "[[1,3,1],[2,2,3]]",
                "expected_output": "8",
                "is_sample": false
            },
            {
                "input": "[[2,4,1],[2,3,3]]",
                "expected_output": "10",
                "is_sample": false
            },
            {
                "input": "[[3,5,1],[2,4,3]]",
                "expected_output": "12",
                "is_sample": false
            },
            {
                "input": "[[4,6,1],[2,5,3]]",
                "expected_output": "14",
                "is_sample": false
            },
            {
                "input": "[[5,7,1],[2,6,3]]",
                "expected_output": "16",
                "is_sample": false
            },
            {
                "input": "[[6,8,1],[2,7,3]]",
                "expected_output": "18",
                "is_sample": false
            },
            {
                "input": "[[7,9,1],[2,8,3]]",
                "expected_output": "20",
                "is_sample": false
            },
            {
                "input": "[[8,10,1],[2,9,3]]",
                "expected_output": "22",
                "is_sample": false
            },
            {
                "input": "[[9,11,1],[2,10,3]]",
                "expected_output": "24",
                "is_sample": false
            },
            {
                "input": "[[10,12,1],[2,11,3]]",
                "expected_output": "26",
                "is_sample": false
            },
            {
                "input": "[[11,13,1],[2,12,3]]",
                "expected_output": "28",
                "is_sample": false
            },
            {
                "input": "[[12,14,1],[2,13,3]]",
                "expected_output": "30",
                "is_sample": false
            },
            {
                "input": "[[13,15,1],[2,14,3]]",
                "expected_output": "32",
                "is_sample": false
            },
            {
                "input": "[[14,16,1],[2,15,3]]",
                "expected_output": "34",
                "is_sample": false
            },
            {
                "input": "[[15,17,1],[2,16,3]]",
                "expected_output": "36",
                "is_sample": false
            },
            {
                "input": "[[16,18,1],[2,17,3]]",
                "expected_output": "38",
                "is_sample": false
            },
            {
                "input": "[[17,19,1],[2,18,3]]",
                "expected_output": "40",
                "is_sample": false
            },
            {
                "input": "[[18,20,1],[2,19,3]]",
                "expected_output": "42",
                "is_sample": false
            },
            {
                "input": "[[19,21,1],[2,20,3]]",
                "expected_output": "44",
                "is_sample": false
            },
            {
                "input": "[[20,22,1],[2,21,3]]",
                "expected_output": "46",
                "is_sample": false
            },
            {
                "input": "[[21,23,1],[2,22,3]]",
                "expected_output": "48",
                "is_sample": false
            },
            {
                "input": "[[22,24,1],[2,23,3]]",
                "expected_output": "50",
                "is_sample": false
            },
            {
                "input": "[[23,25,1],[2,24,3]]",
                "expected_output": "52",
                "is_sample": false
            },
            {
                "input": "[[24,26,1],[2,25,3]]",
                "expected_output": "54",
                "is_sample": false
            },
            {
                "input": "[[25,27,1],[2,26,3]]",
                "expected_output": "56",
                "is_sample": false
            },
            {
                "input": "[[26,28,1],[2,27,3]]",
                "expected_output": "58",
                "is_sample": false
            },
            {
                "input": "[[27,29,1],[2,28,3]]",
                "expected_output": "60",
                "is_sample": false
            },
            {
                "input": "[[28,30,1],[2,29,3]]",
                "expected_output": "62",
                "is_sample": false
            },
            {
                "input": "[[29,31,1],[2,30,3]]",
                "expected_output": "64",
                "is_sample": false
            },
            {
                "input": "[[30,32,1],[2,31,3]]",
                "expected_output": "66",
                "is_sample": false
            },
            {
                "input": "[[31,33,1],[2,32,3]]",
                "expected_output": "68",
                "is_sample": false
            },
            {
                "input": "[[32,34,1],[2,33,3]]",
                "expected_output": "70",
                "is_sample": false
            },
            {
                "input": "[[33,35,1],[2,34,3]]",
                "expected_output": "72",
                "is_sample": false
            },
            {
                "input": "[[34,36,1],[2,35,3]]",
                "expected_output": "74",
                "is_sample": false
            },
            {
                "input": "[[35,37,1],[2,36,3]]",
                "expected_output": "76",
                "is_sample": false
            },
            {
                "input": "[[36,38,1],[2,37,3]]",
                "expected_output": "78",
                "is_sample": false
            },
            {
                "input": "[[37,39,1],[2,38,3]]",
                "expected_output": "80",
                "is_sample": false
            },
            {
                "input": "[[38,40,1],[2,39,3]]",
                "expected_output": "82",
                "is_sample": false
            },
            {
                "input": "[[39,41,1],[2,40,3]]",
                "expected_output": "84",
                "is_sample": false
            },
            {
                "input": "[[40,42,1],[2,41,3]]",
                "expected_output": "86",
                "is_sample": false
            },
            {
                "input": "[[41,43,1],[2,42,3]]",
                "expected_output": "88",
                "is_sample": false
            },
            {
                "input": "[[42,44,1],[2,43,3]]",
                "expected_output": "90",
                "is_sample": false
            },
            {
                "input": "[[43,45,1],[2,44,3]]",
                "expected_output": "92",
                "is_sample": false
            },
            {
                "input": "[[44,46,1],[2,45,3]]",
                "expected_output": "94",
                "is_sample": false
            },
            {
                "input": "[[45,47,1],[2,46,3]]",
                "expected_output": "96",
                "is_sample": false
            },
            {
                "input": "[[46,48,1],[2,47,3]]",
                "expected_output": "98",
                "is_sample": false
            },
            {
                "input": "[[47,49,1],[2,48,3]]",
                "expected_output": "100",
                "is_sample": false
            },
            {
                "input": "[[48,50,1],[2,49,3]]",
                "expected_output": "102",
                "is_sample": false
            },
            {
                "input": "[[49,51,1],[2,50,3]]",
                "expected_output": "104",
                "is_sample": false
            },
            {
                "input": "[[50,52,1],[2,51,3]]",
                "expected_output": "106",
                "is_sample": false
            }
        ]
    },
    {
        "question_number": 60,
        "title": "Decode Ways",
        "level": "Medium",
        "tags": [
            "String",
            "Dynamic Programming"
        ],
        "description": "A message containing letters from A-Z can be encoded into numbers using the mapping 'A' -> \"1\", 'B' -> \"2\", ... 'Z' -> \"26\". Given a string s containing only digits, return the number of ways to decode it.",
        "constraints": "1 <= s.length <= 100\ns contains only digits and may contain leading zero(s).",
        "starter": "class Solution {\n    public int numDecodings(String s) {\n        // Write your code here\n        return 0;\n    }\n}",
        "driver": {
            "key": "stringToInt",
            "method": "numDecodings"
        },
        "testcases": [
            {
                "input": "12",
                "expected_output": "2",
                "is_sample": true
            },
            {
                "input": "226",
                "expected_output": "3",
                "is_sample": true
            },
            {
                "input": "06",
                "expected_output": "0",
                "is_sample": false
            },
            {
                "input": "1222",
                "expected_output": "5",
                "is_sample": false
            },
            {
                "input": "1323",
                "expected_output": "4",
                "is_sample": false
            },
            {
                "input": "1424",
                "expected_output": "4",
                "is_sample": false
            },
            {
                "input": "1525",
                "expected_output": "4",
                "is_sample": false
            },
            {
                "input": "1621",
                "expected_output": "4",
                "is_sample": false
            },
            {
                "input": "1722",
                "expected_output": "4",
                "is_sample": false
            },
            {
                "input": "1823",
                "expected_output": "4",
                "is_sample": false
            },
            {
                "input": "1924",
                "expected_output": "4",
                "is_sample": false
            },
            {
                "input": "1125",
                "expected_output": "5",
                "is_sample": false
            },
            {
                "input": "1221",
                "expected_output": "5",
                "is_sample": false
            },
            {
                "input": "1322",
                "expected_output": "4",
                "is_sample": false
            },
            {
                "input": "1423",
                "expected_output": "4",
                "is_sample": false
            },
            {
                "input": "1524",
                "expected_output": "4",
                "is_sample": false
            },
            {
                "input": "1625",
                "expected_output": "4",
                "is_sample": false
            },
            {
                "input": "1721",
                "expected_output": "4",
                "is_sample": false
            },
            {
                "input": "1822",
                "expected_output": "4",
                "is_sample": false
            },
            {
                "input": "1923",
                "expected_output": "4",
                "is_sample": false
            },
            {
                "input": "1124",
                "expected_output": "5",
                "is_sample": false
            },
            {
                "input": "1225",
                "expected_output": "5",
                "is_sample": false
            },
            {
                "input": "1321",
                "expected_output": "4",
                "is_sample": false
            },
            {
                "input": "1422",
                "expected_output": "4",
                "is_sample": false
            },
            {
                "input": "1523",
                "expected_output": "4",
                "is_sample": false
            },
            {
                "input": "1624",
                "expected_output": "4",
                "is_sample": false
            },
            {
                "input": "1725",
                "expected_output": "4",
                "is_sample": false
            },
            {
                "input": "1821",
                "expected_output": "4",
                "is_sample": false
            },
            {
                "input": "1922",
                "expected_output": "4",
                "is_sample": false
            },
            {
                "input": "1123",
                "expected_output": "5",
                "is_sample": false
            },
            {
                "input": "1224",
                "expected_output": "5",
                "is_sample": false
            },
            {
                "input": "1325",
                "expected_output": "4",
                "is_sample": false
            },
            {
                "input": "1421",
                "expected_output": "4",
                "is_sample": false
            },
            {
                "input": "1522",
                "expected_output": "4",
                "is_sample": false
            },
            {
                "input": "1623",
                "expected_output": "4",
                "is_sample": false
            },
            {
                "input": "1724",
                "expected_output": "4",
                "is_sample": false
            },
            {
                "input": "1825",
                "expected_output": "4",
                "is_sample": false
            },
            {
                "input": "1921",
                "expected_output": "4",
                "is_sample": false
            },
            {
                "input": "1122",
                "expected_output": "5",
                "is_sample": false
            },
            {
                "input": "1223",
                "expected_output": "5",
                "is_sample": false
            },
            {
                "input": "1324",
                "expected_output": "4",
                "is_sample": false
            },
            {
                "input": "1425",
                "expected_output": "4",
                "is_sample": false
            },
            {
                "input": "1521",
                "expected_output": "4",
                "is_sample": false
            },
            {
                "input": "1622",
                "expected_output": "4",
                "is_sample": false
            },
            {
                "input": "1723",
                "expected_output": "4",
                "is_sample": false
            },
            {
                "input": "1824",
                "expected_output": "4",
                "is_sample": false
            },
            {
                "input": "1925",
                "expected_output": "4",
                "is_sample": false
            },
            {
                "input": "1121",
                "expected_output": "5",
                "is_sample": false
            },
            {
                "input": "1222",
                "expected_output": "5",
                "is_sample": false
            },
            {
                "input": "1323",
                "expected_output": "4",
                "is_sample": false
            },
            {
                "input": "1424",
                "expected_output": "4",
                "is_sample": false
            },
            {
                "input": "1525",
                "expected_output": "4",
                "is_sample": false
            },
            {
                "input": "1621",
                "expected_output": "4",
                "is_sample": false
            }
        ]
    },
    {
        "question_number": 61,
        "title": "Jump Game",
        "level": "Medium",
        "tags": [
            "Array",
            "Dynamic Programming",
            "Greedy"
        ],
        "description": "You are given an integer array nums. You are initially positioned at the array's first index, and each element in the array represents your maximum jump length at that position.\n\nReturn true if you can reach the last index, or false otherwise.",
        "constraints": "1 <= nums.length <= 10^4\n0 <= nums[i] <= 10^5",
        "starter": "class Solution {\n    public boolean canJump(int[] nums) {\n        // Write your code here\n        return false;\n    }\n}",
        "driver": {
            "key": "intArrayToBoolean",
            "method": "canJump"
        },
        "testcases": [
            {
                "input": "[2,3,1,1,4]",
                "expected_output": "true",
                "is_sample": true
            },
            {
                "input": "[3,2,1,0,4]",
                "expected_output": "false",
                "is_sample": true
            },
            {
                "input": "[2,3,1,1,4]",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "[2,2,1,0,4]",
                "expected_output": "false",
                "is_sample": false
            },
            {
                "input": "[2,3,1,1,4]",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "[4,2,1,0,4]",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "[2,3,1,1,4]",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "[6,2,1,0,4]",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "[2,3,1,1,4]",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "[8,2,1,0,4]",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "[2,3,1,1,4]",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "[10,2,1,0,4]",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "[2,3,1,1,4]",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "[12,2,1,0,4]",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "[2,3,1,1,4]",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "[14,2,1,0,4]",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "[2,3,1,1,4]",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "[16,2,1,0,4]",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "[2,3,1,1,4]",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "[18,2,1,0,4]",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "[2,3,1,1,4]",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "[20,2,1,0,4]",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "[2,3,1,1,4]",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "[22,2,1,0,4]",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "[2,3,1,1,4]",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "[24,2,1,0,4]",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "[2,3,1,1,4]",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "[26,2,1,0,4]",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "[2,3,1,1,4]",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "[28,2,1,0,4]",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "[2,3,1,1,4]",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "[30,2,1,0,4]",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "[2,3,1,1,4]",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "[32,2,1,0,4]",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "[2,3,1,1,4]",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "[34,2,1,0,4]",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "[2,3,1,1,4]",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "[36,2,1,0,4]",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "[2,3,1,1,4]",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "[38,2,1,0,4]",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "[2,3,1,1,4]",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "[40,2,1,0,4]",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "[2,3,1,1,4]",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "[42,2,1,0,4]",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "[2,3,1,1,4]",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "[44,2,1,0,4]",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "[2,3,1,1,4]",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "[46,2,1,0,4]",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "[2,3,1,1,4]",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "[48,2,1,0,4]",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "[2,3,1,1,4]",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "[50,2,1,0,4]",
                "expected_output": "true",
                "is_sample": false
            }
        ]
    },
    {
        "question_number": 62,
        "title": "Jump Game II",
        "level": "Medium",
        "tags": [
            "Array",
            "Dynamic Programming",
            "Greedy"
        ],
        "description": "You are given a 0-indexed array of integers nums of length n. You are initially positioned at nums[0]. Each element nums[i] represents the maximum length of a forward jump from index i. Return the minimum number of jumps to reach nums[n - 1].",
        "constraints": "1 <= nums.length <= 10^4\n0 <= nums[i] <= 1000\nIt's guaranteed that you can reach nums[n - 1].",
        "starter": "class Solution {\n    public int jump(int[] nums) {\n        // Write your code here\n        return 0;\n    }\n}",
        "driver": {
            "key": "intArrayToInt",
            "method": "jump"
        },
        "testcases": [
            {
                "input": "[2,3,1,1,4]",
                "expected_output": "2",
                "is_sample": true
            },
            {
                "input": "[2,3,0,1,4]",
                "expected_output": "2",
                "is_sample": true
            },
            {
                "input": "[2,2,2,1,4]",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "[2,3,2,1,4]",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "[2,1,2,1,4]",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "[2,2,2,1,4]",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "[2,3,2,1,4]",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "[2,1,2,1,4]",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "[2,2,2,1,4]",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "[2,3,2,1,4]",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "[2,1,2,1,4]",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "[2,2,2,1,4]",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "[2,3,2,1,4]",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "[2,1,2,1,4]",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "[2,2,2,1,4]",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "[2,3,2,1,4]",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "[2,1,2,1,4]",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "[2,2,2,1,4]",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "[2,3,2,1,4]",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "[2,1,2,1,4]",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "[2,2,2,1,4]",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "[2,3,2,1,4]",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "[2,1,2,1,4]",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "[2,2,2,1,4]",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "[2,3,2,1,4]",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "[2,1,2,1,4]",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "[2,2,2,1,4]",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "[2,3,2,1,4]",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "[2,1,2,1,4]",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "[2,2,2,1,4]",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "[2,3,2,1,4]",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "[2,1,2,1,4]",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "[2,2,2,1,4]",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "[2,3,2,1,4]",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "[2,1,2,1,4]",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "[2,2,2,1,4]",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "[2,3,2,1,4]",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "[2,1,2,1,4]",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "[2,2,2,1,4]",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "[2,3,2,1,4]",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "[2,1,2,1,4]",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "[2,2,2,1,4]",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "[2,3,2,1,4]",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "[2,1,2,1,4]",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "[2,2,2,1,4]",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "[2,3,2,1,4]",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "[2,1,2,1,4]",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "[2,2,2,1,4]",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "[2,3,2,1,4]",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "[2,1,2,1,4]",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "[2,2,2,1,4]",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "[2,3,2,1,4]",
                "expected_output": "2",
                "is_sample": false
            }
        ]
    },
    {
        "question_number": 63,
        "title": "Gas Station",
        "level": "Medium",
        "tags": [
            "Array",
            "Greedy"
        ],
        "description": "There are n gas stations along a circular route, where the amount of gas at the ith station is gas[i]. You have a car with an unlimited gas tank and it costs cost[i] of gas to travel from the ith station to its next (i + 1)th station. Return the starting gas station's index if you can travel around the circuit once in the clockwise direction, otherwise return -1.\n\nInput format (2 lines):\nLine 1: gas as JSON array\nLine 2: cost as JSON array",
        "constraints": "n == gas.length == cost.length\n1 <= n <= 10^5\n0 <= gas[i], cost[i] <= 10^4",
        "starter": "class Solution {\n    public int canCompleteCircuit(int[] gas, int[] cost) {\n        // Write your code here\n        return -1;\n    }\n}",
        "driver": {
            "key": "twoIntArrayToInt",
            "method": "canCompleteCircuit"
        },
        "testcases": [
            {
                "input": "[1,2,3,4,5]\n[3,4,5,1,2]",
                "expected_output": "3",
                "is_sample": true
            },
            {
                "input": "[2,3,4]\n[3,4,3]",
                "expected_output": "-1",
                "is_sample": true
            },
            {
                "input": "[1,2,3,4]\n[3,3,2,1]",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "[2,3,4,5]\n[4,4,3,2]",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "[3,4,5,6]\n[5,5,4,3]",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "[4,5,6,7]\n[6,6,5,4]",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "[5,6,7,8]\n[7,7,6,5]",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "[6,7,8,9]\n[8,8,7,6]",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "[7,8,9,10]\n[9,9,8,7]",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "[8,9,10,11]\n[10,10,9,8]",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "[9,10,11,12]\n[11,11,10,9]",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "[10,11,12,13]\n[12,12,11,10]",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "[11,12,13,14]\n[13,13,12,11]",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "[12,13,14,15]\n[14,14,13,12]",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "[13,14,15,16]\n[15,15,14,13]",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "[14,15,16,17]\n[16,16,15,14]",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "[15,16,17,18]\n[17,17,16,15]",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "[16,17,18,19]\n[18,18,17,16]",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "[17,18,19,20]\n[19,19,18,17]",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "[18,19,20,21]\n[20,20,19,18]",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "[19,20,21,22]\n[21,21,20,19]",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "[20,21,22,23]\n[22,22,21,20]",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "[21,22,23,24]\n[23,23,22,21]",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "[22,23,24,25]\n[24,24,23,22]",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "[23,24,25,26]\n[25,25,24,23]",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "[24,25,26,27]\n[26,26,25,24]",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "[25,26,27,28]\n[27,27,26,25]",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "[26,27,28,29]\n[28,28,27,26]",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "[27,28,29,30]\n[29,29,28,27]",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "[28,29,30,31]\n[30,30,29,28]",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "[29,30,31,32]\n[31,31,30,29]",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "[30,31,32,33]\n[32,32,31,30]",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "[31,32,33,34]\n[33,33,32,31]",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "[32,33,34,35]\n[34,34,33,32]",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "[33,34,35,36]\n[35,35,34,33]",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "[34,35,36,37]\n[36,36,35,34]",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "[35,36,37,38]\n[37,37,36,35]",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "[36,37,38,39]\n[38,38,37,36]",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "[37,38,39,40]\n[39,39,38,37]",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "[38,39,40,41]\n[40,40,39,38]",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "[39,40,41,42]\n[41,41,40,39]",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "[40,41,42,43]\n[42,42,41,40]",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "[41,42,43,44]\n[43,43,42,41]",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "[42,43,44,45]\n[44,44,43,42]",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "[43,44,45,46]\n[45,45,44,43]",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "[44,45,46,47]\n[46,46,45,44]",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "[45,46,47,48]\n[47,47,46,45]",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "[46,47,48,49]\n[48,48,47,46]",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "[47,48,49,50]\n[49,49,48,47]",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "[48,49,50,51]\n[50,50,49,48]",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "[49,50,51,52]\n[51,51,50,49]",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "[50,51,52,53]\n[52,52,51,50]",
                "expected_output": "2",
                "is_sample": false
            }
        ]
    },
    {
        "question_number": 64,
        "title": "Evaluate Reverse Polish Notation",
        "level": "Medium",
        "tags": [
            "Array",
            "Math",
            "Stack"
        ],
        "description": "You are given an array of strings tokens that represents an arithmetic expression in a Reverse Polish Notation. Evaluate the expression. Return an integer that represents the value of the expression.",
        "constraints": "1 <= tokens.length <= 10^4\ntokens[i] is either an operator: \"+\", \"-\", \"*\", or \"/\", or an integer in the range [-200, 200].",
        "starter": "class Solution {\n    public int evalRPN(String[] tokens) {\n        // Write your code here\n        return 0;\n    }\n}",
        "driver": {
            "key": "stringArrayToInt",
            "method": "evalRPN"
        },
        "testcases": [
            {
                "input": "[\"2\",\"1\",\"+\",\"3\",\"*\"]",
                "expected_output": "9",
                "is_sample": true
            },
            {
                "input": "[\"4\",\"13\",\"5\",\"/\",\"+\"]",
                "expected_output": "6",
                "is_sample": true
            },
            {
                "input": "[\"1\",\"3\",\"+\",\"2\",\"*\"]",
                "expected_output": "8",
                "is_sample": false
            },
            {
                "input": "[\"2\",\"4\",\"+\",\"2\",\"*\"]",
                "expected_output": "12",
                "is_sample": false
            },
            {
                "input": "[\"3\",\"5\",\"+\",\"2\",\"*\"]",
                "expected_output": "16",
                "is_sample": false
            },
            {
                "input": "[\"4\",\"6\",\"+\",\"2\",\"*\"]",
                "expected_output": "20",
                "is_sample": false
            },
            {
                "input": "[\"5\",\"7\",\"+\",\"2\",\"*\"]",
                "expected_output": "24",
                "is_sample": false
            },
            {
                "input": "[\"6\",\"8\",\"+\",\"2\",\"*\"]",
                "expected_output": "28",
                "is_sample": false
            },
            {
                "input": "[\"7\",\"9\",\"+\",\"2\",\"*\"]",
                "expected_output": "32",
                "is_sample": false
            },
            {
                "input": "[\"8\",\"10\",\"+\",\"2\",\"*\"]",
                "expected_output": "36",
                "is_sample": false
            },
            {
                "input": "[\"9\",\"11\",\"+\",\"2\",\"*\"]",
                "expected_output": "40",
                "is_sample": false
            },
            {
                "input": "[\"10\",\"12\",\"+\",\"2\",\"*\"]",
                "expected_output": "44",
                "is_sample": false
            },
            {
                "input": "[\"11\",\"13\",\"+\",\"2\",\"*\"]",
                "expected_output": "48",
                "is_sample": false
            },
            {
                "input": "[\"12\",\"14\",\"+\",\"2\",\"*\"]",
                "expected_output": "52",
                "is_sample": false
            },
            {
                "input": "[\"13\",\"15\",\"+\",\"2\",\"*\"]",
                "expected_output": "56",
                "is_sample": false
            },
            {
                "input": "[\"14\",\"16\",\"+\",\"2\",\"*\"]",
                "expected_output": "60",
                "is_sample": false
            },
            {
                "input": "[\"15\",\"17\",\"+\",\"2\",\"*\"]",
                "expected_output": "64",
                "is_sample": false
            },
            {
                "input": "[\"16\",\"18\",\"+\",\"2\",\"*\"]",
                "expected_output": "68",
                "is_sample": false
            },
            {
                "input": "[\"17\",\"19\",\"+\",\"2\",\"*\"]",
                "expected_output": "72",
                "is_sample": false
            },
            {
                "input": "[\"18\",\"20\",\"+\",\"2\",\"*\"]",
                "expected_output": "76",
                "is_sample": false
            },
            {
                "input": "[\"19\",\"21\",\"+\",\"2\",\"*\"]",
                "expected_output": "80",
                "is_sample": false
            },
            {
                "input": "[\"20\",\"22\",\"+\",\"2\",\"*\"]",
                "expected_output": "84",
                "is_sample": false
            },
            {
                "input": "[\"21\",\"23\",\"+\",\"2\",\"*\"]",
                "expected_output": "88",
                "is_sample": false
            },
            {
                "input": "[\"22\",\"24\",\"+\",\"2\",\"*\"]",
                "expected_output": "92",
                "is_sample": false
            },
            {
                "input": "[\"23\",\"25\",\"+\",\"2\",\"*\"]",
                "expected_output": "96",
                "is_sample": false
            },
            {
                "input": "[\"24\",\"26\",\"+\",\"2\",\"*\"]",
                "expected_output": "100",
                "is_sample": false
            },
            {
                "input": "[\"25\",\"27\",\"+\",\"2\",\"*\"]",
                "expected_output": "104",
                "is_sample": false
            },
            {
                "input": "[\"26\",\"28\",\"+\",\"2\",\"*\"]",
                "expected_output": "108",
                "is_sample": false
            },
            {
                "input": "[\"27\",\"29\",\"+\",\"2\",\"*\"]",
                "expected_output": "112",
                "is_sample": false
            },
            {
                "input": "[\"28\",\"30\",\"+\",\"2\",\"*\"]",
                "expected_output": "116",
                "is_sample": false
            },
            {
                "input": "[\"29\",\"31\",\"+\",\"2\",\"*\"]",
                "expected_output": "120",
                "is_sample": false
            },
            {
                "input": "[\"30\",\"32\",\"+\",\"2\",\"*\"]",
                "expected_output": "124",
                "is_sample": false
            },
            {
                "input": "[\"31\",\"33\",\"+\",\"2\",\"*\"]",
                "expected_output": "128",
                "is_sample": false
            },
            {
                "input": "[\"32\",\"34\",\"+\",\"2\",\"*\"]",
                "expected_output": "132",
                "is_sample": false
            },
            {
                "input": "[\"33\",\"35\",\"+\",\"2\",\"*\"]",
                "expected_output": "136",
                "is_sample": false
            },
            {
                "input": "[\"34\",\"36\",\"+\",\"2\",\"*\"]",
                "expected_output": "140",
                "is_sample": false
            },
            {
                "input": "[\"35\",\"37\",\"+\",\"2\",\"*\"]",
                "expected_output": "144",
                "is_sample": false
            },
            {
                "input": "[\"36\",\"38\",\"+\",\"2\",\"*\"]",
                "expected_output": "148",
                "is_sample": false
            },
            {
                "input": "[\"37\",\"39\",\"+\",\"2\",\"*\"]",
                "expected_output": "152",
                "is_sample": false
            },
            {
                "input": "[\"38\",\"40\",\"+\",\"2\",\"*\"]",
                "expected_output": "156",
                "is_sample": false
            },
            {
                "input": "[\"39\",\"41\",\"+\",\"2\",\"*\"]",
                "expected_output": "160",
                "is_sample": false
            },
            {
                "input": "[\"40\",\"42\",\"+\",\"2\",\"*\"]",
                "expected_output": "164",
                "is_sample": false
            },
            {
                "input": "[\"41\",\"43\",\"+\",\"2\",\"*\"]",
                "expected_output": "168",
                "is_sample": false
            },
            {
                "input": "[\"42\",\"44\",\"+\",\"2\",\"*\"]",
                "expected_output": "172",
                "is_sample": false
            },
            {
                "input": "[\"43\",\"45\",\"+\",\"2\",\"*\"]",
                "expected_output": "176",
                "is_sample": false
            },
            {
                "input": "[\"44\",\"46\",\"+\",\"2\",\"*\"]",
                "expected_output": "180",
                "is_sample": false
            },
            {
                "input": "[\"45\",\"47\",\"+\",\"2\",\"*\"]",
                "expected_output": "184",
                "is_sample": false
            },
            {
                "input": "[\"46\",\"48\",\"+\",\"2\",\"*\"]",
                "expected_output": "188",
                "is_sample": false
            },
            {
                "input": "[\"47\",\"49\",\"+\",\"2\",\"*\"]",
                "expected_output": "192",
                "is_sample": false
            },
            {
                "input": "[\"48\",\"50\",\"+\",\"2\",\"*\"]",
                "expected_output": "196",
                "is_sample": false
            },
            {
                "input": "[\"49\",\"51\",\"+\",\"2\",\"*\"]",
                "expected_output": "200",
                "is_sample": false
            },
            {
                "input": "[\"50\",\"52\",\"+\",\"2\",\"*\"]",
                "expected_output": "204",
                "is_sample": false
            }
        ]
    },
    {
        "question_number": 65,
        "title": "Longest Increasing Subsequence",
        "level": "Medium",
        "tags": [
            "Array",
            "Binary Search",
            "Dynamic Programming"
        ],
        "description": "Given an integer array nums, return the length of the longest strictly increasing subsequence.",
        "constraints": "1 <= nums.length <= 2500\n-10^4 <= nums[i] <= 10^4",
        "starter": "class Solution {\n    public int lengthOfLIS(int[] nums) {\n        // Write your code here\n        return 0;\n    }\n}",
        "driver": {
            "key": "intArrayToInt",
            "method": "lengthOfLIS"
        },
        "testcases": [
            {
                "input": "[10,9,2,5,3,7,101,18]",
                "expected_output": "4",
                "is_sample": true
            },
            {
                "input": "[0,1,0,3,2,3]",
                "expected_output": "4",
                "is_sample": true
            },
            {
                "input": "[7,7,7,7,7,7,7]",
                "expected_output": "1",
                "is_sample": false
            },
            {
                "input": "[2,1,4,3,6,5,9]",
                "expected_output": "4",
                "is_sample": false
            },
            {
                "input": "[4,2,5,4,7,6,10]",
                "expected_output": "4",
                "is_sample": false
            },
            {
                "input": "[6,3,6,5,8,7,11]",
                "expected_output": "4",
                "is_sample": false
            },
            {
                "input": "[8,4,7,6,9,8,12]",
                "expected_output": "4",
                "is_sample": false
            },
            {
                "input": "[10,5,8,7,10,9,13]",
                "expected_output": "4",
                "is_sample": false
            },
            {
                "input": "[12,6,9,8,11,10,14]",
                "expected_output": "4",
                "is_sample": false
            },
            {
                "input": "[14,7,10,9,12,11,15]",
                "expected_output": "4",
                "is_sample": false
            },
            {
                "input": "[16,8,11,10,13,12,16]",
                "expected_output": "4",
                "is_sample": false
            },
            {
                "input": "[18,9,12,11,14,13,17]",
                "expected_output": "4",
                "is_sample": false
            },
            {
                "input": "[20,10,13,12,15,14,18]",
                "expected_output": "4",
                "is_sample": false
            },
            {
                "input": "[22,11,14,13,16,15,19]",
                "expected_output": "4",
                "is_sample": false
            },
            {
                "input": "[24,12,15,14,17,16,20]",
                "expected_output": "4",
                "is_sample": false
            },
            {
                "input": "[26,13,16,15,18,17,21]",
                "expected_output": "4",
                "is_sample": false
            },
            {
                "input": "[28,14,17,16,19,18,22]",
                "expected_output": "4",
                "is_sample": false
            },
            {
                "input": "[30,15,18,17,20,19,23]",
                "expected_output": "4",
                "is_sample": false
            },
            {
                "input": "[32,16,19,18,21,20,24]",
                "expected_output": "4",
                "is_sample": false
            },
            {
                "input": "[34,17,20,19,22,21,25]",
                "expected_output": "4",
                "is_sample": false
            },
            {
                "input": "[36,18,21,20,23,22,26]",
                "expected_output": "4",
                "is_sample": false
            },
            {
                "input": "[38,19,22,21,24,23,27]",
                "expected_output": "4",
                "is_sample": false
            },
            {
                "input": "[40,20,23,22,25,24,28]",
                "expected_output": "4",
                "is_sample": false
            },
            {
                "input": "[42,21,24,23,26,25,29]",
                "expected_output": "4",
                "is_sample": false
            },
            {
                "input": "[44,22,25,24,27,26,30]",
                "expected_output": "4",
                "is_sample": false
            },
            {
                "input": "[46,23,26,25,28,27,31]",
                "expected_output": "4",
                "is_sample": false
            },
            {
                "input": "[48,24,27,26,29,28,32]",
                "expected_output": "4",
                "is_sample": false
            },
            {
                "input": "[50,25,28,27,30,29,33]",
                "expected_output": "4",
                "is_sample": false
            },
            {
                "input": "[52,26,29,28,31,30,34]",
                "expected_output": "4",
                "is_sample": false
            },
            {
                "input": "[54,27,30,29,32,31,35]",
                "expected_output": "4",
                "is_sample": false
            },
            {
                "input": "[56,28,31,30,33,32,36]",
                "expected_output": "4",
                "is_sample": false
            },
            {
                "input": "[58,29,32,31,34,33,37]",
                "expected_output": "4",
                "is_sample": false
            },
            {
                "input": "[60,30,33,32,35,34,38]",
                "expected_output": "4",
                "is_sample": false
            },
            {
                "input": "[62,31,34,33,36,35,39]",
                "expected_output": "4",
                "is_sample": false
            },
            {
                "input": "[64,32,35,34,37,36,40]",
                "expected_output": "4",
                "is_sample": false
            },
            {
                "input": "[66,33,36,35,38,37,41]",
                "expected_output": "4",
                "is_sample": false
            },
            {
                "input": "[68,34,37,36,39,38,42]",
                "expected_output": "4",
                "is_sample": false
            },
            {
                "input": "[70,35,38,37,40,39,43]",
                "expected_output": "4",
                "is_sample": false
            },
            {
                "input": "[72,36,39,38,41,40,44]",
                "expected_output": "4",
                "is_sample": false
            },
            {
                "input": "[74,37,40,39,42,41,45]",
                "expected_output": "4",
                "is_sample": false
            },
            {
                "input": "[76,38,41,40,43,42,46]",
                "expected_output": "4",
                "is_sample": false
            },
            {
                "input": "[78,39,42,41,44,43,47]",
                "expected_output": "4",
                "is_sample": false
            },
            {
                "input": "[80,40,43,42,45,44,48]",
                "expected_output": "4",
                "is_sample": false
            },
            {
                "input": "[82,41,44,43,46,45,49]",
                "expected_output": "4",
                "is_sample": false
            },
            {
                "input": "[84,42,45,44,47,46,50]",
                "expected_output": "4",
                "is_sample": false
            },
            {
                "input": "[86,43,46,45,48,47,51]",
                "expected_output": "4",
                "is_sample": false
            },
            {
                "input": "[88,44,47,46,49,48,52]",
                "expected_output": "4",
                "is_sample": false
            },
            {
                "input": "[90,45,48,47,50,49,53]",
                "expected_output": "4",
                "is_sample": false
            },
            {
                "input": "[92,46,49,48,51,50,54]",
                "expected_output": "4",
                "is_sample": false
            },
            {
                "input": "[94,47,50,49,52,51,55]",
                "expected_output": "4",
                "is_sample": false
            },
            {
                "input": "[96,48,51,50,53,52,56]",
                "expected_output": "4",
                "is_sample": false
            },
            {
                "input": "[98,49,52,51,54,53,57]",
                "expected_output": "4",
                "is_sample": false
            },
            {
                "input": "[100,50,53,52,55,54,58]",
                "expected_output": "4",
                "is_sample": false
            }
        ]
    },
    {
        "question_number": 66,
        "title": "Maximum Product Subarray",
        "level": "Medium",
        "tags": [
            "Array",
            "Dynamic Programming"
        ],
        "description": "Given an integer array nums, find a subarray that has the largest product, and return the product.",
        "constraints": "1 <= nums.length <= 2 * 10^4\n-10 <= nums[i] <= 10\nThe product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.",
        "starter": "class Solution {\n    public int maxProduct(int[] nums) {\n        // Write your code here\n        return 0;\n    }\n}",
        "driver": {
            "key": "intArrayToInt",
            "method": "maxProduct"
        },
        "testcases": [
            {
                "input": "[2,3,-2,4]",
                "expected_output": "6",
                "is_sample": true
            },
            {
                "input": "[-2,0,-1]",
                "expected_output": "0",
                "is_sample": true
            },
            {
                "input": "[-2,2,-3,2]",
                "expected_output": "24",
                "is_sample": false
            },
            {
                "input": "[-2,3,-3,3]",
                "expected_output": "54",
                "is_sample": false
            },
            {
                "input": "[-2,1,-3,4]",
                "expected_output": "24",
                "is_sample": false
            },
            {
                "input": "[-2,2,-3,1]",
                "expected_output": "12",
                "is_sample": false
            },
            {
                "input": "[-2,3,-3,2]",
                "expected_output": "36",
                "is_sample": false
            },
            {
                "input": "[-2,1,-3,3]",
                "expected_output": "18",
                "is_sample": false
            },
            {
                "input": "[-2,2,-3,4]",
                "expected_output": "48",
                "is_sample": false
            },
            {
                "input": "[-2,3,-3,1]",
                "expected_output": "18",
                "is_sample": false
            },
            {
                "input": "[-2,1,-3,2]",
                "expected_output": "12",
                "is_sample": false
            },
            {
                "input": "[-2,2,-3,3]",
                "expected_output": "36",
                "is_sample": false
            },
            {
                "input": "[-2,3,-3,4]",
                "expected_output": "72",
                "is_sample": false
            },
            {
                "input": "[-2,1,-3,1]",
                "expected_output": "6",
                "is_sample": false
            },
            {
                "input": "[-2,2,-3,2]",
                "expected_output": "24",
                "is_sample": false
            },
            {
                "input": "[-2,3,-3,3]",
                "expected_output": "54",
                "is_sample": false
            },
            {
                "input": "[-2,1,-3,4]",
                "expected_output": "24",
                "is_sample": false
            },
            {
                "input": "[-2,2,-3,1]",
                "expected_output": "12",
                "is_sample": false
            },
            {
                "input": "[-2,3,-3,2]",
                "expected_output": "36",
                "is_sample": false
            },
            {
                "input": "[-2,1,-3,3]",
                "expected_output": "18",
                "is_sample": false
            },
            {
                "input": "[-2,2,-3,4]",
                "expected_output": "48",
                "is_sample": false
            },
            {
                "input": "[-2,3,-3,1]",
                "expected_output": "18",
                "is_sample": false
            },
            {
                "input": "[-2,1,-3,2]",
                "expected_output": "12",
                "is_sample": false
            },
            {
                "input": "[-2,2,-3,3]",
                "expected_output": "36",
                "is_sample": false
            },
            {
                "input": "[-2,3,-3,4]",
                "expected_output": "72",
                "is_sample": false
            },
            {
                "input": "[-2,1,-3,1]",
                "expected_output": "6",
                "is_sample": false
            },
            {
                "input": "[-2,2,-3,2]",
                "expected_output": "24",
                "is_sample": false
            },
            {
                "input": "[-2,3,-3,3]",
                "expected_output": "54",
                "is_sample": false
            },
            {
                "input": "[-2,1,-3,4]",
                "expected_output": "24",
                "is_sample": false
            },
            {
                "input": "[-2,2,-3,1]",
                "expected_output": "12",
                "is_sample": false
            },
            {
                "input": "[-2,3,-3,2]",
                "expected_output": "36",
                "is_sample": false
            },
            {
                "input": "[-2,1,-3,3]",
                "expected_output": "18",
                "is_sample": false
            },
            {
                "input": "[-2,2,-3,4]",
                "expected_output": "48",
                "is_sample": false
            },
            {
                "input": "[-2,3,-3,1]",
                "expected_output": "18",
                "is_sample": false
            },
            {
                "input": "[-2,1,-3,2]",
                "expected_output": "12",
                "is_sample": false
            },
            {
                "input": "[-2,2,-3,3]",
                "expected_output": "36",
                "is_sample": false
            },
            {
                "input": "[-2,3,-3,4]",
                "expected_output": "72",
                "is_sample": false
            },
            {
                "input": "[-2,1,-3,1]",
                "expected_output": "6",
                "is_sample": false
            },
            {
                "input": "[-2,2,-3,2]",
                "expected_output": "24",
                "is_sample": false
            },
            {
                "input": "[-2,3,-3,3]",
                "expected_output": "54",
                "is_sample": false
            },
            {
                "input": "[-2,1,-3,4]",
                "expected_output": "24",
                "is_sample": false
            },
            {
                "input": "[-2,2,-3,1]",
                "expected_output": "12",
                "is_sample": false
            },
            {
                "input": "[-2,3,-3,2]",
                "expected_output": "36",
                "is_sample": false
            },
            {
                "input": "[-2,1,-3,3]",
                "expected_output": "18",
                "is_sample": false
            },
            {
                "input": "[-2,2,-3,4]",
                "expected_output": "48",
                "is_sample": false
            },
            {
                "input": "[-2,3,-3,1]",
                "expected_output": "18",
                "is_sample": false
            },
            {
                "input": "[-2,1,-3,2]",
                "expected_output": "12",
                "is_sample": false
            },
            {
                "input": "[-2,2,-3,3]",
                "expected_output": "36",
                "is_sample": false
            },
            {
                "input": "[-2,3,-3,4]",
                "expected_output": "72",
                "is_sample": false
            },
            {
                "input": "[-2,1,-3,1]",
                "expected_output": "6",
                "is_sample": false
            },
            {
                "input": "[-2,2,-3,2]",
                "expected_output": "24",
                "is_sample": false
            },
            {
                "input": "[-2,3,-3,3]",
                "expected_output": "54",
                "is_sample": false
            }
        ]
    },
    {
        "question_number": 67,
        "title": "Find Peak Element",
        "level": "Medium",
        "tags": [
            "Array",
            "Binary Search"
        ],
        "description": "A peak element is an element that is strictly greater than its neighbors. Given a 0-indexed integer array nums, find a peak element, and return its index. If the array contains multiple peaks, return the index to any of the peaks.",
        "constraints": "1 <= nums.length <= 1000\n-2^31 <= nums[i] <= 2^31 - 1\nnums[i] != nums[i + 1] for all valid i.",
        "starter": "class Solution {\n    public int findPeakElement(int[] nums) {\n        // Write your code here\n        return 0;\n    }\n}",
        "driver": {
            "key": "intArrayToInt",
            "method": "findPeakElement"
        },
        "testcases": [
            {
                "input": "[1,2,3,1]",
                "expected_output": "2",
                "is_sample": true
            },
            {
                "input": "[1,2,1,3,5,6,4]",
                "expected_output": "5",
                "is_sample": true
            },
            {
                "input": "[1,3,6,2,0]",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "[1,4,7,3,0]",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "[1,5,8,4,0]",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "[1,6,9,5,0]",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "[1,7,10,6,0]",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "[1,8,11,7,0]",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "[1,9,12,8,0]",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "[1,10,13,9,0]",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "[1,11,14,10,0]",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "[1,12,15,11,0]",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "[1,13,16,12,0]",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "[1,14,17,13,0]",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "[1,15,18,14,0]",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "[1,16,19,15,0]",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "[1,17,20,16,0]",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "[1,18,21,17,0]",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "[1,19,22,18,0]",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "[1,20,23,19,0]",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "[1,21,24,20,0]",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "[1,22,25,21,0]",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "[1,23,26,22,0]",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "[1,24,27,23,0]",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "[1,25,28,24,0]",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "[1,26,29,25,0]",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "[1,27,30,26,0]",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "[1,28,31,27,0]",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "[1,29,32,28,0]",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "[1,30,33,29,0]",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "[1,31,34,30,0]",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "[1,32,35,31,0]",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "[1,33,36,32,0]",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "[1,34,37,33,0]",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "[1,35,38,34,0]",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "[1,36,39,35,0]",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "[1,37,40,36,0]",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "[1,38,41,37,0]",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "[1,39,42,38,0]",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "[1,40,43,39,0]",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "[1,41,44,40,0]",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "[1,42,45,41,0]",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "[1,43,46,42,0]",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "[1,44,47,43,0]",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "[1,45,48,44,0]",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "[1,46,49,45,0]",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "[1,47,50,46,0]",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "[1,48,51,47,0]",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "[1,49,52,48,0]",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "[1,50,53,49,0]",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "[1,51,54,50,0]",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "[1,52,55,51,0]",
                "expected_output": "2",
                "is_sample": false
            }
        ]
    },
    {
        "question_number": 68,
        "title": "Rotate Array",
        "level": "Medium",
        "tags": [
            "Array",
            "Math",
            "Two Pointers"
        ],
        "description": "Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.\n\nInput format (2 lines):\nLine 1: nums as JSON array\nLine 2: k",
        "constraints": "1 <= nums.length <= 10^5\n-2^31 <= nums[i] <= 2^31 - 1\n0 <= k <= 10^5",
        "starter": "class Solution {\n    public void rotate(int[] nums, int k) {\n        // Write your code here (modify nums in-place)\n    }\n}",
        "driver": "rotateArray",
        "testcases": [
            {
                "input": "[1,2,3,4,5,6,7]\n3",
                "expected_output": "[5,6,7,1,2,3,4]",
                "is_sample": true
            },
            {
                "input": "[-1,-100,3,99]\n2",
                "expected_output": "[3,99,-1,-100]",
                "is_sample": true
            },
            {
                "input": "[1,2,3,4,5]\n2",
                "expected_output": "[4,5,1,2,3]",
                "is_sample": false
            },
            {
                "input": "[2,3,4,5,6]\n3",
                "expected_output": "[4,5,6,2,3]",
                "is_sample": false
            },
            {
                "input": "[3,4,5,6,7]\n4",
                "expected_output": "[4,5,6,7,3]",
                "is_sample": false
            },
            {
                "input": "[4,5,6,7,8]\n1",
                "expected_output": "[8,4,5,6,7]",
                "is_sample": false
            },
            {
                "input": "[5,6,7,8,9]\n2",
                "expected_output": "[8,9,5,6,7]",
                "is_sample": false
            },
            {
                "input": "[6,7,8,9,10]\n3",
                "expected_output": "[8,9,10,6,7]",
                "is_sample": false
            },
            {
                "input": "[7,8,9,10,11]\n4",
                "expected_output": "[8,9,10,11,7]",
                "is_sample": false
            },
            {
                "input": "[8,9,10,11,12]\n1",
                "expected_output": "[12,8,9,10,11]",
                "is_sample": false
            },
            {
                "input": "[9,10,11,12,13]\n2",
                "expected_output": "[12,13,9,10,11]",
                "is_sample": false
            },
            {
                "input": "[10,11,12,13,14]\n3",
                "expected_output": "[12,13,14,10,11]",
                "is_sample": false
            },
            {
                "input": "[11,12,13,14,15]\n4",
                "expected_output": "[12,13,14,15,11]",
                "is_sample": false
            },
            {
                "input": "[12,13,14,15,16]\n1",
                "expected_output": "[16,12,13,14,15]",
                "is_sample": false
            },
            {
                "input": "[13,14,15,16,17]\n2",
                "expected_output": "[16,17,13,14,15]",
                "is_sample": false
            },
            {
                "input": "[14,15,16,17,18]\n3",
                "expected_output": "[16,17,18,14,15]",
                "is_sample": false
            },
            {
                "input": "[15,16,17,18,19]\n4",
                "expected_output": "[16,17,18,19,15]",
                "is_sample": false
            },
            {
                "input": "[16,17,18,19,20]\n1",
                "expected_output": "[20,16,17,18,19]",
                "is_sample": false
            },
            {
                "input": "[17,18,19,20,21]\n2",
                "expected_output": "[20,21,17,18,19]",
                "is_sample": false
            },
            {
                "input": "[18,19,20,21,22]\n3",
                "expected_output": "[20,21,22,18,19]",
                "is_sample": false
            },
            {
                "input": "[19,20,21,22,23]\n4",
                "expected_output": "[20,21,22,23,19]",
                "is_sample": false
            },
            {
                "input": "[20,21,22,23,24]\n1",
                "expected_output": "[24,20,21,22,23]",
                "is_sample": false
            },
            {
                "input": "[21,22,23,24,25]\n2",
                "expected_output": "[24,25,21,22,23]",
                "is_sample": false
            },
            {
                "input": "[22,23,24,25,26]\n3",
                "expected_output": "[24,25,26,22,23]",
                "is_sample": false
            },
            {
                "input": "[23,24,25,26,27]\n4",
                "expected_output": "[24,25,26,27,23]",
                "is_sample": false
            },
            {
                "input": "[24,25,26,27,28]\n1",
                "expected_output": "[28,24,25,26,27]",
                "is_sample": false
            },
            {
                "input": "[25,26,27,28,29]\n2",
                "expected_output": "[28,29,25,26,27]",
                "is_sample": false
            },
            {
                "input": "[26,27,28,29,30]\n3",
                "expected_output": "[28,29,30,26,27]",
                "is_sample": false
            },
            {
                "input": "[27,28,29,30,31]\n4",
                "expected_output": "[28,29,30,31,27]",
                "is_sample": false
            },
            {
                "input": "[28,29,30,31,32]\n1",
                "expected_output": "[32,28,29,30,31]",
                "is_sample": false
            },
            {
                "input": "[29,30,31,32,33]\n2",
                "expected_output": "[32,33,29,30,31]",
                "is_sample": false
            },
            {
                "input": "[30,31,32,33,34]\n3",
                "expected_output": "[32,33,34,30,31]",
                "is_sample": false
            },
            {
                "input": "[31,32,33,34,35]\n4",
                "expected_output": "[32,33,34,35,31]",
                "is_sample": false
            },
            {
                "input": "[32,33,34,35,36]\n1",
                "expected_output": "[36,32,33,34,35]",
                "is_sample": false
            },
            {
                "input": "[33,34,35,36,37]\n2",
                "expected_output": "[36,37,33,34,35]",
                "is_sample": false
            },
            {
                "input": "[34,35,36,37,38]\n3",
                "expected_output": "[36,37,38,34,35]",
                "is_sample": false
            },
            {
                "input": "[35,36,37,38,39]\n4",
                "expected_output": "[36,37,38,39,35]",
                "is_sample": false
            },
            {
                "input": "[36,37,38,39,40]\n1",
                "expected_output": "[40,36,37,38,39]",
                "is_sample": false
            },
            {
                "input": "[37,38,39,40,41]\n2",
                "expected_output": "[40,41,37,38,39]",
                "is_sample": false
            },
            {
                "input": "[38,39,40,41,42]\n3",
                "expected_output": "[40,41,42,38,39]",
                "is_sample": false
            },
            {
                "input": "[39,40,41,42,43]\n4",
                "expected_output": "[40,41,42,43,39]",
                "is_sample": false
            },
            {
                "input": "[40,41,42,43,44]\n1",
                "expected_output": "[44,40,41,42,43]",
                "is_sample": false
            },
            {
                "input": "[41,42,43,44,45]\n2",
                "expected_output": "[44,45,41,42,43]",
                "is_sample": false
            },
            {
                "input": "[42,43,44,45,46]\n3",
                "expected_output": "[44,45,46,42,43]",
                "is_sample": false
            },
            {
                "input": "[43,44,45,46,47]\n4",
                "expected_output": "[44,45,46,47,43]",
                "is_sample": false
            },
            {
                "input": "[44,45,46,47,48]\n1",
                "expected_output": "[48,44,45,46,47]",
                "is_sample": false
            },
            {
                "input": "[45,46,47,48,49]\n2",
                "expected_output": "[48,49,45,46,47]",
                "is_sample": false
            },
            {
                "input": "[46,47,48,49,50]\n3",
                "expected_output": "[48,49,50,46,47]",
                "is_sample": false
            },
            {
                "input": "[47,48,49,50,51]\n4",
                "expected_output": "[48,49,50,51,47]",
                "is_sample": false
            },
            {
                "input": "[48,49,50,51,52]\n1",
                "expected_output": "[52,48,49,50,51]",
                "is_sample": false
            },
            {
                "input": "[49,50,51,52,53]\n2",
                "expected_output": "[52,53,49,50,51]",
                "is_sample": false
            },
            {
                "input": "[50,51,52,53,54]\n3",
                "expected_output": "[52,53,54,50,51]",
                "is_sample": false
            }
        ]
    },
    {
        "question_number": 69,
        "title": "Set Matrix Zeroes",
        "level": "Medium",
        "tags": [
            "Array",
            "Hash Table",
            "Matrix"
        ],
        "description": "Given an m x n integer matrix matrix, if an element is 0, set its entire row and column to 0's. You must do it in place.",
        "constraints": "m == matrix.length\nn == matrix[0].length\n1 <= m, n <= 200\n-2^31 <= matrix[i][j] <= 2^31 - 1",
        "starter": "class Solution {\n    public void setZeroes(int[][] matrix) {\n        // Write your code here (modify matrix in-place)\n    }\n}",
        "driver": {
            "key": "intMatrixInPlace",
            "method": "setZeroes"
        },
        "testcases": [
            {
                "input": "[[1,1,1],[1,0,1],[1,1,1]]",
                "expected_output": "[[1,0,1],[0,0,0],[1,0,1]]",
                "is_sample": true
            },
            {
                "input": "[[0,1,2,0],[3,4,5,2],[1,3,1,5]]",
                "expected_output": "[[0,0,0,0],[0,4,5,0],[0,3,1,0]]",
                "is_sample": true
            },
            {
                "input": "[[1,0,2],[3,4,5]]",
                "expected_output": "[[0,0,0],[3,0,5]]",
                "is_sample": false
            },
            {
                "input": "[[2,0,3],[4,5,6]]",
                "expected_output": "[[0,0,0],[4,0,6]]",
                "is_sample": false
            },
            {
                "input": "[[3,0,4],[5,6,7]]",
                "expected_output": "[[0,0,0],[5,0,7]]",
                "is_sample": false
            },
            {
                "input": "[[4,0,5],[6,7,8]]",
                "expected_output": "[[0,0,0],[6,0,8]]",
                "is_sample": false
            },
            {
                "input": "[[5,0,6],[7,8,9]]",
                "expected_output": "[[0,0,0],[7,0,9]]",
                "is_sample": false
            },
            {
                "input": "[[6,0,7],[8,9,10]]",
                "expected_output": "[[0,0,0],[8,0,10]]",
                "is_sample": false
            },
            {
                "input": "[[7,0,8],[9,10,11]]",
                "expected_output": "[[0,0,0],[9,0,11]]",
                "is_sample": false
            },
            {
                "input": "[[8,0,9],[10,11,12]]",
                "expected_output": "[[0,0,0],[10,0,12]]",
                "is_sample": false
            },
            {
                "input": "[[9,0,10],[11,12,13]]",
                "expected_output": "[[0,0,0],[11,0,13]]",
                "is_sample": false
            },
            {
                "input": "[[10,0,11],[12,13,14]]",
                "expected_output": "[[0,0,0],[12,0,14]]",
                "is_sample": false
            },
            {
                "input": "[[11,0,12],[13,14,15]]",
                "expected_output": "[[0,0,0],[13,0,15]]",
                "is_sample": false
            },
            {
                "input": "[[12,0,13],[14,15,16]]",
                "expected_output": "[[0,0,0],[14,0,16]]",
                "is_sample": false
            },
            {
                "input": "[[13,0,14],[15,16,17]]",
                "expected_output": "[[0,0,0],[15,0,17]]",
                "is_sample": false
            },
            {
                "input": "[[14,0,15],[16,17,18]]",
                "expected_output": "[[0,0,0],[16,0,18]]",
                "is_sample": false
            },
            {
                "input": "[[15,0,16],[17,18,19]]",
                "expected_output": "[[0,0,0],[17,0,19]]",
                "is_sample": false
            },
            {
                "input": "[[16,0,17],[18,19,20]]",
                "expected_output": "[[0,0,0],[18,0,20]]",
                "is_sample": false
            },
            {
                "input": "[[17,0,18],[19,20,21]]",
                "expected_output": "[[0,0,0],[19,0,21]]",
                "is_sample": false
            },
            {
                "input": "[[18,0,19],[20,21,22]]",
                "expected_output": "[[0,0,0],[20,0,22]]",
                "is_sample": false
            },
            {
                "input": "[[19,0,20],[21,22,23]]",
                "expected_output": "[[0,0,0],[21,0,23]]",
                "is_sample": false
            },
            {
                "input": "[[20,0,21],[22,23,24]]",
                "expected_output": "[[0,0,0],[22,0,24]]",
                "is_sample": false
            },
            {
                "input": "[[21,0,22],[23,24,25]]",
                "expected_output": "[[0,0,0],[23,0,25]]",
                "is_sample": false
            },
            {
                "input": "[[22,0,23],[24,25,26]]",
                "expected_output": "[[0,0,0],[24,0,26]]",
                "is_sample": false
            },
            {
                "input": "[[23,0,24],[25,26,27]]",
                "expected_output": "[[0,0,0],[25,0,27]]",
                "is_sample": false
            },
            {
                "input": "[[24,0,25],[26,27,28]]",
                "expected_output": "[[0,0,0],[26,0,28]]",
                "is_sample": false
            },
            {
                "input": "[[25,0,26],[27,28,29]]",
                "expected_output": "[[0,0,0],[27,0,29]]",
                "is_sample": false
            },
            {
                "input": "[[26,0,27],[28,29,30]]",
                "expected_output": "[[0,0,0],[28,0,30]]",
                "is_sample": false
            },
            {
                "input": "[[27,0,28],[29,30,31]]",
                "expected_output": "[[0,0,0],[29,0,31]]",
                "is_sample": false
            },
            {
                "input": "[[28,0,29],[30,31,32]]",
                "expected_output": "[[0,0,0],[30,0,32]]",
                "is_sample": false
            },
            {
                "input": "[[29,0,30],[31,32,33]]",
                "expected_output": "[[0,0,0],[31,0,33]]",
                "is_sample": false
            },
            {
                "input": "[[30,0,31],[32,33,34]]",
                "expected_output": "[[0,0,0],[32,0,34]]",
                "is_sample": false
            },
            {
                "input": "[[31,0,32],[33,34,35]]",
                "expected_output": "[[0,0,0],[33,0,35]]",
                "is_sample": false
            },
            {
                "input": "[[32,0,33],[34,35,36]]",
                "expected_output": "[[0,0,0],[34,0,36]]",
                "is_sample": false
            },
            {
                "input": "[[33,0,34],[35,36,37]]",
                "expected_output": "[[0,0,0],[35,0,37]]",
                "is_sample": false
            },
            {
                "input": "[[34,0,35],[36,37,38]]",
                "expected_output": "[[0,0,0],[36,0,38]]",
                "is_sample": false
            },
            {
                "input": "[[35,0,36],[37,38,39]]",
                "expected_output": "[[0,0,0],[37,0,39]]",
                "is_sample": false
            },
            {
                "input": "[[36,0,37],[38,39,40]]",
                "expected_output": "[[0,0,0],[38,0,40]]",
                "is_sample": false
            },
            {
                "input": "[[37,0,38],[39,40,41]]",
                "expected_output": "[[0,0,0],[39,0,41]]",
                "is_sample": false
            },
            {
                "input": "[[38,0,39],[40,41,42]]",
                "expected_output": "[[0,0,0],[40,0,42]]",
                "is_sample": false
            },
            {
                "input": "[[39,0,40],[41,42,43]]",
                "expected_output": "[[0,0,0],[41,0,43]]",
                "is_sample": false
            },
            {
                "input": "[[40,0,41],[42,43,44]]",
                "expected_output": "[[0,0,0],[42,0,44]]",
                "is_sample": false
            },
            {
                "input": "[[41,0,42],[43,44,45]]",
                "expected_output": "[[0,0,0],[43,0,45]]",
                "is_sample": false
            },
            {
                "input": "[[42,0,43],[44,45,46]]",
                "expected_output": "[[0,0,0],[44,0,46]]",
                "is_sample": false
            },
            {
                "input": "[[43,0,44],[45,46,47]]",
                "expected_output": "[[0,0,0],[45,0,47]]",
                "is_sample": false
            },
            {
                "input": "[[44,0,45],[46,47,48]]",
                "expected_output": "[[0,0,0],[46,0,48]]",
                "is_sample": false
            },
            {
                "input": "[[45,0,46],[47,48,49]]",
                "expected_output": "[[0,0,0],[47,0,49]]",
                "is_sample": false
            },
            {
                "input": "[[46,0,47],[48,49,50]]",
                "expected_output": "[[0,0,0],[48,0,50]]",
                "is_sample": false
            },
            {
                "input": "[[47,0,48],[49,50,51]]",
                "expected_output": "[[0,0,0],[49,0,51]]",
                "is_sample": false
            },
            {
                "input": "[[48,0,49],[50,51,52]]",
                "expected_output": "[[0,0,0],[50,0,52]]",
                "is_sample": false
            },
            {
                "input": "[[49,0,50],[51,52,53]]",
                "expected_output": "[[0,0,0],[51,0,53]]",
                "is_sample": false
            },
            {
                "input": "[[50,0,51],[52,53,54]]",
                "expected_output": "[[0,0,0],[52,0,54]]",
                "is_sample": false
            }
        ]
    },
    {
        "question_number": 70,
        "title": "Spiral Matrix",
        "level": "Medium",
        "tags": [
            "Array",
            "Matrix",
            "Simulation"
        ],
        "description": "Given an m x n matrix, return all elements of the matrix in spiral order.",
        "constraints": "m == matrix.length\nn == matrix[i].length\n1 <= m, n <= 10\n-100 <= matrix[i][j] <= 100",
        "starter": "class Solution {\n    public List<Integer> spiralOrder(int[][] matrix) {\n        // Write your code here\n        return new ArrayList<>();\n    }\n}",
        "driver": {
            "key": "intMatrixToIntArray",
            "method": "spiralOrder"
        },
        "testcases": [
            {
                "input": "[[1,2,3],[4,5,6],[7,8,9]]",
                "expected_output": "[1,2,3,6,9,8,7,4,5]",
                "is_sample": true
            },
            {
                "input": "[[1,2,3,4],[5,6,7,8],[9,10,11,12]]",
                "expected_output": "[1,2,3,4,8,12,11,10,9,5,6,7]",
                "is_sample": true
            },
            {
                "input": "[[1,2],[3,4]]",
                "expected_output": "[1,2,4,3]",
                "is_sample": false
            },
            {
                "input": "[[2,3],[4,5]]",
                "expected_output": "[2,3,5,4]",
                "is_sample": false
            },
            {
                "input": "[[3,4],[5,6]]",
                "expected_output": "[3,4,6,5]",
                "is_sample": false
            },
            {
                "input": "[[4,5],[6,7]]",
                "expected_output": "[4,5,7,6]",
                "is_sample": false
            },
            {
                "input": "[[5,6],[7,8]]",
                "expected_output": "[5,6,8,7]",
                "is_sample": false
            },
            {
                "input": "[[6,7],[8,9]]",
                "expected_output": "[6,7,9,8]",
                "is_sample": false
            },
            {
                "input": "[[7,8],[9,10]]",
                "expected_output": "[7,8,10,9]",
                "is_sample": false
            },
            {
                "input": "[[8,9],[10,11]]",
                "expected_output": "[8,9,11,10]",
                "is_sample": false
            },
            {
                "input": "[[9,10],[11,12]]",
                "expected_output": "[9,10,12,11]",
                "is_sample": false
            },
            {
                "input": "[[10,11],[12,13]]",
                "expected_output": "[10,11,13,12]",
                "is_sample": false
            },
            {
                "input": "[[11,12],[13,14]]",
                "expected_output": "[11,12,14,13]",
                "is_sample": false
            },
            {
                "input": "[[12,13],[14,15]]",
                "expected_output": "[12,13,15,14]",
                "is_sample": false
            },
            {
                "input": "[[13,14],[15,16]]",
                "expected_output": "[13,14,16,15]",
                "is_sample": false
            },
            {
                "input": "[[14,15],[16,17]]",
                "expected_output": "[14,15,17,16]",
                "is_sample": false
            },
            {
                "input": "[[15,16],[17,18]]",
                "expected_output": "[15,16,18,17]",
                "is_sample": false
            },
            {
                "input": "[[16,17],[18,19]]",
                "expected_output": "[16,17,19,18]",
                "is_sample": false
            },
            {
                "input": "[[17,18],[19,20]]",
                "expected_output": "[17,18,20,19]",
                "is_sample": false
            },
            {
                "input": "[[18,19],[20,21]]",
                "expected_output": "[18,19,21,20]",
                "is_sample": false
            },
            {
                "input": "[[19,20],[21,22]]",
                "expected_output": "[19,20,22,21]",
                "is_sample": false
            },
            {
                "input": "[[20,21],[22,23]]",
                "expected_output": "[20,21,23,22]",
                "is_sample": false
            },
            {
                "input": "[[21,22],[23,24]]",
                "expected_output": "[21,22,24,23]",
                "is_sample": false
            },
            {
                "input": "[[22,23],[24,25]]",
                "expected_output": "[22,23,25,24]",
                "is_sample": false
            },
            {
                "input": "[[23,24],[25,26]]",
                "expected_output": "[23,24,26,25]",
                "is_sample": false
            },
            {
                "input": "[[24,25],[26,27]]",
                "expected_output": "[24,25,27,26]",
                "is_sample": false
            },
            {
                "input": "[[25,26],[27,28]]",
                "expected_output": "[25,26,28,27]",
                "is_sample": false
            },
            {
                "input": "[[26,27],[28,29]]",
                "expected_output": "[26,27,29,28]",
                "is_sample": false
            },
            {
                "input": "[[27,28],[29,30]]",
                "expected_output": "[27,28,30,29]",
                "is_sample": false
            },
            {
                "input": "[[28,29],[30,31]]",
                "expected_output": "[28,29,31,30]",
                "is_sample": false
            },
            {
                "input": "[[29,30],[31,32]]",
                "expected_output": "[29,30,32,31]",
                "is_sample": false
            },
            {
                "input": "[[30,31],[32,33]]",
                "expected_output": "[30,31,33,32]",
                "is_sample": false
            },
            {
                "input": "[[31,32],[33,34]]",
                "expected_output": "[31,32,34,33]",
                "is_sample": false
            },
            {
                "input": "[[32,33],[34,35]]",
                "expected_output": "[32,33,35,34]",
                "is_sample": false
            },
            {
                "input": "[[33,34],[35,36]]",
                "expected_output": "[33,34,36,35]",
                "is_sample": false
            },
            {
                "input": "[[34,35],[36,37]]",
                "expected_output": "[34,35,37,36]",
                "is_sample": false
            },
            {
                "input": "[[35,36],[37,38]]",
                "expected_output": "[35,36,38,37]",
                "is_sample": false
            },
            {
                "input": "[[36,37],[38,39]]",
                "expected_output": "[36,37,39,38]",
                "is_sample": false
            },
            {
                "input": "[[37,38],[39,40]]",
                "expected_output": "[37,38,40,39]",
                "is_sample": false
            },
            {
                "input": "[[38,39],[40,41]]",
                "expected_output": "[38,39,41,40]",
                "is_sample": false
            },
            {
                "input": "[[39,40],[41,42]]",
                "expected_output": "[39,40,42,41]",
                "is_sample": false
            },
            {
                "input": "[[40,41],[42,43]]",
                "expected_output": "[40,41,43,42]",
                "is_sample": false
            },
            {
                "input": "[[41,42],[43,44]]",
                "expected_output": "[41,42,44,43]",
                "is_sample": false
            },
            {
                "input": "[[42,43],[44,45]]",
                "expected_output": "[42,43,45,44]",
                "is_sample": false
            },
            {
                "input": "[[43,44],[45,46]]",
                "expected_output": "[43,44,46,45]",
                "is_sample": false
            },
            {
                "input": "[[44,45],[46,47]]",
                "expected_output": "[44,45,47,46]",
                "is_sample": false
            },
            {
                "input": "[[45,46],[47,48]]",
                "expected_output": "[45,46,48,47]",
                "is_sample": false
            },
            {
                "input": "[[46,47],[48,49]]",
                "expected_output": "[46,47,49,48]",
                "is_sample": false
            },
            {
                "input": "[[47,48],[49,50]]",
                "expected_output": "[47,48,50,49]",
                "is_sample": false
            },
            {
                "input": "[[48,49],[50,51]]",
                "expected_output": "[48,49,51,50]",
                "is_sample": false
            },
            {
                "input": "[[49,50],[51,52]]",
                "expected_output": "[49,50,52,51]",
                "is_sample": false
            },
            {
                "input": "[[50,51],[52,53]]",
                "expected_output": "[50,51,53,52]",
                "is_sample": false
            }
        ]
    },
    {
        "question_number": 71,
        "title": "Search a 2D Matrix",
        "level": "Medium",
        "tags": [
            "Array",
            "Binary Search",
            "Matrix"
        ],
        "description": "You are given an m x n integer matrix matrix with the following two properties:\n1. Each row is sorted in non-decreasing order.\n2. The first integer of each row is greater than the last integer of the previous row.\nGiven an integer target, return true if target is in matrix or false otherwise.\n\nInput format (2 lines):\nLine 1: matrix as JSON 2D array\nLine 2: target",
        "constraints": "m == matrix.length\nn == matrix[i].length\n1 <= m, n <= 100\n-10^4 <= matrix[i][j], target <= 10^4",
        "starter": "class Solution {\n    public boolean searchMatrix(int[][] matrix, int target) {\n        // Write your code here\n        return false;\n    }\n}",
        "driver": {
            "key": "intMatrixAndIntToBoolean",
            "method": "searchMatrix"
        },
        "testcases": [
            {
                "input": "[[1,3,5,7],[10,11,16,20],[23,30,34,60]]\n3",
                "expected_output": "true",
                "is_sample": true
            },
            {
                "input": "[[1,3,5,7],[10,11,16,20],[23,30,34,60]]\n13",
                "expected_output": "false",
                "is_sample": true
            },
            {
                "input": "[[2,4],[6,8]]\n9999",
                "expected_output": "false",
                "is_sample": false
            },
            {
                "input": "[[4,6],[8,10]]\n6",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "[[6,8],[10,12]]\n9999",
                "expected_output": "false",
                "is_sample": false
            },
            {
                "input": "[[8,10],[12,14]]\n10",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "[[10,12],[14,16]]\n9999",
                "expected_output": "false",
                "is_sample": false
            },
            {
                "input": "[[12,14],[16,18]]\n14",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "[[14,16],[18,20]]\n9999",
                "expected_output": "false",
                "is_sample": false
            },
            {
                "input": "[[16,18],[20,22]]\n18",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "[[18,20],[22,24]]\n9999",
                "expected_output": "false",
                "is_sample": false
            },
            {
                "input": "[[20,22],[24,26]]\n22",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "[[22,24],[26,28]]\n9999",
                "expected_output": "false",
                "is_sample": false
            },
            {
                "input": "[[24,26],[28,30]]\n26",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "[[26,28],[30,32]]\n9999",
                "expected_output": "false",
                "is_sample": false
            },
            {
                "input": "[[28,30],[32,34]]\n30",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "[[30,32],[34,36]]\n9999",
                "expected_output": "false",
                "is_sample": false
            },
            {
                "input": "[[32,34],[36,38]]\n34",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "[[34,36],[38,40]]\n9999",
                "expected_output": "false",
                "is_sample": false
            },
            {
                "input": "[[36,38],[40,42]]\n38",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "[[38,40],[42,44]]\n9999",
                "expected_output": "false",
                "is_sample": false
            },
            {
                "input": "[[40,42],[44,46]]\n42",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "[[42,44],[46,48]]\n9999",
                "expected_output": "false",
                "is_sample": false
            },
            {
                "input": "[[44,46],[48,50]]\n46",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "[[46,48],[50,52]]\n9999",
                "expected_output": "false",
                "is_sample": false
            },
            {
                "input": "[[48,50],[52,54]]\n50",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "[[50,52],[54,56]]\n9999",
                "expected_output": "false",
                "is_sample": false
            },
            {
                "input": "[[52,54],[56,58]]\n54",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "[[54,56],[58,60]]\n9999",
                "expected_output": "false",
                "is_sample": false
            },
            {
                "input": "[[56,58],[60,62]]\n58",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "[[58,60],[62,64]]\n9999",
                "expected_output": "false",
                "is_sample": false
            },
            {
                "input": "[[60,62],[64,66]]\n62",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "[[62,64],[66,68]]\n9999",
                "expected_output": "false",
                "is_sample": false
            },
            {
                "input": "[[64,66],[68,70]]\n66",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "[[66,68],[70,72]]\n9999",
                "expected_output": "false",
                "is_sample": false
            },
            {
                "input": "[[68,70],[72,74]]\n70",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "[[70,72],[74,76]]\n9999",
                "expected_output": "false",
                "is_sample": false
            },
            {
                "input": "[[72,74],[76,78]]\n74",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "[[74,76],[78,80]]\n9999",
                "expected_output": "false",
                "is_sample": false
            },
            {
                "input": "[[76,78],[80,82]]\n78",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "[[78,80],[82,84]]\n9999",
                "expected_output": "false",
                "is_sample": false
            },
            {
                "input": "[[80,82],[84,86]]\n82",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "[[82,84],[86,88]]\n9999",
                "expected_output": "false",
                "is_sample": false
            },
            {
                "input": "[[84,86],[88,90]]\n86",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "[[86,88],[90,92]]\n9999",
                "expected_output": "false",
                "is_sample": false
            },
            {
                "input": "[[88,90],[92,94]]\n90",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "[[90,92],[94,96]]\n9999",
                "expected_output": "false",
                "is_sample": false
            },
            {
                "input": "[[92,94],[96,98]]\n94",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "[[94,96],[98,100]]\n9999",
                "expected_output": "false",
                "is_sample": false
            },
            {
                "input": "[[96,98],[100,102]]\n98",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "[[98,100],[102,104]]\n9999",
                "expected_output": "false",
                "is_sample": false
            },
            {
                "input": "[[100,102],[104,106]]\n102",
                "expected_output": "true",
                "is_sample": false
            }
        ]
    },
    {
        "question_number": 72,
        "title": "Permutation in String",
        "level": "Medium",
        "tags": [
            "Hash Table",
            "Two Pointers",
            "String",
            "Sliding Window"
        ],
        "description": "Given two strings s1 and s2, return true if s2 contains a permutation of s1, or false otherwise.\n\nIn other words, return true if one of s1's permutations is the substring of s2.\n\nInput format (2 lines):\nLine 1: s1\nLine 2: s2",
        "constraints": "1 <= s1.length, s2.length <= 10^4\ns1 and s2 consist of lowercase English letters.",
        "starter": "class Solution {\n    public boolean checkInclusion(String s1, String s2) {\n        // Write your code here\n        return false;\n    }\n}",
        "driver": {
            "key": "twoStringsToBoolean",
            "method": "checkInclusion"
        },
        "testcases": [
            {
                "input": "ab\neidbaooo",
                "expected_output": "true",
                "is_sample": true
            },
            {
                "input": "ab\neidboaoo",
                "expected_output": "false",
                "is_sample": true
            },
            {
                "input": "ab1\nxyz1234",
                "expected_output": "false",
                "is_sample": false
            },
            {
                "input": "ab2\neidb2aooo",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "ab3\nxyz1234",
                "expected_output": "false",
                "is_sample": false
            },
            {
                "input": "ab4\neidb4aooo",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "ab5\nxyz1234",
                "expected_output": "false",
                "is_sample": false
            },
            {
                "input": "ab6\neidb6aooo",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "ab7\nxyz1234",
                "expected_output": "false",
                "is_sample": false
            },
            {
                "input": "ab8\neidb8aooo",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "ab9\nxyz1234",
                "expected_output": "false",
                "is_sample": false
            },
            {
                "input": "ab0\neidb0aooo",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "ab1\nxyz1234",
                "expected_output": "false",
                "is_sample": false
            },
            {
                "input": "ab2\neidb2aooo",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "ab3\nxyz1234",
                "expected_output": "false",
                "is_sample": false
            },
            {
                "input": "ab4\neidb4aooo",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "ab5\nxyz1234",
                "expected_output": "false",
                "is_sample": false
            },
            {
                "input": "ab6\neidb6aooo",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "ab7\nxyz1234",
                "expected_output": "false",
                "is_sample": false
            },
            {
                "input": "ab8\neidb8aooo",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "ab9\nxyz1234",
                "expected_output": "false",
                "is_sample": false
            },
            {
                "input": "ab0\neidb0aooo",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "ab1\nxyz1234",
                "expected_output": "false",
                "is_sample": false
            },
            {
                "input": "ab2\neidb2aooo",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "ab3\nxyz1234",
                "expected_output": "false",
                "is_sample": false
            },
            {
                "input": "ab4\neidb4aooo",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "ab5\nxyz1234",
                "expected_output": "false",
                "is_sample": false
            },
            {
                "input": "ab6\neidb6aooo",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "ab7\nxyz1234",
                "expected_output": "false",
                "is_sample": false
            },
            {
                "input": "ab8\neidb8aooo",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "ab9\nxyz1234",
                "expected_output": "false",
                "is_sample": false
            },
            {
                "input": "ab0\neidb0aooo",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "ab1\nxyz1234",
                "expected_output": "false",
                "is_sample": false
            },
            {
                "input": "ab2\neidb2aooo",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "ab3\nxyz1234",
                "expected_output": "false",
                "is_sample": false
            },
            {
                "input": "ab4\neidb4aooo",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "ab5\nxyz1234",
                "expected_output": "false",
                "is_sample": false
            },
            {
                "input": "ab6\neidb6aooo",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "ab7\nxyz1234",
                "expected_output": "false",
                "is_sample": false
            },
            {
                "input": "ab8\neidb8aooo",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "ab9\nxyz1234",
                "expected_output": "false",
                "is_sample": false
            },
            {
                "input": "ab0\neidb0aooo",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "ab1\nxyz1234",
                "expected_output": "false",
                "is_sample": false
            },
            {
                "input": "ab2\neidb2aooo",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "ab3\nxyz1234",
                "expected_output": "false",
                "is_sample": false
            },
            {
                "input": "ab4\neidb4aooo",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "ab5\nxyz1234",
                "expected_output": "false",
                "is_sample": false
            },
            {
                "input": "ab6\neidb6aooo",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "ab7\nxyz1234",
                "expected_output": "false",
                "is_sample": false
            },
            {
                "input": "ab8\neidb8aooo",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "ab9\nxyz1234",
                "expected_output": "false",
                "is_sample": false
            },
            {
                "input": "ab0\neidb0aooo",
                "expected_output": "true",
                "is_sample": false
            }
        ]
    },
    {
        "question_number": 73,
        "title": "Longest Repeating Character Replacement",
        "level": "Medium",
        "tags": [
            "Hash Table",
            "String",
            "Sliding Window"
        ],
        "description": "You are given a string s and an integer k. You can choose any character of the string and change it to any other uppercase English character. You can perform this operation at most k times.\n\nReturn the length of the longest substring containing the same letter you can get after performing the above operations.\n\nInput format (2 lines):\nLine 1: s\nLine 2: k",
        "constraints": "1 <= s.length <= 10^5\ns consists of only uppercase English letters.\n0 <= k <= s.length",
        "starter": "class Solution {\n    public int characterReplacement(String s, int k) {\n        // Write your code here\n        return 0;\n    }\n}",
        "driver": {
            "key": "stringAndIntToInt",
            "method": "characterReplacement"
        },
        "testcases": [
            {
                "input": "ABAB\n2",
                "expected_output": "4",
                "is_sample": true
            },
            {
                "input": "AABABBA\n1",
                "expected_output": "4",
                "is_sample": true
            },
            {
                "input": "AAABBBBAAA\n2",
                "expected_output": "6",
                "is_sample": false
            },
            {
                "input": "AAABBBCAAA\n3",
                "expected_output": "6",
                "is_sample": false
            },
            {
                "input": "AAABBBDAAA\n1",
                "expected_output": "4",
                "is_sample": false
            },
            {
                "input": "AAABBBEAAA\n2",
                "expected_output": "5",
                "is_sample": false
            },
            {
                "input": "AAABBBAAAA\n3",
                "expected_output": "10",
                "is_sample": false
            },
            {
                "input": "AAABBBBAAA\n1",
                "expected_output": "5",
                "is_sample": false
            },
            {
                "input": "AAABBBCAAA\n2",
                "expected_output": "5",
                "is_sample": false
            },
            {
                "input": "AAABBBDAAA\n3",
                "expected_output": "6",
                "is_sample": false
            },
            {
                "input": "AAABBBEAAA\n1",
                "expected_output": "4",
                "is_sample": false
            },
            {
                "input": "AAABBBAAAA\n2",
                "expected_output": "6",
                "is_sample": false
            },
            {
                "input": "AAABBBBAAA\n3",
                "expected_output": "7",
                "is_sample": false
            },
            {
                "input": "AAABBBCAAA\n1",
                "expected_output": "4",
                "is_sample": false
            },
            {
                "input": "AAABBBDAAA\n2",
                "expected_output": "5",
                "is_sample": false
            },
            {
                "input": "AAABBBEAAA\n3",
                "expected_output": "6",
                "is_sample": false
            },
            {
                "input": "AAABBBAAAA\n1",
                "expected_output": "5",
                "is_sample": false
            },
            {
                "input": "AAABBBBAAA\n2",
                "expected_output": "6",
                "is_sample": false
            },
            {
                "input": "AAABBBCAAA\n3",
                "expected_output": "6",
                "is_sample": false
            },
            {
                "input": "AAABBBDAAA\n1",
                "expected_output": "4",
                "is_sample": false
            },
            {
                "input": "AAABBBEAAA\n2",
                "expected_output": "5",
                "is_sample": false
            },
            {
                "input": "AAABBBAAAA\n3",
                "expected_output": "10",
                "is_sample": false
            },
            {
                "input": "AAABBBBAAA\n1",
                "expected_output": "5",
                "is_sample": false
            },
            {
                "input": "AAABBBCAAA\n2",
                "expected_output": "5",
                "is_sample": false
            },
            {
                "input": "AAABBBDAAA\n3",
                "expected_output": "6",
                "is_sample": false
            },
            {
                "input": "AAABBBEAAA\n1",
                "expected_output": "4",
                "is_sample": false
            },
            {
                "input": "AAABBBAAAA\n2",
                "expected_output": "6",
                "is_sample": false
            },
            {
                "input": "AAABBBBAAA\n3",
                "expected_output": "7",
                "is_sample": false
            },
            {
                "input": "AAABBBCAAA\n1",
                "expected_output": "4",
                "is_sample": false
            },
            {
                "input": "AAABBBDAAA\n2",
                "expected_output": "5",
                "is_sample": false
            },
            {
                "input": "AAABBBEAAA\n3",
                "expected_output": "6",
                "is_sample": false
            },
            {
                "input": "AAABBBAAAA\n1",
                "expected_output": "5",
                "is_sample": false
            },
            {
                "input": "AAABBBBAAA\n2",
                "expected_output": "6",
                "is_sample": false
            },
            {
                "input": "AAABBBCAAA\n3",
                "expected_output": "6",
                "is_sample": false
            },
            {
                "input": "AAABBBDAAA\n1",
                "expected_output": "4",
                "is_sample": false
            },
            {
                "input": "AAABBBEAAA\n2",
                "expected_output": "5",
                "is_sample": false
            },
            {
                "input": "AAABBBAAAA\n3",
                "expected_output": "10",
                "is_sample": false
            },
            {
                "input": "AAABBBBAAA\n1",
                "expected_output": "5",
                "is_sample": false
            },
            {
                "input": "AAABBBCAAA\n2",
                "expected_output": "5",
                "is_sample": false
            },
            {
                "input": "AAABBBDAAA\n3",
                "expected_output": "6",
                "is_sample": false
            },
            {
                "input": "AAABBBEAAA\n1",
                "expected_output": "4",
                "is_sample": false
            },
            {
                "input": "AAABBBAAAA\n2",
                "expected_output": "6",
                "is_sample": false
            },
            {
                "input": "AAABBBBAAA\n3",
                "expected_output": "7",
                "is_sample": false
            },
            {
                "input": "AAABBBCAAA\n1",
                "expected_output": "4",
                "is_sample": false
            },
            {
                "input": "AAABBBDAAA\n2",
                "expected_output": "5",
                "is_sample": false
            },
            {
                "input": "AAABBBEAAA\n3",
                "expected_output": "6",
                "is_sample": false
            },
            {
                "input": "AAABBBAAAA\n1",
                "expected_output": "5",
                "is_sample": false
            },
            {
                "input": "AAABBBBAAA\n2",
                "expected_output": "6",
                "is_sample": false
            },
            {
                "input": "AAABBBCAAA\n3",
                "expected_output": "6",
                "is_sample": false
            },
            {
                "input": "AAABBBDAAA\n1",
                "expected_output": "4",
                "is_sample": false
            },
            {
                "input": "AAABBBEAAA\n2",
                "expected_output": "5",
                "is_sample": false
            },
            {
                "input": "AAABBBAAAA\n3",
                "expected_output": "10",
                "is_sample": false
            }
        ]
    },
    {
        "question_number": 74,
        "title": "Find All Anagrams in a String",
        "level": "Medium",
        "tags": [
            "Hash Table",
            "String",
            "Sliding Window"
        ],
        "description": "Given two strings s and p, return an array of all the start indices of p's anagrams in s. You may return the answer in any order.\n\nInput format (2 lines):\nLine 1: s\nLine 2: p",
        "constraints": "1 <= s.length, p.length <= 3 * 10^4\ns and p consist of lowercase English letters.",
        "starter": "class Solution {\n    public List<Integer> findAnagrams(String s, String p) {\n        // Write your code here\n        return new ArrayList<>();\n    }\n}",
        "driver": {
            "key": "twoStringsToIntArray",
            "method": "findAnagrams"
        },
        "testcases": [
            {
                "input": "cbaebabacd\nabc",
                "expected_output": "[0,6]",
                "is_sample": true
            },
            {
                "input": "abab\nab",
                "expected_output": "[0,1,2]",
                "is_sample": true
            },
            {
                "input": "abc1bca1xyz\nabc1",
                "expected_output": "[0,3,4]",
                "is_sample": false
            },
            {
                "input": "abc2bca2xyz\nabc2",
                "expected_output": "[0,3,4]",
                "is_sample": false
            },
            {
                "input": "abc3bca3xyz\nabc3",
                "expected_output": "[0,3,4]",
                "is_sample": false
            },
            {
                "input": "abc4bca4xyz\nabc4",
                "expected_output": "[0,3,4]",
                "is_sample": false
            },
            {
                "input": "abc0bca0xyz\nabc0",
                "expected_output": "[0,3,4]",
                "is_sample": false
            },
            {
                "input": "abc1bca1xyz\nabc1",
                "expected_output": "[0,3,4]",
                "is_sample": false
            },
            {
                "input": "abc2bca2xyz\nabc2",
                "expected_output": "[0,3,4]",
                "is_sample": false
            },
            {
                "input": "abc3bca3xyz\nabc3",
                "expected_output": "[0,3,4]",
                "is_sample": false
            },
            {
                "input": "abc4bca4xyz\nabc4",
                "expected_output": "[0,3,4]",
                "is_sample": false
            },
            {
                "input": "abc0bca0xyz\nabc0",
                "expected_output": "[0,3,4]",
                "is_sample": false
            },
            {
                "input": "abc1bca1xyz\nabc1",
                "expected_output": "[0,3,4]",
                "is_sample": false
            },
            {
                "input": "abc2bca2xyz\nabc2",
                "expected_output": "[0,3,4]",
                "is_sample": false
            },
            {
                "input": "abc3bca3xyz\nabc3",
                "expected_output": "[0,3,4]",
                "is_sample": false
            },
            {
                "input": "abc4bca4xyz\nabc4",
                "expected_output": "[0,3,4]",
                "is_sample": false
            },
            {
                "input": "abc0bca0xyz\nabc0",
                "expected_output": "[0,3,4]",
                "is_sample": false
            },
            {
                "input": "abc1bca1xyz\nabc1",
                "expected_output": "[0,3,4]",
                "is_sample": false
            },
            {
                "input": "abc2bca2xyz\nabc2",
                "expected_output": "[0,3,4]",
                "is_sample": false
            },
            {
                "input": "abc3bca3xyz\nabc3",
                "expected_output": "[0,3,4]",
                "is_sample": false
            },
            {
                "input": "abc4bca4xyz\nabc4",
                "expected_output": "[0,3,4]",
                "is_sample": false
            },
            {
                "input": "abc0bca0xyz\nabc0",
                "expected_output": "[0,3,4]",
                "is_sample": false
            },
            {
                "input": "abc1bca1xyz\nabc1",
                "expected_output": "[0,3,4]",
                "is_sample": false
            },
            {
                "input": "abc2bca2xyz\nabc2",
                "expected_output": "[0,3,4]",
                "is_sample": false
            },
            {
                "input": "abc3bca3xyz\nabc3",
                "expected_output": "[0,3,4]",
                "is_sample": false
            },
            {
                "input": "abc4bca4xyz\nabc4",
                "expected_output": "[0,3,4]",
                "is_sample": false
            },
            {
                "input": "abc0bca0xyz\nabc0",
                "expected_output": "[0,3,4]",
                "is_sample": false
            },
            {
                "input": "abc1bca1xyz\nabc1",
                "expected_output": "[0,3,4]",
                "is_sample": false
            },
            {
                "input": "abc2bca2xyz\nabc2",
                "expected_output": "[0,3,4]",
                "is_sample": false
            },
            {
                "input": "abc3bca3xyz\nabc3",
                "expected_output": "[0,3,4]",
                "is_sample": false
            },
            {
                "input": "abc4bca4xyz\nabc4",
                "expected_output": "[0,3,4]",
                "is_sample": false
            },
            {
                "input": "abc0bca0xyz\nabc0",
                "expected_output": "[0,3,4]",
                "is_sample": false
            },
            {
                "input": "abc1bca1xyz\nabc1",
                "expected_output": "[0,3,4]",
                "is_sample": false
            },
            {
                "input": "abc2bca2xyz\nabc2",
                "expected_output": "[0,3,4]",
                "is_sample": false
            },
            {
                "input": "abc3bca3xyz\nabc3",
                "expected_output": "[0,3,4]",
                "is_sample": false
            },
            {
                "input": "abc4bca4xyz\nabc4",
                "expected_output": "[0,3,4]",
                "is_sample": false
            },
            {
                "input": "abc0bca0xyz\nabc0",
                "expected_output": "[0,3,4]",
                "is_sample": false
            },
            {
                "input": "abc1bca1xyz\nabc1",
                "expected_output": "[0,3,4]",
                "is_sample": false
            },
            {
                "input": "abc2bca2xyz\nabc2",
                "expected_output": "[0,3,4]",
                "is_sample": false
            },
            {
                "input": "abc3bca3xyz\nabc3",
                "expected_output": "[0,3,4]",
                "is_sample": false
            },
            {
                "input": "abc4bca4xyz\nabc4",
                "expected_output": "[0,3,4]",
                "is_sample": false
            },
            {
                "input": "abc0bca0xyz\nabc0",
                "expected_output": "[0,3,4]",
                "is_sample": false
            },
            {
                "input": "abc1bca1xyz\nabc1",
                "expected_output": "[0,3,4]",
                "is_sample": false
            },
            {
                "input": "abc2bca2xyz\nabc2",
                "expected_output": "[0,3,4]",
                "is_sample": false
            },
            {
                "input": "abc3bca3xyz\nabc3",
                "expected_output": "[0,3,4]",
                "is_sample": false
            },
            {
                "input": "abc4bca4xyz\nabc4",
                "expected_output": "[0,3,4]",
                "is_sample": false
            },
            {
                "input": "abc0bca0xyz\nabc0",
                "expected_output": "[0,3,4]",
                "is_sample": false
            },
            {
                "input": "abc1bca1xyz\nabc1",
                "expected_output": "[0,3,4]",
                "is_sample": false
            },
            {
                "input": "abc2bca2xyz\nabc2",
                "expected_output": "[0,3,4]",
                "is_sample": false
            },
            {
                "input": "abc3bca3xyz\nabc3",
                "expected_output": "[0,3,4]",
                "is_sample": false
            },
            {
                "input": "abc4bca4xyz\nabc4",
                "expected_output": "[0,3,4]",
                "is_sample": false
            },
            {
                "input": "abc0bca0xyz\nabc0",
                "expected_output": "[0,3,4]",
                "is_sample": false
            }
        ]
    },
    {
        "question_number": 75,
        "title": "Minimum Size Subarray Sum",
        "level": "Medium",
        "tags": [
            "Array",
            "Binary Search",
            "Sliding Window",
            "Prefix Sum"
        ],
        "description": "Given an array of positive integers nums and a positive integer target, return the minimal length of a subarray whose sum is greater than or equal to target. If there is no such subarray, return 0 instead.\n\nInput format (2 lines):\nLine 1: target\nLine 2: nums as JSON array",
        "constraints": "1 <= target <= 10^9\n1 <= nums.length <= 10^5\n1 <= nums[i] <= 10^4",
        "starter": "class Solution {\n    public int minSubArrayLen(int target, int[] nums) {\n        // Write your code here\n        return 0;\n    }\n}",
        "driver": {
            "key": "intAndIntArrayToInt",
            "method": "minSubArrayLen"
        },
        "testcases": [
            {
                "input": "7\n[2,3,1,2,4,3]",
                "expected_output": "2",
                "is_sample": true
            },
            {
                "input": "4\n[1,4,4]",
                "expected_output": "1",
                "is_sample": true
            },
            {
                "input": "11\n[1,1,1,1,1,1,1,1]",
                "expected_output": "0",
                "is_sample": false
            },
            {
                "input": "5\n[1,2,3,4,5]",
                "expected_output": "1",
                "is_sample": false
            },
            {
                "input": "7\n[2,3,4,5,6]",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "9\n[3,4,5,6,7]",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "11\n[4,5,6,7,8]",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "13\n[5,6,7,8,9]",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "15\n[6,7,8,9,10]",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "17\n[7,8,9,10,11]",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "19\n[8,9,10,11,12]",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "21\n[9,10,11,12,13]",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "23\n[10,11,12,13,14]",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "25\n[11,12,13,14,15]",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "27\n[12,13,14,15,16]",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "29\n[13,14,15,16,17]",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "31\n[14,15,16,17,18]",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "33\n[15,16,17,18,19]",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "35\n[16,17,18,19,20]",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "37\n[17,18,19,20,21]",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "39\n[18,19,20,21,22]",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "41\n[19,20,21,22,23]",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "43\n[20,21,22,23,24]",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "45\n[21,22,23,24,25]",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "47\n[22,23,24,25,26]",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "49\n[23,24,25,26,27]",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "51\n[24,25,26,27,28]",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "53\n[25,26,27,28,29]",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "55\n[26,27,28,29,30]",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "57\n[27,28,29,30,31]",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "59\n[28,29,30,31,32]",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "61\n[29,30,31,32,33]",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "63\n[30,31,32,33,34]",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "65\n[31,32,33,34,35]",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "67\n[32,33,34,35,36]",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "69\n[33,34,35,36,37]",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "71\n[34,35,36,37,38]",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "73\n[35,36,37,38,39]",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "75\n[36,37,38,39,40]",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "77\n[37,38,39,40,41]",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "79\n[38,39,40,41,42]",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "81\n[39,40,41,42,43]",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "83\n[40,41,42,43,44]",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "85\n[41,42,43,44,45]",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "87\n[42,43,44,45,46]",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "89\n[43,44,45,46,47]",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "91\n[44,45,46,47,48]",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "93\n[45,46,47,48,49]",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "95\n[46,47,48,49,50]",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "97\n[47,48,49,50,51]",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "99\n[48,49,50,51,52]",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "101\n[49,50,51,52,53]",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "103\n[50,51,52,53,54]",
                "expected_output": "2",
                "is_sample": false
            }
        ]
    },
    {
        "question_number": 76,
        "title": "Number of Islands",
        "level": "Medium",
        "tags": [
            "Array",
            "Depth-First Search",
            "Breadth-First Search",
            "Union Find",
            "Matrix"
        ],
        "description": "Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands.\n\nAn island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.",
        "constraints": "m == grid.length\nn == grid[i].length\n1 <= m, n <= 300\ngrid[i][j] is '0' or '1'.",
        "starter": "class Solution {\n    public int numIslands(char[][] grid) {\n        // Write your code here\n        return 0;\n    }\n}",
        "driver": {
            "key": "charMatrixToInt",
            "method": "numIslands"
        },
        "testcases": [
            {
                "input": "11110\n11010\n11000\n00000",
                "expected_output": "1",
                "is_sample": true
            },
            {
                "input": "11000\n11000\n00100\n00011",
                "expected_output": "3",
                "is_sample": true
            },
            {
                "input": "010\n001",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "110\n001",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "010\n011",
                "expected_output": "1",
                "is_sample": false
            },
            {
                "input": "110\n001",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "010\n001",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "110\n011",
                "expected_output": "1",
                "is_sample": false
            },
            {
                "input": "010\n001",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "110\n001",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "010\n011",
                "expected_output": "1",
                "is_sample": false
            },
            {
                "input": "110\n001",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "010\n001",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "110\n011",
                "expected_output": "1",
                "is_sample": false
            },
            {
                "input": "010\n001",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "110\n001",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "010\n011",
                "expected_output": "1",
                "is_sample": false
            },
            {
                "input": "110\n001",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "010\n001",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "110\n011",
                "expected_output": "1",
                "is_sample": false
            },
            {
                "input": "010\n001",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "110\n001",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "010\n011",
                "expected_output": "1",
                "is_sample": false
            },
            {
                "input": "110\n001",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "010\n001",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "110\n011",
                "expected_output": "1",
                "is_sample": false
            },
            {
                "input": "010\n001",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "110\n001",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "010\n011",
                "expected_output": "1",
                "is_sample": false
            },
            {
                "input": "110\n001",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "010\n001",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "110\n011",
                "expected_output": "1",
                "is_sample": false
            },
            {
                "input": "010\n001",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "110\n001",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "010\n011",
                "expected_output": "1",
                "is_sample": false
            },
            {
                "input": "110\n001",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "010\n001",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "110\n011",
                "expected_output": "1",
                "is_sample": false
            },
            {
                "input": "010\n001",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "110\n001",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "010\n011",
                "expected_output": "1",
                "is_sample": false
            },
            {
                "input": "110\n001",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "010\n001",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "110\n011",
                "expected_output": "1",
                "is_sample": false
            },
            {
                "input": "010\n001",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "110\n001",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "010\n011",
                "expected_output": "1",
                "is_sample": false
            },
            {
                "input": "110\n001",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "010\n001",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "110\n011",
                "expected_output": "1",
                "is_sample": false
            },
            {
                "input": "010\n001",
                "expected_output": "2",
                "is_sample": false
            },
            {
                "input": "110\n001",
                "expected_output": "2",
                "is_sample": false
            }
        ]
    },
    {
        "question_number": 77,
        "title": "Course Schedule",
        "level": "Medium",
        "tags": [
            "Depth-First Search",
            "Breadth-First Search",
            "Graph",
            "Topological Sort"
        ],
        "description": "There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1. You are given an array prerequisites where prerequisites[i] = [ai, bi] indicates that you must take course bi first if you want to take course ai.\n\nReturn true if you can finish all courses. Otherwise, return false.\n\nInput format (2 lines):\nLine 1: numCourses\nLine 2: prerequisites as JSON 2D array",
        "constraints": "1 <= numCourses <= 2000\n0 <= prerequisites.length <= 5000\nprerequisites[i].length == 2\n0 <= ai, bi < numCourses\nAll the pairs prerequisites[i] are unique.",
        "starter": "class Solution {\n    public boolean canFinish(int numCourses, int[][] prerequisites) {\n        // Write your code here\n        return false;\n    }\n}",
        "driver": "courseSchedule",
        "testcases": [
            {
                "input": "2\n[[1,0]]",
                "expected_output": "true",
                "is_sample": true
            },
            {
                "input": "2\n[[1,0],[0,1]]",
                "expected_output": "false",
                "is_sample": true
            },
            {
                "input": "2\n[[1,0]]",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "2\n[[1,0],[0,1]]",
                "expected_output": "false",
                "is_sample": false
            },
            {
                "input": "2\n[[1,0]]",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "2\n[[1,0],[0,1]]",
                "expected_output": "false",
                "is_sample": false
            },
            {
                "input": "2\n[[1,0]]",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "2\n[[1,0],[0,1]]",
                "expected_output": "false",
                "is_sample": false
            },
            {
                "input": "2\n[[1,0]]",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "2\n[[1,0],[0,1]]",
                "expected_output": "false",
                "is_sample": false
            },
            {
                "input": "2\n[[1,0]]",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "2\n[[1,0],[0,1]]",
                "expected_output": "false",
                "is_sample": false
            },
            {
                "input": "2\n[[1,0]]",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "2\n[[1,0],[0,1]]",
                "expected_output": "false",
                "is_sample": false
            },
            {
                "input": "2\n[[1,0]]",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "2\n[[1,0],[0,1]]",
                "expected_output": "false",
                "is_sample": false
            },
            {
                "input": "2\n[[1,0]]",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "2\n[[1,0],[0,1]]",
                "expected_output": "false",
                "is_sample": false
            },
            {
                "input": "2\n[[1,0]]",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "2\n[[1,0],[0,1]]",
                "expected_output": "false",
                "is_sample": false
            },
            {
                "input": "2\n[[1,0]]",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "2\n[[1,0],[0,1]]",
                "expected_output": "false",
                "is_sample": false
            },
            {
                "input": "2\n[[1,0]]",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "2\n[[1,0],[0,1]]",
                "expected_output": "false",
                "is_sample": false
            },
            {
                "input": "2\n[[1,0]]",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "2\n[[1,0],[0,1]]",
                "expected_output": "false",
                "is_sample": false
            },
            {
                "input": "2\n[[1,0]]",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "2\n[[1,0],[0,1]]",
                "expected_output": "false",
                "is_sample": false
            },
            {
                "input": "2\n[[1,0]]",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "2\n[[1,0],[0,1]]",
                "expected_output": "false",
                "is_sample": false
            },
            {
                "input": "2\n[[1,0]]",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "2\n[[1,0],[0,1]]",
                "expected_output": "false",
                "is_sample": false
            },
            {
                "input": "2\n[[1,0]]",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "2\n[[1,0],[0,1]]",
                "expected_output": "false",
                "is_sample": false
            },
            {
                "input": "2\n[[1,0]]",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "2\n[[1,0],[0,1]]",
                "expected_output": "false",
                "is_sample": false
            },
            {
                "input": "2\n[[1,0]]",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "2\n[[1,0],[0,1]]",
                "expected_output": "false",
                "is_sample": false
            },
            {
                "input": "2\n[[1,0]]",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "2\n[[1,0],[0,1]]",
                "expected_output": "false",
                "is_sample": false
            },
            {
                "input": "2\n[[1,0]]",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "2\n[[1,0],[0,1]]",
                "expected_output": "false",
                "is_sample": false
            },
            {
                "input": "2\n[[1,0]]",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "2\n[[1,0],[0,1]]",
                "expected_output": "false",
                "is_sample": false
            },
            {
                "input": "2\n[[1,0]]",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "2\n[[1,0],[0,1]]",
                "expected_output": "false",
                "is_sample": false
            },
            {
                "input": "2\n[[1,0]]",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "2\n[[1,0],[0,1]]",
                "expected_output": "false",
                "is_sample": false
            },
            {
                "input": "2\n[[1,0]]",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "2\n[[1,0],[0,1]]",
                "expected_output": "false",
                "is_sample": false
            },
            {
                "input": "2\n[[1,0]]",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "2\n[[1,0],[0,1]]",
                "expected_output": "false",
                "is_sample": false
            }
        ]
    },
    {
        "question_number": 78,
        "title": "Palindromic Substrings",
        "level": "Medium",
        "tags": [
            "Two Pointers",
            "String",
            "Dynamic Programming"
        ],
        "description": "Given a string s, return the number of palindromic substrings in it.\n\nA string is a palindrome when it reads the same backward as forward. A substring is a contiguous sequence of characters within the string.",
        "constraints": "1 <= s.length <= 1000\ns consists of lowercase English letters.",
        "starter": "class Solution {\n    public int countSubstrings(String s) {\n        // Write your code here\n        return 0;\n    }\n}",
        "driver": {
            "key": "stringToInt",
            "method": "countSubstrings"
        },
        "testcases": [
            {
                "input": "abc",
                "expected_output": "3",
                "is_sample": true
            },
            {
                "input": "aaa",
                "expected_output": "6",
                "is_sample": true
            },
            {
                "input": "abababa",
                "expected_output": "16",
                "is_sample": false
            },
            {
                "input": "abacaba",
                "expected_output": "12",
                "is_sample": false
            },
            {
                "input": "abadaba",
                "expected_output": "12",
                "is_sample": false
            },
            {
                "input": "abaeaba",
                "expected_output": "12",
                "is_sample": false
            },
            {
                "input": "abafaba",
                "expected_output": "12",
                "is_sample": false
            },
            {
                "input": "abagaba",
                "expected_output": "12",
                "is_sample": false
            },
            {
                "input": "abahaba",
                "expected_output": "12",
                "is_sample": false
            },
            {
                "input": "abaiaba",
                "expected_output": "12",
                "is_sample": false
            },
            {
                "input": "abajaba",
                "expected_output": "12",
                "is_sample": false
            },
            {
                "input": "abakaba",
                "expected_output": "12",
                "is_sample": false
            },
            {
                "input": "abalaba",
                "expected_output": "12",
                "is_sample": false
            },
            {
                "input": "abamaba",
                "expected_output": "12",
                "is_sample": false
            },
            {
                "input": "abanaba",
                "expected_output": "12",
                "is_sample": false
            },
            {
                "input": "abaoaba",
                "expected_output": "12",
                "is_sample": false
            },
            {
                "input": "abapaba",
                "expected_output": "12",
                "is_sample": false
            },
            {
                "input": "abaqaba",
                "expected_output": "12",
                "is_sample": false
            },
            {
                "input": "abaraba",
                "expected_output": "12",
                "is_sample": false
            },
            {
                "input": "abasaba",
                "expected_output": "12",
                "is_sample": false
            },
            {
                "input": "abataba",
                "expected_output": "12",
                "is_sample": false
            },
            {
                "input": "abauaba",
                "expected_output": "12",
                "is_sample": false
            },
            {
                "input": "abavaba",
                "expected_output": "12",
                "is_sample": false
            },
            {
                "input": "abawaba",
                "expected_output": "12",
                "is_sample": false
            },
            {
                "input": "abaxaba",
                "expected_output": "12",
                "is_sample": false
            },
            {
                "input": "abayaba",
                "expected_output": "12",
                "is_sample": false
            },
            {
                "input": "abazaba",
                "expected_output": "12",
                "is_sample": false
            },
            {
                "input": "abaaaba",
                "expected_output": "14",
                "is_sample": false
            },
            {
                "input": "abababa",
                "expected_output": "16",
                "is_sample": false
            },
            {
                "input": "abacaba",
                "expected_output": "12",
                "is_sample": false
            },
            {
                "input": "abadaba",
                "expected_output": "12",
                "is_sample": false
            },
            {
                "input": "abaeaba",
                "expected_output": "12",
                "is_sample": false
            },
            {
                "input": "abafaba",
                "expected_output": "12",
                "is_sample": false
            },
            {
                "input": "abagaba",
                "expected_output": "12",
                "is_sample": false
            },
            {
                "input": "abahaba",
                "expected_output": "12",
                "is_sample": false
            },
            {
                "input": "abaiaba",
                "expected_output": "12",
                "is_sample": false
            },
            {
                "input": "abajaba",
                "expected_output": "12",
                "is_sample": false
            },
            {
                "input": "abakaba",
                "expected_output": "12",
                "is_sample": false
            },
            {
                "input": "abalaba",
                "expected_output": "12",
                "is_sample": false
            },
            {
                "input": "abamaba",
                "expected_output": "12",
                "is_sample": false
            },
            {
                "input": "abanaba",
                "expected_output": "12",
                "is_sample": false
            },
            {
                "input": "abaoaba",
                "expected_output": "12",
                "is_sample": false
            },
            {
                "input": "abapaba",
                "expected_output": "12",
                "is_sample": false
            },
            {
                "input": "abaqaba",
                "expected_output": "12",
                "is_sample": false
            },
            {
                "input": "abaraba",
                "expected_output": "12",
                "is_sample": false
            },
            {
                "input": "abasaba",
                "expected_output": "12",
                "is_sample": false
            },
            {
                "input": "abataba",
                "expected_output": "12",
                "is_sample": false
            },
            {
                "input": "abauaba",
                "expected_output": "12",
                "is_sample": false
            },
            {
                "input": "abavaba",
                "expected_output": "12",
                "is_sample": false
            },
            {
                "input": "abawaba",
                "expected_output": "12",
                "is_sample": false
            },
            {
                "input": "abaxaba",
                "expected_output": "12",
                "is_sample": false
            },
            {
                "input": "abayaba",
                "expected_output": "12",
                "is_sample": false
            }
        ]
    },
    {
        "question_number": 79,
        "title": "Longest Palindromic Substring",
        "level": "Medium",
        "tags": [
            "Two Pointers",
            "String",
            "Dynamic Programming"
        ],
        "description": "Given a string s, return the longest palindromic substring in s.",
        "constraints": "1 <= s.length <= 1000\ns consist of only digits and English letters.",
        "starter": "class Solution {\n    public String longestPalindrome(String s) {\n        // Write your code here\n        return \"\";\n    }\n}",
        "driver": {
            "key": "stringToString",
            "method": "longestPalindrome"
        },
        "testcases": [
            {
                "input": "babad",
                "expected_output": "bab",
                "is_sample": true
            },
            {
                "input": "cbbd",
                "expected_output": "bb",
                "is_sample": true
            },
            {
                "input": "xyzbracecarbabc",
                "expected_output": "bracecarb",
                "is_sample": false
            },
            {
                "input": "xyzcracecarcabc",
                "expected_output": "cracecarc",
                "is_sample": false
            },
            {
                "input": "xyzdracecardabc",
                "expected_output": "dracecard",
                "is_sample": false
            },
            {
                "input": "xyzeracecareabc",
                "expected_output": "eracecare",
                "is_sample": false
            },
            {
                "input": "xyzfracecarfabc",
                "expected_output": "fracecarf",
                "is_sample": false
            },
            {
                "input": "xyzgracecargabc",
                "expected_output": "gracecarg",
                "is_sample": false
            },
            {
                "input": "xyzhracecarhabc",
                "expected_output": "hracecarh",
                "is_sample": false
            },
            {
                "input": "xyziracecariabc",
                "expected_output": "iracecari",
                "is_sample": false
            },
            {
                "input": "xyzjracecarjabc",
                "expected_output": "jracecarj",
                "is_sample": false
            },
            {
                "input": "xyzkracecarkabc",
                "expected_output": "kracecark",
                "is_sample": false
            },
            {
                "input": "xyzlracecarlabc",
                "expected_output": "lracecarl",
                "is_sample": false
            },
            {
                "input": "xyzmracecarmabc",
                "expected_output": "mracecarm",
                "is_sample": false
            },
            {
                "input": "xyznracecarnabc",
                "expected_output": "nracecarn",
                "is_sample": false
            },
            {
                "input": "xyzoracecaroabc",
                "expected_output": "oracecaro",
                "is_sample": false
            },
            {
                "input": "xyzpracecarpabc",
                "expected_output": "pracecarp",
                "is_sample": false
            },
            {
                "input": "xyzqracecarqabc",
                "expected_output": "qracecarq",
                "is_sample": false
            },
            {
                "input": "xyzrracecarrabc",
                "expected_output": "rracecarr",
                "is_sample": false
            },
            {
                "input": "xyzsracecarsabc",
                "expected_output": "sracecars",
                "is_sample": false
            },
            {
                "input": "xyztracecartabc",
                "expected_output": "tracecart",
                "is_sample": false
            },
            {
                "input": "xyzuracecaruabc",
                "expected_output": "uracecaru",
                "is_sample": false
            },
            {
                "input": "xyzvracecarvabc",
                "expected_output": "vracecarv",
                "is_sample": false
            },
            {
                "input": "xyzwracecarwabc",
                "expected_output": "wracecarw",
                "is_sample": false
            },
            {
                "input": "xyzxracecarxabc",
                "expected_output": "xracecarx",
                "is_sample": false
            },
            {
                "input": "xyzyracecaryabc",
                "expected_output": "yracecary",
                "is_sample": false
            },
            {
                "input": "xyzzracecarzabc",
                "expected_output": "zracecarz",
                "is_sample": false
            },
            {
                "input": "xyzaracecaraabc",
                "expected_output": "aracecara",
                "is_sample": false
            },
            {
                "input": "xyzbracecarbabc",
                "expected_output": "bracecarb",
                "is_sample": false
            },
            {
                "input": "xyzcracecarcabc",
                "expected_output": "cracecarc",
                "is_sample": false
            },
            {
                "input": "xyzdracecardabc",
                "expected_output": "dracecard",
                "is_sample": false
            },
            {
                "input": "xyzeracecareabc",
                "expected_output": "eracecare",
                "is_sample": false
            },
            {
                "input": "xyzfracecarfabc",
                "expected_output": "fracecarf",
                "is_sample": false
            },
            {
                "input": "xyzgracecargabc",
                "expected_output": "gracecarg",
                "is_sample": false
            },
            {
                "input": "xyzhracecarhabc",
                "expected_output": "hracecarh",
                "is_sample": false
            },
            {
                "input": "xyziracecariabc",
                "expected_output": "iracecari",
                "is_sample": false
            },
            {
                "input": "xyzjracecarjabc",
                "expected_output": "jracecarj",
                "is_sample": false
            },
            {
                "input": "xyzkracecarkabc",
                "expected_output": "kracecark",
                "is_sample": false
            },
            {
                "input": "xyzlracecarlabc",
                "expected_output": "lracecarl",
                "is_sample": false
            },
            {
                "input": "xyzmracecarmabc",
                "expected_output": "mracecarm",
                "is_sample": false
            },
            {
                "input": "xyznracecarnabc",
                "expected_output": "nracecarn",
                "is_sample": false
            },
            {
                "input": "xyzoracecaroabc",
                "expected_output": "oracecaro",
                "is_sample": false
            },
            {
                "input": "xyzpracecarpabc",
                "expected_output": "pracecarp",
                "is_sample": false
            },
            {
                "input": "xyzqracecarqabc",
                "expected_output": "qracecarq",
                "is_sample": false
            },
            {
                "input": "xyzrracecarrabc",
                "expected_output": "rracecarr",
                "is_sample": false
            },
            {
                "input": "xyzsracecarsabc",
                "expected_output": "sracecars",
                "is_sample": false
            },
            {
                "input": "xyztracecartabc",
                "expected_output": "tracecart",
                "is_sample": false
            },
            {
                "input": "xyzuracecaruabc",
                "expected_output": "uracecaru",
                "is_sample": false
            },
            {
                "input": "xyzvracecarvabc",
                "expected_output": "vracecarv",
                "is_sample": false
            },
            {
                "input": "xyzwracecarwabc",
                "expected_output": "wracecarw",
                "is_sample": false
            },
            {
                "input": "xyzxracecarxabc",
                "expected_output": "xracecarx",
                "is_sample": false
            },
            {
                "input": "xyzyracecaryabc",
                "expected_output": "yracecary",
                "is_sample": false
            }
        ]
    },
    {
        "question_number": 80,
        "title": "Partition Equal Subset Sum",
        "level": "Medium",
        "tags": [
            "Array",
            "Dynamic Programming"
        ],
        "description": "Given an integer array nums, return true if you can partition the array into two subsets such that the sum of the elements in both subsets is equal or false otherwise.",
        "constraints": "1 <= nums.length <= 200\n1 <= nums[i] <= 100",
        "starter": "class Solution {\n    public boolean canPartition(int[] nums) {\n        // Write your code here\n        return false;\n    }\n}",
        "driver": {
            "key": "intArrayToBoolean",
            "method": "canPartition"
        },
        "testcases": [
            {
                "input": "[1,5,11,5]",
                "expected_output": "true",
                "is_sample": true
            },
            {
                "input": "[1,2,3,5]",
                "expected_output": "false",
                "is_sample": true
            },
            {
                "input": "[1,2,3]",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "[2,4,3,3]",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "[3,4,5]",
                "expected_output": "false",
                "is_sample": false
            },
            {
                "input": "[4,6,5,5]",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "[5,6,7]",
                "expected_output": "false",
                "is_sample": false
            },
            {
                "input": "[6,8,7,7]",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "[7,8,9]",
                "expected_output": "false",
                "is_sample": false
            },
            {
                "input": "[8,10,9,9]",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "[9,10,11]",
                "expected_output": "false",
                "is_sample": false
            },
            {
                "input": "[10,12,11,11]",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "[11,12,13]",
                "expected_output": "false",
                "is_sample": false
            },
            {
                "input": "[12,14,13,13]",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "[13,14,15]",
                "expected_output": "false",
                "is_sample": false
            },
            {
                "input": "[14,16,15,15]",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "[15,16,17]",
                "expected_output": "false",
                "is_sample": false
            },
            {
                "input": "[16,18,17,17]",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "[17,18,19]",
                "expected_output": "false",
                "is_sample": false
            },
            {
                "input": "[18,20,19,19]",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "[19,20,21]",
                "expected_output": "false",
                "is_sample": false
            },
            {
                "input": "[20,22,21,21]",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "[21,22,23]",
                "expected_output": "false",
                "is_sample": false
            },
            {
                "input": "[22,24,23,23]",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "[23,24,25]",
                "expected_output": "false",
                "is_sample": false
            },
            {
                "input": "[24,26,25,25]",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "[25,26,27]",
                "expected_output": "false",
                "is_sample": false
            },
            {
                "input": "[26,28,27,27]",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "[27,28,29]",
                "expected_output": "false",
                "is_sample": false
            },
            {
                "input": "[28,30,29,29]",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "[29,30,31]",
                "expected_output": "false",
                "is_sample": false
            },
            {
                "input": "[30,32,31,31]",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "[31,32,33]",
                "expected_output": "false",
                "is_sample": false
            },
            {
                "input": "[32,34,33,33]",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "[33,34,35]",
                "expected_output": "false",
                "is_sample": false
            },
            {
                "input": "[34,36,35,35]",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "[35,36,37]",
                "expected_output": "false",
                "is_sample": false
            },
            {
                "input": "[36,38,37,37]",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "[37,38,39]",
                "expected_output": "false",
                "is_sample": false
            },
            {
                "input": "[38,40,39,39]",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "[39,40,41]",
                "expected_output": "false",
                "is_sample": false
            },
            {
                "input": "[40,42,41,41]",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "[41,42,43]",
                "expected_output": "false",
                "is_sample": false
            },
            {
                "input": "[42,44,43,43]",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "[43,44,45]",
                "expected_output": "false",
                "is_sample": false
            },
            {
                "input": "[44,46,45,45]",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "[45,46,47]",
                "expected_output": "false",
                "is_sample": false
            },
            {
                "input": "[46,48,47,47]",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "[47,48,49]",
                "expected_output": "false",
                "is_sample": false
            },
            {
                "input": "[48,50,49,49]",
                "expected_output": "true",
                "is_sample": false
            },
            {
                "input": "[49,50,51]",
                "expected_output": "false",
                "is_sample": false
            },
            {
                "input": "[50,52,51,51]",
                "expected_output": "true",
                "is_sample": false
            }
        ]
    }
];
