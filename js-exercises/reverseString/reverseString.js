const reverseString = function(string) {
    if(string.length === 0){
        return string;
    }
    let reversedString = "";
    let strArr = string.split("");
    for(let i = strArr.length - 1; i > -1; i--){
        reversedString = reversedString.concat(strArr[i]);
    }
    return reversedString;
}

module.exports = reverseString
