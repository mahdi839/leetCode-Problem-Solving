var canPlaceFlowers = function(flowerbed, n) {
    if(flowerbed[0]===0 ){
        flowerbed[0] = 1
        n = n-1
    }

    for(let i=0;i<flowerbed.length;i++){
        
        if(flowerbed[i]===flowerbed[0] || flowerbed[i] === flowerbed[flowerbed.length-1]){
            if(flowerbed[i]===0 && flowerbed[i+1]===0){
                flowerbed[i] = 1
                n = n-1
            }
        }

        if(flowerbed[i]===0 && flowerbed[i-1]===0&& flowerbed[i+1]===0){
            flowerbed[i] = 1
            n = n-1
        }

        

        if(flowerbed.length<2){
            flowerbed[i] = 1
            n = n-1
        }
    }

    if(n===0){
        return true
    }else{
        return false;
    }
    
};

let flowerbed = [0,0,1,0,1];
let n = 1
console.log(canPlaceFlowers(flowerbed,n))