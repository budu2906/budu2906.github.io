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



// let btnOne= document.getElementById("btn-one");
// let btnTwo= document.getElementById("btn-two");
// let btnThree= document.getElementById("btn-three");

// let pOne = document.getElementById("p-one");
// let pTwo = document.getElementById("p-two");
// let pThree = document.getElementById("p-three");


// const btnOneCheck = false;
// const btnTwoCheck = false;
// const btnThreeCheck = false;




// const btnOneFn = ()=>{
//     btnOne.addEventListener("click",()=>{
       
//         btnOneCheck =!btnOneCheck;
//         openFn();
//     })
   
// }

// const btnTwoFn = ()=>{
//     btnTwo.addEventListener("click",()=>{
//         btnTwoCheck =!btnTwoCheck
//     })
// }

// const btnThreeFn = ()=>{
//     btnThree.addEventListener("click",()=>{
//         btnThreeCheck =!btnThreeCheck
//     })
// }

// const openFn = () =>{
//     btnOneCheck ? pOne.style.display="flex" : pOne.style.display="none"
//     btnOneCheck ? btnOne.setAttribute("src", "./img/close.svg") : btnOne.setAttribute("src", "./img/open.svg")
// }

// btnOneFn();


let btnOne = document.getElementById("btn-one");
let btnTwo = document.getElementById("btn-two");
let btnThree = document.getElementById("btn-three");
let btnFour = document.getElementById("btn-four");
let btnFive = document.getElementById("btn-five");



let pOne = document.getElementById("p-one");
let pTwo = document.getElementById("p-two");
let pThree = document.getElementById("p-three");
let pFour = document.getElementById("p-four");
let pFive = document.getElementById("p-five");


let imgOne = document.getElementById("img-one");
let imgTwo = document.getElementById("img-two");
let imgThree = document.getElementById("img-three");
let imgFour = document.getElementById("img-four");
let imgFive = document.getElementById("img-five");

let firstTxt= false;
let secondTxt = false
let thirdTxt = false


const firstTxtFn =()=>{
    btnOne.addEventListener("click", ()=>{
        firstTxt=!firstTxt;
        faqAppear();
    })
   
}
const secondTxtFn = () =>{
    btnTwo.addEventListener("click", ()=>{
        secondTxt=!secondTxt;
        faqAppear();
    })
}
const thirdTxtFn = () =>{
    btnThree.addEventListener("click", ()=>{
        thirdTxt=!thirdTxt;
        faqAppear();
    })
}


const faqAppear = ()=>{
    firstTxt ? pOne.style.display="flex" : pOne.style.display="none"
    firstTxt ? imgOne.setAttribute("src", "./img/close.svg") : imgOne.setAttribute("src", "./img/open.svg")
    secondTxt ? pTwo.style.display="flex" : pTwo.style.display="none"
    secondTxt ? imgTwo.setAttribute("src", "./img/close.svg") : imgTwo.setAttribute("src", "./img/open.svg")
    thirdTxt ? pThree.style.display="flex" : pThree.style.display="none"
    thirdTxt ? imgThree.setAttribute("src", "./img/close.svg") : imgThree.setAttribute("src", "./img/open.svg")


}

firstTxtFn();
secondTxtFn();
thirdTxtFn();
