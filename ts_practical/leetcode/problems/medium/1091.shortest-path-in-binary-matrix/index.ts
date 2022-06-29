// First
const offsets = [
  [-1, -1],
  [-1, 0],
  [-1, 1],
  [0, -1],
  [0, 1],
  [1, -1],
  [1, 0],
  [1, 1],
];

function shortestPathBinaryMatrix(grid: number[][]): number {
  const N = grid.length;

  if (grid[0][0] !== 0 || grid[N - 1][N - 1] !== 0) return -1;

  const dequeue = [[0, 0]];
  const visited = new Set();
  visited.add([0, 0].join(","));

  function* getNeighbors(row: number, col: number) {
    for (let [xOffset, yOffset] of offsets) {
      const newRow = row + xOffset;
      const newCol = col + yOffset;

      const isRowRight = 0 <= newRow && newRow < N;
      const isColRight = 0 <= newCol && newCol < N;

      if (
        isRowRight &&
        isColRight &&
        !grid[newRow][newCol] &&
        !visited.has(`${newRow},${newCol}`)
      ) {
        yield [newRow, newCol];
      }
    }
  }

  let currentDistance = 1;

  while (dequeue.length) {
    const length = dequeue.length;

    for (let _ = 0; _ < length; ++_) {
      const [row, col] = dequeue.shift();

      if (row === N - 1 && col === N - 1) {
        return currentDistance;
      }

      for (const newStep of getNeighbors(row, col)) {
        visited.add(newStep.join(","));
        dequeue.push(newStep);
      }
    }
    currentDistance += 1;
  }

  return -1;
}

// Second
const movements = [
  { x: 0, y: 1 },
  { x: 0, y: -1 },
  { y: 0, x: -1 },
  { y: 0, x: 1 },
  { x: 1, y: 1 },
  { x: 1, y: -1 },
  { y: 1, x: -1 },
  { y: -1, x: -1 },
];

function safeToMove(x: number, y: number, grid: number[][]) {
  return (
    x >= 0 && x < grid.length && y >= 0 && y < grid.length && grid[y][x] === 0
  );
}

function shortestPathBinaryMatrix2(grid: number[][]): number {
  const n = grid.length - 1;

  if (grid[n][n] === 1 || grid[0][0] === 1) return -1;

  let shortest = -1;

  const queue: { x: number; y: number; count: number }[] = [
    { x: 0, y: 0, count: 1 },
  ];
  grid[0][0] = 1;

  while (queue.length > 0) {
    const { x, y, count } = queue.shift()!;
    if (x === n && y === n) {
      return count;
    } else {
      for (const movement of movements) {
        const nextX = x + movement.x;
        const nextY = y + movement.y;

        if (safeToMove(nextX, nextY, grid)) {
          queue.push({ x: nextX, y: nextY, count: count + 1 });
          grid[nextY][nextX] = 1;
        }
      }
    }
  }

  return shortest;
}

console.log(
  shortestPathBinaryMatrix([
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ])
);
console.log(
  shortestPathBinaryMatrix([
    [0, 1],
    [1, 0],
  ])
);
