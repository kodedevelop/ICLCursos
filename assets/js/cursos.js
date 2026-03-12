const track = document.querySelector('.carrossel-cursos');
const cards = document.querySelectorAll('.card-curso');
const btnNext = document.querySelector('.btn-next');
const btnPrev = document.querySelector('.btn-prev');
const wrapper = document.querySelector('.carrossel-wrapper');

let index = 0;
const visibleCards = 4;

function getStep() {
  const cardWidth = cards[0].offsetWidth;
  const gap = parseInt(window.getComputedStyle(track).gap);
  return cardWidth + gap;
}

btnNext.addEventListener('click', () => {
  const step = getStep();
  const maxIndex = cards.length - visibleCards;

  if (index < maxIndex) {
    index++;
    track.style.transform = `translateX(-${index * step}px)`;
  }
});

btnPrev.addEventListener('click', () => {
  const step = getStep();

  if (index > 0) {
    index--;
    track.style.transform = `translateX(-${index * step}px)`;
  }
});
