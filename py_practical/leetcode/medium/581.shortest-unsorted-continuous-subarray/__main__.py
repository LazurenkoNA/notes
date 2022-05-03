from Solution import Solution

solution = Solution()

# TODO: https://leetcode.com/problems/shortest-unsorted-continuous-subarray/

# 5
print(solution.findUnsortedSubarray([2, 6, 4, 8, 10, 9, 15]))
# 0
print(solution.findUnsortedSubarray([1, 2, 3, 4]))
# 0
print(solution.findUnsortedSubarray([1]))
# 2
print(solution.findUnsortedSubarray([2, 1]))
