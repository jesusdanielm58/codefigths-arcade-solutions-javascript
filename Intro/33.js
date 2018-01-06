function stringsRearrangement(inputArray) {
 var result = [],
  usedChars = [];

function permute(arr) {
  var i, ch;
  for (i = 0; i < arr.length; i++) {
    ch = arr.splice(i, 1)[0];
    usedChars.push(ch);
    if (arr.length == 0) {
      result.push(usedChars.slice());
    }
    permute(arr);
    arr.splice(i, 0, ch);
    usedChars.pop();
  }
};
  permute(inputArray)
  for(k of result){
    var found=true
    for (var i=0;i<k.length-1;i++){
        var count=0;
        for (var j=0;j<k[i].length;j++){
            if (k[i][j]!==k[i+1][j]){
                count++;
            }
        }
        if(count!==1){found=false;break}
    }
    if(found){return true}
  }
    return false
}
