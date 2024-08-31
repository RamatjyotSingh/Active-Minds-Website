const eventList = {
    event1: {date: '2029-01-01', img: 'https://images.unsplash.com/photo-1721714874858-18526c08b8d7?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8', title: 'New Year\'s Day', description: 'loremj;jpwj;sj kdpaib ebfpwejkkjkwejekjkj kwekjjwej kjjjwejkwejkewjkew jkewjkewjk ewkejwkje wejkw hellp abc.', type: 'event',externalLink:"#"},
    event2: {date: '2019-02-14', img: 'https://images.unsplash.com/photo-1719937206255-cc337bccfc7d?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8', title: 'Valentine\'s Day', description: 'This is a valentine\'s day.', type: 'newsletter',externalLink:'#'},
    event3: {date: '2019-07-04', img: 'https://plus.unsplash.com/premium_photo-1721257104603-b6b48b7ff239?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8', title: 'Independence Day', description: 'This is an independence day.', type: 'archive',externalLink:'#'},
    event4: {date: '2019-12-25', img: 'https://images.unsplash.com/photo-1721297015609-1374b1378d31?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8', title: 'Christmas Day', description: `If you're visiting this page, you're likely here because you're searching for a random sentence. Sometimes a random word just isn't enough, and that is where the random sentence generator comes into play. By inputting the desired number, you can make a list of as many random sentences as you want or need. Producing random sentences can be helpful in a number of different ways.`, type: 'tools-n-tips',externalLink:'#'},
    event5: {date: '2020-01-01', img: 'https://images.unsplash.com/photo-1721714874858-18526c08b8d7?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8', title: 'New Year\'s Day 2020', description: `If you're visiting this page, you're likely here because you're searching for a random sentence. Sometimes a random word just isn't enough, and that is where the random sentence generator comes into play. By inputting the desired number, you can make a list of as many random sentences as you want or need. Producing random sentences can be helpful in a number of different ways.`, type: 'event',externalLink:'#'},
    event6: {date: '2020-02-14', img: 'https://images.unsplash.com/photo-1719937206255-cc337bccfc7d?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8', title: 'Valentine\'s Day 2020', description: 'This is a valentine\'s day 2020.', type: 'newsletter',externalLink:'#'},
    event7: {date: '2020-07-04', img: 'https://plus.unsplash.com/premium_photo-1721257104603-b6b48b7ff239?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8', title: 'Independence Day 2020', description: 'This is an independence day 2020.', type: 'archive',externalLink:'#'},
    event8: {date: '2020-12-25', img: 'https://images.unsplash.com/photo-1721297015609-1374b1378d31?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8', title: 'Christmas Day 2020', description: 'This is a christmas day 2020.', type: 'tools-n-tips',externalLink:'#'},
    event9: {date: '2021-01-01', img: 'https://images.unsplash.com/photo-1721714874858-18526c08b8d7?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8', title: 'New Year\'s Day 2021', description: `If you're visiting this page, you're likely here because you're searching for a random sentence. Sometimes a random word just isn't enough, and that is where the random sentence generator comes into play. By inputting the desired number, you can make a list of as many random sentences as you want or need. Producing random sentences can be helpful in a number of different ways.`, type: 'event',externalLink:'#'},
    event10: {date: '2021-02-14', img: 'https://images.unsplash.com/photo-1719937206255-cc337bccfc7d?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8', title: 'Valentine\'s Day 2021', description: 'This is a valentine\'s day 2021.', type: 'newsletter',externalLink:'#'},
    event11: {date: '2021-07-04', img: 'https://plus.unsplash.com/premium_photo-1721257104603-b6b48b7ff239?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8', title: 'Independence Day 2021', description: 'This is an independence day 2021.', type: 'archive',externalLink:'#'},
    event12: {date: '2021-12-25', img: 'https://images.unsplash.com/photo-1721297015609-1374b1378d31?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8', title: 'Christmas Day 2021', description: 'This is a christmas day 2021.', type: 'tools-n-tips',externalLink:'#'},
    event13: {date: '2022-01-01', img: 'https://images.unsplash.com/photo-1721714874858-18526c08b8d7?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8', title: 'New Year\'s Day 2022', description: 'This is a new year\'s day 2022.', type: 'event',externalLink:'#'},
    event14: {date: '2022-02-14', img: 'https://images.unsplash.com/photo-1719937206255-cc337bccfc7d?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8', title: 'Valentine\'s Day 2022', description: 'This is a valentine\'s day 2022.', type: 'newsletter',externalLink:'#'},
    event15: {date: '2025-07-04', img: 'https://plus.unsplash.com/premium_photo-1721257104603-b6b48b7ff239?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8', title: 'Independence Day 2022', description: 'This is an independence day 2022.', type: 'archive',externalLink:'#'}
};
  
  
const sortedEventList = Object.values(eventList).sort((a, b) => new Date(b.date) - new Date(a.date));

