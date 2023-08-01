const imagen1 = document.getElementById("imagen1");
const imagen2 = document.getElementById("imagen2");
const sobreAminacion = document.getElementById("animacion-entrada");
const lista = document.getElementById("item-entrada");
const hablidades = document.getElementById("animacion-habilidades");
const proyectos = document.getElementById("animacion-tiutlo");
const proyectos2 = document.getElementById("animacion-tiutlo2");
const contacto = document.getElementById("contacto-animacion");
const contacto2 = document.getElementById("contacto-animacion2");
const boton = document.getElementById("btn-animacion")

function animacion(entradas, observador) {

    entradas.forEach((entrada) => {
        if (entrada.isIntersecting) {
            entrada.target.classList.add("visible");

        } else {
            entrada.target.classList.remove("visible");

        }
    });
}



const observador = new IntersectionObserver(animacion, {
    root: null,
    rootMargin: "0px 0px 0px 0px",
    threshold: 0.5
})

observador.observe(imagen1);
observador.observe(imagen2);
observador.observe(sobreAminacion);
observador.observe(lista);
observador.observe(hablidades);
observador.observe(proyectos);
observador.observe(proyectos2);
observador.observe(contacto);
observador.observe(contacto2);
observador.observe(boton);







