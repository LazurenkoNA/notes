const generateMatrix = (n: number): number[][] => {
  let row1 = 0;
  let row2 = n - 1;
  let column1 = 0;
  let column2 = n - 1;
  let value = 0;
  let answer: number[][] = [];
  for (let i = 0; i < n; i++) answer.push(<number[]>[]);

  while (row1 <= row2 && column1 <= column2) {
    // to right
    for (let i = column1; i <= column2; ++i) {
      answer[row1][i] = ++value;
    }
    // down
    for (let i = row1 + 1; i <= row2; ++i) {
      answer[i][column2] = ++value;
    }
    if (row1 < row2 && column1 < column2) {
      // to left
      for (let i = column2 - 1; i > column1; --i) {
        answer[row2][i] = ++value;
      }
      // up
      for (let i = row2; i > row1; --i) {
        answer[i][column1] = ++value;
      }
    }
    row1 += 1;
    row2 -= 1;
    column1 += 1;
    column2 -= 1;
  }

  return answer;
};

// 100
generateMatrix(3);
generateMatrix(1);
