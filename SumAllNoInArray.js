// Sum of All Numbers in an Array
// Question: Write a function that takes an array of numbers and returns the sum of all the numbers.

function sumArray(arr) {
    return arr.reduce((sum, num) => sum + num, 0);
  }


// arr.reduce() is a very powerful method in JavaScript 
// for reducing an array to a single value by applying a 
// function to each element of the array. Let me explain it step by step.


// explainations of structure

// array.reduce((accumulator, currentValue) => {
//     // operation to perform
//   }, initialValue);

// accumulator: This is the value that accumulates the results of the function across each iteration.
// currentValue: The current element being processed.
// initialValue: The initial value for the accumulator (optional, but recommended).
  
  
  // Example usage:
  console.log(sumArray([1, 2, 3, 4])); // Output: 10
  