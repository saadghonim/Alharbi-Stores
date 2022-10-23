window.onload = function () {
  $(".loader").fadeOut(1000, function () {
    $(this).parent().hide();
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      1
    );
  });
};
const nav_bar = document.querySelector("nav");
const close_nav = document.querySelector(".btn_close_nave");
const barsIcon = document.querySelector(".btn_bars");
const html_ = document.querySelector("html");
const body_ = document.querySelector("body");

const moboverlay = document.querySelector(".moboverlay");
$(document).ready(function () {
  // varibles

  // open menu mobile
  if ($(document).width() < 768) {
    $(".hover_menu").click(function (e) {
      e.preventDefault;
      $(this).children().next().slideToggle("500");
    });
  }
  // open search mobile
  $(".btn-search-mobile").click(function () {
    $(".input-serch-div-parant").slideToggle("500");
    $(".btn-search-mobile .la-search").toggleClass("la-times");
  });
  // ~~~~~~~~~~~~back_top
  $(window).scroll(function () {
    if ($(window).scrollTop() > 150) {
      $(".back_top").fadeIn("500");
    } else {
      $(".back_top").fadeOut("500");
    }
  });
  $(".back_top").on("click", function (e) {
    e.preventDefault();
    $("html, body").animate({ scrollTop: 0 }, "500");
  });
  //~~~~~~~~~ fixed header
  $(window).on("scroll", function () {
    if ($(window).scrollTop() > 150) {
      $(".header").addClass("fixed_");
    } else {
      $(".header").removeClass("fixed_");
    }
  });
  var fixedBar = document.querySelector(".header"),
    prevScrollpos = $(window).scrollTop();

  (window.onscroll = function () {
    var o = $(window).scrollTop();
    prevScrollpos < o && prevScrollpos > 0
      ? fixedBar.classList.add("fixsedt")
      : fixedBar.classList.remove("fixsedt"),
      (prevScrollpos = o);
  }),
    document.documentElement.style.setProperty("--animate-duration", ".5s");
  // ~~~~~~~~~~~~~~~
}); //  end docoument

// open signin
$(".btn_user_").click(function () {
  $(".login-popup-parant").slideToggle("500");
  $(".moboverlay").slideToggle("500");
  body_.classList.add("over_");
});
// close signin
$(".moboverlay, .close_login").click(function () {
  $(".login-popup-parant").fadeOut("500");
  $(".moboverlay").fadeOut("500");
  body_.classList.remove("over_");
});
// nested menu
$(".nested-menu .anc_sidebar").click(function (e) {
  e.preventDefault();
  $(this).next().slideToggle("500");
});
//side menu
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";

  moboverlay.style.display = "block";
  body_.classList.add("over_");
  html_.classList.add("over_");
  $(".header").removeClass("fixsedt");
  document.getElementById("main").classList.add("open-side-menu");
}

moboverlay.addEventListener("click", function () {
  document.getElementById("mySidenav").style.width = "0";
  moboverlay.style.display = "none";
  body_.classList.remove("over_");
  html_.classList.remove("over_");
  document.getElementById("main").classList.remove("open-side-menu");
});
// swiper js
const swiper1 = new Swiper(".slider .mySwiper", {
  slidesPerView: "1",
  autoplay: true,
  slidesPerView: "auto",
  navigation: {
    nextEl: ".slider .swiper-button-next",
    prevEl: ".slider .swiper-button-prev",
  },
  pagination: {
    el: ".slider .swiper-pagination",
    clickable: true,
  },
  autoplay: {
    enabled: true,
  },
});
// swiper category
const swiper2 = new Swiper(".category .mySwiper", {
  slidesPerView: "1",
  // autoplay: false,
  a11y: {
    enabled: false,
  },
  navigation: {
    nextEl: ".category .swiper-button-next",
    prevEl: ".category .swiper-button-prev",
  },
  pagination: {
    el: ".category .swiper-pagination",
    clickable: true,
  },

  breakpoints: {
    0: {
      slidesPerView: 3,
    },
    767: {
      slidesPerView: 6,
    },
    992: {
      slidesPerView: 8,
    },
    1199: {
      slidesPerView: 10,
    },
  },
});
// swiper new
const swiper3 = new Swiper(".new-secitioin .mySwiper", {
  autoplay: false,
  spaceBetween: 10,
  navigation: {
    nextEl: ".new-secitioin .swiper-button-next",
    prevEl: ".new-secitioin .swiper-button-prev",
  },
  pagination: {
    el: ".new-secitioin .swiper-pagination",
    clickable: true,
  },
  autoplay: {
    enabled: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 2,
    },
    767: {
      slidesPerView: 4,
    },
    992: {
      slidesPerView: 5,
    },
    1199: {
      slidesPerView: 6,
    },
  },
});

