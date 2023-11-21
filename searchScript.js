const API_KEY = "AIzaSyAcEZpRZgWdszRnpZWskz7JXkUdxu4cbp4";
const CX = "46329d2f3a2ab48a6";

// Variable para mantener un contador de resultados ya mostrados
let resultsShown = 0;

function performGoogleSearch() {
  const searchInput = document.getElementById("searchInput").value;
  const searchResultsContainer = document.getElementById("searchResults");

  // Formatear la cadena de búsqueda para incluir el sitio específico de LinkedIn
  const formattedSearch = `site:linkedin.com/in ${searchInput}`;

  // Construir la URL de la API de Google Custom Search
  const apiUrl = `https://www.googleapis.com/customsearch/v1?q=${encodeURIComponent(
    formattedSearch
  )}&key=${API_KEY}&cx=${CX}&start=${resultsShown}`;

  // Realizar la solicitud a la API de Google Custom Search
  fetch(apiUrl)
    .then((response) => {
      if (!response.ok) {
        throw new Error(
          `La solicitud no fue exitosa. Código de estado: ${response.status}`
        );
      }
      return response.json();
    })
    .then((data) => {
      // Procesar los resultados y mostrarlos en el contenedor
      const items = data.items || [];
      const resultsHtml = items
        .map(
          (item) =>
            `<p><a href="${item.link}" style="color: blue;" target="_blank">${item.title}</a></p><p style="color: blue;">${item.link}</p>`
        )
        .join("");

      // Agregar los nuevos resultados al contenedor sin reemplazar los anteriores
      searchResultsContainer.innerHTML = resultsHtml;

      // Incrementar el contador de resultados mostrados para la paginación
      resultsShown += 10;
    })
    .catch((error) => {
      console.error("Error al realizar la búsqueda:", error);
    });
}

function logout() {
  // Redirige al usuario a index.html al cerrar sesión
  window.location.href = "index.html";
}

function clearSearch() {
  // Limpiar el campo de búsqueda
  document.getElementById("searchInput").value = "";
  // Limpiar los resultados de búsqueda
  document.getElementById("searchResults").innerHTML = "";
}
