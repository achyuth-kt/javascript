const time=document.querySelector('#clock')
setInterval(function (){
  let date=new Date()
   time.innerHTML=date.toLocaleTimeString()
},1000)

//here i learn't about "setInterval"
//whick will update or refresh or run repeatedly for 1000ms as shown above