const track1 = document.querySelector(".track-1");

// дублируем для бесшовности
track1.innerHTML += track1.innerHTML;

gsap.to(track1, {
  x: "-50%",
  duration: 20,
  ease: "linear",
  repeat: -1,
});
