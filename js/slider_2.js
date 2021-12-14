const ref = {
  body: document.body,
  slides: document.querySelectorAll('.slide'),
  leftBtn: document.getElementById('left'),
  rightBtn: document.getElementById('right'),
};

let activeSlide = 0;

ref.rightBtn.addEventListener('click', () => {
  activeSlide += 1;
  if (activeSlide > ref.slides.length - 1) {
    activeSlide = 0;
  }
  setActiveSlide();
  setBodyBg();
});

ref.leftBtn.addEventListener('click', () => {
  activeSlide -= 1;
  if (activeSlide < 0) {
    activeSlide = ref.slides.length - 1;
  }
  setActiveSlide();
  setBodyBg();
});

function setActiveSlide() {
  ref.slides.forEach((slide) => {
    slide.classList.remove('active');
  });
  ref.slides[activeSlide].classList.add('active');
}
setBodyBg();
function setBodyBg() {
  ref.body.style.backgroundImage =
    ref.slides[activeSlide].style.backgroundImage;
}
