/*
35. Animals: 
Think of at least three different animals that have a common characteristic. Store the names 
of these animals in a list, and then use a for loop to print out the name of each animal.
• Modify your program to print a statement about each animal, such as A dog would make a great pet.
• Add a line at the end of your program stating what these animals have in common. You could print 
a sentence such as Any of these animals would make a great pet */

let animales =["cow","goat","sheep","deer","camell"];

for(let i of animales){
    console.log(i);
}

for(let j of animales){
    console.log(`${j} is a domestic animale`);
}

console.log(`All these animales ${animales[0]}, ${animales[1]}, ${animales[2]}  ${animales[3]}, and ${animales[4]} meet halal in islam`)