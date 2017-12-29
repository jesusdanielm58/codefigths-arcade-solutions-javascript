function palindromeRearranging(inputString) {
    arr=inputString.split("").sort()
    for (var i=0;i<arr.length;i+=2){
        if (arr[i]===arr[i+1]){arr[i]=null;arr[i+1]=null}
        else{i+=-1}
    }
    arr=arr.filter(Boolean)
    console.log(arr)
    if (arr.length<=1 ) {return true}
    return false
}
