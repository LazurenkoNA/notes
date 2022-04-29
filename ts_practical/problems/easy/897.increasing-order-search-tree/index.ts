import { arg1, arg2, TreeNode } from "./data.js";

// TODO: https://leetcode.com/problems/increasing-order-search-tree/

const fillingStack = (root: TreeNode | null, stack: number[]) => {
  if (!root) return;

  fillingStack(root.left, stack);
  stack.push(root.val);
  fillingStack(root.right, stack);

  return stack;
};

const increasingBST = (root: TreeNode | null): TreeNode | null => {
  const stack = fillingStack(root, []);

  const head = new TreeNode();
  let temp = head;

  console.log(stack);

  while (stack.length) {
    temp.right = new TreeNode(stack.shift());
    temp = temp.right;
  }

  return head.right;
};

const result = {
  1: increasingBST(arg1),
  2: increasingBST(arg2),
};
console.log(result);
