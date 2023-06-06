/*Creamos los objetos de nuestro carrito*/
class Producto {
    constructor(id, nombre, precio, img) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.img = img;
        this.cantidad = 1;
    }
}
/*Ponemos los productos con su respectivo id, nombre, precio y la imagen del producto*/
const pan = new Producto(1, "Pan", 2000, "https://res.cloudinary.com/dmicwl879/image/upload/v1684832066/proyecto%20js%20carrito/pan_i3yapn.jpg");

const aceite = new Producto(2, "Aceite", 2200, "https://res.cloudinary.com/dmicwl879/image/upload/v1684832338/proyecto%20js%20carrito/aceiteolivagirasol_thnmli.webp");

const arroz = new Producto(3, "Arroz", 990, "https://res.cloudinary.com/dmicwl879/image/upload/v1684832369/proyecto%20js%20carrito/1634751167325_j008us.jpg");

const fideos = new Producto(4, "Fideos", 1000, "https://res.cloudinary.com/dmicwl879/image/upload/v1684832385/proyecto%20js%20carrito/istockphoto-185065945-612x612_hwlcnk.jpg");

const salsa = new Producto(5, "salsa", 550, "https://res.cloudinary.com/dmicwl879/image/upload/v1684832398/proyecto%20js%20carrito/salsa-de-tomate-casera-des_wwoleo.jpg");

const azucar = new Producto(6, "Azucar", 900, "https://res.cloudinary.com/dmicwl879/image/upload/v1684920671/azucar_rjenli.jpg");

const sal = new Producto(7, "Sal", 400, "https://res.cloudinary.com/dmicwl879/image/upload/v1684832491/proyecto%20js%20carrito/sal_r93qd5.jpg");

const galletas = new Producto(8, "Galletas", 1700, "https://res.cloudinary.com/dmicwl879/image/upload/v1684832548/proyecto%20js%20carrito/galletas_w4ux66.jpg");

const mani = new Producto(9, "Mani", 200, "https://res.cloudinary.com/dmicwl879/image/upload/v1684832610/proyecto%20js%20carrito/mani_c0tcgh.webp");

const bebida = new Producto(10, "Bebida", 3000, "https://res.cloudinary.com/dmicwl879/image/upload/v1684832660/proyecto%20js%20carrito/bebida_cyp3te.png");

const mayonesa = new Producto(11, "Mayonesa", 5000, "https://res.cloudinary.com/dmicwl879/image/upload/v1684832762/proyecto%20js%20carrito/mayonesa_oja5dq.jpg");

const chocolate = new Producto(12, "Chocolate", 7000, "https://res.cloudinary.com/dmicwl879/image/upload/v1684832803/proyecto%20js%20carrito/tipos-chocolate-t_gdxjru.jpg");

const sopa = new Producto(13, "Sopa", 1300, "https://res.cloudinary.com/dmicwl879/image/upload/v1684832885/proyecto%20js%20carrito/descarga_nliw5p.jpg");

const margarina = new Producto(14, "Margarina", 1100, "https://res.cloudinary.com/dmicwl879/image/upload/v1684832933/proyecto%20js%20carrito/margarina_aygamo.webp");

const verduras = new Producto(15, "Verduras", 300, "https://res.cloudinary.com/dmicwl879/image/upload/v1684834565/proyecto%20js%20carrito/verduras_ibzjuc.jpg");

const croquetas = new Producto(16, "Croquetas", 1400, "https://res.cloudinary.com/dmicwl879/image/upload/v1684834638/proyecto%20js%20carrito/croquetas_ekfhgt.jpg");

const yogurt = new Producto(17, "Yogurt", 150, "https://res.cloudinary.com/dmicwl879/image/upload/v1684834720/proyecto%20js%20carrito/gogurt_ln5ubo.jpg");

const jugo = new Producto(18, "Jugo", 200, "https://res.cloudinary.com/dmicwl879/image/upload/v1684834773/proyecto%20js%20carrito/images_yvarss.jpg");

const cereal = new Producto(19, "Cereal", 6000, "https://res.cloudinary.com/dmicwl879/image/upload/v1684834865/proyecto%20js%20carrito/variedad-de-cereales-fr%C3%ADos-de-arriba-86142204_qkvnbm.jpg");

const helado = new Producto(20, "Helado", 5400, "https://res.cloudinary.com/dmicwl879/image/upload/v1684834871/proyecto%20js%20carrito/helado_usbomx.webp");

const jamon = new Producto(21, "Jamon", 1000, "https://res.cloudinary.com/dmicwl879/image/upload/v1684834946/proyecto%20js%20carrito/jamon_e1majo.webp");

const cloro = new Producto(22, "Cloro", 3000, "https://res.cloudinary.com/dmicwl879/image/upload/v1684835010/proyecto%20js%20carrito/cloro_usyrri.webp");

const confort = new Producto(23, "Confort", 2000, "https://res.cloudinary.com/dmicwl879/image/upload/v1684835093/proyecto%20js%20carrito/confort_rrlmv0.jpg");

const pañales = new Producto(24, "Pañales", 22.000, "https://res.cloudinary.com/dmicwl879/image/upload/v1684835096/proyecto%20js%20carrito/pa%C3%B1ales_hdkajc.jpg");

const detergente = new Producto(25, "Detergente", 5000, "https://res.cloudinary.com/dmicwl879/image/upload/v1684835171/proyecto%20js%20carrito/detergente_kkp8yv.jpg");

