const track = document.querySelector('.carrossel-cursos');
const cards = document.querySelectorAll('.card-curso');
const btnNext = document.querySelector('.btn-next');
const btnPrev = document.querySelector('.btn-prev');
const wrapper = document.querySelector('.carrossel-wrapper');

let index = 0;

function getStep() {
  const cardWidth = cards[0].offsetWidth;
  const gap = parseInt(window.getComputedStyle(track).gap) || 0;
  return cardWidth + gap;
}

function getMaxTranslate() {
  const trackWidth = track.scrollWidth;
  const wrapperWidth = wrapper.offsetWidth;
  return Math.max(0, trackWidth - wrapperWidth);
}

function updateCarousel() {
  const step = getStep();
  const desiredTranslate = index * step;
  const maxTranslate = getMaxTranslate();

  const finalTranslate = Math.min(desiredTranslate, maxTranslate);

  track.style.transform = `translateX(-${finalTranslate}px)`;
}

btnNext.addEventListener('click', () => {
  const step = getStep();
  const maxTranslate = getMaxTranslate();

  if ((index + 1) * step <= maxTranslate + step) {
    index++;
    updateCarousel();
  }
});

btnPrev.addEventListener('click', () => {
  if (index > 0) {
    index--;
    updateCarousel();
  }
});

window.addEventListener('resize', () => {
  const step = getStep();
  const maxTranslate = getMaxTranslate();
  const currentTranslate = Math.min(index * step, maxTranslate);

  index = Math.floor(currentTranslate / step);
  updateCarousel();
});

updateCarousel();