const groupedEventList = sortedEventList.reduce((acc, event) => {
    if (!acc[event.type]) {
        acc[event.type] = [];
    }
    acc[event.type].push(event);
    return acc;
}, {});


function createEventCard(event) {
   let innerHTML = ``;
       innerHTML+=`<div class="card">
           <a href="${event.externalLink}"><div class="card__image"> <img src="${event.img}" alt="" ></div></a>
            <div class="card__content">
                <h3 class="card__type">${event.type}</h3>
                <h2 class="card__title">${event.title}</h2>
                <p class="card__date">${event.date}</p>
                <p class="card__body card__body--truncated">${event.description}</p>`;
                if(event.externalLink){
                    innerHTML+=` <div class="card__read-more">Read more</div>`;
                }
                innerHTML+=`
            </div>
        </div>
    `;
    return innerHTML;
}

// Function to categorize events
function categorizeEvents(events) {
    const today = new Date();
    const categories = {
        all: [],
        upcomingEvents: [],
        pastEvents: [],
        archives: [],
        toolsTips: [],
        newsletters: []
    };

    Object.values(events).forEach(event => {
        const eventDate = new Date(event.date);
        if (event.type === "archive") {
            categories.archives.push(event);
        } else if (event.type === "tools-n-tips") {
            categories.toolsTips.push(event);
        } else if (event.type === "newsletter") {
            categories.newsletters.push(event);
        } else if (eventDate >= today) {
            categories.upcomingEvents.push(event);
        } else {
            categories.pastEvents.push(event);
        }
        categories.all.push(event);
    });

    return categories;
}

// Function to insert events into the container
function insertEvents(events, containerId) {
    const container = document.getElementById(containerId);
    if (container && container.classList.contains('active')) {
        container.innerHTML = ''; // Clear existing content
        events.forEach(event => {
            container.innerHTML += createEventCard(event);
        });
    }
}

// Function to handle list item click
function handleListItemClick(eventMapping) {
    const listItems = document.querySelectorAll('.event-list__item');
    listItems.forEach(item => {
        item.addEventListener('click', () => {
            const activeItem = document.querySelector('.event-list__item.active');
            if (activeItem) {
                activeItem.classList.remove('active');
            }
            item.classList.add('active');

            const containerId = item.getAttribute('data-container');
            const activeContainer = document.querySelector('.cards-container.active');
            if (activeContainer) {
                activeContainer.classList.remove('active');
            }

            const targetContainer = document.getElementById(containerId);
            if (targetContainer) {
                targetContainer.classList.add('active');
                insertEvents(eventMapping[containerId], containerId);
            }
        });
    });
}

// Main function to initialize the event handling
function initializeEventHandling(eventList) {
    const categorizedEvents = categorizeEvents(eventList);

    const eventMapping = {
        'all-events': categorizedEvents.all,
        'upcoming-events': categorizedEvents.upcomingEvents,
        'past-events': categorizedEvents.pastEvents,
        'archives': categorizedEvents.archives,
        'tools-n-tips': categorizedEvents.toolsTips,
        'newsletter': categorizedEvents.newsletters
    };

    // Insert events into the containers initially
    for (const [containerId, events] of Object.entries(eventMapping)) {
        insertEvents(events, containerId);
    }

    // Set up event listeners for list items
    handleListItemClick(eventMapping);
}

// Call the main function with the event list
initializeEventHandling(eventList);

document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded');
    const container = document.querySelector('.cards-container'); // Assuming .container is the parent element

    container.addEventListener('click', function(event) {
        const cardType = event.target.closest('.card__type');
        if (cardType) {
            console.log(cardType);
            const dateElement = cardType.closest('.card__date');
            const date = new Date(dateElement ? dateElement : '');
            const today = new Date();
            const type = cardType.textContent.trim();
            const itemMap = {
                'event': date >= today ? 'upcoming-events' : 'past-events',
                'newsletter': 'newsletter',
                'archive': 'archives',
                'tools-n-tips': 'tools-n-tips'
            };

            const targetItem = document.querySelector('.event-list__item[data-container="' + itemMap[type] + '"]');
            if (targetItem) {
                targetItem.click();
            }
        }
    });
    toggleReadMore();
});
// const canvas = document.getElementById('blobCanvas');
// const ctx = canvas.getContext('2d');

// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;

// let mouseX = canvas.width / 2;
// let mouseY = canvas.height / 2;
// let mouseDown = false;

// const blob = {
//     x: canvas.width / 2,
//     y: canvas.height / 2,
//     radius: 100,
//     segments: 30,
//     noise: [],
//     velocity: [],
//     baseNoise: 0.5,
//     speed: 0.05,
//     damping: 0.98
// };

// // Initialize noise and velocity arrays
// for (let i = 0; i < blob.segments; i++) {
//     blob.noise.push(Math.random() * blob.baseNoise);
//     blob.velocity.push(0);
// }

// function drawBlob() {
//     ctx.clearRect(0, 0, canvas.width, canvas.height);
//     ctx.beginPath();

//     for (let i = 0; i < blob.segments; i++) {
//         const angle = (i / blob.segments) * Math.PI * 2;
//         const x = blob.x + Math.cos(angle) * (blob.radius + blob.noise[i] * 50);
//         const y = blob.y + Math.sin(angle) * (blob.radius + blob.noise[i] * 50);

//         if (i === 0) {
//             ctx.moveTo(x, y);
//         } else {
//             ctx.lineTo(x, y);
//         }
//     }

//     ctx.closePath();
//     ctx.fillStyle = 'rgba(100, 150, 250, 0.8)';
//     ctx.fill();

//     updateBlob();
// }

// function updateBlob() {
//     for (let i = 0; i < blob.segments; i++) {
//         // Calculate distance to mouse
//         const angle = (i / blob.segments) * Math.PI * 2;
//         const pointX = blob.x + Math.cos(angle) * blob.radius;
//         const pointY = blob.y + Math.sin(angle) * blob.radius;
//         const dx = mouseX - pointX;
//         const dy = mouseY - pointY;
//         const distance = Math.sqrt(dx * dx + dy * dy);

//         // Apply force if the mouse is close to the blob
//         if (mouseDown && distance < blob.radius) {
//             blob.velocity[i] += (blob.radius - distance) * 0.1;
//         }

//         // Update noise and apply damping
//         blob.velocity[i] *= blob.damping;
//         blob.noise[i] += blob.velocity[i];
//         blob.noise[i] = Math.max(-blob.baseNoise, Math.min(blob.baseNoise, blob.noise[i]));
//     }

//     blob.x += (mouseX - blob.x) * 0.05;
//     blob.y += (mouseY - blob.y) * 0.05;
// }

// canvas.addEventListener('mousemove', (event) => {
//     mouseX = event.clientX;
//     mouseY = event.clientY;
// });

// canvas.addEventListener('mousedown', () => {
//     mouseDown = true;
// });

// canvas.addEventListener('mouseup', () => {
//     mouseDown = false;
// });

// function animate() {
//     drawBlob();
//     requestAnimationFrame(animate);
// }

// animate();
function toggleReadMore() {
    const readMoreList = document.querySelectorAll(".card__read-more"); // Corrected selector
    console.log(readMoreList);
    readMoreList.forEach((readMore) => {
        console.log(readMore);
        readMore.addEventListener('click', () => {
            const cardBody = readMore.closest('.card').querySelector('.card__body'); // Corrected element selection
            console.log(cardBody);
            if (cardBody.classList.contains("card__body--truncated")) {
                cardBody.classList.remove("card__body--truncated");
                readMore.textContent = "Read less";
            } else {
                cardBody.classList.add("card__body--truncated");
                readMore.textContent = "Read more";
            }
            console.log(cardBody);
        });
    });
}
// document.addEventListener('DOMContentLoaded', () => {
//     const interBubble = document.querySelector('.interactive');
//     let curX = 0;
//     let curY = 0;
//     let tgX = 0;
//     let tgY = 0;

//     function move() {
//         curX += (tgX - curX) / 20;
//         curY += (tgY - curY) / 20;
//         interBubble.style.transform = `translate(${Math.round(curX)}px, ${Math.round(curY)}px)`;
//         requestAnimationFrame(() => {
//             move();
//         });
//     }

//     window.addEventListener('mousemove', (event) => {
//         tgX = event.clientX;
//         tgY = event.clientY;
//     });

//     move();
// });