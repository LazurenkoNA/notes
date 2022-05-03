// TODO: https://leetcode.com/problems/shortest-unsorted-continuous-subarray/

function findUnsortedSubarray(numbs: number[]): number {
  if (numbs.length === 1) return 0;

  let bigValue = numbs[0];
  let smallValue = numbs[numbs.length - 1];
  let leftIndex = -1;
  let rightIndex = -1;

  for (let i = 0; i < numbs.length; ++i) {
    numbs[i] >= bigValue ? (bigValue = numbs[i]) : (rightIndex = i);
  }

  for (let i = numbs.length - 2; i > -1; --i) {
    numbs[i] <= smallValue ? (smallValue = numbs[i]) : (leftIndex = i);
  }

  return leftIndex === rightIndex ? 0 : rightIndex - leftIndex + 1;
}
