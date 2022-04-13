// TODO: https://leetcode.com/problems/longest-common-prefix/

function longestCommonPrefix(strings: string[]): string {
  if (strings.length === 0) return "";
  if (strings.length === 1) return strings[0];
  let possiblePrefix = "";
  while (
    strings.every((str: string): boolean => str.startsWith(possiblePrefix))
  ) {
    const newPossiblePrefix = strings[0].slice(0, possiblePrefix.length + 1);

    if (newPossiblePrefix.length > possiblePrefix.length) {
      possiblePrefix = newPossiblePrefix;
    } else if (newPossiblePrefix.length === possiblePrefix.length) {
      return possiblePrefix;
    } else {
      break;
    }
  }

  return possiblePrefix.slice(0, -1);
}

longestCommonPrefix(["flower","flow","flight"])
longestCommonPrefix( ["dog","racecar","car"])
