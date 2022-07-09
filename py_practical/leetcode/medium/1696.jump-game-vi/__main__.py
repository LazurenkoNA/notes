from collections import deque
from typing import List

# TODO: https://leetcode.com/problems/jump-game-vi/
# Time Complexity O(n) - Single pass through nums. At most n elments are added to and popped from dp deque.
# Space Complexity O(n) - dp deque grows to at most n elements.


class Solution:
    def maxResult(self, nums: List[int], k: int) -> int:
        dp = deque([(nums[0], 0)])
        for i in range(1, len(nums)):
            while dp and dp[0][1] + k < i:
                dp.popleft()
            cost = nums[i] + dp[0][0]
            while dp and cost >= dp[-1][0]:
                dp.pop()
            dp.append((cost, i))
        return dp[-1][0]
