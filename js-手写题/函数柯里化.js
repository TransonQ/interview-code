/**
 * 函数柯里化
 */

// 定义一个通用的柯里化函数
function curry(fn) {
  return function curried(...args) {
    // 如果传入的参数个数大于或等于原函数的参数个数，则直接执行原函数
    if (args.length >= fn.length) {
      return fn.apply(this, args)
    } else {
      // 如果传入的参数个数小于原函数的参数个数，则递归返回一个新的函数，继续接收参数
      return function (...moreArgs) {
        return curried.apply(this, args.concat(moreArgs))
      }
    }
  }
}

// 示例函数
function add(x, y, z) {
  return x + y + z
}

// 使用柯里化函数
const curriedAdd = curry(add)

// 调用柯里化后的函数
console.log(curriedAdd(2)(3)(4)) // 输出: 9
console.log(curriedAdd(2, 3)(4)) // 输出: 9
console.log(curriedAdd(2)(3, 4)) // 输出: 9
