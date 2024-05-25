/*13. Your Own Array: 
Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list 
that stores several examples. Use your list to print a series of statements about these items, such as 
“I would like to own a Honda motorcycle.”*/

const mytrans:string[]=["car","bike","bus","train","aeroplane"];

// 1st method 
// for(let i = 0; i<mytrans.length; i++){
//     console.log(`I would like to own a ${mytrans[i]}`);
    
// }

mytrans.map((ib)=>{
    console.log(`I would like to own a ${ib}`);
    
})