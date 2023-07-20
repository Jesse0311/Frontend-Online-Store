const sizeCheckbox = document.querySelector('.size-checkbox');


$('.size-checkbox').on('change', function(){
    $('.size-checkbox').not(this).prop('checked', false);
});

// Swiper script

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },

    breakpoints: {
      450: {
        slidesPerView: 2,
        spaceBetween: 0,
      },
      820: {
        slidesPerView: 1,
        spaceBetween: 0,
      },
      1024: {
        slidesPerView: 2,
        spaceBetween: 0,
      },
    },
  });