

let carrito = []; 

//Productos disponibles
const productos = [
  {id: 1, nombre: 'Chaqueta Vintage amarilla',  precio: 72.00, img: 'imagenes/Chaqueta.jpg', cantidad:1}, 
  {id: 2,nombre: 'Cardigan Vintage', precio: 25.00, img: 'imagenes/Prod2.jpg' , cantidad:1},
  {id: 3,nombre: 'Chaqueta Vintage negra', precio: 50.00, img: 'imagenes/Prod7.jpg', cantidad:1},
  {id: 4, nombre: 'Abrigo Vintage', precio: 35.00, img: 'imagenes/Prod4.jpg', cantidad:1},
  {id: 5, nombre: 'Pantalón Vintage 80s',precio: 40.00, img: 'imagenes/Prod3.jpg', cantidad:1},
  {id: 6, nombre: 'Pantalón Vintage 90s', precio: 15.00, img: 'imagenes/Prod4.jpg', cantidad:1},
  {id: 7, nombre: 'Pantalón Vintage azul', precio: 15.00, img: 'imagenes/Prod9.jpg', cantidad:1},
  {id: 8, nombre: 'Pantalón Vintage rosa',precio: 18.00, img: 'imagenes/Prod10.jpg', cantidad:1},
  {id: 9, nombre: 'Zapatillas de lona', precio: 119.99, img: 'imagenes/Prod5.jpg', cantidad:1},
  {id: 10, nombre: 'Deportivas', precio: 99.99, img: 'imagenes/Prod6.jpg', cantidad:1},
  {id: 11, nombre: 'Botas', precio: 145.00, img: 'imagenes/Prod11.jpg', cantidad:1},
  {id: 12, nombre: 'Zapatos', precio: 240.00, img: 'imagenes/Prod12.jpg', cantidad:1},
]

function carritoVacio(){
  var cuerpoModal = document.getElementById("cuerpo-modal"); 
  if(carrito.length === 0){ 
    cuerpoModal.innerHTML = '<p> Su cesta esta vacía</p>'

  }
}

function buscarProductoenCarrito(id){
  var enCarrito = false; 
  for(let i = 0; i < carrito.length; i++){
    const prod = carrito[i]; 
    if(prod.id === id){
      enCarrito = true;  
    }
  }

  return enCarrito;
  
}

/* TODO añadir un subtotal a la línea e incluir descuentos */

function addCarrito(id){
   
    var tbody = document.getElementById("cuerpoTabla"); 
    var producto = productos.find(prod => prod.id === id); 
    var valorCarrito = document.getElementById("carritoTotal"); 
    var boton = document.getElementById("botonadd" + producto.id); 

    boton.innerHTML="Añadiendo..."; 
    setTimeout(function() {
      boton.innerHTML = "Añadir al carrito"; 
    }, 1500);  

    if (buscarProductoenCarrito(id) === true){
       
      
      var cantidadProducto = document.getElementById("cantidadProd" + producto.id); 
    
      producto.cantidad += 1;
      cantidadProducto.innerText = producto.cantidad; 

    }
    else {
      
      carrito.push(producto); 
      var filaProducto = '<tr id="prod'+ producto.id + '"><td><img class="imgProd" src="' + producto.img + '"></td><td id="nombreProd">' + producto.nombre + '</td><td id="precioProd">' + producto.precio + '€ </td><td id="cantidadProd"><button class="botonCarrito" onclick="restarProd('+ producto.id + ')">-</button><spam id="cantidadProd'+ producto.id +'">' + producto.cantidad + '</spam><button class="botonCarrito" onclick="addMasProd('+ producto.id + ')">+</button>'  + '</td><td><img src="imagenes/x.png" class="imgCerrar" onclick="eliminarDelCarrito('+ producto.id + ')"></tr>'
      tbody.innerHTML += filaProducto; 
    }

    const preciosTotales = carrito.map(prod => prod.precio * prod.cantidad); 
    valorCarrito.innerText = preciosTotales.reduce((accumulator, currentValue) => accumulator + currentValue, 0); 
    

   
}

