/* 24. More Conditional Tests:
You don’t have to limit the number of tests you create to 10. If you want to try more
comparisons, write more tests. Have at least one True and one False result for each of the following:
• Tests for equality and inequality with strings
• Tests using the lower case function
• Numerical tests involving equality and inequality, greater than and less than, greater than or equal
to, and less than or equal to
• Tests using "and" and "or" operators
• Test whether an item is in an array
• Test whether an item is not in an array */
// let MyName = "Ali";
// console.log(MyName == "Ali");       // true  equal to 
// console.log(MyName !== "ali");      // true  not equal to
// // numerics 
// let Mynumber = 10;
// console.log(Mynumber == 10);        // true
// console.log(Mynumber !== 10);       // true
// console.log(Mynumber > 5);          // true     greater than 
// console.log(Mynumber < 5);          // false     less than 
// console.log(Mynumber <= 5);          // false     less than or  equal to
// console.log(Mynumber >= 5);          // true    greater than or equal to 
// and & ==== or |
// let num = 10;
// let Num = 5;
// console.log(num> 9 && Num < 5);
// //          true test false test
// console.log(num> 9 || Num < 5);
//          true test false test
var Myarray = [5, 6, "Ali", "Amir"];
var mystring = "Alam";
console.log(Array.isArray(Myarray));
console.log(Array.isArray(mystring));
