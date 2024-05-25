/* 31. No Users: 
Add an if test to Exercise 30 to make sure the list of users is not empty.
• If the list is empty, print the message We need to find some users!
• Remove all of the usernames from your array, and make sure the correct message is printed */



let userName2: string[]=["Mussawir","Ali","Amir","Admin","Shafiq","Salman"];

// to remove all members
// userName2=[];
// console.log(UserName);

if(userName2.length> 0){

    for(let i =0; i< userName2.length;i++){
        if(userName2[i]== "admin"){
            console.log(`\n Hello ${userName2[i]} would you like to see a status report?\n`)
        } else{
            console.log(`Hello ${userName2} thank you for loging again`)
        }
    } 
} else{
    console.log("we need to find  some users")}