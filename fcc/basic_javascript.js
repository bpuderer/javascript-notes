// basic javascript. FCC

// in-line comment
/*
multi-line
comment */
// 8 data types: undefined, null, boolean, string, symbol, bigint, number, and object
// JavaScript variables have an initial value of undefined
var a;
var b;
var c = 9;
a = 5;
b = a;
var aString = "abc";  // use camelCase
aString += "def";
console.log(aString);
console.log(typeof aString);

// with let, a variable with the same name can only be declared once.  added in ES6
// variables which are declared without the let or const are in global scope. always use let, const
let aStr = "a string";
const A_CONSTANT_VAR = "freeCodeCamp";  // constant
// + - * / ++ -- % += -= *= /=

console.log(2.2 * 1.0);
console.log("begin\"" + "\t" + "\\" + "\t" + '\'end');  // single or double quotes, \ to escape
/*
\'	single quote
\"	double quote
\\	backslash
\n	newline
\t	tab
\r	carriage return
\b	backspace
\f	form feed
*/
console.log(A_CONSTANT_VAR[0]);
console.log(A_CONSTANT_VAR.length);
// strings are immutable  aStr[0] = "b"; gens an TypeError
console.log("aStr last letter: " + aStr[aStr.length - 1]);


// array.  mutable even if declared with const
const anArray = ["a", 1];
anArray[0] = "b";  // bracket notation
console.log(anArray);
const myArray = [["Braves", 3], ["Astros", 9]];
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

// args are values passed in. param is variable in the def, placeholder
// functions without return statements return 'undefined'
function doubler(param1) {
    // let localScopeVar = 0;
    return param1 * 2;
  }
console.log(doubler(5));

// Boolean - true, false
// && ||
// == != < <= > >= use type coersion
// "3" ==  3  // true
// 3 != "3"   // false
// === !== 'strict equality/inequality' does not
// "3" ==  3  // false
// 3 !== "3"  //true

function test(num) {
    if (num < 5 && num > 1) {
      return "between 1 and 5 exclusive";
    }
    return "not between 1 and 5";
  }

function test2(num) {
    if (num > 5) {
        return "greater than 5";
    } else if (num < 1) {
        return "less than 1";
    } else {
        return "between 1 and 5 inclusive"
    }
}

fruit = "pear";
switch (fruit) {
    case "apple":
    case "pear":
        console.log("The fruit is an apple or a pear");
        break;
    case "orange":
        console.log("The fruit is an orange");
        break;
    default:
        console.log("unknown fruit");
        break;
}

// ternary  a ? b : c   b if a else c
function checkEqual(a, b) {
    return a === b ? "Equal" : "Not Equal";
}
console.log(checkEqual(3, 5));

// multiple ternary
function checkSign(num) {
    return (num === 0) ? "zero"
    : (num > 0) ? "positive"
    : "negative";
}
console.log(checkSign(-8));


const cat = {
    name: "Whiskers",
    legs: 4,
    tails: 1,
    enemies: ["Water", "Dogs"],
    "With Space": 5
  };
cat.name = "Happy Whiskers";
cat.says = "meow";
console.log(cat.name + " " + cat["With Space"] + " " + cat.says);

console.log(cat.hasOwnProperty("tails"));
delete cat.tails;  // remove property
console.log(cat.hasOwnProperty("tails"));


// looping
let i = 3;
while (i > 0) {
  console.log(i);
  i--;
}

for (let i = 0; i < anArray.length; i++) {
    console.log(anArray[i]);
}

i = 3
do {
    console.log(i);
    i++;
} while (i < 5);


// Math.random() returns number between 0 inclusive and 1 exclusive
console.log(Math.floor(Math.random()*10));

function randomRange(min, max) {
    // get the quantity of random numbers then 'slide' it into range by adding the min
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(randomRange(2, 5));

console.log(parseInt("007"));
console.log(parseInt("101", 2));  // binary 101 = 5 decimal

