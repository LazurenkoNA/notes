import { TreeNode, graph1, graph2 } from "./data.js";

//TODO: https://leetcode.com/problems/trim-a-binary-search-tree/

const trimBST = (
  root: TreeNode | null,
  low: number,
  high: number
): TreeNode | null => {
  if (!root) return null;
  if (root.val < low) root = trimBST(root.right, low, high);
  else if (root.val > high) root = trimBST(root.left, low, high);
  else {
    root.left = trimBST(root.left, low, high);
    root.right = trimBST(root.right, low, high);
  }
  return root;
};

// {
//   '1': TreeNode {
//     val: 1,
//     left: null,
//     right: TreeNode { val: 2, left: null, right: null }
//   },
//   '2': TreeNode {
//     val: 3,
//     left: TreeNode { val: 2, left: TreeNode { val: 1, left: null, right: null }, right: null },
//     right: null
//   }
// }
const result = {
  1: trimBST(graph1, 1, 2),
  2: trimBST(graph2, 1, 3),
};
console.log(result);
