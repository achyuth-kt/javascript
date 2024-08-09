//order of prototype
//[array,string,function etc]->obj->null
let supes={
  thor:'hammer',
  spiderMan:'web',
  getSuperPower:function () {
    console.log('power is ',this.spiderMan);
  }
}
//let us create a prototype for all objects
Object.prototype.newfunction=function(){
  console.log("new function is added to the prototype");
}

supes.newfunction()//succesfully printed log

let heros=["ironman",'batman']
//here array can also access the newFundction
heros.newfunction()

//but objects cannot access array prototypes
Array.prototype.printer=function(){
  console.log("Arrays can only access not objects");
}
//if object takes this function error occurs
// supes.printer()//error occured\


//Inheritance
let teacher={
  takesClass:true
}
let TAsupport={
  teaches:"JavaScript",
  //accessing the data from teacher to TA support
  __proto__:teacher
}
//or
TAsupport.__proto__=teacher

console.log(TAsupport.takesClass);//accessed


//but it is oldOne
//Modern Syntax is 
Object.setPrototypeOf(TAsupport,teacher)
console.log(TAsupport.takesClass);


//trim and length in one prototype
String.prototype.trueLength=function(){
  console.log(`${this}`);//this means current string
  console.log("length :",this.trim().length);
}
let str="hjfgsdkgjfjk       "
str.trueLength()//here this is "hjfgsdkjfjk"
"hjfgsjklghsdfjkgldfh".trueLength()
//output
// hjfgsjklghsdfjkgldfh
// length : 20