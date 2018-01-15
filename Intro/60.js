function sudoku(grid) {
    for(var i=0;i<grid.length;i++){
        arr=[]
        if (new Set(grid[i]).size!=9){return false}
        for(var j=0;j<grid.length;j++){
            arr.push(grid[j][i])
            if(grid[j][i]>9||grid[j][i]<1){return false}
        }
        if (new Set(arr).size!=9){return false}
    }
    for(var i=0;i<grid.length;i+=3){
        arr=[]
        for (var j=0;j<9;j++){
            arr.push(grid[i][j],grid[i+1][j],grid[i+2][j])
            if((j==2||j==5)||j==8){
            if (new Set(arr).size!=9){return false}
                arr=[]
            }
        }

    }
    return true
}
