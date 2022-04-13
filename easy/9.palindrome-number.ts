// TODO: https://leetcode.com/problems/palindrome-number/

function isPalindrome(value: number): boolean {
  if (value < 0 || (value > 0 && value % 10 === 0)) {
    return false;
  }

  let reversedNumber: number = 0;
  while (value > reversedNumber) {
    reversedNumber = reversedNumber * 10 + (value % 10);
    value = Math.floor(value / 10);
  }

  return value === reversedNumber || value === Math.floor(reversedNumber / 10);
}

function isPalindromeAlternative1(value: number): boolean {
  const string: string = value.toString();
  for (let i = 0; i < string.length; ++i) {
    if (string[i] !== string[string.length - i - 1]) {
      return false;
    }
  }
  return true;
}

console.log(isPalindrome(121));
console.log(isPalindrome(-121));
console.log(isPalindrome(10));
