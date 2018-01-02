/**
 * @auto revanli
 * @email justin_yufan@163.com
 * @date 2017-09-08
 */

/**
 * merge two array like zipper
 * for example: array1 = ['a', 'b', 'c'], array2 = ['1', '2', '3']  => ['a', '1', 'b', '2', 'c', '3'] 
 * @param  {Array} array1 [description]
 * @param  {Array} array2 [description]
 * @return {Array}   [description]
 */
function mergeZipper(array1, array2) {
  var mergedArray = []
  var len = Math.max(array1.length, array2.length)
  for (var i = 0; i < len; i++) {
    if (i < array1.length) {
      mergedArray.push(array1[i])
    }
    if (i < array2.length) {
      mergedArray.push(array2[i])
    }
  }
  return mergedArray
}

/**
 *  Calculates the greatest common denominator (gcd) of an array of numbers
 */
function arrayGcd (arr) {
  function gcd (x, y) {
    return !y ? x : gcd(y, x % y);
  }
  return arr.reduce(function (a, b) {
    gcd(a, b);
  })
}

/**
 * Given a key and arguments, call them when given a context. Primarily userful
 * in compositio. Use a closure to call a stored key with stored arguments
 */
const call = (key, ...args) => context => context[key](...args)

/**
 * Changes a function that accepts an array into a variadic function.
 * Given a function, return a closure that collects all inputs into an array-accepting function.
 */
const collectInfo = fn => (...args) => fn(args)

/**
 * Flip takes a function as an argument, then makes the first argument the last
 * Return a closure that takes variadic inputs, and splices the last argument to make it the first argument before applying the rest.
 */
const flip = fn => (...args) => fn(args.pop(), ...args)

/**
 * pipeFunctions
 * Use Array.reduce() with the spread operator(...) to perform left-to-right function composition
 */
const pipeFunctions = (...fns) => fns.reduce((f, g) => (...args) => g(f(...args)))

/**
 * promisify
 * Converts an asynchronous function to return a promise
 * 
 */
const promisify = func => (...args) => 
  new Promise((resolve, reject) => 
    func(...args, (err, result) => (err ? reject(err) : resolve(result)))
  )

/**
 * spreadOver
 * Takes a variadic function and returns a closure that accepts an array of arguments to map to the inputs of the function.
 */
const spreadOver = fn => argsArr => fn(...argsArr)

/**
 * chunk
 * Chunks an array into smaller arrays of a specified size
 * 
 */
const chunk = (arr, size) => 
  Array.from({ length: Math.ceil(arr.length / size) }, (v, i) => 
    arr.slice(i * size, i * size + size)
  )

/**
 * Removes falsely values from an array
 * 
 */
const compact = arr => arr.filter(Boolean)

/**
 * counts the occurrences of a value in an array
 */
const countOccvrrences = (arr, value) => arr.reduce((a, v) => (v === value ? a + 1 : a + 0), 0)

