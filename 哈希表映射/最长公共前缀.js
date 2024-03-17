/** 
 * 最长的公共前缀
 * 编写一个函数来查找字符串数组中的最长公共前缀。
 * 如果不存在公共前缀，返回空字符串 ""。

示例 1：
输入：strs = ["flower","flow","flight"]
输出："fl"

示例 2：
输入：strs = ["dog","racecar","car"]
输出：""
解释：输入不存在公共前缀。
 

提示：
0 <= strs.length <= 200
0 <= strs[i].length <= 200
strs[i] 仅由小写英文字母组成
 */

/**
 * 先求前两个,找出最长公共前缀
 * 然后使用 reduce,求出第n个，最后返回最长公共前缀
 */

const commonPrefix = function (pre, value) {
  let prefix = ''
  for (let i = 0; i < value.length; i++) {
    if (pre[i] === value[i]) {
      prefix += pre[i]
    } else {
      return prefix
    }
  }

  return prefix
}

const longestCommonPrefix = function (strs) {
  return strs.reduce(
    (p, c, index) => {
      if (index === 0) return c // 首个元素特殊处理,不需要比较
      return commonPrefix(p, c) // 从第二个开始比较
    },
    [strs[0]]
  )
}

console.log(longestCommonPrefix(['flower', 'flow', 'flight']))
console.log(longestCommonPrefix(['racecar', 'car']))
console.log(commonPrefix('a', 'ac'))
