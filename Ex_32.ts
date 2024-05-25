/* 32. Checking Usernames: 
Do the following to create a program that simulates how websites ensure that everyone has a 
unique username.
• Make a list of five or more usernames called current_users.
• Make another list of five usernames called new_users. Make sure one or two of the new usernames 
are also in the current_users list.
• Loop through the new_users list to see if each new username has already been used. If it has, print 
a message that the person will need to enter a new username. If a username has not been used, print 
a message saying that the username is available.
• Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be 
accepted. */



 let current_users =["Ali","Ahmed","maqsood","Mazhar","Momin","Musawir"];

 let New_users = ["Aslam","Imtiyaz","Naveed","Noman","Naseem","Zulfiqar"];

 // we will use forEach method
 New_users.forEach(New_users =>{
    let New_userLower =New_users.toLowerCase();

    // WE WILL USE SOME () METHOD
    let userNameTaken = current_users.some(current_user => current_user. toLowerCase() === New_userLower);

// NOW WE WILL APPLY CONDITION

if(userNameTaken){
    console.log(`${New_users}Needs to choose new username because its already taken`);

} else{
    console.log(`${New_users} is the new member addded`);
    current_users.push(New_users)               // add newuser to current users array.,
}


 });

 console.log(current_users);