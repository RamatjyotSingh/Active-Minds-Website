const windowWidth = window.innerWidth;
const grid = document.querySelector(".grid");
let gridItems = Array.from(document.querySelectorAll(".grid-item"));
let numCols = 3;
let columns = [];
let currentMode = "large";
const BIG_SCREEN_MIN_WIDTH = 600;



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
    if(windowWidth >= BIG_SCREEN_MIN_WIDTH){
        //3 columns mason
        for(let i=0;i<numCols;i++){
            col = document.createElement("div");
            col.classList.add("cols");
            grid.appendChild(col);
            columns.push(col);
        }
    }else{
        //1 column
        col = document.createElement("div");
        col.classList.add("cols");
        grid.appendChild(col);
        columns.push(col);
    }
}

function fillColumns(columns,items){
    let currColumn = 0;
    if(windowWidth >= BIG_SCREEN_MIN_WIDTH){
        for(let i=0; i<items.length; i++){
            if(currColumn >= columns.length){
                currColumn = 0;
            }
            columns[currColumn].appendChild(items[i]);
            currColumn++;
        }
    }else{
        for(let i=0; i<items.length; i++){
            if(currColumn >= columns.length){
                currColumn = 0;
            }
            columns[currColumn].appendChild(items[i]);
        }
    }
}

function createGrid(){
    createColumns(numCols);
    // shuffleGridItems();
    fillColumns(columns,gridItems);
}

createGrid();

function updateBackgroundColor() {
    const scrollPosition = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollFraction = scrollPosition / docHeight;

    // Interpolate the background color between #c7e4f3 (blue) and #98ff98 (mint green)
    const startColor = { r: 0, g: 53, b: 80 }; // Dark blue (#003550)
    const endColor = { r: 0, g: 77, b: 64 }; // Dark green (#004D40)

    const r = Math.round(startColor.r + (endColor.r - startColor.r) * scrollFraction);
    const g = Math.round(startColor.g + (endColor.g - startColor.g) * scrollFraction);
    const b = Math.round(startColor.b + (endColor.b - startColor.b) * scrollFraction);

    document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
}
window.addEventListener('scroll', updateBackgroundColor);