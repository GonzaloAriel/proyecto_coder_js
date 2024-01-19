///Programa para administrar ventas de ticket para una funcion de teatro, cine, o evento.

//variables de entrada



let seleccion = 0;

//Array de eventos
let lista_eventos = [
    { nombre: "Chucky 3D", precio: 3500, entradas: 50 },
    { nombre: "Godzilla", precio: 2000, entradas: 65 },
    { nombre: "Loco por Mery", precio: 2000, entradas: 30 },
    { nombre: "Rapido y furioso 15 4D", precio: 4500, entradas: 70 },
    { nombre: "El hombre araña III", precio: 2000, entradas: 70 },
    { nombre: "Floricienta en vivo!", precio: 22000, entradas: 70 }
];

///Funcion constructora de eventos:************************ */

class Evento {
    constructor(nombre, precio, entradas) {

        this.nombre = nombre;
        this.precio = precio;
        this.entradas = entradas;
    }
}

///Funciones: ********************************************** */

function recaudacion(ticket, precioXpelicula) {
    return ticket * precioXpelicula;
}

function agregar() {

    let nombre = prompt("Ingrese el nombre del evento: ");
    let precio = Number(prompt("Ingrese su precio: "));
    let entradas = Number(prompt("Ingrese total entradas vendidas: "));


    const evento_nuevo = new Evento(nombre, precio, entradas);

    return evento_nuevo;
}

function mostrar(lista_eventos) {

    // Opcion 1(lista un evento a la vez):*******************

    /* for (let i = 0; i < lista_eventos.length; i++) {

        alert("Evento: " + lista_eventos[i].nombre +
            "\nPrecio: $" + lista_eventos[i].precio);
    }*/

    // Opcion 2(lista todos los eventos):******************** 

    const lista = lista_eventos.map(item => `${item.nombre}:  ${item.precio} $`).join("\n");

    alert(lista);
}

function recaudacion1(lista_eventos) {

    let sumar = 0;
    let mensaje = "Eventos y recaudacion:\n\n";
    for (let i = 0; i < lista_eventos.length; i++) {
        mensaje += `Evento: ${lista_eventos[i].nombre}// Total: ${lista_eventos[i].entradas * lista_eventos[i].precio} \n`;
        sumar += lista_eventos[i].precio * lista_eventos[i].entradas;
    }

    alert(mensaje);
}

function recaudacion2(lista_eventos) {

    let sumar = 0;
    let mensaje = "Lista de eventos y recaudacion:\n\n";
    for (let i = 0; i < lista_eventos.length; i++) {
        mensaje += `Evento: ${lista_eventos[i].nombre}// Precio: $${lista_eventos[i].precio}// Total entradas: ${lista_eventos[i].entradas} \n`;
        sumar += lista_eventos[i].precio * lista_eventos[i].entradas;
    }
    mensaje += `\nTotal recaudacion: ${sumar}`;
    alert(mensaje);
}

function borrar_evento(lista_eventos) {

    //Muestra lista de eventos
    let lista = lista_eventos.map(item => `${item.nombre}`).join("\n");

    //Captura evento ingresado por el usuario
    let eliminar = (prompt(lista + "\n\n ATENCION!!\n Ingrese el nombre del evento que desea borrar ò cualquier caracter para salir:\n"));

    //Validamos que el evento este en el array por que splice borra lo que quiere con cualquier valor ingresado por teclado.
    let validar = lista_eventos.some((item) => item.nombre === eliminar);

    //Inicia el ciclo para eliminar el evento.
    while (eliminar !== "s" && validar === true) {

        //Aca busca el indice dentro del array del evento ingresado por el usuario.
        let indice = lista_eventos.findIndex((even) => even.nombre === eliminar);

        //Borra el evento con el indice obtenido.
        lista_eventos.splice(indice, 1);

        alert(`${eliminar} eliminado!`);

        //Inicia o prepara la siguiente vuelta del ciclo
        lista = lista_eventos.map(item => `${item.nombre}`).join("\n");

        eliminar = (prompt(lista + "\n\n ATENCION!!\n Escriba el nombre del evento que desea borrar ò cualquier caracter para salir:\n"));

        validar = lista_eventos.some((even) => even === eliminar);
    }

}


///Inicio********************************************** */
//Menu principal

while (seleccion != -1) {
    seleccion = Number(prompt("Eliga una opcion:\n 1-Agregar Evento\n 2-Eventos y precios\n 3-Recaudacion por evento\n 4-Recaudacion total\n 5-Borrar evento\n 6-Borrar lista de eventos\n 7-Salir "));
    switch (seleccion) {
        case 1: lista_eventos.push(agregar());
            break;
        case 2: mostrar(lista_eventos);
            break;
        case 3: recaudacion1(lista_eventos);
            break;
        case 4: recaudacion2(lista_eventos);
            break;
        case 5: borrar_evento(lista_eventos);
            break;
        case 6: borrar_listaDeEventos(lista_eventos); //Falta desarollar 
            break;
        case 7: seleccion = -1;
            break;
        default:
           /* alert("Opción no válida. Introduce un número válido.");*/

    }
}


///****************************************************** */

const selectElement = document.querySelector("select[name=options]");
selectElement.addEventListener("change", handleOptionSelection);

function handleOptionSelection(event) {
    const selectedOption = event.target.value;
    // Aquí, agregue código para manejar la opción seleccionada, como mostrar campos de entrada adicionales o realizar una acción.
}










