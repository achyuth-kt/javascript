//Creation
function print(){
  console.log('A');
  console.log('c');
  console.log('h');
  console.log('y');
  console.log('u');
  console.log('t');
  console.log('h');
  return
}

print()

function add(num1,num2){
  return num1+num2
}
const sum=add(4,5)
console.log(sum);

function loggedIn(userName){
  return `${userName} just logged in`
}
console.log(loggedIn("achyuth"));
console.log(loggedIn());//undefined just logged in
//to avoid this we use 
function loggedIn(userName="user"){
  return `${userName} just logged in`
}
console.log(loggedIn())//user just logged in

//Note
function calculatePrice(...num){
  return num
}
//Converted to array
console.log(calculatePrice(100,234,246,765,10));//[ 100, 234, 246, 765, 10 ]


//here first two will be val1,val2 rest are num
function calculatePrices(val1,val2,...num){
  return num
}
console.log(calculatePrices(100,234,246,765,10));//[ 246, 765, 10 ]


//objects in function
const obj={
  name:"Achyuth",
  age:20
}
function userData(object){
  return `${object.name}'s age id ${object.age}`
}

console.log(userData(obj));//Achyuth's age id 20


//Arrays in functions
function secEle(arr){
  return arr[1]
}
console.log(secEle([100,345,654,74,12]));

//Two ways a function can be declared

//General type
function addnumbers(num1,num2){
  return num1+num2
}

//Expression 
//here it is stored in a variable
const addnum=function(num1,num2){
  return num1+num2
}