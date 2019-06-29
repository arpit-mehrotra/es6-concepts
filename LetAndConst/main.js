let x = 1;

if(x === 1){
    let x = 2;
    console.log(x); //Expected output : 2
}

console.log(x); //Expected output : 1


function vartest(){
    var x = 1;
    if(true){
        var x = 2; //same variable
        console.log(x); // 2
    }
    console.log(x); // 2
}

vartest();

function lettest(){
    let x = 1;
    if(true){
        let x = 2; // different variable
        console.log(x); // 2
    }
    console.log(x); // 1
}

lettest();

var x1 = 'global';
let x2 = 'global';

console.log(this.x1); //global
console.log(this.x2); //undefined

/*
let bindings are created at the top of the (block) scope containing the declaration, 
commonly referred to as "hoisting". Unlike variables declared with var, which will start 
with the value undefined, let variables are not initialized until their definition is evaluated. 
Accessing the variable before the initialization results in a ReferenceError. The variable is 
in a "temporal dead zone" from the start of the block until the initialization is processed.
*/

function doSomething(){
    console.log(bar); //undefined
    console.log(foo); //ReferenceError
    var bar = 1;
    let foo = 2;
}

//doSomething();

/*
Unlike with simply undeclared variables and variables that hold a value of undefined, 
using the typeof operator to check for the type of a variable in that variable's 
TDZ will throw a ReferenceError
*/

console.log(typeof undeclaredVariable); //undefined
//console.log(typeof i); ReferenceError
let i = 10;


//=======================================================================Const

const number = 42;

try{
    number = 99;
}
catch(err){
    console.log(err); // TypeError: Assignment to Constant Variable
}

console.log(number);

const MY_OBJECT = {'key':'value'};
//MY_OBJECT = {'OtherKey':'value'}; // TypeError - Assignment to constant variable
Object.freeze(MY_OBJECT);
MY_OBJECT.key = 'newvalue';
console.log(MY_OBJECT);

