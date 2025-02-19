document.addEventListener("DOMContentLoaded", function() {
    const slides = document.querySelectorAll(".slide");
    const prevBtn = document.querySelector(".prev");
    const nextBtn = document.querySelector(".next");
    const toggleStoryBtn = document.querySelector(".toggle-story");
    const hiddenText = document.querySelector(".hidden-text");
    let currentSlide = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.remove("active");
            if (i === index) {
                slide.classList.add("active");
            }
        });
    }

    prevBtn.addEventListener("click", function() {
        currentSlide = (currentSlide > 0) ? currentSlide - 1 : slides.length - 1;
        showSlide(currentSlide);
    });

    nextBtn.addEventListener("click", function() {
        currentSlide = (currentSlide < slides.length - 1) ? currentSlide + 1 : 0;
        showSlide(currentSlide);
    });

    toggleStoryBtn.addEventListener("click", function() {
        if (hiddenText.style.display === "none" || hiddenText.style.display === "") {
            hiddenText.style.display = "block";
            toggleStoryBtn.textContent = "Свернуть всю историю";
        } else {
            hiddenText.style.display = "none";
            toggleStoryBtn.textContent = "Развернуть всю историю";
        }
    });

    showSlide(currentSlide);
});
