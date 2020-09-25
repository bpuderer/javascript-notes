const nums = [2, 8, 3, 44];

for (let i = 0; i < nums.length; i++) {
    console.log(nums[i]);
}


// loop over iterable
for (char of "abcd") {
    console.log(char);
}


let password = "bosco";
let userGuess = "";
while (userGuess.toLowerCase() !== password) {
    userGuess = prompt("Enter password");
}
alert("Login successful");


let factorial = 1;
let number = 5;
do {
    factorial = factorial * number;
    number--;
} while (number > 0);
console.log(factorial);


// used in Automating in the Browser Using JavaScript TAU course
// added functions of an object to be used as the model for a bot
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in
for (variable in {"a": 0, "b": 1}) {
    console.log(variable);
}
