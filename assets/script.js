// Assignment Code
var generateBtn = document.querySelector("#generate");

var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890';

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  alert("Your new password has been generated.")
  console.log(password)
  var passwordText = document.querySelector("#password");
  capOne = 1
  numOne = 1
  spclOne = 1

  passwordText.value = password;
}

let choises = 
['ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!!@@##$$%%&&??',
'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789', 
'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!!@@##$$%%&&??', 
'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz', 
'abcdefghijklmnopqrstuvwxyz', 
'abcdefghijklmnopqrstuvwxyz!!@@##$$%%&&??', 
'abcdefghijklmnopqrstuvwxyz0123456789', 
'abcdefghijklmnopqrstuvwxyz0123456789!!@@##$$%%&&??'] 

let capOne = 1
let numOne = 1
let spclOne = 1

function countCapTrue() {
  capOne ++;
}
function lessCapFalse() {
  capOne --;
}
function countNumTrue() {
  numOne ++;
}
function lessNumFalse() {
  numOne --;
}
function countSpclTrue() {
  spclOne ++;
}
function lessSpclFalse() {
  spclOne --;
}

function generatePassword() {
  
  var inputLength = prompt("Please enter the length of your new password. \n\n(8-128 characters)");
  if (inputLength <= 128 && inputLength >= 8) {
     console.log(inputLength);
     cap();
  }
  else if (inputLength > 128) {
    alert("Bruh.......")
  }
  else if (inputLength < 8) {
    alert("Bruh")
  }
  else {
    alert("Error: \nNumbers only! \n(8-128)")
  }

  function cap() {
    var capLet = confirm("Would you like to add capital letters? \n(Recommended)");
    console.log(capLet);
    if (capLet === true) {
      countCapTrue()
    }
    else {
      lessCapFalse()
    }
    num()
  }

  function num() {
    var numB = confirm("Would you like to add numbers? \n(Recommended)");
    console.log(numB);
    if (numB === true) {
      countNumTrue()
    }
    else {
      lessNumFalse()
    }
    spcl()
  }

  function spcl() {
    var spclChar = confirm("Would you like to add special characters? \n(Recommended)");
    console.log(spclChar);
    if (spclChar === true) {
      countSpclTrue()
    }
    else {
      lessSpclFalse()
    }
  }
  
  if ((capOne === 2) && (numOne === 2) && (spclOne === 2)) {
    function pass(inputLength) {
      let result ='';
      const characters = choises[0];
      const charactersLength = characters.length
      let counter = 0;
      while (counter < inputLength) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
        counter += 1;
      }
      return result
   }
  }
  else if ((capOne === 2) && (numOne === 2) && (spclOne === 0)) {
    function pass(inputLength) {
      let result ='';
      const characters = choises[1];
      const charactersLength = characters.length
      let counter = 0;
      while (counter < inputLength) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
        counter += 1;
      }
      return result
   }
  }
  else if ((capOne === 2) && (numOne === 0) && (spclOne === 2)) {
    function pass(inputLength) {
      let result ='';
      const characters = choises[2];
      const charactersLength = characters.length
      let counter = 0;
      while (counter < inputLength) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
        counter += 1;
      }
      return result
   }
  }
  else if ((capOne === 2) && (numOne === 0) && (spclOne === 0)) {
    function pass(inputLength) {
      let result ='';
      const characters = choises[3];
      const charactersLength = characters.length
      let counter = 0;
      while (counter < inputLength) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
        counter += 1;
      }
      return result
   }
  }
  else if ((capOne === 0) && (numOne === 0) && (spclOne === 0)) {
    function pass(inputLength) {
      let result ='';
      const characters = choises[4];
      const charactersLength = characters.length
      let counter = 0;
      while (counter < inputLength) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
        counter += 1;
      }
      return result
   }
  }
  else if ((capOne === 0) && (numOne === 0) && (spclOne === 2)) {
    function pass(inputLength) {
      let result ='';
      const characters = choises[5];
      const charactersLength = characters.length
      let counter = 0;
      while (counter < inputLength) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
        counter += 1;
      }
      return result
   }
  }
  else if ((capOne === 0) && (numOne === 2) && (spclOne === 0)) {
    function pass(inputLength) {
      let result ='';
      const characters = choises[6];
      const charactersLength = characters.length
      let counter = 0;
      while (counter < inputLength) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
        counter += 1;
      }
      return result
   }
  }
  else if ((capOne === 0) && (numOne === 2) && (spclOne === 2)) {
    function pass(inputLength) {
      let result ='';
      const characters = choises[7];
      const charactersLength = characters.length
      let counter = 0;
      while (counter < inputLength) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
        counter += 1;
      }
      return result
   }
  }
  return (pass(inputLength))
}
generateBtn.addEventListener("click", writePassword);