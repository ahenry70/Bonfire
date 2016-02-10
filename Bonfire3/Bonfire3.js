function palindrome(str){
var result = false;

var testString = "";
var convertString = str.replace(/\W|[_]/gi, "");
convertString = convertString.toLowerCase();

for (var i = convertString.length - 1; i >= 0; i--){
  testString += convertString[i];
}

  if (testString === convertString){
    result = true;
  }
return result;
}

palindrome("hello");
