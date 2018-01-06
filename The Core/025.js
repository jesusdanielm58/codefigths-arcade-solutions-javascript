function leastFactorial(n) {
    total=1
    for (i=1;;i++){
        if(total>=n){return total}
        total*=i 
    }
}
