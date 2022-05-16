class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

function deepestLeavesSum(root: TreeNode | null): number {
  let maxDeepLevel = -Infinity;
  let sum = 0;

  const dfsWithSum = (root: TreeNode | null, deepLevel: number): void => {
    if (root) {
      if (deepLevel > maxDeepLevel) {
        maxDeepLevel = deepLevel;
        sum = root.val;
      } else if (deepLevel === maxDeepLevel) {
        sum += root.val;
      }
      dfsWithSum(root.left, deepLevel + 1);
      dfsWithSum(root.right, deepLevel + 1);
    }
  };

  dfsWithSum(root, 0);

  return sum;
}
