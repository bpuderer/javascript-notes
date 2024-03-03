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

