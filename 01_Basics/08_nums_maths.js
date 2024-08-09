const num=50  
const number=new Number(100)//specifically telling it is number
console.log(num)//50
console.log(number)//[Number: 100]
//properties of number
console.log(num.toString().length);//converted to String then found its length

console.log(number.toFixed(2));//100.00 (two decimal) 

const balance=129.87
console.log(balance.toPrecision(3));//round of till 3 digits // 130 is output

const type=100000000
console.log(type.toLocaleString());//its american //100,000,000
console.log(type.toLocaleString('en-IN'));//INDIAN//10,00,00,000

/*************************  MATH  ***************************/
console.log(Math);//an Object with so many properties

console.log(Math.abs(-8));//Modulus(converts to +ve int)

console.log(Math.round(4.73333));//round off to 5
console.log(Math.ceil(6.2));//7 round off if decimal
console.log(Math.floor(3.654));//3  ignore decimal

//Random
console.log(Math.random());// random num from (0 to 1)
console.log(Math.random()*10);//random num from (0 to 10)
console.log(Math.random()*10 +1);//random num from (1 to 10)
console.log(Math.floor(Math.random()*10+1));//to avoid decimal

const min=1;
const max=6;
//to get random value from min to max
console.log(Math.floor(Math.random()*(max-min+1)+min));
