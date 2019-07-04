/*
 Default function parameters allow named parameters to be initialized with default values if no value
 or undefined is passed.
*/

function multiply(a,b=1){
    return a * b;
}

console.log(multiply(5,2)); //10
console.log(multiply(5)); // 5

// Passing undefined vs other falsy values
// Even if the first argument is explicitly set to undefined(though not null or other falsy values), the
// value of the num argument is still the default

function test(num = 1){
    console.log(typeof num);
}

test(); // number
test(undefined); // number

test(''); // string
test(null); // object

// Evaluated at call time
// The default argument is evaluated at call time, a new object is created everytime the function is
// called.

function append(value, array = []){
    array.push(value);
    return array;
}

console.log(append(1)) // [1]
console.log(append(2)) // [2], not [1,2]

// Default parameters are available to later default parameters

function greet(name, greeting, message = greeting + ' ' + name){
    console.log([name, greeting, message]);
}

greet('David','Hi');
greet('David','Hi','Happy Birthday!');

// Functions defined inside the function body
// Functions declared in the function body cannot be referred to inside the outer functions default
// parameters. If attempted, a ReferenceError is thrown. Default parameters are always executed first,
// so function declarations inside the function body evaluates afterwards

// Doesn't work! Throws ReferenceError
/*function f(a = go()){
    function go(){ return ':P'}
}

f();
*/

// Parameters without defaults after default parameters
function f(x = 1, y){
    return [x,y];
}

f() // [1,undefined]
f(2) // [2, undefined]

// Destructured paramter with default value assignment
//You can use default value assignment with the destructuring assignment notation:

function g([x, y] = [1, 2], {z: z} = {z: 3}) { 
    console.log(x + y + z); 
}

g(); // 6