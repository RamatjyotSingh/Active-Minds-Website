const titles = Array.from(document.querySelectorAll(".resources"));
const descriptions = Array.from(document.querySelectorAll(".description-text"));
console.log(titles);
titles.forEach((element) => {
    element.addEventListener("click",displayContext);
    
});

function displayContext(){
    const descriptionTextNode = this.querySelector('.description-text');
    if (descriptionTextNode && descriptionTextNode.classList.contains('description-text')) {
        toggleDisplay(descriptionTextNode);
    } else {
        console.log('No description-text found immediately after this title');
    }
}

function toggleDisplay(element) {
    const computedStyle = window.getComputedStyle(element);
    if (computedStyle.display === "none") {
        element.style.display = "block";
        element.parentNode.classList.add("open");
    } else {
        element.style.display = "none";
        element.parentNode.classList.remove("open");
    }
}
