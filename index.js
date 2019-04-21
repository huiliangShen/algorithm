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
            let k = arr[minIndex];
            arr[minIndex] = arr[i];
            arr[i] = k;
        }
    }
}

function shellSort(arrs) {
    if (!Array.isArray(arrs)) {
        return;
    }
    const n = arrs.length;
    // 控制最外层的step
    for (let step = n >> 1; step > 0; step = step >> 1) {
        // 内层为插入排序算法
        for (let i = step; i < n; i++) {
            for (let j = i; j - step >= 0 && arrs[j] < arrs[j - step]; j -= step) {
                let k = arrs[j];
                arrs[j] = arrs[j-step];
                arrs[j-step] = k;
            }
        }
    }
}

var arrs =[ 1,
    1,
    3,
    28,
    2,
    9,
    11,
    16,
    3,
    14,
    36,
    6,
    32,
    44,
    34,
    44,
    2,
    43,
    72,
    4,
    120,
    11,
    61,
    3,
    56,
    66,
    9,
    13,
    115,
    11,
    62,
    63,
    134,
    4,
    14,
    17,
    18,
    127,
    31,
    63,65];
shellSort(arrs);
console.log(arrs)