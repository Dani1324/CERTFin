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
var quizSwiper = new Swiper(".myQuizSwiper", {
  pagination: {
    el: ".quizSwiper-pagination",
  },
  keyboard: true,
  allowTouchMove: true,
});

// Quiz functioning
var slide; 
var trueAnswers = 0; 
var falseAnswers = 0;

function quiz(q, a, answer) {
  // Slide to next question
  setTimeout(function() {
    quizSwiper.slideTo(q);
  }, 500);

  // Reset user answer
  for (let i = 1; i < 5; i++) {
    document.querySelector("#question" + q + " #answer" + i + " img").src = "resources/answer-border.svg";
    document.querySelector("#question" + q + " #answer" + i).removeAttribute("onclick");
  }

  // Set the green background on the correct answer
  document.querySelector("#question" + q + " .true img").src = "resources/answer-border-true.svg";

  if (answer == 'false') {
    // Set the red background on the wrong answer
    document.querySelector("#question" + q + " #answer" + a + " img").src = "resources/answer-border-false.svg";
    falseAnswers = falseAnswers + 1;
  } else {
    trueAnswers = trueAnswers + 1;
  }

  console.log(trueAnswers);
  console.log(falseAnswers);
};

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
