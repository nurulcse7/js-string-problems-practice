// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String 
//  In paragraph or sentence letter/word/sentence organize using with split

// 01. every letter different with comma
// const lyrics = 'Tumi bondhu kala Pakhi ami jeno ki';
// const chars = lyrics.split('');
// console.log(chars); 
/* print:
[
  'T', 'u', 'm', 'i', ' ', 'b', 'o',
  'n', 'd', 'h', 'u', ' ', 'k', 'a',
  'l', 'a', ' ', 'P', 'a', 'k', 'h',
  'i', ' ', 'a', 'm', 'i', ' ', 'j',
  'e', 'n', 'o', ' ', 'k', 'i'
]
*/

// 02. every word different with comma
// const lyrics = 'Tumi bondhu kala Pakhi ami jeno ki';
// const parts = lyrics.split(' ');
// console.log(parts)
// print: [  'Tumi', 'bondhu',  'kala', 'Pakhi',  'ami',  'jeno',  'ki']

// 03. every sentence different with comma
// const lyrics = 'Tumi bondhu kala Pakhi. bosonto kale tomai';
// const sentences = lyrics.split('.')
// console.log(sentences)
// // print: [ 'Tumi bondhu kala Pakhi', ' bosonto kale tomai' ]


// using slice
// const lyrics = 'Tumi bondhu kala Pakhi. bosonto kale tomai';
// const partial = lyrics.slice(5, 8);
// console.log(partial) // print: bon 
// N.B in slice start index can get but end index not get, 
// You can get previous index of end index

// const lyrics = 'Tumi bondhu kala Pakhi. bosonto kale tomai';
// const partial2 = lyrics.substring(5, 8);
// console.log(partial2); // print: bon 
// // N.B slice and substring both are same.

// You can give , . : ; '' "" etc last of sentence using with join
const lines = [
    'Tumi bondhu kala Pakhi ami jeno ki',
    'Bosonto kale tomai bolte pari ni',
    'Kala kala sada sada',
    'Rong jomeche sada kala'
  ];
const newSong = lines.join('. ')
console.log(newSong) 
// print: Tumi bondhu kala Pakhi ami jeno ki. Bosonto kale tomai bolte pari ni. Kala kala sada sada. Rong jomeche sada kala

