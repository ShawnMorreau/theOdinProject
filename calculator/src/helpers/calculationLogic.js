const add = (a) => {
    if (checkIfContainsValue(a) != true) {
        a = 0;
    }
    return (x) => {
        return x + a;
    }
}
const subtract = (a) => {
    if (checkIfContainsValue(a) != true) {
        a = 0;
    }
    return (x) => {
        return a - x;
    };
}
const multiply = (a) => {
    if (checkIfContainsValue(a) != true) {
        a = 0;
    }
    return (x) => {
        return x * a;
    };
}
const divide = (a) => {
    if (checkIfContainsValue(a) != true) {
        a = 0;
    }
    return (x) => {
        if (x == 0) {
            return "Ooga booga that's a scary one!"
        } else {
            return a / x;
        }
    };
}
const checkIfContainsValue = a => {
    return typeof a == "number";
}
module.exports= {
    add,
    subtract,
    divide,
    multiply
};