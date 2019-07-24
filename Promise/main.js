var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
/* Promise
   The Promise object represents the eventual completion (or failure) of an asynchronous operation, and its resulting value.
*/

var promise1 = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve('foo');
    },300);
});

promise1.then(function(value){
    console.log(value);
});

console.log(promise1);

/* 
A Promise is a proxy for a value not neccessarily known when the promise is created. It allows you to associate handlers with
an asynchronous action's eventual success or failure reason. This lets asynchronous methods return values like synchronous
methods instead of immediately returning the final value, the asynchronous method returns a promise to supply the value at
some point in the future.

A promise is in one of these states:
1) pending - initial state, neither fulfilled, nor rejected.
2) fulfilled - meaning that the operation completed successfully.
3) rejected - meaning that the operation failed.

A pending promise can either be fulfilled with a value, or rejected with a reason(error). When either of these options happ-
-ens, the associated handlers queued up by a promise's then method are called.

As the Promise.prototye.then() and Promise.prototype.catch() methods return promises, they can be chained.
*/

// To provide a function with promise functionality, simply have it return a promise:

function myAsyncFunction(url){
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open("GET",url);
        xhr.onload = () => resolve(xhr.responseText);
        xhr.onerror = () => reject(xhr.statusText);
        xhr.send();
    });
}

myAsyncFunction("http://www.google.co.in").then(() => {
    console.log("Google opened");
});

