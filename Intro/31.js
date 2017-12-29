function depositProfit(deposit, rate, threshold) {
    rate/=100;
    var count=0
    while(deposit<threshold){
        deposit+=deposit*rate
        count++
    }
    return count
}
