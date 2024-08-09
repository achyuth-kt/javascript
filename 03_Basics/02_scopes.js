if(true){
  let a=10;
  const b=20;
  //No scope for var so AVOID using VAR
  var c=30;
}
// console.log(a);// error outside the scope

// console.log(b);//error outside the scope

// console.log(c);//no error even if it is outside the scope


function one(){
  const name="Achyuth"
  function two(){
    console.log(name);
  }
  //here two() function can be called with in the scope
  two()
}
//Now if we call one() function then it will run
one()


//Functions

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