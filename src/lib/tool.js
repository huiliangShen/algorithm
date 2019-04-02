export function swap(arrs, left, right) {
    let k = arrs[left];
    arrs[left] = arrs[right];
    arrs[right] = k;
}