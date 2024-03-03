// Functional programming is all about creating and using non-mutating functions.
// in functional programming, changing or altering things is called mutation,
// and the outcome is called a side effect. A function, ideally, should be a pure function,
// meaning that it does not cause any side effects.

/*
So far, we have seen two distinct principles for functional programming:

Don't alter a variable or object - create new variables and objects and return them if need be from a function.

Declare function parameters - any computation inside a function depends only on the arguments passed to the function, and not on any global object or variable.
*/


// map example
const watchList = [
    {
        "Title": "Inception",
        "Director": "Christopher Nolan",
        "imdbRating": "8.8",
    },
    {
        "Title": "Interstellar",
        "Director": "Christopher Nolan",
        "imdbRating": "8.6",
    },
    {
        "Title": "Aliens",
        "Director": "James Cameron",
        "imdbRating": "8.4"
    }
];

const ratings = watchList.map(item => ({title: item.Title, rating: item.imdbRating}));
console.log(JSON.stringify(ratings));

const filteredRatings = watchList.map(item => ({title: item.Title, rating: item.imdbRating})).filter(item => Number(item.rating) >= 8.0);
console.log(filteredRatings);


// Implement map on a Prototype
Array.prototype.myMap = function (callback) {
    const newArray = [];
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map#syntax
    for (let i = 0; i < this.length; i++) {
        newArray.push(callback(this[i], i, this));
    }
    //this.forEach((element, index, array) => newArray.push(callback(element, index, array)));
    return newArray;
};
console.log([1, 2, 3].myMap(item => item + 2));


Array.prototype.myFilter = function (callback) {
    const newArray = [];
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            newArray.push(this[i]);
        }
    }
    return newArray;
};
console.log([23, 65, 98, 5, 13].myFilter(item => item % 2));


// average rating of Nolan movies
function getRating(watchList) {
    const nolanMovies = watchList.filter(item => item.Director == "Christopher Nolan");
    let totalRating = nolanMovies.reduce((sum, movie) => sum + Number(movie.imdbRating), 0);
    return totalRating / nolanMovies.length;
}
console.log(getRating(watchList));


// combine arrays without mutation
console.log([1, 2, 3].concat([4, 5, 6]));




// return list of squares of only positive integers
const squareList = arr => {
    return arr.filter(item => item > 0 && item.toString().indexOf(".") == -1).map(item => item * item);
};
console.log(squareList([-3, 4.8, 5, 3, -3.2]));



// sort MUTATES
function alphabeticalOrder(arr) {
    return arr.sort((a, b) => a.localeCompare(b));
    //return arr.sort();
  }
const arr = ["a", "d", "c", "A", "z", "g"];
console.log(alphabeticalOrder(arr));
console.log(arr);


function nonMutatingSort(arr) {
    const tmp = [...arr];
    tmp.sort((a, b) => a - b);
    //tmp.sort();  // does not sort correctly
    return tmp;
}
console.log(nonMutatingSort([1, 4, 100, 45, 200, 2]));



// split is a string method and strings are immutable anyway
console.log("May-the-farce-be-with-you".split(/[^a-zA-Z]/).join(" "));
console.log(" Winter Is  Coming".trim().split(/\s+/).map(item => item.toLowerCase()).join("-"));




// like python all().  true if all items in array meet criteria
console.log([1, 2, 3, -4, 5].every(item => item > 0));
// like python any().  true if any item in array meets criteria
console.log([1, 2, 3, -4, 5].some(item => item > 0));




// currying
// The arity of a function is the number of arguments it requires. Currying a function means to convert
// a function of N arity into N functions of arity 1.
function add(x) {
    return function (y) {
        return function (z) {
            return x + y + z;
        }
    }
}
const add2 = (a) => {
    return (b) => {
        return (c) => {
            return a + b + c;
        }
    }
}
console.log(add(10)(20)(30));
console.log(add2(10)(20)(30));
