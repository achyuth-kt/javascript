# Java script-04
## OOPs

#### Notes
```javascript
       # Does Javascript has classes

        -  Yes, JavaScript has classes.
        -  Classes were introduced in ECMAScript 2015 (ES6) as a syntactical sugar over JavaScript's existing prototype-based inheritance. 
        - They provide a more familiar and convenient syntax for creating objects and dealing with inheritance.
        -it is proto-type based language

        ## OOP
        ### objects
        -collection of properties and methods
        -Ex : toLowercase(),length(),slice()...

        ## why use oops

        ## parts of object
        object literals(means literally it is an object)

        -Constructor function
        -protoType
        -classes
        -instances(new,this and so on)

        ## 4 pillars of oops
        -abstraction
        -encapsulation
        -inheritance
        -polymorphism
```        

#### Objects
- values inside objects can be accessed by "this"(this.userName)
```javascript
  console.log(this)//inside an object
  //output
  ->entire object
  //if globally printed
  console.log(this)//{}
  ```
  - function as an object
  - also an object for all users
  ```javascript
  const user=function(userName,userId,loggedIn){
    this.userName=userName
    this.userId=userId
    this.loggedIn=loggedIn
    //no need to write it
    return this//(if not there still return the same thing)
  }

  //access
  let user1=new user("Achyuth","achyuth@gmail.com",47867)
  ```
- please know the importance of new in the above code 


- we can add a function to an object
```javascript
user.prototype.addingFunc=function(){
  console.log("function added")
  }
  ```
- if "new: key word not used the above function cannot be accessed

#### Prototype
- order->[1.Array,function,string,etc->2.Object->null]

##### create a prototype
```javascript
Object.prototype.adding=function(){
  console.log("new function added")
}

//access
user.adding()
```
- it is created for object so it can be accessed by
- array,string

#### Inheritance
```javascript
const parent{
  name:"Achyuth"
}
const child{
  age:20
}
Object.setPrototypeOf(child,parent)
//now we can access
child.name
```
- note for strings this
```javascript
str="Achyuth"
str.prototype.this=function(){
  console.log(this)//Achyuth(output)
}
```
## call
- the call() method is used to invoke a function with a specified this value and arguments provided individually. 
- It allows you to call a function in the context of a specific object, even if the function belongs to another object.
```javascript
function setname(userName){
  this.userName=userName
}
function user(userName,email,number){
  setname.call(this,useName)//call
  this.email=email
  this.number=number
}
const user1=("Achyuth","achyuth@gmail.com",9019678239)
console.log(user1)
```

#### class
- inside constructor this is used

#### Inheritance
```javascript
class User{
  constructor(userName){
    this.userName=username
  }
}
class Teacher extends User{
   constructor(userName,Id){
    super(userName)
    this.Id=Id
   }

   //but
console.log(teacher instanceof Teacher);//True
console.log(Teacher instanceof User);//false
console.log(teacher instanceof User);//True
}
```

#### static
- cannot access
```javascript
class User{
  constructor(userName){
    this.userName=username
  }
  static function(){
    console.log("Cannot access")
  }
}
```

#### Object Properties
```javascript
const property=Object.getOwnPropertyDescriptor(Math,"PI")

console.log(property);
//OUTPUT(here writable is false)so we cannot reWrite the value
// {
//   value: 3.141592653589793,
//   writable: false,
//   enumerable: false,(means iteratable or not)
//   configurable: false
// }


//we can change the properties
Object.defineProperty(Math,'PI',{
  writable: true,
  enumerable: true,//it is not iteratable also
})
```

## Getter & Setter
- if you have defined getter then you have to define setter
```javascript
class User{
  constructor(userName,email,password){
      this.userName=userName
      this.email=email
      this.password=password
  }
  get email(){
    //if there is (this.email)//error will occur
    return this._email.toUpperCase()
  }
  set email(value){
    this._email=value
  }
}
const user1=new User("Achyuth","achyuth@gmail.com",378)
console.log(user1.email);
```