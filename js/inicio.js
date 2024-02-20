// Importaciones***************************************** */
import { renderizarCarrito, agregar } from "../js/carrito.js";
import { renderizarPopular } from "../db/popular.js";

///Api-popular******************************************** */
const popular = JSON.parse(localStorage.getItem("peliculaID"));
renderizarPopular(popular);

renderizarCarrito();


