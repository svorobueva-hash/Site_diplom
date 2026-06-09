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