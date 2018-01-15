function digitsProduct(product) {
    if(product===1){return 1}
    if(product==0){return 10}
    for(var i=1;i<99999;i++){
        x=String(i)
        total=1
        if(x.includes("0")){continue}
        for(j of x){
            total*=j
        }
        if(product===total){return i}
    }
    return -1
}
