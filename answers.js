// e.g. firstString("John") will return "J", which is the first character of string "John"

function firstString (name) {
    return  name[0];
  
} 

firstString("John");
firstString("Michael");


// e.g. lastString("John") will return "n", which is the last character of the string "John"

function lastString (name) {
    return name[name.length-1];
} 

lastString("Zelda");
lastString("Christine");


//will return string character at ith position (indexed from 0)

function nameAndNumber(string, i) {
    return string[i-1];
} 

nameAndNumber("silly", 2);


// When you pass something other than a number it will merge them, 
// for instance two strings will merge together to create on string and arrays will merge


function sumOfTwoNumbers(number1, number2) {
    return number1 + number2;  
} 

sumOfTwoNumbers(45, 20);
sumOfTwoNumbers(15, 35);


// putting anything other than numbers will return NaN
//which means "not a number"

function multOfTwoNumbers(number1, number2) {
    return number1 * number2;  
} 

multOfTwoNumbers(6, 5);


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


// To print results onto console, have to type in console.log(string) and then call the function

function repeatString(string, number) {
  for (var i = number; i > 0; i--) {
    return string;
  }

}

// An empty string will have no output, and the loop will return  the last character in the string first, in the second loop the ith -1, etc...

function reverse(string) {
  for (var i = string.length - 1; i >= 0; i--) {
    return string[i];
  }
  
}

// this is the recursive (and more elegant solution) of finding a factorial

function factorial(number) {
  if (number === 1) {
    return 1;
  }
  else {
    return number * factorial(number-1);
}
}

factorial(5);
factorial(6);

//the second less elegant solution but better pratice for using for loops

function factorial(number) {
  var result = 1;
  var count = 0;
  for (count = number; count > 1; count--) {
    result *= count;
  }
  return result;
};

console.log(factorial(6));

//introducing split function and putting it in a variable

function findLongestWord(str) {
  var words = str.split(" ");
  var longest = '';

  for (var i = 0; i < words.length; i++) {
    if (words[i].length > longest.length) {
      longest = words[i];
    }
  }
  return longest;
}

//Will only capitalize the first letter in every word

function upperCase(word) {
    var firstLetter = word[0];
    return firstLetter.toUpperCase() + word.slice(1);
}
function capitalizeFirstLetter(phrase) {
    
    //transform the whole phrase into lowercase
    phrase = phrase.toLowerCase();
    var splitting = phrase.split(" ");
   return splitting.map(upperCase).join(" ");
  
}

//finds the largest number in an array

function largeNumber(array){
  
  var biggestNum = 0;
for (var i = 0; i < array.length; i++) {
    if (array[i] > biggestNum) {
    
    biggestNum =  array[i];
    }
}
  return biggestNum;
}


//return the sum of arrays

function sumOfArray(array) {
  var n = 0;
  for (var i = 0; i<array.length; i++) {
    n += array[i];
  }
  return n;
  }




