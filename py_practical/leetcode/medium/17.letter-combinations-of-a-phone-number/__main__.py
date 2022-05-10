# TODO: https://leetcode.com/problems/letter-combinations-of-a-phone-number/


class Solution:
    mapping = {
        "2": "abc",
        "3": "def",
        "4": "ghi",
        "5": "jkl",
        "6": "mno",
        "7": "pqrs",
        "8": "tuv",
        "9": "wxyz",
    }

    def letterCombinations(self, digits):
        if len(digits) == 0:
            return []

        if len(digits) == 1:
            return list(self.mapping[digits[0]])

        prev = self.letterCombinations(digits[:-1])
        additional = self.mapping[digits[-1]]

        return [s + c for s in prev for c in additional]


solution = Solution()
print(solution.letterCombinations("23"))
