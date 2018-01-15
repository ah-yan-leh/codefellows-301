//
function formatWords(words){
	var newWord = words.toString().replace(/,,/g, " ").replace(" ", ", ");
	var lastIndex = newWord.lastIndexOf(', ');
	return newWord.replace(lastIndex, " and ")
	
}