function endTest(str, endStr) {

var result = false;
//var compareLength = str. length - endStr.length;

if (str.substr(0-endStr.length) == endStr){
  result = true;
}

return result;
}
