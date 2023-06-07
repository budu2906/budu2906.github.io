let z = false;
const burger = document.getElementById("burger");
const navResponsive = document.getElementById("nav-responsive");

const burgerFn = () => {
    burger.addEventListener("click", () => {
        z = !z;
        appearFn(); // Call appearFn after updating the value of z
    });
};


navResponsive.addEventListener("click", () => {
    navResponsive.style.display = "none";
});


const appearFn = () => {
    if (z === true) {
        navResponsive.style.display = "flex";
    } else {
        navResponsive.style.display = "none";
    }
};

burgerFn();

const slideLeftButton = document.getElementById('slide-left');
        const slideRightButton = document.getElementById('slide-right');
        const sliders = document.querySelectorAll('.slider');
        let currentIndex = 0;

        slideLeftButton.addEventListener('click', () => {
            if (currentIndex > 0) {
                currentIndex--;
                updateSliderPosition();
            }
        });

        slideRightButton.addEventListener('click', () => {
            if (currentIndex < sliders.length - 1) {
                currentIndex++;
                updateSliderPosition();
            }
        });

        function updateSliderPosition() {
            const sliderWidth = sliders[currentIndex].offsetWidth;
            const scrollOffset = sliderWidth * currentIndex;
            document.querySelector('.review-slider').scrollTo({
                left: scrollOffset,
                behavior: 'smooth'
            });
        }