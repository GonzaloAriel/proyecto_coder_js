let lista_eventos = [
  { nombre: "Chucky 3D", precio: 3500, entradas: 50 },
  { nombre: "Godzilla", precio: 2000, entradas: 65 },
  { nombre: "Loco por Mery", precio: 2000, entradas: 30 },
  { nombre: "Rapido y furioso 15 4D", precio: 4500, entradas: 70 },
  { nombre: "El hombre araña III", precio: 2000, entradas: 70 },
  { nombre: "Floricienta en vivo!", precio: 22000, entradas: 70 }
];



const selectElement = document.querySelector(".form-select");

selectElement.addEventListener("change", function (
) {
  if (this.value === "1") {
    const listElement = document.createElement("ul");
    lista_eventos.forEach(item => {
      const listItem = document.createElement("li");
      listItem.textContent = `${item.nombre}:  ${item.precio}$`;
      listElement.appendChild(listItem);
    });
    document.body.appendChild(listElement);
  }

  if(this.value === "2"){
    document.body.removeChild(listElement);
  }
});
