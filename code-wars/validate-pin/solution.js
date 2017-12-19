function validatePIN(pin){
	var pin2 = parseInt(pin);
  var re = /(\d{4})|(\d{6})/g;
  return re.test(pin2);
}