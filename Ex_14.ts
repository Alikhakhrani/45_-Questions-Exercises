/*14. Guest List: 
If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that 
includes at least three people you’d like to invite to dinner. Then use your list to print a message to 
each person, inviting them to dinner.*/

const myfriends:string[]=["Ali","Ahmed","Amir","Anus"];
// for(let i=0;i<myfriends.length; i++){
//     console.log(`Mr.${myfriends[i]}! I invite you for dinner on sunday\n`); 
// }

// // 2nd method

myfriends.map((ib)=>{
console.log(`Mr.${ib}! you are invited to my dinner on monday`);

})