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

new fullpage('#fullpage', {
  licenseKey: '59DB8F6F-B819439E-9C9C8AD2-C475CC00',
  autoScrolling: true,
  anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'fivePage', 'sixPage', 'sevenPage'],
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

    let counter = 0.3

//  Меняем шапку и скрываем навигацинное меню по секциям на первом экране
    if (origin.index == 0 && direction == 'down') {
      header.classList.add('active')
      hint.style.display = ''
      menu.style.display = ''
    } else if (origin.index == 1 && direction == 'up') {
      header.classList.remove('active')
      hint.style.display = 'none'
      menu.style.display = 'none'
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
        counter += 0.2
        selector[i].style.animationDelay = counter + 's'
      }
    }
// Анимация
    switch (origin.index) {

      case 0:
        addAnimation(isAnimatedAbout, 'fadeInUp')
        addDelay(isAnimatedAbout)
      break
      case 1:
        addAnimation(isAnimatedOptions, 'fadeInDown')
        addDelay(isAnimatedOptions)
      break
      case 2:
        addAnimation(isAnimatedHowItWorks, 'fadeInUp')
        addDelay(isAnimatedHowItWorks)
      break
      case 3:
        addAnimation(isAnimatedSupport, 'fadeInDown')
        addDelay(isAnimatedSupport)
      break
      case 4:
        addAnimation(isAnimatedInfo, 'fadeInUp')
        addDelay(isAnimatedInfo)
      break
      case 5:
        addAnimation(isAnimatedDefense, 'fadeInDown')
        addDelay(isAnimatedDefense)
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
const arrowUp = document.querySelector('.menu__arrow-prev')
const arrowDown = document.querySelector('.menu__arrow-next')

arrowUp.addEventListener('click', () => {
  fullpage_api.moveSectionUp();
})
arrowDown.addEventListener('click', () => {
  fullpage_api.moveSectionDown();
})

// Добавляем активный класс элементу выезжающего меню
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
  })
})