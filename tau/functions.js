function sum(a, b) {
    return a + b;
}

console.log(sum(44, 45));

// anonymous function
// setTimeout: https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setTimeout
setTimeout(function() { console.log("anon function"); }, 1000);


// arrow function
setTimeout(() => console.log("arrow function"), 2000);


// https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/clearInterval
var sayHello = setInterval(function() { console.log("hello"); }, 3000);
setTimeout(() => clearInterval(sayHello), 10000);
