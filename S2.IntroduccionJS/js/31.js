const url = "https://jsonplaceholder.typicode.com/comments"

const consultarAPI = async () => {
        try {
            const respuesta = await fetch(url)
            const resultado = await respuesta.json()
            console.log(resultado)
        } catch (error) {
            console.error(error)
        } finally {
            console.log("finalizada la consulta")
        }
}


consultarAPI()