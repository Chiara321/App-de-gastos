const pagos = [];
const usuarios = [];
const listado = document.getElementById("list-group");
const cuadroResultado = document.getElementById("total");
const usuario = document.getElementById("nombre");
const pago = document.getElementById("pago");

function repartir() {
    agregarGastoAListas();
    ultimoAPantalla();
    mostrarPagoIndividualHTML();
}

function agregarGastoAListas(){
    usuarios.push(usuario.value);
    pagos.push(pago.value);
}

function ultimoAPantalla(){
    const li = document.createElement("li");
    const text = document.createTextNode(`${usuario.value}: Pagó $ ${pago.value}`);
    li.classList.add("list-group-item")

    li.appendChild(text);
    listado.appendChild(li);
}

function sumarPagos(pagos){
    let suma = 0;

    for (let pago of pagos){
        suma += parseInt(pago);
    }
    return suma;
}

function mostrarPagoIndividualHTML(){

    const total = sumarPagos(pagos);
    const pagoIndividual = total / usuarios.length;
    cuadroResultado.innerText = `Total: ${total}
                                 A cada uno le toca pagar: ${pagoIndividual.toFixed(2)}`;
}