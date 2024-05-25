/* 17. Shrinking Guest List: 
You just found out that your new dinner table won’t arrive in time for the dinner, and you have 
space for only two guests.
• Start with your program from Exercise 16. Add a new line that prints a message saying that you can 
invite only two people for dinner.
• Remove guests from your list one at a time until only two names remain in your list. Each time you 
pop a name from your list, print a message to that person letting them know you’re sorry you can’t 
invite them to dinner.
• Print a message to each of the two people still on your list, letting them know they’re still invited.
• Remove the last two names from your list, so you have an empty list. Print your list to make sure you 
actually have an empty list at the end of your program*/

const guestlist:string[]=["Saleem","Salman","Sohail","Sadam","Safdar","Saeed"];
console.log(guestlist);

console.log("table is not available i can invite only 2 person");

let droped1= guestlist.pop();
console.log(`Sorry Mr. ${droped1} you are not invited`);

let droped2= guestlist.pop();
console.log(`Sorry Mr. ${droped2} you are not invited`);

let droped3= guestlist.pop();
console.log(`Sorry Mr. ${droped3} you are not invited`);

for(let i = 0; i < guestlist.length; i++){
    console.log(`Mr ${guestlist[i]} you are still invited`);
    
}

guestlist.pop();
guestlist.pop();
console.log(guestlist);
