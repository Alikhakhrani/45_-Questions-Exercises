/* 41. Magicians:
Make an array of magician’s names. Pass the array to a function called show_magicians(), which
prints the name of each magician in the array*/
var magicianNames = ["Akbar", "Nadeem", "Hafeez", "Shafqat"];
function show_magician() {
    for (var _i = 0, magicianNames_1 = magicianNames; _i < magicianNames_1.length; _i++) {
        var magicianName = magicianNames_1[_i];
        console.log(magicianName);
    }
}
;
show_magician(); // calling function 1st time
show_magician(); // calling function 2nd time
