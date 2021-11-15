const mergeSort= arr => {
    if(arr.length === 1) {
        return arr;
    }

    const center = arr.length / 2;

    const left = arr.slice(0, center);
    const right = arr.slice(center);

    //helper function merge
    return merge(mergeSort(left), mergeSort(right));
};

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
const result = mergeSort([9, 0 , -45, 6]);
console.log(result);

const results2 = merge([9, 0] , [-45, 6]);
console.log(results2);