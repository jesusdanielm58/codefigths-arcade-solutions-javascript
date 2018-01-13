function validTime(time) {
    h=Number(time.slice(0,2))
    m=Number(time.slice(3))
    if (h<0 || h>=24){return false}
    if (m<0 || m>=60){return false}
    return true
}
