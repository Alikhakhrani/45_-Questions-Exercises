/* 43. Unchanged Magicians:
Start with your work from Exercise 40. Call the function make_great() with a copy of the array
of magicians’ names. Because the original array will be unchanged, return the new array and store it
in a separate array. Call show_magicians() with each array to show that you have one array of the
original names and one array with the Great added to each magician’s name. */
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var MagicianNames2 = ["Shoaib", "Shahid", "Salman", "Sameer"];
// MAKE A COPY OF ARRAY
var magicianSnamecopy = __spreadArray([], MagicianNames2, true);
function show_Magicians(greet) {
    var withGreetings = "";
    for (var _i = 0, magicianSnamecopy_1 = magicianSnamecopy; _i < magicianSnamecopy_1.length; _i++) {
        var item = magicianSnamecopy_1[_i];
        withGreetings += "".concat(greet, " ").concat(item, "\n");
    }
    return withGreetings;
}
;
var mygreetings = show_Magicians("Hello");
var makeArray = mygreetings.split("\n");
console.log(makeArray);
console.log(MagicianNames2);
