const palindromes = function() {
    let word = arguments[0].replace(/[^\w]/gi, '').toLowerCase();
    let i = 0;    
    let j = word.length -1;
    while(i != j && i <= j){
        if(word[i] == undefined){break;}
        if(word[i] != word[j]){
            return false;
        }else if(word[i] == word[j] && word[i] != undefined){
             i++;
             j--;
        }
       
    }
    return true;
}
module.exports = palindromes
