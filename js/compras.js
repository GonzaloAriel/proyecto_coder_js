import { renderizarCarrito, quitarProductoDelCarrito } from "../js/carrito.js";
///****************************************************************************
actualizarCompras();

 function actualizarCompras() {
    const compras = JSON.parse(localStorage.getItem("pelisCarrito"));
    renderizarCardCarrito(compras);
    renderizarCarrito();

    ///renderizar las cards del local storage**********************************
    function renderizarCardCarrito(arrayMovie) {
        arrayMovie.forEach((item) => {
            let div = document.createElement("div");

            div.innerHTML = `
          <div class="card" style="width: 12rem;">
            <img src="https://image.tmdb.org/t/p/w500/${item.poster_path}" class="card-img-top" alt="iamgen-${item.original_title}">
              <h2 class="titulo_card"> ${item.title}
              <p class="precio_card">$ ${parseFloat(item.vote_count).toFixed(2)}</p>
              <button class="boton_comprar" id="boton${item.id}"> Eliminar</button>
          </div>
        `;
            contenido.append(div);

            let boton = document.getElementById(`boton${item.id}`);
            boton.addEventListener("click", async () => {
                await quitarProductoDelCarrito(item.id);
                div.innerHTML = "";
            });
        })
    }
}





