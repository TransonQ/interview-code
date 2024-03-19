/**
 * 节流函数
 */

function throttle(fn, delay) {
  let mark = Date.now()

  return (...args) => {
    if (Date.now() - mark >= delay) {
      fn(...args)
      mark = Date.now() // 重新执行后更新 mark 基准值
    }
  }
}

// 测试
const fn = (a, b) => {
  console.log(a + b)
}

const throttledFn = throttle(fn, 3000)

throttledFn(1, 5)
