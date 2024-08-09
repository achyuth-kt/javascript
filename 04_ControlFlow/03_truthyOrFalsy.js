//Example
const varr="hell"
if(varr){
  console.log("Truthy");
}


//Falsy Examples
// false,0,-0,0n(Bigint),""(empty String),null,undefined,NaN

//Truthy Examples
//"false","0"," ",[](empty array),{}(empty object),function()


//Nullish coalescing Operator:Null (or) undefined

//means it will ignore if null or undefined and takes the next one

let var1=5 ?? 10
console.log(var1);//5

 var1=null ?? 15
 console.log(var1);//15

 var1=undefined ?? "hello"
 console.log(var1);

 var1=undefined ?? null ?? false ?? "hii"
 console.log(var1);//false


