// Assignment Code
var generateBtn = document.querySelector("#generate");

// Defining  Array variables
var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var lowerCaseLetters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var upperCaseLetters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var specialCharacters = ['!','#','$','%','&','(',')','*','+','-','.','/',':',';','<','=','>','?','@','[','\',','^','_','`','{','|','}','~'];

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// User input prompts to help create secure password
function generatePassword () {
  var length = prompt("Define the length of the password (8-128 characters):");
    if(length < 8 || length > 128) {
        alert("Password length must be between 8 and 128 characters.");
        return;
    }
// selection of password parameters prompts
var includeUpperCaseLetters = confirm("Include uppercase letters in your password?");
var includeLowercaseLetters = confirm("Include lowercase letters in your password?");
var includeNumbers = confirm("Include numbers in your password?");
var includeSpecialCharacters = confirm("Include special characters in your password?");

var allowedCharacters = '';
    if(includeNumbers) allowedCharacters += numbers;
    if(includeLowercaseLetters) allowedCharacters += lowerCaseLetters;
    if(includeUpperCaseLetters) allowedCharacters += upperCaseLetters;
    if(includeSpecialCharacters) allowedCharacters += specialCharacters;

      if(allowedCharacters.length === 0) {
        alert("Please select at least one character type.");
        return;
          
      }
// Initialize password as an empty string
  var password =""; 

  for(var i = 0; i < length; i++) {
    var randomIndex = Math.floor(Math.random() * allowedCharacters.length);
    password += allowedCharacters[randomIndex];
  }
  return password;

// generating the password
document.getElementById('password').textContent = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)
