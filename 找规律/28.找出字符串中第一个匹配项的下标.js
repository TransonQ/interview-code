/**
 * 28.实现strStr()
 * 给两个字符串,haystack 和 needle,
 * 在 haystack 字符串中找出 needle 字符串出现的第一个位置(下标从 0 开始)。
 * 如果不存在,则返回  -1
 *
 * 示例:
 * haystack = "hello", needle = "ll" -> 2
 * haystack = "aaaaa", needle = "bba -> -1
 * haystack = "", needle = "" -> 0
 *
 */

// 解法一: 暴力匹配
// const strStr = (haystack, needle) => {
//   if (haystack === needle) return 0

//   for (let i = 0; i < haystack.length; i++) {
//     const needleLen = needle.length
//     const haystackSlice = haystack.slice(i, i + needleLen)
//     if (haystackSlice === needle) {
//       return i // 找到后终止循环
//     }
//   }

//   return -1
// }

// 解法二: KMP 算法 - 分为两部分: strStr 和 buildPartialMatchTable
const strStr = (text, pattern) => {
  const table = buildPartialMatchTable(pattern)
  let textIndex = 0
  let patternIndex = 0

  while (textIndex < text.length) {
    if (pattern[patternIndex] === text[textIndex]) {
      // 如果当前字符匹配，继续比对下一个字符
      textIndex++
      patternIndex++
      if (patternIndex === pattern.length) {
        // 如果子串全部匹配，返回匹配位置
        return textIndex - patternIndex
      }
    } else if (patternIndex === 0) {
      // 如果子串的第一个字符不匹配，移动到主串的下一个字符
      textIndex++
    } else {
      // 根据部分匹配表移动子串的位置
      patternIndex = table[patternIndex - 1]
    }
  }

  return -1 // 未找到匹配位置
}

// 构建部分匹配表
/** 
 * 
如何计算部分匹配表。
假设我们要构建部分匹配表的子串为 "ABABAC"。下面是一步一步计算部分匹配表的过程：
1. **初始化**：首先，我们创建一个长度为6的数组来存储部分匹配表，初始值全为0。
   ```
   部分匹配表：[0, 0, 0, 0, 0, 0]
   ```
2. **遍历子串**：从第二个字符（B）开始，依次遍历到最后一个字符（C）。
3. **计算部分匹配值**：
   - 对于第一个字符 A，部分匹配值为0，因为没有相等的前缀后缀。
   - 对于第二个字符 B，部分匹配值仍然为0，因为没有相等的前缀后缀。
   - 对于第三个字符 A，部分匹配值为1，因为当前前缀 "A" 和后缀 "A" 相等。
   - 对于第四个字符 B，部分匹配值为2，因为当前前缀 "AB" 和后缀 "AB" 相等。
   - 对于第五个字符 A，部分匹配值为3，因为当前前缀 "ABA" 和后缀 "ABA" 相等。
   - 对于第六个字符 C，部分匹配值为0，因为没有相等的前缀后缀。
   ```
   部分匹配表：[0, 0, 1, 2, 3, 0]
   ```
通过这样的计算过程，我们得到了完整的部分匹配表。这个表告诉我们在子串中，
每个位置的最长相等前缀后缀的长度，以便在匹配失败时决定移动子串的位置，从而提高搜索效率。
希望这个详细的解释能够帮助你理解部分匹配表是如何计算出来的。
 */
function buildPartialMatchTable(pattern) {
  const table = [0] // 部分匹配表
  let prefixEnd = 0 // 前缀结束位置
  let suffixEnd = 1 // 后缀结束位置

  while (suffixEnd < pattern.length) {
    if (pattern[suffixEnd] === pattern[prefixEnd]) {
      // 如果找到了更长的相等前缀后缀
      table[suffixEnd] = prefixEnd + 1
      prefixEnd++
      suffixEnd++
    } else if (prefixEnd === 0) {
      // 如果前缀已经到达开头，无法再缩小了
      table[suffixEnd] = 0
      suffixEnd++
    } else {
      // 回溯，找到更短的相等前缀后缀
      prefixEnd = table[prefixEnd - 1]
    }
  }

  return table
}

// 用例
console.log(strStr('hello', 'll')) // 2
console.log(strStr('aaaaa', 'bba')) // -1
console.log(strStr('sadbutsad', 'sad')) // 0
console.log(strStr('', '')) // 0
