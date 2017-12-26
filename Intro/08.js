function matrixElementsSum(matrix) {
    var total=0
    for (i=0;i<matrix[0].length;i++){
        for (j=0;j<matrix.length;j++){ 
            if (matrix[j][i]===0){
                break
            }else total+=matrix[j][i]
        }
    }
    return total
}
