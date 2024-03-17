function test2(num) {
    if (num > 5) {
        return "greater than 5";
    } else if (num < 1) {
        return "less than 1";
    } else {
        return "between 1 and 5 inclusive"
    }
}
console.log(test2(-1));


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
