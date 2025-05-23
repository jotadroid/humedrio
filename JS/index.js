// script.js

let slideIndex = 1;
showSlides(slideIndex);

// Función para avanzar o retroceder slides
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Función para ir a un slide específico (usada por los puntos)
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slide");
    let dots = document.getElementsByClassName("dot");

    if (slides.length === 0) { // Si no hay slides, no hacer nada
        console.warn("No se encontraron elementos con la clase 'slide'.");
        return;
    }
    if (dots.length === 0) { // Si no hay dots, no hacer nada (aunque el slideshow funcionaría sin ellos)
        console.warn("No se encontraron elementos con la clase 'dot'.");
    }


    // Lógica para el carrusel (que vuelva al principio/final)
    if (n > slides.length) {
        slideIndex = 1; // Si se pasa del último, va al primero
    }
    if (n < 1) {
        slideIndex = slides.length; // Si se va antes del primero, va al último
    }

    // Ocultar todos los slides
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // Quitar la clase "active-dot" de todos los puntos
    for (i = 0; i < dots.length; i++) {
        if (dots[i]) { // Comprobar si el elemento dot existe
            dots[i].className = dots[i].className.replace(" active-dot", "");
        }
    }

    // Mostrar el slide actual y marcar su punto como activo
    if (slides[slideIndex - 1]) { // Comprobar si el slide existe
        slides[slideIndex - 1].style.display = "block";
    }

    if (dots[slideIndex - 1]) { // Comprobar si el dot correspondiente existe
        dots[slideIndex - 1].className += " active-dot";
    }
}

// Opcional: Slideshow automático (descomentar para activar)
/*
let autoSlideTimeout; // Variable para guardar el temporizador

function autoShowSlides() {
    let i;
    let slides = document.getElementsByClassName("slide");
    let dots = document.getElementsByClassName("dot");

    if (slides.length === 0) return;

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}

    for (i = 0; i < dots.length; i++) {
        if (dots[i]) {
            dots[i].className = dots[i].className.replace(" active-dot", "");
        }
    }

    if (slides[slideIndex-1]) {
        slides[slideIndex-1].style.display = "block";
    }
    if (dots[slideIndex-1]) {
        dots[slideIndex-1].className += " active-dot";
    }

    // Cambia de imagen cada 5 segundos (5000 milisegundos)
    autoSlideTimeout = setTimeout(autoShowSlides, 5000);
}

// Para iniciar el slideshow automático al cargar la página:
// window.onload = function() {
//     showSlides(slideIndex); // Muestra el primer slide manualmente
//     // autoShowSlides(); // Inicia el ciclo automático
// };

// Para detener el slideshow automático si el usuario interactúa (ejemplo):
// document.querySelector('.slideshow-container').addEventListener('mouseenter', () => clearTimeout(autoSlideTimeout));
// document.querySelector('.slideshow-container').addEventListener('mouseleave', autoShowSlides);
*/

// Asegúrate de que el script se ejecuta después de que el DOM esté cargado
// Esto es una buena práctica, aunque si pones el <script> al final del body,
// generalmente no es estrictamente necesario para este caso.
document.addEventListener('DOMContentLoaded', (event) => {
    showSlides(slideIndex); // Muestra el primer slide al cargar la página
});