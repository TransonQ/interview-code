/**
 * 实现深拷贝
 */

const deepClone = (obj) => {
  if (!obj || typeof obj !== 'object') {
    return obj
  }

  const newObj = Array.isArray(obj) ? [] : {}

  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      newObj[key] =
        typeof obj[key] === 'object' ? deepClone(obj[key]) : obj[key]
    }
  }

  return newObj
}

const a = {
  name: 'a',
  age: 18,
  info: {
    height: 180,
  },
}

const b = deepClone(a)
a.age = 19
console.log('b: ', b)
