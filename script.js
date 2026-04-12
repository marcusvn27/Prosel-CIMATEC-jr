document.addEventListener("DOMContentLoaded", function () {

    const buttons = document.querySelectorAll("nav button");

    buttons.forEach(button => {
        button.addEventListener("click", function () {

            const targetId = this.getAttribute("data-target");
            const section = document.getElementById(targetId);

            if (section) {
                window.scrollTo({
                    top: section.offsetTop - 80,
                    behavior: "smooth"
                });
            } else {
                console.log("Seção não encontrada:", targetId);
            }

        });
    });

});
const carrossel = document.querySelector('.carrossel');
const next = document.querySelector('.next');
const prev = document.querySelector('.prev');

let scroll = 0;
const larguraCard = 300;

next.addEventListener('click', () => {
    scroll += larguraCard;

    if (scroll > carrossel.scrollWidth - carrossel.clientWidth) {
        scroll = carrossel.scrollWidth - carrossel.clientWidth;
    }

    carrossel.scrollTo({
        left: scroll,
        behavior: 'smooth'
    });
});

prev.addEventListener('click', () => {
    scroll -= larguraCard;

    if (scroll < 0) scroll = 0;

    carrossel.scrollTo({
        left: scroll,
        behavior: 'smooth'
    });
});

document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', function () {
        const targetId = this.getAttribute('data-target');
        const section = document.getElementById(targetId);

        if (section) {
            window.scrollTo({
                top: section.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

const botao = document.getElementById("toggleTema");

botao.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    botao.textContent = document.body.classList.contains("dark")
        ? "🌙"
        : "☀️";
});
