function sum(a, b) {
    return a + b;
}

console.log(sum(44, 45));

// anonymous function
setTimeout(function () { console.log("anon function");}, 1000);

// arrow function
setTimeout(() => console.log("arrow function"), 1000);
