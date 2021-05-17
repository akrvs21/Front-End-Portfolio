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
  $(".menu").click(function () {
    $(".topnav .navbar").toggleClass("active");
    $(".logo").toggleClass("hide");
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

function isScrolledIntoView(elem) {
  var docViewTop = $(window).scrollTop();
  var docViewBottom = docViewTop + $(window).height();
  var elemTop = $(elem).offset().top;
  var elemBottom = elemTop + $(elem).height();
  // console.log("elemTop", elemTop);
  // console.log("elemBottom", elemBottom);
  return (
    elemBottom >= docViewTop &&
    elemTop <= docViewBottom &&
    elemBottom <= docViewBottom &&
    elemTop >= docViewTop
  );
}

$(window).scroll(function () {
  if (isScrolledIntoView($(".progress-item"))) {
    document.querySelector(".block-effect-1").style.display = "block";
    document.querySelector(".block-effect-2").style.display = "block";
    document.querySelector(".car-anim-container").style.animation =
      "carAnim 1s ease-in";
  }
});
