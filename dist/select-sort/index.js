"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.selectSort = selectSort;

var _tool = require("../lib/tool");

/**
 * 排序算法之选择排序
 * 原理：每次循环找到数组中最小值的下标，将所选到的最小值替换
 * @param {*} arr 
 */
function selectSort(arr) {
  if (!Array.isArray(arr)) {
    return new Error('not Array');
  }

  let n = arr.length;

  for (let i = 0; i < n; i++) {
    let minIndex = i;

    for (let j = i + 1; j < n; j++) {
      if (arr[minIndex] > arr[j]) {
        minIndex = j;
      }
    }

    if (minIndex !== i) {
      (0, _tool.swap)(arr, minIndex, i);
    }
  }
}

let arrs = (0, _tool.generateRandomArray)(10000, 1, 10000);
(0, _tool.testSort)('selectSort', selectSort, arrs);