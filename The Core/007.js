function lateRide(n) {
    var result=0;
    var cadena=String(Math.floor(n/60))+String(n%60)
    for (var i=0;i<cadena.length;i++){
        result+=Number(cadena[i])
    }
    return result
}
