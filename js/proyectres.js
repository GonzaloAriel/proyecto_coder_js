///Base de datos:***************************************

let listaEventos = [
  { id: 1, img: "./img/El_chico_y_la_garza.jpg", nombre: "El niño y la garza", precio: 3500, dia: "viernes" },
  { id: 2, img: "./img/Godzilla-vs-Kong-Poster-1.webp", nombre: "Godzilla vs Kong", precio: 2000, dia: "martes" },
  { id: 3, img: "./img/the-batman-2022-i122125.jpg", nombre: "The Batman", precio: 2000, dia: "miercoles" },
  { id: 4, img: "./img/rapido y furioso 10.jpg", nombre: "Rapido y furioso X", precio: 4500, dia: "sabado" },
  { id: 5, img: "./img/el hombre araña 3.webp", nombre: "El hombre araña III", precio: 2000, dia: "domingo" },
  { id: 6, img: "./img/star war.jpg", nombre: "Star war", precio: 22000, dia: "jueves" }
];

let horarios = [
  { id: 1, hora1: "17:30", hora2: "21:30" },
  { id: 2, hora1: "17:30", hora2: "21:30" },
  { id: 3, hora1: "17:30", hora2: "21:30" },
  { id: 4, hora1: "17:30", hora2: "21:30" },
  { id: 5, hora1: "17:30", hora2: "21:30" },
  { id: 6, hora1: "17:30", hora2: "21:30" }
];

const carrito = [];

listaEventos.forEach((item) => {
  let div = document.createElement("div");

  div.innerHTML = `
  <div class="card" style="width: 12rem;">
            <img src="${item.img}" class="card-img-top" alt="iamgen-${item.id}">
            <div class="card-body">
                <p class="card-text">Aca descripcion de la pelicula o sinopsis</p>
            </div>
  </div>
  <h2> ${item.nombre}
  <b> ${item.precio}$
  <button id="boton${item.id}"> Horarios </button>
  `;

  document.body.append(div)
})