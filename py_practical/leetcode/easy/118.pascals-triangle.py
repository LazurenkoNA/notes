from typing import List

#  TODO: https://leetcode.com/problems/pascals-triangle/


class Solution:
    def generate(self, numRows: int) -> List[List[int]]:
        # Pre-fill result with units
        model = [[1 for _ in range(row + 1)] for row in range(numRows)]

        # Model filling
        for row in range(numRows):
            for col in range(1, row):
                model[row][col] = model[row - 1][col - 1] + model[row - 1][col]

        return model
