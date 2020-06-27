const buttonHelp = document.querySelector('.floating__btn');
const buttonHelpClose = document.querySelector('.floating__card__close');
const cardHelp = document.querySelector('.floating__card');

// Floating Btn Pop Up
buttonHelp.addEventListener('click', openPopup);
buttonHelpClose.addEventListener('click', closePopup);

// Opens Popup
function openPopup(e) {
  e.preventDefault();
  cardHelp.classList.toggle('floating__card--visible');
}

// Closes Popup
function closePopup(e) {
  e.preventDefault();
  if (cardHelp.classList.contains('floating__card--visible')) {
    cardHelp.classList.remove('floating__card--visible');
  }
}

// FAQ Accordion
const faqBtns = document.querySelectorAll('.faqAccordion__btn');

faqBtns.forEach(btn => {
  // Add event listener to every faq button
  btn.addEventListener('click', () => {
    // Select content
    const faqContent = btn.nextElementSibling;
    //Select icon
    const faqIcon = btn.firstElementChild;

    // Togle active class
    btn.classList.toggle('faqAccordion__btn--active');

    if (btn.classList.contains('faqAccordion__btn--active')) {
      // Change icon
      faqIcon.classList.replace('fa-plus', 'fa-minus');
      // Change height to default space
      faqContent.style.maxHeight = faqContent.scrollHeight + 'px';
    } else {
      // Change icon
      faqIcon.classList.replace('fa-minus', 'fa-plus');
      // Change height to 0
      faqContent.style.maxHeight = 0;
    }
  });
})


// Modal
const modalBackground = document.querySelector('.modal-bg');
const modal = document.querySelector('.modal');
const profileBtn = document.getElementById('profile-btn');

profileBtn.addEventListener('click', openModal);
window.addEventListener('click', closeModal);

//Opens modal
function openModal(e) {
  e.preventDefault();
  modal.classList.add('modal--active');
  modalBackground.classList.add('modal-bg--active');
}

//Closes modal
function closeModal(e) {
  if (e.target === modalBackground) {
    modal.classList.remove('modal--active');
    modalBackground.classList.remove('modal-bg--active');
  }
}



//Theme color manager
const header = document.querySelector('.header');
const navbar = document.querySelector('.navbar');

const elements = [header, navbar];

const gradientBtn1 = document.querySelector('.sidebar__bottom-gradientList__item--1');
const gradientBtn2 = document.querySelector('.sidebar__bottom-gradientList__item--2');
const gradientBtn3 = document.querySelector('.sidebar__bottom-gradientList__item--3');
const gradientBtn4 = document.querySelector('.sidebar__bottom-gradientList__item--4');
const gradientBtn5 = document.querySelector('.sidebar__bottom-gradientList__item--5');
const gradientBtn6 = document.querySelector('.sidebar__bottom-gradientList__item--6');


//Colors

//Gradient 1
const gradientOnePrimary = gradientBtn1.getAttribute('data-color-1');
const gradientOneSecondary = gradientBtn1.getAttribute('data-color-2');

//Gradient 2
const gradientTwoPrimary = gradientBtn2.getAttribute('data-color-1');
const gradientTwoSecondary = gradientBtn2.getAttribute('data-color-2');

//Gradient 3
const gradientThreePrimary = gradientBtn3.getAttribute('data-color-1');
const gradientThreeSecondary = gradientBtn3.getAttribute('data-color-2');

//Gradient 4
const gradientFourPrimary = gradientBtn4.getAttribute('data-color-1');
const gradientFourSecondary = gradientBtn4.getAttribute('data-color-2');

//Gradient 5
const gradientFivePrimary = gradientBtn5.getAttribute('data-color-1');
const gradientFiveSecondary = gradientBtn5.getAttribute('data-color-2');

//Gradient 1
const gradientSixPrimary = gradientBtn6.getAttribute('data-color-1');
const gradientSixSecondary = gradientBtn6.getAttribute('data-color-2');

gradientBtn1.addEventListener('click', changeColors1);
gradientBtn2.addEventListener('click', changeColors2);
gradientBtn3.addEventListener('click', changeColors3);
gradientBtn4.addEventListener('click', changeColors4);
gradientBtn5.addEventListener('click', changeColors5);
gradientBtn6.addEventListener('click', changeColors6);


function changeColors1() {
  elements.forEach(element => {
    element.style.background = `linear-gradient(to right, ${gradientOnePrimary}, ${gradientOneSecondary})`;
  });
}

function changeColors2() {
  elements.forEach(element => {
    element.style.background = `linear-gradient(to right, ${gradientTwoPrimary}, ${gradientTwoSecondary})`;
  });
}

function changeColors3() {
  elements.forEach(element => {
    element.style.background = `linear-gradient(to right, ${gradientThreePrimary}, ${gradientThreeSecondary})`;
  });
}

function changeColors4() {
  elements.forEach(element => {
    element.style.background = `linear-gradient(to right, ${gradientFourPrimary}, ${gradientFourSecondary})`;
  });
}

function changeColors5() {
  elements.forEach(element => {
    element.style.background = `linear-gradient(to right, ${gradientFivePrimary}, ${gradientFiveSecondary})`;
  });
}

function changeColors6() {
  elements.forEach(element => {
    element.style.background = `linear-gradient(to right, ${gradientSixPrimary}, ${gradientSixSecondary})`;
  });
}

//Dark Menu
const sidebarMenu = document.querySelector('.sidebar');
const menuColorInput = document.querySelector('.sidebar__bottom-input');

menuColorInput.addEventListener('change', makeMenuDark);

function makeMenuDark() {
  if (this.checked) {
    trans();
    document.documentElement.setAttribute('data-theme', 'dark');
  } else {
    trans();
    document.documentElement.setAttribute('data-theme', 'light');
  }
}

let trans = () => {
  // document.documentElement.classList.add('transition');
  
  // window.setTimeout(() => {
  //   document.documentElement.classList.remove('transition')
  // }, 1000);
}
