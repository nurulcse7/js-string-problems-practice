// const lyrics = 'Tumi bondhu kala Pakhi ami jeno ki.';
// const doesExist = lyrics.includes('Pakhi'); 
// console.log(doesExist); //print: true


// const lyrics = 'Tumi bondhu kala Pakhi ami jeno ki.';
// const doesExist = lyrics.includes('pakhi'); 
// console.log(doesExist); //print: false


// const lyrics = 'Tumi bondhu kala Pakhi ami jeno ki';
// const searchString = 'PaKhi';
// const doesExistOneLine = lyrics.toLowerCase().includes(searchString.toLowerCase());
// console.log(doesExistOneLine); //print: true


const lyrics = 'Tumi bondhu kala Pakhi ami jeno ki';
const searchString = 'paKhi';
const doesExistOneLine = lyrics.toLowerCase().includes(searchString.toLowerCase());
console.log(doesExistOneLine); //print: true