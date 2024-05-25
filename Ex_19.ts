/*19. Dinner Guests: 
Working with one of the programs from Exercises 14 through 18, print a message indicating 
the number of people you are inviting to dinner*/

 let friends: string[]=["Akbar","Ali","Mazhar","Wqas","Jahangir"];
 console.log(`I am inviting ${friends.length} friends to dinner whitch are following\n`);
 
 for(let i = 0; i< friends.length; i++){
    console.log(`${i + 1}.${friends[i]}`);
    
 }