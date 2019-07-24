/* Proxy
   The Proxy object is used to define custom behavior for fundamental operations(e.g. property lookup, assignment,
   enumeration, function invocation etc.)

   Syntax:
   var p = new Proxy(target, handler);

   target - A target object to wrap with Proxy. It can be any sort of object, including a native array, a function, or
   even another proxy.
   handler - An object whose properties are functions which define the behavior of the proxy when an operation is perf-
   -ormed on it.

   Methods of the handler object:

   The handler object is a placeholder object which contains traps for Proxy.
   All traps are optional. If a trap is not defined, the default behavior is to forward the operation to the target.
*/

/*
    In this example the number 37 gets returned as the default value when the property name is not in the object
*/

var handler = {
    get : function(obj,prop){
        return prop in obj ? obj[prop] : 37;
    }
}

var p = new Proxy({}, handler);
p.a = 1;
p.b = undefined;

console.log(p.a, p.b);
console.log('c' in p, p.c);

// No-op forwarding proxy

var target = {};
var p = new Proxy(target, {});
p.a = 37; 
console.log(target.a);

/*
    Validation - With a Proxy, you can easily validate the passed value for an object. This example uses the set handler
*/

var validator = {
    set: function(obj,prop,value){
        if(prop === 'age'){
            if(!Number.isInteger(value)){
                throw new TypeError('The age is not an integer');
            }
            if(value > 200){
                throw new TypeError('The age seems invalid');
            }

            // The default behavior to store the value
            obj[prop] = value;
            return true;
        }
    }
};

let person = new Proxy({},validator);
person.age = 100;
console.log(person.age);
//person.age = 'young'; //Throws an exception
//person.age = 300; //Throws an exception
