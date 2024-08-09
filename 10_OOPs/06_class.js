class user{
  constructor(username,email,password){
    this.username=username
    this.email=email
    this.password=password
  }
  changePassword(){
    console.log(`password changed to ${this.password}abc`);
  }
}

let user1=new user("Achyuth","ach@gmail.com",247)
user1.changePassword()

//behind the scene of user class

// function User(userName,email,password){
//       this.userName=userName
//       this.email=email
//       this.password=password
// }
// User.prototype.changePassword=function(){
//   console.log(`password changed to ${this.password}abc`);
// }

// let user2=new User("Ram","ramgmaiol.com",78879)
// user2.changePassword()