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

var userWantsNumbers = window.confirm('include numbers in your password?')
var userWantsSymbols = window.confirm('include symbols in your password?')
var userWantsLowerCase = window.confirm('include lowercase letters in your password?')
var userWantsUpperCase = window.confirm('include uppercase letters in your password?')

var numberList = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
var symbolList = ['!', '@', '#', '$', '%', '^', '&', '*']
var lowercaseList = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
var uppercaseList = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

var optionList = []

if (userWantsNumbers === true){
    optionList.push(numberList)
} if (userWantsSymbols === true){
    optionList.push(symbolList)
} if (userWantsLowerCase === true){
    optionList.push(lowercaseList)
} if (userWantsUpperCase === true){
    optionList.push(uppercaseList)
} if (optionList.length === 0){
    optionList.push(lowercaseList)
}

var generatedPassword = ''

for(var i = 0; i < passwordLength; i++){
 var randomList = getRandomItem(optionList)
 var randomChar = getRandomItem(randomList)

 generatedPassword += randomChar
    } 
    return generatedPassword

}


function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);