let search = document.getElementById("search");
let navIcon = document.getElementById("nav-icon");
let navProfile = document.getElementById("nav-profile");
let header = document.getElementById("header");
let burger = document.getElementById("burger");
let counter = 0;
let mainUl = document.createElement("ul");
mainUl.setAttribute("type", "none");
let shop = document.createElement("li");
let shopA= document.createElement ("a");
shopA.setAttribute("href", "#");
let sale = document.createElement("li");
let saleA= document.createElement ("a");
saleA.setAttribute("href", "#");
let contact = document.createElement("li");
let contactA= document.createElement ("a");
contactA.setAttribute("href", "#");
let dropUl = document.createElement("ul");
dropUl.setAttribute("type", "none");
let hats = document.createElement("li");
let hatsA= document.createElement ("a");
hatsA.setAttribute("href", "#");
let jerseys = document.createElement("li");
let jerseysA= document.createElement ("a");
jerseysA.setAttribute("href", "#");
let balls = document.createElement("li");
let ballsA= document.createElement ("a");
ballsA.setAttribute("href", "#");
let burgerFn = () =>{
    burger.addEventListener("click", function(){
        if(counter%2==0){
            mainUl.style.display="flex";
            counter++;
        }else{
            mainUl.style.display="none";
            counter++;
        }
        header.appendChild(mainUl);

        shopA.innerText="shop";
        shop.appendChild(shopA);
        mainUl.appendChild(shop);
        dropUl.setAttribute("type", "none");
        shop.appendChild(dropUl);
       
        hatsA.innerText="Hats";
        hats.appendChild(hatsA);
        mainUl.appendChild(hats);
      
        jerseysA.innerText="Jerseys";
        jerseys.appendChild(jerseysA);
        mainUl.appendChild(jerseys);
       
        ballsA.innerText="Soccer Balls";
        balls.appendChild(ballsA);
        mainUl.appendChild(balls);
        saleA.innerText="Sale";
        sale.appendChild(saleA);
        mainUl.appendChild(sale);
      
        contactA.innerText="Contact";
        contact.appendChild(contactA);
        mainUl.appendChild(contact);
        mainUl.appendChild(search);
        mainUl.appendChild(navIcon);
        mainUl.appendChild(navProfile);
        navIcon.style.display="block";
        navIcon.style.color ="white";
        navIcon.style.paddingTop="15px";
        navProfile.style.display="flex";
        navProfile.style.alignItems="center"
        navProfile.style.color = "white";
        navProfile.style.padding ="15px 0px";
    });
}
mainUl.style.backgroundColor = "#873319";
mainUl.style.flexDirection ="column";
mainUl.style.alignItems = "center";
mainUl.style.borderBottomLeftRadius ="25px";
mainUl.style.borderBottomRightRadius = "25px";

burgerFn();
