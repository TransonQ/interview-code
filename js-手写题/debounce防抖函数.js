/**
 * 防抖函数
 */

function debounce(fn, delay) {
  let timer = null

  return (...args) => {
    if (timer) clearTimeout(timer)

    timer = setTimeout(() => {
      fn(...args)
    }, delay)
  }
}

// 测试
const fn = (a, b) => {
  console.log(a + b)
}

const debouncedFn = debounce(fn, 3000)

debouncedFn(1, 5)
