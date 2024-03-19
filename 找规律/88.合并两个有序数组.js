/** 
 * 88.合并两个有序数组
 * 给你两个 非递减顺序 排列的整数数组 nums1 和 nums2，请你将 nums2 合并到 nums1 中，使 nums1 成为一个有序数组。
 * 请你 合并 nums2 到 nums1 中，使合并后的数组同样按 非递减顺序 排列。
 * 
 * 注意：最终，合并后数组不应由函数返回，而是存储在数组 nums1 中。为了应对这种情况，nums1 的初始长度为 m + n，
 *      其中前 m 个元素表示应合并的元素，后 n 个元素为 0 ，应忽略。nums2 的长度为 n 。

示例 1：
输入：nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
输出：[1,2,2,3,5,6]

示例 2：
输入：nums1 = [1], m = 1, nums2 = [], n = 0
输出：[1]
 */

// 核心: 已经排序了, 已经给出了有效元素的个数

// 合并两个有序数组
const mergeList = (nums1, m, nums2, n) => {
  // nums1.splice(m, nums1.length - m, ...nums2)
  // nums1.sort((a, b) => a - b)
  // return nums1

  // 定义两个指针，分别指向 nums1 和 nums2 的起始位置
  let p1 = 0
  let p2 = 0
  const len = m + n
  // 定义一个新数组来存放合并后的结果
  let arr = new Array(len).fill(0)
  let currnet

  while (p1 < m || p2 < n) {
    if (p1 === m) {
      // 如果 nums1 已经处理完了所有元素，则将 nums2 中剩余的元素依次放入结果数组中
      currnet = nums2[p2++]
    } else if (p2 === n) {
      // 如果 nums2 已经处理完了所有元素，则将 nums1 中剩余的元素依次放入结果数组中
      currnet = nums1[p1++]
    } else if (nums1[p1] < nums2[p2]) {
      // 如果 nums1 和 nums2 都还有元素未处理，并且 nums1 当前指向的元素小于 nums2 当前指向的元素，则将 nums1 当前指向的元素放入结果数组中
      currnet = nums1[p1++]
    } else {
      // 如果 nums1 和 nums2 都还有元素未处理，并且 nums2 当前指向的元素小于等于 nums1 当前指向的元素，则将 nums2 当前指向的元素放入结果数组中
      currnet = nums2[p2++]
    }
    // 将当前处理的元素放入结果数组中
    arr[p1 + p2 - 1] = currnet
  }

  for (let i = 0; i < len; i++) {
    nums1[i] = arr[i]
  }
}

console.log(mergeList([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3))
console.log(mergeList([1], 1, [], 0))
