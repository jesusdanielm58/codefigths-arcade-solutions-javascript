function boxBlur(image) {
    var matrix=[]
    for (var i=1;i<image.length-1;i++){
        var arr=[]
        for (var j=1;j<image[i].length-1;j++){
            num=image[i-1][j-1]+image[i-1][j]+image[i-1][j+1]+
                image[i][j-1]+image[i][j]+image[i][j+1]+
                image[i+1][j-1]+image[i+1][j]+image[i+1][j+1]
            num=Math.floor(num/9)
            arr.push(num)
            
        }
        matrix.push(arr)
    }
    return matrix
}
