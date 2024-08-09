# Java script-01

## Basics -01

#### Variables
- var let const empty
- empty example
```javascript
school="402"
console.log(school);
```
#### DataTypes

###### primitive(call buy value)
- Number,big int,string,bool,undefined,null,symbol
```javascript
console.log(Number(school))
console.log(typeof(school));
```

###### non primitive(call by reference)
- functions,array,objects

#### Operators Comparators
- power->**       ===

#### String
- we can create by "let str=new String("ACHYUTH")"
- properties->learn

#### Number
- .toFixed(2)->12.56  .toPrecise(3)->130(129.84)
- properties

#### Math 
- Math.abs(-8)->8(modulus),.round(4.7)->5,.ceil(2.1)->3,.floor(2.9)->2
- properties

#### Date & Time
```javascript
let date=new Date()//todays date and Time
let date=new Date(2023,0,17)//month->0 base indexing
let date=new Date("2023-12-23")->YYYY-MM-DD
let date=new Date("01-14-2020")->MM-DD-YYYY
```
- properties

## Basics-02(array,object) :call by reference

#### arrays

###### Basics
```javascript
//different type of creating an array
let arr=new Array(1,2,3,4,5,6)
arr.push(7)//7 added
arr.pop()//7 removed(last ele removed)

arr.unshift(12)//12 is added at zeroth position
arr.shift()//12 is removed 

let aeeStr=arr.join()//converted to String

//slice(Original array is not altered)
console.log(arr.slice(0,3))//1,2,3//[0,3)
//original array will be 1,2,3,4,5,6

//spice
console.log(arr.spice(0,3))//1,2,3,4//[0,3]
//original array will be 5,6
```

###### concatination

```javascript
let arr1
let arr2
let arr3=arr1.concat(arr2)

//for n number of arrays
let arrN=[...arr1,...arr2,...arr3,...arr4,...arr5]
```
###### Flat
```javascript
const newArr=[1,5,[4,2,7],[3,6,[4,9,0]]]
//to flatten it we use
const flatArr=newArr.flat(3)//because here max depth is three
//we can give infinity also
```

###### Properties
```javascript
//check it is array or not
console.log(Array.isArray("achyuth"));

//converted to array
console.log(Array.from("Achyuth"));//[ A,c,h,y,u,t,h ]

//cannot convert an object
console.log(Array.from({name:"Achyuth"}));//empty
```

#### Objects

##### Properties

###### accessing symbol
```javascript
const symb=Symbol("Key1")
let user={
  "name":"Achyuth",
  //for symbols
  [symb]:"Hell"
}
//access
console.log(user["name"])//or normal one
consile.log(user[symb])
//freeze(we cannot change)
Object.freeze(user)
```

###### Merge
```javascript
//merge 2 objects

let obj3=Object.assign(obj1,obj2)
// it will be like
// obj1=obj1+obj2
//then obj3=obj1
//if i print obj1 it will be obj1+obj2

//correct way
let obj3=Object.assign({},obj1,obj2)
//The empty perenthesis is because the values of "obj1","obj2" will be stored in here ->{} then assigned to obj3

another simple method
let obj3={...obj1,...obj2}
```
###### key & value
```javascript
console.log(Object.key(obj))//to print all key in array form
console.log(Object.value(obj))//to print all value in array form

//both keys and values
console.log(Object.entries(obj));
//output
// [
//   [ 'id', '432apd' ],
//   [ 'name', 'Chomu' ],
//   [ 'email', 'ach@gmail.com' ],
//   [ 'isLogged', false ]
// ]

//check whether entries is present or not
console.log(tinder.hasOwnProperty("isLogged"));//true
```

###### De-structuring
```javascript
const course={
  courseName:"JS basics",
  fees:999,
  duration:"1 Month"
}
//Instead of course.courseName we will use courseName
const {courseName}=course
console.log(courseName);
//specifing 
//here we gave which ever name we want
const {courseName:Cname}=course
console.log(Cname);
```
- In object to access we use this(this.name)

## Basics-03(functions)

#### Functions

##### basics


###### undefined->parameter
```javascript
function loggedIn(userName){
  return `${userName} just logged in`
}
//empty means undefined
console.log(loggedIn());//undefined just logged in
//to avoid this we use 
function loggedIn(userName="user"){
  return `${userName} just logged in`
}
console.log(loggedIn());//user just logged in
```

###### ...num
```javascript
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
```

##### Scopes

```javascript
//for this i will call the function before
console.log(addnumbers(5,6));//No error
function addnumbers(num1,num2){
  return num1+num2
}


// if i call this function before
// ther will be error 
console.log(addnum(7,2));//it will tell addnum not initialized
const addnum=function(num1,num2){
  return num1+num2
}
```

##### Arrow function
- In arrow function this is not used

###### declare
```javascript
const arrow= ()=>{
  let name="Achyuth"
  console.log(this.name);//undefined
  console.log(name);//Achyuth
  console.log(this);//output :- {}
}
//here this output will be "{}"
arrow()
```

###### Return pattern

```javascript
//Implicit return ( no need to write return)
const addtwoNum=(num1,num2)=>num1+num2
console.log(addtwoNum(3,4));

//we should use perenthisis
//if perenthisis is not used it will show error
const obj=()=>({name:"Achyuth"})
console.log(obj());//{ name: 'Achyuth' }
```

##### IIFE
- Normal function is IIFE
###### unnamed iife

```javascript
(function neww(){
  console.log("hii");
})
// From this perenthisis we call the above function
();//hii 
//semicolan(";") will tell the function is ended
//to avoid global scope variable pollution
```
