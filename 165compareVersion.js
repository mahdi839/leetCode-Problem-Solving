var compareVersion = function(version1, version2) {
    let splitedStr1 = version1.split(".")
    let splitedStr2 = version2.split(".")
    let maxLength = Math.max(splitedStr1.length,splitedStr2.length)
    for(let i=0;i<maxLength;i++){
       if(splitedStr1[i]==undefined){
         splitedStr1.push(0)
       }
       if(splitedStr2[i]==undefined){
        splitedStr2.push(0)
      }
      if(Number(splitedStr1[i])< Number(splitedStr2[i])){
        return -1
      }else if(Number(splitedStr1[i])> Number(splitedStr2[i])){
        return 1;
      }
    }
    console.log(splitedStr2)
    return 0;
};

let version1 = "1.0.1"
let version2 = "1"
console.log(compareVersion(version1,version2))