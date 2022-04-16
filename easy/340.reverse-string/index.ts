// TODO: https://leetcode.com/problems/reverse-string/

const reverseStringLower = (s: string[]): string[] => {
  return s.reverse();
};

const reverseString = (strings: string[]): string[] => {
  let left = 0;
  let right = strings.length - 1;

  while (left <= right) {
    [strings[left], strings[right]] = [strings[right], strings[left]];
    left++;
    right--;
  }

  return strings;
};

reverseString(["h", "e", "l", "l", "o"]);
reverseString(["H", "a", "n", "n", "a", "h"]);
