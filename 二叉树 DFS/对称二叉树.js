/** 
 * 对称二叉树

判断一个二叉树是对称的, 比如:
    1
   / \
  2   2
 / \ / \
3  4 4  3
以上二叉树 [1,2,2,3,4,4,3] 是对称的。

    1
   / \
  2   2
   \   \
   3    3
这个 [1,2,2,null,3,null,3] 则不是镜像对称的。

思路如下：

1. 首先，编写一个辅助函数，该函数接受两个节点作为参数，并判断它们是否镜像对称。
2. 在主函数中，判断根节点是否为空，如果为空，则直接返回 true，因为空树是对称的。
3. 如果根节点不为空，调用辅助函数来判断左右子树是否对称。
4. 辅助函数的实现：
    a. 如果两个节点都为空，则它们是对称的，返回 true。
    b. 如果其中一个节点为空，而另一个不为空，则它们不对称，返回 false。
    c. 如果两个节点的值不相等，则它们不对称，返回 false。
    d. 递归地判断左节点的左子树与右节点的右子树是否对称，以及左节点的右子树与右节点的左子树是否对称。

 */
class TreeNode {
  constructor(val) {
    this.val = val
    this.left = null
    this.right = null
  }
}

// 辅助函数：判断两个节点是否对称
function isSymmetricHelper(left, right) {
  if (!left && !right) return true
  if (!left || !right) return false
  if (left.val !== right.val) return false

  return (
    isSymmetricHelper(left.left, right.right) &&
    isSymmetricHelper(left.right, right.left)
  )
}

// 主函数：判断二叉树是否对称
function isSymmetric(root) {
  return isSymmetricHelper(root, root)
}

// 创建一个简单的二叉树
const root = new TreeNode(1)
root.left = new TreeNode(2)
root.right = new TreeNode(2)
root.left.left = new TreeNode(3)
root.left.right = new TreeNode(4)
root.right.left = new TreeNode(4)
root.right.right = new TreeNode(3)

console.log(isSymmetric(root)) // true

const root2 = new TreeNode(1)
root2.left = new TreeNode(2)
root2.right = new TreeNode(2)
root2.left.right = new TreeNode(3)
root2.right.right = new TreeNode(3)

console.log(isSymmetric(root2)) // false
