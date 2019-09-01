//Implement function ToLowerCase() that has a string parameter str, and returns the same string in lowercase.


const toLowerCase = (str) => {
    //Calculate Ascii diff from a to A
    const DIFF = ('a'.charCodeAt(0) - 'A'.charCodeAt(0));

    return Array
        .from(str)
        .map(ch => (ch >= 'A' && ch <= 'Z') ? String.fromCharCode(ch.charCodeAt(0) + DIFF) : ch)
        .join('');
};


// String + charCodeAt()

var sentence = 'The quick brown fox jumps over the lazy dog.';

var index = 4;

console.log('The character code ' + sentence.charCodeAt(index) + ' is equal to ' + sentence.charAt(index));
// expected output: "The character code 113 is equal to q"
