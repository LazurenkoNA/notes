from typing import List

# TODO:  https://leetcode.com/problems/maximum-area-of-a-piece-of-cake-after-horizontal-and-vertical-cuts/


class Solution:
    def findMaxDistance(self, cuts: List[int], appendEnd: int) -> int:
        cuts.append(0)
        cuts.append(appendEnd)
        cuts.sort()
        return max(cuts[i] - cuts[i - 1] for i in range(1, len(cuts)))

    def maxArea(
        self, h: int, w: int, horizontalCuts: List[int], verticalCuts: List[int]
    ) -> int:
        MODULE = 10**9 + 7
        maxWidth = self.findMaxDistance(horizontalCuts, h)
        maxHeight = self.findMaxDistance(verticalCuts, w)
        return (maxWidth * maxHeight) % MODULE
