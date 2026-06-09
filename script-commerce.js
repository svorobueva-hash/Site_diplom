const track = document.querySelector(".track");

// дублируем для бесшовности
track.innerHTML += track.innerHTML;

gsap.to(track, {
  x: "-50%",
  duration: 20,
  ease: "linear",
  repeat: -1,
});