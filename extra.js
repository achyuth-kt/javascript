//variables 
// var let const empty
school="402"
console.log(school);

//data types
//primitive(call buy value)
// Number,big int,string,bool,undefined,null,symbol
console.log(Number(school))
console.log(typeof(school));
//non primitive(call by reference)
//functions,array,objects

//operators   //comparators
//power **     ===

//string
//we can by "let str=new String("ACHYUTH")
//properties->learn

//Number
//.toFixed(2)->12.56  .toPrecise(3)->130(129.84)
//properties

// Math 
//Math.abs(-8)->8(modulus),.round(4.7)->5,.ceil(2.1)->3,.floor(2.9)->2
//properties

//Date & Time
//let date=new Date()//todays date and Time
//let date=new Date(2023,0,17)//month->0 base indexing
//             Date("2023-12-23")->YYYY-MM-DD
//             Date("01-14-2020")->MM-DD-YYYY
//properties
const arr=[1,2,3,4,5]
let var1=arr.reduce((acc,val)=>val+acc,0)
console.log(var1);

var num =10;
function func(){
  var num=20
    console.log(num)
    
}

func();