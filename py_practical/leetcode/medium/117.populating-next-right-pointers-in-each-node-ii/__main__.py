# TODO: https://leetcode.com/problems/populating-next-right-pointers-in-each-node-ii/


from lib2to3.pytree import Node


class Solution:
    def connect(self, root: Node) -> Node:
        if not root:
            return None

        current = root
        dummy = Node(-999)
        head = root

        while head:
            current = head
            prev = dummy
            while current:
                if current.left:
                    prev.next = current.left
                    prev = prev.next
                if current.right:
                    prev.next = current.right
                    prev = prev.next
                current = current.next
            head = dummy.next
            dummy.next = None

        return root
