function alternatingSums(a) {
	var res=[0,0]
	for (var i=0;i<a.length;i++){
		if (i%2===0){res[0]+=a[i]}
		else{res[1]+=a[i]}
	}
	return res
}
