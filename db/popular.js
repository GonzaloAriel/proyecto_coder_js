// Importaciones***************************************** */
import { agregar } from "../js/carrito.js";

// Fetch para api-movie-popular********************************** */
let pagina = 1; //Variable para poder paginar si hay muchas peliculas.

const urlMoviePopular = `https://api.themoviedb.org/3/movie/popular?api_key=fdf26679693d20fd9a0cc49b2cc4a9a9&language=es-MX&page=${pagina}`;

fetch(urlMoviePopular)
  .then(response => response.json())
  .then(data => {

    localStorage.setItem("peliculaID", JSON.stringify(data.results)); //guardamos como JSON en almacenamiento local.
  })

///renderizar las cards**********************************
export function renderizarPopular(arrayMovie) {
  arrayMovie.forEach((item) => {
    let div = document.createElement("div");

    div.innerHTML = `
        <div class="card" style="width: 12rem;">
          <img src="https://image.tmdb.org/t/p/w500/${item.poster_path}" class="card-img-top" alt="iamgen-${item.original_title}">
          <div class="card-body">
          </div>
            <h2 class="titulo_card"> ${item.title}
            <button class="boton_comprar" id="boton${item.id}"> Comprar
            </button>
        </div>
      `;
    contenido.append(div)

    let boton = document.getElementById(`boton${item.id}`);
    boton.addEventListener("click", () => agregar(item.id, item.title));
  });
}
