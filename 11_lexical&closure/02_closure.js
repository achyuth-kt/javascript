function outer(){
  let name="Achyuth"
  function inner(){
    console.log("Name is :",name);
  }
  return inner
}
//in closure if it is accessing inner function 
//it will also consider outer function(because inner func may access data from outer function)
const myFunc=outer()
myFunc()