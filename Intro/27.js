function variableName(name) {
    arr="-.,*!$%&/)(=?:; }{][|\\^#^".split("")
    if (Number(name.charAt(0)) || name[0]==="0"){return false}
    for (var i=0;i<arr.length;i++){
         if (name.includes(arr[i])){return false}
    }
    return true
}
