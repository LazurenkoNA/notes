from collections import deque
from hashlib import new
from typing import List


class Solution:
    def shortestPathBinaryMatrix(self, grid: List[List[int]]) -> int:
        if grid[0][0] != 0 or grid[-1][-1] != 0:
            return -1

        N = len(grid)
        offsets = [(-1, -1), (-1, 0), (-1, 1), (0, -1), (0, 1), (1, -1), (1, 0), (1, 1)]

        q = deque()
        q.append((0, 0))
        visited = {(0, 0)}

        def get_neighbors(x, y):
            for x_offset, y_offset in offsets:
                new_row = x + x_offset
                new_col = y + y_offset

                if (
                    0 <= new_row < N
                    and 0 <= new_col < N
                    and not grid[new_row][new_col]
                    and (new_row, new_col) not in visited
                ):
                    yield (new_row, new_col)

        current_distance = 1

        while q:
            length = len(q)

            for _ in range(length):
                row, col = q.popleft()

                if row == N - 1 and col == N - 1:
                    return current_distance

                for new_step in get_neighbors(row, col):
                    print(new_step)
                    visited.add(new_step)
                    q.append(new_step)

            current_distance += 1

        return -1


solution = Solution()
solution.shortestPathBinaryMatrix([(0, 0, 0), (0, 0, 0), (0, 0, 0)])
solution.shortestPathBinaryMatrix([(0, 1), (1, 0)])
