const bubbleSort = arr => {
    for(let i = 0; i < arr.length; i++) {
        for(let j = 0; j < (arr.length - i - 1); j++) {
            if(arr[j] > arr[j+1]) {
                let least = arr[j+1];
                arr[j+1] = arr[j];
                arr[j] = least;
            }
        }
    }
    return arr;
};

const result = bubbleSort([8 ,0 ,-10 ,2 ,37 ,14]);
console.log(result);