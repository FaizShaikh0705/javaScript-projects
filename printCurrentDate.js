// How to print current dates in JS

const d = new Date();
console.log(d)
// Output:
// Sun Jul 14 2024 22:54:44 GMT+0530 (India Standard Time)

//Code to just print the date
const e = d.getDate();
console.log(e) //returs 14th

// Print current date in YYYY-MM-DD format


//The padStart method in JavaScript is used 
// to pad the current string with another 
// string (repeated, if needed) so that the 
// resulting string reaches a given length. 
// Padding is applied from the start (left) of the current string


let today = new Date();
let year = today.getFullYear();
let month = String(today.getMonth() + 1).padStart(2, '0'); // Months are zero-based
let day = String(today.getDate()).padStart(2, '0');

let formattedDate = `${year}-${month}-${day}`;
console.log(formattedDate);  // Outputs something like 2024-07-14

