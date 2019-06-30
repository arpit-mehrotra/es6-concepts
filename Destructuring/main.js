/* 
The destructuring assignment syntax is a Javascript expression that makes it possible to
unpack values from arrays, or properties from objects, into distinct variables
*/

[a , b] = [10, 20];

console.log(a); // 10
console.log(b); // 20

[a, b, ...rest] = [10,20,30,40,50];
console.log(rest); // [30,40,50]

var x = [1,2,3,4,5];
var [y,z] = x;
console.log(y); //1
console.log(z); //2

var foo = ["one","two","three"];
var [one,two,three] = foo;
console.log(one);
console.log(two);
console.log(three);

/*
A variable can be assigned a default, in the case that the value unpacked from the array is undefined.
*/
var a,b;
[a=7,b=5] = [1];
console.log(a); //1
console.log(b); //5

/*
Two variables values can be swapped in one destructuring expression.
*/

var a = 1;
var b = 3;

[a,b] = [b,a];
console.log(a); //3
console.log(b); //1

function f(){
    return [1,2];
}

var c,d;

[c,d] = f();
console.log(c); //1
console.log(d); //2

//Ignoring some returned value

function g(){
    return [1,2,3];
}

var [a, , b] = g();
console.log(a); // 1
console.log(b); // 3

//============================================================Object Destructuring

var o = { p: 42, q: true};
var {p,q} = o;
console.log(p);
console.log(q);

//Assignment without declaration

var e,f;
({e,f} = {e:1,f:2});
console.log(e); //1
console.log(f); //2

//Assigning to new variable names

var m = { p: 42,q: true};
var {p: foo, q: bar} = m;
console.log(foo); // 42
console.log(bar); // true

//A variable can be assigned a default, in the case that the value 
//unpacked from the object is undefined.

var {a = 10, b = 5} = {a: 3};
console.log(a); //3
console.log(b); //5

//Combined array and object destructuring
const props = [
    {id: 1, name: 'Fizz'},
    {id: 2, name: 'Buzz'},
    {id: 3, name: 'FizzBuzz'}
];

const [, , { name }] = props;

console.log(name); //FizzBuzz