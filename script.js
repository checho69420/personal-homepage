let currentSlideIndex = 0; // Track the current slide
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');

// Function to show a specific slide
function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.display = i === index ? 'block' : 'none';
    });
    dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
    });
}

// Function to switch to the next slide automatically
function nextSlide() {
    currentSlideIndex = (currentSlideIndex + 1) % slides.length;
    showSlide(currentSlideIndex);
}

// Add event listeners to dots for manual navigation
dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
        currentSlideIndex = i;
        showSlide(currentSlideIndex);
    });
});

// Start automatic slideshow
showSlide(currentSlideIndex); // Initialize
setInterval(nextSlide, 5000); // Change every 5 seconds
