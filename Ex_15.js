/*15. Changing Guest List:
You just heard that one of your guests can’t make the dinner, so you need to send out a new
set of invitations. You’ll have to think of someone else to invite.
• Start with your program from Exercise 14. Add a print statement at the end of your program stating
the name of the guest who can’t make it.*/

var Myfriends = ["Asad", "Ahmed", "Shafiq", "Shoaib"];
console.log("Due to some urgent work Mr.".concat(Myfriends[1], " cannot attend my party"));
Myfriends[1] = "yasir";
console.log("New list of my friends coming to party\n");
for (var i = 0; i < Myfriends.length; i++) {
    console.log("".concat(i + 1, ". ").concat(Myfriends[i]));
}
