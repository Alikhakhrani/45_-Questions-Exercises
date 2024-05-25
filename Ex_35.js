/*
35. Animals:
Think of at least three different animals that have a common characteristic. Store the names
of these animals in a list, and then use a for loop to print out the name of each animal.
• Modify your program to print a statement about each animal, such as A dog would make a great pet.
• Add a line at the end of your program stating what these animals have in common. You could print
a sentence such as Any of these animals would make a great pet */
var animales = ["cow", "goat", "sheep", "deer", "camell"];
for (var _i = 0, animales_1 = animales; _i < animales_1.length; _i++) {
    var i = animales_1[_i];
    console.log(i);
}
for (var _a = 0, animales_2 = animales; _a < animales_2.length; _a++) {
    var j = animales_2[_a];
    console.log("".concat(j, " is a domestic animale"));
}
console.log("All these animales ".concat(animales[0], ", ").concat(animales[1], ", ").concat(animales[2], "  ").concat(animales[3], ", and ").concat(animales[4], " meet halal in islam"));
