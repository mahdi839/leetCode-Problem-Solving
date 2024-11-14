let arranging_coins = function (n){
    let row =0;
    while(n>=row+1){
        row += 1
        n -=row
    }

    return row;
}




// 1
// 2
// 



let n = 5;
console.log(arranging_coins(n))