// e.g. firstString("John") will return "J", which is the first character of string "John"

function firstString (name) {
    return  name[0];
  
} 


// e.g. lastString("John") will return "n", which is the last character of the string "John"

function lastString (name) {
    return name[name.length-1];
} 


//will return string character at ith position (indexed from 0)

function nameAndNumber(string, i) {
    return string[i-1];
} 


// When you pass something other than a number it will merge them, 
// for instance two strings will merge together to create on string and arrays will merge


function sumOfTwoNumbers(number1, number2) {
    return number1 + number2;  
} 



// putting anything other than numbers will return NaN
//which means "not a number"

function sumOfTwoNumbers(number1, number2) {
    return number1 * number2;  
} 


//the if statements help to define each condition (in this case, if we decided to "add" "subtract" "mult" "div" and a default condition)


function TwoNumbersAndAString(number1, number2, string) {
  if (string === 'add') {
    return number1 + number2;
  }
  
  if (string === 'subtract') {
    return number1 - number2;
    
  }
  
  if (string === 'mult') {
    return number1 * number2;
    
  }
   if (string === 'div') {
     return number1/number2 ;
   }
  
  else {
    return 0;
  }
  
}

// if statements


