// Objetos parte 2
const producto = {
    nombre: "tablet",
    precio: 500,
    disponible: true
}

//  no permite hacer cambios al objeto const
// Object.freeze(producto)

// permite hacer cambios, no eliminar, no agregar
// Object.seal(producto)

// reescribir un valor
producto.nombre = "Monitor Curvo"

// añadir un valor
producto.stock = 100

// eliminar
// delete producto.disponible

// eliminar propiedades con spread
const { disponible, precio, ...producto2} = producto

// copiar un objeto
const producto3 = { ...producto }

console.log(producto)
console.log(producto2)
console.log(producto3)