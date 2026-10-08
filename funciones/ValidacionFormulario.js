document.addEventListener("DOMContentLoaded", function() {
    const formulario = document.getElementById("formContacto");
    const mensajeError = document.getElementById("error-mensaje");

    formulario.addEventListener("submit", function(evento) {
        
        mensajeError.textContent = "";

        const nombre = document.getElementById("nombre").value.trim();
        const apellidos = document.getElementById("apellidos").value.trim();

        if (nombre === "" || apellidos === "") {
            evento.preventDefault();
            mensajeError.textContent = "Por favor, completa los campos de Nombre y Apellidos.";
            return;
        }

        const generoM = document.getElementById("radioM").checked;
        const generoF = document.getElementById("radioF").checked;

        if (!generoM && !generoF) {
            evento.preventDefault();
            mensajeError.textContent = "Por favor, selecciona una opción de Género.";
            return;
        }

        const estudios = document.getElementById("estudios").value;
        if (estudios === "") {
            evento.preventDefault();
            mensajeError.textContent = "Por favor, selecciona tu nivel de estudios actuales.";
            return;
        }

    });
});