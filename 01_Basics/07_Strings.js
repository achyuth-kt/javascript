let name="Achyuth"
let RepositoryCnt=12

console.log(name+RepositoryCnt+" Value");
//instead of using the above we can use
console.log(`Hello my name is ${name} and my repo count is ${RepositoryCnt}`);

const str=new String("Achyuth")
//it is standard way of declaring string
//split,length,concatenate,trim etc...

console.log(str[0]);//A
console.log(str.length);//7
console.log(str.toUpperCase());//ACHYUTH 
                             //but original str is not altered
console.log(str.charAt(4));//y
console.log(str.indexOf('h'));//3                             
const newstr=str.substring(0,3)//negative index not possible
console.log(newstr);//Ach
const anotherStr=str.slice(-3,7)  //from last 3rd ele to from first 7th ele 
console.log(anotherStr);//uth

const str1="     Achyuth     "//trimstart for front and trimend for back side
console.log(str1.trim());//it will trim dowm the spaces
//if specified it can be front or back
// if not both as shown above 
const str2="Achyuth-is-in-banglore"
console.log(str2.replace('-','$'));//Output :- Achyuth$is-in-banglore
console.log(str2.includes('is'));//whether is present in str2 or not 
console.log(str2.split('-'))//it will be converted to array sepearated by '-'