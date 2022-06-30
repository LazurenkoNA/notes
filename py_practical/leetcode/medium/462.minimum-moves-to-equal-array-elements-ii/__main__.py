from typing import List

# TODO: https://leetcode.com/problems/minimum-moves-to-equal-array-elements-ii/


class Solution:
    def minMoves2(self, nums: List[int]) -> int:
        sorted_nums = sorted(nums)
        minMoveCount = 0
        med = sorted_nums[int(len(sorted_nums) / 2)]

        for n in sorted_nums:
            minMoveCount += abs(n - med)

        return minMoveCount
