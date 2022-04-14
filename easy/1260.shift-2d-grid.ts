// TODO: https://leetcode.com/problems/shift-2d-grid/

function shiftGrid(grid: number[][], k: number): number[][] {
  const rows = grid.length;
  const columns = grid[0].length;

  if (k === rows * columns) return grid;
  const answer = grid.map((arr) => arr.slice());

  for (let i = 0; i < rows; ++i) {
    for (let j = 0; j < columns; ++j) {
      let newRow = i;
      let newColumn = j + k;

      if (newColumn >= columns) {
        newRow = Math.floor(newRow + newColumn / columns);

        if (newRow >= rows) {
          newRow = Math.floor(newRow % rows);
        }
      }

      newColumn %= columns;

      answer[newRow][newColumn] = grid[i][j];
    }
  }

  return answer;
}

shiftGrid(
  [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ],
  1
);
shiftGrid(
  [
    [3, 8, 1, 9],
    [19, 7, 2, 5],
    [4, 6, 11, 10],
    [12, 0, 21, 13],
  ],
  4
);
shiftGrid(
  [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ],
  9
);
