import * as calcs from "./helpers/calculationLogic.js";
const { add, subtract, multiply, divide } = calcs;
let queue;
let currAns = 0;
/*
    TODO: Keep track of the last num incase someone incorrectly clicks an operator,
    may also be useful for backspacing???
*/
let lastNum;
let firstNum = true;
let afterEquals = false;
let decimalExists = false;
let operators = ["+", "-", "*", "/", "="];
const screen = document.getElementById("screen");
/*
    could make Calculator an Object and add to it's prototype, add getters/setters for 
    sceenval/currAns etc and that would allow for spies with Jasmine to be used and
    test that all the functionality works properly
*/
const operate = (operator) => {
  let screenVal = parseInt(screen.textContent);
  switch (operator) {
    case "+": {
      firstNum = true;
      if (!afterEquals) {
        currAns += screenVal;
      }
      queue = add(currAns);
      clearScreen();
      break;
    }
    case "-": {
      firstNum = true;
      if (!afterEquals) {
        currAns += screenVal;
      }
      queue = subtract(currAns);
      clearScreen();

      break;
    }
    case "*": {
      firstNum = true;
      if (!afterEquals) {
        currAns += screenVal;
      }
      queue = multiply(currAns);
      clearScreen();
      break;
    }
    case "/": {
      firstNum = true;
      if (!afterEquals) {
        currAns += screenVal;
      }
      queue = divide(currAns);
      clearScreen();
      break;
    }
    case "=": {
      if (queue != null || queue != undefined) {
        currAns = queue(screenVal);
      }
      currAns = Math.round(currAns * 100) / 100;
      updateScreen(currAns);
      firstNum = true;
      afterEquals = true;
      queue = null;
      break;
    }
  }
};

function clickNumber(num) {
  let screenContent = parseInt(screen.textContent);
  if (firstNum === true) {
    updateScreen(num);
    firstNum = false;
  } else {
    screenContent += num;
    updateScreen(screenContent);
  }
}

function clearCalc() {
  updateScreen(0);
  currAns = 0;
  queue = null;
  afterEquals = false;
}
function updateScreen(val) {
  screen.textContent = val;
}
function clearScreen() {
  screen.textContent = 0;
}
function backspaceScreen(){
  if(!screen.textContent == 0){
    let newValArr = screen.textContent.split("");
    newValArr = newValArr.filter((val,i) => i != newValArr.length -1);
    if(newValArr.length == 0){
      updateScreen(0);
    }else{
      let newVal = parseInt(newValArr.join(""));
      updateScreen(newVal);
    }
  }
}

window.addEventListener("load", () => {
  createClearButton();
  createNumberButtons();
  createOperatorButtons();
});
window.addEventListener("keydown", (e) => {
  console.log(e.key);
  let buttons = document.querySelectorAll(".button");
  let button = Array.from(buttons).filter(
    (button) => button.textContent == e.key
  );
  if (!!button.length) {
    button[0].classList.add("click");
    setTimeout(() => {
      button[0].classList.remove("click");
    }, 100);
  }
  if (e.code == "Space") {
  } else if (e.key == "Backspace") {
    backspaceScreen();
  } else if (isFinite(e.key)) {
    clickNumber(e.key);
  } else if (operators.includes(e.key)) {
    operate(e.key);
  } else if (e.key === "Enter") {
    operate("=");
  } else {
    updateScreen(currAns);
  }
});

function createOperatorButtons() {
  const operatorsContainer = document.querySelector(".operatorButtons");
  operators.forEach((operator) => {
    let button = document.createElement("button");
    button.textContent = operator;
    button.classList.add("button");
    button.classList.add("operators");
    button.addEventListener("click", (e) => {
      operate(operator);
    });
    operatorsContainer.appendChild(button);
  });
}

function createNumberButtons() {
  const buttonContainer = document.querySelector(".numberButtons");
  for (let i = 9; i >= 0; i--) {
    let button = document.createElement("button");
    button.textContent = i;
    button.addEventListener("click", () => {
      clickNumber(button.textContent);
    });
    button.classList.add("button");
    buttonContainer.appendChild(button);
  }
}

function createClearButton() {
  const calc = document.getElementById("calc");
  const clear = document.createElement("button");
  clear.classList.add("button");
  clear.classList.add("clear");
  clear.textContent = "C";

  clear.addEventListener("click", () => {
    clearCalc();
  });
  calc.appendChild(clear);
}
function createDecimalButton() {
  const buttons = document.querySelector(".buttons");
  const decimal = document.createElement("decimal");
  decimal.classList.add("button");
  decimal.textContent = ".";
  decimal.addEventListener("click", () => {
    if (decimalExists == false) {
      // currAns=
    }
  });
}
