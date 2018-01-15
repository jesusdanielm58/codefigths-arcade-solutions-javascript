function messageFromBinaryCode(code) {
    str=""
    for(var i=0;i<code.length;i+=8){
        str+=String.fromCharCode(parseInt(code.slice(i,i+8),2))
    }
    return str
}
