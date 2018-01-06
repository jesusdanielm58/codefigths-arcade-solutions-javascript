function magicalWell(a, b, n) {
    total=0
    for(var i=n;i>0;i--){
        total+=a*b;
        a++
        b++
    }
    return total
}
