// TODO: https://leetcode.com/problems/3sum-with-multiplicity/

function threeSumMulti(array: number[], target: number): number {
  const map = new Map<number, number>();
  const modification = 1000000007;
  let sum = 0;

  for (let i = 0; i < array.length; i++) {
    sum = (sum + (map.get(target - array[i]) || 0)) % modification;

    for (let j = 0; j < i; j++) {
      const temp = array[i] + array[j];
      map.set(temp, (map.get(temp) || 0) + 1);
    }
  }

  return sum;
}

threeSumMulti([1, 1, 2, 2, 3, 3, 4, 4, 5, 5], 8);
threeSumMulti([1, 1, 2, 2, 2, 2], 5);
