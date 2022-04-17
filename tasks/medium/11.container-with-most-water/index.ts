// TODO: https://leetcode.com/problems/container-with-most-water/

const maxArea0 = (height: number[]): number => {
  let left: number = 0;
  let right: number = height.length - 1;
  let maxArea: number = 0;

  while (left < right) {
    const minHeight = Math.min(height[left], height[right]);
    maxArea = Math.max(maxArea, minHeight * (right - left));

    if (height[left] < height[right]) {
      left += 1;
    } else {
      right -= 1;
    }
  }
  return maxArea;
};

const maxArea1 = (height: number[]): number => {
  let left: number = 0;
  let right: number = height.length - 1;
  let maxArea: number = 0;

  while (left < right) {
    const minHeight = Math.min(height[left], height[right]);
    maxArea = Math.max(maxArea, minHeight * (right - left));

    if (height[left] < height[right]) {
      left += 1;
      while (height[left] < minHeight) {
        left += 1;
      }
    } else {
      right -= 1;
      while (height[right] < minHeight) {
        right -= 1;
      }
    }
  }
  return maxArea;
};

// maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]);
// maxArea([1, 1]);
