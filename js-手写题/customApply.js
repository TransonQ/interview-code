Function.prototype.customApply = function (context, args) {
  // 1. 检查this是否是函数
  if (typeof this !== 'function') {
    throw new TypeError('Error')
  }
  // 2. 创建一个临时属性
  const tempProp = Symbol('tempId')
  // 3. 将this赋值给临时id
  context[tempProp] = this
  // 4. 执行函数
  const result = context[tempProp](...args)
  // 5. 删除临时属性
  delete context[tempProp]
  // 6. 返回执行结果
  return result
}

function greet(name) {
  return 'Hello, ' + name + "! I'm " + this.job
}

const person = {
  job: 'a developer',
}

// 使用 customApply 方法调用 greet 函数，并将 person 对象作为上下文
console.log(greet.customApply(person, ['Alice']))
console.log(greet.apply(person, ['Alice']))
// // 'Hello, Alice! I\'m a developer'
