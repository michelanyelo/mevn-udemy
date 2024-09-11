const heading = document.querySelector(".heading")
// cambiar contenido
heading.textContent = "Un nuevo heading"

// quitar clase
heading.classList.remove("text-4xl")

const inputNombre = document.querySelector("#nombre")
inputNombre.value = "Valor por default desde js"
console.log(inputNombre)

const enlaces = document.querySelectorAll(".navegacion a")
enlaces.forEach(enlace => enlace.textContent = "Nuevo enlace")
console.log(enlaces)
