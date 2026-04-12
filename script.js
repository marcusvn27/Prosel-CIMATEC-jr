document.addEventListener("DOMContentLoaded", () => {

    /* ================= MENU ================= */
    const navButtons = document.querySelectorAll("nav button");

    navButtons.forEach(button => {
        button.addEventListener("click", function () {
            const targetId = this.getAttribute("data-target");
            const section = document.getElementById(targetId);

            if (section) {
                window.scrollTo({
                    top: section.offsetTop - 80,
                    behavior: "smooth"
                });
            }
        });
    });


    /* ================= CARROSSEL ================= */
    const carrossel = document.querySelector('.carrossel');
    const next = document.querySelector('.next');
    const prev = document.querySelector('.prev');

    let scroll = 0;
    const larguraCard = 300;

    if (carrossel && next && prev) {

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
    }


    /* ================= TEMA ================= */
    const botaoTema = document.getElementById("toggleTema");

    if (botaoTema) {
        botaoTema.addEventListener("click", () => {
            document.body.classList.toggle("dark");

            botaoTema.textContent = document.body.classList.contains("dark")
                ? "🌙"
                : "☀️";
        });
    }


    /* ================= COMPARTILHAR ================= */
    const botaoCompartilhar = document.getElementById("btnCompartilhar");
    const popup = document.getElementById("popupCopiado");

    if (botaoCompartilhar && popup) {
        botaoCompartilhar.addEventListener("click", () => {

            navigator.clipboard.writeText(window.location.href);

            popup.classList.add("ativo");

            setTimeout(() => {
                popup.classList.remove("ativo");
            }, 2000);
        });
    }


    /* ================= MODAL ================= */
    const modal = document.getElementById("modalVideo");
    const btnSaibaMais = document.getElementById("btnModal");
   const fechar = document.querySelector(".fechar");

    if (modal && btnSaibaMais && fechar) {

        btnSaibaMais.addEventListener("click", () => {
            modal.classList.add("ativo"); /* 🔥 melhor que display */
        });

        fechar.addEventListener("click", () => {
            modal.classList.remove("ativo");

            const iframe = modal.querySelector("iframe");
    iframe.src = iframe.src; // reinicia o vídeo
        });

        modal.addEventListener("click", (e) => {
            if (e.target === modal) {
                modal.classList.remove("ativo");
            }
            const iframe = modal.querySelector("iframe");
    iframe.src = iframe.src; // reinicia o vídeo
        });
    }

});