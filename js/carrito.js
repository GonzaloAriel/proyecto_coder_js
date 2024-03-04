// Importaciones***************************************** */
import { imgCarrito } from "../db/img_carrito.js";
// ****************************************************** */

export function renderizarCarrito() {
    const divCarrito = document.getElementById("icono_carrito");

    // Vacía el contenido del div.
    divCarrito.innerHTML = "";

    // Codigo para renderizar el carrito
    const compras = JSON.parse(localStorage.getItem("pelisCarrito"));

    if (compras.length !== 0) {
        divCarrito.innerHTML = `
        <div class="dropdown">
        ${compras.length}
                    <button class="btn btn-black dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                        <img src="${imgCarrito}" alt="imagen_carrito">
                    </button>
                    <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuButton">
                        <!-- Opciones del menú desplegable -->
                    </ul>
                </div>
                `;
    }

    // Iterar sobre el array de compras y crear opciones de menú para cada película
    const baseUrl = "https://image.tmdb.org/t/p/w200/";

    compras.forEach((compra) => {
        const dropdownMenu = document.querySelector(`.dropdown-menu`);
        const dropdownItem = document.createElement(`div`);
        dropdownItem.className = `dropdown-item`;

        const img = document.createElement(`img`);
        img.src = baseUrl + compra.poster_path;
        img.alt = `Imagen de ${compra.title}`;
        img.style.maxWidth = "120px";
        img.className = "img-hover";

        const title = document.createElement(`div`);
        title.textContent = `${compra.title}`;
        title.className = "title";

        const price = document.createElement(`p`);
        price.textContent = `$ ${parseFloat(compra.vote_count).toFixed(2)}`;
        price.className = "dropdown-price";
        price.className = "price";

        const removeBtn = document.createElement('button');
        removeBtn.textContent = `Eliminar`;
        removeBtn.className = "removeBtn";
        removeBtn.addEventListener("click", () => {
            quitarProductoDelCarrito(compra.id);
        });

        dropdownItem.appendChild(img);
        dropdownItem.appendChild(title);
        dropdownItem.appendChild(price);
        dropdownItem.appendChild(removeBtn);

        dropdownMenu.appendChild(dropdownItem);
    });
}
///****************************************************************************** */
/// Funcion para agregar al "carrito"
let carrito = [];

JSON.parse(localStorage.getItem("pelisCarrito")) || localStorage.setItem("pelisCarrito", JSON.stringify(carrito));

carrito = JSON.parse(localStorage.getItem("pelisCarrito"));

export const agregar = (id, titulo) => {
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


                carrito.push(peli); //agregamos el producto al carrito

                localStorage.setItem("pelisCarrito", JSON.stringify(carrito)); //guardamos como JSON en almacenamiento local.

                swal("Pelicula agregada al carrito!", {
                    icon: "success",
                });

                //Funcion para renderizar carrito.
                renderizarCarrito();
            }
        });
};

///****************************************************************************** */
// Funcion borrar compra del carrito:
export function quitarProductoDelCarrito(id) {
    //convertimos el JSON del array completo del local storage para poder buscar el id de la pelicula
    const pelisEnStorage = JSON.parse(localStorage.getItem("pelisCarrito"));

    //buscamos en el array
    const peli = pelisEnStorage.findIndex((item) => item.id === id);

    // Quitar la película del carrito
    if (peli !== -1) {
        carrito.splice(peli, 1);

        localStorage.setItem("pelisCarrito", JSON.stringify(carrito)); //guardamos como JSON en almacenamiento local.
    }
    // Actualizar el DOM para reflejar el cambio
    renderizarCarrito();
    location.reload();
}



