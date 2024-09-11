// Scope o alcance

let precio = 300

// aqui se reescribe precio
function unaFuncion() {
    precio = 100
    console.log(precio)
}

// aqui NO se reescribe precio
function unaFuncion() {
    let precio = 100
    console.log(precio)
}

unaFuncion()
console.log(precio)