// TODO: https://leetcode.com/problems/remove-duplicates-from-sorted-array/

const removeDuplicatesLower = (nums: number[]): number => {
  let length = 0;
  for (let i = 0; i < nums.length; i++) {
    console.log("index", i);
    if (nums[i + 1] === nums[i]) {
      [nums[i]] = [nums[length - i - 1]];
    }
    length += 1;
  }
  return nums.length;
};

const removeDuplicates = (nums: number[]): number => {
  let left = 1;
  let right = 1;
  const length = nums.length;

  while (right < length) {
    if (nums[right] !== nums[right - 1]) {
      nums[left] = nums[right];
      left += 1;
    }

    right += 1;
  }

  return left;
};

console.log(removeDuplicates([1, 1, 2]));
console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));
