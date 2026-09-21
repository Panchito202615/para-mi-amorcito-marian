const boton = document.querySelector(".entrada button");

const apodoCorrecto = "miamor";

boton.addEventListener("click", function() {

    const apodo = document.getElementById("apodo").value.trim();
    const mensajeApodo = document.getElementById("mensaje-apodo");

    if (apodo === "") {
        mensajeApodo.textContent = "Primero escribe tu apodo 🌼";
        return;
    }

    if (apodo !== apodoCorrecto) {
        mensajeApodo.textContent = "Ese no es tu apodo 👀💛";
        return;
    }

    mensajeApodo.textContent = "";

    const entrada = document.querySelector(".entrada");
    const principal = document.querySelector(".principal");

    entrada.style.opacity = "0";

    setTimeout(function() {

        entrada.style.display = "none";
        principal.style.display = "flex";

        setTimeout(function() {
            principal.style.opacity = "1";
        }, 100);

    }, 1000);

    document.querySelector(".principal h1").textContent =
        "Bienvenida, " + apodo + " 💛";

});
const comenzar = document.getElementById("comenzar");

comenzar.addEventListener("click", function() {

    document.querySelector(".principal").style.display = "none";

    const carta = document.querySelector(".carta");

    carta.style.display = "flex";

});
const siguiente = document.getElementById("siguiente");
const floresSeccion = document.querySelector(".flores-seccion");

siguiente.addEventListener("click", function() {

    document.querySelector(".carta").style.display = "none";

    floresSeccion.style.display = "flex";

});
const flores = document.querySelectorAll(".flor-boton");
const tituloFlor = document.getElementById("titulo-flor");
const razonFlor = document.getElementById("razon-flor");

flores.forEach(function(flor) {

    flor.addEventListener("click", function() {

        tituloFlor.textContent = flor.dataset.titulo;
        razonFlor.textContent = flor.dataset.mensaje;

    });

});
const botonPoema = document.getElementById("poema");
const poemaSeccion = document.querySelector(".poema-seccion");

botonPoema.addEventListener("click", function() {

    document.querySelector(".flores-seccion").style.display = "none";

    poemaSeccion.style.display = "flex";

});
const botonDetalles = document.getElementById("recuerdos");
const detallesSeccion = document.querySelector(".detalles-seccion");

botonDetalles.addEventListener("click", function() {

    document.querySelector(".poema-seccion").style.display = "none";

    detallesSeccion.style.display = "flex";

});
const detalles = document.querySelectorAll(".detalle");
const mensajeDetalle = document.getElementById("mensaje-detalle");

detalles.forEach(function(detalle) {

    detalle.addEventListener("click", function() {

     mensajeDetalle.textContent = detalle.dataset.mensaje;

mensajeDetalle.style.opacity = "1";
mensajeDetalle.style.transform = "translateY(0)";

    });

});
const claveCorrecta = "amarillo";

const descubrir = document.getElementById("descubrir");
const pista = document.getElementById("pista");
const clave = document.getElementById("clave");
const mensajeClave = document.getElementById("mensaje-clave");

descubrir.addEventListener("click", function() {

    const respuesta = clave.value.trim().toLowerCase();

   if (respuesta === claveCorrecta) {

    mensajeClave.textContent = "¡Correcto! ✨";

    setTimeout(function() {

        const pantallaFinal = document.querySelector(".final-seccion");
        const sorpresa = document.getElementById("sorpresa-final");

        pantallaFinal.style.display = "none";
        sorpresa.style.display = "flex";

    }, 1500);

} else {

        mensajeClave.textContent =
            "Mmm... esa no es 👀 Inténtalo otra vez.";

    }

});

pista.addEventListener("click", function() {

    mensajeClave.textContent =
        "Pista: es una palabra que usamos muchísimo entre nosotros. 💛";

});
const botonFinal = document.getElementById("final");
const finalSeccion = document.querySelector(".final-seccion");

botonFinal.addEventListener("click", function() {

    document.querySelector(".detalles-seccion").style.display = "none";

    finalSeccion.style.display = "flex";

});
const verFinal = document.getElementById("ver-final");
const finalDecorado = document.getElementById("final-decorado");

verFinal.addEventListener("click", function() {

    document.getElementById("sorpresa-final").style.display = "none";

    finalDecorado.style.display = "flex";

});