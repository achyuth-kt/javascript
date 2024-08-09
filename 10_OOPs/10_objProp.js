//let us take math.pi property
console.log(Math.PI);//3.14.....

Math.PI=5
console.log(Math.PI);//it didn't changed its value

//because
const property=Object.getOwnPropertyDescriptor(Math,"PI")

console.log(property);
//OUTPUT(here writable is false)so we cannot reWrite the value
// {
//   value: 3.141592653589793,
//   writable: false,
//   enumerable: false,(means iteratable or not)
//   configurable: false
// }

//but we cannot change inbuilt functions like Math.PI


//we can do it for our classes also
const User={
  name : "Achyuth",
  age : 20,
  email:"achyuth@gmail.com"
}
console.log(Object.getOwnPropertyDescriptor(User,'name'));
//properties of name
// {
//   value: 'Achyuth',
//   writable: true,
//   enumerable: true,
//   configurable: true
// }

//we can make it non writable
Object.defineProperty(User,'name',{
  writable: false,
  enumerable: false,//it is not iteratable also
})
User.name="Madhavan"
console.log(User.name);//it printed "Achyuth"