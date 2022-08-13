// const result = Math.pow(3, 8);
// console.log(result);

/*
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
 */


const num1 = 25;
const num2 = 45;

const gap = Math.abs(num1 - num2);
// console.log(gap);
if(gap < 5){
    console.log('you guys can be friends');
}
else{
    console.log('you guys stay apart');
}


// ----------------
//  
// ------------------
const number = 2.451245;
const fullNumber = Math.round(number);
// console.log(fullNumber);
const result2 = Math.ceil(2.00001);
const result3 = Math.floor(456.259);
// console.log(result3); 


// ------------------
//  Random

// console.log(Math.random());
for(let i = 0; i < 20; i++){
    const random = Math.round(Math.random()*6);
    console.log(random);
}
Math.