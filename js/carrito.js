// Renderizar compras carrito*********************************
export function renderizarCarrito() {
    const divCarrito = document.getElementById("icono_carrito");

    // Vacía el contenido del div.
    divCarrito.innerHTML = "";

    // Codigo para renderizar el carrito
    const compras = JSON.parse(localStorage.getItem("pelisCarrito"));

    divCarrito.innerHTML = `
    ${compras.length}
    <div class="dropdown">
        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
        <img src="./img/carrito.png" alt="imagen_carrito">
        </button>
        <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuButton">
            <li><a class="dropdown-item" href="#">Opción 1</a></li>
            <li><a class="dropdown-item" href="#">Opción 2</a></li>
            <li><a class="dropdown-item" href="#">Opción 3</a></li>
        </ul>
    </div>    
`;
    divCarrito.append(divCarrito);
}

// Funcion para agregar al "carrito"***************************
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


