function willYou(young, beautiful, loved) {
    if(!loved && (beautiful && young)){return true}
    if((loved && !beautiful)||(loved && !young)){return true}
    return false
}
