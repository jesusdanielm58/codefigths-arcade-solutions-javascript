function fileNaming(names) {
    obj={}
    arr=[]
    for (var i of names){
        if(i in obj){
            obj[i]++
            count=obj[i]
            while(true){
               str=i+"("+count+")"
                if(str in obj){count++;console.log("pasa")}
                else{break}
       
            }
            arr.push(i+"("+count+")")
            obj[str]=0
        }else{obj[i]=0;arr.push(i)}
    }
    return arr
}
