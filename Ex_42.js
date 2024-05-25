/* 42. Great Magicians:
Start with a copy of your program from Exercise 41. Write a function called make_great() that
modifies the array of magicians by adding the phrase the Great to each magician’s name. Call
show_magicians() to see that the list has actually been modified */
var MagicianNames = ["Shoaib", "Shahid", "Salman", "Sameer"];
function show_magicians(greet) {
    for (var _i = 0, MagicianNames_1 = MagicianNames; _i < MagicianNames_1.length; _i++) {
        var item = MagicianNames_1[_i];
        console.log(greet, item);
    }
}
;
show_magicians("Hello how are you Mr");
show_magicians("Hello,");
