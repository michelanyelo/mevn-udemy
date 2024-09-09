// Iteradores de arrays

const tecnologias = ['Vue.js', 'Python', 'Java', 'CSS', 'HTML']

// for each
const arrayForEach = tecnologias.forEach(function (tech, i) {
    // console.log(`Tecnologia ${i + 1}: ${tech}`)
    return tech
})

// map
const arrayMap = tecnologias.map(function (tech, i) {
    // console.log(`Tecnologia ${i + 1}: ${tech}`)
    return tech
})

console.log(arrayForEach)
console.log(arrayMap)