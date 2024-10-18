// Remove Duplicate Array

let myArr1 = [1,2,3,3,4,5,6,6,7]
console.log(myArr1)

let myArr2 = [...new Set(myArr1)];
console.log(myArr2)



//Method 1: Using a 'Set'
//This method uses a Set to keep track of seen elements and another Set to store duplicates.

function findDuplicates(arr) {
    const seen = new Set();
    const duplicates = new Set();

    for (let value of arr) {
        if (seen.has(value)) {
            duplicates.add(value);
        } else {
            seen.add(value);
        }
    }

    return Array.from(duplicates);
}

// Example usage:
const array = [1, 2, 3, 4, 5, 1, 2, 3];
const duplicates = findDuplicates(array);
console.log(duplicates); // Output: [1, 2, 3]