// Template strings o concatenacion

const cliente = "Miguel"
const saldo = 400
console.log(`El cliente ${cliente}`)

const producto = {
    nombre: 'Monitor 20 pulgadas',
    precio: 300,
    disponible: true
}

const {nombre: nombreProducto, precio} = producto
console.log(`El Producto: ${nombreProducto} tiene un precio de $${precio}`)