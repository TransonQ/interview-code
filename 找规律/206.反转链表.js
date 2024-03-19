/** 
 * 206.反转链表
 * 给你单链表的头节点 head ，请你反转链表，并返回反转后的链表。  

示例:
输入：head = [1,2,3,4,5]
输出：[5,4,3,2,1]

 */

function ChainNode(val, next) {
  this.val = val === undefined ? null : val
  this.next = next === undefined ? null : next
}

/** 
 * 
初始化指针：我们初始化两个指针，pre 和 current，分别指向 null 和链表的头节点 head。
遍历链表：我们使用 while 循环遍历链表，条件是 current 不为 null。在循环中，我们不断移动 current 指针，直到遍历完整个链表。
反转节点指向：在每次循环中，我们将 current 节点的 next 指针指向前一个节点 pre，从而将当前节点反转过来。
移动指针：接着，我们将 pre 指针移动到当前节点 current 所在的位置，然后将 current 指针移动到下一个节点。
循环终止：当遍历完整个链表后，current 指针会指向 null，此时循环结束。
返回结果：最后，我们返回 pre 指针，它指向反转后链表的头节点。
 */

const reverseList = function (head) {
  let pre = null
  let current = head

  while (current) {
    const infactNext = current.next //

    current.next = pre // 反转节点指向

    pre = current // 移动指针

    current = infactNext // current 指针移动到下一个节点
  }

  return pre
}

// 用例
const n1 = new ChainNode(1)
n1.next = new ChainNode(2)
n1.next.next = new ChainNode(3)
n1.next.next.next = new ChainNode(4)
n1.next.next.next.next = new ChainNode(5)

const res = reverseList(n1)
console.log(JSON.stringify(res, null, 2))
