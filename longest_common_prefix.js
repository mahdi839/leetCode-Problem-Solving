let longestCommonPre = function (str){
    let prefix = str[0]

    for(let i=0;i<str.length;i++){
        while(str[i].indexOf(prefix) != 0){
            prefix = prefix.substring(0,prefix.length-1)

            if(prefix == ""){
                return "";
            }
        }
    }
  return prefix
}

let strPref = ["flower","flight","flow"]
console.log(longestCommonPre(strPref))