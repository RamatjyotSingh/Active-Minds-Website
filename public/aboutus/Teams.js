const windowWidth = window.innerWidth;
const grid = document.querySelector(".grid");
let gridItems = Array.from(document.querySelectorAll(".grid-item"));
let numCols = 3;
let columns = [];
let currentMode = "large";


function shuffleGridItems() {
    let shuffledArray = [];
    totalItems = gridItems.length;
    for(let i=0 ; i<totalItems ;i++){
        index = Math.floor(Math.random()*(gridItems.length));
        shuffledArray.push(gridItems[index]);
        gridItems.splice(index,1);
    }
    gridItems = shuffledArray;
}

function deepCopyDivArray(originalArray) {
    return originalArray.map(div => {
      const clonedDiv = div.cloneNode(true);
      return clonedDiv;
    });
}

function createColumns(numCols){
    grid.innerHTML = "";
    for(let i=0;i<numCols;i++){
        col = document.createElement("div");
        col.classList.add("cols");
        grid.appendChild(col);
        columns.push(col);
    }
}

function fillColumns(columns,items){
    let currColumn = 0;
    for(let i=0; i<items.length; i++){
        if(currColumn >= columns.length){
            currColumn = 0;
        }
        columns[currColumn].appendChild(items[i]);
        currColumn++;
    }
}

function createGrid(){
    createColumns(numCols);
    shuffleGridItems();
    fillColumns(columns,gridItems);
}

createGrid();
