const footer=`
   <footer id = "contact">
    <div class="footer__container">
        <div class="footer__logo">
            <img src="/Active-Minds-Website/public/assets/active minds.webp" alt="logo">
        </div>
        <div class="footer__content">
            <div class="footer__nav">
                <h4>Quick Links</h4>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Events</a></li>
                    <li><a href="#">Team</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </div>
            <div class="footer__contact">
                <h4>Contact Us</h4>
                <p>Email: info@activeminds.com</p>
                <p>Phone: (123) 456-7890</p>
            </div>
            <div class="footer__social">
                <h4>Follow Us</h4>
                <div class="social-icons">
                    <a href="#"><i class="fab fa-instagram" id ="insta"></i></a>
                    <a href="#"><i class="fab fa-discord" id ="discord"></i></a>
                    <a href="#"><i class="fab fa-telegram" id ="telegram"></i></a>
                </div>
            </div>
        </div>
        <div class="footer__bottom">
            <p>© 2024 All Rights Reserved</p>
        </div>
    </div>
</footer>`;
document.addEventListener('DOMContentLoaded', () => {
    const footerContainer = document.querySelector('.footer-container');
    footerContainer.innerHTML = footer;
});