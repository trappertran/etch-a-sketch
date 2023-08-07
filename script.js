var defaultSize = 16;
const gridContainer = document.getElementById("grid-container");

function createGrid(size) {
    gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    for (let i = 0; i < size * size; i++) {
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
        newSize = gridSizeInput;
        createGrid(newSize);
    }
}

window.onload = () => {
    createGrid(defaultSize);
}