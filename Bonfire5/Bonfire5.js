function titleCase(str) {

var lowerCaseString = str.toLowerCase();
var result = lowerCaseString.charAt(0).toUpperCase();
var addChar = "";

for (var i = 1; i <str.length; i++){
  if (str.charAt(i-1)== " "){
    addChar = lowerCaseString.charAt(i).toUpperCase();
  }else {
    addChar = lowerCaseString.charAt(i);
  }
  result +=addChar;
}

return result;
}
