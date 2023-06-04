const burgerItem = document.querySelector('.header-burger');
const nav = document.querySelector('.nav');
const menuClose = document.querySelector('.window-close');
const menuLink = document.querySelectorAll('.nav-link');

burgerItem.addEventListener('click', (e) => {
    nav.classList.add('nav-active');
    e.stopPropagation();
});

menuClose.addEventListener('click', () => {
    nav.classList.remove('nav-active');
});

for(let i = 0; i < menuLink.length; i++) {
    menuLink[i].addEventListener ('click', () => {
        nav.classList.remove('nav-active');
    });
}
document.addEventListener('click', e => {
    let target = e.target;
    let its_nav = target == nav || nav.contains(target);
    let its_burger = target == burgerItem;
    let menu_is_active = nav.classList.contains('nav-active');
    
    if (!its_nav && !its_burger && menu_is_active) {
        nav.classList.remove('nav-active');
    }    
});