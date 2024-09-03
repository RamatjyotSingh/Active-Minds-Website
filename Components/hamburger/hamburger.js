document.querySelector(".navbar-container--mobile").innerHTML = `<div id="menu">
          <div id="menu-bar" onclick="menuOnClick()">
            <div id="bar1" class="bar"></div>
            <div id="bar2" class="bar"></div>
            <div id="bar3" class="bar"></div>
          </div>
          <nav class="nav" id="nav">
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">Events</a></li>
              <li><a href="#">Resources</a></li>
              <li><a href="#">Team</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </nav>
      </div>
      <div class="menu-bg" id="menu-bg"></div>`;
function menuOnClick() {
    document.getElementById("menu-bar").classList.toggle("change");
    document.getElementById("nav").classList.toggle("change");
    document.getElementById("menu-bg").classList.toggle("change-bg");
}
const style = document.createElement('style');
style.innerHTML = `
 /* body {
    font-family: 'Roboto', sans-serif;
    background-color: wheat ;
    height: 200vh;
} */
  
#menu {
    z-index: 999;
}


#menu-bar {
    width: 35px;
    height: 23px;
    /* ((barThickness)*(number of bars))+((gap between bars)*(number of bars - 1)) */
    margin: 30px 0 10px 20px;
    cursor: pointer;
    position: fixed;
}
  
.bar {
    height: 5px;
    width: inherit;
    background-color: #345d9d;
    display: block;
    border-radius: 5px;
    transition: 0.3s ease;
    -webkit-transition: 0.3s ease;
    -moz-transition: 0.3s ease;
    -ms-transition: 0.3s ease;
    -o-transition: 0.3s ease;
}
  
#bar2 {
    transform: translateY(4px);
    -webkit-transform: translateY(4px);
    -moz-transform: translateY(4px);
    -ms-transform: translateY(4px);
    -o-transform: translateY(4px);
}
  
#bar3 {
    transform: translateY(8px);
    -webkit-transform: translateY(8px);
    -moz-transform: translateY(8px);
    -ms-transform: translateY(8px);
    -o-transform: translateY(8px);
}
  
.nav {
    transition: 0.3s ease;
    opacity: 0;
    visibility:hidden;

    margin-top: 60px;   
    /* distance of links from the hamburger icon */
    position: fixed;
}
  
.nav ul {
    padding: 0 22px;
    /* distance from the left */
}
  
.nav li {
    list-style: none;
    padding: 10px 0;
    /* gap between the list elements */
}
  
.nav li a {
    color: white;
    font-size: 20px;
    text-decoration: none;
}
  
.nav li a:hover {
    font-weight: bold;
    text-decoration: underline;
}
  
.menu-bg, #menu {
    top: 0;
    left: 0;
    position: fixed;
}
  
.menu-bg {
    z-index: 998;
    width: 0;
    height: 0;
    margin: 30px 0 20px 20px;
    background: radial-gradient(circle, #345d9d, #345c9de8);
    border-radius: 50%;
    transition: 0.3s ease;
}

  
.change {
    opacity: 1;
    visibility:visible;
}
  
.change .bar {
    background-color: white;
}
  
.change #bar1 {
    transform: translateY(4px) rotateZ(-45deg);
}
  
.change #bar2 {
    opacity: 0;
}
  
.change #bar3 {
    transform: translateY(-6px) rotateZ(45deg);
}
  
.change-bg {
    width: 520px;
    height: 460px;
    transform: translate(-60%,-30%);
}
.navbar-container{
    opacity: 0;
    visibility: hidden;
}
.active{
    opacity: 1;
    visibility: visible;
}
`;
document.head.appendChild(style);