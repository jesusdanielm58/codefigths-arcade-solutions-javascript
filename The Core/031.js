function increaseNumberRoundness(n) {
    let zeros="";
    let others="";
    let ns=String(n)
    for(let i of ns){
        if (i=="0"){
            zeros+="0";
        }else{
            others+=i;
        }
    }
    return n!=Number(others+zeros)
}