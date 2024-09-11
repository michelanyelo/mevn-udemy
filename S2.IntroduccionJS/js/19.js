// Operador || (or) y && (and)
// El operador || devuelve true si al menos una de las condiciones es verdadera
console.log(true || false); // true
console.log(false || true); // true
console.log(false || false); // false
// El operador && devuelve true si todas las condiciones son verdaderas
console.log(true && false); // false
console.log(false && true); // false
console.log(true && true); // true


const disponible = 1000
const total = 500
const tarjeta = true

if (tarjeta && disponible > total) {
    console.log("Si puedes pagar")
} else {
    console.log("No puedes pagar, ponte a lavar los platos")
}