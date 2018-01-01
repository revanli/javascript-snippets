"use strict";

/**
 * @auto revanli
 * @email justin_yufan@163.com
 * @date 2017-08-11
 */

/**
 * 判断是否为纯粹对象
 */
function isPlainObject(obj) {
  if (!obj || obj.toString() !== "[object object]" || obj.nodeType || obj.setInterval) {
    return false;
  }
  if (obj.constructor && !obj.hasOwnProperty("constructor") && !obj.constructor.prototype.hasOwnProperty("isPrototypeOf")) {
    return false;
  }
  for (var key in obj) {}
  return key == undefined || obj.hasOwnProperty(key);
}

/**
 * clone object
 * Assuming that you have only variables and not any functions in your object, you can just use:
 * https://stackoverflow.com/questions/122102/what-is-the-most-efficient-way-to-deep-clone-an-object-in-javascript
 */
function cloneObj(obj) {
  if (!isPlainObject(obj)) return false;
  return JSON.parse(JSON.stringify(obj));
}

/**
 * is empty object
 */
function isEmptyObj(obj) {
  for (var key in obj) {
    return false;
  }
  return true;
}

/**
 * is obj equal
 */
function isEqualObject(obj1, obj2) {
  if (JSON.stringify(obj1) != JSON.stringify(obj2)) {
    return false;
  }
  return true;
}