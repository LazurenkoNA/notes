from collections import deque
from typing import List, Optional

# TODO: https://leetcode.com/problems/binary-tree-level-order-traversal/

# Iterative Level-Order Traversal
# Time Complexity: O(n)
# Space Complexity: O(n) for ans array. O(level) for the deque, which is worst case O(n).
class Solution:
    def levelOrder(self, root: Optional[TreeNode]) -> List[List[int]]:
        if not root:
            return []

        ans = []
        q = deque([root])
        while q:
            length = len(q)
            ans.append([])
            for _ in range(length):
                node = q.popleft()
                ans[-1].append(node.val)
                if node.left:
                    q.append(node.left)
                if node.right:
                    q.append(node.right)
        return ans


# Recursive Pre-Order Traversal
# Time Complexity: O(n)
# Space Complexity: O(n) for ans array. O(h) for recursive call stack, which is worst case O(n).
class Solution:
    def levelOrder(self, root: Optional[TreeNode]) -> List[List[int]]:
        ans = []

        def dfs(node, depth):
            if not node:
                return
            if depth >= len(ans):
                ans.append([])
            ans[depth].append(node.val)
            dfs(node.left, depth + 1)
            dfs(node.right, depth + 1)

        dfs(root, 0)
        return ans
