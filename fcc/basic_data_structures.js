// array stuff

let myArray = ["b"];
myArray[0] = "B";  // bracket notation

// push to add to end
myArray.push("C", "D");
// unshift to add to beginning
myArray.unshift("A");
console.log(myArray);

// pop removes from end and returns removed val
console.log(myArray.pop());
// shift removes from beginning and returns removed val
myArray.shift()
console.log(myArray);


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
myArray = ["a", "b", "c", "d", "e", "f"];
console.log(myArray.slice(2));  // same as myArray[2:] in python
console.log(myArray.slice(1, 4)); // same as myArray[1:4] in python


// make shallow copy of array with spread
let yourArray = ["A", "B", "C"];
myArray = [...yourArray];
console.log(myArray);

// insert into another at any index
myArray = [1, 2, ...yourArray, 3, 4];
console.log(myArray);


// indexOf returns index of first occurrence  element in array, -1 if not found
console.log(["a", "b", "c", "b"].indexOf("b"));




// object stuff
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_objects

let userActivity = {
    id: 123,
    'the date': 'January 1, 2024',
    kenny : 1,
    data: {
        totalUsers: 50,
        online: 42
    }
};

// bracket notation needed if space in key/property
userActivity["the date"] = "January 2, 2024"

// or to use a variable to name the property
const keyname = "data";
console.log(userActivity.keyname);  // WRONG  outputs undefined
console.log(userActivity[keyname]); // CORRECT

userActivity.data.online = 41;
console.log(userActivity);

// remove property
console.log(userActivity.hasOwnProperty('kenny'));
console.log('kenny' in userActivity);
delete userActivity.kenny;
console.log('kenny' in userActivity);

// loop through keys
for (const key in userActivity) {
    console.log(userActivity[key]);
}

// array of keys
console.log(Object.keys(userActivity));

