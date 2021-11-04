const revInt = n => {
    const reversed = n.toString()
    .split('')
    .reverse()
    .join('');

    return parseInt(reversed) * Math.sign(n);
};

const result = revInt(-87);
console.log(result);