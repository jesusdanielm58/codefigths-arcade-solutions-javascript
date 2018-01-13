function buildPalindrome(st) {
    if (st===st.split("").reverse().join("")){return st}
    var start=Math.floor(st.length/2)
    for (var i=start;i<st.length;i++){
        for (var j=1;j+i<st.length;j++){
            var found=true
            if(st[i+j]!==st[i-j]){found=false;break}
        }
        if (found){return st+st.slice(0,i-j+1).split("").reverse().join("");}
    }
    if (st[st.length-1]==st[st.length-2]){
        return st+st.slice(0,st.length-2).split("").reverse().join("")}
        return st+st.slice(0,st.length-1).split("").reverse().join("")
}