function addMasProd(id){
  var valorCarrito = document.getElementById("carritoTotal"); 
  var productoCarrito = carrito.find(prod => prod.id === id);
  var cantidad = document.getElementById("cantidadProd" + productoCarrito.id);
  productoCarrito.cantidad += 1; 
  cantidad.innerText = productoCarrito.cantidad; 
  const preciosTotales = carrito.map(prod => prod.precio * prod.cantidad); 
  valorCarrito.innerText = preciosTotales.reduce((accumulator, currentValue) => accumulator + currentValue, 0); 
}



function restarProd(id){
  var valorCarrito = document.getElementById("carritoTotal"); 
  var productoCarrito = carrito.find(prod => prod.id === id);
  var cantidad = document.getElementById("cantidadProd" + productoCarrito.id);

  if(productoCarrito.cantidad === 1){ //Cantidad minima del producto es 1
    console.log("Cantidad mínima alcanzada")
  }
  else {
    productoCarrito.cantidad -= 1; 
    cantidad.innerText = productoCarrito.cantidad; 
    const preciosTotales = carrito.map(prod => prod.precio * prod.cantidad); 
    valorCarrito.innerText = preciosTotales.reduce((accumulator, currentValue) => accumulator + currentValue, 0); 
}
  }
  

function eliminarDelCarrito(id){
  var valorCarrito = document.getElementById("carritoTotal"); //Global deberia ser
  var indice = carrito.indexOf(carrito.find(prod => prod.id === id)); 
  var productoCarrito = carrito.find(prod => prod.id === id);
  var tableRow = document.getElementById("prod" + id);
  tableRow.remove(); 
  carrito.splice(indice, 1); 
  productoCarrito.cantidad = 1; 
  const preciosTotales = carrito.map(prod => prod.precio * prod.cantidad); 
  valorCarrito.innerText = preciosTotales.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
}


function aplicarDescuento() {
  var carritoTotal = document.getElementById("carritoTotal").innerText;
  carritoTotal = carritoTotal - (carritoTotal * 0.35);
  document.getElementById("carritoTotal").innerText = parseTo2(carritoTotal)
  alert("DESCUENTO DEL 35% APLICADO A LA CESTA");
  document.getElementById("mi-imagen").style.display = "none";
  return carritoTotal;
}

function parseTo2(num) {
  return parseFloat((Math.round(num * 100) / 100).toFixed(2));
}

////////////////////mover imagen
window.onload = function(){
  moverImagen();
}
function moverImagen(){
  const imgElement = document.getElementById("mi-imagen"); // obtiene el elemento de imagen

  let x = 0; // coordenada x de la imagen
  let y = 0; // coordenada y de la imagen
  let velocidadX = 3; // velocidad de movimiento en el eje x
  let velocidadY = 3; // velocidad de movimiento en el eje y

  function moverImagen() {
    // obtiene el ancho y alto de la pantalla
    const anchoPantalla = window.innerWidth;
    const altoPantalla = window.innerHeight;

    // obtiene el ancho y alto de la imagen
    const anchoImagen = imgElement.offsetWidth;
    const altoImagen = imgElement.offsetHeight;

    // mueve la imagen en la dirección indicada por las velocidades
    x += velocidadX;
    y += velocidadY;

    // si la imagen llega al borde de la pantalla, invierte la velocidad para que rebote
    if (x + anchoImagen > anchoPantalla || x < 0) {
      velocidadX = -velocidadX;
    }
    if (y + altoImagen > altoPantalla || y < 0) {
      velocidadY = -velocidadY;
    }

    // actualiza la posición de la imagen
    imgElement.style.top = y + "px";
    imgElement.style.left = x + "px";
  }

  // mueve la imagen cada 10 milisegundos (10 veces por segundo)
  const intervalId = setInterval(moverImagen, 10);

  setTimeout(function() {
    clearInterval(intervalId);
    imgElement.style.display = "none";
  }, 20000);
}












