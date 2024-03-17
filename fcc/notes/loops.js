// looping
let i = 3;
while (i > 0) {
  console.log(i);
  i--;
}


const anArray = ["a", 1];
for (let i = 0; i < anArray.length; i++) {
    console.log(anArray[i]);
}


i = 3
do {
    console.log(i);
    i++;
} while (i < 5);


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
