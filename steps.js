const steps = n => {
    for(let r = 0; r < n; r++) {
        let level = '';

        for(let c = 0; c < n; c++) {
            if(c <= r) {
                level += '#';
            } else {
                level += ' ';
            }
        }
        console.log(level);
    }
};

steps(5);