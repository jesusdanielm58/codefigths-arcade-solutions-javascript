function checkPalindrome(inputString) {
	var strReverse=""
    for (var i=inputString.length-1;i>=0;i--){
        strReverse+=inputString[i];
    } 
	if (inputString==strReverse){
		return true
	}
	return false
}
