// TODO:  https://leetcode.com/problems/next-permutation/

const nextPermutation = (numbers: number[]): number[] => {
  let i = numbers.length - 2;
  while (i >= 0 && numbers[i + 1] <= numbers[i]) {
    i -= 1;
  }

  if (i >= 0) {
    let j = numbers.length - 1;
    while (numbers[j] <= numbers[i]) {
      j -= 1;
    }
    swap(numbers, i, j);
  }

  reverse(numbers, i + 1, numbers.length - 1);

  return numbers;
};

const swap = (numbers: number[], first: number, second: number) => {
  [numbers[first], numbers[second]] = [numbers[second], numbers[first]];
};

const reverse = (numbers: number[], start: number, end: number): void => {
  if (numbers.length <= 1 || end >= numbers.length) {
    return;
  }

  if (start < 0 || start >= end) {
    return;
  }

  swap(numbers, start, end);

  reverse(numbers, start + 1, end - 1);
};

const result = {
  1: nextPermutation([1, 2, 3]),
  2: nextPermutation([3, 2, 1]),
  3: nextPermutation([1, 1, 5]),
};
console.log(result);
