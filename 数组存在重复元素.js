/**
 * 存在重复元素
 *
 * 给定一个整数数组，判断是否存在重复元素。
 * 如果存在一值在数组中出现至少两次，函数返回 true 。
 * 如果数组中每个元素都不相同，则返回 false 。
 *
 * 输入: [1,2,3,1] 输出: true
 * 输入: [1,2,3,4] 输出: false
 */

// const hasDuplicate = (nums) => {
//   // 使用 Map
//   let map = new Map()
//   for (const item of nums) {
//     if (map.has(item)) { // 此处检查是否含有 key
//       return true
//     } else {
//       map.set(item, 1) // 其实是设置键名为item，值为1.
//     }
//   }
//   return false
// }

const hasDuplicate = (nums) => {
  // 使用 Set
  let set = new Set()
  for (const item of nums) {
    if (set.has(item)) {
      return true
    } else {
      set.add(item)
    }
  }
  return false
}

// run

const nums1 = [1, 2, 3, 1]
const nums2 = [1, 2, 3, 4]

console.log(hasDuplicate(nums1)) // true
console.log(hasDuplicate(nums2)) // false
