import {swap} from '../lib/tool';
/**
 * 排序算法之选择排序
 * 原理：每次循环找到数组中最小值的下标，将所选到的最小值替换
 * @param {*} arr 
 */
export function selectSort(arr) {
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
            if (minIndex !== i) {
                swap(arr, minIndex, i);
            }
        }
    }
}

let arrs = [9,8,7,6,5,4,3,2,1];
selectSort(arrs);
console.log(arrs);
