from typing import List, Optional

# TODO: https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/


class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


class Solution:
    def buildTree(self, pre_order: List[int], inorder: List[int]) -> Optional[TreeNode]:
        if inorder:
            index = inorder.index(pre_order.pop(0))
            root = TreeNode(inorder[index])
            root.left = self.buildTree(pre_order, inorder[:index])
            root.right = self.buildTree(pre_order, inorder[index + 1 :])

            return root
