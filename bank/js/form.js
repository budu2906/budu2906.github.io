let z = false;
const burger = document.getElementById("burger");
const closeBurger = document.getElementById("close-burger");
const navResponsive = document.getElementById("nav-responsive");
const navResponsiveLi = navResponsive.querySelectorAll("li");

const burgerFn = () => {
    burger.addEventListener("click", () => {
        z = !z;
        appearFn(); // Call appearFn after updating the value of z
    });
};

closeBurger.addEventListener("click", ()=>{
    navResponsive.style.display="none"
    z=!z;
})

navResponsiveLi.forEach((li) => {
    li.addEventListener("click", () => {
      navResponsive.style.display = "none";
      z=!z;
    });
  });

const appearFn = () => {
    if (z === true) {
        navResponsive.style.display = "flex";
    
        
    } else {
        navResponsive.style.display = "none";
       
        
    }
};

burgerFn();



document.querySelector('#tel-number').addEventListener('input', function (e) {
    let x = e.target.value.replace(/\D/g, '')
      .match(/(\d{0,1})(\d{0,3})(\d{0,3})(\d{0,2})(\d{0,2})/);

    if (!x[1]) {
      e.target.value = '';

      return;
    }

    e.target.value = `+7${(x[2] ? `(${x[2]}` : '')}`
      + (x[3] ? `) ${x[3]}` : '')
      + (x[4] ? `-${x[4]}` : '')
      + (x[5] ? `-${x[5]}` : '');
  });
