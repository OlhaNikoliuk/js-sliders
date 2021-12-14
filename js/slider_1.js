const ref = {
  slides: document.querySelectorAll('.slide'),
};

ref.slides.forEach((slide) => {
  slide.addEventListener('click', () => {
    removeActiveClass();

    slide.classList.add('active');
  });
});

function removeActiveClass() {
  ref.slides.forEach((slide) => {
    slide.classList.remove('active');
  });
}
