function validateUsr(username) {
	var patternTest = /^([a-z0-9_]){4,16}$/g;
	res =  patternTest.test(username) 
	return res
}