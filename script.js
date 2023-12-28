document.addEventListener("DOMContentLoaded", function () {
  const textContainer = document.getElementById("animatedText");
  const text = textContainer.innerText;

  // Limpiar el contenido del contenedor de texto
  textContainer.innerHTML = "";

  // Recorrer cada caracter del texto original
  for (let i = 0; i < text.length; i++) {
    // Crear un nuevo elemento span para cada caracter
    const span = document.createElement("span");
    span.textContent = text[i];

    // Agregar la clase "jump" a las consonantes
    if (isConsonant(text[i])) {
      span.classList.add("jump");
    }

    // Agregar el elemento span al contenedor
    textContainer.appendChild(span);
  }
});

// Función para verificar si un caracter es una consonante
function isConsonant(char) {
  return /[AIOEbcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ]/.test(char);
}
