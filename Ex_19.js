/*19. Dinner Guests:
Working with one of the programs from Exercises 14 through 18, print a message indicating
the number of people you are inviting to dinner*/
var friends = ["Akbar", "Ali", "Mazhar", "Wqas", "Jahangir"];
console.log("I am inviting ".concat(friends.length, " friends to dinner whitch are following\n"));
for (var i = 0; i < friends.length; i++) {
    console.log("".concat(i + 1, ".").concat(friends[i]));
}