const cafe = new Producto(26, "Cafe", 3000, "https://res.cloudinary.com/dmicwl879/image/upload/v1684835172/proyecto%20js%20carrito/cafe_ipdbyk.jpg");

const te = new Producto(27, "Te", 2000, "https://res.cloudinary.com/dmicwl879/image/upload/v1684835247/proyecto%20js%20carrito/descarga_1_llrc48.jpg");

const atun = new Producto(28, "Atun", 1400, "https://res.cloudinary.com/dmicwl879/image/upload/v1684835252/proyecto%20js%20carrito/descarga_2_z58e4g.jpg");

const porotos = new Producto(29, "Porotos", 860, "https://res.cloudinary.com/dmicwl879/image/upload/v1684835320/proyecto%20js%20carrito/vitamina_porotos_ncz6fp.jpg");

const lentejas = new Producto(30, "Lentejas", 1200, "https://res.cloudinary.com/dmicwl879/image/upload/v1684835322/proyecto%20js%20carrito/lentejas_ctlh12.jpg");

const leche = new Producto(31, "Leche", 990, "https://res.cloudinary.com/dmicwl879/image/upload/v1684922065/leche_hebbz3.jpg");

const congelados = new Producto(32, "Productos congelados", 1000, "https://res.cloudinary.com/dmicwl879/image/upload/v1684922190/congelados_obmqs0.png")

/*Nuestros productos en un array con todo nuestro catalogo de productos*/

/*Luego este array de productos lo reutilizo para mostrar los productos en el html que comienza en la linea*/
const productos = [pan, aceite, arroz, fideos, salsa, azucar, sal, galletas, mani, bebida, mayonesa, chocolate, sopa, margarina, verduras, croquetas, yogurt, jugo, cereal, helado, jamon, cloro, confort, pañales, detergente, cafe, te, atun, porotos, lentejas, leche, congelados];


/*Creamos un array de nuestro carrito es un nuevo array donde tendra los productos seleccionados por el cliente y comienza vacio*/

let carrito = [];

/*DOM:Mostramos los productos*/

const contenedorProductos = document.getElementById("contenedorProductos");

/*Luego de esto creamos la funcion para mostrar los productos en una card de boostrap por cada elemento de nuestro array en total 30 con producto en singular y utlizamos el metodo add para agregar clases de css de boostrap para las grids 1:10*/

const verProductos = () => {
    productos.forEach(producto => {
        const card = document.createElement("div");
        card.classList.add("col-xl-3", "col-md-6", "col-xs-12");
        card.innerHTML = `
                                <div class="card">
                                <img src="${producto.img}" class="card-img-top imgProductos" alt="${producto.nombre}">
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

verProductos();
//Creamos la función de agregar al carrito en singular: 

const agregarAlCarrito = (id) => {
    const productoEnCarrito = carrito.find(producto => producto.id === id);
    if (productoEnCarrito) {
        productoEnCarrito.cantidad++;
    } else {
        const producto = productos.find(producto => producto.id === id);
        carrito.push(producto);
    }
    calcularTotal();
    mostrarCarrito()
    //Verificamos por consola:
    console.log(carrito);

}
localStorage.getItem("AgregamosAlCarrito");

/*Mostramos nuestro carrito de compras */
const contenedorCarrito = document.getElementById("contenedorCarrito");
const vemosCarrito = document.getElementById("vemosCarrito");

vemosCarrito.addEventListener("click", () => {
    mostrarCarrito();

})

/*Luego generamos la funcion para mostrar el carrito de compras*/

const mostrarCarrito = () => {
    contenedorCarrito.innerHTML = "",
        carrito.forEach(producto => {

            const card = document.createElement("div");
            card.classList.add("col-xl-3", "col-md-6", "col-xs-12");
            card.innerHTML = `
                                <div class="card">
                                <img src="${producto.img}" class="card-img-top imgProductos" alt="${producto.nombre}">
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

/*funcion para eliminar el producto de nuestro carrito */

const eliminarDelCarrito = (id) => {
    const producto = carrito.find(producto => producto.id === id);
    const indice = carrito.lastIndexOf(producto);
    carrito.splice(indice, 1);
    mostrarCarrito();
}
/*Calculamos nuestro total en la compra */
const total = document.getElementById("total");
const calcularTotal = () => {
    let totalCompra = 0;
    carrito.forEach(producto => {
        totalCompra += producto.precio * producto.cantidad
    })
    total.innerHTML = `Total: $${totalCompra}`;
}
/*vaciamos el carrito de compras*/
const vaciarCarrito = document.getElementById("vaciarCarrito");

vaciarCarrito.addEventListener("click", () => {
    eliminarTodoElCarrito();
})

/*La funcion de eliminar el carrito*/

const eliminarTodoElCarrito = () => {
    carrito = [];
    mostrarCarrito();
}
/*boton estilizado con sweeta de finalizar compra*/
/*const boton = document.getElementById("boton");
boton.addEventListener("click", () => {
    Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Productos guardados',
        showConfirmButton: true,
        timer: 2500,
      })
})*/


// Cargar el carrito desde el Local Storage al iniciar la página
window.addEventListener('DOMContentLoaded', () => {
    const carritoGuardado = localStorage.getItem('carrito');
    if (carritoGuardado) {
        carrito = JSON.parse(carritoGuardado);
        mostrarCarrito();
    }
});

// Actualizar el Local Storage cada vez que se modifique el carrito
const actualizarLocalStorage = () => {
    localStorage.setItem('carrito', JSON.stringify(carrito));
};




