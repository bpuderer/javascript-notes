// sorting numbers
let arr = [2, 10];
console.log([2, 10].toSorted());  // [10, 2]  sorts alphabetically
arr.sort((a, b) => a - b);  // needs a comparison function
console.log(arr);


// for in vs for of
// for...in iterates over property names, for...of iterates over property values:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration#for...in_statement
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration#for...of_statement
let arr2 = ['a', 'b', 'c'];
for (let item in arr2) {
    console.log(item);
}
for (let item of arr2) {
    console.log(item);
}


// in cannot be used for membership
// use Array.prototype.includes(). For sets, use Set.prototype.has()
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/in
console.log(arr2.includes('b'));



// no integer division operator.  no // operator like python
console.log(12 / 5);
console.log(Math.floor(12 / 5));


// rouding
let changeDue = 0.1 + 0.2;
console.log(changeDue);
changeDue = Number(changeDue.toFixed(2));
console.log(changeDue);
