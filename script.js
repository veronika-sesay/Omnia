const clip = document.querySelector('.video');
const text = document.querySelector('.popup');

const Play = () => {
  clip.play();
  text.classList.add('showtext');
};
const Pause = () => {
  clip.pause();
  text.classList.remove('showtext');
};

clip.addEventListener('mouseover', Play);
clip.addEventListener('mouseout', Pause);
