function growingPlant(upSpeed, downSpeed, desiredHeight) {
    height=0;
    for(var i=1;;i++){
        height+=upSpeed
        if(height>=desiredHeight){return i}
        height-=downSpeed
    }
}
