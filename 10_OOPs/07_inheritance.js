class User{
  constructor(userName){
    this.userName=userName
  }
  logMe(){
    console.log(`UserName :${this.userName}`);
  }
}

class Teacher extends User{
  constructor(userName,email,password){
    super(userName)//"userName" constructure from User is accessed
    this.email=email
    this.password=password
  }
  addCourse(){
    console.log(`${this.userName} added this course`);
  }
}

let teacher=new Teacher("Madam Web","wed@gmail.com",34795)
teacher.addCourse()
//inherited from User
teacher.logMe()


// let teacher1 and teacher2 are 2 objects

// console.log(teacher1===teacher2);//false
// console.log(teacher1===Teacher);//false

//but
console.log(teacher instanceof Teacher);//True
console.log(Teacher instanceof User);//false
console.log(teacher instanceof User);//True
