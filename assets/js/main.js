var swiper = new Swiper(".mySwiper", {
  slidesPerView: 2,
  spaceBetween: 30,
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
    990: {
      slidesPerView: 5,
      spaceBetween: 50,
    },
    1400: {
      slidesPerView: 5,
      spaceBetween: 50,
    },
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  loop: true,
});
var headerswiper = new Swiper(".header__swiper", {
  slidesPerView: 1,
  loop: true,
  effect: "fade",
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 5000,
  },
});

////////////////////////

$("input").focus(function () {
  $(this).parent().addClass("active");
  $("input").focusout(function () {
    if ($(this).val() == "") {
      $(this).parent().removeClass("active");
    } else {
      $(this).parent().addClass("active");
    }
  });
});

///////////////////////////////////////
// Navbar scroll

$(window).on('scroll', function () {
  if ($(window).scrollTop() > 200) {
    $('#navbar').addClass('sticky')
  } else {
    $('#navbar').removeClass('sticky')
  }
});

/////////////////////////////////////////////////////
// scroll

$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $("#scroll").fadeIn();
    } else {
      $("#scroll").fadeOut();
    }
  });
  $("#scroll").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 600);
    return false;
  });
});
///////////////////////////////

// $(window).scroll(function () {
//     var windscroll = $(window).scrollTop();
//     if (windscroll >= 100) {
//         $('section').each(function (i) {
//             // The number at the end of the next line is how pany pixels you from the top you want it to activate.
//             if ($(this).position().top <= windscroll - -1500) {
//                 $('.navigation__link.active').removeClass('active');
//                 $('.navigation__link').eq(i).addClass('active');

//             }
//         });

//     } else {

//         $('.navigation__link.active').removeClass('active');
//         $('.navigation__link:first').addClass('active');
//     }

// }).scroll();

//////////////////////////////////////////
// enroll btn

// let enquireBtn = document.querySelectorAll(".enquiry-btn");
// let model = document.querySelector(".enroll");
// let modelContainer = document.querySelector(".enroll__container");
// let modelOverlay = document.querySelector(".enroll__overlay");
// let modelClose = document.querySelector(".model-close");

// function modelCloseFunction() {
//   document.body.classList.remove("remove-scrolling");
//   modelContainer.classList.remove("active");
//   setTimeout(() => {
//     modelOverlay.classList.remove("active");
//   }, 200);
//   setTimeout(() => {
//     model.classList.remove("active");
//   }, 500);
// }

// modelClose.addEventListener("click", modelCloseFunction);
// modelOverlay.addEventListener("click", modelCloseFunction);

// enquireBtn.forEach((e) => {
//   e.addEventListener("click", () => {
//     document.body.classList.add("remove-scrolling");
//     model.classList.add("active");
//     modelOverlay.classList.add("active");

//     setTimeout(() => {
//       modelContainer.classList.add("active");
//     }, 200);
//   });
// });

/////////////////////////////////////
// Hamburg menu
// $(document).ready(function () {
//     $(".hamburger").click(function () {
//         $(this).toggleClass("is-active");
//     });
// });

//////////////////////////////////////////
// Navbar-scroll

$('a[href^="#"]').on("click", function (e) {
  var target = this.hash,
    $target = $(target);

  $("html, body")
    .stop()
    .animate(
      {
        scrollTop: $target.offset().top - 70,
      },
      200,
      "swing",
      function () {
        window.location.hash = target;
      }
    );
});

/////////////////////////////////////////////////////
// Mobile menu
const openBtn = document.querySelector("#hamburger-1");
const closeBtn = document.querySelector("#hamburger-2");
const nav_list = document.querySelector(".navigation__list");
const overlay = document.querySelector(".overlay");
const navContact = document.querySelector(".nav-contact");
overlay.classList.add("hidden");

function mobileMenu() {
  openBtn.classList.add("active");
  nav_list.classList.add("active");
  overlay.classList.remove("hidden");
}
function mobileMenuClose() {
  openBtn.classList.remove("active");
  nav_list.classList.remove("active");
  overlay.classList.add("hidden");
}

openBtn.addEventListener("click", mobileMenu);
closeBtn.addEventListener("click", mobileMenuClose);
overlay.addEventListener("click", mobileMenuClose);

/////////////////////////////////////////////////////
// scroll

$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $("#scroll").fadeIn();
    } else {
      $("#scroll").fadeOut();
    }
  });
  $("#scroll").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 600);
    return false;
  });
});

// //////////////////
//GALLERY

const info = document.querySelectorAll(".projects__info");
const projectBtns = document.querySelectorAll(".projects__btn");
let clickedBtn;

projectBtns.forEach((el) => {
  el.addEventListener("click", () => {
    clickedBtn = el.closest(".projects__info");

    console.log(clickedBtn);
  });
});
$(".projects__btn").magnificPopup({
  type: "image",
  gallery: {
    enabled: true,
  },
  callbacks: {
    open: function () {
      $.magnificPopup.instance.close = function () {
        $.magnificPopup.proto.close.call(this);
        clickedBtn.style.bottom = "0rem";
        setTimeout(() => {
          clickedBtn.style.bottom = "-6rem";
        }, 200);
      };
    },
  },
});

// //////////////////////////
// // project

// const projectBtn = document.querySelectorAll(".projects__single-item")

// projectBtn.forEach((btn) => {
//     btn.addEventListener("click", (el) => {
//         let projectInfo = el.target.closest(".projects__outer");

//         console.log(projectInfo.style);
//         projectInfo.style.bottom = "-6rem"
//     })
// })

////////////////////////
//

// const header__left = document.querySelectorAll(".header__left-part");
// const header = document.querySelector("header");

// header__left.forEach((el) => {
//   el.style.transform = "translateX(0rem)";
// });
// header.addEventListener("mouseenter", () => {
//   header__left.forEach((el) => {
//     el.style.transform = "translateX(3rem)";
//   });
//   // header__left.style.transform = "28rem 3rem 20rem";
// });
// header.addEventListener("mouseout", () => {
//   console.log("mouseout");
//   header__left.forEach((el) => {
//     el.style.transform = "translateX(0rem)";
//   });
// });



// // <script src="main.js"></script>

// const a_tag = document.querySelector("#sms")

// function getMobileOperatingSystem() {
//   var userAgent = navigator.userAgent || navigator.vendor || window.opera;


//   if (/android/i.test(userAgent)) {
//     a_tag.href = "sms://+919072374704?body=hello%20how%20are%20you"

//   }

//   // iOS detection from: http://stackoverflow.com/a/9039885/177710
//   if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
//     a_tag.href = "sms://+919072374704;?&body=hello%20how%20are%20you"
//   }

// }

// getMobileOperatingSystem();
// console.log(a_tag.getAttribute("href"));

