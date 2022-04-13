// TODO: https://leetcode.com/problems/kth-largest-element-in-a-stream/

function binSearch(
  array: number[],
  term: number,
  compareFunction = (a: number, b: number) => a - b
) {
  let start: number = 0;
  let end: number = array.length - 1;
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    let comp = compareFunction(array[mid], term);
    if (comp < 0) {
      start = mid + 1;
    } else if (comp > 0) {
      end = mid - 1;
    } else {
      return mid;
    }
  }
  return start;
}

class KthLargest {
  k: number;
  numbers: number[];

  constructor(k: number, numbers: number[]) {
    this.k = k;
    this.numbers = numbers.sort((a, b) => a - b);
  }

  add(value: number): number {
    const index = binSearch(this.numbers, value);

    this.numbers.splice(index, 0, value);

    return this.numbers[this.numbers.length - this.k] || null;
  }
}

/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */

const obj = new KthLargest(3, [4, 5, 8, 2]);
let param_1 = obj.add(3);
param_1 = obj.add(5);
param_1 = obj.add(10);
param_1 = obj.add(9);
param_1 = obj.add(4);
