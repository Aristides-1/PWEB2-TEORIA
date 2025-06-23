

document.getElementById("searchInput").addEventListener("input", function () {
  const query = this.value;
  
  //Condicional menos de 2 no hay busqueda
  if (query.length < 2) return;
  
  //Llama a la API del backend
  fetch(`/api/movies?title=${encodeURIComponent(query)}`)
    .then((response) => response.json())
    .then((data) => {
      const results = document.getElementById("results");
      results.innerHTML = "";
      
      //Muestra de resultados
      data.forEach((movie) => {
        const li = document.createElement("li");
        li.textContent = `${movie.title} (${movie.year})`;
        results.appendChild(li);
      });
    })
    .catch((error) => {
      console.error("Error:", error); //Imprime errores
    });
});