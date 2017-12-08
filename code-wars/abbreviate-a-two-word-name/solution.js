function abbrevName(name){
	var returnAnswer = "";
	var strHolder = name.split(" ");
	for(var i = 0; i < strHolder.length; i++){returnAnswer += strHolder[i].charAt(0)+".";}
	return returnAnswer.slice(0, 3).toUpperCase();

}