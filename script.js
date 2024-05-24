const item = document.querySelectorAll('.catalog__item');
const closeButton = document.querySelectorAll('.item__close-button');
const preimage = document.querySelector('.catalog__preimage');

const items = Array.from(item);
const buttons = Array.from(closeButton);

items.forEach(item => {
    preimage.addEventListener('click', () => {
        item.classList.add('opened');
    },
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            item.classList.remove('opened');
        })
    })
)
})

document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        items.forEach(item => {
            item.classList.remove('opened');
        })
    }
})

/* closeButton.addEventListener('click', () => {
    item.classList.remove('opened');
}) */

/* SLIDER */

// Получаем элементы слайдера
const slider = document.querySelector('.images-slider');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');
const slides = Array.from(slider.querySelectorAll('.images-slider__item'));
const slideCount = slides.length;
let slideIndex = 0;

// Устанавливаем обработчики событий для кнопок
prevButton.addEventListener('click', showPreviousSlide);
nextButton.addEventListener('click', showNextSlide);

// Функция для показа предыдущего слайда
function showPreviousSlide() {
    slideIndex = (slideIndex - 1 + slideCount) % slideCount;
    updateSlider();
}

// Функция для показа следующего слайда
function showNextSlide() {
    slideIndex = (slideIndex + 1) % slideCount;
    updateSlider();
}

// Функция для обновления отображения слайдера
function updateSlider() {
    slides.forEach((slide, index) => {
    if (index === slideIndex) {
        slide.style.display = 'flex';
    } else {
        slide.style.display = 'none';
    }
});
}

// Инициализация слайдера
updateSlider();