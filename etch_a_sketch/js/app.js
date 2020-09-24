let game = document.querySelector("#game");
let isDrawing = false;

window.addEventListener('load', () => {
    createGrid(4);
});

let button = document.createElement("button");
let buttonContainer = document.createElement("div");
buttonContainer.setAttribute("style", "width:100vw;text-align:center");
button.classList.add("button");
button.textContent = "Reset";
buttonContainer.appendChild(button);
button.addEventListener("click", () => {
    reset(game);
    let ans = window.prompt("Please enter how many grids you want to show (default=16)");
    while (parseInt(ans) === NaN) {
        ans = window.prompt("Please enter how many grids you want to show (default=16)");
    }
    if (ans == "") {
        createGrid(16);
    } else {
        createGrid(parseInt(ans));
    }
});

function reset(game) {
    game.removeChild(game.querySelector('.main'))
}
function createGrid(numElements) {
    
    let container = document.createElement('div');
    container.classList.add('main');
    for (let i = 0; i < Math.pow(numElements, 2); i++) {
        let child = document.createElement('div');
        child.classList.add("gridSection");
        child.setAttribute("style",`width: ${((document.body.clientWidth/numElements)/document.body.clientWidth)*100 - 1}vw`);
        console.log(((document.body.clientWidth/numElements)/document.body.clientWidth)*100);
        
        child.addEventListener("mouseenter", () => {
            if (!child.classList.contains("activePanel")) {
                child.classList.add("activePanel");
            }
        });
        container.appendChild(child);
    }
    game.appendChild(container);
    game.appendChild(buttonContainer);
    
}

window.addEventListener("resize",()=>{
    let squares = document.querySelectorAll(".gridSection");
    let size = (document.body.clientWidth/Math.sqrt(squares.length,2))/document.body.clientWidth*100 - 1;
        squares.forEach(square=>square.setAttribute("style",`width: ${size}vw;`))
})