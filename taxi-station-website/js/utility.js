// Make opaicty low while scrolling and high when hovering
var navbar = document.querySelector(".topnav");
var paint = false;
window.onscroll = function () {
  navbar.style.opacity = "0.5";
  if (!window.pageYOffset) navbar.style.opacity = "1";
};

navbar.onmouseover = function () {
  navbar.style.opacity = "1";
};
navbar.onmouseout = function () {
  if (window.pageYOffset) navbar.style.opacity = "0.5";
};

document.querySelector(".scroll-btn").addEventListener("click", () => {
  console.log("cick");
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
});

// Image hover effect animation
$("#mySvg").on("mousemove", function (e) {
  console.log("check svg");
  var x = e.pageX - $("#mySvg").offset().left;
  var y = e.pageY - $("#mySvg").offset().top;
  // console.log(x);
  // console.log(y);
  $(".a").attr("cx", x).attr("cy", y);
});

const actualBtn = document.getElementById("actual-btn");

const fileChosen = document.getElementById("file-chosen");

actualBtn.addEventListener("change", function () {
  fileChosen.textContent = this.files[0].name;
});
