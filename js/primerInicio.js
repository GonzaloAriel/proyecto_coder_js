///************************************************** */
/*let listaEventos = JSON.parse(localStorage.getItem("peliculas"))

const ticket = [];
const contenido = document.getElementById("contenido");

//funcion para agregar al array "ticket".
const agregar = (id) => {
  //buscamos la pelicula por su id.
  const pelicula = listaEventos.find((item) => item.id === id);
  alert(`
    Id: ${pelicula.id}
    Nombre: ${pelicula.nombre}
    Precio: ${pelicula.precio}
  `);
  ticket.push(pelicula); //agregamos el producto al carrito
  localStorage.setItem("pelicula", JSON.stringify(ticket)); //guardamos como JSON en almacenamiento local.

  const ticketEnStorage = JSON.parse(localStorage.getItem("pelicula"));//convertimos el archivo JSON en un array  

  console.log(ticketEnStorage);//control para ver si se paso bien el array.

};

///renderizar las cards**********************************

listaEventos.forEach((item) => {
  let div = document.createElement("div");

  div.innerHTML = `
    <div class="card" style="width: 12rem;">
      <img src="${item.img}" class="card-img-top" alt="iamgen-${item.id}">
      <div class="card-body">
        <p class="card-text">Aca descripcion de la pelicula o sinopsis</p>
      </div>
        <h2 class="titulo_card"> ${item.nombre}
        <b class="titulo_card"> ${item.precio}$
        <button class="boton_comprar" id="boton${item.id}"> Comprar
        </button>
    </div>
  `;
  contenido.append(div)

  let boton = document.getElementById(`boton${item.id}`);
  boton.addEventListener("click", () => agregar(item.id));
});
*/


