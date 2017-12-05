
var str = "this.is.a.long.string";

//this is not ideal as it replaces the first occurance of match.
var replaceDots = function(str) {
  return str.replace(".", '-');
}

// this should work but doesn't
var replaceDots = function(str) {
    for (var i = 0; i < str.length; i++){
        if(str[i] == "."){
			console.log(str.replace("." , "-"));
        }
    }
	return str;
}

// Michael Brown's solution
var re = /[.]/g;
var replaceDotsByMichael = function(str) {
  return str.replace(re, '-');
}
replaceDotsByMichael(str);