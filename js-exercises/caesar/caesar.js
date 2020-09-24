const caesar = function (string, numToShift) {
    let upperCaseMin = 65;
    let upperCaseMax = 90;
    let lowerCaseMin = 97;
    let lowerCaseMax = 122;
    
    let newStr = [];

    for (let i = 0; i < string.length; i++) {
        if(string.charCodeAt(i) < upperCaseMin || (string.charCodeAt(i)>upperCaseMax && string.charCodeAt(i)<lowerCaseMin)||
        string.charCodeAt(i)>lowerCaseMax){
            newStr.push(string[i]);            
        }
        else if(string.charCodeAt(i) <= upperCaseMax){
            newStr.push(shift(string.charCodeAt(i),numToShift,upperCaseMin,upperCaseMax));
        }else{
            newStr.push(shift(string.charCodeAt(i),numToShift,lowerCaseMin,lowerCaseMax));            
        }
    }
    return newStr.join("");
}
caesar("Hello, World!",-29);
module.exports = caesar
// A-Z [65,90]
    //a-z[97-122]
function shift(num,shift,min,max){
        if(shift < 0 && shift < -26){
            while(shift < -26){
                shift+=26;
            }
        }
        if(shift > 0 && shift > 26){
            while(shift > 26){
                shift-=26;
            }
        }
        if ((num + shift) > max) {
            return (String.fromCodePoint(min + (num + shift) - max-1)); 
        }else if((num + shift) < min){
            return (String.fromCodePoint(max - (min - (num + shift)-1)));           
        }else{
            return String.fromCodePoint(num+shift);
        }
}

//64 A B C D E F G H I J K L M N O P Q R S T U V W X Y Z