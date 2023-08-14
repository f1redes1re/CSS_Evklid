const swiper = new Swiper('.swiper-container', {

  slidesPerView: 1,
  loop: true,

  // пагинация
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },

  a11y: {
    paginationBulletMessage: 'Тут название слайда {{index}}',
  }
});

document.querySelectorAll('.tabs__btn').forEach(function (tabsBtn) {

  tabsBtn.addEventListener('click', function (e) {

    const path = e.currentTarget.dataset.path;

    document.querySelectorAll('.tabs__btn').forEach(function (btn) {

      btn.classList.remove('tabs__btn--active')
    });

    e.currentTarget.classList.add('tabs__btn--active');

    document.querySelectorAll('.how__tabs-content').forEach(function (tabsBtn) {

      tabsBtn.classList.remove('how__tabs-content--active')
    });

    document.querySelector(`[data-target="${path}"]`).classList.add('how__tabs-content--active');
  });
});

new Accordion('.accordion-container');

let burger = document.querySelector('.header__burger');
let menu = document.querySelector('.header__menu');
let menuLinks = menu.querySelectorAll('.header__item-link');

burger.addEventListener('click',

  function () {

    burger.classList.toggle('header__burger--active');

    menu.classList.toggle('header__menu--active');

    document.body.classList.toggle('stop-scroll');
})

menuLinks.forEach(function (el) {

  el.addEventListener('click', function () {

    burger.classList.remove('header__burger--active');

    menu.classList.remove('header__menu--active');

    document.body.classList.remove('stop-scroll');
  })
})

document.addEventListener('DOMContentLoaded', (e) => {

  document.getElementById('open-search-form').addEventListener('click', (e) => {
    document.getElementById('search-form').classList.add('search-form-show')
  })

  document.getElementById('search-form__btn-close').addEventListener('click', (e) => {
    document.getElementById('search-form').classList.remove('search-form-show')
  })

})
