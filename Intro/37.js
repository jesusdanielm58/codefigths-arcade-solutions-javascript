function arrayMaxConsecutiveSum(inputArray, k) {
    var total=0
    for (var i =0;i<k;i++){
        total+=inputArray[i]
    }
    var max=total
    for (var i=k;i<inputArray.length;i++){
        total-=inputArray[i-k];
        total+=inputArray[i]
        if(total>max){max=total}
    }
    return max
}
