// script.js

document.addEventListener("DOMContentLoaded", function () {
  // Adiciona um ouvinte de evento ao botão
  var toggleButton = document.getElementById("toggleButton");
  toggleButton.addEventListener("click", function () {
    // Obtém o elemento de texto pelo ID
    var texto1 = document.getElementById("texto1");

    // Alterna a visibilidade do texto usando a propriedade style.display
    if (texto1.style.display === "none" || texto1.style.display === "") {
      texto1.style.display = "block";
    } else {
      texto1.style.display = "none";
    }
  });
});
