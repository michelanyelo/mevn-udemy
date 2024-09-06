// Objetos

const productos = {
    // key: value
    nombre: "Celular",
    precio: 250000,
    disponible: true
}

// como acceder a los valores
console.table(productos)
console.table(productos.nombre)
console.table(productos['precio'])

// destructuring
const { nombre, precio, disponible } = productos
console.log(nombre)
console.log(precio)
console.log(disponible)

// si algo no existe
const { categoria } = productos
// categoria no existe en el objeto
console.log(categoria) // undefined

// objeto literal
const autenticado = true
const usuario = "Miguel"
const newObjecto = {
    autenticado,
    usuario
}
console.table(newObjecto)
