function repeat(str, numRepeat) {

var result = "";

if(numRepeat < 0) {
return "";
}

if(numRepeat == 0){
  return str;
}

while (numRepeat >0){
  result += str;
  numRepeat--;
}

return result;
}
