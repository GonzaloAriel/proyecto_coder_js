// Importaciones***************************************** */
import { renderizarCarrito } from "../js/carrito.js";

// Fetch para api-movie********************************** */
let pagina = 1; //Variable para poder paginar si hay muchas peliculas.

const urlMoviePopular = `https://api.themoviedb.org/3/movie/popular?api_key=fdf26679693d20fd9a0cc49b2cc4a9a9&language=es-MX&page=${pagina}`;

fetch(urlMoviePopular)
  .then(response => response.json())
  .then(data => {

    renderizarPopular(data.results);

    localStorage.setItem("peliculaID", JSON.stringify(data.results)); //guardamos como JSON en almacenamiento local.
  })
///************************************************** */


// Funcion para agregar al "carrito"
let carrito = [];

JSON.parse(localStorage.getItem("pelisCarrito")) || localStorage.setItem("pelisCarrito", JSON.stringify(carrito));

carrito = JSON.parse(localStorage.getItem("pelisCarrito"));

const agregar = (id, titulo) => {
  //Libreria para mostrar en un cartel si esta seguro de comprar.
  swal({
    title: `Desea comprar la pelicula ${titulo}`,
    text: `Precione "Ok" para ir agregar al carrito, ò "Cancel" para rechazar`,
    icon: "info",
    buttons: true,
    dangerMode: true,
  })
    .then((respuesta) => {
      if (respuesta) {
        //convertimos el JSON del array completo del local storage para poder buscar el id de la pelicula
        const pelisEnStorage = JSON.parse(localStorage.getItem("peliculaID"));

        //buscamos en el array
        const peli = pelisEnStorage.find((item) => item.id === id);


        carrito.push(peli); //agregamos el producto al carrit

        localStorage.setItem("pelisCarrito", JSON.stringify(carrito)); //guardamos como JSON en almacenamiento local.

        swal("Pelicula agregada al carrito!", {
          icon: "success",
        });

        //Funcion para renderizar carrito.
        renderizarCarrito();
      }
    });
};

/*const ticketEnStorage = JSON.parse(localStorage.getItem("pelicula"));//convertimos el archivo JSON en un array para luego usarlo. */

///renderizar las cards**********************************
function renderizarPopular(arrayMovie) {

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




