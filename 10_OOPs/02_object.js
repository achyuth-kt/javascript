//literally its an object
//this why it is used
const obj={
   userName:"Achyuth",
   userId:23683,
   loggedIn:true,
   getUserDetails:function(){
    console.log("Got user details");
    //this will tell that "userName" is from this object only
    console.log(`UserNmae :${this.userName}`);
    //if i print this
    console.log(this);//we will get entire obj as output
   }
}
console.log(obj.userName);
console.log(obj.getUserDetails());

//if i print this globally
console.log(this);//i will ge "{}" an EMPTY object

//Constructor functions(to create multiple instances from one object )
//Examples
let date=new Date()
let promiseOne=new Promise(function(resolve,reject){})


//what if i want to create an object for n number of users
const user=function(userName,userId,loggedIn){
  this.userName=userName
  this.userId=userId
  this.loggedIn=loggedIn
  //no need to write it
  return this//(if not there still return the same thing)
}
let user1=user("Achyuth",6756,true)
let user2=user("Mahesh",7892356,false)
console.log(user1);//it got user2 information (overWriting takes place)
//to avoid it we use constructor

//new instance is created
user1=new user("Achyuth",543789,true)
user2=new user("Mahesh",48957,false)
console.log(user1.userName);//Achyuth
console.log(user2.userName);//Mahesh

