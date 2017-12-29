function minesweeper(matrix) {
    var row=matrix.length;
    var col=matrix[0].length;
    var num;
    var arr=[];
    var matrix2=[]
    for (var i=0;i<row;i++){
       arr=[];
        for (var j=0;j<col;j++){
            num=0;
            if (i>0 && matrix[i-1][j]===true){
                num++
            }
            if ((i>0 &&j>0) && matrix[i-1][j-1]===true){
                num++
            }
            if ((i>0 &&j<col) && matrix[i-1][j+1]===true){
                num++
            }
            if (j<col && matrix[i][j+1]===true){
                num++
            }
            if (j>0 && matrix[i][j-1]===true){
                num++
            }
            if ((i<row-1 && j>0) && matrix[i+1][j-1]===true){
                num++
            }
            if ((i<row-1 && j<col) && matrix[i+1][j+1]===true){
                num++
            }
            if (i<row-1 && matrix[i+1][j]===true){
                num++
            }
            arr.push(num)
        }
        matrix2.push(arr)
    }
    return matrix2
}
