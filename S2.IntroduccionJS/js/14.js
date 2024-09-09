// Function expression

// suma 
// da error porque considera la funcion como una variable
// que aun no está inicializada
const suma = function sumar(a = 23, b = 55) {
    console.log(a + b)
}

suma