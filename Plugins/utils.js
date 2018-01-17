/**
 * 实用javascript代码片段
 * inspired by https://github.com/Chalarangelo/30-seconds-of-code
 */

(function (global, factory) {
  if (typeof define === 'function' && define.amd) {
    //AMD
    define(factory);
  } else if (typeof exports === 'object' && typeof module !== 'undefined') {
    //Node, CommonJS
    module.exports = factory();
  } else {
    //浏览器全局变量(global 即 window)
    global._utils = factory(global);
  }
}(window, (function () {

  'use strict';

  const call = (key, ...args) => context => context[key](...args);

  const collectInto = fn => (...args) => fn(args);

  const flip = fn => (...args) => fn(args.pop(), ...args);

  const pipeFunctions = (...fns) => fns.reduce((f, g) => (...args) =>g(f(...args)));

  const promisify = func => (...args) =>
    new Promise((resolve, reject) =>
      func(...args, (err, result) => (err ? reject(err) : resolve(result)))
    );

  const spreadOver = fn => argsArr => fn(...argsArr);

  const chunk = (arr, size) => 
    Array.from({ length: Math.ceil(arr.length / size) }, (v, i) =>
      arr.slice(i * size, i * size + size)
    );

  const compact = arr => arr.filter(Boolean);

  const countBy = (arr, fn) =>
    arr.map(typeof fn === 'function' ? fn : val => val[fn]).reduce((acc, val, i) => {
      acc[val] = (acc[val] || 0) + 1;
      return acc;
    }, {});

  const countOccurences = (arr, val) => arr.reduce((a, v) => (v === val ? a + 1 : a + 0), 0);

  const deepFlatten = arr => [].concat(...arr.map(v => Array.isArray(v) ? deepFlatten(v) : v));

  const difference = (a, b) => {
    const s = new Set(b);
    return a.filter(x => !s.has(x));
  }

  const differenceWith = (arr, val, comp) => arr.filter(a => val.findIndex(b => comp(a, b)) === -1);

  const distinctValuesOfArray = arr => [...new Set(arr)];

  const dropElements = (arr, func) => {
    while (arr.length > 0 && !func(arr[0])) arr = arr.slice(1)
    return arr;
  }

  const dropRight = (arr, n = 1) => arr.slice(0, -n)

  return {
    call, collectInto, flip, pipeFunctions, promisify, spreadOver, chunk, compact,
    countBy, countOccurences, deepFlatten, difference, differenceWith, distinctValuesOfArray,
    dropElements, dropRight
  };

})));