/** 
 * 234.回文链表
 * 给你一个单链表的头节点 head ，请你判断该链表是否为回文链表。如果是，返回 true ；否则，返回 false 。

输入：head = [1,2,2,1]
输出：true

输入：head = [1,2]
输出：false


解题思路：
先用快慢指针的手法，让我们知道这个链表的中点是哪，然后从中点截断
然后截断成为两个链表，把后面的链表翻转
最后依次去判断这两个链表每一项是否相同

 */

const ChainNode = class {
  constructor(val, next) {
    this.val = val === undefined ? null : val
    this.next = next === undefined ? null : next
  }
}

const isPalindrome = (head) => {
  let arr = []

  // 将链表转换为数组
  while (head) {
    arr.push(head.val)
    head = head.next
  }

  // 两个指针,一前一后,同时向中间移动
  for (let i = 0, j = arr.length - 1; i < j; i++, j--) {
    if (arr[i] !== arr[j]) {
      return false
    }
  }

  return true
}

// 用例
const n1 = new ChainNode(1)
n1.next = new ChainNode(2)
n1.next.next = new ChainNode(2)
n1.next.next.next = new ChainNode(1)
// n1.next.next.next.next = new ChainNode(1)

console.log(JSON.stringify(n1, null, 2))

console.log(isPalindrome(n1))
