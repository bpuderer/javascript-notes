const nums = [2, 8, 3, 44];

for (let i = 0; i < nums.length; i++) {
    console.log(nums[i]);
}

let password = "bosco";
let userGuess = null;
while (userGuess !== password) {
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
