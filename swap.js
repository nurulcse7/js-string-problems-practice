// Exchange/Shuffle value in variable

let first = 5;
let second = 7;
console.log(first, second);  // 5 7
first = second;
second = first;
console.log(first, second); // 7 7

// but we want to show 7 5 (approach: 1)
let first = 5;
let second = 7;
const temp = first;
first = second;
second = temp;
console.log(first, second)  // 7 5 

// approach: 2 --- Destructuring 
let first = 5;
let second = 7;
[ first, second ] = [ second, first ];

console.log(first, second); // 7 5 