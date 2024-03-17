/**
 * 两个数组的交集:
 * 给定两个数组,编写一个函数来计算他们的交集
 * 示例:
 * nums1 = [1, 2, 2, 1], nums2 = [2, 2], 返回 [2].
 * nums2 = [4, 9, 5], nums1 = [9, 4, 9, 8, 4], 返回 [4, 9].
 */

// 交集
const intersect = (nums1, nums2) => {
  // // 使用 set 的解法
  // return [...new Set(nums1)].filter((item) => {
  //   return [...new Set(nums2)].includes(item)
  // })

  // 使用 map
  const map = new Map()
  const result = []

  for (const item of nums1) {
    map.set(item, true)
  }

  for (const item of nums2) {
    if (map.has(item) && map.get(item)) {
      map.set(item, false)
      result.push(item)
    }
  }

  return result
}

console.log(intersect([1, 2, 2, 1], [2, 4]))
console.log(intersect([4, 9, 5], [9, 4, 9, 8, 4]))
