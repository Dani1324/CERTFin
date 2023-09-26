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
};

var player;
function iframe(i, id, ev) {
  // Ottieni i riferimenti agli elementi
  var poster = document.querySelector(".poster-" + i);
  var iframe = document.querySelector(".iframe-" + i);
  var playButton = document.querySelector(".play-button-" + i);

  // Hide the thumbnail and the button
  poster.style.display = "none";
  playButton.style.display = "none";

  // Play the video
  iframe.src += "&autoplay=1";
};
