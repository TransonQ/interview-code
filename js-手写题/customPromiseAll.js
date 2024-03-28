/**
 * 手写 promise.all
 */

// 自定义 Promise.all() 函数
function customPromiseAll(promises) {
  return new Promise((resolve, reject) => {
    // 判断传入的参数是否是一个可迭代对象
    if (!Symbol.iterator in Object(promises)) {
      reject(new TypeError('参数必须是一个可迭代对象'))
    }

    let count = 0
    const results = []

    // 如果传入的 Promise 数组为空，则直接返回一个解决状态的 Promise
    if (promises.length === 0) {
      resolve(results)
    }

    // 使用 forEach 遍历每一个 Promise 对象
    promises.forEach((promise, index) => {
      // 对每个 Promise 对象执行 then 方法
      promise
        .then((result) => {
          // 将 Promise 对象的解决值存入结果数组中
          results[index] = result
          count++

          // 如果所有 Promise 都已经解决，则将结果数组作为参数解析给新的 Promise
          if (count === promises.length) {
            resolve(results)
          }
        })
        .catch((error) => {
          // 如果有任何一个 Promise 被拒绝，则将新 Promise 对象拒绝，并传入拒绝原因
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
