//Object Singleton
const tinder=new Object()
console.log(tinder);//{}  (empty obj)

tinder.id="432apd"
tinder.name="Chomu"
tinder.email="ach@gmail.com"
tinder.isLogged=false
console.log(tinder);
// output
// {
//   id: '432apd',
//   name: 'Chomu',
//   email: 'ach@gmail.com',
//   isLogged: false
// }


//Nested Object
const regularUser={
  email:"ach@gmail.com",
  fullName:{
    userName :{
      firstName:"achyuth",
      secondName:"K T"
    }
  }
}

//How to access
console.log(regularUser.fullName.userName.firstName);//Achyuth


// merging objects
const obj1={1:'a',2:'b'}
const obj2={3:'a',4:'b'}

// if
// const obj3=Object.assign(obj1,obj2)
// it will be like
// obj1=obj1+obj2
//then obj3=obj1
//if i print obj1 it will be obj1+obj2

const obj3=Object.assign({},obj1,obj2)
//The empty perenthesis is because the values of "obj1","obj2" will be stored in here ->{} then assigned to obj3


//Another simple method
const obj={...obj1,...obj2}

//if we consider Tinder object
console.log(tinder);

//to print keys(output will be in ARRAY format)
console.log(Object.keys(tinder));//[ 'id', 'name', 'email', 'isLogged' ]

//to print values
console.log(Object.values(tinder))//[ '432apd', 'Chomu', 'ach@gmail.com', false ]

//both keys and values
console.log(Object.entries(tinder));
//output
// [
//   [ 'id', '432apd' ],
//   [ 'name', 'Chomu' ],
//   [ 'email', 'ach@gmail.com' ],
//   [ 'isLogged', false ]
// ]

//check whether entries is present or not
console.log(tinder.hasOwnProperty("isLogged"));//true


//De-structuring
const course={
  courseName:"JS basics",
  fees:999,
  duration:"1 Month"
}

//Instead of course.courseName we will use courseName
const {courseName}=course
console.log(courseName);


//specifing 
//here we gave which ever name we want
const {courseName:Cname}=course
console.log(Cname);

//API

//Example of an API
{
  name:"Achyuth",
  age:20,
  educated:true,
  degree:"BE"
}

//API can be arrays also
[
  {},
  {},
  {}
]