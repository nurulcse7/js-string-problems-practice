// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math 

Math.E
Math.LN10
Math.LN2
Math.LOG10E
Math.LOG2E
Math.PI
Math.SQRT1_2
Math.SQRT2
Math.sqrt
Math.sqrt
Math.abs()
Math.acos
Math.acosh
Math.cos
Math.cosh
Math.asin
Math.asinh
Math.sign
Math.sin
Math.sinh
Math.atan
Math.atan2
Math.atanh
Math.tan
Math.tanh
Math.cbrt
Math.ceil
Math.clz32
Math.exp
Math.expm1
Math.floor
Math.fround
Math.hypot
Math.imul
Math.log
Math.log10
Math.log1p
Math.log2
Math.max
Math.min
Math.pow
Math.random
Math.round
Math.trunc


// Math.pow (Calculate 3 to the power 8.) 
const result = Math.pow(3, 8);
console.log(result) // print: 6561


Math.abs (absolute)
const num1 = 25;
const num2 = 45;
const gap = Math.abs(num1 - num2);
console.log(gap);  
if(gap < 5){
    console.log('you guys can be friends');
}
else{
    console.log('you guys stay apart');
}
// Math.abs without print:  you guys can be friends (-20)
// Math.abs with print: you guys stay apart (20)


// Math.round (full number if 2.4 then 2, if 2.5 then 3)
const number = 2.451245;
const fullNumber = Math.round(number);
console.log(fullNumber); // print: 2
// -------and ---------
const number = 2.551245;
const fullNumber = Math.round(number);
console.log(fullNumber); // print: 3

// Math.cell
const result2 = Math.ceil(2.00001);
console.log(result2); // print: 3


// Math.floor
const result3 = Math.floor(456.959);
console.log(result3); 


// // Math.random (show 0 to 10 random number)
const randomNumber = Math.random() * 10;
console.log(randomNumber) // print: 3.879927739148541, 0.14650054921329403 like this random number

// if you are not show decimal number then into 10
const randomNumber = Math.floor(Math.random() * 10);
console.log(randomNumber) // print: 6, 8, 3 like this random number, not fixed

console.log(Math.random()); // random number generate

// random number generate with for loop into 6
for(let i = 0; i < 20; i++){
    const random = Math.round(Math.random()*6);
    console.log(random);
}
