var firstUniqChar = function(s) {
    let getCount = new Map();
    for (let i of s){
        getCount.set(i,(getCount.get(i) || 0)+1)
    }
    let resultArr = []
    getCount.forEach((value,key) => {
        if(value===1){
            resultArr.push(key)
        }
    });

    if(resultArr.length>0){
        return s.indexOf(resultArr[0])
    }else{
        return -1
    }
    
};

 let s = "loveleetcode"
 console.log(firstUniqChar(s))