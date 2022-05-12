from typing import List

# TODO: https://leetcode.com/problems/combination-sum-iii/


class Solution:
    def combinationSum3(self, k: int, n: int) -> List[List[int]]:
        result = []
        self.solve(1, k, n, [], result)
        return result

    def solve(
        self, start: int, k: int, n: int, temp: List[int], result: List[List[int]]
    ):
        if n == 0 and len(temp) == k:
            result.append(temp.copy())
        for i in range(start, 10):
            temp.append(i)
            self.solve(i + 1, k, n - i, temp, result)
            del temp[len(temp) - 1]


solution = Solution()

# [[1, 2, 4]]
print(solution.combinationSum3(3, 7))
# [[1, 2, 6], [1, 3, 5], [2, 3, 4]]
print(solution.combinationSum3(3, 9))
# []
print(solution.combinationSum3(4, 1))
