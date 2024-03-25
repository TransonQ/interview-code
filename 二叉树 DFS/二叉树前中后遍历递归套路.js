/** 
 * 二叉树前中后遍历套路详解
    A
   / \
  B   C
 / \   \
D   E   F

 */

class TreeNode {
  constructor(val) {
    this.val = val
    this.left = null
    this.right = null
  }
}

// 创建一个简单的二叉树
const root = new TreeNode('A')
root.left = new TreeNode('B')
root.right = new TreeNode('C')
root.left.left = new TreeNode('D')
root.left.right = new TreeNode('E')
root.right.right = new TreeNode('F')

/**
 * 前序遍历: A B D E C F (根节点->左子树->右子树)
 */
const preorderTraversal = (root) => {
  const res = []
  const preorder = (root) => {
    if (!root) return
    res.push(root.val)
    preorder(root.left)
    preorder(root.right)
  }
  preorder(root)
  return res
}
console.log(preorderTraversal(root)) //  A B D E C F

/**
 * 中序遍历: D B E A C F (左子树->根节点->右子树)
 */
const inorderTraversal = (root) => {
  const res = []
  const inorder = (root) => {
    if (!root) return
    inorder(root.left)
    res.push(root.val)
    inorder(root.right)
  }
  inorder(root)
  return res
}
console.log(inorderTraversal(root)) //  D B E A C F

/**
 * 后序遍历: D E B C F A (左子树->右子树->根节点)
 */
const postorderTraversal = (root) => {
  const res = []
  const postorder = (root) => {
    if (!root) return
    postorder(root.left)
    postorder(root.right)
    res.push(root.val)
  }
  postorder(root)
  return res
}
console.log(postorderTraversal(root)) //  D E B F C A
