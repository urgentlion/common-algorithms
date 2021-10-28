const revStr = str => {
    const reversed = str
    .split('')
    .reverse()
    .join('');

    return reversed;
};

const result = revStr('love');
console.log(result);