// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

// array.  mutable even if declared with const
const anArray = ["a", 1];
// use includes method for membership, NOT in
console.log(anArray.includes(1));
anArray[0] = "b";  // bracket notation
console.log(anArray);

let myArray = [["Braves", 3], ["Astros", 9]];
console.log(myArray[0][1]);


// push appends one or more arguments and returns the length of the array
console.log("new len: " + anArray.push("c", 2));
console.log(anArray);
// pop removes last element and returns it
console.log("popped item: " + anArray.pop());
console.log(anArray);

// shift removes first element and returns it
console.log("shifted item: " + anArray.shift());
console.log(anArray);
// unshift adds elements to the front and returns new len
console.log("new len: " + anArray.unshift("A", "B"));
console.log(anArray);


// splice to remove or add
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
myArray = ["a", "b", "c", "d", "e", "f"];
console.log(myArray.splice(2));
console.log(myArray);

myArray = ["a", "b", "c", "d", "e", "f"];
console.log(myArray.splice(1, 2));
console.log(myArray);

// remove and add in same call
myArray = ["a", "b", "c", "d", "e", "f"];
console.log(myArray.splice(1, 2, "B", "C"));
console.log(myArray);


// slice to return shallow copy of portion of an array
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
myArray = ["a", "b", "c", "d", "e", "f"];
console.log(myArray.slice(2));  // same as myArray[2:] in python
console.log(myArray.slice(1, 4)); // same as myArray[1:4] in python
console.log(myArray.slice(-2)); // same as myArray[-2:] in python


// make shallow copy of array with spread
let yourArray = ["A", "B", "C"];
myArray = [...yourArray];
console.log(myArray);

// insert into another at any index
myArray = [1, 2, ...yourArray, 3, 4];
console.log(myArray);


// indexOf returns index of first occurrence  element in array, -1 if not found
console.log(["a", "b", "c", "b"].indexOf("b"));


// combine without mutation
console.log([1, 2, 3].concat([4, 5, 6]));


// join concat elements using separator string. useful after a split
const elements = ['N', 'O', 'L', 'A'];
console.log(elements.join(''));


// entries is like enumerate in python. index and element. entries returns an iterator
for (arrayIteratorEntry of myArray.entries()) {
    console.log('index: ', arrayIteratorEntry[0], ' element: ', arrayIteratorEntry[1]);
}
