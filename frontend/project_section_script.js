const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const carouselContainer = document.querySelector('.carousel-container');
const items = document.querySelectorAll('.carousel-item');
let currentIndex = 0;

function showNext() {
    if (currentIndex < items.length - 1) {
        currentIndex++;
    } else {
        currentIndex = 0;
    }
    updateCarousel();
}

function showPrev() {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = items.length - 1;
    }
    updateCarousel();
}

function updateCarousel() {
    const offset = -currentIndex * 100;
    carouselContainer.style.transform = `translateX(${offset}%)`;
}

// Event listeners for next and prev buttons
nextBtn.addEventListener('click', showNext);
prevBtn.addEventListener('click', showPrev);

// Optional: Auto-rotate carousel every 5 seconds
setInterval(showNext, 4000);
