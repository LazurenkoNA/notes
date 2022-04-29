// TODO: https://leetcode.com/problems/valid-palindrome-ii/

const checkPalindrome = (
  string: string,
  startIndex: number,
  endIndex: number
): boolean => {
  while (startIndex < endIndex) {
    if (string[startIndex] !== string[endIndex]) {
      return false;
    }
    startIndex += 1;
    endIndex -= 1;
  }
  return true;
};

const validPalindrome = (string: string): boolean => {
  let startIndex = 0;
  let endIndex = string.length - 1;
  while (startIndex < endIndex) {
    if (string[startIndex] !== string[endIndex]) {
      return (
        checkPalindrome(string, startIndex, endIndex - 1) ||
        checkPalindrome(string, startIndex + 1, endIndex)
      );
    }

    startIndex += 1;
    endIndex -= 1;
  }
  return true;
};

console.log(validPalindrome("aba"));
console.log(validPalindrome("abca"));
console.log(validPalindrome("abc"));
