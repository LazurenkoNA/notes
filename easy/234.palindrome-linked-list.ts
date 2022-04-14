// TODO: https://leetcode.com/problems/palindrome-linked-list/
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

type ListNode = {
  value: 0 | number;
  next: null | ListNode;
};

export function isPalindromeLinkedList(head: ListNode) {
  let string = "";
  while (head?.next !== null) {
    string += head.value;
    head = head.next;
  }
  string += head.value;
  console.log(head, string);
  console.log(isPalindrome(string));

  return isPalindrome(string);
}

// RUN
const ln4 = <ListNode>{
  value: 1,
  next: null,
};
const ln3 = <ListNode>{
  value: 2,
  next: ln4,
};
const ln2 = <ListNode>{
  value: 2,
  next: ln3,
};
export const ln1 = {
  value: 1,
  next: ln2,
};

isPalindromeLinkedList(ln1);

const ln02 = <ListNode>{
  value: 2,
  next: null,
};
export const ln01 = {
  value: 1,
  next: ln02,
};
isPalindromeLinkedList(ln01);
