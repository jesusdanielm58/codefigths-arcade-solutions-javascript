function additionWithoutCarrying(param1, param2) {
    let result="";
    let bigest=Math.max(param1, param2)
    let smallest=Math.min(param1, param2)
    bigest=String(bigest)
    smallest=String(smallest)
    smallest="0".repeat(bigest.length-smallest.length)+smallest
    for(let i=0;i<bigest.length;i++){
        tem=Number(smallest[i])+Number(bigest[i]);
        if(tem>=10){tem=tem%10}
        result+=tem
    }
    return Number(result)
}
