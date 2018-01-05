function arrayPacking(a) {
    var result=[]
    for(i of a){
        i=i.toString(2)
        if(i.length<8){i="0".repeat(8-i.length)+i}
        result.push(i)
    }
    result=result.reverse().join("")
    return result=parseInt(result,2)
}
