export class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

export const graph1 = new TreeNode(1, new TreeNode(0), new TreeNode(2));
export const graph2 = new TreeNode(
  3,
  new TreeNode(0, null, new TreeNode(2, new TreeNode(1))),
  new TreeNode(4)
);
