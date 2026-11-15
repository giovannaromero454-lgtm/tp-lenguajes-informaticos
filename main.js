function mostrarContenido() {
    let contenido = document.getElementById("contenidoExtra");
    let boton = document.getElementById("botonVerMás");

    if (contenido.hidden) {
        contenido.hidden = false;
        boton.textContent = "Ver menos"; }
        else {
            contenido.hidden = true;
            boton.textContent = "Ver más"
        }
}
const boton = document.getElementById("modoOscuro");

boton.addEventListener("click", function() {

    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        boton.textContent = "Modo claro";
    } else {
        boton.textContent = "Modo oscuro";
    }

});
