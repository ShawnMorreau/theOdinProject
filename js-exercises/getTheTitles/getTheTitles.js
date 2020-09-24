const getTheTitles = function(arr) {
    let bookArr = [];
    arr.forEach(x=>bookArr.push(x.title));
    return bookArr;
}

module.exports = getTheTitles;
