function capitalize(str){
    var s1Holder = "";
    var s2Holder = "";
    var resultHolder = [];
    for(var j=0; j<str.length;j++){
        console.log(str.charAt([j]),j,([j] % 2));
		if(([j] % 2) == 0){s1Holder += str.charAt([j]).toLowerCase()}
		else{s1Holder += str.charAt([j]).toUpperCase()}
    }
    for(var i=0; i<str.length;i++){
        console.log(str.charAt([i]),i,([i] % 2));
		if(([i] % 2) == 0){s2Holder += str.charAt([i]).toUpperCase()}
		else{s2Holder += str.charAt([i]).toLowerCase()}
    }

    resultHolder.push(s2Holder)
    resultHolder.push(s1Holder);
	return resultHolder;
}