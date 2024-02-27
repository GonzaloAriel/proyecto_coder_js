import { cargarPeliculasPopulares } from "../db/popular.js";
import { renderizarCarrito } from "../js/carrito.js";

// Llamada a la función para cargar las películas populares
cargarPeliculasPopulares();

renderizarCarrito();
