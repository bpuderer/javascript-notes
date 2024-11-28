// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions

// function definition/declaration/statement
function square(number) {
    return number * number;
}
console.log(square(4));


// function expression. doesn't have to have a name
const square2 = function (number) {
    return number * number;
};
console.log(square2(4)); // 16


// but can
const factorial = function fac(n) {
    return n < 2 ? 1 : n * fac(n - 1);
};
console.log(factorial(5)); // 120

