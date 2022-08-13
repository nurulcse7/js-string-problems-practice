// reverse string (every word)
function reverseWords(str) {
    const words = str.split(' ');
    // console.log(words)
    // [ 'I', 'am', 'a', 'good', 'boy' ]
    const result = [];
    for (let i = words.length - 1; i >= 0; i--) {
        const element = words[i];
        result.push(element);
    }
    // console.log(result)
    // [ 'boy', 'good', 'a', 'am', 'I' ]
    const reversed = result.join(' ');
    console.log(reversed)
    // boy good a am I
    return reversed;
}

const myString = 'I am a good boy';
reverseWords(myString);
