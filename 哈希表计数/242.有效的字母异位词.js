/**
 * 242. 有效的字母异位词
  给定两个字符串 s 和 t ，编写一个函数来判断 t 是否是 s 的字母异位词。
  注意：若 s 和 t 中每个字符出现的次数都相同，则称 s 和 t 互为字母异位词。
  示例 1:
  输入: s = "anagram", t = "nagaram"
  输出: true
  示例 2:
  输入: s = "rat", t = "car"
  输出: false
*/

/**
 * 说明
 * 一种简单的方法是使用哈希表来跟踪每个字符出现的次数。
 * 我们可以遍历第一个字符串，并将每个字符的频次存储在哈希表中。
 * 然后，遍历第二个字符串，并递减哈希表中对应字符的频次。
 * 如果最终哈希表中所有字符的频次都为零，则说明两个字符串是字母异位词。
 */

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

// const isAnagram = function (s, t) {
//   if (s.length !== t.length) {
//     return false
//   }

//   const map = new Map()

//   for (let charS of s) {
//     // 将遍历到的字符串作为key，将次数作为value存入map中,若key已存在，次数加一,若不存在，次数设为1
//     map.set(charS, (map.get(charS) || 0) + 1)
//   }

//   for (let charT of t) {
//     // 如果key不存在，或者存在key,但是次数小于等于0，返回false,
//     if (!map.has(charT) || map.get(charT) <= 0) {
//       return false
//     }
//     // 如果key存在，次数减一
//     map.set(charT, map.get(charT) - 1)
//   }

//   map.forEach((value) => {
//     if (value !== 0) {
//       return false
//     }
//   })

//   return true
// }

const isAnagram = function (s, t) {
  if (s.length !== t.length) {
    return false
  }

  const map = {}
  for (let i = 0; i < s.length; i++) {
    const charS = s[i]
    const charT = t[i]

    map[charS] ? map[charS]++ : (map[charS] = 1)
    map[charT] ? map[charT]-- : (map[charT] = -1)
  }
  return Object.values(map).every((value) => value === 0)
}

// const isAnagram = function (s, t) {
//   if (s.length !== t.length) {
//     return false
//   }
//   const map = new Map()
//   for (var i = 0; i < s.length; i++) {
//     const charS = s[i]
//     const charT = t[i]

//     map.get(charS) ? map.set(charS, map.get(charS) + 1) : map.set(charS, 1)
//     map.get(charT) ? map.set(charT, map.get(charT) - 1) : map.set(charT, -1)
//   }

//   return Array.from(map.values()).every((value) => value === 0)
// }

const s1 = 'anagram'
t1 = 'nagaram'
s2 = s = 'aacc'
t2 = 'ccac'

console.log(isAnagram(s1, t1)) // true
console.log(isAnagram(s2, t2)) // false
