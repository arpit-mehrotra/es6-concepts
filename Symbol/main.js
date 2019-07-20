/*
The data type symbol is a primitive data type. The Symbol() function returns a value of type symbol, has static properties
that expose several members of built-in objects, has static methods that expose the global symbol registry, and resembles a
built-in object class but is incomplete as a constructor because it does not support the syntax "new Symbol()"

Every symbol value returned from Symbol() is unique. A symbol value may be used as an identifier for object properties; this
is the data type's only purpose.
*/

const symbol1 = Symbol();
const symbol2 = Symbol(42);
const symbol3 = Symbol('foo');

console.log(typeof symbol1); // symbol

console.log(symbol3.toString()) // Symbol('foo')

console.log(Symbol('foo') === Symbol('foo')); // false

//var sym = new Symbol() // TypeError

// If you really want to create a Symbol wrapper object, you can use the Object() function.

var sym1 = Symbol('foo');
console.log(typeof sym1); // symbol
var symObj = Object(sym1);
console.log(typeof symObj); // object

// Shared symbols in the global symbol registry
// The Symbol() function won't create a global symbol that is available in your whole codebase. To create symbols across 
// files, use the methods Symbol.for() and Symbol.keyFor() to set and retrieve symbols from the global symbol registry.

//The method Object.getOwnPropertySymbols() returns an array of symbols and lets you find symbol properties on a 
//given object. 

// Symbols and for...in iteration -  Symbols are not enumerable for for...in iterations

var obj = {};
obj[Symbol('a')] = 'a';
obj[Symbol.for('b')] = 'b';
obj['c'] = 'c';
obj.d = 'd';

for(let o in obj){
    console.log(o); // c d
}

// Symbols and JSON.stringify() - Symbol-keyed properties will be completely ignored when using JSON.stringify()

console.log(JSON.stringify({[Symbol('foo')] : 'foo'})); // {}

