document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    const sliderTrack = document.querySelector('.slider-track');

    dots.forEach(dot => {
        dot.addEventListener('click', () => {
            const index = dot.getAttribute('data-index');
            moveToSlide(index);
        });
    });

    function moveToSlide(index) {
        const slideWidth = slides[0].clientWidth;
        sliderTrack.scrollLeft = index * slideWidth;
        updateActiveDot(index);
    }

    function updateActiveDot(index) {
        dots.forEach(dot => dot.classList.remove('active'));
        dots[index].classList.add('active');
    }
    sliderTrack.addEventListener('scroll', () => {
        const slideWidth = slides[0].clientWidth;
        const index = Math.round(sliderTrack.scrollLeft / slideWidth);
        updateActiveDot(index);
    });
});
