//for in loop(for iteration by index)
//here key is like index

const obj={
  name:"Achyuth",
  age:12
}

for (const key in obj) {
  console.log(`${key} value is ${obj[key]}`);
//output
//   name value is Achyuth
//   age value is 12
}

//in array
const arr=[1,5,2,6,7]
for (const key in arr) {
 console.log(key);//0 1 2 3 4
 console.log(arr[key]);//1 5 2 6 7 
}



const mp=new Map()  
mp.set("IN","India")
mp.set("US","United States")
mp.set("UN","United Nation")
mp.set("Fr","India")

//for in loop in MAP
//it is not index based so it won't run
for (const key in mp) {
  console.log(key);
}