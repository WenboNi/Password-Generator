var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var passwordLength = prompt("Please Enter Length of Desired Password between 8 to 128 Characters")

  while (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
    passwordLength = prompt("Please Enter a length in # for your password that is between 8 to 128 characters")
  }

  var lowerCase = confirm("Click OK to include Lower Case Letters or Cancel to Exclude")
  var needNumeric = confirm("Click OK to include numeric digit or Cancel to Exclude")
  var upperCase = confirm("Click OK to include Upper Case Letters or Cancel to Exclude.")
  var specialChar = confirm("Click OK to Special Characters Letters or Cancel Exclude.")
  var passcontainer = ''
  var newPassword = ''
  var lower = 'abcdefghijklmnopqrstuvwxyz'
  var upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  var numeric = '0123456789'
  var special = '!"#$%&()*+,-./:;<=>?@[]^_`{|}~'

  while (!lowerCase && !upperCase && !needNumeric && !specialChar) {
    alert("Please select to include at least one type of character");
    lowerCase = confirm("Click OK to include Lower Case Letters or Cancel to Exclude")
    needNumeric = confirm("Click OK to include numeric digit or Cancel to Exclude")
    upperCase = confirm("Click OK to include Upper Case Letters or Cancel to Exclude.")
    specialChar = confirm("Click OK to Special Characters Letters or Cancel Exclude.")
  }

  if (lowerCase === true) {
    passcontainer = passcontainer + lower;
  }
  
  if (upperCase === true) {
    passcontainer = passcontainer + upper;
  }

  if (needNumeric === true) {
    passcontainer = passcontainer + numeric;
  }
  
  if (specialChar === true) {
    passcontainer = passcontainer + special;
  }

  for (i = 0; i<passwordLength; i++) {
    newPassword = newPassword + passcontainer.charAt(Math.floor(Math.random()*passcontainer.length));
  }
console.log (newPassword)

return newPassword
}


function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = 'Here is the password generated for you: ' + password
}

generateBtn.addEventListener("click", writePassword);
