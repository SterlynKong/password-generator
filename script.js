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
    prompt("Please enter the lenght of password required")
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
    lenght: length,
    useSpecialChars: useSpecialChars,
    useLowercaseChars: useLowercaseChars,
    useUppercaseChars: useUppercaseChars,
    useNumericChars: useNumericChars
  };

  return passwordOptions;
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
