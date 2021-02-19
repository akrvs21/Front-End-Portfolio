document.querySelector(".hamburger-menu").addEventListener("click", () => {
  document.querySelector(".container").classList.toggle("change");
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
