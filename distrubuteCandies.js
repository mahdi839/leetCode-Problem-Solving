var distributeCandies = function(candyType) {
    let candyTypeCount = new Set (candyType)
    let countCandy = candyType.length;
    console.log(countCandy)
    let advicedQty = countCandy/2;

    if(advicedQty<=candyTypeCount.size){
        return advicedQty;
    }
    else{
        return candyTypeCount.size
    }
    

};

let candyType = [1,1,2,3]

console.log(distributeCandies(candyType))

