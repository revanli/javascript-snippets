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
 * detect whether a parameter is Array
 */
function isArray (param) {
  if (Array.isArray) {
    return Array.isArray(param);
  }
  var objectToStringFn = Object.prototype.toString;
  var arrayToStringResult = objectToStringFn.call([]);

  return objectToStringFn.call(param) === arrayToStringResult;
}

/**
 * detect whether patameter is Array
 * @return {Function} return a function can use
 *
 * usage:
 * var a = ['test'], isArray(a) // true
 */
var isArray = (function () {
  if (Array.isArray) {
    return Array.isArray
  }
  var objectToStringFn = Object.prototype.toString;
  var arrayToStringResult = objectToStringFn.call([]);

  return function (subject) {
    return objectToStringFn.call(subject) === arrayToStringResult;
  }
}());

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
 * chunk Array into pieces with same number
 */
function chunkArr (arr, chunk) {
  if (!chunk) {
    return arr
  }
  var i, j, result = [];
  for (i = 0, j = arr.length; i < j; i+=chunk) {
    result.push(arr.slice(i, i+chunk));
  }
  return result
}


