// Destructuring de 2 o mas objetos

const producto = {
    nombre: 'Monitor 20 pulgadas',
    precio: 300,
    disponible: true
}

const cliente = {
    nombre: 'Miguel',
    premium: true
}


// esto da error
// const {nombre} = producto
// const {nombre} = cliente

// manera correcta de renombrar
// no modifican al objeto original
const { nombre: nombreProducto } = producto
const { nombre: nombreCliente } = cliente

console.log(nombreProducto)
console.log(nombreCliente)
console.log(producto)