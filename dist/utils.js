'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

/**
 * 实用javascript代码片段
 * inspired by https://github.com/Chalarangelo/30-seconds-of-code
 */

(function (global, factory) {
  if (typeof define === 'function' && define.amd) {
    //AMD
    define(factory);
  } else if ((typeof exports === 'undefined' ? 'undefined' : _typeof(exports)) === 'object' && typeof module !== 'undefined') {
    //Node, CommonJS
    module.exports = factory();
  } else {
    //浏览器全局变量(global 即 window)
    global._utils = factory(global);
  }
})(window, function () {

  'use strict';

  var call = function call(key) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    return function (context) {
      return context[key].apply(context, args);
    };
  };

  var collectInto = function collectInto(fn) {
    return function () {
      for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      return fn(args);
    };
  };

  var flip = function flip(fn) {
    return function () {
      for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        args[_key3] = arguments[_key3];
      }

      return fn.apply(undefined, [args.pop()].concat(args));
    };
  };

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

  var spreadOver = function spreadOver(fn) {
    return function (argsArr) {
      return fn.apply(undefined, _toConsumableArray(argsArr));
    };
  };

  var chunk = function chunk(arr, size) {
    return Array.from({ length: Math.ceil(arr.length / size) }, function (v, i) {
      return arr.slice(i * size, i * size + size);
    });
  };

  var compact = function compact(arr) {
    return arr.filter(Boolean);
  };

  var countBy = function countBy(arr, fn) {
    return arr.map(typeof fn === 'function' ? fn : function (val) {
      return val[fn];
    }).reduce(function (acc, val, i) {
      acc[val] = (acc[val] || 0) + 1;
      return acc;
    }, {});
  };

  var countOccurences = function countOccurences(arr, val) {
    return arr.reduce(function (a, v) {
      return v === val ? a + 1 : a + 0;
    }, 0);
  };

  var deepFlatten = function deepFlatten(arr) {
    var _ref;

    return (_ref = []).concat.apply(_ref, _toConsumableArray(arr.map(function (v) {
      return Array.isArray(v) ? deepFlatten(v) : v;
    })));
  };

  var difference = function difference(a, b) {
    var s = new Set(b);
    return a.filter(function (x) {
      return !s.has(x);
    });
  };

  var differenceWith = function differenceWith(arr, val, comp) {
    return arr.filter(function (a) {
      return val.findIndex(function (b) {
        return comp(a, b);
      }) === -1;
    });
  };

  var distinctValuesOfArray = function distinctValuesOfArray(arr) {
    return [].concat(_toConsumableArray(new Set(arr)));
  };

  var dropElements = function dropElements(arr, func) {
    while (arr.length > 0 && !func(arr[0])) {
      arr = arr.slice(1);
    }return arr;
  };

  var dropRight = function dropRight(arr) {
    var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
    return arr.slice(0, -n);
  };

  return {
    call: call, collectInto: collectInto, flip: flip, pipeFunctions: pipeFunctions, promisify: promisify, spreadOver: spreadOver, chunk: chunk, compact: compact,
    countBy: countBy, countOccurences: countOccurences, deepFlatten: deepFlatten, difference: difference, differenceWith: differenceWith, distinctValuesOfArray: distinctValuesOfArray,
    dropElements: dropElements, dropRight: dropRight
  };
});