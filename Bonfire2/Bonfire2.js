function factorialize(lead) {
var trail = lead-1;
while (trail > 1){
  lead *= trail;
  trail--;
}
return lead;

}

factorialize(5);
