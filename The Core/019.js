function rangeBitCount(a, b) {
    count=0
    for (var i=a;i<=b;i++){
        binary=i.toString(2)
        for (j of binary){
            if(j==1){count++}
        }
    }
    return count
}
