/**
 * Created by shl on 2019/4/14.
 */
import {swap} from '../lib/tool';
/**
 * 插入排序
 * */
export function insertSort(arrs) {
    if (!Array.isArray(arrs)) {
        return;
    }
    const n = arrs.length;
    for (let i = 1; i< n; i++) {
        for(let j = i;j > 0 && arrs[j] < arrs[j - 1]; j--) {
            swap(arrs, j, j - 1);
        }
    }
}

/**
 * 插入排序优化
 * 每次循环前，copy一份值，内循环判断j-1>j，并将j-1值后移一位，以此类推
 * 初始 [8] [7] [1] [2] [3]
 * 第一轮
 * [8] [7] [1] [2] [3]
 *      ↓
 *   copy[7]
 * [8]→[8] [1] [2] [3]
 *
 * [7] [8] [1] [2] [3]
 * */
export function insertSortOpt(arrs) {
    if(!Array.isArray(arrs)) {
        return;
    }
    const n = arrs.length;
    for (let i = 1; i< n; i++) {
        let min = arrs[i];
        let j;
        for(j = i;j > 0 && min < arrs[j - 1]; j--) {
            arrs[j] = arrs[j - 1];
        }
        arrs[j] = min;
    }
}

