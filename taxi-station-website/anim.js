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

$(document).ready(function () {
  // Tabs - end

  ///// Car animate - start /////
  var carpath = {
    road1: {
      curviness: 0,
      autoRotate: true,
      force3D: true,
      type: "cubic",
      values: [
        {
          x: 921,
          y: 0,
        },
        {
          x: 921,
          y: 0,
        },
        {
          x: 921,
          y: 458.1,
        },
        {
          x: 921,
          y: 458.1,
        },
        {
          x: 921,
          y: 509.8,
        },
        {
          x: 879.1,
          y: 551.6,
        },
        {
          x: 827.5,
          y: 551.6,
        },
        {
          x: 827.5,
          y: 551.6,
        },
        {
          x: 731.7,
          y: 551.6,
        },
        {
          x: 731.7,
          y: 551.6,
        },
      ],
    },
    point1: {
      curviness: 0,
      autoRotate: true,
      force3D: true,
      type: "cubic",
      values: [
        {
          x: 731.7,
          y: 551.7,
        },
        {
          x: 731.7,
          y: 551.7,
        },
        {
          x: 730.7,
          y: 551.7,
        },
        {
          x: 730.7,
          y: 551.7,
        },
      ],
    },
    road2: {
      curviness: 0,
      autoRotate: true,
      force3D: true,
      type: "cubic",
      values: [
        {
          x: 730.7,
          y: 551.7,
        },
        {
          x: 730.7,
          y: 551.7,
        },
        {
          x: 427,
          y: 551.7,
        },
        {
          x: 427,
          y: 551.7,
        },
        {
          x: 376.9,
          y: 551.7,
        },
        {
          x: 336.3,
          y: 592.3000000000001,
        },
        {
          x: 336.3,
          y: 642.4000000000001,
        },
        {
          x: 336.3,
          y: 642.4000000000001,
        },
        {
          x: 336.3,
          y: 797,
        },
        {
          x: 336.3,
          y: 797,
        },
      ],
    },
    point2: {
      curviness: 0,
      autoRotate: true,
      force3D: true,
      type: "cubic",
      values: [
        {
          x: 336.3,
          y: 797,
        },
        {
          x: 336.3,
          y: 797,
        },
        {
          x: 336.3,
          y: 798,
        },
        {
          x: 336.3,
          y: 798,
        },
      ],
    },
    road3: {
      curviness: 0,
      autoRotate: true,
      force3D: true,
      values: [
        {
          x: 336.3,
          y: 798,
        },
        {
          x: 336.3,
          y: 1199,
        },
      ],
    },
    point3: {
      curviness: 0,
      autoRotate: true,
      force3D: true,
      type: "cubic",
      values: [
        {
          x: 336.3,
          y: 1199,
        },
        {
          x: 336.3,
          y: 1199,
        },
        {
          x: 336.3,
          y: 1200,
        },
        {
          x: 336.3,
          y: 1200,
        },
      ],
    },
    road4: {
      curviness: 0,
      autoRotate: true,
      force3D: true,
      type: "cubic",
      values: [
        {
          x: 336.3,
          y: 1200,
        },
        {
          x: 336.3,
          y: 1200,
        },
        {
          x: 336.3,
          y: 1223.3,
        },
        {
          x: 336.3,
          y: 1223.3,
        },
        {
          x: 336.3,
          y: 1273.8999999999999,
        },
        {
          x: 377.3,
          y: 1315,
        },
        {
          x: 428,
          y: 1315,
        },
        {
          x: 428,
          y: 1315,
        },
        {
          x: 594,
          y: 1315,
        },
        {
          x: 594,
          y: 1315,
        },
        {
          x: 646.5,
          y: 1315,
        },
        {
          x: 689,
          y: 1272.5,
        },
        {
          x: 689,
          y: 1220,
        },
        {
          x: 689,
          y: 1194.9,
        },
        {
          x: 699.2,
          y: 1172.1,
        },
        {
          x: 715.7,
          y: 1155.7,
        },
        {
          x: 732.2,
          y: 1139.2,
        },
        {
          x: 754.9000000000001,
          y: 1129,
        },
        {
          x: 780,
          y: 1129,
        },
        {
          x: 806.5,
          y: 1129,
        },
        {
          x: 830.5,
          y: 1139.7,
        },
        {
          x: 847.9,
          y: 1157.1,
        },
        {
          x: 865.3,
          y: 1174.5,
        },
        {
          x: 876,
          y: 1198.5,
        },
        {
          x: 876,
          y: 1225,
        },
        {
          x: 876,
          y: 1225,
        },
        {
          x: 876,
          y: 1253,
        },
        {
          x: 876,
          y: 1253,
        },
      ],
    },
    point4: {
      curviness: 0,
      autoRotate: true,
      force3D: true,
      type: "cubic",
      values: [
        {
          x: 876,
          y: 1253,
        },
        {
          x: 876,
          y: 1253,
        },
        {
          x: 876,
          y: 1254,
        },
        {
          x: 876,
          y: 1254,
        },
      ],
    },
    road5: {
      curviness: 0,
      autoRotate: true,
      force3D: true,
      values: [
        {
          x: 876,
          y: 1254,
        },
        {
          x: 876,
          y: 1731.7,
        },
      ],
    },
    point5: {
      curviness: 0,
      autoRotate: true,
      force3D: true,
      type: "cubic",
      values: [
        {
          x: 876,
          y: 1731.8,
        },
        {
          x: 876,
          y: 1731.8,
        },
        {
          x: 876,
          y: 1732.7,
        },
        {
          x: 876,
          y: 1732.7,
        },
      ],
    },
    road6: {
      curviness: 0,
      autoRotate: true,
      force3D: true,
      type: "cubic",
      values: [
        {
          x: 876,
          y: 1732.7,
        },
        {
          x: 876,
          y: 1732.7,
        },
        {
          x: 876,
          y: 1867.2,
        },
        {
          x: 876,
          y: 1867.2,
        },
        {
          x: 876,
          y: 1917.9,
        },
        {
          x: 834.9,
          y: 1959,
        },
        {
          x: 784.2,
          y: 1959,
        },
        {
          x: 784.2,
          y: 1959,
        },
        {
          x: 657.5,
          y: 1959,
        },
        {
          x: 657.5,
          y: 1959,
        },
        {
          x: 609.2,
          y: 1959,
        },
        {
          x: 570,
          y: 1998.2,
        },
        {
          x: 570,
          y: 2046.5,
        },
        {
          x: 570,
          y: 2046.5,
        },
        {
          x: 570,
          y: 2577,
        },
        {
          x: 570,
          y: 2577,
        },
      ],
    },
  };
  // Init controller
  var controller = new ScrollMagic.Controller();

  // Create tween
  var tween = new TimelineMax()

    .add(
      TweenMax.to($(".car"), 0.8, {
        css: {
          bezier: carpath.road1,
          display: "block",
        },
        ease: Power0.easeOut,
      })
    )
    .add(
      TweenMax.to($(".car"), 0.5, {
        css: {
          bezier: carpath.point1,
        },
        ease: Expo.easeIn,
        onUpdate: popoverShow,
        onComplete: popoverHide,
        onReverseComplete: popoverHide,
      })
    )

    .add(
      TweenMax.to($(".car"), 0.8, {
        css: {
          bezier: carpath.road2,
          display: "block",
        },
        ease: Power0.easeOut,
      })
    )
    .add(
      TweenMax.to($(".car"), 0.5, {
        css: {
          bezier: carpath.point2,
        },
        ease: Expo.easeIn,
        onUpdate: popoverShow2,
        onComplete: popoverHide2,
        onReverseComplete: popoverHide2,
      })
    )

    .add(
      TweenMax.to($(".car"), 0.8, {
        css: {
          bezier: carpath.road3,
          display: "block",
        },
        ease: Power0.easeOut,
      })
    )
    .add(
      TweenMax.to($(".car"), 0.5, {
        css: {
          bezier: carpath.point3,
        },
        ease: Expo.easeIn,
        onUpdate: popoverShow3,
        onComplete: popoverHide3,
        onReverseComplete: popoverHide3,
      })
    )

    .add(
      TweenMax.to($(".car"), 0.8, {
        css: {
          bezier: carpath.road4,
          display: "block",
        },
        ease: Power0.easeOut,
      })
    )
    .add(
      TweenMax.to($(".car"), 0.5, {
        css: {
          bezier: carpath.point4,
        },
        ease: Expo.easeIn,
        onUpdate: popoverShow4,
        onComplete: popoverHide4,
        onReverseComplete: popoverHide4,
      })
    )

    .add(
      TweenMax.to($(".car"), 0.8, {
        css: {
          bezier: carpath.road5,
          display: "block",
        },
        ease: Power0.easeOut,
      })
    )
    .add(
      TweenMax.to($(".car"), 0.5, {
        css: {
          bezier: carpath.point5,
        },
        ease: Expo.easeIn,
        onUpdate: popoverShow5,
        onComplete: popoverHide5,
        onReverseComplete: popoverHide5,
      })
    )

    .add(
      TweenMax.to($(".car"), 0.8, {
        css: {
          bezier: carpath.road6,
          display: "none",
        },
        ease: Power0.easeOut,
      })
    );

  // Build scene
  var scene = new ScrollMagic.Scene({
    triggerElement: "#trigger",
    duration: 2077,
    tweenChanges: true,
  })
    .setTween(tween)
    .addTo(controller);

  //tween.reverse();

  var lastScrollTop = 0;

  function popoverShow() {
    $(".popover1").css("display", "block");
  }

  function popoverHide() {
    $(".popover1").css("display", "none");
  }

  function popoverShow2() {
    $(".popover2").css("display", "block");
  }

  function popoverHide2() {
    $(".popover2").css("display", "none");
    paint = !paint;
    console.log("fire");
  }

  function popoverShow3() {
    $(".popover3").css("display", "block");
  }

  function popoverHide3() {
    $(".popover3").css("display", "none");
  }

  function popoverShow4() {
    $(".popover4").css("display", "block");
  }

  function popoverHide4() {
    $(".popover4").css("display", "none");
  }

  function popoverShow5() {
    $(".popover5").css("display", "block");
  }

  function popoverHide5() {
    $(".popover5").css("display", "none");
  }

  ///// Car animate - end /////
});

var lastScrollTop = 0;
$(window).scroll(function (event) {
  var st = $(this).scrollTop();
  if (st > lastScrollTop) {
    if (paint) $(".car").attr("src", "./assets/taxi-right.png");
    else $(".car").attr("src", "./assets/car-right.png");
  } else {
    if (paint) $(".car").attr("src", "./assets/taxi-left.png");
    else $(".car").attr("src", "./assets/car-left.png");
  }
  lastScrollTop = st;
});
