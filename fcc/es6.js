// let const

// for...of loop
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of
for (const word of ["and", "the", "of"]) {
    console.log(word);
}
for (letter of "abc123") {
    console.log(letter);
}

// for...in loop
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in
const object = { a: 1, b: 2, c: 3 };
for (const property in { a: 1, b: 2, c: 3 }) {
  console.log(`${property}: ${object[property]}`);
}



const MATH_CONSTANTS = {
    PI: 3.14
  };
Object.freeze(MATH_CONSTANTS);  // prevent object mutation
MATH_CONSTANTS.PI = 42;
console.log(MATH_CONSTANTS);



// arrow function no args
const magic = () => new Date();
console.log(magic());


/*
var myConcat = function(arr1, arr2) {
  return arr1.concat(arr2);
};
*/
const myConcat = (arr1, arr2) => arr1.concat(arr2);
console.log(myConcat([1, 2], [3, 4, 5]));


// default arg
const increment = (number, value=1) => number + value;
console.log(increment(5));
console.log(increment(5, 4));


// use rest parameter for variable number of args
const sum = (...args) => {
    let total = 0;
    for (let i = 0; i < args.length; i++) {
      total += args[i];
    }
    return total;
}
console.log(sum(1, 2, 3));
console.log(sum(4, 5, 6, 7, 8));



// spread operator.  Math.max expects 0 to n nums, not an array
const arr = [2, 1, 3];
console.log(Math.max(...arr));


// deconstructing assignment
const HIGH_TEMPERATURES = {
    yesterday: 75,
    today: 77,
    tomorrow: 80
 };
 const  { today, tomorrow } = HIGH_TEMPERATURES;
 const {today: highToday, tomorrow: highTomorrow} = HIGH_TEMPERATURES; // new name
 // string using template literals
 console.log(`${today} ${tomorrow} ${highToday} ${highTomorrow}`);

 // nested
const LOCAL_FORECAST = {
    today: { low: 64, high: 77 },
};
const { today: {low: lowToday, high: highTodayy}} = LOCAL_FORECAST;
console.log(`${lowToday} ${highTodayy}`);


// array deconstructing
const [c, d,,,e] = [1, 2, 3, 4, 5, 6];
console.log(`${c} ${d} ${e}`);

let a = 8, b = 6;
[a, b] = [b, a];  // swaps a and b

// rest element / rest of the elements
let arr2;
[a, b, ...arr2] = [1, 2, 3, 4, 5];
console.log(`${a} ${b} ${arr2}`);


// destructuring assignment to pass an object as function params
const stats = {
    max: 56.78,
    standard_deviation: 4.34,
    median: 34.54,
    mode: 23.87,
    min: -0.75,
    average: 35.85
 };
 const half = ({max, min}) => (max + min) / 2.0;
 console.log(half(stats));


// object property shorthand
const createPerson = (name, age) => ({name, age});
console.log(createPerson("Brendan", 34));


// function in an object
const person = {
    name: "Taylor",
    sayHello() {
      return `Hello! My name is ${this.name}.`;
    }
};


class Vegetable {
    constructor(name) {
      this._name = name;
    }
    get name() {
        return this._name;
    }
    set name(name) {
        this._name = name;
    }
    plant() {
        console.log(`Time to plant ${this._name}s!`);
    }
  }

const myVeg = new Vegetable('carrot');
console.log(myVeg.name);
myVeg.name = "turnip";
console.log(myVeg.name);
myVeg.plant();


// <script type="module" src="index.js"></script>

// export { function1, function2 };

// import { function2, function2 } from './file_with_functions.js';
// import * as someFunctions from './file_with_functions.js';


// export fallback  https://developer.mozilla.org/en-US/docs/web/javascript/reference/statements/export#using_the_default_export
/*
export default function subtract(x, y) {
    return x - y;
}
import subtract from "./file_with_functions.js";  // doesn't have to be subtract, could be 'beavis'
*/


const makeServerRequest = new Promise((resolve, reject) => {
    // responseFromServer is set to false to represent an unsuccessful response from a server
    let responseFromServer = false;

    if(responseFromServer) {
      resolve("We got the data");
    } else {
      reject("Data not received");
    }
  });

  makeServerRequest.then(result => {
    console.log(result);
  });

  makeServerRequest.catch(error => {
    console.log(error);
  });
