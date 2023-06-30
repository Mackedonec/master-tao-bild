$(document).ready(function () {
  $(".first-screen-slider").slick({
    dots: true,
    speed: 1000,
    appendArrows: ".container-arrows",
    responsive: [
      {
        breakpoint: 991,
        settings: {
          arrows: false,
          fade: true,
        },
      },
    ],
  });

  Fancybox.bind("[data-fancybox]", {
    loop: true,
    buttons: ["zoom", "slideShow", "fullScreen", "close"],
    animationEffect: "fade",
    transitionEffect: "slide",
    animationDuration: 600,
  });
});

$(".slider-template").slick({
  dots: false,
  speed: 1000,
  arrows: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1400,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 1,
      },
    },
    {
      breakpoint: 575,
      settings: {
        slidesToShow: 1,
        arrows: false,
        dots: true,
        fade: true,
      },
    },
  ],
});

// menu mobile padding
const toggler = document.querySelector(".navbar-toggler");
const collaps = document.querySelector(".navbar-collapse");
const firstScreen = document.querySelector(".first-screen-slider");
let lastClickTime = 0;
const delay = 1000;

toggler.addEventListener("click", function () {
  const currentTime = Date.now();
  if (currentTime - lastClickTime < delay) {
    return;
  }
  lastClickTime = currentTime;

  firstScreen.classList.add("custom-margin");
  if (toggler.getAttribute("aria-expanded") === "false") {
    firstScreen.classList.remove("custom-margin");
  }
});

window.addEventListener("resize", function () {
  if (window.innerWidth > 992) {
    if (collaps.classList.contains("show")) {
      collaps.classList.remove("show");
    }
    if (firstScreen.classList.contains("custom-margin")) {
      firstScreen.classList.remove("custom-margin");
    }
    toggler.setAttribute("aria-expanded", "false");
    toggler.classList.add("collapsed");
  }
});

// form padding
function checkboxContainerPadding() {
  const checkButton = document.querySelectorAll(".checkbox-block");

  checkButton.forEach((item) => {
    item.closest('[class*="col"]').classList.add("custom-padding");
  });
}

if (document.querySelector(".calculate-form")) {
  checkboxContainerPadding();
} else {
  null;
}

// input file castom
document.getElementById("fileInput").onchange = function () {
  //short name
  document.getElementById("file-name").innerHTML = this.files[0].name;

  //long name
  // document.getElementById('file-name').innerHTML = this.value;
};

// Mobile Only Slider
mobileOnlySlider(".excellence-slider", true, false, 991);

function mobileOnlySlider($slidername, $dots, $arrows, $breakpoint) {
  var slider = $($slidername);
  var settings = {
    mobileFirst: true,
    dots: $dots,
    arrows: $arrows,
    responsive: [
      {
        breakpoint: $breakpoint,
        settings: "unslick",
      },
    ],
  };

  slider.slick(settings);

  $(window).on("resize", function () {
    if ($(window).width() > $breakpoint) {
      return;
    }
    if (!slider.hasClass("slick-initialized")) {
      return slider.slick(settings);
    }
  });
}
