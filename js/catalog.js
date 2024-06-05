/* SLIDER */

const sliders = Array.from(document.querySelectorAll('.images-slider'));

sliders.forEach(slider => {
    const slides = Array.from(slider.querySelectorAll('.images-slider__item'));
    const prevButton = slider.querySelector('.prev-button');
    const nextButton = slider.querySelector('.next-button');
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
})


/* АНИМАЦИЯ КАРТОЧЕК */

const items = Array.from(document.querySelectorAll('.catalog__item'));

items.forEach(item => {
    const closeButton = item.querySelector('.item__close-button');
    const preimage = item.querySelector('.catalog__preimage');

    preimage.addEventListener('click', () => {
        item.classList.add('opened');
    }),

    closeButton.addEventListener('click', () => {
        item.classList.remove('opened');
    })
})

document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        items.forEach(item => {
            item.classList.remove('opened');
        })
    }
})


/* HEADER MENU */

const headerButton = document.querySelector('.catalog-header__button');
const header = document.querySelector('.catalog-header');

headerButton.addEventListener('click', () => {
    header.classList.toggle('opened');
})

/* UP-BUTTON */

const upButton = document.querySelector('.up-button');

window.addEventListener('scroll', () => {
    const scrollY = window.scrollY || document.documentElement.scrollTop;

    if (scrollY > 300) {
        upButton.classList.add('active')
    } else {
        upButton.classList.remove('active')
    }
})

upButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    })
})