// TODO: https://leetcode.com/problems/valid-parentheses/

function isValid(string: string): boolean {
  const object: { [key: string]: string } = {
    "(": ")",
    "[": "]",
    "{": "}",
  };
  const stack = [];

  for (const symbol of string) {
    if (symbol in object) {
      stack.push(symbol);
    } else if (stack.length === 0 || object[stack.pop()] !== symbol) {
      return false;
    }
  }
  return stack.length === 0;
}

console.log("result", isValid("()"));
console.log("result", isValid("()[]{}"));
console.log("result", isValid("(]"));
