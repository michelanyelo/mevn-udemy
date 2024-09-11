const inputNombre = document.querySelector("#nombre")
const inputPassword = document.querySelector("#password")
const heading = document.querySelector(".heading")

inputNombre.addEventListener("input", (e) => {
    heading.textContent = e.target.value
    // console.log(e.target.value)
    // console.log(e.target.value.length)
    // console.log("Escribiendo...")
})

inputPassword.addEventListener("input", () => {
    inputPassword.type = "text"
    setTimeout(() => {
        inputPassword.type = "password"
    }, 200);
})