const track1 = document.querySelector(".track-1");
const track2 = document.querySelector(".track-2");
const track3 = document.querySelector(".track-3");

// дублируем для бесшовности
track1.innerHTML += track1.innerHTML;
track2.innerHTML += track2.innerHTML;
track3.innerHTML += track3.innerHTML;

gsap.to(track1, {
  x: "-50%",
  duration: 20,
  ease: "linear",
  repeat: -1,
});

gsap.to(track2, {
  x: "-50%",
  duration: 20,
  ease: "linear",
  repeat: -1,
});

gsap.to(track3, {
  x: "-50%",
  duration: 20,
  ease: "linear",
  repeat: -1,
});




document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.coach-slider').forEach(function (slider) {
    new Swiper(slider, {
      slidesPerView: 4,
      spaceBetween: 24,
      allowTouchMove: true,
      grabCursor: true,
      watchOverflow: false,
      freeMode: true,

      breakpoints: {
        0: {
          slidesPerView: 4.2,
        },
        600: {
          slidesPerView: 4,
        },
        720: {
          slidesPerView: 3.6,
        },
        980: {
          slidesPerView: 3.4,
        },
        1194: {
          slidesPerView: 3.2,
        },
        1440: {
          slidesPerView: 3.4,
        },
        1920: {
          slidesPerView: 4,
        }
      }
    });
  });
});



document.querySelectorAll('.junior-slider').forEach(function (slider) {

  new Swiper(slider, {
    slidesPerView: 2,
    spaceBetween: 80,
    grabCursor: true,

    breakpoints: {

      0: {
        slidesPerView: 1,
      },

      640: {
        slidesPerView: 1,
      },

      980: {
        slidesPerView: 1.2,
      },

      1194: {
        slidesPerView: 1.6,
      },

      1440: {
        slidesPerView: 2,
      }
    }
  });

});