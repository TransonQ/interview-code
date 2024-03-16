const typeIs = (obj) => {
  const type = typeof obj

  if (type !== 'object') {
    return type
  }
  // return Object.prototype.toString.call(obj).replace(/\[object (.*?)\]/g, '$1').toLowerCase()
  return Object.prototype.toString.call(obj).slice(8, -1).toLowerCase()
}

// test
console.log(typeIs(null)) // null
console.log(typeIs(undefined)) // undefined
console.log(typeIs(0)) // number
console.log(typeIs('tom')) // string
console.log(typeIs(true)) // boolean
console.log(typeIs({})) // object
console.log(typeIs([])) // array
console.log(typeIs(() => {})) // function
console.log(typeIs(Math)) // math
console.log(typeIs(new Date())) // date
console.log(typeIs(new Error()))  // error
console.log(typeIs(new Map()))  // map
console.log(typeIs(new Set()))  // set
console.log(typeIs(new RegExp('a')))  // regexp
console.log(typeIs(new Promise(() => {})))  // promise
console.log(typeIs(new WeakMap()))  // weakmap
console.log(typeIs(new WeakSet()))  // weakset
console.log(typeIs(new ArrayBuffer(8)))  // arraybuffer
console.log(typeIs(new DataView(new ArrayBuffer(8))))  // dataview
