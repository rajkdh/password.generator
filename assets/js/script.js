// Assignment Code
var generateBtn = document.querySelector("#generate");

function randomInt(min, max){
    if (!max){
        max = min
        min = 0
    }
    var rand = Math.random()
    return Math.floor(min*(1 - rand) + rand*max)
}

function getRandomItem(list) {
    return list[randomInt(0, list.length -1)]
}

function generatePassword(){ 

    var userInput = window.prompt("Enter desired password length")
    
    var passwordLength = parseInt(userInput)
  
    if (isNaN(passwordLength)) {
      window.alert('That is not a number!')
      return; 
      }
      if (passwordLength < 8 || passwordLength > 128) {
        window.alert('Error! Password length must be between 8 and 128 characters')
        return
        }
    }
    var userWantsNumbers = window.confirm('include numbers in your password?')
    var userWantsSymbols = window.confirm('include symbols in your password?')
    var userWantsLowerCase = window.confirm('include lowercase letters in your password?')
    var userWantsUpperCase = window.confirm('include uppercase letters in your password?')