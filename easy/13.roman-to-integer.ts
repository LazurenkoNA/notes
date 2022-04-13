// TODO: https://leetcode.com/problems/roman-to-integer

enum Roman {
  "I" = 1,
  "V" = 5,
  "X" = 10,
  "L" = 50,
  "C" = 100,
  "D" = 500,
  "M" = 1000,
}

type RomanLiterals = keyof typeof Roman;

function romanToInt(value: string): number {
  let counter = 0;
  for (let i = 0; i < value.length; ++i) {
    const isLessNumber =
      Roman[value[i] as RomanLiterals] < Roman[value[i + 1] as RomanLiterals];
    const isLastIndex = i + 1 === value.length;

    if (!isLastIndex && isLessNumber) {
      counter -= Roman[value[i] as RomanLiterals];
    } else {
      counter += Roman[value[i] as RomanLiterals];
    }
  }
  return counter;
}
