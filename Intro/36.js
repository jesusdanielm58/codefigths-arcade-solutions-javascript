function differentSymbolsNaive(s) {
    seen=""
    for (k of s){
        if(!seen.includes(k)){seen+=k}
    }
    return seen.length
}
