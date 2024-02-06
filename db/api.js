
///fetch para api-movie********************************** */
let pagina = 1;

const urlMoviePopular = `https://api.themoviedb.org/3/movie/popular?api_key=fdf26679693d20fd9a0cc49b2cc4a9a9&language=es-MX&page=${pagina}`;

fetch(urlMoviePopular)
  .then(response => response.json())
  .then(data => {
  
    renderizarPopular(data.results);

    localStorage.setItem("peliculaID", JSON.stringify(data.results)); //guardamos como JSON en almacenamiento local.
  })
///************************************************** */
const carrito = [];

//funcion para agregar al "carrito"
const agregar = (id, titulo) => {
  //Libreria para mostrar en un cartel si esta seguro de comprar.
  swal({
    title:`Desea comprar la pelicula ${titulo}`,
    text:`Precione "Ok" para ir agregar al carrito, ò "Cancel" para rechazar`,
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

      carrito.push(peli); //agregamos el producto al carrito
      
      localStorage.setItem("pelisCarrito", JSON.stringify(carrito)); //guardamos como JSON en almacenamiento local.
      
      swal("Pelicula agregada al carrito!", {
        icon: "success",
      });
    } 
  });

  console.log(carrito);//control para ver si se paso bien el array.
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
///renderizar compras carrito**********************************
const divCarrito = document.getElementById("icono_carrito");

const compras = JSON.parse(localStorage.getItem("pelisCarrito"));
    
divCarrito.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-cart4"
    viewBox="0 0 16 16">
    <path
        d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5M3.14 5l.5 2H5V5zM6 5v2h2V5zm3 0v2h2V5zm3 0v2h1.36l.5-2zm1.11 3H12v2h.61zM11 8H9v2h2zM8 8H6v2h2zM5 8H3.89l.5 2H5zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0m9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0" />
    </svg> ${compras.length}`;

    divCarrito.append(divCarrito);



