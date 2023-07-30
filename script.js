var defaultSize = 16;
const gridContainer = document.getElementById("grid-container");

function createGrid() {
    gridContainer.style.gridTemplateColumns = `repeat(${defaultSize}, 1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${defaultSize}, 1fr)`;

    for (let i = 0; i <= defaultSize * defaultSize; i++) {
        gridBox = document.createElement("div");
        gridBox.classList.add('grid-box');
        gridContainer.appendChild(gridBox);
    }
}

function changeGridSize() {
    var gridSizeInput = document.getElementById("gridSizeInput").value;
    if (isNaN(gridSizeInput)) {
        alert("Please enter a reasonable number!")
    } else {
        defaultSize = gridSizeInput;
        createGrid();
    }
}

createGrid();