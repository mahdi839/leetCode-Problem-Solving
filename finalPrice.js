var finalPrices = function(prices) {

    for(let i =0;i<prices.length;i++){
        for(let j=i+1;j<prices.length;j++){
           if(prices[i]>=prices[j]){
               prices[i] = prices[i]-prices[j]
              console.log(i,j)
              break;
           }

          
        }
    }

   return prices;
 
};

let prices = [8,4,6,2,3]
console.log(finalPrices(prices))