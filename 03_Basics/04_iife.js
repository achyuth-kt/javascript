//Normal function is Named IIFE


// function about(){
//   console.log("hello");
// };
// about()//Normal function

//iife(which is not named{unnamed iife})
(function neww(){
  console.log("hii");
})
// From this perenthisis we call the above function
();//hii 
//semicolan(";") will tell the function is ended
//to avoid global scope variable pollution

(function user(name){
  console.log(`hello ${name}`);
})
("Achyuth");//hello Achyuth