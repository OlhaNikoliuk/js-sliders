const refs = {
  downBtn: document.querySelector('.down-button'),
  upBtn: document.querySelector('.up-button'),
  sidebar: document.querySelector('.sidebar'),
  mainSlide: document.querySelector('.main-slide'),
  container: document.querySelector('.container'),
};

const slidesCount = refs.mainSlide.querySelectorAll('div').length;
refs.sidebar.style.top = `-${(slidesCount - 1) * 100}vh`;

let activeSlideIdx = 0;

refs.upBtn.addEventListener('click', () => {
  changeSlide('up');
});
refs.downBtn.addEventListener('click', () => {
  changeSlide('down');
});

function changeSlide(direction) {
  if (direction === 'up') {
    activeSlideIdx += 1;

    if (activeSlideIdx === slidesCount) {
      activeSlideIdx = 0;
    }
  } else if (direction === 'down') {
    activeSlideIdx -= 1;
    if (activeSlideIdx < 0) {
      activeSlideIdx = slidesCount - 1;
    }
  }

  const height = refs.container.clientHeight;
  refs.mainSlide.style.transform = `translateY(-${activeSlideIdx * height}px)`;
  refs.sidebar.style.transform = `translateY(${activeSlideIdx * height}px)`;
}
