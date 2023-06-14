/*estilo boton de pagar en pago.html*/
const formPago = document.getElementById("form-pago");

formPago.addEventListener("submit", (event) => {
    event.preventDefault()
    Swal.fire({
        icon: 'info',
        title: 'Su compra ha sido exitosa',
        text: 'Dentro de las proximas dos horas llegara su pedido a su domicilio',
        text: '¡Muchas gracias por su compra en Super Núñez!'
    })
})