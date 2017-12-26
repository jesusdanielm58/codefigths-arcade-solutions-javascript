function isInfiniteProcess(a, b) {
    if (a>b){
        return true
    }if ((a%2===0 && b%2===0) || (a%2!==0 && b%2!==0)){return false}
    return true
}
