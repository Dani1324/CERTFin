// Smooth scrolling to all .smooth links
document.querySelectorAll("a.smooth").forEach(function (element) {
  element.addEventListener("click", function (event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      document.documentElement.scrollTo({
        top: document.querySelector(hash).offsetTop,
        behavior: "smooth",
      });
      window.location.hash = hash;
    }
  });
});

// Swiper settings
const width = window.innerWidth > 0 ? window.innerWidth : screen.width;
if (width > 1025) {
  var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
    },
    pagination: {
      el: ".swiper-pagination",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    keyboard: true,
    simulateTouch: false,
    allowTouchMove: false,
  });
} else {
  var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
    },
    pagination: {
      el: ".swiper-pagination",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    keyboard: false,
    simulateTouch: false,
    allowTouchMove: false,
  });
}