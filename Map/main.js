/* Map
   The Map holds key-value pairs and remembers the original insertion order of the keys. Any value (both objects and 
   primitive values) may be used as either a key or a value
*/

/* Objects and Maps compared
    Object is similar to Map in that both let you set keys to values, retrieve those values, delete keys, and detect 
    whether something is stored at a key. 

    Differences:
    1. The keys of an Object are String and Symbol, whereas they can be any value for a Map including functions, 
       objects or any primitives.
    2. The keys in Map are ordered while keys added to Object are not.
    3. You can get size of a Map easily using the size property, whereas the size of the Object must be determined manually
    4. A Map is an iterable and thus can be directly iterated, whereas iterating over an Object requires obtaining its keys
       in some fashion and iterating over them.
    5. An Object has a prototype, so there are default keys in the map that could collude with your keys if you're not care-
       -ful.
    6. A Map may perform better in scenarios involving frequent addition and removal of key pairs.
*/

var myMap = new Map();

var keyString = 'a string';
    keyObj = {};
    keyFunc = function(){};

// setting the values

myMap.set(keyString,'value associated with a string');
myMap.set(keyObj, 'value associated with an object');
myMap.set(keyFunc, 'value associated with a function');

console.log(myMap.size); // 3

// getting the values

console.log(myMap.get(keyString)); // 'value associated with a string'
console.log(myMap.get(keyObj)); // 'value associated with an object'
console.log(myMap.get(keyFunc)); // 'value associated with a function'

console.log(myMap.get('a string')); // 'value associated with a string'
console.log(myMap.get({})); // undefined
console.log(myMap.get(function(){})); // undefined

// Using NaN as Map keys

var myMap = new Map();
myMap.set(NaN, 'not a number');

console.log(myMap.get(NaN)); // not a number

var otherNaN = Number('foo');
console.log(myMap.get(otherNaN));

// Iterating Map with a for...of

var myMap = new Map();

myMap.set(0, 'zero');
myMap.set(1, 'one');

for (var [key,value] of myMap){
    console.log(key + ' = ' + value);
}//0 = zero
 //1 = one

for(var key of myMap.keys()){
    console.log(key) // 0 1
}

for(var value of myMap.values()){
    console.log(value) // zero one
}

// Iterating Map with forEach

myMap.forEach(function(key,value){
    console.log(key + ' = ' + value);
})//0 = zero
  //1 = one

// Relation with Array Objects

var kvArray = [['key1','value1'],['key2','value2']];
var myMap = new Map(kvArray);

console.log(myMap.get('key1')); //value1

console.log(Array.from(myMap)); // [['key1','value1'],['key2','value2']]

console.log(...myMap); // [['key1','value1'],['key2','value2']]

console.log(Array.from(myMap.keys())); // ["key1", "key2"]

// Cloning and Merging Maps

var original = new Map([
    [1, 'one']
])

var clone = new Map(original);
console.log(clone.get(1)); // one

console.log(original === clone); // false. Useful for shallow comparison

var first = new Map([
    [1, 'one'],
    [2, 'two'],
    [3, 'three'],
])

var second = new Map([
    [1, 'uno'],
    [2, 'dos']
])

var merged = new Map([...first,...second]);
console.log(merged); // Map { 1 => 'uno', 2 => 'dos', 3 => 'three' }

