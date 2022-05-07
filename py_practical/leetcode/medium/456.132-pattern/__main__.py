import math
from typing import List

# TODO: https://leetcode.com/problems/132-pattern


class Solution:
    def find132pattern(self, nums: List[int]) -> bool:
        if len(nums) < 3:
            return False

        second_num = -math.inf
        stack = []

        for i in range(len(nums) - 1, -1, -1):
            if nums[i] < second_num:
                return True

            while stack and stack[-1] < nums[i]:
                second_num = stack.pop()

            stack.append(nums[i])

        return False


solution = Solution()

print(solution.find132pattern([1, 2, 3, 4]))
