// TODO: https://leetcode.com/problems/two-sum

/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
const twoSum = (numbers, target) => {
  const map = new Map();

  for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i];
    const diff = target - number;

    if (map.has(diff)) return [map.get(diff), i];

    map.set(number, i);
  }
};

twoSum([3, 4, 5, 5, 675], 10);
