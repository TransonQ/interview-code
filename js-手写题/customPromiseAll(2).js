/**
 * 手写 promise
 */

const customPromiseAll = (promiseArray) => {
  return new Promise((resolve, reject) => {
    if (!Array.isArray(promiseArray)) {
      throw TypeError('必须是数组')
    }

    if (promiseArray.length === 0) {
      return []
    }

    let resluts = []
    let count = 0

    promiseArray.forEach((promise, index) => {
      promise
        .then((res) => {
          resluts[index] = res
          count++
          if (count === promiseArray.length) {
            resolve(resluts)
          }
        })
        .catch((error) => {
          reject(error)
        })
    })
  })
}

// 示例用法
const promise1 = new Promise((resolve) =>
  setTimeout(() => resolve('Promise 1 已完成'), 1000)
)
const promise2 = new Promise((resolve) =>
  setTimeout(() => resolve('Promise 2 已完成'), 2000)
)
const promise3 = new Promise((resolve) =>
  setTimeout(() => resolve('Promise 3 已完成'), 3000)
)

customPromiseAll([promise1, promise2, promise3])
  .then((results) => {
    console.log('所有 Promise 都已完成:', results)
  })
  .catch((error) => {
    console.error('至少一个 Promise 被拒绝:', error)
  })
