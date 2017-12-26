function isLucky(n) {
    n=String(n);
    var n1=0,n2=0
    for (let i=0;i<n.length/2;i++){
        n1+=Number(n[i]);
        n2+=Number(n[i+n.length/2])
    }
    return(n1===n2)
}
