import { TreeNode, arg1, arg2 } from "./data.js";

// TODO: https://leetcode.com/problems/recover-binary-search-tree/

const recoverTree = (root: TreeNode): void => {
  let big: TreeNode = null;
  let small: TreeNode = null;
  let previous: TreeNode = null;

  const depthFirstSearch = (root: TreeNode) => {
    if (!root) return;
    depthFirstSearch(root.left);

    if (previous !== null && previous.val > root.val) {
      small = root;

      if (!big) {
        big = previous;
      } else {
        return;
      }
    }

    previous = root;
    depthFirstSearch(root.right);
  };

  depthFirstSearch(root);
  [big.val, small.val] = [small.val, big.val];
};

recoverTree(arg1);
recoverTree(arg2);

const result = {
  1: arg1,
  2: arg2,
};
console.log(result);
