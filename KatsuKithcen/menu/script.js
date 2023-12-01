createSwiper('.hero-swiper');
createSwiper('.products-swiper');
createSwiper('.products-swiper2');
createSwiper('.products-swiper3');


function createSwiper(selector) {
  console.log(`${selector} .swiper-button-next`);
  new Swiper(selector, {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: 1,
    spaceBetween: 0,

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
      nextEl: `${selector} ~ .swiper-button-next`,
      prevEl: `${selector} ~ .swiper-button-prev`,
    },

    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },

    // Адаптив
    breakpoints: {
      768: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      640: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
    },
  });
}