function chessKnight(cell) {
    obj={a:1,b:2,c:3,d:4,e:5,f:6,g:7,h:8}
    count=0
    for (var i=-2;i<=2;i++){
        for (var j=-2;j<=2;j++){
            if(Math.abs(i)!==Math.abs(j) && (j!==0 && i!=0)){
                if(valid(obj[cell[0]]+i,Number(cell[1])+j)){
                    count++    
                }
            }
        }
    }
    function valid(x,y){
        if((x>=1 && x<=8) && (y>=1 && y<=8)){return true}
        return false
    }
    return count
}
