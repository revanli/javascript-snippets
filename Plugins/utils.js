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

  return {
    call, collectInto, flip, pipeFunctions, promisify, spreadOver, chunk, compact,
    countBy
  };

})));