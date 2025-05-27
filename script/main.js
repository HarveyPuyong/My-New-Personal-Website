const prevArrow = document.querySelector('.arrows-container__arrow.prev');
const nextArrow =  document.querySelector('.arrows-container__arrow.next');
const maneqquinBackground = document.querySelector('.maneqquin-background');
const mainWrapper = document.querySelector('.main-wrapper');

const sections = document.querySelectorAll('section');

const changeSection = (index) => {
  sections.forEach(section => {
    section.style.display = 'none';
  });

  const displaySection = sections[index]

  if(displaySection.id === 'page-one-section'){
    displaySection.style.display = 'block';
    prevArrow.style.opacity = '0';
    nextArrow.style.opacity = '1';
    maneqquinBackground.style.zIndex = '2';
    mainWrapper.style.zIndex = 'auto';
  }else if(displaySection.id === 'page-two-section' || displaySection.id === 'page-three-section'){
    displaySection.style.display = 'flex';
    prevArrow.style.opacity = '1';
    nextArrow.style.opacity = '1';
    maneqquinBackground.style.zIndex = '-10';
    mainWrapper.style.zIndex = '5';
  }else if(displaySection.id === 'page-four-section'){
    displaySection.style.display = 'block';
    prevArrow.style.opacity = '1';
    nextArrow.style.opacity = '0';
  }
}


let index = 0;
const maxIndex = sections.length - 1;

prevArrow.addEventListener('click', () => {
  index--;
  if(index <= 0) index = 0;

  changeSection(index);
});

nextArrow.addEventListener('click', () => {
  index++;
  if(index >= maxIndex) index = maxIndex;

  changeSection(index);
});


document.querySelector('.header__contact-btn').
  addEventListener('click', () => {
    index = 3;
    changeSection(index);
});
