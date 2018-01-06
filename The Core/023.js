function differentRightmostBit(n, m) {
  return (function(){
    n=n.toString(2);
    m=m.toString(2);
    min=Math.min(n.length,m.length)
    max=Math.max(n.length,m.length)
    if(n.length<m.length){n="0".repeat(max-min)+n}
    else{m="0".repeat(max-min)+m}
    m=m.split("").reverse();
    n=n.split("").reverse();
    found=false
    for(var i=0;i<m.length;i++){
      if(n[i]!==m[i]){found=true;break}
    }
    if(found==false){i++}
    return Math.pow(2,i)
  })() ;
}
