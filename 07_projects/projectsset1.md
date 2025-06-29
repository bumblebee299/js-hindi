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
