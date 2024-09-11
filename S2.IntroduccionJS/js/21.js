// Optional chaining o encadenamiento opcional
// Si el objeto no tiene la propiedad, devuelve undefined
const alumno = {
    name: 'Miguel',
    clase: 'Programacion 1',
    aprobado: false
}
setTimeout(() => {
    alumno.examenes = {
        examen1: 6,
        examen2: 5,
        examen3: 6
    }
    console.log(alumno.examenes?.examen1)

}, 3000)
console.log(alumno.examenes?.examen1)