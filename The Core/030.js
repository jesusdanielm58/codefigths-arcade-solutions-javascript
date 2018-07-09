function appleBoxes(k) {
    r=0;
    y=0;
    for(i=1;i<=k;i++){
        if (i%2===0){
           r+=i*i; 
        }else{
            y+=i*i;
        }
    }
    return r-y
}
