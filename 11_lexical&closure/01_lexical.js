//Lexical scoping(scoping {} same as c++,java ...)

function outer(){
  let name="Achyuth"
  function inner(){
     console.log("Name",name);
  }
  inner()//it will run
}

console.log("Outer :",name);//error



//SUMMARY

// parent.data->child
//sibling.data->sibling(not possible)
//child.data->parent(not possible)