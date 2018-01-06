function extractEachKth(inputArray, k) {
    for(var i=k-1;i<inputArray.length;i+=k){
        inputArray[i]=undefined
    }
    inputArray=inputArray.filter(Boolean)
    return inputArray
}
