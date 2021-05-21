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

$("#carSvg").on("mousemove", function (e) {
  console.log("check carSvg");
  document.querySelector(".swipe-hint").style.display = "none";
  var x = e.pageX - $("#carSvg").offset().left;
  var y = e.pageY - $("#carSvg").offset().top;
  $(".car-rect").attr("width", 200).attr("height", 1000);
  $(".car-rect")
    .attr("x", x - 100)
    .attr("y", 0);
});

$("#carSvg").on("mouseleave", function (e) {
  document.querySelector(".swipe-hint").style.display = "block";
  $(".car-rect").attr("width", 0).attr("height", 0);
});

window.addEventListener("scroll", function () {
  const revealBlock1 = document.querySelector(".block-reveal-cont-1");
  const revealBlock2 = document.querySelector(".block-reveal-cont-2");
  const revealCar = document.querySelector(".car-anim-container");

  // console.log(
  //   "revealBlock1.getBoundingClientRect().top",
  //   revealBlock1.getBoundingClientRect()
  // );
  // console.log("window.innerHeight", window.innerHeight);
  if (revealBlock1.getBoundingClientRect().top <= window.innerHeight) {
    // console.log("First revealed");
    document.querySelector(".block-effect-1").style.display = "block";
  }
  if (revealCar.getBoundingClientRect().top + 100 < window.innerHeight) {
    console.log("car revealed");
    document.querySelector(".car-anim-container").style.animation =
      "carAnim 1s ease-in";
    document.querySelector(".swipe-hint").style.animation =
      "carAnim 1s ease-in";
  }
  if (revealBlock2.getBoundingClientRect().top <= window.innerHeight) {
    console.log("Second revealed");
    document.querySelector(".block-effect-2").style.display = "block";
  }
});

// function isScrolledIntoView(elem) {
//   var docViewTop = $(window).scrollTop();
//   var docViewBottom = docViewTop + $(window).height();
//   var elemTop = $(elem).offset().top;
//   var elemBottom = elemTop + $(elem).height();
//   // console.log("elemTop", elemTop);
//   // console.log("elemBottom", elemBottom);
//   return (
//     elemBottom >= docViewTop &&
//     elemTop <= docViewBottom &&
//     elemBottom <= docViewBottom &&
//     elemTop >= docViewTop
//   );
// }

// $(window).scroll(function () {
//   if (isScrolledIntoView($(".progress-item"))) {
//     document.querySelector(".block-effect-1").style.display = "block";
//     document.querySelector(".block-effect-2").style.display = "block";
//     document.querySelector(".car-anim-container").style.animation =
//       "carAnim 1s ease-in";
//   }
// });
