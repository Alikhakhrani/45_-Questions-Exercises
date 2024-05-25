/* 41. Magicians: 
Make an array of magician’s names. Pass the array to a function called show_magicians(), which 
prints the name of each magician in the array*/

let magicianNames =["Akbar","Nadeem","Hafeez","Shafqat"];
function show_magician(){
    for(let magicianName of magicianNames ){
        console.log(magicianName);
    }
};

show_magician(); // calling function 1st time
show_magician(); // calling function 2nd time