function swapAdjacentBits(n) {
  return (function(){
   n=n.toString(2).split("")
   if(n.length%2==1){
    n.unshift(0)
   }
   for(var i=0;i<n.length-1;i+=2){
    tem=n[i];
    n[i]=n[i+1];
    n[i+1]=tem
   }
   return parseInt(n.join(""),2)
  })() ;
}
