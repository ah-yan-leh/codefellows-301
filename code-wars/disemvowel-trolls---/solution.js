// coffeescript

/*
disemvowel =(str) ->
    str.replace(/a|e|i|o|u/gi, "");
*/

function disemvowel(str){
    return str.replace(/a|e|i|o|u/gi, "");
}

disemvowel("alpha");