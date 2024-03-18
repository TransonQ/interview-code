/** 
 * 21.合并两个有序链表
 * 将两个升序链表合并为一个新的 升序 链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。

示例 1：
输入：l1 = [1,2,4], l2 = [1,3,4]
输出：[1,1,2,3,4,4]

示例 2：
输入：l1 = [], l2 = []
输出：[]

示例 3：
输入：l1 = [], l2 = [0]
输出：[0]

提示：
两个链表的节点数目范围是 [0, 50]
-100 <= Node.val <= 100
l1 和 l2 均按 非递减顺序 排列
 */

/**
 * 为了合并两个有序链表，我们可以使用迭代的方法。
 * 我们需要维护两个指针，分别指向两个链表的当前节点，
 * 然后逐个比较节点的值，将较小值的节点链接到新链表中，直到其中一个链表遍历完。
 * 然后将剩余链表的所有节点链接到新链表的尾部。
 */
class ListNode {
  constructor(val, next) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
  }
}

// 递归函数,比较两个节点的值，返回一个新的节点
function mergeTwoLists(node1, node2) {
  // 终止递归的条件
  if (node1 === null) return node2
  if (node2 === null) return node1

  // 比较两个链表当前节点的值, 返回较小的当前节点, 
  // 同时将该节点的下一个节点与较大的当前节点进行递归比较
  if (node1.val < node2.val) {
    node1.next = mergeTwoLists(node1.next, node2)
    return node1
  } else {
    node2.next = mergeTwoLists(node2.next, node1)
    return node2
  }
}

const l1 = new ListNode(1)
l1.next = new ListNode(2)
l1.next.next = new ListNode(4)

const l2 = new ListNode(1)
l2.next = new ListNode(3)
l2.next.next = new ListNode(4)

console.log(JSON.stringify(mergeTwoLists(l1, l2), null, 2))
