// cброс хэша(якоря) в адресной строке при перезагрузке (из-за плагина)
// history.pushState('', document.title, window.location.pathname);

// закрытие меню
const menuBtn = document.querySelector('.icon-menu'),
  menu = document.querySelector('.nav');

const toggleMenu = function () {
  menuBtn.classList.toggle('active')
  menu.classList.toggle('_active');
}

menuBtn.addEventListener('click', function (e) {
  e.stopPropagation()
  toggleMenu()
})

// Закрытие по клику вне меню
document.addEventListener('click', function (e) {
  const target = e.target;
  const its_menu = target == menu || menu.contains(target);
  const its_btnMenu = target == menuBtn;
  const menu_is_active = menu.classList.contains('_active');

  if (!its_menu && !its_btnMenu && menu_is_active) {
    toggleMenu();
  }
});


const navLeftMenu = document.querySelector('.menu__slider')

const navLeftMenuSlider = new Swiper(navLeftMenu, {
  slidesPerView: 6,

  direction: 'vertical',

  navigation: {
    nextEl: '.menu__arrow-next',
    prevEl: '.menu__arrow-prev',
  },
})

// Социальные иконки

const socialShared = document.querySelector('.social-hints__shared')
const socialLink = document.querySelector('.social-hints__links')


socialShared.addEventListener('click', (evt) => {
  evt.preventDefault()
  socialLink.classList.toggle('active')
})

// Плагин fullpage.js
new fullpage('#fullpage', {
  licenseKey: '59DB8F6F-B819439E-9C9C8AD2-C475CC00',
  scrollOverflow: true,
  autoScrolling: true,
  normalScrollElements: '.form-quiz__expense, .form-quiz__time, .form-quiz__spend, .contact-details__label',
  anchors: [
    'firstPage',
    'secondPage',
    'thirdPage',
    'fourthPage',
    'fivthPage',
    'sextantPage',
    'seventhPage',
    'eighthPage',
    'ninthPage',
    'tenthPage',
    'eleventhPage',
    'twelthPage'
  ],
  menu: '#menu',


  onLeave: function (origin, destination, direction) {
    const loadedSection = this,
      header = document.querySelector("header.header"),
      hint = document.querySelector(".hints"),
      menu = document.querySelector("#menu");

    const isAnimatedAbout = document.querySelectorAll('.about .is-animated')
    const isAnimatedOptions = document.querySelectorAll('.options .is-animated')
    const isAnimatedHowItWorks = document.querySelectorAll('.how-it-works .is-animated')
    const isAnimatedSupport = document.querySelectorAll('.support .is-animated')
    const isAnimatedInfo = document.querySelectorAll('.info .is-animated')
    const isAnimatedDefense = document.querySelectorAll('.defense .is-animated')
    const isAnimatedQuiz = document.querySelectorAll('.quiz .is-animated')
    const isAnimatedInstallation = document.querySelectorAll('.installation .is-animated')
    const isAnimatedReviews = document.querySelectorAll('.reviews .is-animated')
    const isAnimatedRates = document.querySelectorAll('.rates .is-animated')
    const isAnimatedContacts = document.querySelectorAll('.contacts .is-animated')

    let animationSpeed = 0.3

    //  Меняем шапку и скрываем навигацинное меню по секциям на первом экране
    if (origin.index == 0 && direction == 'down') {
      header.classList.add('active')
      hint.style.display = ''
      menu.style.display = ''
    } else if (origin.index == 1 && direction == 'up') {
      header.classList.remove('active')
      hint.style.display = 'none'
      menu.style.display = 'none'
    } else if (origin.index >= 2 && direction == 'up') {
      navLeftMenuSlider.slidePrev()
    }


    // Добавляем класс для анимации
    function addAnimation(selector, animation) {
      selector.forEach(item => {
        item.classList.add('animated', animation);
      })
    }
    // Добавляем задержку
    function addDelay(selector) {
      for (let i = 0; i < selector.length; i++) {
        animationSpeed += 0.2
        selector[i].style.animationDelay = animationSpeed + 's'
      }
    }
    // Анимация
    switch (origin.index) {

      case 0:
        addAnimation(isAnimatedAbout, 'fadeInUp')
        addDelay(isAnimatedAbout)

        break
      case 1:
        addAnimation(isAnimatedOptions, 'fadeInUp')
        addDelay(isAnimatedOptions)
        break
      case 2:
        addAnimation(isAnimatedHowItWorks, 'fadeInUp')
        addDelay(isAnimatedHowItWorks)
        break
      case 3:
        addAnimation(isAnimatedSupport, 'fadeInUp')
        addDelay(isAnimatedSupport)
        break
      case 4:
        addAnimation(isAnimatedInfo, 'fadeInUp')
        addDelay(isAnimatedInfo)
        navLeftMenuSlider.slideNext()
        break
      case 5:
        addAnimation(isAnimatedDefense, 'fadeInUp')
        addDelay(isAnimatedDefense)
        break
      case 6:
        addAnimation(isAnimatedQuiz, 'fadeInUp')
        addDelay(isAnimatedQuiz)
        break
      case 7:
        addAnimation(isAnimatedInstallation, 'fadeInUp')
        addDelay(isAnimatedInstallation)
        navLeftMenuSlider.slideNext()

        break
      case 8:
        addAnimation(isAnimatedReviews, 'fadeInUp')
        addDelay(isAnimatedReviews)
        navLeftMenuSlider.slideNext()
        break
      case 9:
        addAnimation(isAnimatedRates, 'fadeInUp')
        addDelay(isAnimatedRates)
        navLeftMenuSlider.slideNext()
        break
      case 10:
        addAnimation(isAnimatedContacts, 'fadeInUp')
        addDelay(isAnimatedContacts)
        navLeftMenuSlider.slideNext()
        break
    }
  },
});


