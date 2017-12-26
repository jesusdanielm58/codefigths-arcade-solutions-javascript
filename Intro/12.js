function sortByHeight(a) {
    b=a.slice()
    for (var i=1;i<b.length;i++){
        var tmp = b[i];
        for (var j = i - 1; j >= 0 && (b[j] > tmp); j--) {
            b[j + 1] = b[j];
        }
        b[j + 1] = tmp;
    }
    for (var i=a.length-1;i>=0;i--){
        if (a[i]!==-1){a[i]=b.pop()}
    }
    return a
}
