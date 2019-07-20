/* Iterable Protocol 
The iterable protocol allows Javascript objects to define or customize their iteration behavior such as what values are
looped over in a for...of construct.
Some built-in types are built-in iterables with a default iteration behavior, such as Array or Map, while other types
(such as Objects) are not.

In order to be iterable, an object must implement the @@iterator method, meaning that the object(or one of the objects in
its prototype chain) must have a property with a @@iterator key which is available via constant Symbol.iterator

Whenever an object needs to be iterated (such as at the beginning of a for..of loop), its @@iterator method is called 
with no arguments, and the returned iterator is used to obtain the values to be iterated.
*/

/* Iterator Protocol
The iterator protocol defines a standard way to produce a sequence of values(either finite or infinite), and potentially
a return value when all values have been generated.

An object is an iterator when it implements the next() method with the following semantics:

A zero arguments function that returns an object with at least the following two properties:

done (boolean) - 
Has the value true if the iterator is past the end of the iterated sequence. In this case value optionally specifies 
the return value of the iterator.
Has the value false if the iterator was able to produce the next value in the sequence. This is equivalent of not 
specifying the done property altogether.

value - any JavaScript value returned by the iterator. Can be omitted when done is true.
*/

// A String is an example of a built in iterable object:

var someString = 'hi';
console.log(typeof someString[Symbol.iterator]); // function

var iterator = someString[Symbol.iterator]();
console.log(iterator.next()); // {value: 'h', done: false}
console.log(iterator.next()); // {value: 'i', done: false}
console.log(iterator.next()); // {value: undefined, done: true}

// Spread syntax uses iteration protocol under the hood
console.log([...someString]);

/*
String, Array, TypedArray, Map and Set are all built-in iterables, because each of their prototype objects implements 
an @@iterator method.
*/

