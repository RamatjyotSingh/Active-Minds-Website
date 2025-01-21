import { teamMembers } from './data.js';

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
    // shuffleGridItems();
    fillColumns(columns,gridItems);
}

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


//CREATING NAME CARDS
function createTeamMemberCard(member) {
    const gridItem = document.createElement('div');
    gridItem.className = 'grid-item';
  
    gridItem.innerHTML = `
      <img src="${member.image}"/>
      <div class="content">
        <p class="title">${member.title}</p>
        <p class="name">${member.name}</p>
        <p class="description">${member.description}</p>
        <div class="links">
          ${createSocialLinks(member.socialLinks)}
        </div>
      </div>
    `;
  
    return gridItem;
  }
  
  function createSocialLinks(links) {
    const socialIcons = {
      linkedin: 'teams/images/linkedin.svg',
      github: 'teams/images/github.png',
      instagram: 'teams/images/insta.svg',
      email: 'teams/images/email.svg'
    };
  
    return Object.entries(links)
      .map(([platform, url]) => `
        <a href="${url}"><img src="${socialIcons[platform]}" alt="${platform}"></a>
      `)
      .join('');
  }
  
  
  // Function to create and append all team member cards
  function createTeamCards() {
    const container = document.getElementById('team-container'); // Assume you have a container element
    console.log(container);
    teamMembers.forEach(member => {
      const card = createTeamMemberCard(member);
      container.appendChild(card);
    });
  }
  
  // Call this function when the page loads
  createTeamCards();
  createGrid();
  