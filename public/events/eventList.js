const eventList = {
    event1: {
        date: '2024-11-18',
        img: './events/assets/umsu-wellness.jpg',
        title: 'Grab a Hug & a Drink at Coca-Cola’s Hug Machine!',
        description: ` 
    <p>
        Join us for a friendly, uplifting event focused on mental health and well-being! 
        Stop by the UMSU University Centre, 1st floor, between 10 am and 2 pm, and share 
        a hug with the Coca-Cola Hug Machine. It's the perfect chance to connect, enjoy 
        a complimentary drink, and have an open chat about mental health.
    </p>
    
    <p>
        Have questions about your Health & Dental plan coverage for mental health services? 
        We're here to help! Stop by, and let's talk.
    </p>
    
    <p>
        We'll also have valuable mental health resources available from:
    </p>
    
    <ul style="list-style: disc;">
        <li>@mystudentwellbeing</li>
        <li>UM Student Support</li>
        <li>@uofm_activeminds</li>
        <li>@umsvrc</li>
    </ul>

    <p>
        Let's come together to support each other. We hope to see you there!
    </p>`
    ,
        type: 'event',
        externalLink: 'template1.html?event=event1'
    },
    event2: {
        date: '2019-02-14',
        img: './events/newsletters/img1.jpg',
        title: 'Reflection Activity',
        description: `Have you ever thought about how much time you have and prioritize what and where you want to spend that time? 
                      Here’s an activity put forward by the Academic Learning Centre to help assess how time is spent during the week. 
                      Try the "168 Hour Week Activity" to plan and manage your time effectively.`,
        type: 'newsletter',
        externalLink: './events/newsletters/168-Hour-Week.pdf'
    },
    event3: {
        date: '2024-11-13',
        img: './events/assets/giveaway.jpg',
        title: 'Reading Week Get-Away Giveaway! 🌟',
        description: `  
                        <p>Feeling the mid-semester pressure? It’s time to treat yourself to a break with our <strong>Reading Week Get-Away Giveaway!</strong> We're giving you a chance to relax and recharge with these amazing prizes:</p>
                        <ul>
                            <li>🎟️ <strong>1 x $50 Thermëa Gift Card</strong></li>
                            <li>🎟️ <strong>2 x $25 Activate Gift Cards</strong></li>
                        </ul>
                        <h3>How to Enter:</h3>
                        <ol>
                            <li>Like this post</li>
                            <li>Tag a friend you’d love to bring along! (Each tag counts as an entry, so feel free to tag multiple friends!)</li>
                            <li>Follow <a href="https://www.instagram.com/uofm_activeminds/" target="_blank">@uofm_activeminds</a></li>
                            <li>Share this post on your story for a bonus entry! (If your account is private, send us a screenshot after 10 hours)</li>
                        </ol>
                        <p><strong>Deadline:</strong> November 13 at 5:00 PM</p>
                        <p>Winners will be drawn randomly and contacted via this account only.</p>
                        <p>Make your Reading Week extra special! Good luck, and don’t forget to tag and share! 🎉</p>`
                        ,
        type: 'giveaways',
        externalLink: 'https://www.instagram.com/p/DCPTYvMPeYl/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=='
    },
   
 
    event6: {
        date: '2020-02-14',
        img: './events/newsletters/img3.webp',
        title: 'Newsletter: Welcome 2023!',
        description: 'Happy December! A time to reflect on the year gone by and look forward to new experiences.',
        type: 'newsletter',
        externalLink: './events/newsletters/Welcome 2023.pdf'
    },


    event10: {
        date: '2021-02-14',
        img: './events/newsletters/img2.webp',
        title: 'Carpe Diem Seize the Day!',
        description: 'Let’s embrace the challenges of in-person learning and create unforgettable memories!',
        type: 'newsletter',
        externalLink: './events/newsletters/NOVEMBER_NEWSLETTER.pdf'
    },
    // event11: {
    //     date: '2021-07-04',
    //     img: 'https://plus.unsplash.com/premium_photo-1721257104603-b6b48b7ff239?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8',
    //     title: 'Independence Day 2021',
    //     description: 'Celebrating freedom, liberty, and the spirit of independence!',
    //     type: 'event',
    //     externalLink: 'template2.html?event=event11'
    // },
    // event12: {
    //     date: '2021-12-25',
    //     img: 'https://images.unsplash.com/photo-1721297015609-1374b1378d31?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8',
    //     title: 'Christmas Day 2021',
    //     description: 'May your Christmas be filled with joy, laughter, and warm memories.',
    //     type: 'event',
    //     externalLink: 'template2.html?event=event12'
    // },
    // event13: {
    //     date: '2022-01-01',
    //     img: 'https://images.unsplash.com/photo-1721714874858-18526c08b8d7?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8',
    //     title: 'New Year\'s Day 2022',
    //     description: 'Start the new year with positivity, hope, and new goals!',
    //     type: 'event',
    //     externalLink: 'template1.html?event=event13'
    // },
    event14: {
        date: '2022-10-02',
        img: './events/newsletters/img4.jpg',
        title: 'Mental Health Research Represented by the Faces of Psychology',
        description: 'Sometimes, stepping away is perfectly fine! Take a break from social media if you feel overwhelmed.',
        type: 'newsletter',
        externalLink: './events/newsletters/ActiveMinds_MentalHealthNewsletter_September2022_MathewsN.pdf'
    },
    event15: {
        date: '2024-10-21',
        img: './events/assets/brain-quiz.jpg',
        alt: 'Image by Storyset on Freepik',
        title: 'Mental Health Trivia & Dinner Night',
        description: `Join us for an evening of fun with food, engaging conversations, and exciting trivia! Test your knowledge and win fantastic prizes!`,
        type: 'event',
        externalLink: 'https://www.instagram.com/p/DBIQrH9gjM0/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=='
    },
    event16: {
        date: '2025-01-30',
        img: './events/assets/inside-popdcast-2.jpg', // Update with the correct image path
        alt: 'Image representing Active Minds radio show',
        title: 'Inside the Active Mindset: Mental Health Radio Show',
        description: `Join Active Minds at the University of Manitoba for a brand-new radio show dedicated to mental and holistic health! Tune in to Radio Channel 101.5 UMFM on January 30th from 10:00 AM to 10:30 AM. This week’s special guests include Gurpahul and Pauline, the Club President and VP. Each week, we’ll dive into meaningful conversations, break down stigma, and welcome inspiring guests to discuss well-being. Don’t miss out!`,
        type: 'event',
        externalLink: 'https://www.instagram.com/p/DFbum30uV2h/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==' // Update with the correct link if available
    },
   
    event17: {
        date: '2025-01-24',
        img: './events/assets/men-health-podacst.jpg',
        alt: 'Redefining Men’s Mental Health',
        title: 'Strengthening Vulnerability – Redefining Men’s Mental Health',
        description: `Join us for an insightful session on Men’s Mental Health with Vaibhav Varma, President of the Men’s Wellness Circle at UM. Tune in to Radio Channel 101.5 UMEM on February 6th at 10:00 AM for a special conversation hosted by Neha Saru Macabr. Embrace vulnerability as a strength and help break the stigma surrounding men’s mental health. Follow us on social media @udm_activeminds and @menswellnessum for updates.`,
        type: 'event',
        externalLink: 'https://www.instagram.com/p/DFtwLVlM-sa/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=='
    },
    event18: {
        date: '2025-01-24',
        img: './events/assets/polards.jpg', // Update with the correct image path
        alt: 'Polaroids for Positivity event image',
        title: 'Polaroids for Positivity: Bell Let’s Talk Day',
        description: `Join us on January 24th from 11:00 AM to 2:00 PM for a special event in support of Bell Let’s Talk Day! Enjoy different freebies and FREE Polaroid photos while supplies last. Location: First Floor, Fletcher Argue, opposite the Faculty of Arts Advising. Let’s spread positivity and support mental health together!`,
        type: 'event',
        externalLink: 'https://www.instagram.com/p/DFMbBH2M-BO/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==' // Update with the correct link if available
    },
    event19: {
        date: '2022-10-02',
        img: './events/newsletters/feb-newsletter-img.jpg',
        title: 'Mental Health Research Represented by the Faces of Psychology',
        description: 'Sometimes, stepping away is perfectly fine! Take a break from social media if you feel overwhelmed. This newsletter dives into the importance of mental health research, featuring insights from psychology experts and practical tips for maintaining mental well-being. Learn how to recognize signs of stress and discover strategies to manage it effectively.',
        type: 'newsletter',
        externalLink: './events/newsletters/feb-newsletter.pdf'
        }
};
