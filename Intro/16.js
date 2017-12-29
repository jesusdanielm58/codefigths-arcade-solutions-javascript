function areSimilar(a, b) {
    dif=0;
    var suma=a.reduce(function(a,b){return a+b})
    var sumb=b.reduce(function(a,b){return a+b})
    if (suma !==sumb){return false}
    for (var i=0;i<a.length;i++){
        if (a.indexOf(b[i])===-1 || b.indexOf(a[i])===-1 ){return false}
        if (a[i]!==b[i]){
            dif++;
            if (dif>2){return false}
        }
    }
    return true
}
