/**
 * 手写 new
 */

// 1.创建一个新的空对象并将其原型指向构造函数的原型
// 2.执行构造函数，并将新对象作为 this 上下文
// 3.如果构造函数返回一个对象，则返回该对象；否则，返回新创建的对象

const customNew = (fn, ...args) => {
  const obj = Object.create(fn.prototype) // 核心代码
  const result = fn.apply(obj, args)
  return typeof result === 'object' && result !== null ? result : obj
}

// 用例
function Person(name, age) {
  this.name = name
  this.age = age
}

const john = customNew(Person, 'John', 18)
console.log(john.name)
console.log(john.age)
