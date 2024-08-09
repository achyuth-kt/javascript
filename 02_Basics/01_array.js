//call by reference
const myArr=[1,2,3,4,5]//its resizable like VECTOR
console.log(myArr[3]);//4

const arr1=[1,6,4,false,"hello","anything",9]//mixed DataType

// another typr of declaration
const arr2=new Array(1,3,4,2,7,12)
console.log(arr2);//[ 1, 3, 4, 2, 7, 12 ]

//Array Methods (Functions)

//push back
myArr.push(19);
console.log(myArr);//[ 1, 2, 3, 4, 5, 19 ]
//pop last element
myArr.pop()//[ 1, 2, 3, 4, 5 ]

//Unshift & shift
//Unshift add at zeroth position
myArr.unshift(12)//[ 12, 1, 2, 3, 4, 5 ]
//removes first element
myArr.shift()//[ 1, 2, 3, 4, 5 ]
console.log(myArr);

//includes 
//check whether it is present or not
console.log(myArr.includes(9));//false

// indexof
console.log(myArr.indexOf(9));//Not present so "-1"

const arr=myArr.join()
//copy of array is converted into string
console.log(arr);//its type is string


console.log("\n\n");
//slice & splice
const newArr=[1,3,6,8,0,12]

//SLICE(copy of array is taken)
//includes first index excludes second index
console.log(newArr.slice(1,4));//3,6,8   //index 1 2 3 is printed
console.log("A ",newArr);//array is not altered 

//SPICE(reference)
//it will cut the part from array and stored
//includes both first and second index
console.log(newArr.splice(1,3));//3 6 8 //index 1 2 3 is printed
console.log("B ",newArr);//1,0,12   //array is altered 
