/* 44. Sandwiches: 
Write a function that accepts an array of items a person wants on a sandwich. The function 
should have one parameter that collects as many items as the function call provides, and it should 
print a summary of the sandwich that is being ordered. Call the function three times, using a different 
number of arguments each time*/

// array as a parameter

function mySandwitches(...items:string[]){
return `I want sandwitche of ${items}`;
};

let collection1=mySandwitches("Ham","cheez","lettuce");
let collection2=mySandwitches("Turkey","swiss");
let collection3=mySandwitches();

console.log(collection1);
console.log(collection2);
console.log(collection3);