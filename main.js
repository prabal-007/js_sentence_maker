function wordblanks(myNoun, myAdjective, myVerb, myAdverb){
  var result = "";
  result += "The "+myAdjective+" "+myNoun+" "+myVerb+" to the store "+myAdverb;
  
  return result;
}

console.log(wordblanks('dog','big','run','quickly'))
console.log(wordblanks('bike','slow','flew','slowly'));
