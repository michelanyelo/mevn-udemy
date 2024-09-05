// Tipos de datos

// Undefined
let cliente
console.log(typeof cliente)

// Boolean
const descuento = true
console.log(typeof descuento)

// Number
const precio = 100
console.log(typeof precio)
const temperatura = 20.30
console.log(typeof temperatura)
const negativo = -1
console.log(typeof negativo)

// Strings
const nombre = "Miguel"
const descripcion = "Monitor de 20 pulgadas"
console.log(typeof nombre)
console.log(typeof descripcion)

// Symbol (son unicos)
const simbolo = Symbol("hola")
const segundoSimbolo = Symbol(1)
console.log(typeof simbolo)
console.log(typeof segundoSimbolo)
console.log(simbolo === segundoSimbolo)

// Objetos
const producto = { nombre: "Monitor", precio: 100 }
const numeros = [1, 2, 3]
console.log(typeof producto)
console.log(typeof numeros)