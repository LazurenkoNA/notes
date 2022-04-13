// TODO: https://leetcode.com/problems/palindrome-linked-list/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

type ListNode<T = any> = {
  value: null | T;
  next: null | ListNode;
};

function isPalindromeLinkedList(head: ListNode) {}
