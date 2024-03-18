/**
 * 118.杨辉三角
 * 给定一个非负整数 numRows，生成杨辉三角的前 numRows 行。
 * 在杨辉三角中，每个数是它左上方和右上方的数的和。
 * 示例:
 * 输入: 5
 * 输出: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
 */

/** 
 * 核心:
 * - 想办法表示上一行
 * - 想办法表示当前行的数组
 * - 上一行从左边第二个元素开始,当前行的第二个元素=上一行的第一个元素+上一行的第二个元素,以此类推
 */

const generate = (numRows) => {
  if (numRows === 1) return [[1]]
  if (numRows === 2) return [[1], [1, 1]]

  let res = [[1], [1, 1]] // 纵向数组(外层数组): index: 0,1

  for (let i = 2; i < numRows; i++) {
    //  i: 每一行的下标,从 2 开始(第三行开始)
    // 横向数组(内层数组)
    let temp = [1] // 当前行左边第一个元素为 1

    for (let j = 1; j < res[i - 1].length; j++) {
      // j: 每一列的下标,从 1 开始(第二个元素开始)
      const row = res[i - 1] // 上一行
      const left = row[j - 1] // 上一行左边的元素
      const right = row[j] // 上一行右边的元素

      temp.push(left + right) // 当前行的元素(除了第一个和最后一个都是 1)
    }
    temp.push(1) // 当前行右边最后一个元素为 1
    res.push(temp) // 完成当前行的元素填充
  }
  return res
}

// 用例
console.log(generate(5))
