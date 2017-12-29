function arrayMaximalAdjacentDifference(inputArray) {
    max=Math.abs(inputArray[0]-inputArray[1])
    console.log(max)
    for (var i=0;i<inputArray.length-1;i++){
        if (max<Math.abs(inputArray[i]-inputArray[i+1])){max=Math.abs(inputArray[i]-inputArray[i+1])}
    }
    return max
}
