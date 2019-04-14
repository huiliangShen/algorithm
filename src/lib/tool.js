/**
 * chang index value
 * @param {Array} arrs 
 * @param {left index} left 
 * @param {right index} right 
 */
export function swap(arrs, left, right) {
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
export function generateRandomArray(n, minValue, maxValue) {
    if (minValue > maxValue){
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
export function testSort(functionName, f, array) {
    let t1 = +new Date();
    f(array);
    let t2 = +new Date();
    if (!isSorted(array)) {
        console.log(`${functionName}: error`);
        return;
    }
    let tempspan = (t2 - t1) / 1000;
    console.log(`${functionName}: ${tempspan}s`);
}

function isSorted(arrs) {
    for (let i = 0; i < arrs.length; i++) {
        if (arrs[i] > arrs[i+1]){
            return false;
        }
    }
    return true;
}

// 简单实现拷贝功能
export function copy(arrs) {
    return JSON.parse(JSON.stringify(arrs));
}