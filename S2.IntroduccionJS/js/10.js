// Metodos de arrays
const tecnologias = ['Vue.js', 'Python', 'Java', 'CSS']

// añadir al final
tecnologias.push('JavaScript')

// añador al principio
tecnologias.unshift('HTML')

// añadir sin mutar
const nuevasTecnologias = ['PHP', ...tecnologias, 'React']
console.log(nuevasTecnologias)

// eliminar del final
tecnologias.pop()

// eliminar del principio
tecnologias.shift()

// eliminar del medio
tecnologias.splice(1, 1)
console.log(tecnologias)

// filtrar
const tecnoFinales = nuevasTecnologias.filter(function(tech){
    // console.log(tech)
    return tech != 'HTML'
})

console.log(tecnoFinales)
