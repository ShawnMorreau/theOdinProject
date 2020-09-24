const fibonacci = function(fibNum){
    //1 1 2 3 5 8 12 20 32 52 84
    if(fibNum <=0){
        return "OOPS";
    }
    if(typeof fibNum == String){
        fibNum = parseInt(fibNum);
    }
    if(fibNum == 1 || fibNum == 2){
        return 1;   
    }
    let fibMap = [];
    for(let i = 0; i < fibNum; i++){
        if(i == 0 || i == 1){
            fibMap.push(1);
        }else{
            let newNum = fibMap[i-2] + fibMap[i-1];
            fibMap.push(newNum);
        }        
    }
    let len = fibMap.length-1;
    return fibMap[len];
}
module.exports = fibonacci
