// TODO: https://leetcode.com/problems/valid-palindrome-ii/

type TIsPalindrome = (
  string: string,
  startIndex?: number,
  endIndex?: number
) => boolean;

const isPalindrome: TIsPalindrome = (
  string,
  startIndex = 0,
  endIndex = string.length - 1
) => {
  while (startIndex < endIndex) {
    if (string[startIndex] !== string[endIndex]) {
      return false;
    }
    startIndex += 1;
    endIndex -= 1;
  }
  return true;
};

function validPalindrome(string: string): boolean {
  let startIndex: number = 0;
  let endIndex: number = string.length - 1;
  while (startIndex < endIndex) {
    if (string[startIndex] !== string[endIndex]) {
      return (
        isPalindrome(string, startIndex, endIndex - 1) ||
        isPalindrome(string, startIndex + 1, endIndex)
      );
    }

    startIndex += 1;
    endIndex -= 1;
  }
  return true;
}

console.log(validPalindrome("aba"));
console.log(validPalindrome("abca"));
console.log(validPalindrome("abc"));
