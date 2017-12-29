function isIPv4Address(inputString) {
    arr=inputString.split(".")
    for (var i=0;i<arr.length;i++){
        if(arr[i]==="" ||isNaN(Number(arr[i]))){return false}
        if (Number(arr[i]>255) ||Number(arr[i]<0)){return false}
    }
    if (arr.length!==4){return false}
    return true
}
