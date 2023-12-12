// script.js

function toggleText(elementId) {
  var element = document.getElementById(elementId);

  // Verifica se o elemento existe
  if (element) {
    // Alterna a visibilidade do texto usando a propriedade style.display
    if (element.style.display === "none" || element.style.display === "") {
      element.style.display = "block";
    } else {
      element.style.display = "none";
    }
  }
}
