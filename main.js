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
