/**
 * 给定一个非空整数数组，除了某个元素只出现一次以外，其余每个元素均出现两次。找出那个只出现了一次的元素。
 * 你的算法应该具有线性时间复杂度。 你可以不使用额外空间来实现吗？
 * 示例:
 * 输入: [2,2,1], 输出: 1
 * 输入: [4,1,2,1,2], 输出: 4
 */

let singleNumber = () => {}

// // 只出现一次，最简单的

// singleNumber = (nums) => {
//   const map = {}
//   for (const num of nums) {
//     if (map[num]) {
//       map[num]++
//     } else {
//       map[num] = 1
//     }
//   }

//   for (const key in map) {
//     if (map[key] === 1) {
//       return key
//     }
//   }
// }


// // 只出现一次,第一次出现的数字

singleNumber = (nums) => {
  const map = new Map()

  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) {
      map.set(nums[i], -1)
    } else {
      map.set(nums[i], i)
    }
  }

  for (const [key, value] of map) {
    if (value > 0) {
      return key
    }
  }
}


// 用例
console.log(singleNumber([2, 2, 1]))
console.log(singleNumber([1, 4, 7, 2, 5, 1, 4, 2]))
