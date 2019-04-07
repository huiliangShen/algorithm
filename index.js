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

let arrs = [2, 2, 2, 4, 8, 6, 8, 9, 10, 10, 2, 11, 11, 11, 16, 17, 7, 18, 19, 20 ];
selectSort(arrs);
console.log(arrs);