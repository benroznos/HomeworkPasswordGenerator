// Assignment Code
// let passwordAll 
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  let passLength = +prompt('What do you want the password length to be')
  if (passLength < 8 || passLength > 128) {
    alert('Invalid password length')
    return
  }
  const lowercase = 'abcdefghijklmnopqrstuvwxyz'
  const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  const numerical = '1234567890'
  const specialarr = '!@#$%*'
  const lowC = confirm('do you want lower case')
  const upperC = confirm('do you want upper case')
  const numC = confirm('do you want numbers')
  const specialC = confirm('do you want special')
  let passHolder = ''
  let newPass = ''

  if (lowC) {
    passHolder += lowercase;
  }
  if (upperC) {
    passHolder += uppercase;
  }
  if (numC) {
    passHolder += numerical;
  }
  if (specialC) {
    passHolder += specialarr;
  }
  for (let i = 0; i < passLength; i++) {
    let randomIndex = Math.floor(Math.random() * passHolder.length)
    newPass += passHolder[randomIndex]
  }
  passHolder
  console.log(newPass)
  return newPass
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
