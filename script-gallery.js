const tracks = document.querySelectorAll('.marquee-row');
const speed = 100; // скорость прокрутки в px/сек

tracks.forEach((track, index) => {
  // сохраняем оригинальный HTML
  if (!track.dataset.original) {
    track.dataset.original = track.innerHTML;
  }

  function setupMarquee() {
    // убиваем старую анимацию, если есть
    if (track._timeline) {
      track._timeline.kill();
      track._timeline = null;
    }

    // делаем три копии исходного набора
    const originalHTML = track.dataset.original;
    track.innerHTML = originalHTML.repeat(3);

    // ширина одного набора = общая ширина / 3
    const totalWidth = track.scrollWidth;
    const singleWidth = totalWidth / 3;

    // длительность вычисляем по ширине набора и скорости
    const duration = singleWidth / speed;
    const moveLeft = index % 2 === 0;

    // создаём бесконечную анимацию прокрутки
    track._timeline = gsap.fromTo(
      track,
      { x: moveLeft ? 0 : -singleWidth },
      {
        x: moveLeft ? -singleWidth : 0,
        duration,
        ease: 'none',
        repeat: -1,
        modifiers: {
            x: value => Math.round(parseFloat(value)) + 'px'
        }
      },
    );
  }

  // запускаем анимацию при загрузке
  setupMarquee();

  // и пересоздаём её при изменении размеров окна/медиазоны
  window.addEventListener('resize', setupMarquee);
});