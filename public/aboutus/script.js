const windowWidth = window.innerWidth;
const masonry_grid = document.querySelector(".masonry");
let num_cols = 1
columns = []

function create_columns(num_cols){
    for(let i=0;i<num_cols;i++){
        column = document.createElement("div");
        column.classList.add(`col${i}`);
        masonry_grid.appendChild(column);
        columns.push(column)
    }
}
