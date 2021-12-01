const mergeSort = arr => {
    if(arr.length === 1) {
        return arr;
   };

    //helper variables
    const center = arr.length / 2;
    const left = arr.slice(0, center);
    const right = arr.slice(center);
    
    //merge the subdivided arrays
    return merge(mergeSort(left), mergeSort(right));

};

const merge = (left, right) => {
    const array = [];

    while(left.length && right.length) {
        if(left[0] < right[0]) {
            array.push(left.shift());
        } else {
            array.push(right.shift())
        }
    }
    return [...array, ...left, ...right];
};


const result = mergeSort([10, 0 , 97, -6, 5]);
console.log(result);

const result2 = merge([3,4], [-2,13]);
console.log(result2);