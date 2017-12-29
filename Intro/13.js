function reverseParentheses(s) {
	while(s.includes("(")){
		var start=s.lastIndexOf("(");
		var end=s.indexOf(")",start);
		inv=s.slice(start+1,end)
		s2=""
		for (var i=inv.length-1;i>=0;i--){
			s2+=inv[i]
		}
		s=s.slice(0,start)+s2+s.slice(end+1)
	}
	return s
}
