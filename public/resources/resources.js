
const titles = Array.from(document.querySelectorAll(".resources"));
const descriptions = Array.from(document.querySelectorAll(".description-text"));
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

function updateBackgroundColor() {
    const scrollPosition = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollFraction = scrollPosition / docHeight;

    // Interpolate the background color between #c7e4f3 (blue) and #98ff98 (mint green)
    const startColor = { r: 0, g: 53, b: 80 }; // Dark blue (#003550)
    const endColor = { r: 0, g: 77, b: 64 }; // Dark green (#004D40)
    // const startColor = { r: 19, g: 135, b: 186 }; // Dark blue (#1387ba)
    // const endColor = { r: 94, g: 125, b: 76 }; // Dark green (#5e8a4c)

    const r = Math.round(startColor.r + (endColor.r - startColor.r) * scrollFraction);
    const g = Math.round(startColor.g + (endColor.g - startColor.g) * scrollFraction);
    const b = Math.round(startColor.b + (endColor.b - startColor.b) * scrollFraction);

    document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
}
window.addEventListener('scroll', updateBackgroundColor);

