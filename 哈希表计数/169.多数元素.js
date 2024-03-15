/**
  给定一个大小为 n 的数组 nums ，返回其中的多数元素。多数元素是指在数组中出现次数 大于 ⌊ n/2 ⌋ 的元素。
  你可以假设数组是非空的，并且给定的数组总是存在多数元素。
  简单来说，就是要找出数组中出现次数超过一半的那个元素，并返回它的值。

  示例 1：
  输入：nums = [3,2,3]
  输出：3
  示例 2：

  输入：nums = [2,2,1,1,1,2,2]
  输出：2
  
  提示：
  n == nums.length
  1 <= n <= 5 * 104
  -109 <= nums[i] <= 109

进阶：尝试设计时间复杂度为 O(n)、空间复杂度为 O(1) 的算法解决此问题。
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
const majorityElement = function (nums) {
  const map = {}

  // 计数: key 为元素，value 为出现次数
  for (const n of nums) {
    map[n] = (map[n] || 0) + 1
  }

  // 找到多数元素并返回
  for (const key in map) {
    if (map[key] > nums.length / 2) {
      return key
    }
  }
}

// 用例
let nums1 = [3, 2, 3]
let nums2 = [2, 2, 1, 1, 1, 2, 2]

console.log(majorityElement(nums1))
console.log(majorityElement(nums2))
