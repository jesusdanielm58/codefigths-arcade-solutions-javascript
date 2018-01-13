function deleteDigit(n) {
    n=String(n).split("");
    found=false
    for (var i=0;i<n.length-1;i++){
        if(n[i]<n[i+1]){found=true;n[i]=undefined;break}
    }
    if (!found){
        min=Math.min(...n).toString()
        n[n.indexOf(min)]=undefined
    }
    return Number(n.filter(Boolean).join(""))
}
