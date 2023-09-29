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

// Video swiper slider settings
const width = window.innerWidth > 0 ? window.innerWidth : screen.width;
var swiper = new Swiper(".mySwiper", {
  slidesPerView: "auto",
  centeredSlides: true,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  keyboard: true,
  simulateTouch: false,
  allowTouchMove: false,
});

// Quiz swiper slider settings
const quizMoveSlider = document.querySelector('.quizSwiper').swiper;
var quizSwiper = new Swiper(".myQuizSwiper", {
  pagination: {
    el: ".quizSwiper-pagination",
    dynamicBullets: true
  },
  keyboard: true,
  allowTouchMove: true,
});


// Header style settings on mobile devices
var header = document.querySelector(".header");
header.style.backgroundColor = "transparent";
header.style.backdropFilter = "none";
header.style.webkitBackdropFilter = "none";

window.addEventListener("scroll", function() {
  if (width < 1025 && window.scrollY > 30) {
    header.style.backgroundColor = "rgba(17, 34, 86, 0.3)";
    header.style.backdropFilter = "blur(0.5rem)";
    header.style.webkitBackdropFilter = "blur(0.5rem)";
  } else {
    header.style.backgroundColor = "transparent";
    header.style.backdropFilter = "none";
    header.style.webkitBackdropFilter = "none";
  }
});

var player;
function iframe(i) {
  var poster = document.querySelector(".poster-" + i);
  var iframe = document.querySelector(".iframe-" + i);
  var playButton = document.querySelector(".play-button-" + i);

  // Hide the thumbnail and the button
  poster.style.display = "none";
  playButton.style.display = "none";
  iframe.style.visibility = "visible";

  // Play the video
  iframe.src += "&autoplay=1";
};
