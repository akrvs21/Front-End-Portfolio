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
