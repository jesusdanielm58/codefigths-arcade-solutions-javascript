function isMAC48Address(inputString) {
    inputString=inputString.split("-")
    var valid="0123456789ABCDEF"
    if (inputString.length!==6){return false}
    for (elem of inputString){
        if (elem.length!==2){return false}
        for(i of elem){
            if( !valid.includes(i)){return false}
        }
    }
    return true
}
