"use strict";
exports.__esModule = true;
function greet(name) {
    console.log("Hello, ".concat(name || 'Anonymous', "!"));
}
greet(); // Prints: Hello, Anonymous!
var createArrowGreeting = function (name) {
    if (name) {
        return "Hello, ".concat(name, "!");
    }
    return "undefined";
    // Typescript Error: Type 'undefined' is not assignable to type 'string'.
};
createArrowGreeting("hello");
