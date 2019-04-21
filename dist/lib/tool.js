"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.swap = swap;
exports.generateRandomArray = generateRandomArray;
exports.testSort = testSort;
exports.copy = copy;

/**
 * chang index value
 * @param {Array} arrs 
 * @param {left index} left 
 * @param {right index} right 
 */
function swap(arrs, left, right) {
  let k = arrs[left];
  arrs[left] = arrs[right];
  arrs[right] = k;
}
/**
 * 生成随机数组
 * @param {array length} n 
 * @param {minValue} minValue 
 * @param {maxValue} maxValue 
 */


function generateRandomArray(n, minValue, maxValue) {
  if (minValue > maxValue) {
    return false;
  }

  let result = [];
  const choices = maxValue - minValue + 1;

  for (let i = 0; i < n; i++) {
    result[i] = Math.floor(Math.random() * choices + minValue);
  }

  return result;
}
/**
 * 测试数组性能
 * @param {functionName} 排序算法名称
 * @param {f} 排序算法的引用
 * @param {array} 数组
 * */


function testSort(functionName, f, array) {
  let t1 = +new Date();
  f(array);
  let t2 = +new Date();

  if (!isSorted(array)) {
    console.log("".concat(functionName, ": error"));
    return;
  }

  let tempspan = (t2 - t1) / 1000;
  console.log("".concat(functionName, ": ").concat(tempspan, "s"));
}

function isSorted(arrs) {
  for (let i = 0; i < arrs.length; i++) {
    if (arrs[i] > arrs[i + 1]) {
      return false;
    }
  }

  return true;
} // 简单实现拷贝功能


function copy(arrs) {
  return JSON.parse(JSON.stringify(arrs));
}