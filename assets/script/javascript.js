// global var
var generateBtn = document.querySelector("#generate");

var numberOfChars;

var okToUseLowercase;
var okToUseNumbers;
var okToUseUppercase;
var okToUseSpecialChars;
var specialChars = [






 
  "*",
  "/",
  "^",
  "!",
  "$",
  "?",
  ",",
  ".",
  ",",
  "@",
  "=",
  "%",
  "|",
  "_",
  "-",
  "+",
  "#",
  "(",
  "*",
  "&",
  ";",
  ":",
  "}",
  "{",
  "(",
  "[",
  "]",
  "<",
  ">",
];
var numbers = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  
];
var lowerCase = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
var upperCase = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];












var passwordArray = []; 

function askQuestions() {
    var response = prompt(`How many characters would you like your password to be?
  Must be between 9 and 48`);
    numberOfChars = parseInt(response);
    if (numberOfChars < 9 || numberOfChars > 48 || isNaN(numberOfChars)) {
      alert(" Please Try Again")
      generatePassword()
      return
    }

    okToUseSpecialChars = confirm("Do you want your password to contain special characters?");
    okToUseLowercase = confirm("Do you want your password to contain lowercase letters?");
    okToUseUppercase = confirm("Do you want your password to contain uppercase letters?");
    okToUseNumbers = confirm("Do you want your password to contain numbers?");
  }
  
  
  
  
  function generatePassword() {
    askQuestions(); 
    passwordCriteria() 
    var password = "";
    for (i = 0; i < numberOfChars; i ++) {
      password = password + passwordArray[Math.floor(Math.random() * passwordArray.length)]
    }
  
    return password
  }
  







  function passwordCriteria() { 
    if (okToUseSpecialChars) {
      passwordArray = passwordArray.concat(specialChars);
    }
    if (okToUseLowercase) {
      passwordArray = passwordArray.concat(lowerCase);
    }
    if (okToUseUppercase) {
      passwordArray = passwordArray.concat(upperCase);
    }
    if (okToUseNumbers) {
      passwordArray = passwordArray.concat(numbers);
    }
    if (okToUseSpecialChars == false && okToUseLowercase == false && okToUseUppercase == false && okToUseNumbers == false) { 
      alert("Please select one of the following and try again")
      generatePassword()
      return
    }
  }
  







  function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
  }
  generateBtn.addEventListener("click", writePassword);