/*
Spread syntax allows an iterable such as an array expression or string to be expanded in places 
where zero or more arguments (for function calls) or elements (for array literals) are expected, 
or an object expression to be expanded in places where zero or more key-value pairs (for object 
literals) are expected.
*/
function sum(x,y,z){
    return x + y + z;
}
const numbers = [1,2,3];
console.log(sum(...numbers)); // 6
console.log(sum.apply(null,numbers)); // 6

/* Syntax
    For function calls:
    myFunction(...iterableObj)

    For array literals or strings:
    [...iterableObj, '4', 'five', 6]

    For object literals:
    let objClone = {...obj}
*/

// Spread in Function Calls
// Replace apply() - It is common to use apply() in cases where you want to use the elements of an
// array as arguments to a function

function myFunction(x,y,z){
    console.log (x,y,z);
}

var args = [0,1,2];

myFunction.apply(null,args);  // 0 1 2

// With Spread syntax the above expression can be written as:

myFunction(...args);

// Apply for new
// When calling a constructor with new it's not possible to directly use an array and apply
// However, an array can be easily used with new thanks to spread syntax

var dateFields = [1970,0,1]; // 1 Jan 1970
var d = new Date(...dateFields);
console.log(d);

// Spread in Array Literals

var parts = ['shoulders','knees'];
var lyrics = ['head', ...parts, 'and','toes'];
console.log(lyrics); // ["head", "shoulders", "knees", "and", "toes"]

// Copy an array

var arr = [1,2,3];
var arr2 = [...arr];
arr2.push(4);
// arr2 becomes [1,2,3,4]. arr remains unaffected
console.log(arr2);

// A better way to concatenate arrays
// Before Spread
var arr1 = [0,1,2];
var arr2 = [3,4,5];
// Append all items from arr2 to arr1
arr1 = arr1.concat(arr2);
console.log(arr1);

// After Spread
var arr1 = [0,1,2];
var arr2 = [3,4,5];
arr1 = [...arr1, ...arr2]; 
console.log(arr1); // [0,1,2,3,4,5]

//=====================================Spread in Object Literals
var obj1 = {foo: 'bar', x: 42};
var obj2 = {foo: 'baz', y: true};

var clonedObj = {...obj1};
console.log(clonedObj);
var mergedObj = {...obj1,...obj2};
console.log(mergedObj);

//=====================================Rest Parameters

/*
The rest parameter syntax allows us to represent an indefinite number of arguments as an array
Syntax: 
    function f(a, b, ...theArgs) {
        // ...
    }
*/

function myFun(a, b, ...manyMoreArgs){
    console.log("a", a);
    console.log("b", b);
    console.log("manyMoreArgs",manyMoreArgs);
}

myFun("one","two","three","four","five","six");

//a one
//b two
//manyMoreArgs ["three","four","five","six"]

// Destructuring Rest parameters
// Rest parameters can be destructured (arrays only), that means that their data can 
// be unpacked into distinct variables.

function f(...[a,b,c]){
    console.log(a + b + c);
}

f(1); //  NaN
f(1,2,3) // 6
f(1,2,3,4) //6


