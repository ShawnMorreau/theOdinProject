function add (a,b) {
	return a+b;
}

function subtract (a,b) {
	return a-b;
}

function sum () {
	return [...arguments[0]].reduce((acc,next)=>{
		return acc + next;
	},0)
}

function multiply () {
	return [...arguments[0]].reduce((acc,next)=>{
		return acc * next;
	},1)
}

function power() {
	return Math.pow(arguments[0],arguments[1]);
}

function factorial() {
	let n = arguments[0];
	let sum = 1;
	for(let i = n; i > 0; i--){
		sum*=i;
	}
	return sum;
}
module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}