//// Ejercicios - Constructores y Prototipos ////

/* Extending JavaScript Objects: Simple Math Methods del autor arnisritins
https://www.codewars.com/kata/581534b8d5fae4428e00001e */
/* DESCRIPTION: Your task is to extend JavaScript Number object with methods .add(n), .sub(n), .mul(n), .div(n), .pow(n) and .sqr(), 
so you can perform simple mathematical operations on numbers just like this:
var n = 25;
n.add(4);  // 29   (addition)
n.sub(3);  // 22   (subtraction)
n.mul(2);  // 50   (multiplication)
n.div(5);  // 5    (division)
n.pow(2);  // 625  (power)
n.sqr();   // 5    (square root)*/

var n = [];

Number.prototype.add = function (a) {
    return this + a;
}
Number.prototype.sub = function (a) {
    return this - a;
}
Number.prototype.mul = function (a) {
    return this * a;
}
Number.prototype.div = function (a) {
    return this / a;
}
Number.prototype.pow = function (a) {
    return Math.pow(this,a); //devuelve la base elevada al exponente
}
Number.prototype.sqr = function (a) {
    return Math.sqrt(this); //returns the square root of a number
}


/* Arrays are Objects del autor MentalAtom
https://www.codewars.com/kata/552fc8d81b59b6b4820000a4 */
/* DESCRIPTION:
In Javascript, Arrays are just a special kind of Object. Don't believe me? Try this...
typeof []; // "object"
This allows us to do some pretty cool things with Arrays that you may not even know, like adding methods. This is basically how jQuery works (what is returned is just an Array with all the jQuery methods shoved in).
There should be a constructor function named "magicArray" which returns an array containing all argunents, with the methods in fn also attached. If the first argument is an Array it should enhance this array with the methods.
Your task, should you choose to accept it is to make an object named "fn" and add to it the following methods (we can do most of it natively, but just to prove the point):
getFiltered: function(predicate) - Returns all the items in the array which pass the predicate in a magicArray.
getRejected: function(predicate) - Returns all the items in the array which fail the predicate in a magicArray.
getSplit: function(predicate) - Return an object with a "pass" property containing all the items which pass the predicate, and a property named "fail" containing all the items which did not (in a magicArray for each).
count: function() - Return the length of the array.
double: function() - Append all items in the array to itself in the same order. Return the array again with all methods. This should change the values of the source array.
multiply: function(n) - Multiply all items in the array by n (this will only be called with valid numbers). Return the array with all methods. This should change the values of the source array.
first: function() - Return an array with all methods, only containing the first item
last: function() - Return an array with all methods, only containing the last item
eq: function(n) - Return an array with all methods, only containing the eq item (e.g. 0 would return the first, 1 the 2nd etc.). Just like in jQuery.
Example: */
/* var testArray = magicArray(1, 2, 3, "a", "b", "c"), // [1, 2, 3, "a", "b", "c"]
    testArrayAlt = magicArray([1, 2, 3, "a", "b", "c"]); // [1, 2, 3, "a", "b", "c"]
// getFiltered
var filtered = testArray.getFiltered(function(a) { return typeof a === "string"; }); // ["a", "b", "c"];
// getRejected
var rejected = testArray.getRejected(function(a) { return typeof a === "string"; }); // [1, 2, 3];
// getSplit
var split = testArray.getSplit(function(a) { return typeof a === "string"; }); 
/* {
  pass: ["a", "b", "c"],
  fail: [1, 2, 3]
} */
// count
/* var length = testArray.count(); // 6
// double
var double = magicArray("a", "b", "c").double(); // Example below
// ["a", "b", "c"] => ["a", "b", "c", "a", "b", "c"]
// multiply
var multiplied = magicArray(1, 2, 3).multiply(2); // [2, 4, 6]
// first
var first = testArray.first(); // [1]
// last
var last = testArray.last(); // ["c"]
// eq
var eq = testArray.eq(2); // [3]
/* Methods can be chained, because they all return another instance */
/* var testArrayTwo = magicArray(1, 2, 3);
var result = testArrayTwo.double().multiply(2); // [2, 4, 6, 2, 4, 6]
result.multiply(2).double(); // [4, 8, 12, 4, 8, 12, 4, 8, 12, 4, 8, 12]
testArrayTwo.multiply(2).first().double().double(); // [2, 2, 2, 2];
// See above for 'split' variable.
split.pass.double(); // ["a", "b", "c", "a", "b", "c"];
split.fail.double(); // [1, 2, 3, 1, 2, 3];
/* Also works with native array functions */
/* testArrayTwo.double().filter(function(a) {
  return a === 2;
}); // [2, 2]; */