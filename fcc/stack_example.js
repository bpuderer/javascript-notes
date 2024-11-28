// flatten array
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



// matching brackets
