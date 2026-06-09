
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





// Helper function to toggle modal visibility
    function openModal(modalId) {
        const overlay = document.querySelector('.modal-overlay');
        const modal = document.getElementById(modalId);
        overlay.style.display = 'block';
        modal.style.display = 'block';
    }

    function closeModal(modal) {
        const overlay = document.querySelector('.modal-overlay');
        overlay.style.display = 'none';
        modal.style.display = 'none';
    }

    // Initialize event listeners after the DOM is ready
    document.addEventListener('DOMContentLoaded', function() {
        const btnTeam = document.querySelector('.btn1');
        const btnPerformance = document.querySelector('.btn-application');
        const overlay = document.querySelector('.modal-overlay');
        const teamModal = document.getElementById('teamModal');
        const performanceModal = document.getElementById('performanceModal');

        // Open modal events
        btnTeam.addEventListener('click', function() {
            openModal('teamModal');
        });
        btnPerformance.addEventListener('click', function() {
            openModal('performanceModal');
        });

        // Close modal when clicking outside the modal
        overlay.addEventListener('click', function() {
            closeModal(teamModal);
            closeModal(performanceModal);
        });

        // Close modal buttons
        document.querySelectorAll('.close-btn').forEach(function(btn) {
          btn.addEventListener('click', function() {
            const modal = this.parentElement;
            closeModal(modal);
            // Очистить форму, если есть
            const form = modal.querySelector('form');
            if (form) {
              form.reset();
              form.querySelectorAll('input, textarea').forEach(function(field) {
                field.classList.remove('valid');
                field.classList.remove('invalid');
              });
            }
          });
        });

        // Form validation function
        function validateInput(input) {
            // If input type is number
            if (input.type === 'number') {
                const value = input.value.trim();
                const num = parseInt(value, 10);
                if (value === '' || isNaN(num)) {
                    return false;
                }
                const min = parseInt(input.getAttribute('min'), 10);
                const max = parseInt(input.getAttribute('max'), 10);
                if (num < min || num > max) {
                    return false;
                }
                return true;
            }
            // If input type is tel
            if (input.type === 'tel') {
                const pattern = new RegExp(input.getAttribute('pattern'));
                return pattern.test(input.value.trim());
            }
            // For text or textarea
            return input.value.trim().length > 0;
        }

        function attachValidation(form) {
            const fields = form.querySelectorAll('input, textarea');
            fields.forEach(function(field) {
                field.addEventListener('input', function() {
                    // Remove previous state classes
                    this.classList.remove('valid');
                    this.classList.remove('invalid');
                    if (validateInput(this)) {
                        this.classList.add('valid');
                    } else {
                        this.classList.add('invalid');
                    }
                });
            });
            // Form submit handler
            form.addEventListener('submit', function(e) {
                e.preventDefault();
                let allValid = true;
                fields.forEach(function(field) {
                    field.classList.remove('valid');
                    field.classList.remove('invalid');
                    if (validateInput(field)) {
                        field.classList.add('valid');
                    } else {
                        field.classList.add('invalid');
                        allValid = false;
                    }
                });
                if (allValid) {
                    alert('Заявка отправлена! Спасибо.');
                    // Reset form
                    form.reset();
                    fields.forEach(function(field) {
                        field.classList.remove('valid');
                        field.classList.remove('invalid');
                    });
                    // Close the modal after successful submission
                    closeModal(form.parentElement);
                }
            });
        }

        attachValidation(document.getElementById('teamForm'));
        attachValidation(document.getElementById('performanceForm'));
    });