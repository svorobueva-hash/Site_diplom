
const track1 = document.querySelector(".track-1");

// дублируем для бесшовности
track1.innerHTML += track1.innerHTML;

gsap.to(track1, {
  x: "-50%",
  duration: 20,
  ease: "linear",
  repeat: -1,
});




/* Инициализация слайдера Swiper
 * По умолчанию на широких экранах прокрутка отключена (allowTouchMove: false) и видно по 4 карточки.
 * На более узких экранах уменьшаем количество видимых карточек и включаем возможность перелистывания пальцем.
 */
document.addEventListener('DOMContentLoaded', function () {
  var swiper = new Swiper('#top-slider', {
    slidesPerView: 4,
    spaceBetween: 16,
    allowTouchMove: false,
    pagination: {
      el: '#top-slider .swiper-pagination',
      clickable: true,
      dynamicBullets: false,
    },
    // отключаем стрелки по умолчанию (их нет в верстке)
    navigation: false,
    breakpoints: {
      // При ширине 1200px и меньше показываем 3 карточки и включаем свайп
      1440: {
        slidesPerView: 3,
        allowTouchMove: true,
      },
      // При ширине 992px и меньше — 2 карточки
      1194: {
        slidesPerView: 2.5,
        allowTouchMove: true,
      },
      // При ширине 768px и меньше — 1.5 карточки
      980: {
        slidesPerView: 2,
        allowTouchMove: true,
      },
      600: {
        slidesPerView: 1.5,
        allowTouchMove: true,
      },
      // При ширине 576px и меньше — 1 карточка
      300: {
        slidesPerView: 1,
        allowTouchMove: true,
      },
    },
  });
});



document.getElementById('merch-btn').addEventListener('click', () => {
    window.location.href =
        'mailto:needles.cheer@yandex.ru'
        + '?subject=Покупка%20мерча'
        + '&body=Здравствуйте!%0A%0A'
        + 'Мне понравился следующий мерч:%0A%0A'
        + '- %0A%0A'
        + 'Подскажите, пожалуйста, как его приобрести и какие доступны размеры.%0A%0A'
        + 'Спасибо!';
});
