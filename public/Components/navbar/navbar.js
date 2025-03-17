document.addEventListener('DOMContentLoaded', () => {
    const navbarContainer = document.querySelector('.navbar-container');
    navbarContainer.innerHTML = /*html*/`
    
        <div class="navbar">
            <div class="navbar__logo">

                <a href="index.html"><img src="club Assets/activeMindLogoOutlined.png" alt="logo"> </a>
            </div>
            <div class="menu-container">
                <div id="menu-bar">
                    <div id="bar1" class="bar"></div>
                    <div id="bar2" class="bar"></div>
                    <div id="bar3" class="bar"></div>
                </div>
                <ul class="navbar__menu">
                    <li class="navbar__menu-item"><a href="index.html">Home</a></li>
                    <li class="navbar__menu-item"><a href="events.html">Events</a></li>
                    <li class="navbar__menu-item"><a href="resources.html">Resources</a></li>
                    <li class="navbar__menu-item"><a href="teams.html">Team</a></li>
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

});