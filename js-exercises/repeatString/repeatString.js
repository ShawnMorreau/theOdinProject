const repeatString = function () {
    let string = arguments[0];
    const num = arguments[1];
    let repeatedString = "";
    if(num < 0){
        return "ERROR";
    }
    if(num === 0){
        return repeatedString;
    }
    for (let i = 0; i < num; i++) {
        repeatedString += string;
    }
    return repeatedString;


}

module.exports = repeatString