// Function to check if a number is prime
function isPrime(num) {
    if (num <= 1) return false; // Not prime if less than or equal to 1
    for (let i = 2; i <= Math.sqrt(num); i++) {
        // Math.sqrt() function in JavaScript is used to calculate the square root of a given number
        if (num % i === 0) return false; // Found a divisor, not prime
    }
    return true; // No divisors found, it's prime
}

// Function to filter prime numbers from an array
function findPrimesInArray(arr) {
    return arr.filter(isPrime); // Use the isPrime function to filter the array
}

//   arr.filter() method in JavaScript is used to create a new array containing 
//   all elements of the original array that pass a specified test implemented by a provided function

// Example usage:
const numbers = [1, 2, 3, 4, 5, 10, 11, 12, 13, 14, 15, 17, 19, 20, 23];
const primeNumbers = findPrimesInArray(numbers);

console.log(primeNumbers); // Output: [2, 3, 5, 11, 13, 17, 19, 23]
