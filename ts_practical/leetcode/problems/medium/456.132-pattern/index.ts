// TODO: https://leetcode.com/problems/132-pattern

const find132pattern = (numbs: number[]): boolean => {
  if (numbs.length < 3) return false;

  const stack = [];
  let secondNum = -Infinity;

  for (let i = numbs.length - 1; i >= 0; --i) {
    if (numbs[i] < secondNum) return true;

    while (stack.length && stack[stack.length - 1] < numbs[i])
      secondNum = stack.pop();

    stack.push(numbs[i]);
  }

  return false;
};

console.log(find132pattern([3, 5, 0, 3, 4]));
