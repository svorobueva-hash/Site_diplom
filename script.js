

const burger = document.querySelector(".burger");
const nav = document.querySelector(".nav");

burger.addEventListener("click", () => {
    nav.classList.toggle("active");
});




document.querySelectorAll(".nav__link").forEach(link => {
    link.addEventListener("click", () => {
        nav.classList.remove("active");
    });
});




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
        const btnNews = document.querySelector('.btn-news');

        // Open modal events
        btnTeam.addEventListener('click', function() {
            openModal('teamModal');
        });
        btnPerformance.addEventListener('click', function() {
            openModal('performanceModal');
        });
        btnNews.addEventListener('click', function() {
            openModal('teamModal');
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

        document.getElementById('perf-phone').addEventListener('input', function() {
            this.value = this.value.replace(/[^0-9+\-()\s]/g, '');
        });

        function validateInput(input) {
            const value = input.value.trim();

            if (input.required && value === '') return false;


            if (input.type === 'number') {
                const num = Number(value);
                const min = Number(input.min);
                const max = Number(input.max);

                return !isNaN(num) && num >= min && num <= max;
            }

            if (input.type === 'tel') {
                const phonePattern = /^\+?[0-9\s\-()]{10,20}$/;
                return phonePattern.test(value);
            }

            if (input.tagName.toLowerCase() === 'textarea') {
                return value.length >= 5;
            }

            if (input.type === 'text') {
                const id = input.id;

                if (id.includes('fio')) {
                    return /^[А-Яа-яЁёA-Za-z\s-]{5,}$/.test(value);
                }

                if (id.includes('rank')) {
                    return value.length >= 2;
                }

                if (id.includes('university')) {
                    return value.length >= 2;
                }

                return value.length >= 2;
            }

            return input.checkValidity();
        }

        function attachValidation(form) {
            if (!form) return;

            const fields = form.querySelectorAll('input, textarea');

            fields.forEach(function(field) {
                field.addEventListener('input', function() {
                    this.classList.remove('valid', 'invalid');

                    if (this.value.trim() === '') return;

                    if (validateInput(this)) {
                        this.classList.add('valid');
                    } else {
                        this.classList.add('invalid');
                    }
                });

                field.addEventListener('blur', function() {
                    this.classList.remove('valid', 'invalid');

                    if (this.value.trim() === '') return;

                    if (validateInput(this)) {
                        this.classList.add('valid');
                    } else {
                        this.classList.add('invalid');
                    }
                });
            });

            form.addEventListener('submit', function(e) {
                e.preventDefault();

                let allValid = true;

                fields.forEach(function(field) {
                    field.classList.remove('valid', 'invalid');

                    if (validateInput(field)) {
                        field.classList.add('valid');
                    } else {
                        field.classList.add('invalid');
                        allValid = false;
                    }
                });

                if (allValid) {
                    alert('Заявка отправлена! Спасибо.');

                    form.reset();

                    fields.forEach(function(field) {
                        field.classList.remove('valid', 'invalid');
                    });

                    closeModal(form.closest('.modal'));
                }
            });
        }

        attachValidation(document.getElementById('teamForm'));
        attachValidation(document.getElementById('performanceForm'));
    });