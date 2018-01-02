"use strict";

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

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

/**
 * Changes a function that accepts an array into a variadic function.
 * Given a function, return a closure that collects all inputs into an array-accepting function.
 */
var collectInfo = function collectInfo(fn) {
  return function () {
    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    return fn(args);
  };
};

/**
 * Flip takes a function as an argument, then makes the first argument the last
 * Return a closure that takes variadic inputs, and splices the last argument to make it the first argument before applying the rest.
 */
var flip = function flip(fn) {
  return function () {
    for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      args[_key3] = arguments[_key3];
    }

    return fn.apply(undefined, [args.pop()].concat(args));
  };
};

/**
 * pipeFunctions
 * Use Array.reduce() with the spread operator(...) to perform left-to-right function composition
 */
var pipeFunctions = function pipeFunctions() {
  for (var _len4 = arguments.length, fns = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
    fns[_key4] = arguments[_key4];
  }

  return fns.reduce(function (f, g) {
    return function () {
      return g(f.apply(undefined, arguments));
    };
  });
};

/**
 * promisify
 * Converts an asynchronous function to return a promise
 * 
 */
var promisify = function promisify(func) {
  return function () {
    for (var _len5 = arguments.length, args = Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
      args[_key5] = arguments[_key5];
    }

    return new Promise(function (resolve, reject) {
      return func.apply(undefined, args.concat([function (err, result) {
        return err ? reject(err) : resolve(result);
      }]));
    });
  };
};

/**
 * spreadOver
 * Takes a variadic function and returns a closure that accepts an array of arguments to map to the inputs of the function.
 */
var spreadOver = function spreadOver(fn) {
  return function (argsArr) {
    return fn.apply(undefined, _toConsumableArray(argsArr));
  };
};

/**
 * chunk
 * Chunks an array into smaller arrays of a specified size
 * 
 */
var chunk = function chunk(arr, size) {
  return Array.from({ length: Math.ceil(arr.length / size) }, function (v, i) {
    return arr.slice(i * size, i * size + size);
  });
};

/**
 * Removes falsely values from an array
 * 
 */
var compact = function compact(arr) {
  return arr.filter(Boolean);
};

/**
 * counts the occurrences of a value in an array
 */
var countOccvrrences = function countOccvrrences(arr, value) {
  return arr.reduce(function (a, v) {
    return v === value ? a + 1 : a + 0;
  }, 0);
};