(
    function listaLivrosJavaScript() {

        return fetch('https://www.googleapis.com/books/v1/volumes?q=javascript')
            .then(data => data.json())
            .then(data => data.items.map(item => item))
            .then(data => data.map(item => item.volumeInfo))
            .then(data => data.map(item => item.title))
            .then(data => redenrizarLista("promiseListalivo",data))
            .catch(error => console.error('Eita:' + error))
            .finally(()=> console.log('Execultado com Sucesso!'))
    }

)()