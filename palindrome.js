const palindrome = str => {
    const reversed = str
    .split('')
    .reverse()
    .join('');

    return reversed === str;
};

const reuslt = palindrome('racecar');
console.log(reuslt);