"use strict";

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
  var mergedArray = [];
  var len = Math.max(array1.length, array2.length);
  for (var i = 0; i < len; i++) {
    if (i < array1.length) {
      mergedArray.push(array1[i]);
    }
    if (i < array2.length) {
      mergedArray.push(array2[i]);
    }
  }
  return mergedArray;
}

/**
 *  Calculates the greatest common denominator (gcd) of an array of numbers
 */
function arrayGcd(arr) {
  function gcd(x, y) {
    return !y ? x : gcd(y, x % y);
  }
  return arr.reduce(function (a, b) {
    gcd(a, b);
  });
}

/**
 * Given a key and arguments, call them when given a context. Primarily userful
 * in compositio. Use a closure to call a stored key with stored arguments
 */
var call = function call(key) {
  for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  return function (context) {
    return context[key].apply(context, args);
  };
};

window.call = call;