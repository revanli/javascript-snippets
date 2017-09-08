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