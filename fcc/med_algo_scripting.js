// sum numbers between the numbers in a two number array
function sumAll(arr) {
    let sum = 0;
    if (arr[0] < arr[1]) {
        for (let i = arr[0]; i < arr[1] + 1; i++) {
            sum += i;
        }
    } else {
        for (let i = arr[1]; i < arr[0] + 1; i++) {
            sum += i;
        }

    }
    return sum;
}
console.log(sumAll([1, 4]));
console.log(sumAll([4, 1]));




// symmetric difference
function diffArray(arr1, arr2) {
    const newArr = [];
    for (let item of arr1) {
        if (!arr2.includes(item) && !newArr.includes(item)) {
            newArr.push(item);
        }
    }
    for (let item of arr2) {
        if (!arr1.includes(item) && !newArr.includes(item)) {
            newArr.push(item);
        }
    }
    return newArr;
}
console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5, 7, 7]));




// remove each of n args from arr
function destroyer(arr, ...toRemove) {
    return arr.filter(item => !toRemove.includes(item));
}
console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));




// Make a function that looks through an array of objects (first argument) and returns
// an array of all objects that have matching name and value pairs (second argument).
function whatIsInAName(collection, source) {
    let result = [];
    const src_keys = Object.keys(source);

    for (let item of collection) {
        if (src_keys.every(key => item[key] === source[key])) {
            result.push(item);
        }
    }
    return result;
}
console.log(whatIsInAName([{ "apple": 1, "bat": 2 }, { "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "bat": 2 }));



// spinal case is all-lowercase-words-joined-by-dashes.
function spinalCase(str) {
    str = str.replace(/([a-z])([A-Z])/g, "$1 $2");
    return str.split(/\s+|_+/).join("-").toLowerCase();
}
console.log(spinalCase("AllThe-small ThingsThingsThings"));



// pig latin.
// If a word begins with a consonant, take the first consonant or consonant cluster,
// move it to the end of the word, and add ay to it.
// If a word begins with a vowel, just add way at the end.
function translatePigLatin(str) {
    if (/^[aeiouAEIOU]/.test(str)) {
        return str + "way";
    } else {
        // first capture group is consonant group at beginning of string
        // second capture group is whats left
        const myRegex = /(^[^aeiouAEIOU]+)(.*)/;
        return str.replace(myRegex, "$2$1ay")
    }
}
console.log(translatePigLatin("california"));
console.log(translatePigLatin("paragraphs"));




// search and replace but preserve the case of the string being replaced
// assuming one occurence
// assumes the before arg is the same case as in str
function myReplace(str, before, after) {
    let new_after;
    const i = str.indexOf(before);
    if (str[i] == str[i].toLowerCase()) {
        new_after = after[0].toLowerCase() + after.slice(1);
    } else {
        new_after = after[0].toUpperCase() + after.slice(1);
    }
    return str.replace(before, new_after);
}
console.log(myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped"));
console.log(myReplace("A quick brown fox jumped over the lazy dog", "jumped", "Leaped"));



// DNA pairing.  missing pairing element
// saw a better solution after the fact that used map and an object with the missing element lookups
function pairElement(str) {
    const result = [];
    for (const char of str) {
        switch (char) {
            case "A":
                result.push(["A", "T"]);
                break;
            case "T":
                result.push(["T", "A"])
                break;
            case "C":
                result.push(["C", "G"]);
                break;
            case "G":
                result.push(["G", "C"]);
                break;
        }
    }
    return result;
}
console.log(pairElement("GCG"));




// return missing letter in the passed letter range
// if all present return undefined
function fearNotLetter(str) {
    for (let i = 0; i < str.length - 1; i++) {
        if (str.charCodeAt(i) + 1 != str.charCodeAt(i + 1)) {
            return String.fromCharCode(str.charCodeAt(i) + 1);
        }
    }
    return undefined;
}
console.log(fearNotLetter("abcdefghjklmno"));
console.log(fearNotLetter("mno"));



// return array of unique vals from n arrays passed in
function uniteUnique(...arrs) {
    const uniqueVals = [];
    for (const arr of arrs) {
        for (let element of arr) {
            if (!uniqueVals.includes(element)) {
                uniqueVals.push(element);
            }
        }
    }
    return uniqueVals;
}
console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));



// convert HTML entities
function convertHTML2(str) {
    const myRegex = /[&<>\'"]/g;
    const entities = {
        "&": "&amp;",
        '"': "&quot;",
        "'": "&apos;",
        ">": "&gt;",
        "<": "&lt;"
    }
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace
    return str.replace(myRegex, match => entities[match]);
}
console.log(convertHTML2("Dolce & & Gabbana"));




// truth check. all objects in collection have pre key set to a true value
function truthCheck(collection, pre) {
    // https://developer.mozilla.org/en-US/docs/Glossary/Falsy
    return collection.every(item => ![null, undefined, false, NaN, 0, -0, 0n, ""].includes(item[pre]));
}
console.log(truthCheck([{ name: "Quincy", role: "Founder", isBot: false }, { name: "Naomi", role: "", isBot: false }, { name: "Camperbot", role: "Bot", isBot: true }], "isBot"));




// add two numbers together. undefined if either is not a number
// my get two args, may get 1 then need to return a function for the other -> see currying
function addTogether(...args) {
    if (args.some(item => typeof item !== 'number')) {
        return undefined;
    }

    if (args.length == 2) {
        return args[0] + args[1];
    } else {
        return function (y) {
            if (typeof y !== 'number') {
                return undefined;
            } else {
                return args[0] + y;
            }
        }

    }
}
console.log(addTogether(2,"3"));
console.log(addTogether(2,3));
console.log(addTogether(2)(3));



// sum odd Fibonacci sequence numbers <= num
function sumFibs(num) {

    function fib(n){
      if (n == 0 || n == 1) {
        return 1;
      } else {
          return fib(n - 1) + fib(n - 2)
      }
    }

    let tmpFib = 0;
    let sum = 0;
    while (fib(tmpFib) <= num) {
      let tmp = fib(tmpFib);
      if (tmp % 2 != 0) {
        sum += tmp;
      }
      tmpFib++;
    }

    return sum;
  }
  console.log(sumFibs(4));



  function sumPrimes(num) {
    function isPrime(n) {
        if (n > 1) {
            for (let i = 2; i < Math.floor(n / 2) + 1; i++) {
                if (n % i == 0) {
                    return false;
                }
            }
            return true;
        } else {
            return false;
        }
    }

    let sum = 0;
    for (let i = 0; i <= num; i++) {
        if (isPrime(i)) {
            sum += i;
        }
    }
    return sum;
}
console.log(sumPrimes(977));




function smallestCommons(arr) {
    // dont want to mutate arr
    let arrSorted = arr.toSorted((a, b) => a - b);  // gotcha

    let numRange = [];
    for (let i = arrSorted[0]; i < arrSorted[1] + 1; i++) {
        numRange.push(i);
    }

    let solution = arrSorted[1];
    while (true) {
        if (numRange.every(item => solution % item == 0)) {
            return solution;
        }
        solution++;
    }
}
console.log(smallestCommons([2, 10]));



function dropElements(arr, func) {
    let howManyToRemove = 0;
    for (let thing of arr) {
        if (func(thing)) {
            break;
        }
        howManyToRemove++;
    }

    if (howManyToRemove > 0) {
        arr.splice(0, howManyToRemove);
    }
    return arr;
}
console.log(dropElements([1, 2, 3], function (n) { return n < 3; }));
console.log(dropElements([4, 5, 1], function (n) { return n < 3; }));
console.log(dropElements([0, 1, 0, 1], function (n) { return n === 1; }));




// flatten array without Array flat method
function steamrollArray(arr) {
    // dont mutate arr
    let arrCopy = [...arr];
    let solution = [];

    while (arrCopy.length > 0) {
        let element = arrCopy.shift();
        if (Array.isArray(element)) {
            // if array, put back the elements
            arrCopy.unshift(...element);
        } else {
            // not array, add to solution
            solution.push(element);
        }
    }
    return solution;
}
console.log(steamrollArray([1, [2], [3, [[4]]]]));



function binaryAgent(str) {
    return str.split(" ").map(item => String.fromCharCode(parseInt(item, 2))).join('');
}
binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");




function truthCheck(collection, pre) {
    return collection.every(item => item[pre]);
}
truthCheck([{ name: "Quincy", role: "Founder", isBot: false }, { name: "Naomi", role: "", isBot: false }, { name: "Camperbot", role: "Bot", isBot: true }], "isBot");




const Person = function (first, last) {
    let firstName = first;
    let lastName = last;

    this.getFirstName = function () {
        return firstName;
    }
    this.getLastName = function () {
        return lastName;
    }
    this.getFullName = function () {
        return firstName + " " + lastName;
    };
    this.setFirstName = function (first) {
        firstName = first;
    }
    this.setLastName = function (last) {
        lastName = last;
    }
    this.setFullName = function (first, last) {
        firstName = first;
        lastName = last;
    }
};




function orbitalPeriod(arr) {
    let resultArr = [];
    const GM = 398600.4418; // of Earth
    const earthRadius = 6367.4447;

    for (let thing of arr) {
        const result = { name: thing['name'] };
        result["orbitalPeriod"] = Math.round(2 * Math.PI * Math.sqrt(Math.pow(thing["avgAlt"] + earthRadius, 3) / GM));
        resultArr.push(result);
    }
    return resultArr;
}
console.log(orbitalPeriod([{ name: "sputnik", avgAlt: 35873.5553 }]));
