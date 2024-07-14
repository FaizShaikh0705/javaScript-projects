// Random Number Using JavaScript

// Math.floor() is a function in JavaScript that 
// returns the largest integer less than or equal 
// to a given number.Essentially, it rounds down a 
// number to the nearest whole number
// example: 
// Math.floor(4.7);   // Returns 4
// Math.floor(4.3);   // Returns 4

// Math.random() is a function in JavaScript that returns 
// a floating-point, pseudo-random number in the range from 
// 0 (inclusive) to 1 (exclusive). This means that the number 
// generated can be 0 but will always be less than 1.


// Return a random integer between 0 to 9
let a = Math.floor(Math.random() * 10);
console.log(a)

// Return a random integer between 0 to 99
let b = Math.floor(Math.random() * 100);
console.log(b)