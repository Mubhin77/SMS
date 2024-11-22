const dots = document.querySelectorAll('.dot');
const items = document.querySelectorAll('.carousel-item');
let currentIndex = 0;

function showSlide(index) {
  items.forEach((item, i) => {
    item.classList.remove('active');
    dots[i].classList.remove('active');
    if (i === index) {
      item.classList.add('active');
      dots[i].classList.add('active');
    }
  });
}

setInterval(() => {
  currentIndex = (currentIndex + 1) % items.length;
  showSlide(currentIndex);
}, 3000);

dots.forEach((dot, i) => {
  dot.addEventListener('click', () => {
    currentIndex = i;
    showSlide(currentIndex);
  });
});
