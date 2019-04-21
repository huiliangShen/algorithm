/**
 * Created by shl on 2019/4/21.
 */
import {swap} from '../lib/tool'

/**
 * 希尔排序，插入排序的优化
 * */
export function shellSort(arrs) {
    if (!Array.isArray(arrs)) {
        return;
    }
    const n = arrs.length;
    // 控制最外层的step
    for (let step = n >> 1; step > 0; step = step >> 1) {
        // 内层为插入排序算法
        for (let i = step; i < n; i++) {
            for (let j = i; j - step >= 0 && arrs[j] < arrs[j - step]; j -= step) {
                swap(arrs, j, j-step)
            }
        }
    }
}
