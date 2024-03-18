/**
 * 手写 call
 */
// 判断 this 是不是函数
// 如果没有传递上下文，则默认为全局对象（例如浏览器中的 window）
// 将当前函数（调用 customCall 的函数）存储在传递的上下文对象中
// 使用上下文对象调用函数，并传入参数
// 删除临时添加的函数属性
// 返回函数执行的结果

Function.prototype.customCall = function (context, ...args) {
  if (typeof this !== 'function') {
    throw new TypeError('Error')
  }
  context = context || window
  const T = Symbol('tempId')
  context[T] = this
  const result = context[T](...args)
  delete context[T]
  return result
}

// 用例
const person = {
  name: 'John',
}

// 示例：定义一个函数
function sayHello(greeting) {
  console.log(`${greeting}, ${this.name}!`)
}

sayHello.customCall(person, 'Hello')
// sayHello.call(person, 'Hello')
