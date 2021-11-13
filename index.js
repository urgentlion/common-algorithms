const mergeSort = arr => {
    if(arr.length === 1) {
        return arr;
    }

    //subdivide
    const center = arr.length / 2;

    const left = arr.slice(0, center);
    const right = arr.slice(center);

    return merge(mergeSort(left), mergeSort(right));
};

const merge = (left, right) => {
    const results = [];

    while(left.length && right.length) {
        if(left[0] < right[0]) {
            results.push(left.shift())
        } else {
            results.push(right.shift());
        }
    }
    return [...results, ...left, ...right];
}

const result = mergeSort([10, 0 , 97, -6]);
console.log(result);

const result2 = merge([3,4], [-2,13]);
console.log(result2);
