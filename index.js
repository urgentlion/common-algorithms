const selectionSort = arr => {
    for(let i = 0; i < arr.length; i++) {
        let indexOfLeast = i;

        for(let j = i + 1; j < arr.length; j++) {
            if(arr[j] < arr[indexOfLeast]) {
                indexOfLeast = j;
            }
        }

        if(indexOfLeast !== i) {
            let least = arr[indexOfLeast];
            arr[indexOfLeast] = arr[i];
            arr[i] = least;
        }
    }
    return arr;
};


const result = selectionSort([5, 0, 37, -6, 32]);
console.log(result);