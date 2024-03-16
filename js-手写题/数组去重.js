const arr = [1, [2.1, 2.2], [3.1, [3.2, 3.3]]]

const flatten = (arr) => {
  // return arr.reduce((a, b) => a.concat(Array.isArray(b) ? flatten(b) : b), [])
  // return arr.toString().split(',')
  return arr.flat(Infinity)
}

console.log(flatten(arr)) // [ 1, 2.1, 2.2, 3.1, 3.2, 3.3 ]
