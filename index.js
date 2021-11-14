const mergeSort = arr => {
    if(arr.length === 1) {
        return arr;
    }

    const center = arr.length / 2;

    const left = arr.slice(0, center);
    const right = arr.slice(center);

    return merge(mergeSort(left), mergeSort(right));
};

const merge = (left, right) => {
    const list = [];

    while(left.length && right.length) {
        if(left[0] < right[0]) {
            list.push(left.shift());
        } else {
            list.push(right.shift());
        }
    }
    return [...list, ...left, ...right];
};

const result = merge([3,6], [-9,46]);
console.log(result);

const result2 = mergeSort([9, 4, -98, 0]);
console.log(result2);