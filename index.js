const mergeSort = arr => {
    if(arr.length === 1) {
        return arr;
    }

    const divide = arr.length / 2;

    const left = arr.slice(0, divide);
    const right = arr.slice(divide);

    //merge helper function
    return merge(mergeSort(left), mergeSort(right));
};

const merge = (left, right) => {

    mergedArray = [];

    while(left.length && right.length) {
        if(left[0] < right[0]) {
            mergedArray.push(left.shift());
        } else {
            mergedArray.push(right.shift());
        }
    }
    return [ ...mergedArray, ...left, ...right];
};

const result = mergeSort([10, 0 , 97, -6, 5]);
console.log(result);

const result2 = merge([3,4], [-2,13]);
console.log(result2);
