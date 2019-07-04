/*
An arrow function expression is a syntactically compact alternative to a regular function expression, 
although without its own bindings to the this, arguments, super, or new.target keywords. 
Arrow function expressions are ill suited as methods, and they cannot be used as constructors.
*/

var materials = ["Hydrogen","Helium","Lethium","Beryllium"];
console.log(materials.map(material => material.length));

// Basic Syntax
/*
(param1, param2,..., paramN) => { statements }
(param1, param2,..., paramN) => expression
// equivalent to: => { return expression; }

// Parentheses are optional when there's only one parameter name:
(singleParam) => { statements }
singleParam => { statements }

// The parameter list for a function with no parameters should be written with a pair of parenthesis

() => { statements }
*/

// Advanced Syntax
/*
// Parenthesize the body of function to return an object literal expression:
params => ({ foo : bar })

// Rest parameters and default parameters are supported
(param1, param2,...rest) => { statements }
(param1 = defaultValue1, param2, ..., paramN = defaultValueN) => {
    statements
}

// Destructuring with the parameter list is also supported
var f = ([a,b] = [1,2], {x:c} = {x: a+b}) => a + b + c;
f(); // 6
*/

//Shorter functions

var elements = ["Hydrogen","Helium","Lethium","Beryllium"];

var m1 = elements.map(function(element){
    return element.length;
});
console.log(m1);

var m2 = elements.map((element) => element.length);
console.log(m2);

var m3 = elements.map(element => {return element.length});
console.log(m3);

var m4 = elements.map(element => element.length);
console.log(m4);

var m5 = elements.map(({length : lengthFooBarX}) => lengthFooBarX);
console.log(m5);

var m6 = elements.map(({length}) => length);
console.log(m6);

// No separate this

/*
Until arrow functions, every new function defined its own this value based on how the function was
called:
-- A new object in case of a constructor.
-- undefined in strict mode function calls.
-- The base object if function is called as an "object method".


function Person(){
    // The Person() constructor defines `this` as an instance of itself.
    this.age = 0;

    setInterval(function growUp(){
        // In non-strict mode, the growUp() function defines `this`
        // as the global object (because it's where growUp() is executed.), 
        // which is different from the `this`
        // defined by the Person() constructor.
        this.age++;
    },1000);
}

var p = new Person();

//In ECMAScript 3/5, the this issue was fixable by assigning the value in this to a variable 
//that could be closed over.

function Person(){
    var that = this;
    that.age = 0;

    setInterval(function growUp(){
        // The callback refers to the `that` variable of which
        // the value is the expected object.
        that.age++;
    }, 1000);
}

// An arrow function does not have its own this. The this value of the enclosing lexical scope is used;
// arrow functions follow the normal variable lookup rules. So, while searching for this which is not 
// present in current scope they end up finding this from its enclosing scope.

// Thus, in the following code, the this within the function that is passed to the setInterval has the
// same value as this in the lexically enclosing scope.

function Person(){
    this.age = 0;

    setInterval(() => {
        this.age++;
    },0);
}

var p = new Person();

*/
// Relation with strict mode
// Given that this comes from the surrounding lexical context, strict mode rules with regard to this
// are ignored

var f = () => { 'use strict'; return this;};
f() === global; // use window in browser environment

//Invoked through call and apply
//Since arrow functions do not have their own this, the methods call() and apply() can only pass in
//parameters. thisArg is ignored.

var adder = {
    base : 1,

    add: function(a){
        var f = v => v + this.base;
        return f(a);
    },

    addThruCall: function(a){
        var f = v => v + this.base;
        var b = {
            base : 2
        };
        return f.call(b,a);
    }
};

console.log(adder.add(1)); // 2
console.log(adder.addThruCall(1)); // still 2

// No binding of arguments
// Arrow functions do not have their own arguments object. Thus, in this example, arguments is simply
// a reference to the arguments of the enclosing scope.

var arguments = [1,2,3];
var arr = () => console.log(arguments[0]);

arr(); // 1

function foo(n){
    var f = () => arguments[0] + n; // foo's implicit arguments binding. arguments[0] is n
    console.log(f());
}

foo(3) // 6

// In most cases, using rest parameters is a good alternative to using an arguments object.

function foo(n){
    var f = (...args) => args[0] + n;
    return f(10);
}
console.log(foo(1));

// Arrow functions used as methods

'use strict';

var obj = {
    i: 10,
    b: () => console.log(this.i, this),
    c: function(){
        console.log(this.i, this);
    }
}

obj.b(); // prints undefined, Window {...} (or the global object)
obj.c(); // prints 10, Object {...}

// Use of the new operator
// Arrow functions cannot be used as constructors and will throw an error when used with new

//var Foo = () => {};
//var foo = new Foo(); // TypeError: Foo is not a constructor

