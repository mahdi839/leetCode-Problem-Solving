var findRelativeRanks = function(score) {
    let sortedScore = score.sort((a,b) => b -a )
   
    for(let i = 0; i<sortedScore.length;i++){
             if(sortedScore[i]==sortedScore[0]){
                 sortedScore[0] = "Gold Medal"
             }else if(sortedScore[i]==sortedScore[1]){
                 sortedScore[1] = "Silver Medal"
             }else if(sortedScore[i]==sortedScore[2]){
                sortedScore[2] = "Bronze Medal"
            }else{
                let convertStr = i+1;
                sortedScore[i]= convertStr.toString()
            }
    }
    return sortedScore;
};


let score = [5,4,3,2,1]
console.log(findRelativeRanks(score))