//Dates
let myDate=new Date()
console.log(myDate);//Not understandable
//we can understand the below one
console.log(myDate.toString());//Fri Feb 02 2024 18:31:50 GMT+0530 (India Standard Time)

console.log(myDate.toISOString());//2024-02-02T13:12:56.741Z

console.log(myDate.toJSON());//2024-02-02T13:13:42.936Z

console.log(myDate.toLocaleString());//2/2/2024, 6:44:42 PM

console.log(myDate.toLocaleDateString());//2/2/2024

console.log(myDate.toLocaleTimeString());//6:44:42 PM

console.log(typeof myDate);//Object

//I can create my own date
let newDate=new Date(2023,0,12)//jan->0 indexing from ZERO
console.log(newDate.toDateString());//Thu Jan 12 2023
//extra time added for the below one
let newDate2=new Date(2023,5,21,12,35,45)
console.log(newDate2.toLocaleString());//6/21/2023, 12:35:45 PM
//Anothe Type
//YYYY-MM-DD
let newDate3=new Date("2023-01-16")//indexing from ONE
console.log(newDate3.toDateString());//Mon Jan 16 2023
//MM-DD-YYYY
let newDate4=new Date("01-16-2023")//indexing from ONE
console.log(newDate4.toDateString());//Mon Jan 16 2023

/***************** Time *******************/
let MyTime=Date.now();
//Time from 1970 to till today in milliseconds
console.log(MyTime);//1706880734418
//Time from 1970 to newDate
console.log(newDate.getTime());//1673461800000

console.log(myDate.getMonth());//1->feb
console.log(myDate.getDay());//5 ->fri