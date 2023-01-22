// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
/* 
1. listen for the clicking of the button, click button to ask series of questions
2. confirm if you want numbers and such
3.return the output to the user in the appropriate field.

