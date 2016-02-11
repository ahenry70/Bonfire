function chunk(array, splitSize) {
var result =[];
var start = 0;
var end = splitSize
if(array.length <= splitSize){
  return array
}
while(end <= array.length){
  result.push(array.slice(start, end));
  start += splitSize;
  end += splitSize;
}

if(array.length>start){
  result.push(array.slice(start,end));
}
return result;
}
