const newsBtn = document.getElementById('news-button')
const news = document.getElementById('responsive-news')
let toggleNews = false

const newsFn = () =>{
    newsBtn.addEventListener('click', () =>{
        toggleNews=!toggleNews
        if(toggleNews){
            news.style.display= 'flex'
            newsBtn.textContent='Скрыть'
        }
        else{
            news.style.display ='none'
            newsBtn.textContent='ещё'
        }
    })

   
}
newsFn()