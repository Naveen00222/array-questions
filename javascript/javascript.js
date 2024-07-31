// creating an array with a given length

let arr = [1,2,3,4,5]
let length = 3;
console.log(arr.slice(0, length));

// finding difference between two arrays

let array1 = [1,2,3,4,5]
let array2 = [2,1,3,2,2]
console.log(array1.filter(x => !array2.includes(x)))

//array manipulation with slice

let array = [6,7,8,9]
console.log(array.slice(1,3));

//insert item at a specific position
let array3 = [1,2,3,4,5]
console.log(array3.splice(1,0,6));
console.log(array3);

//compare two array length equal or not 
let array4 = [1,2,3,4,5]
let array5 = [1,2,3,4,7]
let length1 = array4.length
let length2 = array5.length
console.log(length1 == length2);

// create an array of arrays
let array6 = [1,2,3]
let array7 = [4,5,6]
let array8 = array6+","+array7
console.log(array8);


