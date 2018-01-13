function lineEncoding(s) {
    str=""
    for (var i=0;i<s.length-1;i++){
        count=0
        for(var j=0;j+i<s.length;j++){
            if(s[i]!==s[i+j]){break}
            count++
        }
        console.log(count)
        if(count==1){
            str+=s[i]
        }else{str+=count+s[i];i+=count-1}
    }
    if(s[s.length-1]!==s[s.length-2]){str+=s[s.length-1]}
    return str
}
