function formatWords(words){
	var index = words.indexOf("");
	if (index > -1) {
		words.splice(index, 1);
	}
	if(words.length == 0){
		return words.toString();
	}
	else{
		var newWord = words.toString().replace(/,,/g, " ").replace(" ", " ,  ");
		var newCharacter = " and ";
		var newString = newWord.substring(0, newWord.lastIndexOf(',')) + newCharacter +newWord.substring(newWord.lastIndexOf(',')+1);
		return newString.replace(",", ", ");
	}
	
}

formatWords(['ninja', 'samurai', 'ronin'])
//returns "ninja, samurai and ronin"
formatWords(['ninja', '', 'ronin'])
//returns "ninja and ronin"
formatWords([])
//returns ""