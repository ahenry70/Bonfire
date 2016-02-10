function findLongestWord(str) {


var wordArray =  str.split(" ");
var longestWord = wordArray[0];

for (var i = 0; i < wordArray.length; i++){
  compareWord = wordArray[i];
  if(compareWord.length > longestWord.length){
    longestWord = wordArray[i];
  }
}

return longestWord.length;
}
