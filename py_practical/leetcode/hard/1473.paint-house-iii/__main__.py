from functools import cache
import math
from typing import List

# TODO: https://leetcode.com/problems/paint-house-iii/


class Solution:
    def minCost(
        self, houses: List[int], cost: List[List[int]], m: int, n: int, target: int
    ) -> int:
        @cache
        def dp(index, previous_color, neighborhoods):
            if neighborhoods > target or (index == m and neighborhoods != target):
                return math.inf
            if index == m:
                return 0
            if houses[index] != 0:
                return dp(
                    index + 1,
                    houses[index],
                    neighborhoods + int(previous_color != houses[index]),
                )

            best = math.inf
            for j, c in enumerate(cost[index], 1):
                best = min(
                    best, dp(index + 1, j, neighborhoods + int(previous_color != j)) + c
                )
            return best

        result = dp(0, 0, 0)
        return result if result != math.inf else -1


if __name__ == "__main__":
    solution = Solution()
    solution.minCost(
        [0, 0, 0, 0, 0], [[1, 10], [10, 1], [10, 1], [1, 10], [5, 1]], 5, 2, 3
    )
