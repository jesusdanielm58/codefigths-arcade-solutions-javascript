function differentSquares(matrix) {
    arr=[]
    if(matrix.length<2 || matrix[0].length<2){return 0}
    for(var i=0;i<matrix.length-1;i++){
        for(var j=0;j<matrix[0].length-1;j++){
            square=""+matrix[i][j]+matrix[i][j+1]+matrix[i+1][j]+matrix[i+1][j+1]
            if(arr.indexOf(square)==-1){arr.push(square)}
        }
    }
    return arr.length
}
