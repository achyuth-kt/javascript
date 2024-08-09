//map is different
//it can manipulate the value for storing variable(var1)
const num=[1,2,3,4,5]
let varr=num.map((val)=> val+2)
console.log(varr);//[ 3, 4, 5, 6, 7 ]

//we can do chaining
// map inside map or filter inside filter or map inside filter
let var1=num.map((val)=> val*10)
            .map((val)=>val+2)
            .filter((val)=>val>30)
console.log(var1);