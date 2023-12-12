///Programa para venta de ticket para una funcion de teatro, cine, o evento.


let contarVentas = 0;
const capacidadSala = 70;
let cantidadTicket = 0;
let total = 0;


function recaudacion(ticket, precioXpelicula) {
    return ticket * precioXpelicula;
}

///****************************************************** */

cantidadTicket = Number(prompt("Ingrese cantidad de ticket vendido para el evento(menor o igual a 70):"));

while (contarVentas < capacidadSala && cantidadTicket > 0 && cantidadTicket <= 70) {
    contarVentas += cantidadTicket;

    cantidadTicket = Number(prompt("Ingrese cantidad de ticket o '0' para cerrar la funcion"));

    if (cantidadTicket === 0) {
        break;
    }
}

///Salidas************************************************* */

if (contarVentas > 0 && contarVentas <= 70) 
{
    alert("Se cerro la funcion o se supero la capacidad! seguir para ver recaudacion: ");

    alert("Total butacas vendidas: " + contarVentas);

    let precio = Number(prompt("Ingrese precio actual de la funcion"));

    total = recaudacion(contarVentas, precio);

    alert(`Recaudacion total: ${total}$`);
}
else
{
    alert("Refresque la pagina para comenzar otra vez!!")
}
