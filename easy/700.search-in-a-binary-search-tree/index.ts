import { arg1, TreeNode } from "./data.js";

// TODO: https://leetcode.com/problems/search-in-a-binary-search-tree/

const searchBST = (root: TreeNode | null, val: number): TreeNode | null => {
  if (!root) return null;
  if (root.val === val) return root;
  if (val > root.val) return searchBST(root.right, val);
  if (val < root.val) return searchBST(root.left, val);
};

const result = {
  1: searchBST(arg1, 2),
  2: searchBST(arg1, 5),
};

// {
//   '1': TreeNode {
//     val: 2,
//     left: TreeNode { val: 1, left: null, right: null },
//     right: TreeNode { val: 3, left: null, right: null }
//   },
//   '2': null
// }
console.log(result);
