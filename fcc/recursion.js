function sum(arr, n) {
    let sum = 0;
    for (let i = 0; i < n; i++) {
        sum += arr[i]
    }
    return sum;
}

function recursive_sum(arr, n) {
    if (n <= 0) {
        return 0;
    } else {
        return recursive_sum(arr, n - 1) + arr[n - 1];
    }
}

console.log(sum([1,2,3,4,5], 3));
console.log(recursive_sum([1,2,3,4,5], 4));



// return array of 1 to n
function countup(n) {
    if (n < 1) {
        return [];
    } else {
        const countArray = countup(n - 1);
        countArray.push(n);
        return countArray;
    }
}
console.log(countup(5));

// return array of n to 1
function countdown(n) {
    if (n < 1) {
        return [];
    } else {
        const countArray = countdown(n - 1);
        countArray.unshift(n);
        return countArray;
    }
}
console.log(countdown(5));

// return array of startNum to endNum
function rangeOfNumbers(startNum, endNum) {
    if (startNum === endNum) {
        return [endNum];
    } else {
        const countArray = rangeOfNumbers(startNum, endNum - 1);
        countArray.push(endNum);
        return countArray;
    }
}
console.log(rangeOfNumbers(3, 28));

