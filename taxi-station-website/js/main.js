$(document).ready(function () {
  $(".carousel").slick({
    slidesToShow: 1,
    adaptiveHeight: true,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    infinite: true,
    pauseOnHover: false,
    mobileFirst: true,
    pauseOnFocus: false,
    speed: 800,
  });
});
$(".js-tilt").tilt({
  scale: 1.2,
});

$("svg").on("mousemove", function (e) {
  var x = e.pageX - $("#mySvg").offset().left;
  var y = e.pageY - $("#mySvg").offset().top;
  // console.log(x);
  // console.log(y);
  $(".a").attr("cx", x).attr("cy", y);
});

document.querySelector(".scroll-btn").addEventListener("click", () => {
  console.log("cick");
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
});

// // $(document).ready(function () {
// //   $("button").click(function () {
// //     if ($("button").text() == "☰") $("button").text("x");
// //     else $("button").text("☰");

// //     $("li").toggle("slow");
// //   });
// // });

// const track = document.querySelector(".carousel__track");
// const slides = Array.from(track.children);

// const nextButton = document.querySelector(".carousel__button--right");
// const prevButton = document.querySelector(".carousel__button--left");
// // const dotsNav = document.querySelector(".carousel__nav");
// // const dots = Array.from(dotsNav.children);

// const slideWidth = slides[0].getBoundingClientRect().width;

// // arrange the slides next to one another
// const setSlidePosition = (slide, index) => {
//   slide.style.left = slideWidth * index + "px";
// };
// slides.forEach(setSlidePosition);

// const moveToSlide = (track, currentSlide, targetSlide) => {
//   if (!targetSlide) {
//     track.style.transform = "translateX(0)";
//     currentSlide.classList.remove("current-slide");
//     targetSlide.classList.add("current-slide");
//     return;
//   }
//   // move to the next slide
//   track.style.transform = "translateX(-" + targetSlide.style.left;
//   +")";
//   currentSlide.classList.remove("current-slide");
//   targetSlide.classList.add("current-slide");
// };

// // move slide to the right
// nextButton.addEventListener("click", (e) => {
//   const currentSlide = track.querySelector(".current-slide");
//   const nextSlide = currentSlide.nextElementSibling;

//   moveToSlide(track, currentSlide, nextSlide);
// });

// // move slide to the left
// prevButton.addEventListener("click", (e) => {
//   const currentSlide = track.querySelector(".current-slide");
//   const prevSlide = currentSlide.previousElementSibling;

//   moveToSlide(track, currentSlide, prevSlide);
// });

// // when click nav dots
// // dotsNav.addEventListener("click", (e) => {
// //   const targetDot = e.target.closest("button");
// //   if (!targetDot) return;

// //   const currentSlide = track.querySelector(".current-slide");
// //   const currentDot = dotsNav.querySelector(".current-slide");
// //   const targetIndex = dots.findIndex((dot) => dot === targetDot);
// //   const targetSlide = slides[targetIndex];

// //   moveToSlide(track, currentSlide, targetSlide);

// //   currentDot.classList.remove("current-slide");
// //   targetDot.classList.add("current-slide");
// // });

// jQuery(document).ready(function () {
//   $(".hero-text").mousemove(function (e) {
//     var rXP = e.pageX - this.offsetLeft - $(this).width() / 2;
//     var rYP = e.pageY - this.offsetTop - $(this).height() / 2;
//     $(".hero-text").css(
//       "text-shadow",
//       +rYP / 10 +
//         "px " +
//         rXP / 80 +
//         "px rgba(227,6,19,.8), " +
//         rYP / 8 +
//         "px " +
//         rXP / 60 +
//         "px rgba(255,237,0,1), " +
//         rXP / 70 +
//         "px " +
//         rYP / 12 +
//         "px rgba(0,159,227,.7)"
//     );
//   });
// });
