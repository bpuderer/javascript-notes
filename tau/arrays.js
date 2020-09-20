function logThis(msg) {
    console.log(msg);
}

function doubler(num) {
    return num * 2;
}

const nums = [2, 8, 3, "zero"];
let num = nums.pop();
console.log(num);
nums.push(44);
console.log(nums);
console.log(nums[1]); // returns undefined if accessing out of range element, not exception


nums.forEach(logThis);
console.log(nums.map(doubler));


findThis = 9;
console.log("does nums contain " + findThis + ": " + nums.includes(8));
