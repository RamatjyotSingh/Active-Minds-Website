document.addEventListener('DOMContentLoaded', () => {
    // Initialize AOS
    AOS.init({
        duration: 1000, 
        easing: 'ease-in-out', 
        once: true, 
        offset: 100 
    });

    function menuOnClick() {
        document.getElementById("menu-bar").classList.toggle("change");
        document.getElementById("nav").classList.toggle("change");
        document.getElementById("menu-bg").classList.toggle("change-bg");
    }
    const rows = 5; 
    const cols = 5; 

    function createBall(row, col) {
        const ball = document.createElement('div');
        ball.classList.add('shape');

        const size = Math.random() * 200 + 100;
        ball.style.width = `${size}px`;
        ball.style.height = `${size}px`;

        const viewportHeight = window.innerHeight;
        const viewportWidth = window.innerWidth;

        const cellHeight = viewportHeight / rows;
        const cellWidth = viewportWidth / cols;

        const top = (row * cellHeight) + (cellHeight / 2) - (size / 2);
        const left = (col * cellWidth) + (cellWidth / 2) - (size / 2);

        ball.style.position = 'fixed';
        ball.style.top = `${top}px`;
        ball.style.left = `${left}px`;

        document.body.appendChild(ball);
        animateBall(ball, viewportHeight, viewportWidth);
        checkOverlap(ball);
    }

    function animateBall(ball, viewportHeight, viewportWidth) {
        const keyframes = [
            { 
                transform: `translate(${Math.random() * (viewportWidth - parseFloat(ball.style.width))}px, ${Math.random() * (viewportHeight - parseFloat(ball.style.height))}px)` 
            },
            { 
                transform: `translate(${Math.random() * (viewportWidth - parseFloat(ball.style.width))}px, ${Math.random() * (viewportHeight - parseFloat(ball.style.height))}px)` 
            }
        ];

        const options = {
            duration: Math.random() * 15000 + 5000,
            iterations: Infinity,
            direction: 'alternate',
            easing: 'ease-in-out'
        };

        ball.animate(keyframes, options);
    }

    function checkOverlap(ball) {
        const textElements = document.querySelectorAll('h1, h2');

        textElements.forEach(text => {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        text.classList.add('text-covered');
                    } else {
                        text.classList.remove('text-covered');
                    }
                });
            });

            observer.observe(ball);
        });
    }

    function updateBackgroundColor() {
        const scrollPosition = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollFraction = scrollPosition / docHeight;

        // Interpolate the background color between #c7e4f3 (blue) and #98ff98 (mint green)
        const startColor = { r: 199, g: 228, b: 243 }; // Blue color
        const endColor = { r: 185, g: 244, b: 207 }; // Mint green color 

        const r = Math.round(startColor.r + (endColor.r - startColor.r) * scrollFraction);
        const g = Math.round(startColor.g + (endColor.g - startColor.g) * scrollFraction);
        const b = Math.round(startColor.b + (endColor.b - startColor.b) * scrollFraction);

        document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    }

    window.addEventListener('scroll', updateBackgroundColor);

    // Function to make the image appear when scrolling to the "About Us" section
    const aboutSection = document.querySelector('.about-content');
    const aboutImage = document.querySelector('.about-image');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                aboutImage.classList.add('animate');
            }
        });
    });

    observer.observe(aboutSection);
    // Intersection Observer for the typewriter effect on .about-title
    const aboutTitle = document.querySelector('.about-title');

    if (aboutTitle) {
        const titleObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    aboutTitle.classList.add('start-animation');
                    observer.unobserve(aboutTitle); // Stops observing after animation starts
                }
            });
        }, {
            threshold: 0.5, // Adjusts the amount of visibility required to trigger the animation
        });

        titleObserver.observe(aboutTitle);
    }

       // Check if the page is Home or Contact Us before creating balls
       const body = document.body;
       if (body.classList.contains('home-page') || body.classList.contains('contact-page')) {
           // Create and animate the balls
           for (let row = 0; row < rows; row++) {
               for (let col = 0; col < cols; col++) {
                   createBall(row, col);
               }
           }
       }

       function createBee(beeClass) {
        const bee = document.createElement('div');
        bee.classList.add('bee', beeClass);
        document.body.appendChild(bee);
    
        function moveBee() {
            const viewportWidth = window.innerWidth;
            const viewportHeight = window.innerHeight;
    
            // Define movement duration and oscillation amplitude
            const duration = 15000; // 15 seconds
            const oscillationAmplitude = 100; // Oscillation amplitude for up-down movement
    
            // Function to animate the bee
            function animateBee() {
                let startX = -100; // Offscreen to the left
                let startY = Math.random() * viewportHeight; // Random vertical start point on re-entry
                bee.style.position = 'fixed';
                bee.style.left = `${startX}px`;
                bee.style.top = `${startY}px`;
                
                let startTime = null;
    
                function animate(time) {
                    if (!startTime) startTime = time;
                    const elapsed = time - startTime;
    
                    // Calculate progress from 0 to 1 over the given duration
                    const progress = (elapsed % duration) / duration;
    
                    // Determine the direction of the bee (rightward in first half, leftward in second half)
                    const direction = progress < 0.5 ? 1 : -1; // 1 when moving right, -1 when moving left
                    const adjustedProgress = direction === 1 ? progress : 1 - progress; // Adjust progress for return trip
    
                    // Calculate the new X position
                    const newX = startX + viewportWidth * adjustedProgress * 2; // Moves across screen and back
                    // Calculate the Y position with oscillation
                    const oscillation = Math.sin(progress * Math.PI * 2) * oscillationAmplitude;
    
                    // Apply transformations to the bee's position
                    bee.style.transform = `translate(${newX * direction}px, ${startY + oscillation}px)`;
    
                    // Restart the animation loop with new random height after one full cycle
                    if (progress >= 1) {
                        startX = -100; // Reset to offscreen left
                        startY = Math.random() * viewportHeight; // New random vertical start position
                        startTime = time; // Reset animation time
                    }
    
                    requestAnimationFrame(animate);
                }
    
                requestAnimationFrame(animate);
            }
    
            animateBee();
        }
    
        moveBee();
        return bee;
    }
    
    // Create the bee with the continuous, oscillating, and random left-entry behavior
    createBee('bee1');
    
    
    

    // Add glow effect to social icons on click
    const socialIcons = document.querySelectorAll('.social-icon');
    socialIcons.forEach(icon => {
        icon.addEventListener('click', () => {
            socialIcons.forEach(i => i.classList.remove('glow'));
            icon.classList.add('glow');
            setTimeout(() => {
                icon.classList.remove('glow');
            }, 1000);
        });
    });

    // JavaScript for popup functionality
    // JavaScript to handle form visibility
    document.getElementById('join-us-button').addEventListener('click', function() {
        document.getElementById('form-section').style.display = 'flex'; // Show the form
    });

    document.getElementById('form-close').addEventListener('click', function() {
        document.getElementById('form-section').style.display = 'none'; // Hide the form
    });

    document.addEventListener('DOMContentLoaded', () => {
        const activeText = document.querySelector('.active-text');
        const mindsText = document.querySelector('.minds-text');
        
        const addGlow = () => {
            activeText.classList.add('glow');
            mindsText.classList.add('glow');
        };
    
        const removeGlow = () => {
            activeText.classList.remove('glow');
            mindsText.classList.remove('glow');
        };
    
        // Function to handle bee and bubble hover
        const handleHover = (event) => {
            if (event.type === 'mouseover') {
                addGlow();
            } else {
                removeGlow();
            }
        };
    
        // Assuming you have classes .bee and .bubble for bees and bubbles
        const bees = document.querySelectorAll('.bee');
        const bubbles = document.querySelectorAll('.shape');
    
        bees.forEach(bee => {
            bee.addEventListener('mouseover', handleHover);
            bee.addEventListener('mouseout', handleHover);
        });
    
        bubbles.forEach(bubble => {
            bubble.addEventListener('mouseover', handleHover);
            bubble.addEventListener('mouseout', handleHover);
        });
    });
    
    const navMenu = document.querySelector('.nav-menu');
    const hamburger = document.querySelector('.hamburger-menu');
    const menuItems = document.querySelectorAll('.menu-items li');

    hamburger.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        
        if (navMenu.classList.contains('active')) {
            menuItems.forEach((item, index) => {
                setTimeout(() => {
                    item.style.transitionDelay = `${index * 0.1}s`;
                    item.style.opacity = '1';
                    item.style.transform = 'translateX(0)';
                }, 300);
            });
        } else {
            menuItems.forEach((item) => {
                item.style.transitionDelay = '0s';
                item.style.opacity = '0';
                item.style.transform = 'translateX(-20px)';
            });
        }
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        if (!navMenu.contains(event.target) && navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
            menuItems.forEach((item) => {
                item.style.transitionDelay = '0s';
                item.style.opacity = '0';
                item.style.transform = 'translateX(-20px)';
            });
        }
    });


});
