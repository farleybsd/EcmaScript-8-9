(async function asyncListaLivros() {
    try {

        const resposta = await fetch('https://www.googleapis.com/books/v1/volumes?q=javascript')
        const dados = await resposta.json()

        const items = dados.items.map(item => item)
        const informacoes = items.map(item => item.volumeInfo)
        const titulos = informacoes.map(info => info.title)
        redenrizarLista("asyncListaLivro", titulos)


    } catch (erro) {
        console.error('Sai Correno' + erro)
    } finally {
        console.log('A funcao asynAwayt esta Ok!')
    }


})()

