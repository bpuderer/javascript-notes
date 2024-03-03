// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set

const mySet = new Set();
mySet.add(1);
mySet.add(2);
mySet.add(2);
mySet.add(3);

for (const item of mySet) {
    console.log(item);
}

console.log(mySet.has(1));
console.log(mySet.delete(2));  // returns true if val was in set
console.log(mySet.delete(2));
console.log(mySet);
mySet.clear();
console.log(mySet);
