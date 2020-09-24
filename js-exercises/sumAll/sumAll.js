const sumAll = function(...args) {
    if(
        typeof args[0] != "number" || typeof args[1] != "number" ||
        args[0]<0 || args[1] < 0
    ){return "ERROR";}
    let sum = 0;
    const low = Math.min(args[0],args[1]);
    const high = Math.max(args[0],args[1]);
    
    for(let i = low;i <= high; i++){
        sum+=i;
    }
    return sum;
}

module.exports = sumAll
