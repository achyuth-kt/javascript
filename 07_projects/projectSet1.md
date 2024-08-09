#### Projects related to DOM


##### Project link
[click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)


#### Solution code

##### project 1
```javascript
  const buttons=document.querySelectorAll(".button")
const body=document.querySelector("body")
buttons.forEach(function (button){
  
  button.addEventListener('click',function(event){
    if(event.target.id==='grey'){
      body.style.backgroundColor='grey'
    }
    if(event.target.id==='white'){
      body.style.backgroundColor='white'
    }
    if(event.target.id==='blue'){
      body.style.backgroundColor='blue'
    }
    if(event.target.id==='yellow'){
      body.style.backgroundColor='yellow'
    }
  })
  
})
```


##### project 2
```javascript
const form=document.querySelector('form')

form.addEventListener('submit',function(event){
  event.preventDefault()

  const height=parseInt(form.querySelector('#height').value)
  const weight=parseInt(form.querySelector('#weight').value)
  const result=form.querySelector('#results')


  if(height=='' || height==0 || isNaN(height)){
    result.innerHTML="Please enter valid Height"
  }
  else if(weight=='' || weight==0 || isNaN(weight)){
    result.innerHTML="Please enter valid weight"
  }else{
    const bmi=(weight/(height*height/10000)).toFixed(2)
     if(bmi<18.6){
      result.innerHTML=`${bmi} : Under Weight`
     }else if(bmi<25){
      result.innerHTML=`${bmi} : Normal Weight`
     }else{
      result.innerHTML=`${bmi} : OverWeight`
     }

  }
})

```

##### project 3
```javascript
const time=document.querySelector('#clock')
setInterval(function (){
  let date=new Date()
   time.innerHTML=date.toLocaleTimeString()
},1000)

//here i learn't about "setInterval"
//whick will update or refresh or run repeatedly for 1000ms as shown above


```

##### project 4


```javascript
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
    if(numGuess==11){
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

```

##### project 5


```javascript
 const insert=document.getElementById('insert')
      window.addEventListener('keydown',function(e){
        insert.innerHTML=`<div class="key">
          <table>
            <tr>
              <th>key</th>
              <th>keycode</th>
              <th>Code</th>
            </tr>
            <tr>
              <td>${e.key===" "?"space":e.key}</td>
              <td>${e.keyCode}</td>
              <td>${e.code}</td>
            </tr>
            
          </table>
        </div>`
      })

```


##### project 6


```javascript


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

```