/* 30. Hello Admin: 
Make an array of five or more usernames, including the name 'admin'. Imagine you are writing 
code that will print a greeting to each user after they log in to a website. Loop through the array, and 
print a greeting to each user:
• If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a 
status report?
• Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again */

import { log } from "console";

let userName: string[]=["Mussawir","Ali","Amir","Admin","Shafiq","Salman"];
for(let i = 0; i< userName.length;i++){
    if(userName[i]=="Admin"){
        console.log(`\n Hello ${userName [i]}would you like to see a status report\n`);
    } else{
        console.log(`Hello ${userName} thank you for logging again`)
    }
}