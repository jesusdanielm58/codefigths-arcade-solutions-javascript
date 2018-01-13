function electionsWinners(votes, k) {
    var max=Math.max(...votes)
    var count=0
    if(k==0){
        for(elem of votes){
            if(elem==max){count++}
        }
        if(count==1){return 1}
        return 0
    }
    for (elem of votes){
        if (elem+k>max){count++}
    }
    return count
}
