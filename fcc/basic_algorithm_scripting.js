function reverseString1(str) {
    return str.split('').reverse().join('');
}


function reverseString2(str) {
    let tmpStr = "";
    for (let i = str.length - 1; i >= 0; i--) {
        tmpStr += str[i];
    }
    return tmpStr;
}

function reverseString3(str) {
    const tmpArr = [];
    for (let i = 0; i < str.length; i++) {
        tmpArr.unshift(str[i]);
    }
    return tmpArr.join('');
}

console.log(reverseString1("hello"));
console.log(reverseString2("hello"));
console.log(reverseString3("hello"));




function factorialize(num) {
    let tmp = 1;

    if (num !== 0) {
        while (num > 1) {
            tmp *= num;
            num--;
        }
    }
    return tmp;
}

function factorialize2(n) {
    if (n < 0 || !Number.isInteger(n)) {
        return -1;
    } else if (n === 0) {
        return 1;
    } else {
        return n * factorialize2(n - 1);
    }
}

console.log(factorialize(5));
console.log(factorialize2(5));




function findLongestWordLength(str) {
    let words = str.split(" ");
    let longest = 0;
    for (let word of words) {
        if (word.length > longest) {
            longest = word.length;
        }
    }
    return longest;
}

console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));




function largestOfFour(arr) {
    const largestNums = [];
    for (let array of arr) {
        let largest = Number.NEGATIVE_INFINITY;
        for (let num of array) {
            if (num > largest) {
                largest = num;
            }
        }
        largestNums.push(largest);
    }
    return largestNums;
}

console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));




function confirmEnding(str, target) {
    return str.slice(-target.length) == target;
}

console.log(confirmEnding("Linux inside", "inside"));




function repeatStringNumTimes(str, num) {
    let tmp = "";
    if (num > 0) {
        for (let i = 0; i < num; i++) {
            tmp += str;
        }
    }
    return tmp;
}

console.log(repeatStringNumTimes("xyz", 3));




function truncateString(str, num) {
    if (str.length > num) {
        return str.slice(0, num) + "...";
    }
    return str;
}

console.log(truncateString("The quick brown fox jumps over the lazy dog.", 8));




// return first true
function findElement(arr, func) {
    for (let thing of arr) {
        if (func(thing)) {
            return thing;
        }
    }
    return undefined;
}

console.log(findElement([1, 2, 3, 4], num => num % 2 === 0));




// return true if boolean primitive
function booWho(bool) {
    if (bool === true || bool === false) {
        return true;
    }
    return false;
}

console.log(booWho("true"));




function titleCase(str) {
    const words = str.split(" ");
    const newSent = [];

    for (let word of words) {
        newSent.push(word[0].toUpperCase() + word.slice(1).toLowerCase());
    }
    return newSent.join(" ");

}

console.log(titleCase("The quick brown fox jumps over the lazy dog."));



// splice arr1 into arr2 at n but don't change either
function frankenSplice(arr1, arr2, n) {
    const tmp = [...arr2];
    tmp.splice(n, 0, ...arr1);
    return tmp;
}

console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));



// filter out false vals from array, return new array. don't mutate orig
function bouncer(arr) {
    const falsyVals = [false, null, 0, "", undefined, NaN];
    const sol = [];
    for (let thing of arr) {
        if (!falsyVals.includes(thing)) {
            sol.push(thing);
        }
    }
    return sol;
}

bouncer([7, "ate", "", false, 9]);




function getIndexToIns(arr, num) {
    const sortedArr = arr.toSorted();
    let fitsHere = 0;
    for (let sortedArrayVal of sortedArr) {
        if (num > sortedArrayVal) {
            fitsHere++;
        }
    }
    return fitsHere;
}

console.log(getIndexToIns([5, 3, 20, 3], 5));

/*  site not taking this answer with break though runs ok in node
function getIndexToIns(arr, num) {
    const sortedArr = arr.toSorted();
    let fitsHere = 0;
    for (let sortedArrayVal of sortedArr) {
        if (num > sortedArrayVal) {
            fitsHere++;
        } else {
            break;
        }
    }
    return fitsHere;
}

console.log(getIndexToIns([5, 3, 20, 3], 5));
*/



// first string in aray contain all the letters, case insensitive of second
function mutation(arr) {
    for (let letter of arr[1]) {
        if (!arr[0].toLowerCase().includes(letter.toLowerCase())) {
            return false;
        }
    }
    return true;

}
console.log(mutation(["hello", "Hello"]));
console.log(mutation(["hello", "Hey"]));




function chunkArrayInGroups(arr, size) {
    const result = [];
    let start = 0;
    let end = size;
    const numChunks = Math.trunc(arr.length / size);
    const leftovers = arr.length % size;

    for (let i=0; i < numChunks; i++) {
        result.push(arr.slice(start, end));
        start += size;
        end += size;
    }

    if (leftovers > 0) {
        result.push(arr.slice(start));
    }

    return result;
  }

  console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));
  console.log(chunkArrayInGroups(["a", "b", "c"], 2));
