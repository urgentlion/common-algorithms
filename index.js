const selectionSort = arr => {
    for(let i = 0; i < arr.length; i++) {
        let indexOfMin = i;
        
        for(let j = i+1; j < arr.length; j++) {
            if(arr[j] < arr[indexOfMin]) {
                indexOfMin = j;
            }
        }

        if(indexOfMin !== arr[i]) {
            let least = arr[indexOfMin];
            arr[indexOfMin] = arr[i];
            arr[i] = least;
        }
    } 
    return arr;
};

const result = selectionSort([5, 0, 37, -6, 32]);
console.log(result);