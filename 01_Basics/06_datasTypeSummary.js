// Two Types 
// Primitive and Non-primitive(Reference)

// 1 Primitive 
//7 Types 
//1 String 2 Number 3 BigNumber 4 Boolean
//5 Symbol 6 null 7 undefined

//big number is declared as
const bignum=1234n;
console.log(typeof bignum);//bigint


//about symbol
const id=Symbol('123');//here id !=secId
const secId=Symbol('123');//this is the special property
console.log(id===secId);//false


//Non-primitive(Reference)
//Types:- Array,Objects,Functions

//declaration
//Array
const name=["Achyuht","Punith","Raj"]

//Object
let myObj={
  name: "Achyuth",
  age: 20
}
//function
let myFunction=function(){
  console.log("Hello World");
}


//DataType : Output
//Undefined : undefined
//Number : number
//BigInt : bigint
// String : string 
// null : object 
//Boolean : boolean
//Symbol : symbol


//Array : object
//Object : object
//Function : function  (object function)


//Memory Allocation in Primitive and Reference 

//Primitive :- Stack  (Call by value)

//Ex
let x=10;
let y=x;
y=4;
console.log(x);//it will be 10
         
//Non Primitive :- Heap (Call by reference)
let obj1={
  name:"Achyuth",
  age:20
}
let ogj2=obj1
obj2.name="Achyuth K T"
console.log(obj1.name);//it will be changed to
                       //"Achyuth K T"

//Another Ex
//you can change values of array items in a function 