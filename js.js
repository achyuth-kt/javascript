let random=parseInt(Math.random()*100+1)

const submit=document.getElementById('subt')
const numInput=document.getElementById('guessField')

const prevGuess=document.querySelector('.guesses')
const remainingGuess=document.querySelector('.lastResult')
const lowOrHi=document.querySelector('.lowOrHi')

const result=document.querySelector('.resultParas')

const p=document.createElement('p')

prevGues=[]
noGuess=1
playGame=true

if(playGame===true){
   submit.addEventListener('click',function(e){
    e.preventDefault()
    let guess=parseInt(numInput.value)
    validateGuess(guess)
   })
}

function validateGuess(guess){
  if(isNaN(guess)||guess>100||guess<1){
    alert("Enter valid input")
  }else{
    if(noGuess===10){
      displayMessage(`You are dumber than i expected number is ${random}`)
      endGame()
    }else{
      displayGuess(guess)
      checkGuess(guess)
    }
  }
}
function checkGuess(guess){
  if(guess===random){
    displayMessage("You guessed it right")
    endGame()
  }else if(guess>random){
    displayMessage("Too high")
  }else{
    displayMessage("Too low")
  }
}

function displayGuess(guess){
  numInput.value=''
  prevGuess.innerHTML+=` ${guess}`
  remainingGuess.innerHTML=`${10-noGuess}`
  noGuess++
}
function displayMessage(message){
   lowOrHi.innerHTML=`<h3>${message}</h3>`
}
function endGame(){
  numInput.value=''
  numInput.setAttribute('disabled','')
  remainingGuess.innerHTML=0
  p.innerHTML=`<h3 id=newGame>Start Over</h3>`
  result.append(p)
  playGame=false
 newGame()
}

function newGame(){
  const newgamee=document.querySelector('#newGame')
  newgamee.addEventListener('click',function(e){
    random=random=parseInt(Math.random()*100+1)
    numInput.removeAttribute('disabled')
    result.removeChild('p')
    noGuess=1
    prevGuess.innerHTML=''
    remainingGuess.innerHTML=10
    prevGues=[]
    playGame=true
  })
}