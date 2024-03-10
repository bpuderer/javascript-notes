
// insertion order is preserved
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map
//const myMap = new Map();
const myMap = new Map([
  ['a', 1],
  ['b', 2],
]);

myMap.set('c', 3);
myMap.set('d', 4);

// has key
console.log(myMap.has('a'));
console.log(myMap.has('c'));
console.log(myMap.has('e'));

console.log(myMap.get('a'));


// iterate over
for (let key of myMap.keys()) {
    console.log(key);
}
for (let val of myMap.values()) {
    console.log(val);
}
for (let keyvalpair of myMap.entries()) {
    console.log(keyvalpair[0], keyvalpair[1]);
}
myMap.forEach((val, key, map) => console.log(val, key, map));


// replace val
myMap.set('a', 11);
console.log(myMap.get('a'));


// remove key/entry
console.log(myMap.size);
myMap.delete('b');
console.log(myMap.size);
myMap.clear();  // removes all entries
