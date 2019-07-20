/* Set
  The Set object lets you store unique values of any type, whether primitive values or object references
*/

const set0 = new Set([1,2,3,4,5]);
console.log(set0.has(1)); //true
console.log(set0.has(5)); //true
console.log(set0.has(6)); //false

var mySet = new Set();
mySet.add(1); // [1]
mySet.add(5); // [1,5]
mySet.add(5); // [1,5]
mySet.add('some text'); //[1,5,'some text']

var o = {a: 1, b: 2};
mySet.add(o);

mySet.add({a:1, b:2}); // o is referencing a different object so this is okay.

mySet.has(1); // true
mySet.has(3); // false
mySet.has(5); // true
mySet.has(Math.sqrt(25)); // true
mySet.has('Some Text'.toLowerCase()); // true
mySet.has(o); // true

mySet.size; // 5

mySet.delete(5); // removes 5 from the set.
mySet.has(5); // false, 5 has been removed

mySet.size; // 4, as one value was just now removed

console.log(mySet);

// Iterating Sets

for(let item of mySet) 
    console.log(item); //  1, "some text", {"a": 1, "b": 2}, {"a": 1, "b": 2} 

for(let item of mySet.keys()) 
    console.log(item); //  1, "some text", {"a": 1, "b": 2}, {"a": 1, "b": 2} 

for(let item of mySet.values()) 
    console.log(item); //  1, "some text", {"a": 1, "b": 2}, {"a": 1, "b": 2} 

for(let [key,value] of mySet.entries()) 
    console.log(key); //  1, "some text", {"a": 1, "b": 2}, {"a": 1, "b": 2} 

// convert Set object to an Array object, with Array.from

var myArr = Array.from(mySet);
console.log(myArr); //[1,"some text",{"a": 1, "b": 2}, {"a": 1, "b": 2}]

//  Converting between Set and Array
mySet2 = new Set([1,2,3,4]);
console.log(mySet2.size); // 4
console.log([...mySet2]); // [1,2,3,4]

//intersect can be simulated via
var set1 = new Set([1,2,3,4]);
var set2 = new Set([3,4,5,6]);

var intersection = new Set([...set1].filter(x => set2.has(x)));
console.log(intersection); // Set {3, 4}

// difference can be simulated as
var difference = new Set([...set1].filter(x => !set2.has(x)));
console.log(difference); // Set {1, 2}

// Iterate set entries with forEach

mySet2.forEach(function(value){
    console.log(value);
})

/* WeakSet
   WeakSet objects are collection of objects. An object in the WeakSet may occur only once; it is unique in the WeakSet's
   collection
   The main difference to the Set object:
   1. In contrast to Sets, WeakSets are collection of objects only and not of arbitrary values of any type.
   2. The WeakSet is weak: References to objects in the collection are held weakly. If there is no other reference to an 
      object stored in the WeakSet, they can be garbage collected.
*/