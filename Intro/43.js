function isBeautifulString(inputString) {
      var obj={}
      for (var i of inputString){
            if(i in obj){obj[i]++}
            else{obj[i]=1}
      }
      str="abcdefghijklmnopqrstuvwxyz"
      max=obj[str[0]] ||0
      for(var i=0;i<str.length-1;i++){
            next=obj[str[i+1]]||0
            if(max<next){return false}
            else{max=next}
      }
      return true
}
