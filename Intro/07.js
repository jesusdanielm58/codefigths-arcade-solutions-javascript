function almostIncreasingSequence(arr) {
var count=0
for (var i=0;i<arr.length;i++){
    if (arr[i]===arr[i+1]){
        count++;
        arr.splice(i,1)
        i=-1;
        if (count>=2){return false}
    }else if (arr[i]>arr[i+1]){
        if (i+1===arr.length-1){
            arr.splice(i+1,1)
        }else if (i+2<arr.length && arr[i]<arr[i+2]){
            arr.splice(i+1,1)
        }else{
            arr.splice(i,1)
        }
        count++;
        i=-1;
        if (count>=2){return false}
    }
}
    return true
}
