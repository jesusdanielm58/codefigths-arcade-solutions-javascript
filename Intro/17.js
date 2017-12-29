function arrayChange(inputArray) {
    var res=0;
    for (i=1;i<inputArray.length;i++){
        while(inputArray[i]<=inputArray[i-1]){
            inputArray[i]++;
            res++
        }
    }
    return res
}
