
// //resolve
// const promiseOne=new Promise(function(resolve,reject){
//   setTimeout(function(){
//     console.log("Asyc task is completed");
//     //here is the part of .then() code
//     resolve()//if u write it above also it will execute at the end
//   },1000)
// })

// //resolve
// promiseOne.then(function(){
//   console.log("resolved");
// })

// //or without storing in a variable
// new Promise(function(resolve,reject){
//   setTimeout(function() {
//     console.log("Asych 2 complete");
//     resolve()
//   },1000)
// }).then(function(){
//   console.log("resolve 2");
// })

// //in order to return it uses chaining "then"
// const promiseThree=new Promise(function(resolve,reject){
//   setTimeout(function(){
//     resolve({userName:"Achyuth",id:"2617"})
//   },1000)
// })
// promiseThree
// .then(function(user){
//      console.log(user);//object is printed
//      return user.userName
// })//here returned one is sent to next then
// .then(function(name){
//   console.log(name);//userName is printed(Achyuth)
// })


// //reject and finally
// const promiseFour=new Promise(function(resolve,reject){
//   let error=true
//   if(!error){
//       resolve({userName:"Goutham",id:"imrasllllla"})
//   }
//   else{
//     reject("ERROR: reject function executed")
//   }
// })

// promiseFour
// .then(function(user){
//   console.log(user);
// })
// .catch(function(error){
//   console.log(error);
// })
// .finally(function(){//it will be executed "Pakka execute aguthe"
//   console.log("Any how it is executed");
// })

//another syntax 
//async await syntax

// const promiseFive=new Promise(function(resolve,reject){
//   let error=true
//   if(!error){
//       resolve({userName:"Goutham",id:"imrasllllla"})
//   }
//   else{
//     reject("ERROR: reject function executed")
//   }
// })
// //here is the code
// //try catch is used
// async function consumePromiseFive(){
//     try {
//       const response=await promiseFive
//       console.log(response);  
//     } catch (error) {
//       console.log("Error occured");
//     }
// }
// consumePromiseFive()


//lets take git hub example
// async function getData(){
//   try {
//     let data=await fetch("https://api.github.com/users/achyuth-k-t")
//     //top convert from string to object
//     //it takes time so it will wait (await)
//     //that's why await is used
//     //if we wont use await it will show <pending> 
//     data=await data.json()
//     console.log(data);
//   } catch (error) {
//     console.log("error occured in github fetching");
//   }
// }
// getData()

//or by then catch
fetch("https://api.github.com/users/achyuth-k-t").then(function(response){
   return response.json()
}).then(function(data){
  console.log(data);
}).catch(function(error){
  console.log(error,"E : error occured");
})


//its asynchronous in nature 
//there is not in order !"line by line execution of code"