/** 
 * 125.验证回文串
 * 如果在将所有大写字符转换为小写字符、并移除所有非字母数字字符之后，短语正着读和反着读都一样。则可以认为该短语是一个 回文串 。
 * 字母和数字都属于字母数字字符。
 * 给你一个字符串 s，如果它是 回文串 ，返回 true ；否则，返回 false 。
示例 1：
输入: s = "A man, a plan, a canal: Panama"
输出：true
解释："amanaplanacanalpanama" 是回文串。

示例 2：
输入：s = "race a car"
输出：false
解释："raceacar" 不是回文串。

示例 3：
输入：s = " "
输出：true
解释：在移除非字母数字字符之后，s 是一个空字符串 "" 。
由于空字符串正着反着读都一样，所以是回文串。
 */

// 核心是去除非字母数字字符 /[^a-zA-Z0-9]/g ，然后判断是否是回文串

const isPalindrome = (s) => {
  s = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase()
  let left = 0
  let right = s.length - 1

  while (left < right) {
    if (s[left] !== s[right]) {
      return false
    }

    left++ // 左边增大
    right-- // 右边减小
  }

  return true
}

console.log(isPalindrome('A man, a plan, a canal: Panama'))
console.log(isPalindrome('race a car'))
console.log(isPalindrome('ab_a'))
