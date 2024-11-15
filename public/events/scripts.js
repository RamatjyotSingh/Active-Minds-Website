
  
  
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
           <a href="${event.externalLink}" target="blank"><div class="card__image"> <img src="${event.img}" alt="${event.alt? event.alt:""}" ></div></a>
            <div class="card__content">
                <h3 class="card__type">${event.type}</h3>
                <h2 class="card__title">${event.title}</h2>
                <p class="card__date">${event.date}</p>
                <div class="card__body card__body--truncated">${event.description}</div
                >`;
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
        campaigns: [],
        campaigns: [],
        newsletters: []
    };

    Object.values(events).forEach(event => {
        const eventDate = new Date(event.date);
        if (event.type === "campaigns") {
            categories.campaigns.push(event);
        } else if (event.type === "campaigns") {
            categories.campaigns.push(event);
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
                toggleReadMore();
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
        'campaigns': categorizedEvents.campaigns,
        'campaigns': categorizedEvents.campaigns,
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
    const container = document.querySelector('.cards-container'); // Assuming .container is the parent element

    container.addEventListener('click', function(event) {
        const cardType = event.target.closest('.card__type');
        if (cardType) {
            
            const dateElement = cardType.closest('.card__date');
            const date = new Date(dateElement ? dateElement : '');
            const today = new Date();
            const type = cardType.textContent.trim();
            const itemMap = {
                'event': date >= today ? 'upcoming-events' : 'past-events',
                'newsletter': 'newsletter',
                'campaigns': 'campaigns',
                'campaigns': 'campaigns'
            };

            const targetItem = document.querySelector('.event-list__item[data-container="' + itemMap[type] + '"]');
            if (targetItem) {
                targetItem.click();
            }
        }
    });
    toggleReadMore();
});


// animate();
function toggleReadMore() {
    const readMoreList = document.querySelectorAll(".card__read-more"); // Corrected selector
    
    readMoreList.forEach((readMore) => {
        
        readMore.addEventListener('click', () => {
            const cardBody = readMore.closest('.card').querySelector('.card__body'); // Corrected element selection
            
            if (cardBody.classList.contains("card__body--truncated")) {
                cardBody.classList.remove("card__body--truncated");
                readMore.textContent = "Read less";
            } else {
                cardBody.classList.add("card__body--truncated");
                readMore.textContent = "Read more";
            }
            
        });
    });
}



function updateBackgroundColor() {
    const scrollPosition = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollFraction = scrollPosition / docHeight;
 
    // Interpolate the background color between #c7e4f3 (blue) and #98ff98 (mint green)
    const startColor = { r: 199, g: 228, b: 243 }; // Light Royal Blue #7BB3F1
    const endColor = { r: 127, g: 189, b: 150 };

    const r = Math.round(startColor.r + (endColor.r - startColor.r) * scrollFraction);
    const g = Math.round(startColor.g + (endColor.g - startColor.g) * scrollFraction);
    const b = Math.round(startColor.b + (endColor.b - startColor.b) * scrollFraction);
    const layout = document.querySelector('.layout');
    
    layout.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
}
updateBackgroundColor()
window.addEventListener('scroll', updateBackgroundColor);

document.addEventListener('DOMContentLoaded', function() {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          if (entry.target.classList.contains('typewriter')) {
            entry.target.classList.add('animate-typewriter');
          } else if (entry.target.classList.contains('fade-in-on-view')) {
            entry.target.classList.add('animate-fade-in');
          }
          observer.unobserve(entry.target); // Stop observing once the animation is triggered
        }
      });
    });

    const targets = document.querySelectorAll('.typewriter, .fade-in-on-view');
    targets.forEach(target => observer.observe(target));
  });