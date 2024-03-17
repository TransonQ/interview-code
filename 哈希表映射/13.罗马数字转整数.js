/** 
 * 找规律-罗马数字转整数
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
给定一个罗马数字,将其转换成整数。
 */

// 罗马数字转整数
var romanToInt = function (s) {
  const map = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  }
  // 错误: 没有考虑特殊情况
  // return s.split('').reduce((p, c) => {
  //   return p + (map[c] || 0)
  // }, 0)
  let sum = 0
  /**
   * 核心在于: 从左往右,如果当前数比右边的小,则减去，否则加上
   */
  for (let i = 0; i < s.length; i++) {
    if (map[s[i]] < map[s[i + 1]]) {
      sum -= map[s[i]]
    } else {
      sum += map[s[i]]
    }
  }
  return sum
}

console.log(romanToInt('III')) // 3
console.log(romanToInt('IV')) // 4
console.log(romanToInt('IX')) // 9
console.log(romanToInt('LVIII')) // 58
console.log(romanToInt('MCMXCIV')) // 1994
