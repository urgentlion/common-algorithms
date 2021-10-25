const chunk = (arr, size) => {
    const array = [];

    for(let el of arr) {
        const last = array[array.length - 1];

        if(!last || last.length === size) {
            array.push([el]);
        } else {
            last.push(el);
        }
    }
    return array;
};

const result = chunk([1,2,3,4,], 2);
console.log(result);