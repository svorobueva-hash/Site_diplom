

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
