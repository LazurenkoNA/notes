// TODO: https://leetcode.com/problems/two-sum
import * as R from "ramda";

/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
const twoSumDeclarative = R.curry((numbers, target) => {});

const twoSumImperative = (numbers, target) => {
  const map = new Map();

  for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i];
    const diff = target - number;

    if (map.has(diff)) return [map.get(diff), i];

    map.set(number, i);
  }
};

// [2,3]
// console.log(twoSumImperative([3, 4, 5, 5, 675], 10));
twoSumDeclarative([3, 4, 5, 5, 675], 10);
