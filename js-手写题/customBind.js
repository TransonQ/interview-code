Function.prototype.customBind = function (context) {
  // 1. 检查this是否是函数
  // 2. 检查context是否存在,否则设置为window
  // 3. 创建一个唯一属性
  // 4. 将this赋值给临时id
  // 5. 返回一个改变 this 指向的函数
  if (typeof this !== 'function') {
    throw new TypeError('Error')
  }
  context = context || window

  const uniqProp = Symbol('tempId')

  context[uniqProp] = this

  // return function (args) {
  //   return context[uniqProp](args)
  // }

  return (args) => context[uniqProp](args)
}

// 测试用例
function greet(name) {
  return 'Hello, ' + name + '! I am ' + this.job
}


const person = {
  job: 'a developer',
}

const bindGreet = greet.customBind(person)
console.log(bindGreet('Tom'))

const infactGreet = greet.bind(person)
console.log(infactGreet('Tom'))

// // "Hello, Tom! I am a developer"
