// Find the Largest Number in an Array
// Question: Write a function to return the largest number from an array of numbers.


function findLargest(arr) {
    return Math.max(...arr);
  }
  
// Math.max()
// This method returns the largest of zero or more numbers.
// Example: Math.max(1, 5, 10) will return 10


// ... (Spread Operator)
// The spread operator ... is used to spread the elements of an array into individual values
// Example: Math.max(...[1, 5, 10]) is equivalent to Math.max(1, 5, 10)


  // Example usage:
  console.log(findLargest([3, 7, 1, 9, 4])); // Output: 9
  