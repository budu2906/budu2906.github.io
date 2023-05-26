
const hoverEvent =document.getElementsByClassName("hover-event");
const hoverEnterFn = (i)=>{
    hoverEvent[i].style.transform="translateY(-79%)";
    hoverEvent[i].style.transition="8s ease-in-out";

}
const hoverLeaveFn = (i) =>{
    hoverEvent[i].style.transform="translateY(0)";
    hoverEvent[i].style.transition="5s ease-in-out";
}
for(let i=0; i<hoverEvent.length; i++){
    hoverEvent[i].addEventListener("mouseenter", () =>{
        hoverEnterFn(i)
    } );
    hoverEvent[i].addEventListener("mouseleave", ()=>{
        hoverLeaveFn(i)
    } )
}


const burger = document.getElementById("burger");
const navUl = document.getElementById("nav-ul-two");
const mainPage = document.getElementById("main-page");
const closeBtn = document.getElementById("close-btn");
const nav = document.getElementById("nav-ul");
let z=false;
const displayChecker =() =>{
    if(window.innerWidth<=992){
        burger.style.display="flex";
        nav.style.display="none";
        
    }else{
        burger.style.display="none"
        nav.style.display="flex";
    }

}

const appear = () =>{
    navUl.style.display="flex"; 
    mainPage.style.display="none"
    burger.setAttribute("style", "display:none !important")
    nav.setAttribute("style", "display:none !important")
    z=true;
}
const disappear = () =>{
    navUl.style.display="none";
    mainPage.style.display="flex";
    displayChecker()
    z=false;
}
const closeFn = () =>{
    if(z===true){
        closeBtn.addEventListener("click", ()=>{
            disappear();
            displayChecker()
        })
    }
}
const burgerFn = () =>{
    if(z===false){
        burger.addEventListener("click", ()=>{
            appear()
            closeFn();
            
        })

    }
}

burgerFn();
