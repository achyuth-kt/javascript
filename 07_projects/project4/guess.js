let random=parseInt(Math.random()*100+1)
const submit=document.querySelector('#subt')
const userInput=document.querySelector('#guessField')
const guessSlot=document.querySelector('.guesses')
const remaining=document.querySelector('.lastResult')

const lowOrHi=document.querySelector('.lowOrHi')

const startOver=document.querySelector('.resultParas')

const p=document.createElement('p')

let prevGuess=[]
let numGuess=1
let playgame=true

if(playgame){
  submit.addEventListener('click',function(e){
    e.preventDefault()
    const guess=parseInt(userInput.value)
    validateGuess(guess)
  })
}

function validateGuess(guess){
   if(isNaN(guess) || guess>100 || guess<1){
    alert('Please enter valid Number')
   }else{
    prevGuess.push(guess)
    if(numGuess==10){
      displayGuess(guess)
      displayMessage(`Game over. actual number was ${random}`)
      endGame()
    }else{
      displayGuess(guess)
      checkGuess(guess)
    }
   }
}

function checkGuess(guess){
  if(random===guess){
    displayMessage('You guessed it right')
    endGame()
  }else if(random<guess){
    displayMessage('Your number is Tooo High')
  }else{
    displayMessage('Your number is Tooo Low')
  }
}

function displayGuess(guess){
    userInput.value=''
    guessSlot.innerHTML+=`${guess} `
    numGuess++
    remaining.innerHTML=`${11-numGuess}`
}

function displayMessage(message){
 lowOrHi.innerHTML=`<h3>${message}</h3>`
}

function endGame(){
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame(){
  const newGameButton=document.querySelector('#newGame')
  newGameButton.addEventListener('click',function(e){
    random=parseInt(Math.random()*100+1)
    prevGuess=[]
    numGuess=1
    guessSlot.innerHTML=''
    remaining.innerHTML=`${11-numGuess}`
    startOver.removeChild(p)
    userInput.removeAttribute('disabled')
    playgame=true
  })
}