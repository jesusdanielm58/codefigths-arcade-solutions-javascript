function allLongestStrings(inputArray) {
    var max=0;
    var outputArray=[];
    for (var i=0;i<inputArray.length;i++){
        if (max<inputArray[i].length){
            max=inputArray[i].length;
            outputArray=[];
            outputArray.push(inputArray[i])
        }else if (max===inputArray[i].length){
            outputArray.push(inputArray[i])
        }
    }
    return outputArray
}
