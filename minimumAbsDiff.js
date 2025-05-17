var minimumAbsDifference = function(arr) {
    arr.sort((a,b) =>a-b)
    let minDiff = Infinity;   
    let right =1;
    let resultArr = []
    for(let i=0;i<arr.length;i++){
       let diff = arr[right] - arr[i];
       if(diff<minDiff){
          minDiff = diff;
       }

      
       right++
    }
    
    let second =1;
    for(let x =0;x<arr.length;x++){
        if((arr[second]-arr[x])===minDiff){
            let perfectArr = [arr[x],arr[second]]
            console.log("perfarr"+ " " + perfectArr)
            resultArr.push(perfectArr)
          }

          second++
    }
   
    return resultArr;
};

let arr = [40,11,26,27,-20]
console.log(minimumAbsDifference(arr))