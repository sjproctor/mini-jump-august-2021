// file: magic8.js

// Data types:
// 1) numbers
// 2) strings
// 3) Boolean - true/false

// var greeting = "hello mini jump class"

// var - variable declaration
// give the variable a name - no spaces, start with a lowercase letter
// = - to assign a value, data type

// Action that is built in to JS that will create a random number between 0 - 1
// Math.random()

// Math.random() * 5
// - random number between 0 - almost 5

// Math.ceil(Math.random() * 5)


// Function - little code machine

// Step 1) get a reuseable random number
// function magic8(){
//   var randomNum = Math.ceil(Math.random() * 5)
//   return randomNum
// }

// () - call to action
// {} - what the action is
// magic8() - the function call

// equality evaluations ===

function magic8(){
  var randomNum = Math.ceil(Math.random() * 5)
  if(randomNum === 1){
    return "Concentrate and ask again"
  } else if(randomNum === 2){
    return "Maybe"
  } else if(randomNum === 3){
    return "No way jose"
  } else if(randomNum === 4){
    return "Yes, 100%"
  } else if(randomNum === 5){
    return "I suppose"
  }
}
