

const randomColor=function(){
  const hex='0123456789ABCDEF'
  let color='#'
  for(let i=0;i<6;i++){
    color+=hex[Math.floor(Math.random()*16)]
  }
  return color;
}
//functions
let intervalId;
const startChangingColor=function(){
    if(!intervalId){
      intervalId = setInterval(changeBgColor, 1000);
    }
}
//color change function
function changeBgColor(){
  document.body.style.backgroundColor = randomColor();
}

const stopChangingColor=function(){
  clearInterval(intervalId);
  intervalId = null;
  document.body.style.backgroundColor ="#212121"
}
document.querySelector("#start").addEventListener('click',startChangingColor)

document.querySelector("#stop").addEventListener('click',stopChangingColor)