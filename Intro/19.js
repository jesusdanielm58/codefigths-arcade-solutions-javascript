function areEquallyStrong(yourLeft, yourRight, friendsLeft, friendsRight) {
    max1=Math.max(yourLeft,yourRight)
    max2=Math.max(friendsLeft,friendsRight)
    min1=Math.min(yourLeft,yourRight)
    min2=Math.min(friendsLeft,friendsRight)
    return max1===max2 && min1===min2
}
