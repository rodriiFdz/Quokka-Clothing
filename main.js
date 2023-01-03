
//Variable carrito
const carrito  =[]; 

//Productos disponibles

const productos = [
  {
    id: 1, 
    nombre: 'Chaqueta Vintage amarilla', 
    precio: 72.00, 
  }, 
  {
    id: 2, 
    nombre: 'Cardigan Vintage', 
    precio: 25.00, 
  },
  {
    id: 3, 
    nombre: 'Chaqueta Vintage negra', 
    precio: 50.00, 
  },
  {
    id: 4, 
    nombre: 'Abrigo Vintage', 
    precio: 35.00, 
  },
  {
    id: 5, 
    nombre: 'Pantalón Vintage 80s', 
    precio: 40.00, 
  },
  {
    id: 6, 
    nombre: 'Pantalón Vintage 90s', 
    precio: 15.00, 
  },
  {
    id: 7, 
    nombre: 'Pantalón Vintage azul', 
    precio: 15.00, 
  },
  {
    id: 8, 
    nombre: 'Pantalón Vintage rosa', 
    precio: 18.00, 
  },
  {
    id: 9, 
    nombre: 'Zapatillas de lona', 
    precio: 119.99, 
  },
  {
    id: 10, 
    nombre: 'Deportivas', 
    precio: 99.99, 
  },
  {
    id: 11, 
    nombre: 'Botas', 
    precio: 145.00, 
  },
  {
    id: 12, 
    nombre: 'Zapatos', 
    precio: 240.00, 
  },
  
]





function addCarrito(id){
    var tbody = document.getElementById("cuerpoTabla");
    var filaProducto = '<tr><td>' + nombre + '</td><td>' + precio + '  euros </td><td></tr>'; 
      tbody.innerHTML += filaProducto; 
    var total = document.getElementById("carritoTotal");
    total.innerText = parseFloat(total.innerText) + parseFloat(precio);
}


/*function comprobarDni(dni){
var resto = numero %23;

var letras = [‘T’, ‘R’, ‘W’, ‘A’, ‘G’, ‘M’, ‘Y’, ‘F’, ‘P’, ‘D’, ‘X’, ‘B’, ‘N’, ‘J’, ‘Z’, ‘S’, ‘Q’, ‘V’, ‘H’, ‘L’, ‘C’, ‘K’, ‘E’, ‘T’]; 

letras = letras.join("");

var encontrado = letras.charAt(resto);

if(letra_dni == encontrado) {
alert("El dni insertado " + numero + "con letra " + letra_dni + " es CORRECTO");
}
else{
alert("El dni insertado " + numero + "con letra " + letra_dni + " es INCORRECTO");
}

}*/
