/* Generator
    A Generator is a function that can stop midway and then continue from where it stopped.
    A normal function such as this one cannot be stopped before it finishes its task i.e its 
    last line is executed. It follows something called run-to-completion model.
function normalFunc() {
  console.log('I')
  console.log('cannot')
  console.log('be')
  console.log('stopped.')
}
The only way to exit the normalFunc is by returning from it, or throwing an error. If you call the function again, 
it will begin the execution from the top again.

In Javascript, a generator is a function which returns an object on which you can call next(). Every invocation of next()
will return an object of shape - {value: Any, done: true|false}

*/


function * generatorFunction(){
    console.log("This will be executed first.");
    yield 'Hello, ';

    console.log('I will be printed after the pause.');
    yield 'World!';
}

const generatorObject = generatorFunction();

console.log(generatorObject.next().value); // This will be executed first.  Hello,
console.log(generatorObject.next().value); // I will be printed after the pause. World!
console.log(generatorObject.next().value); // undefined

/*
    For creating a generator function, we use function * syntax instead of just function. Any number of 
    spaces can exist between the function keyword, the *, and the function name. Since it is just a function, 
    you can use it anywhere that a function can be used i.e inside objects, and class methods.
    Inside the function body, we don’t have a return. Instead, we have another keyword yield (Line 2). It’s an operator 
    with which a generator can pause itself. Every time a generator encounters a yield, it “returns” the value specified 
    after it. In this case, Hello, is returned. However, we don’t say “returned” in the context of generators. We say the 
    “the generator has yielded Hello, ”. We can also return from a generator. However, return sets the done property to true 
    after which the generator cannot generate any more values.
    function *  generatorFunc() {
    yield 'a';
    return 'b'; // Generator ends here.
    yield 'a'; // Will never be executed. 
    }
*/