const swiper4 = new Swiper(".offers_sectioin .mySwiper", {
  autoplay: false,
  spaceBetween: 10,
  navigation: {
    nextEl: ".offers_sectioin .swiper-button-next",
    prevEl: ".offers_sectioin .swiper-button-prev",
  },
  pagination: {
    el: ".offers_sectioin .swiper-pagination",
    clickable: true,
  },
  autoplay: {
    enabled: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 2,
    },
    767: {
      slidesPerView: 4,
    },
    992: {
      slidesPerView: 5,
    },
    1199: {
      slidesPerView: 6,
    },
  },
});
const swiper5 = new Swiper(".offers_sectioin .mySwiper", {
  autoplay: false,
  spaceBetween: 10,
  navigation: {
    nextEl: ".offers_sectioin .swiper-button-next",
    prevEl: ".offers_sectioin .swiper-button-prev",
  },
  pagination: {
    el: ".offers_sectioin .swiper-pagination",
    clickable: true,
  },
  autoplay: {
    enabled: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 2,
    },
    767: {
      slidesPerView: 4,
    },
    992: {
      slidesPerView: 5,
    },
    1199: {
      slidesPerView: 6,
    },
  },
});
const swiper6 = new Swiper(".bestseller_sectioin .mySwiper", {
  autoplay: false,
  spaceBetween: 10,
  navigation: {
    nextEl: ".bestseller_sectioin .swiper-button-next",
    prevEl: ".bestseller_sectioin .swiper-button-prev",
  },
  pagination: {
    el: ".bestseller_sectioin .swiper-pagination",
    clickable: true,
  },
  autoplay: {
    enabled: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 2,
    },
    767: {
      slidesPerView: 4,
    },
    992: {
      slidesPerView: 5,
    },
    1199: {
      slidesPerView: 6,
    },
  },
});
const swiper7 = new Swiper(".Most-Viewed_sectioin .mySwiper", {
  autoplay: false,
  spaceBetween: 10,
  navigation: {
    nextEl: ".Most-Viewed_sectioin .swiper-button-next",
    prevEl: ".Most-Viewed_sectioin .swiper-button-prev",
  },
  pagination: {
    el: ".Most-Viewed_sectioin .swiper-pagination",
    clickable: true,
  },
  autoplay: {
    enabled: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 2,
    },
    767: {
      slidesPerView: 4,
    },
    992: {
      slidesPerView: 5,
    },
    1199: {
      slidesPerView: 6,
    },
  },
});

const swiper8 = new Swiper(".brands .mySwiper", {
  autoplay: false,
  spaceBetween: 5,
  navigation: {
    nextEl: ".brands .swiper-button-next",
    prevEl: ".brands .swiper-button-prev",
  },
  pagination: {
    el: ".brands .swiper-pagination",
    clickable: true,
  },
  autoplay: {
    enabled: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 3,
    },
    767: {
      slidesPerView: 4,
    },
    992: {
      slidesPerView: 8,
    },
    1199: {
      slidesPerView: 10,
    },
    1400: {
      slidesPerView: 11,
    },
  },
});
