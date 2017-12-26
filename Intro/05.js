function shapeArea(n) {
    n-=1;
    for (i=n-1;i>=1;i--){
        n+=i
    }
    return n*4+1
}
