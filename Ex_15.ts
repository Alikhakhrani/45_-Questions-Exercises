/*15. Changing Guest List: 
You just heard that one of your guests can’t make the dinner, so you need to send out a new 
set of invitations. You’ll have to think of someone else to invite.
• Start with your program from Exercise 14. Add a print statement at the end of your program stating 
the name of the guest who can’t make it.*/


const Myfriends:string[]=["Asad","Ahmed","Shafiq","Shoaib"];

 console.log(`Due to some urgent work Mr.${Myfriends[1]} cannot attend my party`);
 Myfriends[1]="yasir"

 console.log(`New list of my friends coming to party\n`);
 
 for(let i = 0; i< Myfriends.length; i++){
    console.log(`${i + 1}. ${Myfriends[i]}`);
    
 }
