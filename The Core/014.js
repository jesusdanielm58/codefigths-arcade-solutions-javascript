function tennisSet(score1, score2) {
  max=Math.max(score1,score2)
  min=Math.min(score1,score2)
 if (max>7 ||max===min){return false}
 if (max===7 && min>=5){return true}
 if (max===6 &&min<5){return true}
 else{return false}
}
