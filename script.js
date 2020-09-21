// Array of special characters for possible use in password generation
var specialChars = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ';',
  ',',
  '(',
  ')',
  '{',
  '}',
  '[',
  ']',
  '~',
  '-',
  '_',
  '.',
  '|',
  '<',
  '>',
  '*',
  '"',
];


// Array of lowercase characters for possible use in password generation
var lowercaseChars = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];


var uppercaseChars = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];


// Array of numeric characters for possible use in password generation
var numericChars = [
  '0',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9'
]


// Function to prompt user to select password options
function getPasswordOptions() {
  // Variable to store selected password length from user input
  var length = parseInt(
    prompt("Please enter the length of password required")
  )

  // Conditional statement to verifiy that the password length is a number. Re-prompts user to enter a number until statement is true
  if (isNaN(length) === true || (length < 8) || (length > 128)) {
    alert("The pasword length must be provided as a NUMBER larger than 7 but smaller than 129. Please try again!");
    return;
  };

  // Variable to store boolean regrding the inclusion of special characters
  var useSpecialChars = confirm(
    "Click OK to confirm that special characters should be included"
  );

  // Variable to store boolean regrding the inclusion of lowercase characters
  var useLowercaseChars = confirm(
    "Click OK to confirm that lowercase characters should be included"
  );

  // Variable to store boolean regrding the inclusion of uppercase characters
  var useUppercaseChars = confirm(
    "Click OK to confirm that uppercase characters should be included"
  );

  // Variable to store boolean regrding the inclusion of numerical characters
  var useNumericChars = confirm(
    "Click OK to confirm that numeric characters should be included"
  );

  // Conditional statement to check if user has not chosen to include any types of characters. Password generator ends if all four statements are false
  if (
    useSpecialChars === false &&
    useLowercaseChars === false &&
    useUppercaseChars === false &&
    useNumericChars === false
  ) {
    alert("You must select at least one character type for inclusion in your password");
    return;
  }

  // Object to store user selections
  var passwordOptions = {
    length: length,
    useSpecialChars: useSpecialChars,
    useLowercaseChars: useLowercaseChars,
    useUppercaseChars: useUppercaseChars,
    useNumericChars: useNumericChars
  };

  return passwordOptions;
}


// Functon to select a random element from and array
function getRandom(arr) {
  var randIndex = Math.floor(Math.random() * arr.length);
  var randElement = arr[randIndex];

  return randElement;
}


// Function to generate password that matches user selected criteria
function generatePassword() {
  var options = getPasswordOptions();
  
  // Array to store password as it is being put together
  var passwordInProgress = [];

  // Array to store types of characters to be included in password
  var possibleChars = [];

  // Array to store one of each user selected character type to ensure compliance with user selected choices
  var guaranteedChars = [];

  // Conditional statement that adds array of special characters into array into array of possible characters if option was selected by user
  // Push new random special character to guaranteedChars
  if (options.useSpecialChars) {
    possibleChars = possibleChars.concat(specialChars);
    guaranteedChars.push(getRandom(specialChars));
  }

  // Conditional statement that adds array of lowercase characters into array into array of possible characters if option was selected by user
  // Push new random lowercase character to guaranteedChars
  if (options.lowercaseChars) {
    possibleChars = possibleChars.concat(lowercaseChars);
    guaranteedChars.push(getRandom(lowercaseChars));
  }

  // Conditional statement that adds array of uppercase characters into array into array of possible characters if option was selected by user
  // Push new random uppercase character to guaranteedChars
  if (options.uppercaseChars) {
    possibleChars = possibleChars.concat(uppercaseChars);
    guaranteedChars.push(getRandom(uppercaseChars));
  }

  // Conditional statement that adds array of numerical characters into array into array of possible characters if option was selected by user
  // Push new random numerical character to guaranteedChars
  if (options.numericChars) {
    possibleChars = possibleChars.concat(numericChars);
    guaranteedChars.push(getRandom(numericChars));
  }

  // For loop to iterate over the possible characters array selecting items at random indices based on the length from the options object
  for (var i = 0; i < options.length; i++) {
    var possibleCharacter = getRandom(possibleChars);

    passwordInProgress.push(possibleCharacter);
  }

  // Add one guaranteed character to to passwordInProgress
  for (var i =0; i < guaranteedChars.length; i++) {
    passwordInProgress[i] = guaranteedChars[i];
  }

  // Transform passwordInProgress to a string and pass it into writePassword
  return passwordInProgress.join("");
}

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
