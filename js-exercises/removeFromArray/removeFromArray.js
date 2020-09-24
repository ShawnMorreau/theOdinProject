const removeFromArray = function() {
    let arr = arguments[0];
    let numToBeRemoved = [...arguments];
    arr = arr.filter(x=> !numToBeRemoved.includes(x));
    return arr;
}

module.exports = removeFromArray
