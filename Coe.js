document.addEventListener("DOMContentLoaded", function () {
    const slide = document.querySelector(".carousel-slide");
    let index = 0;

    function avanzarPrimerCarrusel() {
        index = (index + 1) % slide.children.length;
        slide.style.transform = `translateX(${-index * 100}%)`;
    }

    setInterval(avanzarPrimerCarrusel, 12000);

    const carrusel = document.querySelector(".reseñas-carrusel");
    const reseñas = document.querySelectorAll(".reseña");
    const totalReseñas = reseñas.length;
    let indiceActual = 0;
    let enTransicion = false;

    const primerElemento = reseñas[0].cloneNode(true);
    carrusel.appendChild(primerElemento);

    function avanzarCarrusel() {
        if (enTransicion) return;
        enTransicion = true;

        indiceActual++;
        carrusel.style.transition = "transform 1s ease-in-out";
        carrusel.style.transform = `translateX(${-indiceActual * 400}px)`;

        if (indiceActual > totalReseñas - 1) {
            setTimeout(() => {
                carrusel.style.transition = "none";
                carrusel.style.transform = `translateX(0px)`;
                indiceActual = 0;
                enTransicion = false;
            }, 1000);
        } else {
            setTimeout(() => {
                enTransicion = false;
            }, 1000);
        }
    }

    setInterval(avanzarCarrusel, 12000);
});
