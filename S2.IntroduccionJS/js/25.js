// Eventos

const heading = document.querySelector(".heading")
const enlaces = document.querySelectorAll(".navegacion a")

heading.addEventListener("dblclick", () => {
    heading.textContent = "Nuevo heading con click event"
})

enlaces.forEach(enlace => {
    enlace.addEventListener("click", (e) => {
        e.preventDefault()
        console.log(e.target)
        console.log("diste click")
        enlace.style.background = "red"
    })
})
