//function to get the largest number in an array
function maxInArray(numbers){
    // console.log('array inside the array', numbers)
    let largest = numbers[0];
    for(let i = 0; i < numbers.length; i++){
        const index = i;
        const element = numbers[index];
        // console.log(element)
        if(element > largest){
            largest = element;
        }
    }
    return largest;
}
const heights = [167, 190, 120, 165, 137, 265];
const tallest = maxInArray(heights);
console.log('tallest person is: ', tallest); // print: 265



//function to get the lowest number in an array
function maxInArray(numbers){
    // console.log('array inside the array', numbers)
    let largest = numbers[0];
    for(let i = 0; i < numbers.length; i++){
        const index = i;
        const element = numbers[index];
        // console.log(element)
        if(element < largest){   // only here change > to <
            largest = element;
        }
    }
    return largest;
}
const heights = [167, 190, 120, 165, 137, 265];
const tallest = maxInArray(heights);
console.log('tallest person is: ', tallest); // print: 120


// Homework: Write a function to get the lowest number in an array