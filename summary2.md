# Java script-02 
## Control Flow
- if-else
- switch
- falsy and truthy value
#### if-else
```javascript
//special one
 numb>100 ? console.log("Greater"):console.log("Smaller");
 ```
 ###### falsy value
- false
- 0,-0,0n,NaN
- null,"",undefined

 ###### truthy values
 - "false","0"," "
 - [ ](empty array),{ }(empty object),function()

## Iteration
##### forof
- value will be the output
- forof is not possible for objects
```javascript
const arr=[1,2,3,4,5]
for (const val of arr) {//1 2 3 4 5 is printedin "next line"
  console.log(val); 
}
//another one
let str="Achyuth"
for (const st of str) {//A c h y u t h is printed in next line
  console.log(st);
}
``` 
###### map
- same as in CPP 
```javascript
const mp=new Map()//no two same keys  
mp.set("IN","India")
mp.set("US","United States")
mp.set("UN","United Nation")
mp.set("Fr","India")

//for loop for map
for (const [key,val] of mp) {
  console.log(key,":-",val);
}
```
##### forin
- for in loop is iteration by index
- its not possible for map(because it is not index based)
```javascript
//loop for object
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

```

##### forEach
- function will be there inside it
- In forEach loop return is not possible
```javascript
const lang=["js","java","cpp","py"]

//function can be called
lang.forEach(function (item){
  console.log(item);//js java cpp py is printed
})
//arrow function also
lang.forEach((item)=>{
  console.log(item);//js java cpp py is printed
})

//we can call a function
function printer(item){
  console.log(item);
}

lang.forEach(printer)//js java cpp py is printed

//for each can access 3 components
lang.forEach((item,index,arrr)=>{
  console.log(item,index,arrr);
})
//output
// js 0 [ 'js', 'java', 'cpp', 'py' ]
// java 1 [ 'js', 'java', 'cpp', 'py' ]
// cpp 2 [ 'js', 'java', 'cpp', 'py' ]
// py 3 [ 'js', 'java', 'cpp', 'py' ]
```

##### filters
- Filter will work only for true or false
- filter cannot change the values in storing variable("varr")
```javascript
//to return we use filters
const num=[1,2,3,4,5]
let varr=num.filter((val)=> val>2)
console.log(varr);//[ 3, 4, 5 ]

//or
varr=num.filter((val)=>{
  if(val>2)
  return val
})
console.log(varr);//[ 3, 4, 5 ]
```

##### Maps
- it can manipulate the value for storing variable(var1)
```javascript
const num=[1,2,3,4,5]
let varr=num.map((val)=> val+2)
console.log(varr);//[ 3, 4, 5, 6, 7 ]

//we can do chaining
// map inside map or filter inside filter or map inside filter
let var1=num.map((val)=> val*10)
            .map((val)=>val+2)
            .filter((val)=>val>30)
console.log(var1);
```

##### Reduce

```javascript
//reduce function
const num=[1,2,3,4,5]
let var1=num.reduce((acc,val)=>{
  console.log(`acc :${acc} and val :${val}`);
  return val+acc},0)
  console.log(var1);
//   output
// acc :1 and val :2
// acc :3 and val :3
// acc :6 and val :4
// acc :10 and val :5
// 15

//here initaally acc=0 as given above
         // then acc=acc+val 
      // returns acc; in tthe end

let var2=num.reduce((acc,val)=>acc+val,5)     
console.log(var2);//20
```

