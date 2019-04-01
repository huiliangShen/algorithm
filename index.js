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
            if (minIndex !== i) {
                let k = arr[minIndex];
                arr[minIndex] = arr[i];
                arr[i] = k;
            }
        }
    }
}

let arrs = [9,8,7,6,5,4,3,2,1];
selectSort(arrs);
console.log(arrs);