function alphabeticShift(inputString) {
    cha="abcdefghijklmnopqrstuvwxyz".split("")
    nextChar="bcdefghijklmnopqrstuvwxyza".split("")
    inputString=inputString.split("");
    for (var i=0;i<inputString.length;i++){
        inputString[i]=nextChar[cha.indexOf(inputString[i])]
    }
return inputString.join("")
}
