const anagram = (strA, strB) => {
    const aCharMap = buildCharMap(strA);
    const bCharMap = buildCharMap(strB);

    if(Object.keys(aCharMap).length !== Object.keys(bCharMap).length) {
        return false;
    }

    for(let char in aCharMap) {
        if(aCharMap[char] !== bCharMap[char]) {
            return false;
        }
    }
    return true;
};

const buildCharMap = str => {
    const charmap = {};

    for(let char of str.replace(/[^\w]/g, '').toLowerCase()) {
        charmap[char] = charmap[char] + 1 || 1;
    }
    return charmap;
};

//test
const result1 = anagram('dAd', 'add!');
console.log(result1);

const result2 = buildCharMap('frvjsijdvfhsdjo!!');
console.log(result2);