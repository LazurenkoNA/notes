from typing import Optional


class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next


# Given the head of a singly linked list and two integers left and right where left <= right, reverse the nodes of the list from position left to position right, and return the reversed list.

# Example 1:
# Input: head = [1,2,3,4,5], left = 2, right = 4
# Output: [1,4,3,2,5]

# Example 2:
# Input: head = [5], left = 1, right = 1
# Output: [5]

# Constraints:
# The number of nodes in the list is n.
# 1 <= n <= 500
# -500 <= Node.val <= 500
# 1 <= left <= right <= n


class Solution:
    def reverseBetween(
        self, head: Optional[ListNode], left: int, right: int
    ) -> Optional[ListNode]:
        if left == right:
            return head

        left_prev = None
        left_node = head
        for _ in range(left - 1):
            left_prev = left_node
            left_node = left_node.next

        right_prev = left_node
        right_node = left_node.next
        for _ in range(right - left):
            right_node.next, right_prev, right_node = (
                right_prev,
                right_node,
                right_node.next,
            )

        left_node.next = right_node
        if left_prev:
            left_prev.next, right_prev = right_prev, head

        return right_prev
