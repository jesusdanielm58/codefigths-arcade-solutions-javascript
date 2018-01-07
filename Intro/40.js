function longestDigitsPrefix(inputString) {
    var str=""
    for (var elem of inputString){
        if(elem<="9" && elem>="0"){
            str+=elem
        }else{break}
    }
    return str
}
