function multiplyBy5(num){
  this.num=num
  return num*5
}
multiplyBy5.power=2
console.log(multiplyBy5(5));
//function is an object it can have properties of function and object
//it can access prototypes of object
console.log(multiplyBy5.power);

//it will be "{}" means it has stored various methods in it
//it also stored this.num in it
console.log(multiplyBy5.prototype);


function userDetails(name,score){
  this.name=name
  this.score=score
}
//adding one more function to the prototype
userDetails.prototype.incrementer=function(){
  this.score++
  console.log(this.score);
}
userDetails.prototype.printName=function(){
  console.log(`Name :${this.name}`);
}
//above two functions are added in prototype

//calling function

const user1=userDetails("Achyuth",45)
const user2=userDetails("Ram",79)
//the above code will give error for accessing the prototype
// user1.printName()
// user2.incrementer()
//because new keyword is not used

//correct one (this is the importance of new keyword)
const user3=new userDetails("Achyuth",45)
const user4=new userDetails("Ram",79)
user3.printName()//Name :Achyuth
user4.incrementer()//80

//some importent Notes

/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/