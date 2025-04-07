var destCity = function(paths) {
//    let mapPaths = new Map()
//    for(let i=0;i<paths.length;i++){
//     paths[i].forEach((path)=>{
//       mapPaths.set(path,mapPaths.get(path)+1||1)
//     })
//    }

//    let result = ''
//    mapPaths.forEach((value,key)=>{
//     for(let i=0;i<paths.length;i++){
//         if(value === 1 && key ===paths[i][1]){
             
//              result = paths[i][1]
//         }
//     }
//    })
//    return result;

let startCities = new Set();
 for(let [start,end] of paths){
   startCities.add(start)  
 }

 for(let [start,end] of paths){
    if(!startCities.has(end)) {
        return end;
    }
  }

};

let paths = [["pYyNGfBYbm","wxAscRuzOl"],["kzwEQHfwce","pYyNGfBYbm"]]
console.log(destCity(paths))