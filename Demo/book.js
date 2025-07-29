const sliderContainer = document.querySelector('.slider-container');
const slider = document.querySelector('.slider');
const pages = document.querySelectorAll('.page');
const pageHeight = sliderContainer.clientHeight;
let currentPage = 0;

sliderContainer.addEventListener('wheel', (event) => {
  event.preventDefault(); // Отменяем стандартное поведение

  if (event.deltaY > 0) {
    // Прокрутка вниз
    currentPage = Math.min(currentPage + 1, pages.length - 1);
  } else {
    // Прокрутка вверх
    currentPage = Math.max(currentPage - 1, 0);
  }

  slider.style.transform = `translateX(-${currentPage * 100}%)`;
});