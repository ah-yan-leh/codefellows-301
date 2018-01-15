function genCharArray(charA, charZ) {
    var a = [], i = charA.charCodeAt(0), j = charZ.charCodeAt(0);
    for (; i <= j; ++i) {
        a.push(String.fromCharCode(i));
    }
    return a;
 }
 let alphabet = genCharArray('a', 'z');
 
 function high(x){
  let splitString = x.split(" ");
  let winnerWord = "";
  let winnerScore = -1;
  for (i = 0; i < splitString.length; i++) {
    let word = splitString[i].split("")
    let wordScore = 0;
    for (j = 0; j < word.length; j++) {
      let letterScore = alphabet.indexOf(word[j]) + 1;
      wordScore += letterScore;
    }
    if (wordScore > winnerScore) {
      winnerWord = splitString[i];
      winnerScore = wordScore;
    }
  }
 return winnerWord;
 }