const mergeSort = arr => {
    if(arr.length === 1) {
        return arr;
    }

    const center = arr.length / 2;

    const left = arr.slice(0, center);
    const right = arr.slice(center);

    return merge(mergeSort(left), mergeSort(right));
}

const merge = (left, right) => {
    const results = [];

    while(left.length && right.length) {
        if(left[0] < right[0]) {
             results.push(left.shift());
        } else {
             results.push(right.shift());
        }
    }
    return [...results, ...left, ...right];
};

const result = merge([-33, 2], [0, -6]);
console.log(result);
const result2 = mergeSort([7, 3, -12, 5]);
console.log(result2);