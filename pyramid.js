const pyramid = n => {
    let midpoint = Math.floor((n * 2 - 1) / 2);

    for(let r = 0; r < n; r++) {
        let level = '';

        for(let c = 0; c < n * 2 - 1; c++) {
            if(midpoint - r <= c && midpoint + r >= c) {
                level += '#';
            } else {
                level += ' ';
            }
        }
        console.log(level);
    }
};

pyramid(5);