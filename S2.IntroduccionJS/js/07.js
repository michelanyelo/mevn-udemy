// Unir dos objetos

const producto = {
    nombre: 'Monitor 20 pulgadas',
    precio: 300,
    disponible: true
}

const cliente = {
    nombre: 'Miguel',
    premium: true
}

// const nuevoObjeto = Object.assign(cliente, producto)
// console.log(nuevoObjeto)

const nuevoObjetoMejorado = {
    producto,
    cliente
}

console.log(nuevoObjetoMejorado)