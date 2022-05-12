# TODO: https://leetcode.com/problems/count-sorted-vowel-strings/


class Solution:
    def countVowelStrings(self, n: int, k: int = 5):
        array = [1] * k

        for _ in range(n - 1):
            for i in range(1, k):
                array[i] += array[i - 1]

        return sum(array)


solution = Solution()
print(solution.countVowelStrings(33))
print(solution.countVowelStrings2(33))
