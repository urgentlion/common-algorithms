const mergeSort = arr => {
    if(arr.length === 1) {
        return arr;
    }

    let center = arr.length / 2;
    let left = arr.slice(0, center);
    let right = arr.slice(center);

    //now merge the subdivided arrays into sorted order
    return merge(mergeSort(left), mergeSort(right));
};

const merge = (left, right) => {
    const array = [];

    while(left.length && right.length) {
        if(left[0] < right[0]) {
            array.push(left.shift());
        } else {
            array.push(right.shift());
        }
    }
    return [...array, ...left, ...right];
};


const result = mergeSort([10, 0 , 97, -6, 5]);
console.log(result);

const result2 = merge([3,4], [-2,13]);
console.log(result2);