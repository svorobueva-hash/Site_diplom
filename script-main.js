
const track1 = document.querySelector(".track-1");
const track2 = document.querySelector(".track-2");

// дублируем для бесшовности
track1.innerHTML += track1.innerHTML;
track2.innerHTML += track2.innerHTML;

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




const swiper = new Swiper(".mySwiper", {
    slidesPerView: 2.7,
    spaceBetween: 24,
    breakpoints: {
    0: {
      slidesPerView: 1.5,
      spaceBetween: 8,
    },
    712: {
      slidesPerView: 2.8,
      spaceBetween: 12,
    },

    1000: {
      slidesPerView: 3.5,
      spaceBetween: 24,
    },

    1194: {
      slidesPerView: 2.7,
      spaceBetween: 24,
    }
  }
});

const slides = document.querySelectorAll(".swiper-slide");
const mainImage = document.getElementById("mainImage");
const mainTitle = document.getElementById("mainTitle");
const mainSubtitle = document.getElementById("mainSubtitle");
const mainText = document.getElementById("mainText");
const mainDate = document.getElementById("mainDate");
const mobileImage = document.getElementById("mobileImage");

slides.forEach(slide => {
  slide.addEventListener("click", () => {
    // проверяем есть ли data-атрибуты
    if (!slide.dataset.image) return;

    const image = slide.dataset.image;
    const title = slide.dataset.title;
    const subtitle = slide.dataset.subtitle;
    const text = slide.dataset.text;
    const date = slide.dataset.date;

    // анимация смены
    mainImage.style.opacity = 0;

    setTimeout(() => {
      mainImage.src = image;
      mobileImage.src = image;
      mainTitle.textContent = title;
      mainSubtitle.textContent = subtitle;
      mainText.innerHTML = text;
      mainDate.textContent = date;
      mainImage.style.opacity = 1;
    }, 150);

    // подсветка активного
    slides.forEach(s => s.classList.remove("active"));
    slide.classList.add("active");
  });
});




const trackLeft = document.querySelector(".track-left");
const trackRight = document.querySelector(".track-right");

// дублируем
trackLeft.innerHTML += trackLeft.innerHTML;
trackRight.innerHTML += trackRight.innerHTML;

// влево
gsap.to(trackLeft, {
    x: "-50%",
    duration: 20,
    ease: "linear",
    repeat: -1
});

// вправо
gsap.fromTo(trackRight, 
    { x: "-50%" },   // старт
    { 
        x: "0%",     // конец
        duration: 20,
        ease: "linear",
        repeat: -1
    }
);
