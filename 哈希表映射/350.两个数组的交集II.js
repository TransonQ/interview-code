/** 
 * 350.两个数组的交集II
 * 给定两个数组，编写一个函数来计算它们的交集。

示例 1：
输入：nums1 = [1,2,2,1], nums2 = [2,2]
输出：[2,2]

示例 2:
输入：nums1 = [4,9,5], nums2 = [9,4,9,8,4]
输出：[4,9]

说明：
输出结果中每个元素出现的次数，应与元素在两个数组中出现次数的最小值一致。
我们可以不考虑输出结果的顺序。

 */

const intersect = (nums1, nums2) => {
  let res = []
  const map1 = new Map()
  const map2 = new Map()
  // map 是有序的,负责管理顺序和计数
  for (let i = 0; i < nums1.length; i++) {
    if (map1.get(nums1[i])) {
      map1.set(nums1[i], map1.get(nums1[i]) + 1)
    } else {
      map1.set(nums1[i], 1)
    }
  }

  for (let i = 0; i < nums2.length; i++) {
    if (map2.get(nums2[i])) {
      map2.set(nums2[i], map2.get(nums2[i]) + 1)
    } else {
      map2.set(nums2[i], 1)
    }
  }

  // 两个 map 匹配,交集,同时减少对应的计数
  for (let i = 0; i < nums1.length; i++) {
    if (map1.get(nums1[i]) > 0 && map2.get(nums1[i]) > 0) {
      res.push(nums1[i])
      map1.set(nums1[i], map1.get(nums1[i]) - 1)
      map2.set(nums1[i], map2.get(nums1[i]) - 1)
    }
  }

  return res
}

// 用例
console.log(intersect([1, 2, 2, 1], [2, 2]))
console.log(intersect([1, 2, 2, 1], [2]))
console.log(intersect([4, 9, 5], [9, 4, 9, 8, 4]))
console.log(intersect([4, 9, 5, 9], [9, 4, 9, 8, 4]))
