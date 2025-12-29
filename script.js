const slides = document.querySelectorAll(".carousel-slide");
const track = document.querySelector(".carousel-track");
const nextButton = document.querySelector(".next");
const prevButton = document.querySelector(".prev");
const dotsContainer = document.querySelector(".dots-container");

let currentIndex = 0;
let autoSlideTimer = setInterval(moveNext, 3000);

slides.forEach((_, index) => {
    const dot = document.createElement("span");
    dot.classList.add("dot");
    if (index === 0) dot.classList.add("active");
    dot.addEventListener("click", () => {
        currentIndex = index;
        updateCarousel();
        resetAutoSlide();
    });
    dotsContainer.appendChild(dot);
});

const dots = document.querySelectorAll(".dot");

function updateCarousel() {
    track.style.transform = `translateX(-${currentIndex * 100}%)`;
    dots.forEach(dot => dot.classList.remove("active"));
    dots[currentIndex].classList.add("active");
}

function moveNext() {
    currentIndex = (currentIndex + 1) % slides.length;
    updateCarousel();
}

function movePrev() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateCarousel();
}

nextButton.addEventListener("click", () => {
    moveNext();
    resetAutoSlide();
});

prevButton.addEventListener("click", () => {
    movePrev();
    resetAutoSlide();
});

function resetAutoSlide() {
    clearInterval(autoSlideTimer);
    autoSlideTimer = setInterval(moveNext, 3000);
}