// Cкрываем меню и кнопку "поделиться" с телефоном сразу
const menuNav = document.querySelector("#menu");
const hints = document.querySelector(".hints");
menuNav.style.display = 'none'
hints.style.display = 'none'

// Стрелки для перключения по секциям
// const arrowUp = document.querySelector('.menu__arrow-prev')
// const arrowDown = document.querySelector('.menu__arrow-next')

// arrowUp.addEventListener('click', () => {
//   fullpage_api.moveSectionUp();
// })
// arrowDown.addEventListener('click', () => {
//   fullpage_api.moveSectionDown();
// })

// Добавляем активный класс элементу выезжающего меню --------
const navItem = document.querySelectorAll('.nav__item')

function removeClass() {
  navItem.forEach(item => {
    item.classList.remove('_active')
  })
}

navItem.forEach(item => {
  item.addEventListener('click', (evt) => {
    removeClass()
    item.classList.add('_active')
    menu.classList.remove('_active')
  })
})

// Квиз -------------------------------
const quiz = document.querySelector('.form-quiz')
const arrowsSlider = document.querySelector('.form-quiz__nav')
const nextArrow = document.querySelector('.form-quiz__arrow_next')
const prevArrow = document.querySelector('.form-quiz__arrow_prev')
const paginationSlider = document.querySelector('.form-quiz__arrow_next')
const slides = document.querySelectorAll('.form-quiz .swiper-slide')

let counter = 0

const quizSlider = new Swiper(quiz, {
  slidesPerView: 1,
  allowTouchMove: false,
  autoHeight: true,
  navigation: {
    nextEl: '.form-quiz__arrow_next',
    prevEl: '.form-quiz__arrow_prev',
  },
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
  },

})

nextArrow.addEventListener('click', (evt) => {
  counter++
  if (slides.length - 1 === counter) {
    arrowsSlider.style.display = 'none'
  }
})
prevArrow.addEventListener('click', (evt) => {
  counter--
})


// Слайдер отзывов

const reviews = document.querySelector('.slider-reviews')

const reviewsSlider = new Swiper(reviews, {
  slidesPerView: 1,
  slidesPerGroup: 1,
  spaceBetween: 20,

  navigation: {
    nextEl: '.slider-reviews__arrow_next',
    prevEl: '.slider-reviews__arrow_prev',
  },

  breakpoints: {
    1366: {
      spaceBetween: 50,
      slidesPerView: 2,
      slidesPerGroup: 2,
    }
  }
})

// Меню слайдер


// Убираем checked с уже активного чекбокса
function clickRadio(el) {
  const siblings = document.querySelectorAll("input[type='radio'][name='" + el.name + "']");
  for (let i = 0; i < siblings.length; i++) {
    if (siblings[i] != el)
      siblings[i].oldChecked = false;
  }
  if (el.oldChecked)
    el.checked = false;
  el.oldChecked = el.checked;
}

// range инпуты в квизе

const timeSlider = document.querySelector('.form-quiz__time');
const expenseSlider = document.querySelector('.form-quiz__expense');
const spendSlider = document.querySelector('.form-quiz__spend');


noUiSlider.create(timeSlider, {
  start: 0,
  connect: 'lower',
  range: {
    'min': 0,
    'max': 10
  },
  format: wNumb({
    decimals: 0
  }),
  step: 1,
  tooltips: true,
});

noUiSlider.create(expenseSlider, {
  start: 0,
  connect: 'lower',
  step: 1,
  range: {
    'min': 0,
    'max': 10000000
  },
  format: wNumb({
    decimals: 0
  }),
  tooltips: true,
});

noUiSlider.create(spendSlider, {
  start: 0,
  connect: 'lower',
  range: {
    'min': 0,
    'max': 100
  },
  format: wNumb({
    decimals: 0
  }),
  tooltips: true,
});


const sendBtn = document.querySelector('.contact-details__btn')

sendBtn.addEventListener('click', () => {
  let timeSliderValue = timeSlider.noUiSlider.get()
  let expenseSliderValue = expenseSlider.noUiSlider.get();
  let spendSliderValue = spendSlider.noUiSlider.get();
})



// маска для номера телефона
function setCursorPosition(pos, elem) {
  elem.focus();
  if (elem.setSelectionRange) elem.setSelectionRange(pos, pos);
  else if (elem.createTextRange) {
    let range = elem.createTextRange();
    range.collapse(true);
    range.moveEnd("character", pos);
    range.moveStart("character", pos);
    range.select()
  }
}

function mask(event) {
  let matrix = this.defaultValue,
    i = 0,
    def = matrix.replace(/\D/g, ""),
    val = this.value.replace(/\D/g, "");
  def.length >= val.length && (val = def);
  matrix = matrix.replace(/[_\d]/g, function (a) {
    return val.charAt(i++) || "_"
  });
  this.value = matrix;
  i = matrix.lastIndexOf(val.substr(-1));
  i < matrix.length && matrix != this.defaultValue ? i++ : i = matrix.indexOf("_");
  setCursorPosition(i, this)
}

const telephonesContacts = document.querySelectorAll(".telephone-contacts");
for (input of telephonesContacts) {
  input.addEventListener("input", mask, false)
}

// Валидация инпута Имени

const contactInputName = document.querySelectorAll('.contact-details__input')
contactInputName.forEach(input => {
  input.addEventListener('input', function () {
    this.value = this.value.replace(/[^а-я/a-z\s]+/ig, "");
  })
})