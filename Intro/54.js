function sumUpNumbers(inputString) {
    inputString=inputString.split(/[^0-9]/).filter(Boolean)
    total=0
    if(inputString==[]){total}
    
    for (elem of inputString){
        total+=Number(elem)
    }
    return total
}
