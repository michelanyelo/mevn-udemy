// Destructuring de arrays

const tecnologias = ['Vue.js', 'Python', 'Java', 'CSS', 'HTML']

// extraer algunos lenguajes
// const vuejs = tecnologias[0]
// const css = tecnologias[3]
// console.log(vuejs, css)

// extraer con destruct
const [vuejs, , java] = tecnologias
console.log(vuejs)
console.log(java)