function chessBoardCellColor(cell1, cell2) {
    obj={
        A:1,
        B:2,
        C:3,
        D:4,
        E:5,
        F:6,
        G:7,
        H:8
    }
    cell1=obj[cell1[0]]+Number(cell1[1])
    cell2=obj[cell2[0]]+Number(cell2[1])
    if (cell1%2===0 &&cell2%2===0){return true}
    if (cell1%2!==0 &&cell2%2!==0){return true}
    return false
}
