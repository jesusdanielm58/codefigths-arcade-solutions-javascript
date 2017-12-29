function avoidObstacles(inputArray) {
    max=Math.max(...inputArray)
    for( var i=2;i<=max+1;i++){
        pass=true
        for (var j=0;j<inputArray.length;j++){
            if(inputArray[j]%i===0){
                pass=false
                break
            }
        }
         if (pass){return i}
    }
}
