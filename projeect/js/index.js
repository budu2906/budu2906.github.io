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


  document.querySelector('#question-number').addEventListener('input', function (e) {
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






// Функция для отображения соответствующего контента при клике на кнопку
function showContent(areaNumber) {
    // Сначала скрываем все элементы контента
    const contentItems = document.querySelectorAll(".content-item");
    contentItems.forEach(item => item.style.display = "none");

    // Отображаем только активный элемент контента
    const activeContent = document.getElementById(`content${areaNumber}`);
    activeContent.style.display = "block";

    // Снимаем выделение со всех кнопок и выделяем только активную кнопку
    const buttons = document.querySelectorAll(".area-buttons button");
    buttons.forEach(button => button.classList.remove("active"));
    buttons[areaNumber - 1].classList.add("active");
}

// По умолчанию делаем активной первую кнопку и соответствующий контент
showContent(1);

// Добавляем обработчики событий для кнопок
const buttons = document.querySelectorAll(".area-buttons button");
buttons.forEach((button, index) => {
    button.addEventListener("click", () => {
        showContent(index +1); // Add 1 to the index to make it 1-based
    });
});


const estateItems = document.querySelectorAll('.estate-item');
let currentIndex = 0;

function showItem(index) {
    estateItems.forEach((item, i) => {
        if (i === index) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });
}

showItem(currentIndex);

estateItems.forEach((item, index) => {
    item.addEventListener('click', () => {
        currentIndex = index;
        showItem(currentIndex);
    });
});


const prevButton = document.getElementById("prevButton");
const nextButton = document.getElementById("nextButton");
const currentPage = document.getElementById("currentPage");
const sliderContent = document.querySelector(".slider-content");
const sliderItems = sliderContent.querySelectorAll(".slider-item");
let currentIndex1 = 0;

// Function to update the slider to the current index
function updateSlider() {
    sliderItems.forEach((item, index) => {
        if (index === currentIndex1) {
            item.style.display = "block";
        } else {
            item.style.display = "none";
        }
    });
    currentPage.textContent = currentIndex1 + 1;
}

// Event listener for the "prev" button
prevButton.addEventListener("click", () => {
    currentIndex1 = (currentIndex1 - 1 + sliderItems.length) % sliderItems.length;
    updateSlider();
});

// Event listener for the "next" button
nextButton.addEventListener("click", () => {
    currentIndex1 = (currentIndex1 + 1) % sliderItems.length;
    updateSlider();
});

// Initialize the slider
updateSlider();





const prevButton2 = document.getElementById('prev-slide2');
const nextButton2 = document.getElementById('next-slide2');
const sliders = document.querySelectorAll('.slider2');

let currentSlide = 0;

function showSlide(slideIndex) {
    sliders.forEach((slider, index) => {
        if (index === slideIndex || index === (slideIndex + 1)) {
            slider.classList.add('active');
        } else {
            slider.classList.remove('active');
        }
    });
}

prevButton2.addEventListener('click', () => {
    if (currentSlide > 0) {
        currentSlide -= 1;
        showSlide(currentSlide);
    }
});

nextButton2.addEventListener('click', () => {
    if (currentSlide < sliders.length - 2) {
        currentSlide += 1;
        showSlide(currentSlide);
    }
});

// Initial display
showSlide(currentSlide);




document.addEventListener('DOMContentLoaded', function() {

    const hiddenItems = document.querySelectorAll('.hidden');
    const toggleAllButton = document.getElementById('toggle-all-button');
    

    toggleAllButton.addEventListener('click', function() {
        hiddenItems.forEach(item => {
            item.classList.toggle('hidden');
        });
    });
});
