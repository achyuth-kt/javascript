//Static Properties
class User{
  constructor(userName){
    this.userName=userName
  }
  static createId(){//some what like private
    console.log(4578);
  }
}
let user1=new User("Achyuth")
user1.createId()//Error

//even child class cannot access it