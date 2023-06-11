
// In javascript functions are first class citizens
// This means that functions can be treated like any other variable, for example:
// 1. A function can be assigned to a variable
// 2. A function can be passed as an argument to another function
// 3. A function can be returned from another function

function sayHello() {
    return function() {
        return "Hello World!";
    }
}

function greet(fnMessage) {
    console.log(fnMessage());
}

greet(sayHello);

// Higher order functions either take a function as an argument or return a function as a result
// Map, filter or reduce are all examples of higher order functions