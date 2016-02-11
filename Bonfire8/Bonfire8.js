function Truncate(str, maxLength) {

if (str.length <= maxLength){
  return str;
}

if(maxLength === 0){
  return "...";
}

var trim = "";

if(maxLength>3){
  trim = -(str.length-maxLength + 3);
}else{
  trim = -(str.length-maxLength);
}

  result = str.slice(0, trim);
  return result += "...";


}
