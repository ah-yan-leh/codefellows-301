function validatePIN(pin){
  // this solution: Passed: 14 Failed: 5 Errors: 1
	var pin2 = parseInt(pin);
  var re = /(\d{4})|(\d{6})/g;
  return re.test(pin2);
}

// solution # 2

function validatePIN(pin){
  // this solution: Passed: 11 Failed: 8 Errors: 1
	if(pin.length !=4 || pin.length !=6){
		return false;
	}
    var pin2 = parseInt(pin);
        console.log('pin length',pin.length)
      var re = /(\d{4})|(\d{6})/g;
      return re.test(pin2);
}