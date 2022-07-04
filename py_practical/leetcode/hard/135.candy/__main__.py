from typing import List

# TODO: https://leetcode.com/problems/candy/

# Time Complexity: O(n) - One pass through the array.
# Space Complexity: O(1) - Only constant number of extra variables used.
# class Solution:
#     def direction(self, x: int, y: int) -> int:
#         if x == y:
#             return 0
#         return -1 if x > y else 1

#     def candy(self, ratings: List[int]) -> int:
#         n = len(ratings)
#         i = 0
#         prev = 1
#         answer = 1

#         while i + 1 < n:
#             run = 1
#             dir = self.direction(ratings[i], ratings[i + 1])

#             while i + 1 < n and dir == self.direction(ratings[i], ratings[i + 1]):
#                 run += 1
#                 i += 1

#             if dir == 0:
#                 answer += run
#                 answer -= 1
#                 prev = 1
#             else:
#                 answer += run * (run + 1) / 2
#                 if dir == -1:
#                     answer -= min(prev, run)
#                 else:
#                     answer -= 1
#                 prev = run

#         return int(answer)


class Solution:
    def candy(self, ratings: List[int]) -> int:
        ratings.append(float("inf"))

        candy = [1] * len(ratings)

        stack_start_index = 0
        stack_left_candy = stack_count = 1

        for i in range(1, len(ratings)):

            if ratings[i] >= ratings[i - 1]:

                if stack_count > stack_left_candy:
                    for j in range(stack_start_index, i):
                        candy[j] = stack_count
                        stack_count -= 1

                else:
                    for j in range(stack_start_index + 1, i):
                        candy[j] = stack_count - 1
                        stack_count -= 1

                if ratings[i] > ratings[i - 1]:
                    candy[i] = candy[i - 1] + 1
                else:
                    candy[i] = 1

                stack_start_index, stack_left_candy, stack_count = i, candy[i], 1

            else:
                stack_count += 1

        return sum(candy[:-1])
