const vowels = str => {
    const vowel = ['a', 'e', 'i', 'o', 'u'];
    let counter = 0;

    for(let char of str.toLowerCase()) {
        if(vowel.includes(char)) {
            counter++;
        }
    }
    return counter;
};

const result = vowels('hello there');
console.log(result);