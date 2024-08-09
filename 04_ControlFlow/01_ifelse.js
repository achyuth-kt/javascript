//if elseif else


//conditions to be noted

//General :- ==,!=,>,<,>=,<=
//these will check only VALUE
if(2=='2'){
  console.log("2 is present it may be string or number");
}

//===,!== both VALUE and DATATYPE
if(2==='2'){//this one will not run
  console.log("2 is present");
}


 //Ternary Operator
 //short form of if else

 //Syntax
 //condition ? true : false

 //Example
 let numb=120
 
 numb>100 ? console.log("Greater"):console.log("Smaller");
