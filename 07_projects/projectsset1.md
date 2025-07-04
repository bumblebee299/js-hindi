# Projects related to DOM

## project link
[click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# Solution code

## project 1

```javascript
const buttons = document.querySelectorAll(".button")
const body = document.querySelector("body")

buttons.forEach( function(button){
  console.log(button)
  button.addEventListener('click', function(e){
    console.log(e)
    console.log(e.target)
    if(e.target.id === 'grey'){
      body.style.backgroundColor = e.target.id
    }
    if(e.target.id === 'white'){
      body.style.backgroundColor = e.target.id
    }
    if(e.target.id === 'blue'){
      body.style.backgroundColor = e.target.id
    }
    if(e.target.id === 'yellow'){
      body.style.backgroundColor = e.target.id
    }
    // if(e.target.id === 'pink'){
    //   body.style.backgroundColor = e.target.id
    // }
    
    // switch(e.target.id){
    //   case e.target.id:
    //   body.style.backgroundColor = e.target.id
    //   break
      
    // }
  })
})

```

## project 2

```javascript
const form = document.querySelector('form')

form.addEventListener('submit', function(e){
  e.preventDefault()
  
  const height = parseInt(document.querySelector('#height').value)
  const weight = parseInt(document.querySelector('#weight').value)
  const result = document.querySelector('#results')
  
  if(height === '' || height < 0 || isNaN(height)) {
    result.innerHTML = "please enter appropriate height"
  }
  else if (weight === '' || weight < 0 || isNaN(weight)) {
    result.innerHTML = "please enter appropriate weight"
  }
  else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2)
    result.innerHTML = `<span>${bmi}</span>`
  }

})


```

## project 3

```javascript
// const clock = document.queryselector('#clock')
const clock = document.getElementById('clock')

setInterval(function(){
  let date = new Date()
  // console.log(date.toLocaleTimeString())
  clock.innerHTML = date.toLocaleTimeString()
},1000) // 1000 for 1 sec

```

## project 4

```javascript
let randomNumber = (parseInt(Math.random() *100 + 1))

const submit = document.querySelector('#subt')
const userInput = document.querySelector('#guessField')
const guessSlot = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const lowOrHi = document.querySelector('.lowOrHi')
const startOver = document.querySelector('.resultParas')

const p = document.createElement('p')

let numGuess = 1

let playGame = true

if(playGame){
  submit.addEventListener('click', function(e){
    e.preventDefault()
    const guess = parseInt(userInput.value)
    validateGuess(guess)
  })
}

function validateGuess(guess){
  if(isNaN(guess)){
    alert('Please enter a valid number')
  }else if(guess < 1){
    alert('Please enter a number greater than 0')
  }else if(guess > 100){
    alert('Please enter a number less than 101')
  }else {
    if(numGuess === 10){
      displayGuess(guess)
      displayMessage(`Game Over. Random number was ${randomNumber}`)
      endGame()
    }else {
      displayGuess(guess)
      checkGuess(guess)
    }
  }
}

function checkGuess(guess){
  if(guess === randomNumber){
    displayMessage(`You guessed it right 🎉`)
    endGame()
  }else if(guess > randomNumber){
    displayMessage(` Your guessed number is too high`)
  }else if(guess < randomNumber){
    displayMessage(`Your guessed number is too low`)
  }
}

function displayGuess(guess){
  userInput.value = ''
  guessSlot.innerHTML += `${guess}, `
  remaining.innerHTML = `${10 - numGuess}`
  numGuess ++
}

function displayMessage(message){
  lowOrHi.innerHTML = `<h2>${message}</h2>`
}

function endGame(){
  userInput.value = ''
  userInput.setAttribute('disabled', '')
  p.classList.add('button')
  p.innerHTML = `<h2 id="newGame">Start new Game</h2>`
  startOver.appendChild(p)
  playGame = false
  newGame()
}

function newGame(){
  const newGameButton = document.querySelector('#newGame')
  newGameButton.addEventListener('click', function(e){
    randomNumber = parseInt(Math.random() * 100 + 1)
    numGuess = 1
    guessSlot.innerHTML = ''
    remaining.innerHTML = 10
    userInput.removeAttribute('disabled')
    startOver.removeChild(p)
    playGame = true
  })
}

```

## project 5

```javascript
const insert = document.querySelector('#insert')

window.addEventListener('keydown', (e) => {
  insert.innerHTML = `
  <div class='color'>
  <table>
  <tr>
    <th>key</th>
    <th>keyCode</th>
    <th>Code</th>
  </tr>
  <tr>
    <td>${e.key===' ' ? 'space' : e.key}</td>
    <td>${e.keyCode}</td>
    <td>${e.code}</td>
  </tr>
</table>
  </div>
  `
})


```

## project 6

```javascript
const randomColor = function(){
  const hex = '0123456789ABCDEF'
  let color = '#'
  for(i=0 ; i<6 ; i++){
    color += hex[parseInt(Math.random() * 16)]
  }
  return color
}
const start = document.querySelector('#start')
const stop = document.querySelector('#stop')

let ref;
const startfunc = function(){
   if(ref == null){
    ref = setInterval(changeBgColor, 1000)
   }
   function changeBgColor (){
      document.body.style.backgroundColor = randomColor()
   }
}

const stopfunc = function(){
  clearInterval(ref)
  ref = null
}

start.addEventListener('click',startfunc)

stop.addEventListener('click',stopfunc)

```
