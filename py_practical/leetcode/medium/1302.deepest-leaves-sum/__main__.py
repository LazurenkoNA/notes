import math
import queue
from typing import Optional


class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


class Solution:
    def deepestLeavesSum(self, root: Optional[TreeNode]) -> int:
        max_deep_level = -math.inf
        sum = 0

        def dfs_with_sum(root: Optional[TreeNode], deep_level: int) -> None:
            nonlocal max_deep_level
            nonlocal sum

            if root:
                if deep_level > max_deep_level:
                    max_deep_level = deep_level
                    sum = root.val
                elif deep_level == max_deep_level:
                    sum += root.val
                dfs_with_sum(root.left, deep_level + 1)
                dfs_with_sum(root.right, deep_level + 1)

        dfs_with_sum(root, 0)

        return sum


class Solution:
    def deepestLeavesSum(self, root: Optional[TreeNode]) -> int:
        q = queue.Queue()
        q.put(root)
        sum = 0

        while q.qsize() > 0:
            count = q.qsize()
            cur = 0

            while count:
                count -= 1
                elem = q.get()

                if elem.left:
                    q.put(elem.left)
                    cur += elem.left.val
                if elem.right:
                    q.put(elem.right)
                    cur += elem.right.val

            if cur == 0:
                return sum

            sum = cur

        return sum


class Solution:
    def deepestLeavesSum(self, root: Optional[TreeNode]) -> int:
        queue = [root]
        level = []
        while queue and root:
            res = 0
            for node in queue:
                res += node.val
                if node.left:
                    level.append(node.left)
                if node.right:
                    level.append(node.right)
            queue = level
            level = []
        return res
