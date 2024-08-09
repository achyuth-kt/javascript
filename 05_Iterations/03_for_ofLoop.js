//for of
const arr=[1,2,3,4,5]
for (const val of arr) {//1 2 3 4 5 is printedin "next line"
  console.log(val); 
}
//another example 
let str="Achyuth"
for (const st of str) {//A c h y u t h is printed in next line
  console.log(st);
}

//Maps

//declaration of Map
//same as in CPP
const mp=new Map()//no two same keys  
mp.set("IN","India")
mp.set("US","United States")
mp.set("UN","United Nation")
mp.set("Fr","India")

//for loop for map
for (const [key,val] of mp) {
  console.log(key,":-",val);
}

//for objects we cannot use for loop

const obj={
  name:"Achyuth",
  age:12
}
//not possible
//there is a different aproach for this
for (const [key,val] of obj) {
    // console.log(key,":-",val);   //error
}