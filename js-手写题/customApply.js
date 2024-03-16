Function.prototype.customApply = function (context, args) {
  // 1. 检查this是否是函数
  // 2. 检查context是否存在,否则设置为window
  // 3. 创建一个临时属性
  // 4. 将this赋值给临时id
  // 5. 执行函数
  // 6. 删除临时属性
  // 7. 返回执行结果

  if (typeof this !== 'function') {
    throw new TypeError('Error')
  }

  context = context || window

  const tempProp = Symbol('tempId')

  context[tempProp] = this

  const result = context[tempProp](...args)

  delete context[tempProp]

  return result
}

// 测试用例
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
