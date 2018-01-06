function countSumOfTwoRepresentations2(n, l, r) {
    count=0
    if (n<l||l>r){return 0}
    for(var i=l;i<=n/2 && i<=r;i++){
        if(n-i<=r){count++}   
    }
    return count
}
