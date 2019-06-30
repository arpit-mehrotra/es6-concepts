/*
The for...of statement creates a loop iterating over iterable objects, including: built-in 
String, Array, Array-like objects (e.g., arguments or NodeList), TypedArray, Map, Set, and 
user-defined iterables. It invokes a custom iteration hook with statements to be executed for 
the value of each distinct property of the object.
*/

let iterable = [10,20,30];

for(let value of iterable){
    value += 1;
    console.log(value);
}//11 21 31

//Iterating over String
let iterable2 = 'boo';

for(let value of iterable2){
    console.log(value);
}

//Iterating over TypedArray
let iterable3 = new Uint8Array([0x00, 0xff]);

for(let value of iterable3){
    console.log(value);
}

//Iterating over a Map
let iterable4 = new Map([['a',1],['b',2],['c',3]]);
for(let entry of iterable4){
    console.log(entry);
} //['a',1] ['b',2] ['c',3]

for(let [key,value] of iterable4){
    console.log(value);
} // 1 2 3

//Iterating over a Set
let iterable5 = new Set([1,1,2,2,3,3]);

for(let value of iterable5){
    console.log(value);
} // 1 2 3

(function(){
    for(let argument of arguments){
        console.log(argument);
    }
})(1,2,3); // 1 2 3


