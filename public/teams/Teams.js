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
document.addEventListener('DOMContentLoaded', function() {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          if (entry.target.classList.contains('typewriter')) {
            entry.target.classList.add('animate-typewriter');
          } else if (entry.target.classList.contains('fade-in-on-view')) {
            entry.target.classList.add('animate-fade-in');
          }
          observer.unobserve(entry.target); // Stop observing once the animation is triggered
        }
      });
    });

    const targets = document.querySelectorAll('.typewriter, .fade-in-on-view');
    targets.forEach(target => observer.observe(target));
  });