from typing import Optional


class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next


# TODO: https://leetcode.com/problems/partition-list/

# Given the head of a linked list and a value x, partition it such that all nodes less than x come before nodes greater than or equal to x.

# You should preserve the original relative order of the nodes in each of the two partitions.


# Example 1:
# Input: head = [1,4,3,2,5,2], x = 3
# Output: [1,2,2,4,3,5]

# Example 2:
# Input: head = [2,1], x = 2
# Output: [1,2]


# Constraints:
# The number of nodes in the list is in the range [0, 200].
# -100 <= Node.val <= 100
# -200 <= x <= 200


class Solution:
    def partition(self, head: Optional[ListNode], x: int) -> Optional[ListNode]:
        if not head:
            return None
        less_head = less_tail = ListNode(0)
        greater_head = greater_tail = ListNode(0)
        while head:
            if head.val < x:
                less_tail.next = head
                less_tail = less_tail.next
            else:
                greater_tail.next = head
                greater_tail = greater_tail.next
            head = head.next
        less_tail.next = greater_head.next
        greater_tail.next = None
        return less_head.next
