// Operador de comparacion

// Igual a
const numero1 = 20
const numero2 = "20"

if (numero1 == numero2) {
    console.log("Son iguales")
} else {
    console.log("No son iguales")
}

// El operador == compara el valor de las variables, no el tipo de dato.
// En este caso, el valor de las variables es el mismo, pero el tipo de dato es
// diferente (un número y una cadena de texto), por lo que el resultado es verdadero.
// Si queremos comparar el valor y el tipo de dato, debemos usar el operador
// === (triple igual).
// Igual a, pero con tipo de dato
const numero3 = 20
const numero4 = "20"
if (numero3 === Number(numero4)) {
    console.log("Son iguales en valor y tipo de dato")
} else {
    console.log("No son iguales en valor o tipo de dato")
}