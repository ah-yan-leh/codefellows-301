function capitalize(str){
    var capTest = /^[A-Z]/g;
    var lowCaseTest = /^[a-z]/g;
    var resultHolder = [];
	for(var i=0; i<str.length;i++){
		//console.log([i]," index")
        if(capTest.test(str)){
			var str1 = str.toLowerCase();
        	for(var j=0; j<str1.length;j++){
				console.log(str1.charAt([j]),j,([j] % 2));
            }
    	}
		else {
			var str2 = str.toUpperCase();
			for(var k=0; k<str2.length;k++){
				console.log(str2.charAt([k]),k,([k] % 2));
            }
        }
    }
}