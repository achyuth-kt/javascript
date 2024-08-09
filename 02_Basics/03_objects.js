//Object Literals
const mySym=Symbol("Key1")
const JSuser={
  name:"Achyuht", 
  "full name":"Achyuht K T",
  [mySym]:"MyKey",
  age:20,
  email:"achyuth@gmail.com",
  isLogged:false,
  loggedDay:"Monday"
}
//to access
console.log(JSuser.age)//20
//Imp 
//Another Method
console.log(JSuser["age"]);
//This method is used to access "Full name" or "Symbols"
console.log(JSuser[mySym]);//mykey
console.log(JSuser);
//Output
// {
//   name: 'Achyuht',
//   'full name': 'Achyuht K T',
//   age: 20,
//   email: 'achyuth@gmail.com',
//   isLogged: false,
//   loggedDay: 'Monday',
//   [Symbol(Key1)]: 'MyKey'//specified that it is symbol
// }

//changing
JSuser.email="achyuthmail.com"

//From this we cannot change
// Object.freeze(JSuser)
JSuser.email="achyuthchatgbt.com"
console.log(JSuser.email);

//Functions in Objects
JSuser.greeting=function(){
  console.log("Hello JS user");
}
console.log(JSuser.greeting);//[Function (anonymous)]
console.log(JSuser.greeting());
//output :- Hello JS user
//          undefined

JSuser.greeting2=function(){
  console.log(`Hello JS user, ${this.name}`);
}
console.log(JSuser.greeting2());
//output :- Hello JS user, Achyuth
//          undefined