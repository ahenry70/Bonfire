function reverseString(str) {

var result = "";
var index = str.length-1;
while (index >= 0){
  result += str[index];
  index--;
}

return result;
}

reverseString("hello");
