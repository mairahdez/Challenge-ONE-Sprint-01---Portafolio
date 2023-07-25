// validaciones.js

document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".formcontacto__form");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    // const para obtener los valores de los campos del formulario
    const nombre = form.nombre.value.trim();
    const email = form.email.value.trim();
    const asunto = form.asunto.value.trim();
    const mensaje = form.mensaje.value.trim();

    // Validamos que los campos no estén vacíos
    if (nombre === "" || email === "" || asunto === "" || mensaje === "") {
      alert("Por favor, completa todos los campos.");
      return;
    }

    // Validamos el formato del correo electrónico usando una expresión regular
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Por favor, ingresa una dirección de correo electrónico válida.");
      return;
    }

    // Si todos los campos están correctamente llenados, se puede enviar el formulario
    alert("Formulario enviado correctamente.");
    form.reset();
  });
});

  
  
  
  