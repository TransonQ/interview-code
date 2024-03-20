/** 
 * 237.删除链表中的节点
 * 有一个单链表的 head，我们想删除它其中的一个节点 node。
 * 给你一个需要删除的节点 node 。你将 无法访问 第一个节点  head。
 * 链表的所有值都是 唯一的，并且保证给定的节点 node 不是链表中的最后一个节点。
 * 删除给定的节点。注意，删除节点并不是指从内存中删除它。这里的意思是：
 *    给定节点的值不应该存在于链表中。
 *    链表中的节点数应该减少 1。
 *    node 前面的所有值顺序相同。
 *    node 后面的所有值顺序相同。

示例:
    given node: 5
    4->5->1->9
    4---->1->9

    geiven node: 1
    4->5->1->9
    4->5---->9

 */

class ChainNode {
  constructor(val, next) {
    this.val = val === undefined ? null : val
    this.next = next === undefined ? null : next
  }
}

var deleteNode = function(node) {
  node.val = node.next.val
  node.next = node.next.next
};

// 用例
const n1 = new ChainNode(4)
n1.next = new ChainNode(5)
n1.next.next = new ChainNode(1)
n1.next.next.next = new ChainNode(9)

const d = new ChainNode(1)

deleteNode(n1.next)

console.log(JSON.stringify(n1, null, 2));