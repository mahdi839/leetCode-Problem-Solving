let accounts = [[1,4,5],[3,4,1]]
let maxWealth = 0;
for(let customer of accounts){
    console.log(customer)
    let customerWealth = customer.reduce((total,val)=>{
     return total + val;
    },0)
   
  
    if(customerWealth>maxWealth){
        maxWealth = customerWealth
    }
}
console.log(maxWealth)


