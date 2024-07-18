const windowWidth = window.innerWidth;
const masonry_grid = document.querySelector(".masonry");
let num_cols = 3
columns = []

function fillColums(){
    for(let i=0;i<num_cols;i++){
        document.querySelectorAll(".cols")
    }
}

function create_columns(num_cols){
    for(let i=0;i<num_cols;i++){
        column = document.createElement("div");
        column.classList.add(`col${i}`);
        masonry_grid.appendChild(column);
        columns.push(column)
    }
}
