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
