const gridSize = document.querySelector("#gridsize");

let side = 16;
let stylus = "pencil";

gridSize.addEventListener("click", () => {
    let size = prompt("Enter a grid dimension between 1 and 100:", side);
    if (!Number.isNaN(size) && +size >= 1 && +size <= 100) {
        side = +size;
        createGrid(+size);
    }
})

pencil.addEventListener("click", () => {
    stylus = "pencil";
    pencil.className = "selected";
    rainbow.className = "notselected";
    eraser.className = "notselected";
})

rainbow.addEventListener("click", () => {
    stylus = "rainbow";
    pencil.className = "notselected";
    rainbow.className = "selected";
    eraser.className = "notselected";
})
