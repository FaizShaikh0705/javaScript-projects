// Check for Palindrome
// Question: Write a function to check if a given string is a palindrome (reads the same forwards and backwards).



function isPalindrome(str) {
    let reversed = str.split('').reverse().join('');
    return str === reversed;

    // === is a comparison operator that checks the equality of two values without performing any type conversion.
  }
  
  // Example usage:
  console.log(isPalindrome("madam")); // Output: true
  console.log(isPalindrome("hello")); // Output: false
  

  // the split method 
// allows you to split the string into an array of substrings based on a given pattern. 

// The reverse() method 
// reverses the order of the elements in an array.

// The join() method 
// is an essential tool for converting arrays into strings.