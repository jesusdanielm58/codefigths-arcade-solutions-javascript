function phoneCall(min1, min2_10, min11, s) {
    if (s<min1){return 0}
    s-=min1;
    for (i=1;i<10;i++){
        if (s<min2_10){return i}
        s-=min2_10
    }
    while(true){
        if (s<min11){return i}
        else {i++;s-=min11}
    }
    return i+" "+s
}
