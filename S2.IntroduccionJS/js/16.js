// Array methods con arrow function

const tecnologias = ['Vuejs', 'Python', 'Java', 'CSS', 'HTML']
const numeros = [10, 20, 30]

// includes (comprueba si existe o no retornando boolean)
let resultado = tecnologias.includes('CSS')

// retorna el indice del elemento encontrado
resultado = tecnologias.findIndex(tech => tech === 'CSS')

// some (comprueba una condicion y retorna boolean)
resultado = numeros.some(numero => numero > 25)

// find (comprueba la existencia retornando el valor encontrado, sino undefined)
resultado = numeros.find(numero => numero === 10)

// every (retorna true con la primera coincidencia, sino false)
resultado = numeros.every(numero => numero > 10)

// reduce (retorna un acumulado)
resultado = numeros.reduce((total, numero) => numero + total, 0)

// filter
resultado = tecnologias.filter(tech => tech !== 'Vuejs')
console.log(resultado)