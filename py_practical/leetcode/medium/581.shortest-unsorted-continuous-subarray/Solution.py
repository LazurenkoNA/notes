from pip import List


class Solution:
    def findUnsortedSubarray(self, numbs: List[int]) -> int:
        print("----")
        if len(numbs) == 1:
            return 0

        big_value, small_value = numbs[0], numbs[-1]
        right_index, left_index = -1, -1

        for i in range(1, len(numbs)):
            if numbs[i] >= big_value:
                big_value = numbs[i]
            else:
                right_index = i

        for i in range(len(numbs) - 2, -1, -1):
            if numbs[i] <= small_value:
                small_value = numbs[i]
            else:
                left_index = i
        print(right_index, left_index)
        return 0 if left_index == right_index else right_index - left_index + 1
