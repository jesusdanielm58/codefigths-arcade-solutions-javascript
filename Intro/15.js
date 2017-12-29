function addBorder(picture) {
    len=picture[0].length;
    for (var i=0;i<picture.length;i++){
        picture[i]="*"+picture[i]+"*"
    }
    picture.push("*".repeat(len+2))
    picture.unshift("*".repeat(len+2))
    return picture
}
