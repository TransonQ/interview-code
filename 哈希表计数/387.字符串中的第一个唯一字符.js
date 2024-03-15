/**
 * 387.字符串中的第一个唯一字符
 *
 * 给定一个字符串，找到它的第一个不重复的字符，并返回它的索引。如果不存在，则返回 -1。
 */

// 思路：哈希表



const firstUniqChar = function (s) {
  const map = new Map()

  for (let i = 0; i < s.length; i++) {
    // 当前的字符
    const char = s[i]

    if (!map.has(char)) {
      // 如果没有这个key,就是第一次出现 - 把当前的字符设置为 key,并且值(次数)设置为 1
      map.set(char, 1)
    } else {
      // 如果有这个key，出现次数+1
      map.set(char, map.get(char) + 1)
    }
  }

  for (let i = 0; i < s.length; i++) {
    if (map.get(s[i]) === 1) {
      return i
    }
  }

  return -1
}

// 执行案例
const s1 = 'leetcode'
const s2 = 'loveleetcode'

console.log(firstUniqChar(s1)) // 0
console.log(firstUniqChar(s2)) // 2
