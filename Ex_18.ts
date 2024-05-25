/*18. Seeing the World: 
Think of at least five places in the world you’d like to visit.
• Store the locations in an array. Make sure the array is not in alphabetical order.
• Print your array in its original order.
• Print your array in alphabetical order without modifying the actual list.
• Show that your array is still in its original order by printing it.
• Print your array in reverse alphabetical order without changing the order of the original list.
• Show that your array is still in its original order by printing it again.
• Reverse the order of your list. Print the array to show that its order has changed.
• Reverse the order of your list again. Print the list to show it’s back to its original order.
• Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been 
changed.
• Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its 
order has changed*/


let myplaces: string[]=["karachi","larkana","Hyderabad","lahore","Quetta","kpk"];
// console.log(myplaces);

let copyOfArry=myplaces.slice();
let sortedArry= copyOfArry.sort();
// console.log(sortedArry);

// // printing original arry
// console.log(myplaces);

// reversing original arry
// first we have make a copy of original arry
let copyOfArry2=myplaces.slice();
let reversingOriginalArry=copyOfArry2.reverse();
console.log(reversingOriginalArry);

// printing original arry
console.log(myplaces);

// revers the order of original array
let reversingOriginalArry2= myplaces.reverse();
console.log(reversingOriginalArry2);

let againReverse=reversingOriginalArry2.reverse();
console.log(myplaces);

// sorting original array
let sortoriginalArray=myplaces.sort();
console.log(sortoriginalArray);


let reversesortedArray=sortoriginalArray.reverse();
console.log(reversesortedArray);

