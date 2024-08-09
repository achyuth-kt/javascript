function setName(userName){
  this.userName=userName
  console.log("called");
}

function setPassword(userName,email,password){
  setName(userName)
  this.email=email
  this.password=password
}


let user1=new setPassword("Achyuth",'ach.com','djfhsl')
console.log(user1);
//expected output
// setPassword {userName:'Achyuth',email: 'ach.com',password: 'djfhsl' }  

//actual output
// called
// setPassword { email: 'ach.com', password: 'djfhsl' }      

//the reason is stack problem see video 44

// solution
function setPasswordd(userName,email,password){
  //here call will "hold" the 'reference' of "setName"
  //this will tell to do for present userName not in the function
  setName.call(this,userName)
  this.email=email
  this.password=password
}
let user2=new setPasswordd("Achyuth",'ach.com','djfhsl')
console.log(user2);
//output
// setPasswordd {
//   userName: 'Achyuth',
//   email: 'ach.com',
//   password: 'djfhsl'
// }