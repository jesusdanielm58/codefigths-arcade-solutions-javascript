function secondRightmostZeroBit(n) {
  return (function(){
    n=n.toString(2)
    console.log(n)
    count=0;
    count2=0
    index=0;
    for (var i=n.length-1;i>=0;i--){
      if(n[i]==0){count++;if(count==2){index=i;break}}
      count2++;
      
    }
    return (Math.pow(2,count2))
  })() ;
}
