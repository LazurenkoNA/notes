// TODO: https://leetcode.com/problems/max-number-of-k-sum-pairs/

function maxOperations(numbs: number[], k: number): number {
  const hashTable: { [key: number]: number } = {};
  let answer: number = 0;

  for (let i of numbs) {
    if (hashTable[k - i] && hashTable[k - i] > 0) {
      answer += 1;
      hashTable[k - i] -= 1;
    } else if (!hashTable[i]) {
      hashTable[i] = 1;
    } else {
      hashTable[i] += 1;
    }
  }

  return answer;
}
