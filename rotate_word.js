let rotate_word = function(s,goal){
  
    if(s.length !== goal.length){
          return false;
    }

    for(let i=0; i<s.length;i++){

        s = s.slice(1)+s[0]

        if(s == goal){
            return true;
        }
    }

    return false;
     
}

let s = "cdvab"
let goal = "cdeab"

console.log(rotate_word(s,goal))

//s = bcdea
// goal = bcda