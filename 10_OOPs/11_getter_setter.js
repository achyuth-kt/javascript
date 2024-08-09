//if you have defined getter then you have to define setter
class User{
  constructor(userName,email,password){
      this.userName=userName
      this.email=email
      this.password=password
  }
  get email(){
    //if there is (this.email)//error will occur
    return this._email.toUpperCase()
  }
  set email(value){
    this._email=value
  }
}
const user1=new User("Achyuth","achyuth@gmail.com",378)
console.log(user1.email);



//through properties(function)
function Userr(email,password){
   this._email=email
   this._password=password

   Object.defineProperty(this,"email",{
    get:function(){
      return this._email.toUpperCase()
    },
    set:function(value){
      this._email=value
    }
   })
}

const user2=new Userr("mad@gmail.com",235789)
console.log(user2.email);

//Object
let user3={
  userName:"Raghava",
  _email:"rag@gmail.com",
  password:6789,
  get email(){
      return this._email.toUpperCase()
  },
  set email(value){
       this._email=value
  }
}

console.log(user3.email);