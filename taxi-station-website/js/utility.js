// Make opaicty low while scrolling and high when hovering
// import { smoothscroll } from "smoothscroll-polyfill";
// const smoothscroll = require("../smoothscroll-polyfill");
// kick off the polyfill!
// smoothscroll.polyfill();
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

$(".menu").click(function () {
  $(".topnav .navbar").toggleClass("active");
  $(".logo").toggleClass("hide");
});
$(".navigation").click(function (e) {
  console.log(e.currentTarget.children[1].classList.toggle("active-dropdown"));
  // e.target.nextSibling.classList.toggle("active-dropdown");
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

document.querySelectorAll(".not-finished").forEach((item) => {
  item.addEventListener("click", () => {
    console.log("sweet");
    const el = document.createElement("div");
    el.innerHTML =
      "Ссылка на <a style='color: rgb(29, 104, 226); font-weight: bold;' href='./contacts.html'>Контакты</a>";
    Swal.fire({
      title: "Пожалуйста подождите",
      text: "Вы можете перейти в Контакты чтобы связаться с нами.",
      imageUrl: "assets/construction.png",
      imageWidth: 600,
      imageHeight: 264,
      footer: el,
      width: "52rem",
      imageAlt: "Custom image",
    });
  });
});

document.querySelector(".scroll-btn").addEventListener("click", () => {
  console.log("cick");
  // document.body.scrollTop = 0; // For Safari
  // document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  const scrollButton = document.querySelector(".topnav");
  console.log(scrollButton.parentElement);

  SmoothVerticalScrolling(scrollButton.parentElement, 250, "top");
});
/////////////////////////////////////////////////////////////////
function SmoothVerticalScrolling(e, time, where) {
  var eTop = e.getBoundingClientRect().top;
  console.log("eTop is ");
  console.log(eTop);
  var eAmt = eTop;
  var curTime = 0;
  while (curTime <= time) {
    window.setTimeout(SVS_B, curTime, eAmt, where);
    curTime += time / 100;
  }
}

function SVS_B(eAmt, where) {
  if (where == "center" || where == "") window.scrollBy(0, eAmt / 2);
  if (where == "top") window.scrollBy(0, eAmt);
}
