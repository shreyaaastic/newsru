var swiper = new Swiper(".news-slider", {
    slidesPerView: 1.3,
    spaceBetween: 15,
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    autoplay: {
        delay: 3000, 
        disableOnInteraction: false,
    },
    breakpoints: {
        768: {
          slidesPerView: 4,
        },
        451: {
          slidesPerView: 2.5,
        },
    },
});

function toggleMenu() {
  const menu = document.querySelector('.menu');
  const toggleIcon = document.querySelector('#menu-toggle i');

  if (window.innerWidth <= 767) {
    menu.classList.toggle('active');

    if (menu.classList.contains('active')) {
      toggleIcon.classList.remove('fa-bars');
      toggleIcon.classList.add('fa-xmark');
    } else {
      toggleIcon.classList.remove('fa-xmark');
      toggleIcon.classList.add('fa-bars');
    }
  }
}


