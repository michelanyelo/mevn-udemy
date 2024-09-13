const url = "https://jsonplaceholder.typicode.com/comments"

const consultarAPI = () => {
    console.log("desde consultar API")
    fetch(url)
        .then((respuesta) => respuesta.json())
        .then(resultado => console.log(resultado))
        .catch(error => console.log(error))
        .finally(() => {
            console.log("finalizada la consulta")
        })
}


consultarAPI()