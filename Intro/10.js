function commonCharacterCount(s1, s2) {
    s2=s2.split("")
    var count=0
    for (var i=0;i<s1.length;i++){
        if (s2.indexOf(s1[i])!==-1 ){
            count++;
            s2[s2.indexOf(s1[i])]=0;
        }
    }
    return count
}
