function lineUp(commands) {
    total=0;
    faceSD=true;
    for(i of commands){
        if(i=="A" && faceSD){
            total++;
        }
        else if(i=="L"||i=="R"){
            if(faceSD==false){
                total++;
            }
            faceSD=!faceSD;
        }
    }
    return total
}
