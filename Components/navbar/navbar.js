document.addEventListener('DOMContentLoaded', () => {
    const navbarContainer = document.querySelector('.navbar-container');
    navbarContainer.innerHTML = `
        <div class="navbar">
            <div class="navbar__logo">
                <img src="/Active-Minds-Website/public/club Assets/activeMindsLogo.png" alt="logo"> 
            </div>
            <div class="menu-container">
                <div id="menu-bar">
                    <div id="bar1" class="bar"></div>
                    <div id="bar2" class="bar"></div>
                    <div id="bar3" class="bar"></div>
                </div>
                <ul class="navbar__menu">
                    <li class="navbar__menu-item"><a href="../public/index.html">Home</a></li>
                    <li class="navbar__menu-item"><a href="../public/events.html">Events</a></li>
                    <li class="navbar__menu-item"><a href="../public/resources.html">Resources</a></li>
                    <li class="navbar__menu-item"><a href="../public/teams.html">Team</a></li>
                    <li class="navbar__menu-item"><a href="#contact">Contact</a></li>
                </ul>
                <div class="menu-bg"></div>
            </div>
        </div>
    `;

    const menuBar = document.getElementById('menu-bar');
    const navbarMenu = document.querySelector('.navbar__menu');
    const menuBg = document.querySelector('.menu-bg');

    menuBar.addEventListener('click', () => {
        menuBar.classList.toggle('change');
        navbarMenu.classList.toggle('change');
        menuBg.classList.toggle('change-bg');
    });

    function highlightCurrentPage() {
        const currentPage = window.location.pathname.split('/').pop();
        const menuItems = document.querySelectorAll('.navbar__menu-item a');

        menuItems.forEach(item => {
            if (item.getAttribute('href') === currentPage) {
                item.classList.add('active');
            }
        });
    }

    highlightCurrentPage();

//     const style = document.createElement('style');
//     style.innerHTML = `
//         .navbar{
//     padding:1rem 2rem;
//     position: relative;
//     display:flex;
//     justify-content:space-between;
//     align-items:center;
//     background: transparent;
//     width: 100%;
//     z-index: 999;
//     --menu-margin: 40px;
//     /* --menu-bar-thickness = ((barThickness)*(number of bars))+((gap between bars)*(number of bars - 1)) */
//     --menu-bar-thickness: 23px;
//     --menu-list-margin-top: calc(var(--menu-margin)*1.5 + var(--menu-bar-thickness));
//     font-family: inherit;
// }
// .navbar__logo{
//     position: relative;
//     height:100px;
//     width: 100px;

    
// }

// .navbar__logo img {
//     position: absolute;
//     top: 50%;
//     left: 50%;
//     height: 150%;
//     width: 150%;
//     object-fit: contain;
//     transform: translate(-50%, -50%);
// }
// .navbar__menu{
//     display:flex;
//     position: relative;
//     justify-content:space-between;
//     align-items:center;
//     list-style:none;
// }
// .navbar__menu-item{
//     margin-right: 20px;
// }
// .navbar__menu-item a{
//     text-decoration:none;
//     color: #3a3a3a;
//     font-size: 1.2rem;
    
    
// }



// #menu-bar {
//     display: none;
//     width: 35px;
//     height: var(--menu-bar-thickness);
//     margin: 0 0 15px 0;
//     cursor: pointer;
//     position: relative;
  
// }

// .bar {
//     height: 5px;
//     width: inherit;
//     background-color: #345d9d;
//     display: block;
//     border-radius: 5px;
//     transition: 0.3s ease;
//     -webkit-transition: 0.3s ease;
//     -moz-transition: 0.3s ease;
//     -ms-transition: 0.3s ease;
//     -o-transition: 0.3s ease;
// }

// #bar2 {
//     transform: translateY(4px);
//     -webkit-transform: translateY(4px);
//     -moz-transform: translateY(4px);
//     -ms-transform: translateY(4px);
//     -o-transform: translateY(4px);
// }

// #bar3 {
//     transform: translateY(8px);
//     -webkit-transform: translateY(8px);
//     -moz-transform: translateY(8px);
//     -ms-transform: translateY(8px);
//     -o-transform: translateY(8px);
// }
// @media screen and (min-width: 769px) {
//     .navbar__menu-item a {
//         text-decoration: none;
//         color: #ffffff; /* White color for good contrast */
//     }

//     .navbar__menu-item a:hover, .navbar__menu-item a.active {
//         background-color: #1e90ff; /* Darker shade of blue */
//         color: #dcdcdc; /* Light gray text color for better readability */
//         padding: 5px 10px;
//         border-radius: 5px;
//     }
// }
// @media screen and (max-width: 768px){
//     #menu-bar{
//         display: block;
//         position: relative;
//         right:-1.5rem;

//     }
//     .change.bar{
//         background-color: #e3eef4;
//     }
//     .navbar__menu{
        
//         position: absolute;
//         opacity: 0;
//         visibility: hidden;
//         inset: 0;
//         top:6rem;
//         transition: all 0.3s ease;  
//         flex-direction: column;
//         align-items: flex-start;
//         gap: 1.5rem;
//     }
//     .navbar__menu-item a{
//         color:antiquewhite
//     }
//     .navbar__menu-item{
//         width:100px;

//     }
   
//    .menu-bg{
//     right:-4rem;
//     top:-3rem;
//     transition: all 0.3s ease-out;
//     position: absolute;
//     z-index: -1;
//     border-radius: 50%;
//     background: radial-gradient(circle, #345d9d, #345c9de8);
//     height: 0;
//     width:0;


//    }
//    .menu-container{
//     display: flex;
//     flex-direction: column;
//     gap:2rem;
//     position: relative;
//     padding:2rem;
//     align-items: flex-end;
// }
// .change {
//      display:flex;
//      opacity: 1;
//      visibility: visible;
//  }
// .change .bar {
//      background-color: white;
//  }
// .change #bar1 {
//      transform: translateY(4px) rotateZ(-45deg);
//  }
// .change #bar2 {
//      opacity: 0;
//  }
// .change #bar3 {
//      transform: translateY(-6px) rotateZ(45deg);
//  }
// .change-bg {
//     width: 520px;
//     height: 460px;
   
//     transform: translate(45%);

// }
//     .navbar__menu-item a {
//     color: #ffffff; /* White color for good contrast */
//     text-decoration: none;
//     transition: all 0.3s ease; /* Smooth transition for hover effects */
// }

// .navbar__menu-item a:hover {
//         color: #ff6347; /* Example color for the active page */

//     background-color: rgba(255, 255, 255, 0.2); /* Slight white background on hover */
//     padding: 5px 10px; /* Adjust padding as needed */
//     border-radius: 5px; /* Optional: add rounded corners */
//     box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Add a subtle shadow */
// }

// .navbar__menu-item a.active {
//     font-weight: bold;
//     color: #ff6347; /* Example color for the active page */
//     background-color: rgba(255, 255, 255, 0.8); /* Slight white background */
//     padding: 5px 10px; /* Adjust padding as needed */
//     border-radius: 5px; /* Optional: add rounded corners */
// }

// }
//     `;
    // document.head.appendChild(style);
});