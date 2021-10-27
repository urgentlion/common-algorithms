const maxChar = str => {
    const charmap = {};
    let counter = 0;
    let maxchar = '';

    for(let char of str.toLowerCase()) {
        if(charmap[char]) {
            charmap[char]++;
        } else {
            charmap[char] = 1;
        }
    }
    
    for(let char in charmap) {
        if(charmap[char] > counter) {
            counter = charmap[char];
            maxchar = char;
        }
    }
    return maxchar;
};

const result = maxChar('aaassd');
console.log(result);