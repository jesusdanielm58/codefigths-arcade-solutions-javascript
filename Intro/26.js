function evenDigitsOnly(n) {
    n=String(n).split("")
    for (var i=0;i<n.length;i++){
        if (Number(n[i])%2!==0){return false}
    }
    return true
}
