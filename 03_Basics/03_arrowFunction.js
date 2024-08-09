//"this" topic

//from the below one we got to know that
//->this is applicable within SCOPE 
//->this is used in OBJECTS not in "functions" or in main code 

const user={
  name: "Achyuth",
  fees: 999,
  welcomeNote: function(){
     console.log(`${this.name} , welcome to our channel`);
     //here if we print this its output will be
     console.log(this);
  }
}
user.welcomeNote()
//output
// Achyuth , welcome to our channel
//{name: 'Achyuth', fees: 999, welcomeNote:[Function:welcomeNote] }


//if we print it outside the Object
console.log(this);//{} which is just an object



function x(){
  console.log(this);
  let name="Achyuth"
  console.log(this.name);//output :- undefined
}
//it will tell about
x()//Output
/*
<ref *1> Object [global] {
  global: [Circular *1],
  clearImmediate: [Function: clearImmediate],
  setImmediate: [Function: setImmediate] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  clearInterval: [Function: clearInterval],
  clearTimeout: [Function: clearTimeout],
  setInterval: [Function: setInterval],
  setTimeout: [Function: setTimeout] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  queueMicrotask: [Function: queueMicrotask],
  structuredClone: [Function: structuredClone],
  atob: [Getter/Setter],
  btoa: [Getter/Setter],
  performance: [Getter/Setter],
  navigator: [Getter],
  fetch: [Function: fetch],
  crypto: [Getter]
}
*/

//ARROW function

//how to declare
const arrow= ()=>{
  let name="Achyuth"
  console.log(this.name);//undefined
  console.log(name);//Achyuth
  console.log(this);//output :- {}
}
//here this output will be "{}"
arrow()


//Why we use it

//Normal arrow function
const addtwo=(num1,num2)=>{
  return num1+num2
}

//Implicit return ( no need to write return)
const addtwoNum=(num1,num2)=>num1+num2
console.log(addtwoNum(3,4));

//we should use perenthisis
//if perenthisis is not used it will show error
const obj=()=>({name:"Achyuth"})
console.log(obj());//{ name: 'Achyuth' }