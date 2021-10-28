const selectionSort = arr => {
    for(let i = 0; i < arr.length; i++) {
        let indexOfMin = i;

        for(let j = i + 1; j < arr.length; j++) {
            if(arr[indexOfMin] > arr[j]) {
                indexOfMin = j;
            }
        }

        if(indexOfMin !== i) {
            let least = arr[indexOfMin];
            arr[indexOfMin] = arr[i];
            arr[i] = least;
        }
    }
    return arr;
};

const result = selectionSort([8, 10, 7, -4, 0, 23]);
console.log(result);