from calendar import c
from cmath import log
from functools import lru_cache
from typing import List

# TODO: https://leetcode.com/problems/number-of-matching-subsequences/

# Given a string s and an array of strings words, return the number of words[i] that is a subsequence of s.
# A subsequence of a string is a new string generated from the original string with some characters (can be none) deleted without changing the relative order of the remaining characters.
# For example, "ace" is a subsequence of "abcde".

# Example 1:
# Input: s = "abcde", words = ["a","bb","acd","ace"]
# Output: 3
# Explanation: There are three strings in words that are a subsequence of s: "a", "acd", "ace".

# Example 2:
# Input: s = "dsahjpjauf", words = ["ahjpjau","ja","ahbwzgqnuk","tnmlanowax"]
# Output: 2

# Constraints:
# 1 <= s.length <= 5 * 104
# 1 <= words.length <= 5000
# 1 <= words[i].length <= 50
# s and words[i] consist of only lowercase English letters.


# class Solution:
#     def numMatchingSubseq(self, s: str, words: List[str]) -> int:
#         count = 0
#         for word in words:
#             if self.isSubsequence(word, s):
#                 count += 1
#         return count

#     @lru_cache
#     def isSubsequence(self, s: str, t: str) -> bool:
#         if not s:
#             return True
#         index = 0
#         for j in range(len(t)):
#             if s[index] == t[j]:
#                 index += 1
#             if index == len(s):
#                 return True
#         return False


class Solution:
    def numMatchingSubseq(self, s: str, words: List[str]) -> int:
        def sub(word):
            position = -1
            for char in word:
                position = s.find(char, position + 1)
                if position == -1:
                    return False
            return True

        return sum(map(sub, words))
