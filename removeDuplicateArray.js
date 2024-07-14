// Remove Duplicate Array

let myArr1 = [1,2,3,3,4,5,6,6,7]
console.log(myArr1)

let myArr2 = [...new Set(myArr1)];
console.log(myArr2)