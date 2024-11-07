names = ["Mary","John","Emma"], heights = [180,165,170]
let sortingPairs = names.map((name,index)=>{
    return {name:name,heights:heights[index]}
})
let sortBigNumber = sortingPairs.sort((a,b)=> b.heights-a.heights)
let getName = sortBigNumber.map((name)=> name.name)
console.log(getName)
// names.map((val,index)=>index==)
