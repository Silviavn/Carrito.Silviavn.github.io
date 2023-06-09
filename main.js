let productos = [];
let carrito = [];

const obtenerProductos = async () => {
    const response = await fetch('./productos.json')
    
    productos = await response.json()
    verProductos()
}
const verProductos = () => {
    productos.forEach(producto => {
        const card = document.createElement("div");
        card.classList.add("col-xl-3", "col-md-6", "col-xs-12");
        card.innerHTML = `
                                <div class="card">
                                <img src="${producto.imagen}" class="card-img-top imgProductos" alt="${producto.nombre}">
                                <div class="card-body">
                                    <h5> ${producto.nombre}</h5>
                                    <p> ${producto.precio}</p>
                                    <button id="boton${producto.id}" class="btn colorBoton"> Agregar al carrito</button>
                                </div>
                             </div>
                             `
        contenedorProductos.appendChild(card);

        //Agregar productos al carrito: 
        const boton = document.getElementById(`boton${producto.id}`);
        boton.addEventListener("click", () => {
            agregarAlCarrito(producto.id);
        })

    })
}
const agregarAlCarrito = (id) => {
    const productoEnCarrito = carrito.find(producto => producto.id === id);
    if (productoEnCarrito) {
        productoEnCarrito.cantidad++;
    } else {
        const producto = productos.find(producto => producto.id === id);
        producto.cantidad = 1
        carrito.push(producto);
    }
    calcularTotal();
    mostrarCarrito()
    //Verificamos por consola:
    console.log(carrito);

}
const mostrarCarrito = () => {
    contenedorCarrito.innerHTML = "",
        carrito.forEach(producto => {

            const card = document.createElement("div");
            card.classList.add("col-xl-3", "col-md-6", "col-xs-12");
            card.innerHTML = `
                                <div class="card">
                                <img src="${producto.imagen}" class="card-img-top imgProductos" alt="${producto.nombre}">
                                <div class="card-body">
                                    <h5> ${producto.nombre}</h5>
                                    <p> ${producto.precio}</p>
                                    <p> ${producto.cantidad}</p>
                                    <button id="eliminar${producto.id}" class="btn colorBoton">Eliminar</button>
                                </div>
                             </div>
                             `
            contenedorCarrito.appendChild(card);

            /*Eliminamos productos seleccionados de nuestro carrito*/
            const boton = document.getElementById(`eliminar${producto.id}`);
            boton.addEventListener("click", () => {
                eliminarDelCarrito(producto.id);
            })
        })
    calcularTotal();
    actualizarLocalStorage();
}
const eliminarDelCarrito = (id) => {
    const producto = carrito.find(producto => producto.id === id);
    const indice = carrito.lastIndexOf(producto);
    carrito.splice(indice, 1);
    mostrarCarrito();
}
const actualizarLocalStorage = () => {
    localStorage.setItem('carrito', JSON.stringify(carrito));
}
const calcularTotal = () => {
    const total = document.getElementById("total");
    let totalCompra = 0;
    carrito.forEach(producto => {
        totalCompra += producto.precio * producto.cantidad
    })
    total.innerHTML = `Total: $${totalCompra}`;
}
const eliminarTodoElCarrito = () => {
    carrito = [];
    mostrarCarrito();
}

// -----------------
const contenedorProductos = document.getElementById("contenedorProductos");
const contenedorCarrito = document.getElementById("contenedorCarrito");
const vemosCarrito = document.getElementById("vemosCarrito");
const vaciarCarrito = document.getElementById("vaciarCarrito");


vemosCarrito.addEventListener("click", () => {
    mostrarCarrito();

})

vaciarCarrito.addEventListener("click", () => {
    eliminarTodoElCarrito();
})

/*estilo boton finalizar compra de index.html*/
const botonFin = document.getElementById("botonFin");

botonFin.addEventListener("click", () => {

    Swal.fire({
        icon: 'success',
        title: 'Productos en su carrito',
        text: 'Hemos guardado exitosamente sus productos en nuestro carrito',
        footer: '<a href="pago.html">Continuar con el pago</a>'
})
  })
  /*estilo boton de pagar en pago.html*/
  const botonPago = document.getElementById("botonPago");

botonPago.addEventListener("click", () => {

    Swal.fire({
        icon: 'info',
        title: 'Su compra a sido exitosa',
        text: 'Dentro de las proximas dos horas llegara su pedido a su domicilio',
        text: '¡Muchas gracias por su compra en Super Núñez!'
})
  })


window.addEventListener('DOMContentLoaded', () => {
    const carritoGuardado = localStorage.getItem('carrito');
    if (carritoGuardado) {
        carrito = JSON.parse(carritoGuardado);
        mostrarCarrito();
    }
    obtenerProductos()
})









