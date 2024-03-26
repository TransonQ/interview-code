// 方法一
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * i) // 生成 0 到 i 之间的随机索引
    ;[array[i], array[j]] = [array[j], array[i]] // 交换当前元素和随机位置的元素
  }
  return array
}

const myArray1 = [1, 2, 3, 4, 5]

console.log(shuffleArray(myArray1))

// 方法二
function randomSort(a, b) {
  return Math.random() - 0.5 // 返回 -0.5 到 0.5 之间的随机数
}

const myArray2 = [1, 2, 3, 4, 5]
console.log(myArray2.sort(randomSort))
