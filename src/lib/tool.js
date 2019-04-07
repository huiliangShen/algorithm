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