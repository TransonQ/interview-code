/** 
 * 二叉树的最大深度
 * 
计算二叉树的最大深度是一个常见的问题，可以使用深度优先搜索（DFS）或广度优先搜索（BFS）来解决。
这里我将讲解 DFS 的思路和代码。

DFS 的基本思路是从根节点开始递归地向下遍历每个节点，并记录每个节点的深度。
在遍历过程中，不断更新最大深度值，最终得到整棵树的最大深度。

具体实现步骤如下：
  1. 编写一个递归函数，该函数接受当前节点作为参数。
  2. 在递归函数中，如果当前节点为空，则返回深度 0。
  3. 如果当前节点不为空，则分别计算其左右子树的最大深度。
  4. 最终返回左右子树的最大深度中的较大值加上 1（因为当前节点也算一层）。
 */
class TreeNode {
  constructor(val) {
    this.val = val
    this.left = null
    this.right = null
  }
}

function maxDepth(root) {
  // if (!root) return 0
  // const leftDepth = maxDepth(root.left)
  // const rightDepth = maxDepth(root.right)
  // return Math.max(leftDepth, rightDepth) + 1

  // 解法二:
  if (!root) return 0
  let res = 1
  dfs(root, res)
  // 工具函数
  function dfs(node, depth) {
    if (!node) return
    if (node.left) dfs(node.left, depth + 1)
    if (node.right) dfs(node.right, depth + 1)
    res = Math.max(res, depth)
  }

  return res
}

// 创建一个简单的二叉树
/**
 *       1
 *      / \
 *     2   3
 *    / \   \
 *   4   5   6
 *            \
 *             7
 */
const root = new TreeNode(1)
root.left = new TreeNode(2)
root.right = new TreeNode(3)
root.left.left = new TreeNode(4)
root.left.right = new TreeNode(5)
root.right.right = new TreeNode(6)
root.right.right.right = new TreeNode(7)

console.log(maxDepth(root)) // 3
