// const fib = n => {
//     const series = [0, 1];

//     for(let i = 2; i <= n; i++) {
//         const a = series[i - 1];
//         const b = series[i - 2];

//         series.push(a + b);
//     }
//     return series[n];
// };

// const result = fib(7);
// console.log(result);

const compRes = fn => {
    const cache = {};

    return function(...args) {
        if(cache[args]) {
            return cache[args];
        }

        const result = fn.apply(null, args);
        cache[args] = result;

        return result;
    }
};

const baseFib = n => {
    if(n < 2) {
        return n;
    } else {
        return fib(n - 1) + fib(n - 2);
    }
};

const fib = compRes(baseFib);
console.log(fib(7));