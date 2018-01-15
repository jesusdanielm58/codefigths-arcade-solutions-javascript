function spiralNumbers(n) {
    matrix=[]
    for (var i=0;i<n;i++){
        arr=[]
        for(var j=0;j<n;j++){
             arr.push(undefined)
        }
       matrix.push(arr)    
    }
    var num=1,i=0,j=0,maxi=0,maxj=0
    while(num<=n*n){
        console.log(num)
        matrix[i][j]=num
        if      ((j<n-1 && matrix[i][j+1]==null) && (i==0||matrix[i-1][j]!=null)){j++}
        else if(i<n-1 && matrix[i+1][j]==null){i++}
        else if(j>0 && matrix[i][j-1]==null){j--}
        else if(i>0 && matrix[i-1][j]==null){i--}
        num++
    }
    if(matrix[0][0]==null){console.log("pasa")}
    return matrix
}
