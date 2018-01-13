function longestWord(text) {
    str=""
    strcom=""
    for (var i=0;i<text.length;i++){
        if((text[i]<="z" && text[i]>="a") || (text[i]<="Z" && text[i]>="A")){
           strcom+=text[i]  
        }
        else{
            if (str.length<strcom.length){
                str=strcom;
            }
            strcom=""
        } 
    }
    return str || strcom
}
