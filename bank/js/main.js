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


// const reviewSlider = document.getElementById("review-slider");
const slideLeftButton = document.getElementById('slide-left');
const slideRightButton = document.getElementById('slide-right');
const sliders = document.querySelector('.slider');

const reviewSlider= document.getElementById("review-slider")
let scrollAmount = `${reviewSlider.scrollWidth/5}`;

const slideLeft =()=>{
    let slider = document.getElementById("review-slider");

    slider.scrollLeft = slider.scrollLeft - sliders.offsetWidth -15;
   


  }
  const slideRight = () => {
    let slider = document.getElementById("review-slider");
    slider.scrollLeft = slider.scrollLeft + sliders.offsetWidth +15;
    console.log(slider.scrollLeft)

    
  };

slideLeftButton.addEventListener("click", ()=>{
    slideLeft();
})

slideRightButton.addEventListener("click",()=>{
    slideRight();
    
})




        const creditOne = document.getElementById("credit-one");
        const creditTwo = document.getElementById("credit-two");
        const creditThree = document.getElementById("credit-three");
        const creditFour = document.getElementById("credit-four");

        const creditContent = document.querySelector(".credit-content")

       const creditH2 = creditContent.querySelector("h2");
       const creditP = creditContent.querySelector("p");
       const creditImg = creditContent.querySelector("img");

      const creditOneFn = () =>{
      
        creditOne.addEventListener("click", ()=>{
            creditH2.textContent = "Потребительский кредит на мечту";
            creditP.textContent = "Выгодные условия для получение потребительского кредита на любые цели от 9% годовых до 5 млн.";
            creditImg.setAttribute("src", "./img/credit-img.webp")
        })
       }
      const creditTwoFn = () =>{
        creditTwo.addEventListener("click", ()=>{
            creditH2.textContent = "Автокредит на ласточку";
            creditP.textContent = "Выгодные условия для получение потребительского кредита на любые цели от 9% годовых до 5 млн.";
            creditImg.setAttribute("src", "./img/credit-img2.webp")
        })
       }
      const creditThreeFn = () =>{
        creditThree.addEventListener("click", ()=>{
            creditH2.textContent = "Ипотечное кредитование на дом";
            creditP.textContent = "Выгодные условия для получение потребительского кредита на любые цели от 9% годовых до 5 млн.";
            creditImg.setAttribute("src", "./img/credit-img3.webp")
        })
       }
      const creditFourFn = () =>{
        creditFour.addEventListener("click", ()=>{
            creditH2.textContent = "Рефинансирование невыгодного кредита";
            creditP.textContent = "Выгодные условия для получение потребительского кредита на любые цели от 9% годовых до 5 млн.";
            creditImg.setAttribute("src", "./img/credit-img4.webp")
        })
       }



       creditOneFn();
       creditTwoFn();
       creditThreeFn();
       creditFourFn();